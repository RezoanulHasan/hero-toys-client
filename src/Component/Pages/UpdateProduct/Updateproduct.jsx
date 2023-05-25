import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';

const UpdateProduct = () => {
  useTitle('Update Toy');

  const Product = useLoaderData();

  console.log(Product);
  const { _id, name, quantity, price, rating, category, details, photo } = Product;

  const handleUpdateProduct = (event) => {
    event.preventDefault();

    const form = event.target;
    const updatedName = form.name.value;
    const updatedQuantity = form.quantity.value;
    const updatedPrice = form.price.value;
    const updatedRating = form.rating.value;
    const updatedCategory = form.category.value;
    const updatedDetails = form.details.value;
    const updatedPhoto = form.photo.value;

    const updateProduct = {
      name: updatedName,
      quantity: updatedQuantity,
      price: updatedPrice,
      rating: updatedRating,
      category: updatedCategory,
      details: updatedDetails,
      photo: updatedPhoto,
    };

    console.log(updateProduct);

    const url = `https://hero-toys.vercel.app/product/${_id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to update product');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Toy Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: 'Error',
          text: 'Failed to update toy',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };

  return (
    <div className="m-5">
      <div className="bg-emerald-500 p-24">
        <h2 className="text-2xl font-extrabold text-center mb-3">Update Toy: {name}</h2>
        <form onSubmit={handleUpdateProduct}>
          {/* form name and quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 lg:ml-4">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form price row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">$ Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="$ Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 lg:ml-4">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Rating"
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Sub-Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Category"
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 lg:ml-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Photo URL row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Update Toy" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
