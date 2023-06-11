function Infantes() {
  const campos = [];

  for (let i = 0; i < 100; i++) {
    campos.push(<div key={i}>Campo {i}</div>);
  }

  return <div>{campos}</div>;
}

export default Infantes;
