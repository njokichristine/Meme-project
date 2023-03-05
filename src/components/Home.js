import Login from "./Login";
import joker from "../images/laugh.jpg";

const Home = ({ setIsAuthenticated, isAuthenticated, handleLogin }) => {
  return (
    <div className="overflow-hidden">
      {isAuthenticated ? (
        <div
          className="h-screen bg-no-repeat bg-cover bg-center flex  justify-center"
          style={{ backgroundImage: `url(${joker})` }}
        >
          <div className="text-3xl text-center mt-14 text-teal-500 w-2/3 font-bold">
            <h1 className="mb-10">Welcome to the Haha Hub, my fellow clown!</h1>  
            <h1>Prepare yourself for some side-splitting, gut-busting, and knee-slapping laughs!</h1>
          </div>
        </div>
      ) : (
        <div
          className="bg-cover bg-center flex flex-col items-center justify-center text-white min-h-screen"
          style={{ backgroundImage: `url(${joker})` }}
        >
          <Login setIsAuthenticated={setIsAuthenticated} handleLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default Home;