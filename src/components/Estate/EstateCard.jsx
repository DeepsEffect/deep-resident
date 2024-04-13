import { NavLink } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

/* eslint-disable react/prop-types */
const EstateCard = ({ estate }) => {
  const {
    id,
    image,
    estate_title,
    price,
    description,
    status,
    location,
    segment_name,
  } = estate;

  return (
    <div className="card bg-base-100 shadow-xl group overflow-hidden">
      <figure className=" p-4 lg:p-6 border relative">
        <img
          className="h-full lg:h-96 w-full box-border rounded-2xl transform transition-transform group-hover:scale-105"
          src={image}
          alt={`image of ${estate_title}`}
        />
        <button className="absolute btn glass btn-primary top-10 left-10 text-white font-bold">
          {status}
        </button>
        <button className="absolute btn glass btn-primary top-10 left-[120px] text-white font-bold">
          {segment_name}
        </button>
        <div className=" flex items-center gap-2 absolute bottom-10 left-10 text-white font-bold">
          <CiLocationOn className="text-xl" />
          <p>{location}</p>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        <p>price: {price}</p>
        <p>{description}</p>
        <NavLink to={`/estateDetails/${id}`}>
          <div className="card-actions ">
            <button className="btn btn-primary w-full">View Details</button>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default EstateCard;
