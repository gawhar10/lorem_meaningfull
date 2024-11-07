import { useState } from "react";
import createLorem from "./lorem.js";

const App = () => {
  const [count, setCount] = useState(0);
  const [loremParagraphList, setLoremParagraphList] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const loremList = createLorem(count);
    setLoremParagraphList(loremList);
  };
  return (
    <section>
      <header>
        <h1>Let's generate meaningfull lorem.</h1>
        <p>
          Just enter your desired word length and get meaningfull lorem out of
          the blue.
        </p>
      </header>
      <form>
        <input
          type="number"
          id="wordCount"
          step={10}
          value={count}
          onChange={(event) => setCount(event.target.value)}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Get
        </button>
      </form>
      <article>
        <ul>
          {loremParagraphList.map((paragraph, index) => {
            return <li key={index}>{paragraph}</li>;
          })}
        </ul>
      </article>
    </section>
  );
};

export default App;
