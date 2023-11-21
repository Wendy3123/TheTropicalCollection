import React from "react";

function Header() {
   return (
     <nav className="navbar">
       <ul>
         <li></li>
         <li>
           <a href="/" rel="Home Page">
             Home
           </a>
         </li>
         <li>
           <a href="/" rel="Products">
             Our Products
           </a>
         </li>
         <li>
           <a href="/Product/new" rel="Add Product">
             Add New Product
           </a>
         </li>
         <li>
           <a href="/login" rel="login">
             Login
           </a>
         </li>
       </ul>

       <p className="">
         <span></span>
       </p>
     </nav>
   );
}

export default Header;
