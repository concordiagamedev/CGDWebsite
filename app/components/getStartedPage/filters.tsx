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
        <div className="entire-thing">
            <div className="filters">
                <div className="filters-title">Filters</div>
                
                <div className="track-div">
                    <div className="track-title">Track</div>
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
                    <div className="level-title">Level</div>
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
        </div>
    );
}
