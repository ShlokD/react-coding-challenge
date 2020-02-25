import React from "react";

export const InfoCard = props => {
  const { images, title } = props;
  const imageUrl = images["Poster Art"].url || "";
  return (
    <div className="p-4 text-center">
      <img className="p-2" height={300} width={200} src={imageUrl} />
      <p className="text-xl">{title}</p>
    </div>
  );
};
