import React, { useState, useEffect } from "react";
import CharacterSelect from "../Components/CharacterSelect";
import CharacterDetail from "../Components/CharacterDetail";



const CharacterContainer = () => {
  
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = function(){
        fetch("https://hp-api.herokuapp.com/api/characters")
        .then(res => res.json())
        .then(characters => setCharacters(characters))
    }

    // const handleCharacterSelect = (url) => {
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setSelectedCharacter(data))
    // };

    const onCharacterSelect = function(character) {
        setSelectedCharacter(character);
    }

   

  

    

    return (
        <>
        <CharacterSelect characters={characters} onCharacterSelect={onCharacterSelect} />
        {selectedCharacter ? <CharacterDetail selectedCharacter={selectedCharacter} /> : null }
       
        </>
    )
}

export default CharacterContainer;