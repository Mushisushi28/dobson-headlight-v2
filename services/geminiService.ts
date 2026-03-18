export async function getChatResponse(messages: { role: 'user' | 'assistant', content: string }[]) {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    });
    const data = await res.json();
    return data.text as string;
  } catch (error) {
    console.error('Chat API error:', error);
    return "I'm experiencing technical difficulties. Please call or text us at 587-402-4794 for a fast quote!";
  }
}
