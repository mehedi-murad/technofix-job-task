import { useState } from "react";

const Category = () => {
    const [categories, setCategories] = useState([
        'Brainstorming',
        'Diagramming',
        'Meetings & Workshops',
        'Scrum Events',
        'Mapping',
        'Research & Design',
        'Strategic Planning'
      ]);
    return (
        <div className="mt-10">
            <ul className="flex flex-col md:flex-row gap-2 justify-center">
                {categories.map((category, index) => (
                    <li className="border-2 rounded-full py-4 px-4 hover:bg-[#F1F3FD]" key={index}>{category}</li>
                ))}
            </ul>
        </div>
    );
};

export default Category;