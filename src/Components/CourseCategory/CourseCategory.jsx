import { useState } from "react";

const CourseCategory = () => {
    const [courses, setCourses] = useState([
        "UX & Design",
        "Marketing",
        "Product Management",
        "Engineering",
        "Consultants",
        "Agile Coaches",
        "Sales"
    ])
    return (
        <div className="mt-10">
            <ul className="flex gap-2">
                {courses.map((course, index) => (
                    <li className="border-2 rounded-full py-4 px-6 hover:bg-[#F1F3FD]" key={index}>{course}</li>
                ))}
            </ul>
        </div>
    );
};

export default CourseCategory;