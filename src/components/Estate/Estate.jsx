import { useEffect, useState } from "react";
import EstateCard from "./EstateCard";


const Estate = () => {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    fetch("estates.json")
      .then((res) => res.json())
      .then((data) => setEstates(data));
  }, []);

  console.log(estates);
  return (
    <div>
      <h2 className="text-center font-bold text-2xl mt-10">
        Available Residential Estates
      </h2>
      {/* estate cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-10">
        {estates.map((estate) => (
          <EstateCard estate={estate} key={estate.id}></EstateCard>
        ))}
      </div>
    </div>  
  );
};

export default Estate;
