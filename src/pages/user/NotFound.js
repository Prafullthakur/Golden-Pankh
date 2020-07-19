import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="https://cdn.dribbble.com/users/1162077/screenshots/4158668/404-page.png"
        alt="Not Found"
      />
      <h1>Page Not Found</h1>
    </div>
  );
};

export default NotFound;
