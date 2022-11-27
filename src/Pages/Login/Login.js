import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthProvider';


const Login = () => {
    const [userEmail, setUserEmail] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const { login, signInWithGoogle, resetPassword } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        login(email, password)
            .then(result => {
                toast.success('login successful')
                navigate(from, { replace: true })
                console.log(result.user);
            })
            .catch(err => console.error(err))
        form.reset()
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                toast.success('signed in with google')
                navigate(from, { replace: true })
            })
    }

    const handleReset = () => {
        resetPassword(userEmail)
            .then(() => {
                toast.success('reset link has been sent, please check email')
            })
            .catch(err => toast.error(err.message))
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input onBlur={event => setUserEmail(event.target.value)} type="text" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' className="input input-bordered" />
                        <label className="label">
                            <button onClick={handleReset} className="label-text-alt link link-hover">Forgot password?</button>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p>New to Mobile Haat <Link to='/signup' className='text-secondary'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline border-0 w-full'>CONTINUE WITH google<FcGoogle className='w-10'></FcGoogle> </button>
            </div>
        </div>

    );
};

export default Login;