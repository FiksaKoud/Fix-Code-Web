"use client";

export default function RadioGroup({ label, name, options, value, onChange }) {
  return (
    <div className="mb-4">
      <span className="block font-semibold mb-1">{label}</span>
      <div className="flex gap-4">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={onChange}
              className="radio radio-primary"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}