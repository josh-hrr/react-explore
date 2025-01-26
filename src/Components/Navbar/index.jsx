import { NavLink } from "react-router-dom"
import { CustomNavLink } from "./CustomNavLink"; 
import { leftLinks, rightLinks } from "./NavLinks.js";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index.jsx";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'



export const Navbar = () => { 
    const {setSearchByCategory, cartProducts} = useContext(ShoppingCartContext);
    return (
      <> 
        <nav className='bg-white p-5 flex justify-between items-center fixed z-10 top-0 w-full px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'> 
                <li className="font-semibold">
                    <NavLink 
                        to="/" 
                        onClick={() => setSearchByCategory('all')}
                        >
                            La Casa del Perro 🐕
                    </NavLink>
                </li>  
                    { 
                        leftLinks.map(({to, label}) => ( 
                            
                            <li  key={to}> 
                                <CustomNavLink 
                                    to={to}
                                    category={label}
                                    >
                                    {label}
                                </CustomNavLink>   
                                
                            </li>
                            
                        )) 
                    }   
            </ul>
            <ul className='flex items-center gap-3'> 
                <li className="text-black/60">
                    email@test.com
                </li> 
                {
                    rightLinks.map(({to, label}) => (
                        <li key={to}>
                            <CustomNavLink 
                                to={to}
                                category={label}
                                >
                                {label}
                            </CustomNavLink>
                        </li>
                    ))
                } 
                <li className='flex items-center gap-1'>
                    <ShoppingBagIcon className='h-6 w-6 text-black'/> 
                    <div>
                        {cartProducts.length}
                    </div>
                </li>
            </ul>
        </nav>
      </>
    )
}