import React from "react";
import ListItem from "./ListItem";


const CharacterList = ({characters, onCharacterClick}) => {

    const charactersItems = characters.map((character, index) => {
        return <ListItem character={character} key={index} onCharacterClick={onCharacterClick} />
    })

    return (
        <div>
            {charactersItems}
        </div>
    )
}

export default CharacterList;