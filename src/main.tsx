import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    // { path: '/plants/:id', element: <PlantDetail /> },
])

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
