import React from 'react'
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export default function SignUpForm() {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('passwords dont match')
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)

            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()
        } catch (error) {
            console.error(error);
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already exists')
            } else {
                console.log(error);
            }
        }
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an Account</h2>
            <span>Sign Up with your email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type='text' required name="displayName" value={displayName} onChange={handleChange} />
                <FormInput label='Email' type='email' required name="email" value={email} onChange={handleChange} />
                <FormInput label='Password' type='password' required name="password" value={password} onChange={handleChange} />
                <FormInput label='Confirm Password' type='password' required name="confirmPassword" value={confirmPassword} onChange={handleChange} />

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}
