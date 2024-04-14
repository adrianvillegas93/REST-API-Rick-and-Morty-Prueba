function Character({ name, image, origin }) {
  return (
    <div className="text-center p-5">
      <h3>{name}</h3>
      <img className="img-fluid rounded-pill" src={image} alt={name} />
      <p>{origin}</p>
    </div>
  );
}

export default Character;
