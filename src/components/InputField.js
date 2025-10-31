"use client";

export default function InputField({ label, type, name, value, onChange, placeholder, ...props }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold mb-1">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input input-bordered w-full"
        {...props}
      />
    </div>
  );
}