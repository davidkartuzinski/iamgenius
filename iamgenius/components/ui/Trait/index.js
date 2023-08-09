function Trait({ number, name, content }) {
  return (
    <div>
      <h3>
        {number}. {name}.
      </h3>
      <span>"{content}"</span>
    </div>
  );
}

export default Trait;
