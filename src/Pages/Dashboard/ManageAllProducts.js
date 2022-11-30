import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ConfirmationMOdal from '../Shared/ConfirmationModal';
import Spinner from '../Shared/Spinner';

const ManageAllProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null)

    const closeModal = () => {
        setDeletingProduct(null)
    }




    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            try {
                const res = await fetch('https://assignment-twelve-server-nine.vercel.app/products')
                const data = await res.json()
                return data
            }
            catch (error) {

            }
        }
    })

    const handleDeleteProduct = product => {
        fetch(`https://assignment-twelve-server-nine.vercel.app/products/${product._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`${product.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <h2 className="text-3xl mb-5">Manage Products :  {products?.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Seller Name</th>
                            <th>Resale Price</th>
                            <th>Year of use</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={product.picture} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{product.name}</td>
                                <td>{product.sellerName}</td>
                                <td>{product.resalePrice}</td>
                                <td>{product.yearOfUse}</td>
                                <td>
                                    <label
                                        onClick={() => setDeletingProduct(product)}
                                        htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationMOdal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.name}, it can not be undone.`}
                    modalData={deletingProduct}
                    successAction={handleDeleteProduct}
                    successButtonName='Delete'
                    closeModal={closeModal}
                ></ConfirmationMOdal>
            }
        </div>
    );
};

export default ManageAllProducts;