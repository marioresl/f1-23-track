import React from "react";
import { ITrack } from "../../tracks.ts";

interface Props {
  track: ITrack;
}

export function TrackCard({ track }: Props) {
  if(!track) return (
    <div className="flex items-center justify-center h-[500px] min-h-[500px]">Loading...</div>
  );

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[450px] min-h-[450px] flex flex-col justify-center">
      <div>
        <img className="rounded-t-lg" style={{width: 1000}} src={track.imageUrl} alt=""/>
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 text-center">
          {track.name}
        </h5>
        <div className="">
          <img src={track.flagUrl} alt={`Flag of ${track.country}`} className="w-10 h-auto mb-2"/>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
          {track.country}
        </p>
      </div>
    </div>
  );
}