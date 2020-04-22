import React, {useState, useEffect} from 'react';

const baseUrl = "https://dog.ceo/api/breeds/list";
const randomDogUrl = breed => `https://dog.ceo/api/breed/${breed}/images/random`;

function DoggoApp() {
  const [breedList, setBreedList] = useState([]);
  const [currentBreedImg, setCurrentBreedImg] = useState("");
  const [currentBreed, setCurrentBreed] = useState("");
  const [loading, setLoading] = useState(false);

  async function dogFetcher() {
    const response = await fetch(baseUrl);
    const payload = await response.json();
    if(payload.status === "success") {
      setBreedList(payload.message);
    }
  }

  async function handleChange(element) {
    setCurrentBreed(element.target.value);
    const response = await fetch(randomDogUrl(element.target.value));
    const payload = await response.json();
    if(payload.status === "success") {
      setCurrentBreedImg(payload.message);
    }
  }

  async function reloadBreed() {
    setLoading(true);
    const response = await fetch(randomDogUrl(currentBreed));
    const payload = await response.json();
    if(payload.status === "success") {
      setCurrentBreedImg(payload.message);
    }
    setLoading(false);
  }
  
  useEffect(() => {
    dogFetcher();
  }, []);

  return (
    <div>
      <h1>Doggo App</h1>
      <select onChange={handleChange}>
        <option value="--">Selecione uma raça</option>
        {breedList.map((breed, index) => (
          <option value={breed} key={index}>{breed}</option>
        ))}
      </select>
      <div>
        {loading && (
          <span>Loading...</span>
        )}
      </div>
      <div>
        {!loading && (
          <img onClick={reloadBreed} alt="" role="image" src={currentBreedImg} width="400"/>
        )}
      </div>
    </div>
  );
}

export default DoggoApp;
