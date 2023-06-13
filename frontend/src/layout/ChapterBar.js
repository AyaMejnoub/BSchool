import React, { useState } from 'react';


function ChapterBare() {
  const [elements, setElements] = useState([]);
  const [newElement, setNewElement] = useState('');

  const addElement = () => {
    // Vérifier si le champ de saisie est vide
    if (newElement.trim() === "") {
      alert("Le champ ne peut pas être vide.");
      return;
    }

    // Ajouter l'élément en tant que lien
    const elementContent = <a href={`#${newElement}`}>{newElement}</a>;
    setElements([...elements, elementContent]);
    setNewElement('');
  }

  const handleInputChange = (event) => {
    setNewElement(event.target.value);
  }
  

  const ChapterBareStyle = {
    position: 'absolute', left: 0, width: '256px', height: '100%', backgroundColor: '#1254'
  }
  return (
    <div style={ChapterBareStyle}>
      <div>
      <ul>
        {elements.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={newElement} onChange={handleInputChange} />
        <button onClick={addElement}>Ajouter une chapitre</button>
      </form>
    </div>
    </div>
  );
}

export default ChapterBare;
