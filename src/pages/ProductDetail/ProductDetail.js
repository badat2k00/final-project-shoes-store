import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import './ProductDetail.css';
import { TbCurrencyDong } from "react-icons/tb";
import AppContext from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";
const initialProducts = [
  {
    id: "1",
    productName: "Converse Renew Canvas",
    productOriginPrice:3200000,
    productPrice: 1600000,
    productImage:
      "https://conversestore.vn/wp-content/uploads/2021/11/RENEW-low-2.png",
    productdes:"Converse Renew Canvas, phiên bản giới hạn mang mục đích bảo vệ môi trường sẽ được chính thức mở bán tại hệ thống Converse VN từ ngày 5/7 với số lượng giới hạn."
    },
  {
    id: "2",
    productName: "Converse Run Star Move",
    productOriginPrice:3200000,
    productPrice: 1900000,
    productImage:
      "	https://conversestore.vn/wp-content/uploads/2021/11/MOVE-2-768x768.png",
    productdes:"Đôi giày Run Star Move với kiểu dáng Chunky thời thượng cùng phong cách độc đáo, mang lại cho bạn vẻ ngoài thu hút ánh nhìn. Đế giày dày dặn cho bạn thỏa sức hack chiều cao và thêm tự tin xuống phố. Màu đen trắng tinh tế không kém phần thanh lịch sẽ phối hợp rất tốt với nhiều kiểu outfit hàng ngày. Chất vải Canvas dày dặn với những thớ dệt bền bỉ được gia công tỉ mỉ giúp bạn yên tâm hơn trong mọi hoạt động."
    },
  {
    id: "3",
    productName: "Converse Run Star Hike",
    productOriginPrice:3200000,
    productPrice: 1900000,
    productImage:
      "https://conversestore.vn/wp-content/uploads/2021/11/z2901259452317_86599dc2b1e7c14de6349e34722a7b2d-768x768.jpg",
      productdes:"Đôi giày Run Star Hike với kiểu dáng Chunky thời thượng cùng phong cách độc đáo, mang lại cho bạn vẻ ngoài thu hút ánh nhìn. Đế giày dày dặn cho bạn thỏa sức hack chiều cao và thêm tự tin xuống phố. Màu đen trắng tinh tế không kém phần thanh lịch sẽ phối hợp rất tốt với nhiều kiểu outfit hàng ngày. Chất vải Canvas dày dặn với những thớ dệt bền bỉ được gia công tỉ mỉ giúp bạn yên tâm hơn trong mọi hoạt động."
    },
  {
    id: "4",
    productName: "Converse Run Star HikeC",
    productOriginPrice:3200000,
    productPrice: 1900000,
    productImage:
      "https://conversestore.vn/wp-content/uploads/2021/08/4-24-1024x1024.jpg",
      productdes:"Đôi giày Run Star HikeC với kiểu dáng Chunky thời thượng cùng phong cách độc đáo, mang lại cho bạn vẻ ngoài thu hút ánh nhìn. Đế giày dày dặn cho bạn thỏa sức hack chiều cao và thêm tự tin xuống phố. Màu đen trắng tinh tế không kém phần thanh lịch sẽ phối hợp rất tốt với nhiều kiểu outfit hàng ngày. Chất vải Canvas dày dặn với những thớ dệt bền bỉ được gia công tỉ mỉ giúp bạn yên tâm hơn trong mọi hoạt động."
    },
  {
    id: "5",
    productName: "Vans Slip on checker",
    productOriginPrice:1600000,
    productPrice: 950000,
    productImage:
      "https://conversestore.vn/wp-content/uploads/2021/08/4-33-768x768.jpg",
      productdes:"Đôi giày Vans Slip on checker với kiểu dáng Chunky thời thượng cùng phong cách độc đáo, mang lại cho bạn vẻ ngoài thu hút ánh nhìn. Đế giày dày dặn cho bạn thỏa sức hack chiều cao và thêm tự tin xuống phố. Màu đen trắng tinh tế không kém phần thanh lịch sẽ phối hợp rất tốt với nhiều kiểu outfit hàng ngày. Chất vải Canvas dày dặn với những thớ dệt bền bỉ được gia công tỉ mỉ giúp bạn yên tâm hơn trong mọi hoạt động." 
    },
  {
    id: "6",
    productName: "Vans Old skool camel ",
    productOriginPrice:1600000,
    productPrice: 950000,
    productImage:
      "https://conversestore.vn/wp-content/uploads/2021/08/4-30-768x768.jpg",
      productdes:"Đôi giày Vans Old skool camel với kiểu dáng Chunky thời thượng cùng phong cách độc đáo, mang lại cho bạn vẻ ngoài thu hút ánh nhìn. Đế giày dày dặn cho bạn thỏa sức hack chiều cao và thêm tự tin xuống phố. Màu đen trắng tinh tế không kém phần thanh lịch sẽ phối hợp rất tốt với nhiều kiểu outfit hàng ngày. Chất vải Canvas dày dặn với những thớ dệt bền bỉ được gia công tỉ mỉ giúp bạn yên tâm hơn trong mọi hoạt động."
    },
  {
    id: "7",
    productName: "Vans Authen DX BW",
    productOriginPrice:1600000,
    productPrice: 950000,
    productImage:
      "https://conversestore.vn/wp-content/uploads/2021/08/4-27-768x768.jpg",
      productdes:"Đôi giày Vans Authen DX BW với kiểu dáng Chunky thời thượng cùng phong cách độc đáo, mang lại cho bạn vẻ ngoài thu hút ánh nhìn. Đế giày dày dặn cho bạn thỏa sức hack chiều cao và thêm tự tin xuống phố. Màu đen trắng tinh tế không kém phần thanh lịch sẽ phối hợp rất tốt với nhiều kiểu outfit hàng ngày. Chất vải Canvas dày dặn với những thớ dệt bền bỉ được gia công tỉ mỉ giúp bạn yên tâm hơn trong mọi hoạt động."
    },
  {
    id: "8",
    productName: "Vans Authen DX Cream",
    productOriginPrice:1600000,
    productPrice: 950000,
    productdes:"Đôi giày Vans Authen DX BW với kiểu dáng Chunky thời thượng cùng phong cách độc đáo, mang lại cho bạn vẻ ngoài thu hút ánh nhìn. Đế giày dày dặn cho bạn thỏa sức hack chiều cao và thêm tự tin xuống phố. Màu đen trắng tinh tế không kém phần thanh lịch sẽ phối hợp rất tốt với nhiều kiểu outfit hàng ngày. Chất vải Canvas dày dặn với những thớ dệt bền bỉ được gia công tỉ mỉ giúp bạn yên tâm hơn trong mọi hoạt động.",
    productImage:
      "https://conversestore.vn/wp-content/uploads/2021/08/4-28-768x768.jpg",
  },
];

const ProductDetail = () => {
  const { onAddToCart } = useContext(AppContext);
  const params = useParams();
  const { productId } = params;
  const product = initialProducts.find((p) => p.id === productId);
  const navigate = useNavigate();
  const onBackToHome=()=>{
    navigate('/');
  }
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="shoe">
      <img className="shoe-img" src={product.productImage} alt={product.productName} width={530} height={530} />
      <div className="shoe-right">
        <div className="shoe-name">{product.productName}</div>
        <div>
          <span className="shoe-origin-price">{product.productOriginPrice.toLocaleString('de-DE')}<TbCurrencyDong/></span>
          <span className="shoe-price">{product.productPrice.toLocaleString('de-DE')}<TbCurrencyDong/></span></div>
        <p className="shoe-des">{product.productdes}</p>
      <div className="button-container">
      <button className="trigger" onClick={()=>onAddToCart(productId)}>Add to Cart</button>
      <button className="trigger" onClick={onBackToHome}>Back to Home page</button>
      </div>
      </div>
    </div>
  )
};

export default ProductDetail;
