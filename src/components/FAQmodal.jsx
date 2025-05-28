import { useState, useEffect } from "react";

export default function FaqModal({ initialData = {}, onSave, onClose }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    setQuestion(initialData?.question || "");
    setAnswer(initialData?.answer || "");
  }, [initialData]);

  const handleSubmit = () => {
    if (!question.trim() || !answer.trim()) return;
    onSave({ question, answer });
  };

  const isEditing = Boolean(initialData?.question_id);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white text-black p-6 rounded shadow-lg w-11/12 md:w-1/2">
        <h2 className="text-xl font-bold mb-4">{isEditing ? "Editar FAQ" : "Agregar FAQ"}</h2>
        
        <label className="block font-semibold">Pregunta:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border w-full p-2 rounded mb-4"
        />

        <label className="block font-semibold">Respuesta:</label>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="border w-full p-2 rounded mb-4"
        />

        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">Cancelar</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-sky-700 text-white rounded">
            {isEditing ? "Guardar Cambios" : "Agregar FAQ"}
          </button>
        </div>
      </div>
    </div>
  );
}
