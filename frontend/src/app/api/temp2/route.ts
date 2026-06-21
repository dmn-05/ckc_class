import { NextResponse } from 'next/server';

export async function GET() {
  const url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzNiNDEwNzE3Nzg0MDRjZDg4MGE1NjJhNGU3NDVkOGFhEgsSBxCPxsC7vg4YAZIBIwoKcHJvamVjdF9pZBIVQhM3NjYwMzg0ODA1MTMzNzAzNTAx&filename=&opi=89354086";
  const res = await fetch(url);
  const text = await res.text();
  return NextResponse.json({ html: text });
}
