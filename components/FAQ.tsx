
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-white/10 last:border-none transition-all duration-300 ${isOpen ? 'border-l-4 border-l-yellow-400 pl-4' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group cursor-pointer"
      >
        <span className="text-lg font-black text-white uppercase tracking-tight pr-4 group-hover:text-yellow-400 transition-colors duration-300">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-yellow-400 text-black' : 'bg-white/5 text-slate-400 group-hover:bg-yellow-400/20 group-hover:text-yellow-400'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-400 font-medium leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-slate-950 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-yellow-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4 border border-white/10">
            <HelpCircle className="w-3 h-3" /> Have Questions?
          </div>
          <h2 className="text-4xl font-black text-white uppercase tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="border border-white/10 rounded-3xl p-4 md:p-10 bg-white/5">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm font-bold mb-6">Still have a question? Text Isaac directly for a fast answer.</p>
          <a
            href="tel:587-402-4794"
            className="px-8 py-4 bg-yellow-400 text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-yellow-300 transition-all duration-300 shadow-xl shadow-yellow-400/20 cursor-pointer"
          >
            587-402-4794
          </a>
        </div>

        {/* SEO keyword targeting block */}
        <div className="mt-16 p-8 bg-white/5 rounded-2xl border border-white/10">
          <p className="text-sm text-slate-500 font-medium leading-relaxed text-center">
            If you're searching for <strong className="text-slate-400">headlight restoration Lethbridge</strong>, <strong className="text-slate-400">headlight polishing Lethbridge</strong>, <strong className="text-slate-400">foggy headlight repair near me</strong>, <strong className="text-slate-400">mobile headlight restoration Southern Alberta</strong>, <strong className="text-slate-400">headlight restoration Taber</strong>, <strong className="text-slate-400">headlight restoration Cardston</strong>, <strong className="text-slate-400">headlight restoration Raymond</strong>, <strong className="text-slate-400">headlight restoration Coaldale</strong>, <strong className="text-slate-400">headlight restoration Fort Macleod</strong>, <strong className="text-slate-400">ceramic headlight coating Alberta</strong>, or <strong className="text-slate-400">yellowed headlight fix Lethbridge</strong> — you've found the right place. Dobson Headlight Restoration is Southern Alberta's #1 rated mobile headlight specialist with 47+ five-star reviews.
          </p>
          <div className="text-center mt-6">
            <a
              href="/blog/headlight-restoration-lethbridge-guide"
              className="text-yellow-400 font-black text-sm uppercase tracking-widest hover:underline cursor-pointer"
            >
              Read our complete Lethbridge headlight restoration guide →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
