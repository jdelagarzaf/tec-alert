import { useState, useEffect } from "react";

export default function ContentModal({ title, initialText = "", onSave, onClose }) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(initialText);
  }, [initialText]);

  const handleSubmit = () => {
    if (!text.trim()) return;
    onSave(text);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="absolute inset-0 backdrop-blur-xs bg-black/20"></div>
      <div className="relative bg-white text-black p-6 rounded shadow-lg w-11/12 md:w-1/2">
        <h2 className="text-xl font-bold mb-4">Editar: {title}</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border w-full p-4 rounded h-40"
        />
        <div className="flex justify-end gap-4 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">Cancelar</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-sky-700 text-white rounded">Guardar</button>
        </div>
      </div>
    </div>
  );
}
