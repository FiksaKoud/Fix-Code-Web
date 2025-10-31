"use client";

export default function FileInput({ label, name, onChange }) {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">{label}</label>
      <input
        type="file"
        id={name}
        name={name}
        onChange={onChange}
        accept=".pdf,.doc,.docx,.odt"
        className="file-input file-input-bordered w-full"
      />
    </div>
  );
}