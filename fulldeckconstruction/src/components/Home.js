// Filename - Home.jsx
import React from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";
import "../App.css"
import Deck from "../deck.jpg"
 
const Home = () => {
    return (
        <div className="landingBody">
            <h1>Welcome To DG Construction</h1>
            <div className="picContainer">
                <img src={Deck} className = "Deck"></img>
            </div>
             <div className="landingContainer">
        <article>
          Full Deck Construction stands as a beacon of craftsmanship in the world of construction, where every nail and board is a testament to their commitment to excellence. With a team of skilled artisans at the helm, Full Deck takes pride in their talented carpenters who bring dreams to life, one plank at a time. These craftsmen don't just build structures; they sculpt spaces, transforming visions into solid, tangible realities. Full Deck Construction doesn't just promise sturdy buildings; they promise a symphony of skill and precision, ensuring that each project is a masterpiece crafted by the hands of seasoned carpentry virtuosos.
          Full Deck Construction stands as a beacon of craftsmanship in the world of construction, where every nail and board is a testament to their commitment to excellence. With a team of skilled artisans at the helm, Full Deck takes pride in their talented carpenters who bring dreams to life, one plank at a time. These craftsmen don't just build structures; they sculpt spaces, transforming visions into solid, tangible realities. Full Deck Construction doesn't just promise sturdy buildings; they promise a symphony of skill and precision, ensuring that each project is a masterpiece crafted by the hands of seasoned carpentry virtuosos.
        </article>
        </div>        
        </div>
    );
};
 
export default Home;