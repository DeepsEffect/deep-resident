import { useParams } from "react-router-dom";
const EstateDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>state Details id: {id}</h2>
    </div>
  );
};

export default EstateDetails;
