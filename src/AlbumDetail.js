import React from "react";

function AlbumDetail({ photos }) {
  const photoList = photos.slice(0, 5).map((photo) => (
    <div>
      <p>{photo.title}</p>
      <img src={photo.thumbnailUrl} alt={photo.title} />
    </div>
  ));

  return <div>{photoList}</div>;
}

export default AlbumDetail;
