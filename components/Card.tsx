import React from "react";

type CardProps = {
  icon: JSX.Element;
  title: string;
  children?: JSX.Element | JSX.Element[];
};

const Card = ({ icon, title, children }: CardProps) => (
  <div className="text-gray-800 text-center">
    <div className="w-1/3 m-auto text-blue-500">{icon}</div>
    <p className="text-2xl p-2">{title}</p>
    {children}
  </div>
);

export default Card;
