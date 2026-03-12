import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const cors = require('cors')
app.use(cors())

createRoot(document.getElementById('root')).render(<App />)
