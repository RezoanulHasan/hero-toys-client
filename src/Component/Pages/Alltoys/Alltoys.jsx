import React, { useState } from 'react';
import GetRandomColor from '../../Shared/GetRandomColor/GetRandomColor';
import useTitle from '../../../hooks/useTitle';
import { useLoaderData, useNavigate } from 'react-router-dom';


const Alltoys = () => {

    //for title
    useTitle('All-toys');

//random color
  const textColor = GetRandomColor();

  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts.slice(0, 20)); // Limiting initial products to 20 items
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [showAllData, setShowAllData] = useState(false);

  useTitle('All-toys');

  // Filter price function and search bar
  const handlePriceFilter = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    if (selectedPriceRange === 'All') {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (selectedPriceRange === '0-100') {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.price >= 0 &&
        product.price <= 100
      );
    } else if (selectedPriceRange === '101-500') {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.price >= 101 &&
        product.price <= 500
      );
    } else if (selectedPriceRange === '501-1000') {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.price >= 501 &&
        product.price <= 1000
      );
    }
  });

  const handleShowAllData = () => {
    setShowAllData(true);
  };

  return (
    <>
      <div className="m-10">
        <h1
          style={{ color: textColor }}
          className="font-bold font-sans text-3xl text-center mb-10 border-x-4 border-indigo-500"
        >
          All-Toys :- {products.length}
        </h1>

        <div className="flex justify-center gap-5  mb-10">
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
              <option>0-100</option>
              <option>101-500</option>
              <option>501-1000</option>
            </select>
          </div>
        </div>

        <div className="   overflow-x-auto w-full">
          <table className="table w-full  ">
            <thead>
              <tr>
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2"> seller Name</th>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Sub-category</th>
                <th className="px-4 py-2">quantity</th>
                <th className="px-4 py-2">Price</th>
             
              </tr>
            </thead>
            <tbody className="">
              {showAllData ? (
                products.map((product) => (
                  <Card key={product._id} product={product} products={products} />
                ))
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Card key={product._id} product={product} products={products} />
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
        <div className="text-center">
          {products.length > 20 && !showAllData && (
            <button
              className="btn bg-black text-pink-400 mb-10 mt-4 rounded-full center btn-lg sm:btn-sm md:btn-md lg:btn-lg hover:bg-primary-700"
              onClick={handleShowAllData}
            >
              Show All Data
            </button>
          )}
        </div>
      </div>
    </>
  );
};



const Card = ({ product, products }) => {
  const { _id, name, quantity, price, rating, category, details, photo, seller, email } = product;


  const navigate = useNavigate();
  const handleView = (id) => {
    navigate(`/product/view/${_id}`);
  };


  return (
    <>
   
      <tr className="border-b  border-gray-200 hover:bg-gray-100">
        <td className="px-4 py-2"></td>
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
         <button onClick={() => handleView()} 
              className="btn bg-black text-pink-400 mb-10 mt-4 rounded-full center  hover:bg-primary-700"
         
            >
              View Details
            </button> </td>
      </tr>
     
    </>
  );
};

export default Alltoys;
