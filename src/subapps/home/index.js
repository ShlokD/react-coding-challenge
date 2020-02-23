import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ title, subtitle, imageUrl, imageAlt, redirectUrl }) => {
  return (
    <div className="p-4">
      <div
        className="text-white text-center relative bg-gray-800 cursor-pointer"
        data-testid="app-home-card"
      >
        <Link to={redirectUrl}>
          <p
            className="text-2xl absolute font-extrabold"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            {title}
          </p>
          <img height={256} width={256} src={imageUrl} alt={imageAlt} />
        </Link>
      </div>
      <p className="py-4">{subtitle}</p>
    </div>
  );
};

export default ({ options }) => {
  return (
    <div className="flex justify-around p-4">
      {options.map((option, index) => {
        return <HomeCard key={`home-card-${index}`} {...option} />;
      })}
    </div>
  );
};
