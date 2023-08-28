import { ReactNode, createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContex = {
    openCart: () => void 
    closedCart: () => void 
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void 
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void     

    cartQuantity: number
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContex);


export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({children}: ShoppingCartProviderProps ) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", [])
    const [isOpen, setIsOpen] = useState(false)

    const cartQuantity = cartItems.map(item => item.quantity).reduce((quantity, item_quantity) => {
       return quantity + item_quantity}, 0
    )

    const openCart = () => setIsOpen(true)
    const closedCart = () => setIsOpen(false)

    function getItemQuantity(id:number) {
        const item =  cartItems.find(item => item.id === id)

        if (item == null) {
            return 0
        } else {
            return item.quantity
        }
    }

    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            // add to cart
            if (currItems.find(item => item.id === id) == null) {
              return [...currItems, { id, quantity: 1 }];
            } else {
              return currItems.map(item => {
                if (item.id === id) {
                    return {...item, quantity: item.quantity + 1}
                } else {
                    return item
                }
              })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id && item.quantity === 1)) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }



    return <ShoppingCartContext.Provider
     value = {{openCart, closedCart, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems
     , cartQuantity}}>
    {children}
    <ShoppingCart isOpen = {isOpen} />
    </ShoppingCartContext.Provider>
}