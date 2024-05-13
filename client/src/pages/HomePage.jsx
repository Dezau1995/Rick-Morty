import { useState, useEffect } from "react";
import Card from "../components/Card";
import "../styles/homePage.css";
import { useLoaderData } from "react-router-dom";
import { useTheme } from "../contexts/theme";
import Rick_Error from "../assets/adult-swim.png";
import Pagination from "../components/Pagination.jsx";
import axios from "axios";

function HomePage() {
  const data = useLoaderData();
  console.log(data);

  const [text, setText] = useState("");
  const [pages, setPages] = useState(1);
  const [tabData, setTabData] = useState(data?.data.results);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${pages}`)
      .then((response) => {
        setTabData(response.data.results);
      });
  }, [pages]);

  const { theme } = useTheme();

  const searchUrl = `https://rickandmortyapi.com/api/character/?page=${pages}&name=${text}`;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    axios.get(searchUrl).then((response) => {
      setTabData(response.data.results);
      // setPages(1);
    });
  }, [searchUrl]);

  const filterData = tabData.filter((character) =>
    character.name.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div className={`display-home-page ${theme}`}>
      <div className="display-home-header">
        <h1 className={`title-home-header ${theme}`}>Rick & Morty Univers</h1>
        <input
          type="text"
          placeholder="Search your character"
          value={text}
          onChange={handleChange}
          className={
            theme === "light" ? `input-home dark` : `input-home mystery-blue`
          }
        />
      </div>
      <div className="display-card">
        {filterData.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            image={character.image}
            id={character.id}
          />
        ))}
        {filterData.length === 0 && <img src={Rick_Error} alt="rick&morty" />}
      </div>
      <Pagination pages={pages} setPages={setPages} tabData={tabData} />
    </div>
  );
}

export default HomePage;
