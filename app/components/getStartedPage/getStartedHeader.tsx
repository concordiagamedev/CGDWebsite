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
      <header className="get-started-hero">
        <div className="get-started-heading-copy">
          <h1 className="get-started-title">Get Started in Game Development</h1>
          <p className="get-started-description">
            Explore courses and resources to start learning game development.
          </p>
        </div>
        
        <div className="get-started-actions">
            <div className="category-buttons" aria-label="Course type">
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
      </header>
    );
}
