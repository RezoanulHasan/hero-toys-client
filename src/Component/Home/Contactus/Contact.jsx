
import Swal from "sweetalert2";
import Lottie from 'lottie-react';
import contact from "../../../assets/contact.json"




const Contact = () => {




    function handleSubmit(event) {
      event.preventDefault();
      // Handle form submission here

      const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const textarea = form.textarea.value;
    const contact  = { name, email, textarea , phone };
    console.log(contact );

    fetch('https://hero-toys.vercel.app/contacts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
      
        },
    
        body:JSON.stringify(contact)
      })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: 'Success!',
                text: ' Message Send Successfully',
                icon: 'success',
                confirmButtonText: 'CLOSE'
            })
        }  form.reset();
    })
          
    }




    return (

<div className='m-5' >
  <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505153695651-9366147105f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)' }}>

  <h1 className='text-center font-bold text-white  mt-10 text-2xl' >  Contact-US </h1>

<div className='  flex justify-between  flex-col lg:flex-row   '    >
<div  className=' lg:w-1/2 w-full    mt-14'>

<Lottie  className=''      animationData={contact} loop={true} />

</div>

<div className=" lg:w-1/2 lg:m-3  w-full  flex items-center justify-center">
        <div className="max-w-full w-full   bg-emerald-500 shadow-lg rounded-lg p-6">
             <form onSubmit={handleSubmit} className="">
      <div className="my-4">
        <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"   required />
      </div>
      <div className="my-4">
        <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>
      </div>
      <div className="my-4">
        <label htmlFor="phone" className="block font-medium text-gray-700">Phone</label>
        <input type="tel" id="phone" name="phone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
      </div>
      <div className="my-4">
        <label htmlFor="textarea" className="block font-medium text-gray-700">Message</label>
        <textarea id="textarea" name="textarea"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" rows="5"required ></textarea>
      </div>
      <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
    </form>
    </div>  </div>   

 

        </div>
        </div>
        </div>
    );
};

export default Contact;