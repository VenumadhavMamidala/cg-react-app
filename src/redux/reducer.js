// step 3. create reducer to handle state update requests 

const Reducer = (state, action) => {
    console.log(`Reducer invoked.`);

    // if (action.type == DATA_CHANGED)
    //     return 1;

    // else if (action.type == SALARY_CHANGED)
    //     return 2;


    switch (action.type) {
        case 'DATA_CHANGED':
            console.log('Data passed.');
            return Object.assign({}, state, { data: action.data });

        case 'SALARY_CHANGED':
            console.log('Data passed.');
            return Object.assign({}, state, { data: action.data });
        default:
            console.log('Default value was presented.');
            // return Object.assign({}, state, { data: action.data });

            return state;
    }
}
export default Reducer;
