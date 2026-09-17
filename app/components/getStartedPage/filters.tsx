import "./filters.css";
import {
  LEVELS,
  TRACKS,
  type CourseLevel,
  type CourseTrack,
} from "./courseData";

type FiltersProps = {
  selectedTrack: CourseTrack | null;
  selectedLevel: CourseLevel | null;
  onTrackChange: (track: CourseTrack) => void;
  onLevelChange: (level: CourseLevel) => void;
};

export default function Filters({
  selectedTrack,
  selectedLevel,
  onTrackChange,
  onLevelChange,
}: FiltersProps){
    return(
        <aside className="course-filters" aria-label="Course filters">
            <div className="filters-panel">
                <h2 className="filters-title">Filters</h2>
                
                <div className="track-div">
                    <h3 className="filter-group-title">Track</h3>
                    <div className="buttons-filter">
                        {TRACKS.map((track) => (
                            <button
                                key={track}
                                type="button"
                                aria-pressed={selectedTrack === track}
                                className={selectedTrack === track ? "is-selected" : ""}
                                onClick={() => onTrackChange(track)}
                            >
                                {track}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="level-div">
                    <h3 className="filter-group-title">Level</h3>
                    <div className="buttons-filter">
                        {LEVELS.map((level) => (
                            <button
                                key={level}
                                type="button"
                                aria-pressed={selectedLevel === level}
                                className={selectedLevel === level ? "is-selected" : ""}
                                onClick={() => onLevelChange(level)}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}
