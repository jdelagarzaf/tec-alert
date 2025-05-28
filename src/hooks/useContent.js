import { useEffect, useState, useCallback } from "react";
import * as ContentService from "../services/ContentService";

export default function useContent(type) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchContent = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await ContentService.getContentByType(type);
      setContent(result[0] || null);
    } catch (err) {
      setError("No se pudo cargar el contenido");
    } finally {
      setLoading(false);
    }
  }, [type]);

  const saveContent = async (text) => {
    if (content?.content_id) {
      await ContentService.editContent({
        content_id: content.content_id,
        type,
        url: text,
      });
    } else {
      await ContentService.addContent({ type, url: text });
    }
    fetchContent();
  };

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  return { content, loading, error, saveContent };
}
