import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [photo, setPhoto] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => {
        console.log(res);
        setPhoto(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div>{photo.title}</div>
      {/* <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.id} />
            {photo.title}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
