import fs from 'fs';
import { NextResponse } from 'next/server';

export async function GET() {
  const url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzNiNDEwNzE3Nzg0MDRjZDg4MGE1NjJhNGU3NDVkOGFhEgsSBxCPxsC7vg4YAZIBIwoKcHJvamVjdF9pZBIVQhM3NjYwMzg0ODA1MTMzNzAzNTAx&filename=&opi=89354086";
  try {
    const res = await fetch(url);
    const text = await res.text();
    fs.writeFileSync('d:/Study/ckc_class/ckc_class/downloaded_screen.html', text);
    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message });
  }
}
