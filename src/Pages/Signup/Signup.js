import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Contexts/AuthProvider';

const Signup = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext)
    const [signupError, setSignupError] = useState("")

    const handleSignup = data => {
        console.log(data);
        setSignupError("")
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                toast.success("user created successfully")
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        console.log(data.name, data.email)
                        navigate(from, { replace: true })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                setSignupError(err.message)
                console.log(err)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                toast.success('signed in with google')
                navigate(from, { replace: true })
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>signup</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", { required: "Name is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                        <input />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", {
                                required: true
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                        <input />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 characters long" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must have at least one upper case ,special character and number" }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                        <input />
                    </div>
                    <input className='btn btn-primary w-full' value="Signup" type="submit" />
                    {
                        signupError && <p className='text-red-600'>{signupError}</p>
                    }
                </form>
                <br />
                <p>Already have an account <Link to='/login' className='text-secondary'>Please login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH google<FcGoogle className='w-10'></FcGoogle> </button>
            </div>
        </div>
    );
};

export default Signup;