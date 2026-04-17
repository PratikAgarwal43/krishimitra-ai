import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat") || "19.9975"; // Default Nashik
  const lon = searchParams.get("lon") || "73.7898";
  
  const apiKey = "c889f234751cad95b23387a5a944e161";

  try {
    // Current Weather
    const currentRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    const currentData = await currentRes.json();

    // 5 Day / 3 Hour Forecast
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    const forecastData = await forecastRes.json();

    if (!currentRes.ok || !forecastRes.ok) {
      throw new Error("Failed to fetch weather data");
    }

    return NextResponse.json({
      current: {
        temp: Math.round(currentData.main.temp),
        condition: currentData.weather[0].main,
        description: currentData.weather[0].description,
        humidity: currentData.main.humidity,
        windSpeed: currentData.wind.speed,
        location: currentData.name,
      },
      forecast: forecastData.list.filter((_: any, i: number) => i % 8 === 0).map((item: any) => ({
        date: new Date(item.dt * 1000).toLocaleDateString("hi-IN", { weekday: "short" }),
        temp: Math.round(item.main.temp),
        condition: item.weather[0].main,
      })),
      alerts: currentData.weather[0].main === "Rain" ? ["Heavy rain expected in your area"] : []
    });
  } catch (error) {
    console.error("Weather API Error:", error);
    return NextResponse.json({ message: "Weather data unavailable" }, { status: 500 });
  }
}
