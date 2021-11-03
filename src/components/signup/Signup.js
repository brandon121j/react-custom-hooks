import React, { useState } from 'react';
import FirstNameHooks from '../../hooks/FirstNameHooks'

function Signup() {

    const [firstName, handleFirstNameOnChange, firstNameError] = FirstNameHooks()

    return (
        <div>
            <form>
                <input name='firstName' />
                <div>{firstNameError && firstNameError}</div>
            </form>
        </div>
    )
}

export default Signup
