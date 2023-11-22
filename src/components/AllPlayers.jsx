import { useState, useEffect } from "react";
import { fetchPlayers } from "../api/ajaxHelper";
import { useNavigate } from "react-router-dom";
import { removePlayer } from "../api/ajaxHelper";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  console.log(players);
  const navigate = useNavigate();

  async function getPlayers() {
    try {
      const allPlayers = await fetchPlayers();
      setPlayers(allPlayers);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <div id="players-container">
      {players.map((player, index) => {
        return (
          <div className="player-card" key={index}>
            <h3>{player.name}</h3>
            <img src={player.imageUrl} alt={`picture of ${player.name}`} />
            <button
              className="players-button"
              onClick={() => {
                navigate(`/players/${player.id}`);
              }}
            >
              <i class="fa-solid fa-bone"></i> See Details
            </button>

            <button
              className="players-button"
              onClick={async () => {
                await removePlayer(player.id);
                await getPlayers();
              }}
            >
              <i class="fa-solid fa-trash"></i> Remove Player from Roster
            </button>
          </div>
        );
      })}
    </div>
  );
}
