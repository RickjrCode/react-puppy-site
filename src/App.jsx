import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, AllPlayers, NewPlayerForm, SinglePlayer } from "./components";

import "./App.css";

function App() {
  return (
    <>
      <h1>Puppy Bowl</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/new" element={<NewPlayerForm />} />
        <Route path="/players/:playerId" element={<SinglePlayer />} />
      </Routes>
    </>
  );
}

export default App;
