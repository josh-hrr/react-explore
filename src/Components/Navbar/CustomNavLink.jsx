import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context";

export const CustomNavLink = ({to, children, category}) => {  
    const isActiveStyle = "underline underline-offset-4";  
    const { setSearchByCategory } = useContext(ShoppingCartContext)  
     
    return (
        <>
            <NavLink 
                to={to} 
                className={({isActive}) => isActive ? isActiveStyle : ""}
                onClick={() => setSearchByCategory(category)}
            >
                {children}
            </NavLink>
        </>
    )
}