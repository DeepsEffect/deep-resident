import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col max-w-md p-6 dark:bg-gray-50 dark:text-gray-800 mx-auto mt-10">
      <Helmet>
        <title>Deep-Resident | User Profile</title>
      </Helmet>
      <img
        src={user?.photoURL}
        alt="user image"
        className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square"
      />
      <div>
        <h2 className="text-xl font-semibold">{user.displayName}</h2>
        <span className="block pb-2 text-sm dark:text-gray-600">
          {user?.email}
        </span>
      </div>
    </div>
  );
};

export default UserProfile;
