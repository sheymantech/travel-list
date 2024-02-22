import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [nameTag, setNameTag] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const menuItem = { description, nameTag, packed: false, id: Date.now() };

    onAddItems(menuItem);
    console.log(menuItem);

    // initialItems.push(menuItem);

    setDescription("");
    setNameTag(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={nameTag} onChange={(e) => setNameTag(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
