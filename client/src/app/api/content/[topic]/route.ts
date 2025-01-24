import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: { topic: string } }
) {
  try {
    const mdnDir = path.join(process.cwd(), 'mdn');
    const filePath = path.join(mdnDir, `${params.topic}.md`);
    
    if (!fs.existsSync(filePath)) {
      return new NextResponse('Topic not found', { status: 404 });
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    return new NextResponse(content);
  } catch (error) {
    console.error('Error reading file:', error);
    return new NextResponse('Error reading content', { status: 500 });
  }
} 