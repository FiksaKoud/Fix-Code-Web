"use client";
import { useState } from "react";
import InputField from "@/components/InputField";
import RadioGroup from "@/components/RadioGroup";
import FileInput from "@/components/FileInput";
import ConfirmationMessage from "@/components/ConfirmationMessage";

export default function FormularioPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    fechaNacimiento: "",
    rama: "",
    observaciones: "",
    genero: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setEnviado(true);
  };

  const handleReset = () => {
    setFormData({
      nombre: "",
      apellidos: "",
      email: "",
      fechaNacimiento: "",
      rama: "",
      observaciones: "",
      genero: "",
    });
    setEnviado(false);
  };

  return (
    <section className="max-w-2xl mx-auto bg-base-200 p-6 rounded-2xl shadow-md mt-8">
      <h1 className="text-2xl font-bold text-center mb-2">Introduce tus datos</h1>
      <hr className="border-primary mb-6" />

      <form onSubmit={handleSubmit}>
        <InputField
          label="Introduzca su nombre:"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="John"
          maxLength="20"
          required
        />

        <InputField
          label="Introduzca sus apellidos:"
          type="text"
          name="apellidos"
          value={formData.apellidos}
          onChange={handleChange}
          placeholder="Doe"
          maxLength="30"
          required
        />

        <InputField
          label="Introduzca su email:"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nombre@domain.tld"
          required
        />

        <InputField
          label="Fecha de nacimiento:"
          type="date"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleChange}
          min="1980-01-01"
          required
        />

        {/* Campo con datalist */}
        <div className="mb-4">
          <label htmlFor="rama" className="block font-semibold mb-1">
            Selecciona tu rama de la informática:
          </label>
          <input
            className="input input-bordered w-full"
            list="rama"
            name="rama"
            value={formData.rama}
            onChange={handleChange}
            placeholder="Selecciona..."
            required
          />
          <datalist id="rama">
            <option value="Técnico de equipos" />
            <option value="Administrador de sistemas" />
            <option value="Desarrollador web" />
            <option value="Desarrollador multiplataforma" />
            <option value="Diseñador gráfico" />
            <option value="Ciberseguridad" />
            <option value="Inteligencia Artificial" />
            <option value="Telecomunicaciones" />
          </datalist>
        </div>

        <FileInput label="Adjunta tu CV:" name="archivo" onChange={handleChange} />

        <RadioGroup
          label="Introduzca su género:"
          name="genero"
          options={[
            { label: "Masculino", value: "Masculino" },
            { label: "Femenino", value: "Femenino" },
            { label: "Otro", value: "Otro" },
          ]}
          value={formData.genero}
          onChange={handleChange}
        />

        <InputField
          label="Observaciones:"
          type="text"
          name="observaciones"
          value={formData.observaciones}
          onChange={handleChange}
          placeholder="Escríbenos alguna observación"
        />

        <div className="flex justify-center gap-4 mt-6">
          <button type="submit" className="btn btn-primary w-32">
            Enviar
          </button>
          <button type="reset" className="btn btn-secondary w-32" onClick={handleReset}>
            Restablecer
          </button>
        </div>
      </form>

      {enviado && <ConfirmationMessage />}
    </section>
  );
}