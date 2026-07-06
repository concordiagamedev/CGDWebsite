import "./courseList.css"

export default function CourseList(){
    //course card template
    let courseCard = {
        name: "Course Name example",
        link: "https://www.concordiagamedev.ca/", //filler link
        prereqs: "Prereqs",
        type: "Online",
        level: "Beginner",
        length: "8 weeks",
        price: "$$"
    }

    return(
        <div className="entire-thing-course">
            <div className="course-list-title">Course List</div>
            <div className="course-card">
                <h3 className="course-name">
                    <a
                        href={courseCard.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {courseCard.name}
                    </a>
                </h3>

                <p className="prereqs">{courseCard.prereqs}</p>

                <div className="course-info">
                    <span>{courseCard.type}</span>
                    <span>•</span>
                    <span>{courseCard.level}</span>
                    <span>•</span>
                    <span>{courseCard.length}</span>
                </div>

                <div className="course-price">
                    {courseCard.price}
                </div>
                
            </div>

        </div>

    );
}
