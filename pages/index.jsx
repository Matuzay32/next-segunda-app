import Head from "next/head";
import styles from "../styles/Home.module.css";
import { fetchBusqueda } from "../heppers/fetchGif";
import Router from "next/router";
import { useContext, useState } from "react";
import GifCard from "../components/GifCard";
import NavBar from "./../components/NavBar";

// const q = `&q=chau`;
// const apiKey = "api_key=PoR3CQt5ZlA0CoMpJi1MK9iCYQG6fgkT";
// const url = `https://api.giphy.com/v1/gifs/search?${apiKey}${q}`;

export default function Home() {
  const [busqueda, setBusqueda] = useState("");

  const [busquedaAlhacerClick, setBusquedaAlhacerClick] = useState("");

  const busquedaGif = ({ target }) => {
    setBusqueda(target.value);
  };

  const busquedaGifClick = ({ target }) => {
    setBusquedaAlhacerClick(busqueda);
    setTimeout(() => {
      setBusqueda("");
    }, 1000);
  };

  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Head>
      <NavBar
        busqueda={busqueda}
        busquedaGifClick={busquedaGifClick}
        busquedaGif={busquedaGif}
        setBusqueda={setBusqueda}
        busquedaAlhacerClick={busquedaAlhacerClick}
        setBusquedaAlhacerClick={setBusquedaAlhacerClick}
      />
      <div>
        <GifCard busquedaAlhacerClick={busquedaAlhacerClick} />
      </div>
    </div>
  );
}
