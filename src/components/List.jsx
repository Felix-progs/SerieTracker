function List({ series, onToggleSeen, onDelete }) {
  return (
    <div className="list">
      {series.map((serie) => (
        <div key={serie.id} className="serie">
          <h2>{serie.title}</h2>
          <div className="serie-row">
            <p>Säsong {serie.season}, avsnitt {serie.episode}</p>
            <label>
              <input
                type="checkbox"
                checked={serie.seen}
                onChange={() => onToggleSeen(serie)}
              />
              {serie.seen ? "Sedd" : "Ej sedd"}
            </label>
            <button onClick={() => onDelete(serie.id)}>✕</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;