import React from "react";

interface HeadingProps {
  name: string;
  type: "Album" | "Single";
  artist: string;
}

const HeadingItem: React.FC<HeadingProps> = ({
  name,
  type,
  artist,
  ...props
}) => (
  <div className="flex" {...props}>
    <div className="block w-24 h-24 bg-black border-2 flex-none"></div>
    <div className="relative flex flex-col justify-center ml-4">
      <h2 className="text-sm absolute top-0">{type}</h2>
      <h1 className="text-2xl">{name}</h1>
      <h2 className="text-sm absolute bottom-0">{type}</h2>
    </div>
  </div>
);

export default HeadingItem;
