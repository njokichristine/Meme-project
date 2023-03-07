import { Link } from "react-router-dom";



const Login = ({handleLogin}) => {
   

    
    return (  
      <form className="w-full max-w-sm bg-slate-300 shodow-lg rounded-xl p-5 mt-20 "  onSubmit={handleLogin} >
            <h1 className="text-2xl text-teal-500 text-center mb-6  font-bold">login</h1>
        <div className="md:flex md:items-center mb-6">
            
          <div className="md:w-1/3">
            <label className="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4" >
              Username
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700" id="username" name="username" type="text" placeholder="Jane Doe"
             required
           />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4" >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700" id="inline-password" type="password" placeholder="******************"
             name="password"
             required
            />
          </div>
        </div>
      
        <div class="md:flex md:items-center mb-5">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button class="shadow bg-slate-400 hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              login
            </button>
          </div>
       
        </div>
         <div className="text-gray-900 pl-10 block">Dont have account? 
           <Link to="/register">
              <button className="shadow ml-8 bg-slate-400 hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Register</button> 
           </Link>
         </div>
      </form>
    );
}
 
export default Login;