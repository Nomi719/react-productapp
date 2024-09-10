// import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { ThemeContext } from "../Context/ThemeContext";


function Header() {

// const [theme, setTheme] = useContext(ThemeContext)
// console.log(theme)
  const navigate = useNavigate();

  const goToContactUs = () => { 
    navigate("/contact");
  };
  return (
    <header className="text-gray-600 body-font mt-4 mb-4">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">NK Tech</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/weather" className="mr-5 hover:bg-blue-500 rounded p-2">
            Home
          </Link>

          <Link to="/useState" className="mr-5 hover:bg-gray-300 rounded p-2">
            Use State
          </Link>
          <Link to="/product" className="mr-5 hover:bg-gray-300 rounded p-2">
            Products
          </Link>
          <Link to="/about" className="mr-5 hover:bg-gray-300 rounded p-2">
            About Us
          </Link>
          <Link to="/Contactus" className="mr-5 hover:bg-gray-300 rounded p-2">
            Contact Us
          </Link>
          {/* <div onClick={goToContactUs} className="mr-5 hover:text-gray-900">
            Contact Us
          </div> */}
        </nav>
        <Link to={'/signin'} className="inline-flex items-center bg-white-100 border-0 py-1 px-3 focus:outline-none bg-black text-neutral-50 hover:bg-gray-500 rounded text-base mt-4 md:mt-0">
          Login
        
      </Link>
      {/* <button 
      onPress = {()=>(
        setTheme(theme === 'light' ? 'dark' : 'light')
      )}
      label={theme=== 'light'? 'make it dark' : 'make it light'} /> */}
      </div>
      <hr />
    </header>
  );
}

export default Header;