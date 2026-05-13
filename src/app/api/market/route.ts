import { NextResponse } from "next/server";

const API_KEY = "579b3143-6c71-460d-88b9-4796338b8137"; // India OGD Key

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const state = searchParams.get("state") || "Maharashtra";

  try {
    const res = await fetch(
      `https://api.data.gov.in/resource/9ef273fd-4441-47a0-a472-3599fef9154b?api-key=${API_KEY}&format=json&filters[state]=${state}`
    );
    
    if (!res.ok) throw new Error("Failed to fetch mandi prices");
    
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
