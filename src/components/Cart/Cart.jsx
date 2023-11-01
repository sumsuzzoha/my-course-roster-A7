import './Cart.css'

const Cart = () => {
    return (
        <div className="lg:w-1/3 my-4 lg:my-0 bg-white rounded-lg mx-auto p-4 cart-body">
            <h3 className="my-6 mx-auto border-b-black">Credit Hours Remaining {} hr</h3>
            <hr />
            <h3 className="my-4">Course Name</h3>
            <hr />
            <h5 className='my-4'>Total Credit Hour: {}</h5>
            <hr />
            <h5 className='my-4'>Total Price: b {} USD</h5>
        </div>
    );
}; 

export default Cart;