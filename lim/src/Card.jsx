export default function Card(name, children) {
  return (
    <div ClassName="card">
      <h2>{name}</h2>
      {children}
    </div>
  );
}
