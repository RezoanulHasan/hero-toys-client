
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GetRandomColor from '../../Shared/GetRandomColor/GetRandomColor';

import './Marquee.css'
const ProductCategory = () => {

  //random color
  const textColor = GetRandomColor();


  const navigate = useNavigate();
  const handleView = (id) => {
    navigate(`/product/view/${id}`);
  };

  const loadedProducts = useLoaderData();
  const categories = [...new Set(loadedProducts.map((product) => product.category))];

  return (
    <div className='mt-15 m-10 '>
       <h1
          style={{ color: textColor }}
          className="font-bold font-sans text-3xl text-center mb-10 mt-15 border-x-4 border-indigo-500"
        >
          All-PRODUCT :-{loadedProducts.length}
        </h1>

        <div className="marquee-container">
      <h1 className="marquee-text font-bold text-green-700 font-sans text-xl">   Here Exploer  Hero Toys by Subcategory</h1>
    </div>

        <h1
        
          className="   mb-5 mt-5 "
        >
    
        </h1>

      <Tabs>
        <TabList className='text-center text-pink-700 text-xl'>
          <Tab className=" text-green-700 text-bold text-3xl text-center">Hero-Toys</Tab> {/* Add the main tab name here */}
          {categories.map((category) => (
            <Tab key={category}>{category}</Tab>
          ))}
        </TabList>

        <TabPanel >
          <h2 className='text-center'></h2>
         
           {/* Add the main tab content name here */}
          <div>
            {loadedProducts
              .filter((product) => product.category === 'Main Category')
              .map((product) => (
                <div key={product._id}>
                  <h3>{product.name}</h3>
                  <p>{product.rating}</p>
                  {/* Render other product card information */}
                </div>
              ))}
          </div>
        </TabPanel>

        {categories.map((category) => (
          <TabPanel  key={category}>
            <h2>{category}</h2> {/* Display the category as the sub-tab content name */}
            <div   className='grid lg:grid-cols-3 grid-cols gap-5'>
              {loadedProducts
                .filter((product) => product.category === category)
                .map((product) => (

<div className='' key={product._id}>
<div className="card rounded  bg-pink-200   card-compact w-full h-full shadow-2xl">
  <figure><img   className='object-cover h-40 rounded shadow-lg 'src={product.photo} alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
<div className='flex mb-2'>
    <p className="text-xl ">Price:-${product.price}</p>
    <p className="text-xl " > rating:-{product.rating}</p>
    </div>
    <div className="card-actions justify-end">
      <button  onClick={() => handleView(product._id)}  className="btn bg-emerald-500 ">view deatils</button>
    </div>
  </div>
</div>


{/* Render other product card information */}
</div>


                
                
                ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ProductCategory;

