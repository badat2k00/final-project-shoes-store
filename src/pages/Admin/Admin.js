import React from "react";
import AddProductForm from "../../components/AddProductForm/AddProductForm";
import { Link } from "react-router-dom";
const Admin = () => {
  return (
    <div>
      <h1 className="text-center text-primary my-3">Admin dashboard</h1>
      <AddProductForm />
      <Link to ="/">Go Back</Link>
    </div>
  );
};

export default Admin;
