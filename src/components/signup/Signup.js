import React, { useState } from 'react';
import FirstNameHooks from '../../hooks/FirstNameHooks'
import LastNameHooks from '../../hooks/LastNameHooks';

function Signup() {

    const [firstName, handleFirstNameOnChange, firstNameError] = FirstNameHooks();
    const [LastName, handleLastNAmeOnChange, LastNameError, setOnFocus] = LastNameHooks();

    return (
        <div>
            <form>
                <input name='firstName' />
                <div>{firstNameError && firstNameError}</div>
                <input name='lastName' onChange={handleLastNAmeOnChange} onFocus={() => setOnFocus(true)}/>
                <div>{lastNameError && lastNameError}</div>
            </form>
        </div>
    )
}

export default Signup
