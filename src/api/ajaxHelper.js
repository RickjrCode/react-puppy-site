const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT";

export const fetchPlayers = async () => {
  try {
    const resp = await fetch(`${API_URL}/players`);
    const json = await resp.json();
    console.log(json);

    return json.data.players;
  } catch (err) {
    console.error(err);
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const resp = await fetch(`${API_URL}/players/${playerId} `);
    const json = await resp.json();
    return json.data.player;
  } catch (err) {
    console.error(err);
  }
};

export const addPlayer = async (playerobj) => {
  try {
    const resp = await fetch(`${API_URL}/players`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(playerobj),
    });

    const json = await resp.json();
    return json.data.newPlayer;
  } catch (err) {
    console.error(err);
  }
};

export const removePlayer = async (playerId) => {
  try {
    const resp = await fetch(`${API_URL}/players/${playerId}`, {
      method: "DELETE",
    });
    const json = await resp.json();
    return;
  } catch (err) {
    console.error(err);
  }
};
