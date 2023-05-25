
import React, { useContext, useRef, useState} from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../providers/AuthProvider';

import {FaGoogle,FaGithubSquare} from "react-icons/fa";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../../Firebase/Firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import useTitle from '../../hooks/useTitle';


const auth = getAuth(app);

const Login = ( ) => {
  useTitle("Login")

  const emailRef = useRef();
    const { signIn , signInWithGoogle,signInWithGithub} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    console.log(location)

    const from = location.state?.from?.pathname || '/';
  

    function handleLogin (event) {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
    

      signIn(email, password)
      .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser)
          form.reset();
          event.target.reset();
          navigate(from,{replace:true})
          alert("Sign In successfully Welcome");
          //toast.success("Success Notification !", {
          // position: toast.POSITION.TOP_CENTER
          //});
    

      })

      .catch(error => {
        console.log(error);
        if (error.code === 'auth/user-not-found') {
          setEmailError('Email not found. Please try again.');
        } else if (error.code === 'auth/wrong-password') {
          setPasswordError('Password does not match. Please try again.');
        } else {
          console.log(error);
        }
      });
      // Submit form data
      const formData = {email, password };
      console.log(formData);
      setErrorMessage(' email or password   not match. Please try again.');

     
    }

    const handleResetPassword =(event)=> {
   
      const email = emailRef.current.value;
      if (!email) {
          //alert('Please provide your email address to reset password')
          toast.warn("Please provide your email address to reset password", {
            position: toast.POSITION.TOP_CENTER
          });
          return;
      }
      sendPasswordResetEmail(auth, email)
          .then(() => {
              //alert('Please check your email')

              toast.error("Please check your email", {
                position: toast.POSITION.TOP_CENTER
              });
          })
          .catch(error => {
              console.log(error);
            
          })


        }


    const handleGoogleSignIn = () => {
      signInWithGoogle()
 
      .then(result => {
          const loggedUser = result.user;
          navigate(from,{replace:true})
          console.log(loggedUser);
          toast.success("Sign In successfully Welcome", {
            position: toast.POSITION.TOP_CENTER
          });

      })
      .catch(error => {
          console.log(error)
      })
  }

 


  const handleGithubSignIn = () => {
    signInWithGithub ()
    .then( result => {
        const loggedUser = result.user;
        navigate(from,{replace:true})
        console.log(loggedUser);
        toast.success("Sign In successfully Welcome", {
          position: toast.POSITION.TOP_CENTER
        });

   
    })
    .catch(error => {
        console.log(error)
    })

}


    return (
        <> 
         <div className='m-5'>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl text-black  text-center font-bold mb-4">Log In</h2>
       
      {emailError && <div className='text-red-500'  >{emailError}</div>}
      {passwordError && <div className='text-green-500' >{passwordError}</div>}

          <form onSubmit={handleLogin} >
  
            <div className="mb-6">
              <label htmlFor="email" className="block text-black font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" ref={emailRef}className="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-red-500" placeholder="Enter your email" required />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block  text-black font-bold mb-2">Password</label>
              <input type="password" id="password" name="password" className="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-red-500" placeholder="Enter your password" required />
            </div>
            <div className='text-center'>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Log In</button>
            </div>
          </form>
{ /* Login link */}
 <p className="text-center  text-green-500 text-xl">
    <small>
      If you new go to the Register page{" "}
      <Link to="/register">
        <button className="btn btn-outline btn-warning">Register</button>
      </Link>
    </small>
  </p>
  <p className="text-center  text-red-500 text-xl"><small>Forget Password? Please <button onClick={handleResetPassword} className='btn btn-link'>Reset Password</button></small></p>

  <div className='flex gap-4'>
                    <button onClick={handleGoogleSignIn} className="btn btn-primary "><FaGoogle></FaGoogle>-Google</button>

 <button onClick={handleGithubSignIn} className="btn btn-primary"><FaGithubSquare
></FaGithubSquare>-Github</button>
                    </div>

        </div>
      </div>
      <ToastContainer></ToastContainer>
      </div>

 
</>
    );
};

export default Login;