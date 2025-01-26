# CSS

## Fundamentals

### Colors
```css
/* Color Properties */
color: #333;
background-color: rgb(255, 255, 255);
border-color: rgba(0, 0, 0, 0.5);
```

```html
<div class="color-example">
  Color Implementation Example
</div>
```

### Typography
```css
/* Font Properties */
font-family: 'Arial', sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 1.5;
letter-spacing: 0.5px;
text-align: center;
text-transform: uppercase;
```

## Box Model

### Borders
```css
/* Border Properties */
border-width: 1px;
border-style: solid;
border-color: #000;
border-radius: 4px;

/* Shorthand */
border: 1px solid #000;
```

### Spacing
```css
/* Margin and Padding */
margin: 20px;
padding: 10px;

/* Individual Sides */
margin-top: 10px;
padding-left: 20px;

/* Shorthand (top right bottom left) */
margin: 10px 20px 10px 20px;
padding: 5px 10px 5px 10px;
```

## Layout

### Sizing
```css
/* Dimension Properties */
width: 100%;
height: 200px;
max-width: 1200px;
min-height: 400px;

/* Box Sizing */
box-sizing: border-box;
```

### Flexbox
```css
/* Container Properties */
.flex-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

/* Item Properties */
.flex-item {
    flex: 1;
    flex-basis: 200px;
    align-self: stretch;
}
```

### Grid
```css
/* Grid Container */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(100px, auto);
}

/* Grid Items */
.grid-item {
    grid-column: span 2;
    grid-row: 1 / 3;
}
```

## Positioning

### Position Properties
```css
/* Position Types */
position: relative;
position: absolute;
position: fixed;
position: sticky;

/* Positioning */
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 100;
```

## Effects

### Shadows
```css
/* Box and Text Shadows */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
```

### Transitions and Animations
```css
/* Transitions */
transition: all 0.3s ease-in-out;

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.animated-element {
    animation: fadeIn 0.5s ease-in-out;
}
```

## Responsive Design

### Media Queries
```css
/* Breakpoints */
@media screen and (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}

@media screen and (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
}
```

### Viewport Units
```css
/* Responsive Units */
.hero {
    height: 100vh;
    width: 100vw;
    padding: 2rem;
}
```

## Best Practices

### Organization
1. Use consistent naming conventions
2. Group related properties
3. Maintain a logical file structure
4. Comment complex selectors and implementations

### Performance
1. Minimize specificity conflicts
2. Use efficient selectors
3. Avoid redundant rules
4. Optimize for rendering performance

## Additional Resources

### Documentation
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3C CSS Specification](https://www.w3.org/Style/CSS/)
- [CSS Working Group](https://www.w3.org/Style/CSS/members)

### Tools
- [CSS Validation Service](https://jigsaw.w3.org/css-validator/)
- [Can I Use](https://caniuse.com/)
- [CSS Stats](https://cssstats.com/)