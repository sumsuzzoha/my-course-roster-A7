import PropTypes from "prop-types";
import { useState } from "react";
import Course from "../Course/Course";
import { useEffect } from "react";

const Courses = ({handleSelectCourse}) => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 lg:gap-auto lg:w-2/3">
            {/* <h3>Courses Section</h3> */}
            {
                courses.map(course => <Course key={course.id} course={course} handleSelectCourse={handleSelectCourse}></Course> )
            }
            
        </div>
    );
};
Courses.propTypes = {
    handleSelectCourse: PropTypes.func.isRequired
}
export default Courses;