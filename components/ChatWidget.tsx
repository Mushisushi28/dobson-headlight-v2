
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Calendar, ArrowRight, Camera, Sparkles } from 'lucide-react';
import { getChatResponse } from '../services/geminiService';
import { Message, ChatAction } from '../types';

interface ChatWidgetProps {
  onBookClick?: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Hi! I'm DobsonAI. Ready to restore your headlights? I can help you book an appointment or get an instant quote.",
      actions: [
        { label: 'Get a Quote', type: 'scroll', value: 'contact' },
        { label: 'Book Online', type: 'book', value: 'booking' }
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const parseActions = (text: string): { cleanText: string, actions: ChatAction[] } => {
    const actionRegex = /\[ACTIONS:\s*(\[.*?\])\s*\]/g;
    const match = actionRegex.exec(text);

    if (match && match[1]) {
      try {
        const actions = JSON.parse(match[1]);
        const cleanText = text.replace(actionRegex, '').trim();
        return { cleanText, actions };
      } catch (e) {
        console.error("Failed to parse actions:", e);
      }
    }
    return { cleanText: text, actions: [] };
  };

  const handleAction = (action: ChatAction) => {
    if (action.type === 'link') {
      window.open(action.value, '_blank');
    } else if (action.type === 'scroll') {
      const el = document.getElementById(action.value);
      if (el) {
        setIsOpen(false);
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else if (action.type === 'text') {
      setInput(action.value);
      // Optional: Auto-submit here if desired
    } else if (action.type === 'book') {
      if (onBookClick) {
        setIsOpen(false); // Close chat when booking starts
        onBookClick();
      } else {
        // Fallback if no handler provided
        window.open('https://koalendar.com/e/meet-with-isaac-dobson', '_blank');
      }
    }
  };

  const handleSend = async (overrideInput?: string) => {
    const finalInput = overrideInput || input;
    if (!finalInput.trim() || isLoading) return;

    const userMsg = finalInput;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));
    history.push({ role: 'user', parts: [{ text: userMsg }] });

    const rawResponse = await getChatResponse(history);
    const { cleanText, actions } = parseActions(rawResponse);

    setMessages(prev => [...prev, { role: 'model', text: cleanText, actions }]);
    setIsLoading(false);
  };

  useEffect(() => {
    // Auto-trigger 'book' actions
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.role === 'model' && lastMessage.actions) {
        const bookAction = lastMessage.actions.find(a => a.type === 'book');
        if (bookAction) {
          const timer = setTimeout(() => {
            handleAction(bookAction);
          }, 800); // Slight delay for natural feel
          return () => clearTimeout(timer);
        }
      }
    }
  }, [messages]);

  useEffect(() => {
    // Auto-open after delay only on desktop
    if (window.innerWidth >= 768) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[350px] sm:w-[400px] h-[600px] max-h-[85vh] rounded-[2rem] shadow-[0_32px_128px_-32px_rgba(0,0,0,0.5)] border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-500 ease-out">
          <div className="p-5 bg-slate-950 text-white flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl translate-x-10 -translate-y-10"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center text-black shadow-lg shadow-yellow-400/20">
                <Bot className="w-7 h-7" />
              </div>
              <div>
                <div className="font-black text-base uppercase tracking-tight">DobsonAI</div>
                <div className="text-[10px] text-yellow-400 flex items-center gap-1.5 font-black uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span> Headlight Specialist
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-colors relative z-10">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-6 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-[1.5rem] text-sm font-semibold leading-relaxed shadow-sm whitespace-pre-wrap ${m.role === 'user'
                  ? 'bg-slate-950 text-white rounded-tr-none'
                  : 'bg-white text-slate-800 border border-slate-200/60 rounded-tl-none'
                  }`}>
                  {m.text}
                </div>

                {m.actions && m.actions.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3 max-w-[90%]">
                    {m.actions.map((action, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAction(action)}
                        className="flex items-center gap-2 px-4 py-2.5 bg-yellow-400 text-black text-xs font-black rounded-xl hover:bg-yellow-300 transition-all shadow-md shadow-yellow-400/10 uppercase tracking-tight active:scale-95"
                      >
                        {action.type === 'link' ? <Calendar size={14} /> :
                          action.type === 'book' ? <Calendar size={14} /> :
                            action.label.toLowerCase().includes('quote') ? <Camera size={14} /> :
                              <ArrowRight size={14} />}
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-200/60 flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question..."
                className="flex-grow p-4 bg-slate-100 border-none rounded-2xl text-sm font-bold placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-400 transition-all outline-none"
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading}
                className="w-12 h-12 flex items-center justify-center bg-slate-950 text-white rounded-2xl hover:bg-black transition-colors disabled:opacity-50 shadow-xl shadow-slate-900/10"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[9px] text-center text-slate-400 mt-3 font-black uppercase tracking-[0.2em]">
              Instant Local Response
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 bg-yellow-400 text-black rounded-[2rem] shadow-[0_20px_50px_rgba(250,204,21,0.3)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all hover:bg-yellow-300 group relative border-4 border-slate-950"
        >
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-950 text-white rounded-full flex items-center justify-center border-4 border-white animate-bounce shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          </div>
          <MessageCircle className="w-9 h-9" />
          <span className="absolute right-full mr-6 bg-slate-950 text-white text-[10px] font-black py-3 px-5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-2xl uppercase tracking-[0.2em] translate-x-10 group-hover:translate-x-0">
            Need a Quote?
          </span>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
