// import React, { createContext, useState } from "react";
// import all_product from "../Componets/Assets/all_product";

// export const ShopContext = createContext(null);
// const getDefaultCart = () => {
//     let cart = {};
//     for (let index = 0; index < all_product.length + 1; index++) {
//         cart[index] = 0;
//     }
//     return cart;
// }

// const ShopContextProvider = (props) => {

//     const [cartItems, setCartItems] = useState(getDefaultCart());

//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
//         console.log(cartItems);
//     }

//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
//     }

//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const itemID in cartItems) 
//         {
//             if (cartItems[itemID] > 0) {
//                 let itemInfo = all_product.find((product) => product.id === Number(itemID));
//                 totalAmount += itemInfo.new_price * cartItems[itemID];
//                 console.log(totalAmount)
//             }
//             return totalAmount;
//         }
//     }

//     const getTotalCartItems = () =>{
//         let totalItem = 0;
//         for(const itemID in cartItems)
//         {
//             if(cartItems[itemID]>0)
//             {
//                 totalItem += cartItems[itemID];
//             }
//             return totalItem
//         }
//     }

//     const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }
// export default ShopContextProvider;

//  new code


import React, { createContext, useState } from "react";
import all_product from "../Componets/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    const cart = {};
    all_product.forEach(product => {
        cart[product.id] = 0;
    });
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems(prev => {
            const updatedCart = { ...prev };
            updatedCart[itemId] += 1;
            return updatedCart;
        });
    }

    const removeFromCart = (itemId) => {
        setCartItems(prev => {
            const updatedCart = { ...prev };
            updatedCart[itemId] -= 1;
            return updatedCart;
        });
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const itemInfo = all_product.find(product => product.id === Number(itemId));
                totalAmount += itemInfo.new_price * cartItems[itemId];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const itemId in cartItems) {
            totalItems += cartItems[itemId];
        }
        return totalItems;
    }

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
