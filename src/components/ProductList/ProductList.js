import AppContext from "../../contexts/AppContext";
import ProductItem from "../ProductItem/ProductItem";
import { useContext } from "react";
import './ProductList.css';

const ProductList = (props) => {
  const { onAddToCart } = props;
  const { products = [] } = useContext(AppContext);

  const isValidProducts = products && Array.isArray(products);

  // Conditional rendering
  const listProducts = isValidProducts ? (
    products.map((product) => {
      const { productImage, productName, id, productPrice,productOriginPrice } = product;
      return (
        <ProductItem
          productImage={productImage}
          productName={productName}
          productId={id}
          productPrice={productPrice}
          productOriginPrice={productOriginPrice}
          key={id}
        />
      );
    })
  ) : (
    <div>No products</div>
  );

  return (
    <div className="productlist">
      <div className="row">{listProducts}</div>
    </div>
  );
};

export default ProductList;

// Testing, Unit Test
// Typescript: Javascript + type checking
