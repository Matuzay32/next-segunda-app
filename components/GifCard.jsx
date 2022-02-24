import React, { useEffect, useState } from "react";
import { apiKey, fetchBusqueda } from "../heppers/fetchGif";
import handler from "./../pages/api/hello";
let q = "";

const initialDatosCard = [];
const initialCount = 6;

export default function GifCard({ busquedaAlhacerClick, setBusqueda }) {
  const [manejandoDatos, setManejandoDatos] = useState(initialDatosCard);

  const [count, setCount] = useState(initialCount);
  var arrayFavoritos = [];

  const handlerCantidadInput = ({ target }) => {
    console.log(target.value);
    setCount(target.value);
  };

  const alDarClickEnFavoritos = (e) => {
    console.log(e.target.value, "al dar click en favoritos");
    arrayFavoritos.push(e.target.value);
  };
  q = busquedaAlhacerClick;

  const url = `https://api.giphy.com/v1/gifs/search?${apiKey}&q=${q}&limit=${count}`;

  useEffect(async () => {
    setManejandoDatos(await fetchBusqueda(url));

    return () => {
      setManejandoDatos(null);
    };
  }, [busquedaAlhacerClick]);

  return (
    <div className="row">
      {manejandoDatos?.map((e) => (
        <div
          className="col-sm-4"
          key={e.id}
          className="card m-4"
          style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={e.images.downsized.url}
            alt={e.title}
          />
          <div className="card-body">
            <h5 className="card-title">{e.title}</h5>

            <h5 className="card-text">{e.username}</h5>

            <button
              onClick={(e) => alDarClickEnFavoritos(e)}
              className="btn btn-primary">
              favoritos
            </button>
          </div>
        </div>
      ))}

      {busquedaAlhacerClick && (
        <div>
          <input
            onChange={(e) => handlerCantidadInput(e)}
            min="10"
            max="100"
            value={count}
            width="10px"
            type="number"
          />
        </div>
      )}
    </div>
  );
}
