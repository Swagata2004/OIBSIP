# Temperature Converter Website

A modern, responsive temperature converter built with HTML, CSS, and vanilla JavaScript. The app converts values between Celsius, Fahrenheit, and Kelvin, while validating input in real time and warning users when a value falls below absolute zero.

## Overview

This project is designed as a clean, professional web tool for quick temperature conversions. It uses a centered card layout, strong contrast, and a simple interaction model that works well on desktop and mobile devices.

## Features

- Numeric input field for temperature values
- Input unit selector with Celsius, Fahrenheit, and Kelvin
- Output mode selector to show all units or just the selected unit
- Convert button to trigger the calculation
- Real-time input validation
- Absolute zero protection with user-friendly error messages
- Responsive, centered, modern interface

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## How It Works

1. Enter a temperature value.
2. Choose the input unit.
3. Click **Convert temperature**.
4. View the converted values in Celsius, Fahrenheit, and Kelvin.
5. If the value is below absolute zero, the app shows a helpful validation message instead of calculating an invalid result.

## Project Structure

```text
temperature-converter/
|-- index.html
|-- style.css
|-- script.js
`-- README.md
```

## Validation Rules

- The input must be numeric.
- Temperatures below absolute zero are blocked.
- Absolute zero checks are applied according to the selected input unit.

## Usage

Open `index.html` in a browser and use the converter directly. No build step or external framework is required.

## Deployment

This project can be deployed on any static hosting platform, including:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

## Browser Support

The project is built with standard web technologies and should work in all modern browsers.

## Future Enhancements

- Add a swap-units button
- Include copy-to-clipboard for results
- Add conversion history
- Provide dark/light theme toggle

## License

You can add your preferred license here before publishing.

## Author

Created as a clean vanilla JavaScript temperature conversion demo.
