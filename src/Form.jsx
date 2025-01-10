import { useState } from "react";

function Form({ onSubmit, onSort }) {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) return;

    onSubmit(input);

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add a book</legend>
        <div className="input-container">
        <input
          type="text"
          name="book"
          placeholder="Add a book"
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        </div>
        <div className="button-container">
        <div className="Sort-task">
        <button type="button" onClick={onSort}>
          Sort
        </button>
        </div>
        <div className="add-book">
        <button type="submit">Add book</button>
        </div>
        </div>
      </fieldset>
    </form>
  );
}

export default Form;
