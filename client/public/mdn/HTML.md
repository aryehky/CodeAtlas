# HTML

## Document Structure

### Basic Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <h1>Page Content</h1>
</body>
</html>
```

## Core Elements

### Text Elements
```html
<!-- Headings -->
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Section Heading</h3>

<!-- Paragraphs and Text Formatting -->
<p>Regular paragraph with <strong>bold text</strong> and <em>emphasized text</em>.</p>
<span>Inline text element</span>
```

### Content Grouping
```html
<!-- Semantic Sectioning -->
<header>
    <nav>Navigation content</nav>
</header>

<main>
    <article>
        <h2>Article Title</h2>
        <p>Article content</p>
    </article>

    <section>
        <h2>Section Title</h2>
        <p>Section content</p>
    </section>

    <aside>
        <h3>Sidebar Content</h3>
    </aside>
</main>

<footer>
    <p>Footer content</p>
</footer>
```

### Media Elements
```html
<!-- Images -->
<img src="path/to/image.jpg" alt="Descriptive text for accessibility">

<!-- Video -->
<video controls width="500">
    <source src="path/to/video.mp4" type="video/mp4">
    Your browser does not support the video element.
</video>

<!-- Audio -->
<audio controls>
    <source src="path/to/audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

### Navigation
```html
<!-- Links -->
<a href="https://example.com">External Link</a>
<a href="/internal-page">Internal Link</a>
<a href="#section-id">Anchor Link</a>

<!-- Navigation Structure -->
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>
```

### Lists
```html
<!-- Unordered List -->
<ul>
    <li>First item</li>
    <li>Second item</li>
</ul>

<!-- Ordered List -->
<ol>
    <li>First step</li>
    <li>Second step</li>
</ol>

<!-- Description List -->
<dl>
    <dt>Term</dt>
    <dd>Definition</dd>
</dl>
```

### Forms
```html
<form action="/submit" method="post">
    <!-- Text Input -->
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>

    <!-- Email Input -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <!-- Password Input -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>

    <!-- Radio Buttons -->
    <fieldset>
        <legend>Select Option:</legend>
        <input type="radio" id="option1" name="option" value="1">
        <label for="option1">Option 1</label>
        <input type="radio" id="option2" name="option" value="2">
        <label for="option2">Option 2</label>
    </fieldset>

    <!-- Submit Button -->
    <button type="submit">Submit</button>
</form>
```

## Meta Information

### Document Head
```html
<head>
    <!-- Character Encoding -->
    <meta charset="UTF-8">
    
    <!-- Viewport Settings -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="Page description">
    <meta name="keywords" content="keywords, separated, by, commas">
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="Page Title">
    <meta property="og:description" content="Page description">
    <meta property="og:image" content="path/to/image.jpg">
</head>
```

## Best Practices

### Accessibility
1. Use semantic HTML elements
2. Include proper ARIA attributes
3. Provide alternative text for images
4. Ensure keyboard navigation
5. Maintain proper heading hierarchy

### Structure
1. Use meaningful element names
2. Keep markup clean and organized
3. Validate HTML code
4. Follow document outline conventions

### Performance
1. Optimize image sizes
2. Load scripts efficiently
3. Minimize inline styles
4. Use appropriate element types

## Additional Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3C HTML Specification](https://html.spec.whatwg.org/)
- [HTML Living Standard](https://html.spec.whatwg.org/multipage/)

### Tools
- [W3C Markup Validation Service](https://validator.w3.org/)
- [WAVE Web Accessibility Tool](https://wave.webaim.org/)
- [HTML5 Outliner](https://gsnedders.html5.org/outliner/)
