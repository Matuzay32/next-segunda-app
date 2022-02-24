// import React, { createContext, useContext, useState } from "react";
// import Head from "next/head";
// import NavBar from "./NavBar";
// import Home from "../pages";

// export const BusquedaContext = createContext();

// export default function Container({ children }) {
//   const [busqueda, setBusqueda] = useState("");
//   const [busquedaAlhacerClick, setBusquedaAlhacerClick] = useState("");
//   return (
//     <div>
//       <BusquedaContext.Provider
//         value={{
//           busqueda,
//           setBusqueda,
//           busquedaAlhacerClick,
//           setBusquedaAlhacerClick,
//         }}>
//         <Head>
//           <link
//             href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
//             rel="stylesheet"
//             integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
//             crossorigin="anonymous"
//           />
//         </Head>

//         <NavBar />

//         {children}
//       </BusquedaContext.Provider>
//     </div>
//   );
// }
