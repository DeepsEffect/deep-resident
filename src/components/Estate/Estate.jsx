import { useEffect, useState } from "react";
import EstateCard from "./EstateCard";

const Estate = () => {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    fetch("estates.json")
      .then((res) => res.json())
      .then((data) => setEstates(data));
  }, []);

  // console.log(estates);
  return (
    <div>
      {/* title section */}
      <section className="text-center">
        <h2 className="font-bold text-2xl lg:text-4xl mt-10 font-heading ">Discover Your Dream Home</h2>
        <p className="mt-2">
          Explore our selection of available residential estates below
        </p>
      </section>
      {/* estate cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 lg:gap-10">
        {estates.map((estate) => (
          <EstateCard estate={estate} key={estate.id}></EstateCard>
        ))}
      </div>
    </div>
  );
};

export default Estate;
