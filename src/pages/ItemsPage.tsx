import React from "react";

export default function ItemsPage() {
  const [items, setItems] = React.useState([0, 1, 2, 3, 4]);

  return (
    <div>
      <button
        onClick={() => {
          const newItem = items[items.length - 1] + 1;
          items.push(newItem);
          setItems(items);
        }}
      >
        Add element
      </button>
      <p>Items: {items.join(", ")}</p>
    </div>
  );
}
