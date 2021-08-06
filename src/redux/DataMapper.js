import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Action from './actions';
import ReduxApp from './ReduxApp';

// step 5 - use redux in our component - 
// create two action methods 
// send data to store 

// maps current state data to store object 
const mapStateToProps = (state) => {
    // state.data = 'Some data';
    console.log('state mapped to props, state.data: ' + state.data);
    return {
        data: state.data
    }
}

// sends state data to redux store 

const mapDispatchToProps = (dispatch) => {
    console.log('map dispatched to props');
    return bindActionCreators({ onChange: Action }, dispatch);
}

// connect the above two methods 

const DataMapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxApp)

export default DataMapper;