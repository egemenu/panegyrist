import React from "react";

interface AlbumItemProps {
  name: string;
}

const AlbumItem: React.FC<AlbumItemProps> = ({ name, ...props }) => (
  <div className="inline-flex flex-col items-start grow-0 shrink m-2" {...props}>
    <div className="block w-32 h-32 bg-black border-2 flex-none"></div>
    <h2 className="text-sm mt-1 max-w-min text-wrap">{name}</h2>
  </div>
);

export default AlbumItem;
