import React from 'react'
import { useState } from 'react';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase.utils';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

export default function SignInForm() {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)

            resetFormFields()
        } catch (error) {

            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email'); break;
                case 'auth/user-not-found':
                    alert('no user associated with this email'); break;
                default:
                    console.error(error);
            }
            console.error(error);
        }
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an Account</h2>
            <span>Sign In with your email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type='email' required name="email" value={email} onChange={handleChange} />
                <FormInput label='Password' type='password' required name="password" value={password} onChange={handleChange} />

                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}
