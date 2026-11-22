
function connectVote(buttonId, scoreId) {
    const button = document.getElementById(buttonId);
    const score = document.getElementById(scoreId);

    if (!button || !score) {
        console.error("Missing element:", buttonId, scoreId);
        return;
    }

    let votes = Number(score.textContent);

    button.addEventListener("click", function () {
        votes = votes + 1;
        score.textContent = votes;
    });
}

// Female singers
connectVote("vote-odeya", "votes-odeya");
connectVote("vote-jasmin", "votes-jasmin");
connectVote("vote-noa", "votes-noa");
connectVote("vote-edenb", "votes-edenb");

// Male singers
connectVote("vote-omer", "votes-omer");
connectVote("vote-osher", "votes-osher");
connectVote("vote-static", "votes-static");
connectVote("vote-edenh", "votes-edenh");
