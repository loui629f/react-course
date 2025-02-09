export default function Examples() {
  const name = "Louise";
  const x = 10;
  const y = 20;
  const names = ["be", "bi", "bo"];
  const loggedIn = true;
  const styles = { color: "red", fontSize: "55px" };

  return (
    <>
      <div className="text-5xl">App</div>
      <p style={styles}>Hello {name}</p>
      <p>
        The sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
      {loggedIn && <h1>Hello Member</h1>}
    </>
  );
}
