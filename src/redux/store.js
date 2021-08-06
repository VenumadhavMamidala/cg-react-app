//// create store using redux 
import { createStore } from "redux";
import Reducer from "./reducer";

console.log(`store invoked.`);


// step 2 . create store 

const store = createStore(Reducer, { data: `Some data to start store...` });

// const store = createStore(Reducer);

export default store;


//// create store using redux toolkit 

// import { configureStore } from '@reduxjs/toolkit'

// export default configureStore({
//     reducer: {
//         counter: counterReducer,
//     },
// })