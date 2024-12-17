import React from "react";

const CountryName = ({ params }: any) => {
  const countries: {
    Name: string;
    Capital: string;
    Population: number;
  }[] = [
    {
      Name: "Pakistan",
      Capital: "Islamabad",
      Population: 506000000,
    },
    {
      Name: "Autralia",
      Capital: "Cambera ",
      Population: 6000000,
    },
    {
      Name: "Iran",
      Capital: "Tehran",
      Population: 246000000,
    },
    {
      Name: "Saudia",
      Capital: "Riyadh",
      Population: 360000000,
    },
    {
      Name: "Canada",
      Capital: "Toranto",
      Population: 306000000,
    },
  ];

  function findCountry(country_url: string) {
    return countries.find(
      (country) => country.Name.toLowerCase() == country_url.toLowerCase()
    );
  }
  let Result = findCountry(params.country_name);

  return (
    <div className="flex-grid justify-around m-5 text-white w-fit items-center text-4xl">
      {Result ? (
        <>
          <h1> Country Name : {Result?.Name}</h1>
          <h1> Country Capital : {Result?.Capital} </h1>
          <h1> Country Population : {Result?.Population} </h1>
        </>
      ) : (
        <h1> {params.country_name} : not found</h1>
      )}
    </div>
  );
};

export default CountryName;
