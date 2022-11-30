import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Spinner from '../Shared/Spinner';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const imageHostKey = process.env.REACT_APP_imgbb_key
    const navigate = useNavigate()

    const { data: categories, isLoading, } = useQuery({
        queryKey: ['category_id'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/productCategory`)
            const data = await res.json()
            return data
        }
    })

    const handleAddProduct = data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        category_id: data.category_id,
                        picture: imgData.data.url,
                        name: data.name,
                        location: data.location,
                        resalePrice: data.resalePrice,
                        originalPrice: data.originalPrice,
                        yearOfUse: data.yearOfUse,
                        sellerName: data.sellerName
                    }

                    // save product info to database
                    fetch(`http://localhost:5000/products`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`${data.name} is successfully added`)
                            console.log(result);
                            // navigate('/dashboard/manage-doctors')
                        })
                }
            })
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="4xl font-extrabold">Add a product from here</h2>
            <p> Note: <br />
                pick 0 in category for java phones,<br />
                pick 1 in category for android phones,<br />
                pick 2 in category for iphones <br />

            </p>

            <form onSubmit={handleSubmit(handleAddProduct)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">category_id </span>
                    </label>
                    <select
                        {...register("category_id")}
                        className="select input-bordered w-full max-w-xs">
                        <option disabled selected>Pick a category [ note : 0 = java Phones,
                            1 = android Phones,
                            2 = iPhones]
                        </option>
                        {
                            categories.map(category => <option
                                key={category._id}
                                value={category.category_id}
                            >
                                {category.category_id}


                            </option>)
                        }
                    </select>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">picture</span>
                        </label>
                        <input type="file"
                            {...register("image", { required: "Photo is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.img && <p className='text-red-600'>{errors.img.message}</p>}
                        <input />
                    </div>
                    <input />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">name</span>
                    </label>
                    <input type="text"
                        {...register("name", { required: "Name is required" })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    <input />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">location</span>
                    </label>
                    <input type="text"
                        {...register("location", { required: "Name is required" })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    <input />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">resale Price</span>
                    </label>
                    <input type="number"
                        {...register("resalePrice", { required: "Name is required" })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    <input />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">original Price</span>
                    </label>
                    <input type="number"
                        {...register("originalPrice", { required: "Name is required" })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    <input />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">year Of Use</span>
                    </label>
                    <input type="number"
                        {...register("yearOfUse", { required: "Name is required" })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    <input />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="taxt"
                        {...register("sellerName", {
                            required: true
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    <input />
                </div>


                <input className='btn btn-primary w-full mt-5 bg-gradient-to-r from-primary to-secondary text-white' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;