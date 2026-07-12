import "./getStartedHeader.css";
import {
  CATEGORIES,
  type FilterCategory,
} from "./courseData";

type GetStartedHeadProps = {
  selectedCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
};

export default function GetStartedHead({
  selectedCategory,
  onCategoryChange,
}: GetStartedHeadProps){
    return(
        <main className="get-started-container">
      <div className="header_box"> 
        <div className="GetStartedHeader">Get Started in Game Developement</div>
        <div className="description_header">Explore courses to start learning game developement</div>
        
        <div className="button-row">
            <div className="buttons">
                {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        type="button"
                        aria-pressed={selectedCategory === category}
                        className={selectedCategory === category ? "is-selected" : ""}
                        onClick={() => onCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="roadmap-button">
                <button type="button">Roadmap</button> 
                {/* need to link to Roadmap page */}
            </div>
        </div>
      </div>
      
    </main>
    );
}
