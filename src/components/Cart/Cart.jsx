import PropTypes from "prop-types";
import './Cart.css'

const Cart = ({ creditHours, totalPrice, selectedCourses }) => {
    const remainingCrHours = 20 - creditHours;

    console.log(selectedCourses);

    return (
        <div className="lg:w-1/3 my-4 lg:my-0 bg-white rounded-lg mx-auto p-4 cart-body">
            <h3 className="my-6 mx-auto border-b-black">Credit Hours Remaining {remainingCrHours} hr</h3>
            <hr />
            <div>

                <h3 className="my-4">Course Name</h3>
                {/* <p>{selectedCourses.length}</p> */}
                

                <ol>
                    {/* <ul>
                        {items.map((item, index) =>
                            <li key={index}>
                                {`Item ${index + 1}: ${item}`}
                            </li>
                        )}
                    </ul> */}
                </ol>

                <ol>
                    {
                        selectedCourses.map(course =><li key={course.id}>{course.title}</li>)
                    }
                </ol>



            </div>
            <hr />
            <h5 className='my-4'>Total Credit Hour: {creditHours}</h5>
            <hr />
            <h5 className='my-4'>Total Price: {totalPrice} USD</h5>
        </div>
    );
};
Cart.propTypes = {
    creditHours: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    selectedCourses: PropTypes.array.isRequired
}

export default Cart;