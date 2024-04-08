import { useParams, useLoaderData } from "react-router-dom";
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
    <div>
      <h2>state Details id: {id}</h2>
      <h2>state Details location: {location}</h2>
      <h2>state Details name: {estate_title}</h2>
    </div>
  );
};

export default EstateDetails;
