import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { toast } from "react-hot-toast";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);

  const handleSubmitChanges = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const photoUrl = e.target.photoUrl.value;
    console.log(name, photoUrl);

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        // console.log("successfully saved", result);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        toast.success(`Updated Successfully`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="grid max-w-screen-xl mt-6 lg:mt-10 grid-cols-1 items-center gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <div className="flex flex-col justify-between ">
        <div className="space-y-2 mb-4">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Update Profile
          </h2>
          <p>User Email: {user?.email}</p>
        </div>
        {user && (
          <img
            src={user.photoURL}
            alt=""
            className=" h-52 md:h-64 lg:h-96 rounded-xl object-cover"
          />
        )}
      </div>
      <form onSubmit={handleSubmitChanges} noValidate="" className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm">
            Change Username
          </label>
          <input
            defaultValue={user?.displayName}
            name="username"
            type="text"
            placeholder=""
            className="w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="photoUrl" className="text-sm">
            Change Photo Url
          </label>
          <input
            defaultValue={user?.photoURL}
            name="photoUrl"
            type="photoURL"
            className="w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <button className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50">
          Update Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
