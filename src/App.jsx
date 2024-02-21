const App = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <nav className="flex justify-between mt-2 bg-orange-300 p-2 rounded-md">
        <img
          src="/wolfram_logo.png"
          alt="logo wolfram"
          className="object-cover"
        />
        <ul className="flex gap-4 items-center font-mono text-green-600">
          <li>About us</li>
          <li>Patients Registration​</li>
          <li>Resources</li>
          <li>Research</li>
          <li>News</li>
          <li>Awareness</li>
        </ul>
      </nav>
      <main></main>
    </div>
  );
};

export default App;
