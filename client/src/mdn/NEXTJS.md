# Next.js

## Introduction
Next.js is a React framework that enables features like server-side rendering and static site generation.

## Core Concepts

### Pages and Routing

#### File-System Based Routing
Next.js has a file-system based router built on the concept of pages.

```javascript
// pages/index.js -> /
// pages/about.js -> /about
// pages/posts/[id].js -> /posts/1, /posts/2, etc.
```

**When to use:**
- Creating new routes without configuration
- Building dynamic routes
- Organizing your application structure
- Creating nested routes

### Data Fetching Methods

#### getStaticProps (Static Generation)
```javascript
// Use for static pages
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()
  
  return {
    props: { data }, // Passed to page component
    revalidate: 60 // Optional: revalidate every 60 seconds
  }
}
```

**When to use:**
- Blog posts
- Product listings
- Documentation
- Marketing pages

#### getServerSideProps (Server-side Rendering)
```javascript
// Use for dynamic data
export async function getServerSideProps(context) {
  const { params, req, res } = context
  const data = await fetchUserData(params.id)
  
  return {
    props: { data }
  }
}
```

**When to use:**
- Real-time data
- User-specific pages
- SEO requirements
- Dynamic content

### Components

#### Link Component
For client-side navigation between pages.

```javascript
import Link from 'next/link'

function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  )
}
```

#### Image Component
For optimized image loading.

```javascript
import Image from 'next/image'

function Profile() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile"
      width={500}
      height={300}
      priority
    />
  )
}
```

### API Routes

Create API endpoints within your Next.js application.

```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello World!' })
}
```

**When to use:**
- Backend functionality
- Form submissions
- Database queries
- Authentication

### Optimization Features

#### Automatic Code Splitting
Next.js automatically splits your code into small chunks.

```javascript
// Pages are automatically code-split
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/heavy'))
```

#### Environment Variables
```javascript
// .env.local
DB_HOST=localhost
API_KEY=your-api-key

// Usage in code
console.log(process.env.DB_HOST)
```

### Deployment

#### Building for Production
```bash
npm run build
npm start
```

**Best practices:**
- Use environment variables
- Implement error boundaries
- Enable caching
- Monitor performance

## Advanced Features

### Middleware
Custom code that runs before a request is completed.

```javascript
// middleware.ts
export function middleware(request) {
  // Add headers, redirect, rewrite, etc.
  return NextResponse.next()
}
```

**When to use:**
- Authentication
- Logging
- Custom headers
- Redirects

### Internationalization
Built-in support for multiple languages.

```javascript
// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en'
  }
}
```

## Best Practices
1. Use Static Generation when possible
2. Implement proper error boundaries
3. Optimize images using next/image
4. Use proper caching strategies
5. Keep pages lightweight
6. Implement proper loading states

## Additional Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)
- [Next.js Blog](https://nextjs.org/blog)

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
