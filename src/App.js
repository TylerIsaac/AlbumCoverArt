import React, { useEffect, useState } from "react";
import AlbumDetail from "./AlbumDetail";

function App() {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums?userId=1")
      .then((response) => response.json())
      .then(setAlbums)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const clickHandler = (albumId) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => response.json())
      .then(setPhotos)
      .catch((error) => {
        console.log(error);
      });
  };

  const titles = albums.map((album) => (
    <div className="d-grid gap-2 col-6 mx-auto">
      <button className="btn btn-dark" onClick={() => clickHandler(album.id)}>
        {album.title}
      </button>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col">{titles}</div>
        <div className="col">
          <AlbumDetail photos={photos} />
        </div>
      </div>
    </div>
  );
}

export default App;
