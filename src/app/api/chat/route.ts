import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI("AIzaSyA3LzlxP5SGD5sEvsw5NR1kFsYiMLv8odI");

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: "You are KrishiMitra AI, an expert Agricultural Scientist and Botanical Advisor. Your goal is to provide accurate, practical, and empathetic advice to Indian farmers. You specialize in crop diseases, pest management, soil health, and market trends. Always respond in the language the user uses (Hindi, Marathi, English, etc.). Be concise and action-oriented."
    });

    const chat = model.startChat({
      history: history || [],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ 
      text: "I apologize, my network connection is weak right now. Please try asking again in a few moments." 
    }, { status: 500 });
  }
}
