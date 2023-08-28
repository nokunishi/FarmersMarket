import { ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContex = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void 
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void     
}

const ShoppingCartContext = createContext({} as ShoppingCartContex);


export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({children}: ShoppingCartProviderProps ) {
    const [cartItem, setCartItems] = useState<CartItem[]>([])

    function getItemQuantity(id:number) {
        const item =  cartItem.find(item => item.id === id)

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



    return <ShoppingCartContext.Provider value = {{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}}>
    {children}
    </ShoppingCartContext.Provider>
}