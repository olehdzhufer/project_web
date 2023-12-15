import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    selectedChair: []
}
const findChairIndexById = (selectedChair, id) => {
    return selectedChair.findIndex(chair => chair.id === id);
};
export const counterSlice = createSlice({
    name: 'chair',
    initialState,
    reducers: {
        increment: (state, action) => {
            const {id} = action.payload;
            const chairIndex = findChairIndexById(state.selectedChair, id)

            if (chairIndex !== -1){
                state.selectedChair[chairIndex].quantity += 1;
            }
        },
        decrement: (state, action) => {
            const { id } = action.payload;
            const chairIndex = findChairIndexById(state.selectedChair, id);

            if (chairIndex !== -1) {
                const chairItem = state.selectedChair[chairIndex];
                chairItem.quantity -= 1;

                if (chairItem.quantity === 0) {
                    state.selectedChair.splice(chairIndex, 1);
                }
            }
        },
        addToCart: (state, action) => {
            const {id} = action.payload;
            const chairIndex = findChairIndexById(state.selectedChair, id);

            if (chairIndex !== -1) {
                state.selectedChair[chairIndex].quantity += 1;
            } else {
                state.selectedChair = [...state.selectedChair, {...action.payload, quantity: 1}];
            }
        },
    },
})

export const {increment, decrement, addToCart} = counterSlice.actions

export default counterSlice.reducer

