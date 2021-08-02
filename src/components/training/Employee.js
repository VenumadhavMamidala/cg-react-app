import React from 'react';
import { useState, useEffect } from 'react';
import JavaData from './JavaData';
// import Counter from './Counter';

let Employee = () => {
    const [emp, setEmp] = useState('');
    const [parentEmp, setParentEmp] = useState({}); // parent state  
    const [parentEmpHike, setParentEmpHke] = useState(0); // parent state  
    const [childEmp, setChildEmp] = useState({}); // from callback    

    useEffect(() => {

        setParentEmp({
            id: 201,
            name: 'Monu',
            salary: 20.5
        }
        );

        setParentEmpHke(10);
    }, []);

    const handleCallback = (childEmpData) => {
        setChildEmp(childEmpData);
        console.log(childEmpData);
    }

    return (
        <div>
            <h1 >Employee Component</h1>
            <p> parent {parentEmp.name}</p>
            <p> parent {parentEmpHike}</p>
            {/* <JavaData></JavaData> */}
            <p>parent {childEmp.name}</p>
            <JavaData
                parentEmp={parentEmp}
                parentEmpHike={parentEmpHike}
                parentCallback={handleCallback}
            ></JavaData>
            {/* <Counter></Counter> */}
        </div>
    )
}
export default Employee;
