import React from "react";

const Notification = ({ notification }) => (
  notification && (
    <div className="bg-white">
      <h1 className="p-8 text-grey-900 text-center text-xl">
        {notification}
      </h1>
    </div>
  )
);

export default Notification;
