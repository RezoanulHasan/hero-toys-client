import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Register = () => {

  useTitle('Register')

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [accepted, setAccepted] = useState(false);
  const [photoURL, setPhotoURL] = useState("");

  const { createUser } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();


  // Clear error
    setErrors("");

    // Validate form fields
    const errors = {};
    if (! name.trim()) {
      errors.name = "Name is required";}
       else if(! name || name.trim().length < 5 || !/^[A-Z]/.test(name.trim())){

errors.name = "Name must be at least 5 characters long and start with an uppercase letter";
       }
   
       
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = "Invalid email format";
    }
    if (!phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^\d{11}$/.test(phone.trim())) {
      errors.phone = "Invalid phone number format (must be 11 digits)";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.trim().length < 7) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (!photoURL.trim()) {
      errors.photoURL = "Photo URL is required";
    } else if (!/^http(s)?:\/\/[^\s]+$/.test(photoURL.trim())) {
      errors.photoURL = "Invalid photo URL format";
    }
 
    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

  createUser(email.trim(), password.trim())
 .then((userCredential) => {
   // Signed up successfully
   const user = userCredential.user;
   console.log(user);
   event.target.reset();
 
   toast.success(`Registration  successfully! Welcome, (${user.email})`, {
    position: toast.POSITION.TOP_CENTER
  });
   //alert(`Registration  successfully! Welcome, (${user.email})`);
   // Update user profile with name, phone number, and photo URL
     updateProfile( user,{
       displayName: name.trim(),
       phoneNumber: phone.trim(),
       photoURL: photoURL.trim()
     })
     .then(() => {
       console.log("User profile updated successfully");
     })
     .catch((error) => {
       console.log(error);
     });
 })
 .catch((error) => {
   console.log(error);
   setErrors({ email: error.message });
 })
    // Submit form data
    const formData = { name, email, phone, password, photoURL};
  
    // Clear form fields  
    console.log(formData);
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setPhotoURL("");



  };

    function handleAccepted() {
      setAccepted(!accepted);
    }

  return (
    <>

<div className='m-5'>

  <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">


    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <h2 className="text-center text-black text-3xl font-bold mb-4">Register</h2>

      {/* Name field */}
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-black">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          className={`w-full p-2 border ${
            errors.name ? "border-red-500" : "border-gray-400"
          } rounded`}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {errors.name && (
          <div className="text-red-500 text-xl mt-1">{errors.name}</div>
        )}
      </div>

      {/* Email field */}
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-black">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          className={`w-full p-2 border ${
            errors.email ? "border-red-500" : "border-gray-400"
          } rounded`}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errors.email && (
          <div className="text-red-500 text-xl mt-1">{errors.email}</div>
        )}
      </div>

      {/* Phone field */}
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2 text-black  ">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          className={`w-full p-2 border ${
            errors.phone ? "border-red-500" : "border-gray-400"
            } rounded`}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            />
            {errors.phone && (
            <div className="text-red-500 text-xl mt-1">{errors.phone}</div>
            )}
            </div>
{/* Photo field */}
<div className="mb-4">
        <label htmlFor="photoURL" className="block mb-2 text-black  ">
        PhotoURL <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="photoURL"
          className={`w-full p-2 border ${
            errors.photoURL ? "border-red-500" : "border-gray-400"
            } rounded`}
            value={photoURL}
            onChange={(event) => setPhotoURL(event.target.value)}
            />
            {errors.photoURL && (
            <div className="text-red-500 text-xl mt-1">{errors.photoURL}</div>
            )}
            </div>


  {/* Password field */}
  <div className="mb-4">
    <label htmlFor="password" className="block mb-2 text-black ">
      Password <span className="text-red-500">*</span>
    </label>
    <input
      type="password"
      id="password"
      className={`w-full p-2 border ${
        errors.password ? "border-red-500" : "border-gray-400"
      } rounded`}
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />
    {errors.password && (
      <div className="text-red-500 text-xl mt-1">{errors.password}</div>
    )}
  </div>
<div>
        <input
          onClick={handleAccepted}
          type="checkbox"
          className="form-check-input"
          id="accept"
          name="accept"
        />
        <label htmlFor="accept" className="form-check-label">-
          Accept <Link to="/terms" className="text-blue-600 hover:underline">
            Terms and Conditions
          </Link>
        </label>
      </div>

  
      {/* Submit button */}
      <div className="text-center  ">
        <button
          type="submit"
          disabled={!accepted}
          className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700  ${!accepted ? 'disabled:opacity-50 cursor-not-allowed' : ''}`}
        >
          Register
        </button>
      </div>
    </form>

    {/* Login link */}
    <p className="text-center text-green-500 text-xl">
      <small>
        if you already registered, go login page{" "}
        <Link to="/login">
       
          <button className="btn btn-outline btn-warning">Login</button>
        </Link>
      </small>
    </p>
    </div>
   </div>
   </div>
   <ToastContainer />
  </>
);


  
};

export default Register;