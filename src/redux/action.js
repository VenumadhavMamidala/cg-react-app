// step 4 . call an action 

const Action = (newData) => {

    console.log('Action was taken.');

    // similar to encapsulation in java 
    return {
        data: newData,
        type: 'DATA_CHANGED'
    }
}
export default Action;