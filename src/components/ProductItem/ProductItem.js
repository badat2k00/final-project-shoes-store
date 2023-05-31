import { useNavigate } from "react-router-dom";
import "./Product.css";
// import { FaCartPlus } from "react-icons/fa";
 import { TbCurrencyDong } from "react-icons/tb";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
const ProductItem = (props) => {
  const { productImage, productName, productId, productPrice,productOriginPrice } = props;
  const { onAddToCart } = useContext(AppContext);
  const navigate = useNavigate();

  const onNavigateToProductDetail = () => {
    const to = `/products/${productId}`;
    navigate(to);
  };
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4 product" onDoubleClick={onNavigateToProductDetail}>
      <div className="card">
        <div className="card-img .filter_grayscale">
          <img
            src={productImage}
            className="card-img-top p-3 "
            alt={productName}
          />
          <div className="overlay">
            <button className="text" onClick={() => onAddToCart(productId)}>Add to cart </button>
          </div>

        </div>
        <div className="card-body">
          <h5 className="card-title text-center">{productName}</h5>
          <div className=" text-center">
            <span className="origin-price">{productOriginPrice}<TbCurrencyDong/></span>
            <span>{productPrice}<TbCurrencyDong/></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
