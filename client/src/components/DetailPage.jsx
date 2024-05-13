import { useLoaderData } from "react-router-dom";
import "../styles/detailPage.css";
import { useTheme } from "../contexts/theme";
import { useEffect, useState } from "react";
import axios from "axios";

function DetailPage() {
  const character = useLoaderData();
  console.log(character);
  const { theme } = useTheme();
  const [getEpisode, setGetEpisode] = useState(null);

  const urlEpisode = `${character.episode[0]}`;

  useEffect(() => {
    axios.get(urlEpisode).then((response) => setGetEpisode(response.data.name));
  }, [urlEpisode]);

  return (
    <div className={`display-detail-page ${theme}`}>
      <div className="display-card-detail">
          <img src={character.image} alt="charater-picture" className="character-picture"/>
        <div className="info-character">
          <h1>{character.name}</h1>
          <p className="status">
            <div
              className={character.status === "Alive" ? "green" : "red"}
            ></div>
            {character.status} - {character.species}
          </p>
          <p>
            Last known location : <br />
            {character.location.name}
          </p>
          <p>
            First seen in : <br />
            {getEpisode}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
