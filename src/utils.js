async function getUncompletedGames() {
    const response = await fetch("/uncompleted-games");
    const data = await response.json();
    return data;
};

async function getCompletedGames() {
    const response = await fetch("/completed-games");
    const data = await response.json();
    return data;
};

async function setNewGameAsCurrent(newGame) {
    const response = await fetch("/update-current-game", {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({newGame})
    }).then((response) => response.json());
    
    return response;
};


async function toggleGameCompletion(game, completed) {
    //Don't want to complete 'None'
    if (game.name === "None") {
        return null;
    } else {
        console.log("Toggling completion of " + game);
        const response = await fetch("/toggle-completion", {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"name": game, "completed": completed})
        }).then((response) => response.json());
        console.log(response);
        return response;
    }
};

export {getUncompletedGames, toggleGameCompletion, getCompletedGames, setNewGameAsCurrent};