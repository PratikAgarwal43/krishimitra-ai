import { NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "YOUR_FALLBACK_KEY_IF_NEEDED";

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Structured prompt for agricultural expertise
    const systemPrompt = "You are Krishi Expert, a professional agricultural AI assistant. Provide scientific, accurate, and practical farming advice in Hindi and English. Focus on pest control, irrigation, fertilizers, and market trends.";

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          { role: "user", parts: [{ text: `${systemPrompt}\n\nUser: ${message}` }] }
        ]
      })
    });

    if (!response.ok) {
      throw new Error("Gemini API connection failed");
    }

    const data = await response.json();
    const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, I'm having trouble analyzing that right now. Please try again.";

    return NextResponse.json({ reply: botReply });
  } catch (error: any) {
    console.error("AI API Error:", error);
    return NextResponse.json({ error: "Network Error: AI service is currently unavailable. Please check your connection." }, { status: 500 });
  }
}
