import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import GetRandomColor from '../../Shared/GetRandomColor/GetRandomColor';


const MyToys = () => {
  // For title
  useTitle('My-toys');

  // Random color
  const textColor = GetRandomColor();

  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [sortedProducts, setSortedProducts] = useState([]);

  const url = `https://hero-toys.vercel.app/product?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSortedProducts(data);
      });
  }, [url]);

  // Filter price function and search bar
  const handlePriceFilter = (event) => {
    setSelectedPriceRange(event.target.value);

    let sorted = [];

    if (event.target.value === 'All') {
      sorted = [...products];
    } else if (event.target.value === 'Descending') {
      sorted = [...products].sort((a, b) => b.price - a.price);
    } else if (event.target.value === 'Ascending') {
      sorted = [...products].sort((a, b) => a.price - b.price);
    }

    setSortedProducts(sorted);
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const renderedProducts = selectedPriceRange === 'All' ? filteredProducts : sortedProducts;

  // Delete function
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hero-toys.vercel.app/product/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your Product has been deleted.', 'success');
              const remaining = products.filter((pro) => pro._id !== _id);
              setProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <div className="m-10">
        <h1
          style={{ color: textColor }}
          className="font-bold font-sans text-3xl text-center mb-10 border-x-4 border-indigo-500"
        >
          My-Toys: {products.length}
        </h1>
        <div className="flex justify-center gap-5 mb-10">
          <div className="text-center">
            <h1 className="text-xl text-center mb-2 text-emerald-500">Search Toys by Name</h1>
            <input
              type="text"
              placeholder="search"
              className="input input-bordered bg-emerald-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="">
            <h1 className="text-xl text-center mb-2 text-emerald-500">Toys price</h1>
            <select
              className="select select-success w-full max-w-xs"
              onChange={handlePriceFilter}
              value={selectedPriceRange}
            >
              <option>All</option>
              <option>Descending</option>
              <option>Ascending</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2"> Seller Name</th>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Sub-category</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {renderedProducts.length > 0 ? (
                renderedProducts.map((product) => (
                  <To key={product._id} product={product} products={products} handleDelete={handleDelete} />
                ))
              ) : (
                <tr>
                  <td colSpan="7">
                    <p
                      className="text-red-600 mb-10 text-2xl text-center animated-text"
                      style={{ color: textColor }}
                    >
                      No product matches.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};




const To = ({ product, products , handleDelete}) => {
    const { _id, name, quantity, price, rating, category, details, photo, seller, email } = product;
  
    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`/product/update/${_id}`);
      };
  
    return (
      <>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="px-4 py-2">
                  <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </td>
          <td className="px-4 py-2">
            <div className="avatar">
              <div className="rounded w-24 h-24">{photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}</div>
            </div>
          </td>
          <td className="px-4 py-2">{seller}</td>
          <td className="px-4 py-2">{name}</td>
          <td className="px-4 py-2">{category}</td>
          <td className="px-4 py-2">{quantity}</td>
          <td className="px-4 py-2">${price}</td>
          <td className="px-4 py-2">  
           <button onClick={() =>handleEdit()} 
                className="btn bg-black text-pink-400 mb-10 mt-4 rounded-full center  hover:bg-primary-700"
           
              >
               update
              </button> </td>
        </tr>
      </>
    );
  };
  
   

export default MyToys;