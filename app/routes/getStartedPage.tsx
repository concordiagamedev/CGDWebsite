import { useState } from "react";
import GetStartedHead from "../components/getStartedPage/getStartedHeader";
import CourseList from "../components/getStartedPage/courseList";
import Filters from "../components/getStartedPage/filters";
import {
  type CourseFilters,
  type FilterCategory,
  type CourseLevel,
  type CourseTrack,
  courses,
} from "../components/getStartedPage/courseData";
import "../components/getStartedPage/getStarted.css";


export default function GetStarted() {
    const [filters, setFilters] = useState<CourseFilters>({
        category: "All",
        track: null,
        level: null,
    });

    const filteredCourses = courses.filter((course) => {
        const matchesCategory =
            filters.category === "All" || course.type === filters.category;
        const matchesTrack =
            filters.track === null || course.track === filters.track;
        const matchesLevel =
            filters.level === null || course.level === filters.level;

        return matchesCategory && matchesTrack && matchesLevel;
    });

    const handleCategoryChange = (category: FilterCategory) => {
        setFilters((currentFilters) => ({
            ...currentFilters,
            category,
        }));
    };

    const handleTrackChange = (track: CourseTrack) => {
        setFilters((currentFilters) => ({
            ...currentFilters,
            track: currentFilters.track === track ? null : track,
        }));
    };

    const handleLevelChange = (level: CourseLevel) => {
        setFilters((currentFilters) => ({
            ...currentFilters,
            level: currentFilters.level === level ? null : level,
        }));
    };

    return(
         <div className="page-container">
            <GetStartedHead
                selectedCategory={filters.category}
                selectedTrack={filters.track}
                onCategoryChange={handleCategoryChange}
            />
            <div className="content-layout">
                <Filters
                    selectedTrack={filters.track}
                    selectedLevel={filters.level}
                    onTrackChange={handleTrackChange}
                    onLevelChange={handleLevelChange}
                />
                <CourseList courses={filteredCourses} />
            </div>
        </div>
    );
}
