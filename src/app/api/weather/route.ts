import { NextResponse } from 'next/server';

export async function GET() {
  // Simulating database/external API call
  const weatherData = {
    location: 'Barauli Village, Uttar Pradesh',
    current: {
      temp: 32,
      condition: 'Partly Cloudy',
      humidity: 45,
      wind: 12,
      precip: 2
    },
    hourly: [
      { time: '10 AM', temp: '28°', condition: 'Cloudy' },
      { time: '12 PM', temp: '31°', condition: 'Sunny' },
      { time: '02 PM', temp: '33°', condition: 'Sunny' },
      { time: '04 PM', temp: '30°', condition: 'Windy' },
      { time: '06 PM', temp: '27°', condition: 'Showers' },
    ],
    advisory: 'Strong winds predicted for Tuesday Evening. Shift spray schedule to Monday Late Night.'
  };

  return NextResponse.json(weatherData);
}
