// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import { Outlet } from "react-router-dom";


// function App() {
//   return (
//     <>
    
//       <Header />
//       <Outlet />
//       <Footer />
//     </>
//   );
// }

// export default App;

//----------------------------------------------
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app-container">  {/* Added a wrapper for better styling */}
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

