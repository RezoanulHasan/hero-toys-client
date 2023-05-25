import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div className="flex justify-center items-center    h-[calc(100vh-68px)]  ">
          <div className="w-100 h-100 border-4 border-red-300 rounded-full animate-spin">
            <span className='text-5xl  font-bold'>Loadding...</span>
          </div>
        </div>
        </div>
    );
};

export default Spinner;