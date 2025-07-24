import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

// Ensure page always starts at the top
window.history.scrollRestoration = 'manual';
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

// Scroll to top on page load
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
