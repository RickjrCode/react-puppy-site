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
    <form onSubmit={handleSubmit}>
      <lable>
        Name:{" "}
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
      </lable>
      <lable>
        Breed:{" "}
        <input
          value={breed}
          onChange={(e) => {
            setBreed(e.target.value);
          }}
        />
      </lable>
      <button type="submit">ADD</button>
    </form>
  );
}
