import { useState } from 'react'
import Character from './components/Character'
import Buttons from './components/buttons'
import "./styles.css"

function App() {
  const buttons = document.querySelectorAll ('.button')
  const character = document.querySelectorAll(".character")
 
  buttons.forEach((button, index) =>{
   button.addEventListener("click", () => {
     const selectedButton = document.querySelector(".button.selected")
 
     selectedButton.classList.remove("selected")
 
     button.classList.add("selected")
 
     const selectedCharacter = document.querySelector (".character.selected")
 
     selectedCharacter.classList.remove("selected")
 
     character[index].classList.add("selected")
   })
 
  })

  return (
    <div>
      <main>
        <Character
        img = "./src/image/personagem-monkey-d-luffy.png"
        alt = "Luffy"
        characterName = "Monkey D. Luffy"
        description = "Luffy"
        className = "character selected"
        />
        <Character
        img = "./src/image/personagem-nami.png"
        alt = "Nami"
        characterName = "Nami"
        description = "Nami"
        className = "character"
        />
        <Character
        img = "./src/image/personagem-roronoa-zoro.png"
        Alt = "Zoro"
        characterName = "Roronoa Zoro"
        description = "Zoro"
        className = "character"
        />
        <Character
        img = "./src/image/personagem-sanji.png"
        alt = "Sanji"
        characterName = "Vinsmoke Sanji"
        description = "Sanji"
        className = "character"
        />
        <Character
        img = "./src/image/personagem-tony-chopper.png"
        alt = "chopper"
        characterName = "Tony Chopper"
        description = "Choper"
        className = "character"
        />
      </main>
      <Buttons/>
      </div>
    )
 
}
export default App
