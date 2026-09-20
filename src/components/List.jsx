function List({ series, onToggleSeen, onDelete }) {
  return (
    <div className="list">
      {series.map((serie) => (
        <div key={serie.id} className="serie">
          <h2>{serie.title}</h2>
          <p>Säsong {serie.season}, avsnitt {serie.episode}</p>
          <input     
           type="checkbox"
            checked={serie.seen}
            onChange={() => onToggleSeen(serie)}
            />
             <button onClick={() => onDelete(serie.id)}>✕</button>
        </div>
      ))}
    </div>
  );
}

export default List;