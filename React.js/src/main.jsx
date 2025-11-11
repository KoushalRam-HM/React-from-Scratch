import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router'
// import About from './Components/About.jsx'
import Body from './Components/Body.jsx'
import Contact from './Components/Contact.jsx'
import RestaurantMenuPage from './Components/RestaurantMenuPage.jsx'
import { lazy, Suspense } from 'react'
import Carts from './Components/Carts.jsx'



//Lazy Loading, code Splitting, Chunking, onDemand Loading
const About = lazy(()=> import('./Components/About.jsx')); //import is a function


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
    {
        path: "/",
        element: <Body/>
    },      
    {
        path: "/About",
        element: <Suspense fallback={<h1>"Loading"</h1>}><About/></Suspense>
    },
    {
        path: "/Contact",
        element: <Contact/>,   
    },
    {
        path: "/restaurants/:resId",
        element: <RestaurantMenuPage/>
    },
    {
        path: "/cart",
        element: <Carts/>
    }
        ],
        errorElement: <Error/>
    },

])



createRoot(document.getElementById('root')).render(
   <RouterProvider router={appRouter} />  
)
