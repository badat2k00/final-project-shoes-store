import React from "react";
import AddProductForm from "../../components/AddProductForm/AddProductForm";
// import { Link } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();
  const onNavigationToHomepage = () => {
    navigate("/");
  };
  return (
    <div>
      <h1 className="text-center text-primary my-3">Admin dashboard</h1>
      <AddProductForm />
      <button className="btn btn-primary" onClick={onNavigationToHomepage}>
        Back to homepage
      </button>
    </div>
  );
};

export default Admin;
