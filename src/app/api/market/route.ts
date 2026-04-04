import { NextResponse } from 'next/server';

export async function GET() {
  const marketData = {
    prices: [
      { crop: 'Potato (Jyoti)', market: 'Agra Mandi', price: 1450, unit: 'per Quintal', trend: 'up', change: 50 },
      { crop: 'Onion (Red)', market: 'Nashik Mandi', price: 2100, unit: 'per Quintal', trend: 'down', change: -120 },
      { crop: 'Wheat (Sharbati)', market: 'Indore Mandi', price: 2800, unit: 'per Quintal', trend: 'up', change: 210 },
      { crop: 'Tomato', market: 'Azadpur Mandi', price: 1800, unit: 'per Quintal', trend: 'up', change: 300 },
    ],
    recommendation: {
      action: 'Sell',
      period: 'Next 5 Days',
      reason: 'Market demand for Potatoes is peaking due to lower supply from cooling zones.'
    }
  };

  return NextResponse.json(marketData);
}
