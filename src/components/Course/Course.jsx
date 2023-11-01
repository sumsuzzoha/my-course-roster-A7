import PropTypes from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import { AiOutlineRead } from 'react-icons/ai';
import './Course.css'
const Course = ({ course, handleSelectCourse }) => {
    const { cover_img, title, description, price, credit_hours } = course;
    return (
        <div className="bg-white rounded-lg mx-auto p-4 card-body">
            <div>
                <img className="mx-auto mb-4" src={cover_img} alt="" />
                <h3 className="text-lg font-semibold mb-3">{title}</h3>
                <p className="esp-text-color">{description}</p>
            </div>
            <div>
                <div className="flex my-5 items-center gap-2">
                    <span><FiDollarSign></FiDollarSign></span>
                    <p className="w-1/2 esp-text-color">Price: {price}</p>
                    <span><AiOutlineRead></AiOutlineRead></span><p className="esp-text-color">Credit: {credit_hours}</p>
                </div>
                <button className="rounded-lg btn-select" 
                onClick={()=>handleSelectCourse(course)}
                >Select</button>
            </div>

        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectCourse: PropTypes.func.isRequired
}

export default Course;