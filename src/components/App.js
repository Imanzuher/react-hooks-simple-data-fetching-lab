import React from "react";
import { useState, useEffect } from "react";
function App() {
  const [dogImage, setDogImage] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data);
        setIsLoaded(true);
      });
  }, [isLoaded]);
  if (!isLoaded) return <p>"Loading..."</p>;
  return (
    <div>
      <img src={dogImage.message} alt="A Random Dog" />
    </div>
  );
}

export default App;
