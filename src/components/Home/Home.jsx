import { useState } from "react";
import Cart from "../Cart/Cart";
import Courses from "../Courses/Courses";

const Home = () => {

    const [selectedCourses, setSelectedCourses] = useState([]);
    const [creditHours, setCreditHours] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleSelectCourse = course => {
        const { credit_hours, price } = course;

        if ((creditHours + credit_hours) > 20) {
            alert('This Course is Exceed the Reamining Credit Limit')
            return;
        }

        for (const obj of selectedCourses) {
            if (obj.id === course.id) {
                alert('This Course Already Selected')
                return;
            }
        }
        const newCoursesArray = [...selectedCourses, course];
        setSelectedCourses(newCoursesArray);

        const sumCreditHours = creditHours + credit_hours;
        setCreditHours(sumCreditHours);

        const newPrice = totalPrice + price;
        setTotalPrice(newPrice);
    }

    const handleRemoveCartCourse = (id, credit_hours, price) => {
        const remainingSelectedCourses = selectedCourses.filter(selectedCourse => selectedCourse.id !== id)
        setSelectedCourses(remainingSelectedCourses);

        const remainingCourseCreditHours = creditHours - credit_hours;
        setCreditHours(remainingCourseCreditHours);

        const remainingPrice = totalPrice - price;
        setTotalPrice(remainingPrice);

    }

    return (
        <div className="lg:mx-auto">
            <h3 className="text-3xl	font-bold my-8">Course Registration</h3>
            <div className="lg:flex lg:flex-row-reverse gap-3 lg:mx-4 ">
                <Cart
                    creditHours={creditHours}
                    totalPrice={totalPrice}
                    selectedCourses={selectedCourses}
                    handleRemoveCartCourse={handleRemoveCartCourse}
                ></Cart>
                <Courses
                    handleSelectCourse={handleSelectCourse}
                ></Courses>
            </div>
        </div>
    );
};

export default Home;