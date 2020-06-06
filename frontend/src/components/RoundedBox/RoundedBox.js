import React from "react";

const RoundedBox = ({ children }) => (
  <div className="py-8">
    <div className="box-border rounded-md border-8 border-white bg-white">
      {children}
    </div>
  </div>
);

export default RoundedBox;
