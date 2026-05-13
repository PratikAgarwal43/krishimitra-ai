import { NextResponse } from "next/server";

const API_KEY = "c889f234751cad95b23387a5a944e161"; // Production Key

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat") || "20.5937"; // Default India
  const lon = searchParams.get("lon") || "78.9629";

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    
    if (!res.ok) throw new Error("Failed to fetch weather");
    
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
