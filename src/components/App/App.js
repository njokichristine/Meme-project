import {  Routes , Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Navbar from "../Navbar"
import Home from "../Home"
import Register from '../Register'
import Allmemes from '../Allmemes'
import Mymemes from '../Mymemes'
import { useNavigate } from 'react-router-dom'
import Login from '../Login'

function App() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('')
  const [userId, setUserId] = useState('');
  const [memes, setMemes] = useState([])
  const [myMemes, setMyMemes] = useState([])
  const [search, setSearch] = useState("");
  
 

  console.log(myMemes)

// login user
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
  
    fetch('http://127.0.0.1:9292/login', {
      method: 'POST',
      body: formData,
    }) 
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then(data => {
        setIsAuthenticated(true);
        setUsername(data.username); 
        setUserId(data.userId);
        navigate('/allmemes');
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  console.log(userId)

  const handleLogout = (e) => {
    e.preventDefault();
    fetch('http://localhost:9292/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        setIsAuthenticated(false);
        navigate('/');
      } else { 
        

        throw new Error('Failed to logout');
      }
    })
    .catch(error => console.error(error));
  };
  

// fetch all memes
useEffect(() => {
  fetch("http://localhost:9292/memes")
    .then((r) => r.json())
    .then((response) => setMemes(response));
}, []);



//  fetch memes of authenticated user
useEffect(() => {
  fetch(`http://localhost:9292/my_memes/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setMyMemes(data);
    })
    .catch((error) => console.error(error));
}, [userId]);

const handleSearchChange = (value) => {
  console.log(value)
  setSearch(value);
};

// const displayedMemes = memes.filter((meme) => meme.title.toLowerCase().includes(search.toLowerCase()))


const renderMymemes = () => {
  if (isAuthenticated) {
    return (
    <Mymemes
                userId={userId}
                myMemes={myMemes}
                setMyMemes={setMyMemes}
                handleDeleteMemes={handleDeleteMemes}
                handleAddMemes={handleAddMemes} 
                handleEditMeme={handleEditMeme}
            />)
  } else {
   navigate ("/login") ;
  }
}


// edit meme
const handleEditMeme = (id, updatedMeme) => {
  fetch(`http://localhost:9292/users/${userId}/memes/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedMeme)
  })
    .then(response => {
      if (response.ok) {
        // Update the meme in the state
        const updatedMemes = myMemes.map(meme => {
          if (meme.id === id) {
            return { ...meme, ...updatedMeme };
          }
          return meme;
        });
        setMyMemes(updatedMemes);
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
};


  function handleDeleteMemes(id) {
    const updatedmemes = myMemes.filter((myMemes) => myMemes.id !== id);
    console.log("update delete message")
    setMyMemes(updatedmemes);
  }

  function handleAddMemes(newMyMemes) {
    setMyMemes([...myMemes, newMyMemes]);
  }



  return (
    <div className="">
      
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} username={username} />
        
        <Routes>

          <Route path="/login" element= {<Login/>}/> 
           <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated}  isAuthenticated={isAuthenticated} handleLogin={handleLogin}/>} />
           <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated}  />} />
           {isAuthenticated && (
            <>
              <Route exact path="/allmemes" element={<Allmemes memes={memes}search={search}  handleSearchChange={handleSearchChange}/>} />
              <Route path="/mymemes" element={renderMymemes()}/>
            </>
           )}
        </Routes>
        
   </div>
  );
}

export default App;
// import './App.css';
// import Navbar from '../Navbar';
// import Login from '../Login';
// import Home from '../Home';
// import Allmemes from '../Allmemes';
// import Mymemes from '../Mymemes';
// import Register from '../Register';
// import { Routes, Route } from 'react-router-dom';




// function App() {


  
//   return (
//     <div className="overlay">
//     <Routes>
//       <Route exact path="/home" element={<Home/>}></Route>
//       <Route exact path="/navbar" element={<Navbar />}></Route>
//       <Route exact path="/login" element={<Login/>}></Route>
//       <Route exact path="/register" element={<Register/>}></Route>
//       <Route exact path="/home" element={<Home />}></Route>
      
//     </Routes>
//   </div>
//   )
// }
// export default App;
  
  
