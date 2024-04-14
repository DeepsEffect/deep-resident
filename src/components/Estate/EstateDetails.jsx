import { useParams, useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { RiPriceTagFill } from "react-icons/ri";
import { BiArea } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";

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

  const handlePurchase = () => {
    toast.success("Purchase Successful");
  };
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 rounded-2xl mt-4">
      <Helmet>
        <title>Estate Details | {estate_title}</title>
      </Helmet>
      <div className="container lg:p-20 flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row">
        <div className="flex items-center justify-center p-6 ">
          <img
            src={image}
            alt={estate_title}
            className="object-contain rounded-xl w-full h-full "
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className=" text-2xl lg:text-4xl font-bold font-heading leading-none sm:text-4xl">
            {estate_title}
          </h1>
          <p className="">{description}</p>
          <div className=" my-6 border-b-2 border-secondary"></div>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">Segment Name:</span>{" "}
              {segment_name}
            </p>
            <div className="badge badge-secondary badge-outline font-bold">
              {status}
            </div>
            <div className="flex gap-2 items-center">
              <RiPriceTagFill className="text-2xl text-secondary" />
              <p>
                <span className="font-semibold">Price:</span> {price}
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <CiLocationOn className="text-2xl text-secondary" />
              <p>
                <span className="font-semibold">Location: </span>
                {location}
              </p>
            </div>
            <div className="text-left">
              <h2 className="font-bold">Facilities: </h2>
              {facilities.map((facility, idx) => (
                <div
                  key={idx}
                  className="badge bg-accent text-white mr-4 mt-2 font-semibold"
                >
                  {facility}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <BiArea className="text-2xl text-secondary" />
              <p>
                <span className="font-semibold">Area:</span> {area}
              </p>
            </div>
          </div>
          <button
            onClick={handlePurchase}
            className="btn text-white bg-primary hover:bg-accent mt-10 font-bold"
          >
            Purchase
          </button>
        </div>
      </div>
    </section>
  );
};

export default EstateDetails;
