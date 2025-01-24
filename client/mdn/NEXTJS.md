# Next.js

## Introduction
Next.js is a React framework that enables server-side rendering, static site generation, and other advanced features for building production-ready React applications.

## Getting Started

### Project Setup
```bash
# Create new project
npx create-next-app@latest my-next-app
cd my-next-app

# Start development server
npm run dev
```

## Project Structure

### Core Directories
```
my-next-app/
├── app/             # App Router
├── pages/           # Pages Router (optional)
├── public/          # Static assets
├── components/      # React components
└── styles/         # CSS files
```

## Routing

### Page Routes
```typescript
// app/page.tsx - Home page
export default function Home() {
    return <h1>Welcome to Next.js</h1>;
}

// app/about/page.tsx - About page
export default function About() {
    return <h1>About Us</h1>;
}
```

### Dynamic Routes
```typescript
// app/posts/[id]/page.tsx
export default function Post({ params }: { params: { id: string } }) {
    return <h1>Post: {params.id}</h1>;
}
```

## Data Fetching

### Server Components
```typescript
async function getData() {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function Page() {
    const data = await getData();
    return <main>{/* Use data */}</main>;
}
```

### Client Components
```typescript
'use client';

import { useState, useEffect } from 'react';

export default function ClientComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/data')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return <div>{/* Use data */}</div>;
}
```

## API Routes

### Basic API Route
```typescript
// app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ message: 'Hello World' });
}
```

### Dynamic API Route
```typescript
// app/api/posts/[id]/route.ts
import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    return NextResponse.json({ postId: params.id });
}
```

## Styling

### CSS Modules
```typescript
// styles/Header.module.css
.header {
    background: #fff;
    padding: 20px;
}

// components/Header.tsx
import styles from '../styles/Header.module.css';

export default function Header() {
    return <header className={styles.header}>...</header>;
}
```

### Global Styles
```typescript
// app/layout.tsx
import '../styles/globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}
```

## Optimization

### Image Component
```typescript
import Image from 'next/image';

export default function Profile() {
    return (
        <Image
            src="/profile.jpg"
            alt="Profile"
            width={500}
            height={300}
            priority
        />
    );
}
```

### Font Optimization
```typescript
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
    return (
        <html lang="en" className={inter.className}>
            <body>{children}</body>
        </html>
    );
}
```

## Deployment

### Build Process
```bash
# Create production build
npm run build

# Start production server
npm start
```

### Environment Variables
```env
# .env.local
DATABASE_URL="mysql://user:password@localhost:3306/db"
API_KEY="your-api-key"
```

## Best Practices

### Performance
1. Use Server Components when possible
2. Implement proper caching strategies
3. Optimize images and fonts
4. Minimize client-side JavaScript

### Code Organization
1. Follow the Next.js file convention
2. Implement proper component structure
3. Use TypeScript for type safety
4. Maintain consistent naming conventions

### Security
1. Validate API routes
2. Implement proper authentication
3. Secure environment variables
4. Follow security best practices

## Additional Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)

### Tools
- [Vercel Platform](https://vercel.com)
- [Next.js Analytics](https://vercel.com/analytics)
- [Next.js Commerce](https://nextjs.org/commerce)
