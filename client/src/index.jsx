import reactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Toaster} from 'react-hot-toast'

reactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Toaster position='top-right' />
        <App />
    </>
)