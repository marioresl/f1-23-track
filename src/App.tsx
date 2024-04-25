import {useState} from "react";
import { Track, getRandomTrack} from "./tracks.ts";

export function App() {
  const [track, setTrack] = useState<Track | null>(null);
  function handleClick() {
    setTrack(getRandomTrack());
  }

  return (
    <div>
      { track &&
          <div>
            <h1>{ track.name }</h1>
            <img src={ track.imageUrl } alt={ track.name } />
          </div>
      }
      <button onClick={handleClick} >Random Track</button>
    </div>
  );
}