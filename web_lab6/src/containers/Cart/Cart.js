import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../Redux/reducer/reducers";

const Cart = () => {
    const item = useSelector((state) => state.chair.selectedChair)
    const dispatch = useDispatch()
    const handleClickIncrease = (chair) => {
        dispatch(increment({id: chair}))
    }
    const handleClickDecrease = (chair) => {
        dispatch(decrement({id: chair}))
    }
    return (
        <div>
            {item.map((selectedItem) => (
                <div key={selectedItem.id}>
                    <h2>{selectedItem.title}</h2>
                    <p>Price: ${selectedItem.price}</p>
                    <img
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        style={{ width: '400px', height: 'auto' }}
                    />
                    <p>quantity: {selectedItem.quantity}</p>
                    <button onClick={()=> handleClickIncrease(selectedItem.id)}>+</button>
                    <button onClick={() => handleClickDecrease(selectedItem.id)}>-</button>
                </div>
            ))}
        </div>
    )
}


export default Cart;