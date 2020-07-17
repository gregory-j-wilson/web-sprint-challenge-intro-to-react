import React from 'react';
import styled from 'styled-components';

const CharacterBox = styled.div`
    width: 50%;
    border: 4px solid white;
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.6);
    margin: 0 auto;
    text-align: left;
    padding: 10px;
    margin-bottom: 20px;
`;



const CharacterTitle = styled.p`
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.6);
    font-style: italic;
    font-size: 2rem;
    cursor: default;

`;

const CharacterText = styled.p`
    font-size: 1.5rem;
    color: white;
    display: block;
`;

function Character (props) {

    const { characters } = props

    return (
        <CharacterBox>
            
            <CharacterTitle>{characters.name}</CharacterTitle>
            <CharacterText>
                Height: {characters.height}<br></br>
                Birth-Year: {characters.birth_year}<br></br>
                Gender: {characters.gender}<br></br>
                Skin Color: {characters.skin_color}<br></br>


            </CharacterText>

        </CharacterBox>
    )

}

export default Character;
