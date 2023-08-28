import { Stack, Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCarContex"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"


type CartItemProps = {
    id: number,
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)

    if (item == null) return null
    return (
      <Stack
        key={id}
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center>"
      >
        <img
          src={item.imageUrl}
          style={{ width: "6rem", height: "5rem", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            <span style={{ fontSize: "1.2rem" }}>
              {" "}
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}{" "}
            </span>
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: "0.65rem" }}>
                x {quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: "0.75rem" }}>
            {formatCurrency(item.price)}
          </div>
        </div>
        <div> {formatCurrency(item.price * quantity)} </div>
        <Button
          variant="danger"
          size="sm"
          onClick={() => removeFromCart(item.id)}
        >
          {" "}
          &times;{" "}
        </Button>
      </Stack>
    );
}