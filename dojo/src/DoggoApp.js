import React, {useState, useEffect} from 'react';

const baseUrl = "https://dog.ceo/api/breeds/list";

function DoggoApp() {
  const [breedList, setBreedList] = useState([]);

  async function dogFetcher() {
    const response = await fetch(baseUrl);
    const payload = await response.json();

    console.log(response);
    console.log(payload);

    if(payload.status === "success") {
      setBreedList(payload.message);
    }
  }
  
  useEffect(() => {
    console.log('Carregado'); 
    dogFetcher();
  }, []);

  console.log(breedList)
  return (
    <div>
      <h1>Doggo App</h1>
      {/* {breedList.map()} */}
    </div>
  );
}

export default DoggoApp;
