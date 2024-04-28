import {useState} from "react";
import { ITrack, getRandomTrack} from "../tracks.ts";
import {TrackCard} from "../components/ui/track-card.tsx";
import {Vortex} from "../components/ui/vortex.tsx";
import car from "../assets/formula.png";

export function App() {
  const [track, setTrack] = useState<ITrack | null>(null);
  function handleClick() {
    setTrack(getRandomTrack());
  }

  return (<>
      <div className="h-screen overflow-hidden flex items-center justify-center">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={300}
          baseHue={550}
          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
        >
          <h1 className="text-4xl font-bold text-center text-white">Formula 1 2023 - Track</h1>
          <p className="text-white">Jeder kennt es wenn man sich für keine Strecke entscheiden kann dann ist das toold das beste für dich.</p>
          <TrackCard className="m-4" track={track}/>
          <button className="p-[3px] relative" onClick={handleClick}>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-purple-500 rounded-lg"/>
            <div
              className="px-8 py-2  bg-gray-100 rounded-[6px]  relative group transition duration-200 text-dark hover:bg-transparent">
              <img src={car} alt="Car" className="w-12 h-auto inline-block"/> Abfahrt...
            </div>
          </button>
        </Vortex>
      </div>
    </>
  );
}