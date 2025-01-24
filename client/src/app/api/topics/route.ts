import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const mdnDir = path.join(process.cwd(), 'mdn');
    const files = fs.readdirSync(mdnDir);
    
    const topics = files
      .filter(file => file.endsWith('.md'))
      .map(file => ({
        id: file.replace('.md', ''),
        name: file.replace('.md', '')
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    return NextResponse.json(topics);
  } catch (error) {
    console.error('Error reading topics:', error);
    return new NextResponse('Error reading topics', { status: 500 });
  }
} 