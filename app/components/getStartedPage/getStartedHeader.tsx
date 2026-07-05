import "./getStartedHeader.css"
import {useState} from "react";

// const [selectedFilter, setSelectedFilter]

export default function GetStartedHead(){
    return(
         <main className="get-started-container">
      <div className="header_box"> 
        <div className="GetStartedHeader">Get Started in Game Developement</div>
        <div className="description_header">Explore courses to start learning game developement</div>
        
        <div className="button-row">
            <div className="buttons">
            <button>All</button>
            <button>Concordia</button>
            <button>Online</button>
        </div>

        <div className="roadmap-button">
            <button>Roadmap</button> 
            {/* need to link to Roadmap page */}
        </div>
        </div>
      </div>
      
    </main>
    );
}