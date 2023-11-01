import { useState } from "react";
import Cart from "../Cart/Cart";
import Courses from "../Courses/Courses";

const Home = () => {

 const [selectedCourses, setSelectedCourses] = useState([]);

    const handleSelectCourse = course => {
        const newCoursesArray = [...selectedCourses, course];
        setSelectedCourses(newCoursesArray);
        // console.log(course);
    }
    console.log(selectedCourses);

    return (
        <div className="lg:mx-auto">
            <h3 className="text-3xl	font-bold my-8">Course Registration</h3>
            <div className="lg:flex lg:flex-row-reverse gap-3 lg:mx-4 ">
                <Cart></Cart>
                <Courses
                    handleSelectCourse={handleSelectCourse}
                ></Courses>
            </div>
        </div>
    );
};

export default Home;