import React from 'react';

function Footer() {
   const year = new Date().getFullYear();
   return (
      <footer>
         <h1>Copyright Dadit &copy; {year}</h1>
      </footer>
   )
}

export default Footer;
