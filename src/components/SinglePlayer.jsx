import { useParams, useNavigate } from "react-router-dom";
import { fetchSinglePlayer } from "../api/ajaxHelper";
import { useState, useEffect } from "react";

export default function SinglePlayer() {
  const [player, setPlayer] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);

  useEffect(() => {
    async function getSinglePlayer() {
      try {
        const nextPlayer = await fetchSinglePlayer(params.playerId);
        setPlayer(nextPlayer);
      } catch (err) {
        console.error(err);
      }
    }

    getSinglePlayer();
  });

  return (
    player && (
      <div className="single-play-container">
        <div id="single-player">
          <h3>{player.name}</h3>
          <p>ID # {player.id}</p>
          <p>{player.breed}</p>
          <p>Status: {player.status}</p>
          <img src={player.imageUrl} alt={`picture of ${player.name}`} />
          <button
            className="players-button"
            onClick={() => {
              navigate("/");
            }}
          >
            <i class="fa-solid fa-left-long"></i> Back to All Players
          </button>
        </div>
      </div>
    )
  );
}
