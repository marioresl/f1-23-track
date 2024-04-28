import React from "react";
import { ITrack } from "../../tracks.ts";
import lando from "../../assets/404.jpg";

interface Props {
  track: ITrack;
}

export function TrackCard({ track }: Props) {
  return (
    <div className="w-96 bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[500px] min-h-[500px] flex flex-col justify-center items-center">
      {track ? (
        <>
          <img className="rounded-t-lg w-full object-cover" src={track.imageUrl} alt=""/>
          <div className="p-5 flex flex-col items-center">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 text-center drop-shadow-xl">
              {track.name}
            </h5>
            <img src={track.flagUrl} alt={`Flag of ${track.country}`} className="w-16 h-auto mb-2 drop-shadow-2xl"/>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
              {track.country}
            </p>
          </div>
        </>
      ) : (
        <div>
          <img src={lando} alt="Lando Norris" className="w-56 h-auto"/>
        </div>
      )}
    </div>
  );
}
