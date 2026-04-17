import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const state = searchParams.get("state") || "Maharashtra";
  
  const apiKey = "579b4i4dbb6ec23bdd000001cdd394fe4faad7299f7b22ac571b";
  const resourceId = "9ef273ef-5872-4d13-acc3-967e2a96b390";

  try {
    const res = await fetch(
      `https://api.data.gov.in/resource/${resourceId}?api-key=${apiKey}&format=json&filters[state]=${state}&limit=10`
    );
    const data = await res.json();

    if (!res.ok) {
      throw new Error("Failed to fetch market data");
    }

    // Transform OGD data into our application format
    const transformedPrices = data.records.map((record: any) => ({
      crop: record.commodity,
      mandi: record.market,
      price: parseFloat(record.modal_price),
      unit: "Quintal",
      trend: Math.random() > 0.5 ? "up" : "down", // Demo trend as OGD doesn't give direct trend
      recordedAt: new Date(record.arrival_date).toISOString()
    }));

    return NextResponse.json({
      prices: transformedPrices.length > 0 ? transformedPrices : getFallbackPrices(),
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error("Market API Error:", error);
    return NextResponse.json({ 
      prices: getFallbackPrices(),
      lastUpdated: new Date().toISOString() 
    });
  }
}

function getFallbackPrices() {
  return [
    { crop: "Paddy", mandi: "Nagpur", price: 2100, unit: "Quintal", trend: "up" },
    { crop: "Cotton", mandi: "Amravati", price: 7200, unit: "Quintal", trend: "stable" },
    { crop: "Soybean", mandi: "Latur", price: 4800, unit: "Quintal", trend: "down" }
  ];
}
