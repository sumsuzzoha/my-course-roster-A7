import PropTypes from "prop-types";
import './Cart.css'

const Cart = ({ creditHours, totalPrice, selectedCourses,handleRemoveCartCourse }) => {
    const remainingCrHours = 20 - creditHours;


    return (
        <div className="lg:w-1/3 my-4 lg:my-0 bg-white rounded-lg mx-auto p-4 cart-body">
            <h3 className="text-lg my-6 mx-auto border-b-black cr-hr">Credit Hours Remaining {remainingCrHours} hr</h3>
            <hr />
            <div>

                <h3 className="my-4 text-xl font-bold">Course Name</h3>
                {
                    selectedCourses.map(course =>
                        <ol key={course.id}>
                            <li className="flex items-center esp-text-color mb-2">
                                <p className="w-3/4">{course.title}</p>
                                <div  >
                                    <button onClick={()=>handleRemoveCartCourse(course.id, course.credit_hours,course.price)} className="text-sm	 btn-remove">Remove</button>
                                </div>
                            </li>
                        </ol>
                    )
                }
            </div>
            <hr />
            <h5 className='my-4 font-medium esp-text-color'>Total Credit Hour: {creditHours}</h5>
            <hr />
            <h5 className='my-4 font-semibold esp-text-color'>Total Price: {totalPrice} USD</h5>
        </div>
    );
};
Cart.propTypes = {
    creditHours: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    selectedCourses: PropTypes.array.isRequired,
    handleRemoveCartCourse: PropTypes.func.isRequired
}

export default Cart;