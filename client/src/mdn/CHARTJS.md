# Chart.js

## Introduction
Chart.js is a simple yet flexible JavaScript charting library that uses HTML5 Canvas for rendering charts.

## Key Concepts

### Setting Up
```javascript
// Install via npm
npm install chart.js

// Import in your project
import { Chart } from 'chart.js';
```

### Basic Chart Creation
```javascript
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: 'My Dataset',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ]
        }]
    }
});
```

## Chart Types
1. Line Charts
2. Bar Charts
3. Pie/Doughnut Charts
4. Scatter Plots
5. Radar Charts
6. Bubble Charts

### Line Chart Example
```javascript
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [{
            label: 'Monthly Sales',
            data: [65, 59, 80],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }
});
```

## Customization

### Axes Configuration
```javascript
const options = {
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'
            }
        }
    }
};
```

### Animation
```javascript
const options = {
    animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
    }
};
```

## Best Practices
1. Always specify chart dimensions
2. Use appropriate chart types for your data
3. Include proper labels and legends
4. Consider responsive options
5. Handle data updates efficiently 