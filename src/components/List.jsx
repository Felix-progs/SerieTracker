function List({ series, onToggleSeen, onDelete, onImageUpload }) {
  return (
    <div className="list">
      {series.map((serie) => (
        <div key={serie.id} className="serie">
          <h2>{serie.title}</h2>
          {serie.imageUrl && (
  <img src={`http://localhost:5172${serie.imageUrl}`} alt={serie.title} width={120} />
)}

<label style={{ display: "block" }}></label>
   <label style={{ cursor: "pointer" }}>
  📷 {serie.imageUrl ? "Byt bild" : "Ladda upp"}
  <input
    type="file"
    accept="image/jpeg,image/png"
    style={{ display: "none" }}
    onChange={(e) => e.target.files[0] && onImageUpload(serie.id, e.target.files[0])}
  />
</label>
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