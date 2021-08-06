import React from 'react';


// this is functional component, cpmpare this with class component below 

const ReduxApp = (props) => {

    const onChangeHandler = (evt) => {
        console.log('ReduxApp started.');
        props.onChange(evt.target.value);
    }
    return (
        <div>
            <h1 className="display-1 text-primary">Redux App Component</h1>
            <p>
                {props.data}
                {' '}
                <input onChange={onChangeHandler}>
                </input>
            </p>
        </div>
    );
}

export default ReduxApp;

// class ReduxApp extends React.Component {

//     onChangeHandler(evt) {
//         console.log('ReduxApp started.');
//         this.props.onChange(evt.target.value);
//     }
//     render() {
//         return (
//             <div>
//                 <h1 className="display-1 text-primary">Welcome Component</h1>
//                 <p>
//                     {this.props.data}
//                     {' '}
//                     <input onChange={this.onChangeHandler.bind(this)}>
//                     </input>
//                 </p>
//             </div>
//         );
//     }
// }