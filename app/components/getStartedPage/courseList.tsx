import "./courseList.css";
import type { Course } from "./courseData";

type CourseListProps = {
  courses: Course[];
};

export default function CourseList({ courses }: CourseListProps){
    return(
        <div className="entire-thing-course">
            <div className="course-list-title">Course List</div>

            <div className="course-list-grid">
                {courses.map((course) => (
                    <div className="course-card" key={course.name}>
                        <h3 className="course-name">
                            <a
                                href={course.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {course.name}
                            </a>
                        </h3>

                        <p className="prereqs">{course.prereqs}</p>

                        <div className="course-info">
                            <span>{course.type}</span>
                            <span>•</span>
                            <span>{course.track}</span>
                            <span>•</span>
                            <span>{course.level}</span>
                            <span>•</span>
                            <span>{course.length}</span>
                        </div>

                        <div className="course-price">
                            {course.price}
                        </div>
                    </div>
                ))}
            </div>

            {courses.length === 0 ? (
                <div className="empty-state">
                    No courses match the selected filters.
                </div>
            ) : null}
        </div>
    );
}
