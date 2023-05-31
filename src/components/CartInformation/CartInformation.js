import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbCurrencyDong } from "react-icons/tb";
const CartInformation = (props) => {
  const { cart, onIncreaseQuantity, onDecreaseQuantity, onDeleteCartItem } =
    props;

  const getTotalPrice = (cart) => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      const cartItem = cart[i];
      totalPrice += cartItem.productPrice * cartItem.quantity;
    }

    return totalPrice.toLocaleString('de-DE');
  };
  const totalPrice = getTotalPrice(cart);
  const cartBodyElements = cart.map((cartItem, index) => {
    const { productImage, productName, quantity, productPrice, id } = cartItem;
    // const isDisabledDecreaseButton = quantity === 1;

    return (
      <tr key={id}>
        <th scope="row">{index}</th>
        <td className="text-center">{productName}</td>
        <td style={{paddingLeft:"45px"}}>
          <img src={productImage} alt="Cart image" height={"50px"} />
        </td>
        <td className="text-center">{productPrice.toLocaleString('de-DE')}<TbCurrencyDong style={{marginBottom:"6px",fontSize:"22px"}}/></td>
        <td style={{paddingLeft:"120px"}}>
          <button
            className="btn btn-primary"
            onClick={() => onDecreaseQuantity(id)}
            // disabled={isDisabledDecreaseButton}
          >
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button
            className="btn btn-primary"
            onClick={() => onIncreaseQuantity(id)}
          >
            +
          </button>
        </td>
        <td className="text-center">{(quantity * productPrice).toLocaleString('de-DE')}<TbCurrencyDong style={{marginBottom:"6px",fontSize:"22px"}}/></td>
        <td style={{paddingLeft:"41px"}}>
          <button
            className="btn btn-danger text-center"
            onClick={() => onDeleteCartItem(id)}
          >
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    );
  });

  // JSX: HTML => UI
  if (cart.length === 0) {
    return (
      <h3>
        Cart empty, <Link to="/">continue to shopping!</Link>
      </h3>
    );
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" className="text-center">Name</th>
            <th scope="col" className="text-center">Image</th>
            <th scope="col" className="text-center">Price</th>
            <th scope="col" className="text-center">Quantity</th>
            <th scope="col" className="text-center">Total</th>
            <th scope="col" className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {cartBodyElements}
          <tr>
            <td>Total price</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="text-center">{totalPrice.toLocaleString('de-DE')} <TbCurrencyDong style={{marginBottom:"6px",fontSize:"22px"}}/></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartInformation;

// Modal , Popup
// Refactor code
