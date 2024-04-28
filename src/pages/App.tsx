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
          <h1 className="text-6xl font-bold text-center text-white mb-5">Formula 1 2023 - RandInt</h1>
          <p className="text-gray-300 font-thin text-xl">
            Kennst du das Problem, dich nicht für eine Rennstrecke entscheiden zu können? Unser Tool nimmt dir diese
            Entscheidung ab und wählt automatisch eine spannende Strecke für dich aus. Perfekt für jeden Formel-1-Fan!
          </p>
          <p className="text-gray-300 mb-10 font-bold text-xl">
            Drücke einfach auf den Button unten, um eine Strecke auszuwählen.
          </p>
          <TrackCard track={track}/>
          <button className="p-[3px] relative mt-10" onClick={handleClick}>
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