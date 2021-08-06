import React from 'react'; 
import { useState, useEffect } from 'react';
import JavaData from './JavaData';

let Employee = () => {
    const [parentEmp, setParentEmp] = useState({}); // parent state 1.  
    const [parentEmpHike, setParentEmpHke] = useState(0); // parent state  
    const [childEmp, setChildEmp] = useState({}); // from callback    

    useEffect(() => {

        setParentEmp({ // 2
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
                parentEmp={parentEmp} // 3
                parentEmpHike={parentEmpHike}
                parentCallback={handleCallback}
            ></JavaData>
        </div>
    )
}

export default Employee;