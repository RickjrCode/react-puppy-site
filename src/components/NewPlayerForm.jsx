import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPlayer } from "../api/ajaxHelper";

export default function NewPlayerForm() {
  const [breed, setBreed] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addPlayer({ name, breed });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="add-pup-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>
            <a>
              <i class="fa-solid fa-tag"></i>
              Name{" "}
            </a>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />{" "}
          </label>
        </div>
        <div className="input-group">
          <label>
            <a>
              {" "}
              <i class="fa-solid fa-dog"></i>
              Breed{" "}
            </a>
            <input
              type="text"
              value={breed}
              onChange={(e) => {
                setBreed(e.target.value);
              }}
            />
          </label>
        </div>
        <button className="add-button" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
}
