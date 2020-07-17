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
`;

const CharacterText = styled.p`
    font-size: 1.5rem;
    color: white;
`;

const CharacterTitle = styled.p`
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.6);
    font-style: italic;
    font-size: 2rem;

`;

function Character (props) {

    const { characters } = props

    return (
        <CharacterBox>
            
            <CharacterTitle>{characters.name}</CharacterTitle>
            <CharacterText>
                Height: {characters.height}<br></br>
                Birth-Year: {characters.birth_year}<br></br>
                
            </CharacterText>

        </CharacterBox>
    )

}

export default Character;
