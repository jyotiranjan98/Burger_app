import { useState } from 'react';
import Burger from './Burger';

const BurgerBuilder = () => {
    const [slices, setSlices] = useState([]);
    const [mobileNo, setmobileNo] = useState('');
    const [orderNumber, setOrderNumber] = useState('');

    const addSlice = (type) => {
        setSlices([...slices, { type }]);
    };

    const placeOrder = async () => {
        const baseUrl = "http://localhost:5000";
        const response = await fetch(`${baseUrl}/api/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mobileNo,
                totalBurgers: slices,
                totalPrice: slices.length * 20,
            }),
        });

        const data = await response.json();
        setOrderNumber(data.orderNumber);
    };

    return (
        <div>
            <Burger slices={slices} />
            <button onClick={() => addSlice('aloo-tikki')}>Add Aloo Tikki</button>
            <button onClick={() => addSlice('cheese')}>Add Cheese</button>
            <button onClick={() => addSlice('paneer')}>Add Paneer</button>
            <input
                type="text"
                value={mobileNo}
                onChange={(e) => setmobileNo(e.target.value)}
                placeholder="Enter Mobile Number"
            />
            <button onClick={placeOrder}>Place Order</button>
            {orderNumber && <p>Order Number: {orderNumber}</p>}
        </div>
    );
};

export default BurgerBuilder;
