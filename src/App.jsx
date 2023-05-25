import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from './Component/Shared/Navber/Navber';
import Spinner from './Component/Shared/Spinner/Spinner';
import Footer from './Component/Shared/Footer/Footer';
const App = () => {
  return (
    <div>
<Navber></Navber>
<div>{navigation.state === 'loading' && <Spinner></Spinner>  }</div>
  <div className='min-h-[calc(100vh-136px)]'>
<Outlet></Outlet>
<Footer></Footer>
</div>

    </div>
  );
};

export default App;