import fs from 'fs';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = JSON.parse(fs.readFileSync('C:/Users/letha/.gemini/antigravity-ide/brain/d340ab3e-9219-4a16-96f6-9f0d2f97868e/.system_generated/steps/28/output.txt', 'utf8'));
  const screens = data.screens || [];
  const found = screens.filter((s: any) => (s.title || '').toLowerCase().includes('sinh viên'));
  return NextResponse.json({ screens: found.map((s: any) => ({ name: s.name, title: s.title })) });
}
