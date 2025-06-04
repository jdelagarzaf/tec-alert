import editIcon from "../assets/imgs/editIcon.png";
import { useState } from "react";
import ContentModal from "./ContentModal";

export default function EditableTextSection({
  title,
  contentHook,
  user,
  containerClass = "",
  titleClass = "",
  textClass = "",
  iconClass = ""
}) {
  const { content, loading, saveContent } = contentHook;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div className={containerClass}>
        <h1 className={`font-bold py-4 ${titleClass}`}>{title}</h1>
        {user?.is_admin && (
          <img src={editIcon} alt="edit" className={`cursor-pointer h-1/16 w-1/16 md:w-1/8 md:h-1/8 ml-2 ${iconClass}`} onClick={() => setModalOpen(true)} />
        )}
      </div>
      <p className={textClass}>
        {loading ? (
          <p className={textClass}>Cargando...</p>
        ) : (
          <div className={textClass} dangerouslySetInnerHTML={{ __html: content?.url || "" }} />
        )}
      </p>

      {modalOpen && (
        <ContentModal title={title} initialText={content?.url || ""} onSave={async (newText) => { await saveContent(newText);  setModalOpen(false); }} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
}
