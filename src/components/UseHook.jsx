
import { useState, useEffect } from 'react';

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchCharacter(id) {
    await wait(2000);
    const response = await fetch(`https://swapi.dev/api/people/${id}`);

    return response.json();
}

function Character(props) {
    const [character, setCharacter] = useState({});

    useEffect(() => {
        (async () => {
            const result = await fetchCharacter(props.id);

            setCharacter(result);
        })();
    }, []);

    return <div>SW Character: {character.name}</div>;
}

export default function UseHook() {
    return (
        <>
            <h2>use Hook</h2>

            <Character id="4" />
        </>
    );
}
