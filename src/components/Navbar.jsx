import React from 'react'

const Navbar = () => {
  const total = 2500;
  const token= false;
  
    return (
        <nav>
        <button>🍕 Home</button>
        {token ? (
          <>
            <button>🔓 Profile</button>
            <button>🔒 Logout</button>
          </>
        ) : (
          <>
            <button>🔐 Login</button>
            <button>🔐 Register</button>
          </>
        )} 
        <button>🛒. Total:${total}</button>
    </nav>
  );
};

export default Navbar;