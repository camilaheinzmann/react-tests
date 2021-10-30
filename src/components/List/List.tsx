import { useState, FormEvent } from "react";
import "./List.css";

const List = () => {
  const [list, setList] = useState<string[]>(["React"]);
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (newItem.trim() === "" || list.includes(newItem)) return;

    setList([...list, newItem]);
    setNewItem("");
  }

  function handleDeleteItem(currentItem: string) {
    setList(list.filter((listItem) => listItem !== currentItem));
  }

  return (
    <div>
      <form
        className="list-form"
        data-testid="form-add-item"
        onSubmit={handleSubmit}
      >
        <input
          data-testid="input-add-item"
          placeholder="Escreva um item aqui..."
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="list-of-items" data-testid="ul-items">
        {list.map((item) => (
          <li
            data-testid={item}
            key={item}
            className={item === "React" ? "disabled" : ""}
          >
            {item}
            <button
              disabled={item === "React"}
              data-testid={`${item}-btn-delete`}
              type="button"
              onClick={() => handleDeleteItem(item)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
