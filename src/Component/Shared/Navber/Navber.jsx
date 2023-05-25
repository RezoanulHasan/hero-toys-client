
import { AuthContext } from '../../providers/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink'
import { useContext } from 'react';

const Navber = () => {

  const {user, logOut} = useContext(AuthContext);
    console.log(user)
    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
    }


    return (
      <div className='m-5'>
        <header className="bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1622219596395-5b8e24349c37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60")' }}>
        <div  className='m-5'></div>
      <div className="  navbar  top-0 z-50  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-success lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li className=""> <ActiveLink to="/" >Home </ActiveLink> </li> 
           
              <li className=" "> <ActiveLink to="/addProduct" >Add A-Toy </ActiveLink> </li> 
            <li className=""> <ActiveLink to="/bookingShow" >Order List </ActiveLink> </li>
            <li className=""> <ActiveLink to="/alltoys" > All toys </ActiveLink>   </li> 
            <li className=""> <ActiveLink to="/mytoys" >My-Toys </ActiveLink> </li> 
            
              {user ?
            <li>
                <span className=''>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="User profile" title={user.displayName}  />
                </div>
              </label>
              <button onClick={handleLogout}>Log out</button>
                </span>
            </li>
            :
            <li><ActiveLink to="/login">Login</ActiveLink></li>
            }
            </ul>



          </div>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full">
                 <img src="https://i.ibb.co/Q9bBWwJ/Hero-Toys-Logo.png" alt="" />
                </div>
              </label>
              <a className=" normal-case text-2xl text-yellow-300">Hero Toys</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-white font-bold"> <ActiveLink to="/" >Home </ActiveLink> </li> 
          
            <li className="text-green-800  font-bold "> <ActiveLink to="/addProduct" >Add A-Toy </ActiveLink> </li> 
            <li className="text-white font-bold "> <ActiveLink to="/bookingShow" >Order-List </ActiveLink> </li>
            <li className="text-yellow-400  font-bold"> <ActiveLink to="/alltoys" > All-toys </ActiveLink>   </li> 
            <li className="text-white font-bold "> <ActiveLink to="/mytoys" >My-Toys </ActiveLink> </li> 
         
  
            {user ?
            <li>
                <span className=''>
                <label tabIndex={0} className=" btn btn-outline text-white btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="User profile" title={user.displayName}  />
                </div>
              </label>
              <button  className='btn btn-outline text-white' onClick={handleLogout}>Log out</button>
                </span>
            </li>
            :
            <li className="text-green-800 font-bold "><ActiveLink to="/login">Login</ActiveLink></li>
            }
         

          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-outline text-white "> <ActiveLink to="/blog" >BLog </ActiveLink> </button>
       
      </div>
      </div>
      </header>
    </div>
    
    );
};

export default Navber;
