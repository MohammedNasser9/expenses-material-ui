import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  './App.css'
import App from './App.jsx'

import { ThemeModeProvider} from "./ThemeContext";

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode> 
    <ThemeModeProvider>
      <App />
    </ThemeModeProvider>
  </StrictMode>
)
