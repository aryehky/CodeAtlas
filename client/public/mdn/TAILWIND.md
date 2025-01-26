# Tailwind CSS

## Typography

### Font Properties
```css
/* Font Size */
text-xs
text-sm
text-base
text-lg
text-xl
text-2xl

/* Font Weight */
font-thin
font-light
font-normal
font-medium
font-bold

/* Font Style */
italic
not-italic

/* Letter Spacing */
tracking-tight
tracking-normal
tracking-wide

/* Line Height */
leading-none
leading-tight
leading-normal
leading-loose

/* Text Alignment */
text-left
text-center
text-right

/* Text Transform */
uppercase
lowercase
capitalize

/* Text Overflow */
truncate
overflow-ellipsis
```

### Typography Example
```html
<div class="text-xl font-bold tracking-wide leading-loose text-center uppercase">
    Typography Example
</div>
```

## Colors

### Color Classes
```css
/* Background Colors */
bg-red-500
bg-blue-500
bg-green-500

/* Text Colors */
text-red-500
text-blue-500
text-green-500

/* Border Colors */
border-red-500
border-blue-500
border-green-500

/* Ring Colors */
ring-red-500
ring-blue-500
ring-green-500
```

## Layout

### Flexbox
```css
/* Container */
flex
inline-flex

/* Direction */
flex-row
flex-col
flex-row-reverse
flex-col-reverse

/* Wrap */
flex-wrap
flex-nowrap
flex-wrap-reverse

/* Justify Content */
justify-start
justify-end
justify-center
justify-between
justify-around

/* Align Items */
items-start
items-end
items-center
items-baseline
items-stretch
```

### Grid
```css
/* Container */
grid
inline-grid

/* Template Columns */
grid-cols-1
grid-cols-2
grid-cols-3
grid-cols-none

/* Gap */
gap-0
gap-1
gap-2
gap-4
gap-8
```

## Spacing

### Margin and Padding
```css
/* Margin */
m-0
m-1
m-2
m-4
m-8

/* Padding */
p-0
p-1
p-2
p-4
p-8

/* Directional */
mt-4 /* margin-top */
mr-4 /* margin-right */
mb-4 /* margin-bottom */
ml-4 /* margin-left */
```

## Borders

### Border Properties
```css
/* Width */
border
border-2
border-4
border-8

/* Style */
border-solid
border-dashed
border-dotted
border-none

/* Radius */
rounded-none
rounded-sm
rounded-md
rounded-lg
rounded-full
```

## Effects

### Shadows
```css
/* Box Shadow */
shadow-sm
shadow
shadow-md
shadow-lg
shadow-xl
shadow-2xl
shadow-inner
shadow-none
```

### Transitions
```css
/* Property */
transition-all
transition-colors
transition-opacity
transition-shadow
transition-transform

/* Duration */
duration-100
duration-200
duration-300
duration-500
```

## Responsive Design

### Breakpoints
```css
/* Mobile First */
sm:flex  /* 640px */
md:flex  /* 768px */
lg:flex  /* 1024px */
xl:flex  /* 1280px */
2xl:flex /* 1536px */
```

### Container
```css
/* Responsive Container */
container
mx-auto
px-4
```

## Best Practices

### Organization
1. Follow consistent class ordering
2. Use component-based approach
3. Extract common patterns
4. Maintain utility-first philosophy

### Performance
1. Purge unused styles
2. Use JIT mode
3. Minimize custom CSS
4. Leverage presets

### Maintainability
1. Use meaningful class combinations
2. Create reusable components
3. Document custom utilities
4. Follow naming conventions

## Additional Resources

### Documentation
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com/)
- [Tailwind CSS Blog](https://blog.tailwindcss.com/)

### Tools
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Headless UI](https://headlessui.dev/)
- [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography)