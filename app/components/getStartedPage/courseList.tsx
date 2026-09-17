import "./courseList.css";
import type { Course } from "./courseData";

type CourseListProps = {
  courses: Course[];
};

export default function CourseList({ courses }: CourseListProps){
    return(
        <section className="course-results" aria-labelledby="course-list-title">
            <h2 className="course-list-title" id="course-list-title">Course List</h2>

            <div className="course-list-grid">
                {courses.map((course) => (
                    <article className="course-card" key={course.name}>
                        <h3 className="course-name">
                            {course.link ? <a
                                href={course.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {course.name}
                            </a> : course.name}
                        </h3>

                        {course.prereqs ? (
                            <p className="prereqs">Prerequisites: {course.prereqs}</p>
                        ) : null}
                        {course.description ? (
                            <p className="prereqs">{course.description}</p>
                        ) : null}

                        <div className="course-info">
                            <span>{course.type}</span>
                            <span>•</span>
                            <span>{course.tracks.join(" / ")}</span>
                            {course.level ? (
                                <>
                                    <span>•</span>
                                    <span>{course.level}</span>
                                </>
                            ) : null}
                        </div>
                    </article>
                ))}
            </div>

            {courses.length === 0 ? (
                <div className="empty-state">
                    No courses match the selected filters.
                </div>
            ) : null}
        </section>
    );
}
