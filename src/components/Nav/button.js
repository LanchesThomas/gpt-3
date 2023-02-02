import styled from 'styled-components'
import { useState, useEffect } from 'react'
import colors from '../../datas/colors'

const Login = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 200px;
    & button {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        font-family: 'Manrope', sans-serif;
        font-weight: 500;
        font-size: 18px;
        color: white;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    & .active {
        background-color: ${colors.button};
    }
`

const Button = () => {
    const [signInactive, setSignInActive] = useState(false)
    const [signUpactive, setSignUpActive] = useState(true)

    function toggleSignIn() {
        setSignInActive(true)
        setSignUpActive(false)
    }

    function toggleSignUp() {
        setSignUpActive(true)
        setSignInActive(false)
    }

    useEffect(() => {
        const signupButton = document.getElementById('signup-button')
        if (signUpactive) {
            signupButton.classList.add('active')
        } else {
            signupButton.classList.remove('active')
        }

        const signinButton = document.getElementById('signin-button')
        if (signInactive) {
            signinButton.classList.add('active')
        } else {
            signinButton.classList.remove('active')
        }
    })

    return (
        <Login className='button'>
            <button onClick={toggleSignIn} id="signin-button">
                Sign In
            </button>
            <button
                onClick={toggleSignUp}
                id="signup-button"
                className="active"
            >
                Sign Up
            </button>
        </Login>
    )
}

export default Button
