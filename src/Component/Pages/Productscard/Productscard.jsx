import React from 'react';
import Swal from "sweetalert2";
import {  useNavigate } from 'react-router-dom';

const Productscard = ({products, product , setProducts }) => {
    const { _id, name, quantity, price, rating, photo ,category } = product ;
    const navigate = useNavigate();
  
  //  const handleNavigation = () =>{
    //   navigate(`/product/${_id}`);
   // }

   const handleView = (id) => {
    navigate(`/product/view/${_id}`);
  };

  const handleEdit = (id) => {
    navigate(`/product/update/${_id}`);
  };


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://hero-toys.vercel.app/product/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product  deleted.',
                                'success'
                            )
                            const remaining = products.filter(pro => pro._id !== _id);
                            setProducts(remaining);
                        }
                    })

            }
        })
    }


    return (

<>


        <div  className='m-5'>
    <div>
  

    </div>
       <div className="card h-full  lg:card-side md:card-side bg-base-100 shadow-2xl">
       <figure><img  className='object-cover w-60 h-60  lg:h-full md:h-full  mb-6 rounded shadow-lg xl:h-80'  src={photo} alt="Movie" /></figure>
            <div className=" m-5 flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">  Name: {name}</h2>
                    <p> quantity:  {quantity}</p>
                    <p>$price:  {price}</p>
                    <p>Rating {rating}</p>
                    <p>Sub-category: {category}</p>
                </div>
                <div className="card-actions justify-end ">
                    <div className="btn-group btn-group-vertical space-y-4">

                 

                       
                    <button onClick={() => handleView()} className="btn">
        View
      </button>
      <button onClick={() => handleEdit()} className="btn">
        Edit
      </button>
                       
                     
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-orange-500">X</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};export default Productscard;        