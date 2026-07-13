import { Link } from "@remix-run/react";
import "./getStartedHeader.css";
import {
  CATEGORIES,
  type CourseTrack,
  type FilterCategory,
} from "./courseData";

type GetStartedHeadProps = {
  selectedCategory: FilterCategory;
  selectedTrack: CourseTrack | null;
  onCategoryChange: (category: FilterCategory) => void;
};

export default function GetStartedHead({
  selectedCategory,
  selectedTrack,
  onCategoryChange,
}: GetStartedHeadProps){
    const roadmapSearchParams = new URLSearchParams();

    if (selectedCategory !== "All") {
        roadmapSearchParams.set("category", selectedCategory);
    }

    if (selectedTrack !== null) {
        roadmapSearchParams.set("track", selectedTrack);
    }

    const roadmapHref = roadmapSearchParams.toString()
        ? `/roadmap?${roadmapSearchParams.toString()}`
        : "/roadmap";

    return(
        <main className="get-started-container">
      <div className="header_box"> 
        <div className="GetStartedHeader">Get Started in Game Development</div>
        <div className="description_header">Explore courses to start learning game development</div>
        
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
                <Link to={roadmapHref}>Roadmap</Link>
            </div>
        </div>
      </div>
      
    </main>
    );
}
