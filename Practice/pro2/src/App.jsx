const aa = [
  {
    title: "Learn React",
    description: "in-depth",
  },
  {
    title: "aaaa",
    description: "bbbb",
  },
];

export function CourseGoal({ title, description }) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        <h2>{aa[0].title}</h2>
        <p>{aa[0].description}</p>
      </ul>
    </div>
  );
}

export default App;
