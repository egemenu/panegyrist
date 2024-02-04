import React from "react";

interface TrackItemProps {
  name: string;
  artist: string;
  album: string;
  date: string;
  duration: string;
}

const TrackItem: React.FC<TrackItemProps> = ({
  name,
  artist,
  album,
  date,
  duration,
  ...props
}) => (
  <div className="flex items-center my-5" {...props}>
    <div className="block w-10 h-10 bg-black border-2 flex-none "></div>
    <div className="px-5 flex-1">
      <p className="text-md">{name}</p>
      <p className="text-sm">{artist}</p>
    </div>
    <div className="px-5 flex-1 text-sm">{album}</div>
    <div className="px-5 flex-1 text-sm">{date}</div>
    <div className="pl-5 flex-none justify-self-end text-sm">{duration}</div>
  </div>
);

export default TrackItem;
