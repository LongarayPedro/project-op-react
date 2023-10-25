import { useState, useEffect } from 'react'
import Character from './components/Character'
import Buttons from './components/buttons'
import "./styles.css"


function App() {
  
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(0);

 const characters = [
    {
      img: "image/personagem-monkey-d-luffy.png",
      alt: "Luffy",
      characterName: "Monkey D. Luffy",
      description: "Luffy",
      className: "character selected",
    },
    {
      img: "image/personagem-nami.png",
      alt: "Nami",
      characterName: "Nami",
      description: "Nami",
      className: "character",
    },
    {
      img : "image/personagem-roronoa-zoro.png",
      Alt : "Zoro",
      characterName : "Roronoa Zoro",
      description : "Zoro",
      className : "character",
    },
    {
      img : "image/personagem-sanji.png",
      alt : "Sanji",
      characterName : "Vinsmoke Sanji",
      description : "Sanji",
      className : "character",
    },
    {
      img : "image/personagem-tony-chopper.png",
      alt : "chopper",
      characterName : "Tony Chopper",
      description : "Choper",
      className : "character",
    }
  ];
  const handleButtonClick = (index) => {
    const selectedButton = document.querySelector(".button.selected");
    if (selectedButton) {
      selectedButton.classList.remove("selected");
    }

    const selectedCharacterElement = document.querySelector(".character.selected");
    if (selectedCharacterElement) {
      selectedCharacterElement.classList.remove("selected");
    }

    setSelectedCharacterIndex(index);

    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button, i) => {
      if (i === index) {
        button.classList.add("selected");
      } else {
        button.classList.remove("selected");
      }
    });

    const characterElement = document.querySelectorAll(".character")[index];
    characterElement.classList.add("selected");
  };

  useEffect(() => {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button, index) => {
      button.addEventListener("click", () => handleButtonClick(index));
    });

    // Cleanup event listeners when the component is unmounted
    return () => {
      buttons.forEach((button, index) => {
        button.removeEventListener("click", () => handleButtonClick(index));
      });
    };
  }, []); 
    

  


  return (
    <div>
      <main>
        {characters.map((character, index) => (
        <Character
        key = {index}
        img = {character.img}
        alt = {character.alt}
        characterName = {character.characterName}
        description = {character.description}
        className = {index === selectedCharacterIndex ? "character selected" : "character"}
        />
        ))}
      </main>
      <Buttons/>
      </div>
    )
    
}
export default App
