export const apiKey = "api_key=PoR3CQt5ZlA0CoMpJi1MK9iCYQG6fgkT";

// export const url = `https://api.giphy.com/v1/gifs/search?${apiKey}${q}`;

export const fetchBusqueda = async (url) => {
  const res = await fetch(url);

  const datos = await res.json();

  const { data } = datos;

  // console.log(data);

  return await data;
};
