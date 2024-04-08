import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const EstateCard = ({ estate }) => {
  const {
    id,
    image,
    estate_title,
    price,
    description,
    status,
    segment_name,
    area,
    location,
    facilities,
  } = estate;

  return (
    <div className="card bg-base-100 shadow-xl ">
      <figure className=" p-4 lg:p-6">
        <img
          className="h-full lg:h-96 w-full box-border rounded-2xl"
          src={image}
          alt={`image of ${estate_title}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        <p>price: {price}</p>
        <p>{description}</p>
        <p>{segment_name}</p>
        <p>status: {status}</p>
        <p>Area: {area}</p>
        <p>Location: {location}</p>
        <p>
          <strong>Facilities: </strong>
        </p>
        <div>
          {facilities.map((facility, idx) => (
            <li key={idx}>{facility}</li>
          ))}
        </div>
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
