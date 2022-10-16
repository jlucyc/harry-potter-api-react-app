import React from "react";


const CharacterDetail = ({selectedCharacter}) => {

    return (
        <>
        <h2>{selectedCharacter.name}</h2>
        <img src={selectedCharacter.image} alt={selectedCharacter.name} />
        <p>House - {selectedCharacter.house}</p>
        <p>Patronus - {selectedCharacter.patronus}</p>
        <p>Actor - {selectedCharacter.actor}</p>
        </>
    )
}



export default CharacterDetail;