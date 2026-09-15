function List({ series }) {
  return (
    <div className="list">
      {series.map((serie) => (
        <div key={serie.id} className="serie">
          <h2>{serie.title}</h2>
        </div>
      ))}
    </div>
  );
}
export default List;