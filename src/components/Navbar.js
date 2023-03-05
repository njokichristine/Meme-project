
import {  Link } from "react-router-dom"
import profile from "../images/userimg.png"

const Navbar = ({isAuthenticated, handleLogout, username}) => {

    return ( 
        
        <nav className="bg-transparent border  flex items-center justify-around flex-wrap p-3 md:border-slate-300 md:border-b-2 md:border-t-0 md:border-r-0 md:border-l-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
          <Link to="/"className="font-semibold text-2xl text-teal-500 tracking-tight">Haha hub</Link>
        </div>
        <div className="flex items-center flex-shrink-0 text-teal-500 font-bold justify-center">
          <Link to="/"  exact className=" ml-5">Home</Link>
          {isAuthenticated? ( 
              <>
                <Link to="/allmemes"  exact className="ml-5">All jokes</Link>
                <Link to="/mymemes"  exact className="ml-5">my jokes</Link>
                <Link  onClick={handleLogout} to="/logout" exact className="ml-5">Logout</Link>
              </>
            ):(
              <Link to="/register" className="ml-8">Register</Link>
            )
          }
           </div>
           {isAuthenticated ? (
            <div className="flex">
             
              <p className="text-teal-500 font-semibold text-2xl"> {username}</p>
              <img src={profile} alt="the username" className="w-8 ml-4" />
            </div>
          ) : null}
      </nav>
      
);
}
 
export default Navbar;