import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { NavigationContext } from '../../data/NavigationContext';
import AddMeme from '../../views/AddMeme';
import MemesCollection from '../../views/MemesCollection';


export default function HomePage() {
    const [currentPage,setCurrentPage] = useContext(NavigationContext)
    return (
        <>
        <div className="text-left">
            <h1 className="main-title home-page-title">hi come laugh with us</h1>
            <nav>
                <Link to="/memes">
                <button id="memes-button">Go to Memes</button>
                </Link>
            <ul>
                <li><a href="default">Home</a></li>
                <li><a href="news">News</a></li>
                <li><a href="contact">Contact</a></li>
                <li><a href="about">About</a></li>
           </ul>
            </nav>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
        <div>
            <h1>Home page</h1>
            <Link to="/memes">
            <button>Go to Memems</button>
            </Link>
            <AddMeme/>
        </div>
        </>
    )
}

