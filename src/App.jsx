import { useState, useEffect } from "react";
import List from "./components/List";
import SerieListForm from "./components/SerieListForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [series, setSeries] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5172/api/serie")
      .then((response) => response.json())
      .then((data) => setSeries(data))
      .catch((error) => console.error("Kunde inte hämta serier:", error));
  }, []);

  function handleAdd(nySerie) {
    fetch("http://localhost:5172/api/serie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nySerie),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Säsong och avsnitt måste vara minst 1");
        return response.json();
      })
      .then((skapadSerie) => {
        setSeries([...series, skapadSerie]);
        setError("");
      })
      .catch((error) => setError(error.message));
  }
function handleDelete(id) {
  fetch(`http://localhost:5172/api/serie/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) throw new Error("Kunde inte ta bort serien");
      setSeries(series.filter((s) => s.id !== id));
    })
    .catch((error) => console.error(error));
}
  function handleToggleSeen(serie) {
    const uppdaterad = { ...serie, seen: !serie.seen };

    fetch(`http://localhost:5172/api/serie/${serie.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(uppdaterad),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Uppdatering misslyckades");
        setSeries(series.map((s) => (s.id === serie.id ? uppdaterad : s)));
      })
      .catch((error) => console.error("Kunde inte uppdatera:", error));
  }
  

  return (
    <div className="app">
      <Header />
      <SerieListForm onAdd={handleAdd} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <List series={series} onToggleSeen={handleToggleSeen} onDelete={handleDelete} />
      <Footer />
    </div>
  );
  
}

export default App;