import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCarContex"
import { CartItem } from "./CartItem"
import { formatCurrency } from "../utilities/formatCurrency"
import storeItems from "../data/items.json";

type ShoppingCartProps = {
    isOpen: boolean
}



export function ShoppingCart({isOpen}: ShoppingCartProps) {
    const {closedCart, cartItems} = useShoppingCart()

    return (
      <Offcanvas show={isOpen} onHide={closedCart} placement="end">
        <div className="offcanvas-header" style={{fontSize: "1.5rem"}}> Cart </div>
        <Offcanvas.Header closeButton>
          <Offcanvas.Body>
            <Stack gap={3}>
              {cartItems.map((item) => (
                <CartItem {...item} />
              ))}

              <div className="ms-auto fw-bold fs-5">
                Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find(i => i.id === cartItem.id) 

                    return total + (item?.price || 0) * cartItem.quantity}, 0
                ))}
              </div>
            </Stack>
          </Offcanvas.Body>
        </Offcanvas.Header>
      </Offcanvas>
    );
}