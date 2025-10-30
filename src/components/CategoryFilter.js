import { useState } from "react";

export default function CategoryFilter({ categories, onSelect }) {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    onSelect(value); // Notifica al padre qué categoría se seleccionó
  };

  return (
    <div className="mb-4">
      <label htmlFor="category" className="mr-2 font-semibold">
        Filtrar por categoría:
      </label>
      <select
        id="category"
        value={selected}
        onChange={handleChange}
        className="select select-bordered w-full max-w-xs"
      >
        <option value="">Todas</option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
