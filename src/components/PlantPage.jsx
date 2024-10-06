import React, { useEffect } from 'react';

const PlantPage = ({ plant }) => {

  // Function to trigger Text-to-Speech
  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.pitch = 1;    // Pitch adjustment (optional)
      speech.rate = 1;     // Speed of reading (adjust as needed)
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
  };

  useEffect(() => {
    // When the component loads, the description is read aloud
    if (plant && plant.description) {
      speakText(plant.description);
    }
  }, [plant]);

  return (
    <div>
      <h1>{plant.botanicalName}</h1>
      <h3>Family: {plant.family}</h3>
      <h3>Synonyms: {plant.synonyms.join(', ')}</h3>
      <h3>English: {plant.english}</h3>
      <h3>Useful Parts: {plant.usefulParts}</h3>
      <h3>Indications: {plant.indications.join(', ')}</h3>
      <h4>Shloka:</h4>
      <p>{plant.shloka}</p>

      <h2>Images</h2>
      <div>
        <img src={plant.images.leaves} alt="Agastya Leaves" width="220" />
        <img src={plant.images.flowers} alt="Agastya Flowers" width="498" />
        <img src={plant.images.pods} alt="Agastya Pods" width="194" />
        <img src={plant.images.seeds} alt="Agastya Seeds" width="1000" />
      </div>
    </div>
  );
};

export default PlantPage;
