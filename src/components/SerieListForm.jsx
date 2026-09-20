import { useState } from "react";

function SerieListForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [season, setSeason] = useState("");
  const [episode, setEpisode] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === "") return;

    onAdd({
      title: title,
      season: Number(season),
      episode: Number(episode),
      seen: false,
    });

    setTitle("");
    setSeason("");
    setEpisode("");
  }

  return (
    <form className="serie-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titel"
      />
      <input
        type="number"
        value={season}
        onChange={(e) => setSeason(e.target.value)}
        placeholder="Säsong"
      />
      <input
        type="number"
        value={episode}
        onChange={(e) => setEpisode(e.target.value)}
        placeholder="Avsnitt"
      />
      <button type="submit">Lägg till</button>
    </form>
  );
}

export default SerieListForm;