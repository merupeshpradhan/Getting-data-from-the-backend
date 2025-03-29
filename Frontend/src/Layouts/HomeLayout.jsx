import React from "react";

function HomeLayout({ children }) {
  return (
    <div className="bg-[url('./assets/bg-image.jpg')] bg-cover bg-center min-h-[100vh]">
      {children}
    </div>
  );
}

export default HomeLayout;
