function Cell({ info, title }) {
  return (
    <div className="cell">
      <h1 className="cell-value">{info}</h1>
      <h1 className="cell-name">{title}</h1>
    </div>
  );
}

export default Cell;
