import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/sing-up'>Sign up</Link>
                </li>
                <li>
                    <Link to='/sing-in'>Sign in</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
