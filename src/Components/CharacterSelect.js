import React from "react"


const CharacterSelect = ({characters, onCharacterSelect}) => {

    // const characterOptions = allCharacters.map((characters, index) => {
    //     return <option key={index} value={index}> {characters.name}</option>
    // })

    const handleChange = function(event) {
        const chosenCharacter = characters[event.target.value];
        onCharacterSelect(chosenCharacter);
    }

    const characterOptions = characters.map((character, index) => {
        return <option value={index} key={index}>{character.name}</option>
    })

    // const handleChange = (event) => {
    //     const chosenCharacter = allCharacters[event.target.value]
    //     onCharacterSelect(chosenCharacter.url);
    // }

    return (
        <select defaultValue="" onChange = {handleChange}>
            <option  Value="">Choose a character</option>
            
                
             {characterOptions}
        </select>
    )



}

export default CharacterSelect;