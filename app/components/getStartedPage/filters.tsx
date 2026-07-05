import "./filters.css"

export default function Filters(){
    return(
        <div className= "entire-thing">
            <div className= "filters">
            <div className= "filters-title">Filters</div>
            
                <div className="track-div">
                    <div className="track-title">Track</div>
                    <div className="buttons-filter">
                        <button>Programming</button>
                        <button>Design</button>
                        <button>Art</button>
                    </div>
                </div>
                <div className="level-div">
                    <div className="level-title">Level</div>
                    <div className="buttons-filter">
                        <button>Beginner</button>
                        <button>Intermediate</button>
                        <button>Advanced</button>
                    </div>
                </div>
            </div>
        </div>
    );
}