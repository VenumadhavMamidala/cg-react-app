import React from 'react';
import Login from './Login';
class MyFileInput extends React.Component {
    constructor(props) {
        super()
        this.curriculum = React.createRef()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        alert(this.curriculum.current.files[0].name)
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <h1 className="display-1 text-primary">Form Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" ref={this.curriculum} />
                    <input type="submit" value="Submit" />
                </form>
                <Login/>
            </div>
        )
    }
}
export default MyFileInput;



// import React from 'react';

// class MyForm extends React.Component {
//     constructor(props) {
//         super();
//         this.state = { username: '', age: null, };
//     }
//     myChangeHandler = (event) => {
//         let nam = event.target.name;
//         let val = event.target.value;
//         this.setState({ [nam]: val });
//     }
//     render() {
//         return (
//             <form>
//                 <h1>Hello {this.state.username}
//                     {this.state.age} {this.state.salary} </h1>
//                 <p>Enter your name:</p>
//                 <input type='text' name='username'
//                     onChange={this.myChangeHandler} />
//                 <p>Enter your age:</p>
//                 <input type='text' name='age'
//                     onChange={this.myChangeHandler} />
//             </form>
//         );
//     }
// }
// export default MyForm;



// import React from 'react';

// class MyForm extends React.Component {
//     constructor(props) {
//         super();
//         this.state = { name: '' }; // -- compare Employee 
//         // other way is available 
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event) {
//         this.setState({ name: event.target.value });
//     }
//     handleSubmit(event) {
//         alert(this.state.name);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <div>
//                 <p>Emter data here</p>

// {/* <form action="index.html" method="POST"> */}
//                 <form onSubmit={this.handleSubmit}>
//                     <input type="text" value={this.state.username} onChange={this.handleChange} />
//                     <input type="submit" value="Submit"/>
//                 </form>

//                 <p>{this.state.name} </p>
//             </div>
//         )
//     }
// }
// export default MyForm;
