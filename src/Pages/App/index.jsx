import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import { Home } from '../Home/'
import { MyAccount } from '../MyAccount/'
import { MyOrder } from '../MyOrder/'
import { NotFound } from '../NotFound/'
import { SignIn } from '../SignIn/'
import { MyOrders } from '../MyOrders/'
import { Navbar } from '../../Components/Navbar/'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import './App.css' 

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/*', element: <NotFound /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> }, 
    { path: '/my-order/:id', element: <MyOrder /> }, 
    { path: '/underwear', element: <Home />}, 
    { path: '/electronics', element: <Home />}, 
    { path: '/furnitures', element: <Home />}, 
    { path: '/shoes', element: <Home />}, 
    { path: '/miscellaneous', element: <Home />}, 
  ])
  return routes;
}

const App = () => {  
  return (
    <> 
      <ShoppingCartProvider> 
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu />
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  )
} 

export default App