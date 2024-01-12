// ProductManagementComponent.js
import React from "react";
import AdminRestrictedComponent from "./AdminRestrictedComponent";

const ProductManagementComponent = () => {
  return (
    <AdminRestrictedComponent>
      <div>
        {/* Your product management UI and logic */}
        <p>Only admins can access this section.</p>
      </div>
    </AdminRestrictedComponent>
  );
};

export default ProductManagementComponent;
