import Datetime from 'react-datetime';
import { useState } from 'react';

import './landingPage.css';

export default function LandingPage() {

    const [ mathBirthday, setMathBirthday ] = useState(0);
    const [ age, setAge ] = useState(0);
    const [ error, setError ] = useState(null);

    const handleChange = (e) => {
        const dateSelected = new Date(e);
        const ageInMilliseconds = Date.now() - dateSelected.getTime();
        if (ageInMilliseconds < 1) {
            setAge(0);
            setError('Invalid date selected');
            return false; 
        }
        const ageObject = new Date(ageInMilliseconds);
        const ageParsed = Math.abs(ageObject.getUTCFullYear() - 1970);
        const ageMath = Math.pow(10, Math.abs(ageParsed));
        setError(null)
        setAge(ageParsed);
        setMathBirthday(ageMath);
    }

    return (
        <div className='page'>
            <div className='cover'>
                <h1>Math Birthday</h1>
                <div>
                    <label className='text'>Choose your birth date</label>
                    <Datetime
                        timeFormat={false}
                        onChange={handleChange}
                    />
                </div>

                {
                    age > 0 &&
                        <ul className='information'>
                            <li>Age: { age }</li>
                            <li>Math birthday: { mathBirthday }</li>
                        </ul>
                }
                {
                    error &&
                        <div className='error'>
                            { error }
                        </div>
                }
            </div>
        </div>
    )
};

