import React, { useContext, useState } from "react";
import { BusquedaContext } from "./Container";
import Link from "next/link";
import { Head } from "next/head";

export default function NavBar({
  busqueda,
  setBusqueda,
  setBusquedaAlhacerClick,
  busquedaGif,
  busquedaGifClick,
}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Home</font>
                  </font>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/favoritos">
                <a className="nav-link">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Favoritos</font>
                  </font>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/randomGifs">
                <a className="nav-link" href="#">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Random Gifs
                    </font>
                  </font>
                </a>
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <input
              onChange={(e) => busquedaGif(e)}
              value={busqueda}
              className="form-control me-2"
              type="search"
              placeholder="Búsqueda"
              aria-label="Búsqueda"
            />
            <button
              onClick={(e) => busquedaGifClick(e)}
              className="btn btn-outline-light">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Búsqueda</font>
              </font>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
