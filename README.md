# Will You Be My Valentine? 💕

A cute and classy Valentine's Day proposal website built with React and Vite.

## Features

- Interactive "Yes" and "No" buttons
- "No" button moves to random positions when clicked
- "Yes" button grows bigger with each "No" click
- Beautiful celebration page with:
  - 4 image placeholders for your favorite memories
  - "I Love You All The Time" center message
  - Romantic quote: "I wanna be with you all the time"
- Floating hearts and animations
- Responsive design for all devices

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and visit the local URL shown in the terminal (usually `http://localhost:5173`)

## Customization

### Adding Your Own Images

Replace the placeholder sections in `src/App.jsx` with your own images. Look for the `.image-placeholder` divs and replace them with:

```jsx
<img src="your-image-path.jpg" alt="Description" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
```

### Changing Colors

Edit the colors in `src/App.css` to match your preferred theme. The main colors used are:
- Primary: `#ff6b9d` (pink)
- Secondary: `#c44569` (darker pink)

### Customizing Text

All text can be edited in `src/App.jsx`:
- Question text
- Button labels
- Love message
- Quote

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to be deployed to any static hosting service.

## Technologies Used

- React 18
- Vite
- CSS3 with animations
- Google Fonts (Pacifico & Poppins)

Enjoy! 💝
