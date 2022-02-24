import Head from "next/head";
import React from "react";
import Container from "./../components/Container";
import NavBar from "./../components/NavBar";

export default function RandomGifs() {
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
      <NavBar />
      <h1> Random gifs</h1>
    </div>
  );
}
