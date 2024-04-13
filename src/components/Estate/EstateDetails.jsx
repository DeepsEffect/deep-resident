import { useParams, useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { RiPriceTagFill } from "react-icons/ri";
import { BiArea } from "react-icons/bi";

const EstateDetails = () => {
  const { id } = useParams();
  const estateData = useLoaderData();
  const estate = estateData.find((estate) => estate.id === parseInt(id));
  const {
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
    <section className="dark:bg-gray-100 dark:text-gray-800 rounded-2xl mt-4">
      <div className="container lg:p-20 flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row">
        <div className="flex items-center justify-center p-6 ">
          <img
            src={image}
            alt={estate_title}
            className="object-contain rounded-xl w-full h-full "
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-2xl font-bold leading-none sm:text-4xl">
            {estate_title}
          </h1>
          <p className="">{description}</p>
          <div className="space-y-4">
            <p>Segment Name: {segment_name}</p>
            <div className="badge badge-secondary badge-outline font-bold">
              {status}
            </div>
            <div className="flex gap-2 items-center">
              <RiPriceTagFill className="text-2xl" />
              <p>Price: {price}</p>
            </div>
            <div className=" flex items-center gap-2 font-semibold">
              <CiLocationOn className="text-2xl" />
              <p>{location}</p>
            </div>
            <div className="text-left">
              <h2>Facilities: </h2>
              {facilities.map((facility, idx) => (
                <div key={idx} className="badge badge-accent  mr-4 mt-2">
                  {facility}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <BiArea className="text-2xl" />
              <p className="text-lg">Area: {area}</p>
            </div>
          </div>
          <button className="btn btn-primary mt-10">Purchase</button>
        </div>
      </div>
    </section>
  );
};

export default EstateDetails;
