const API_URL = `${process.env.REACT_APP_API_URL}/api/web`;

export async function getAllContents() {
  const res = await fetch(`${API_URL}/getcontents`);
  return res.json();
}

export async function getContentByType(type) {
  const res = await fetch(`${API_URL}/getcontentstype`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type }),
  });
  return res.json();
}

export async function addContent({ type, url }) {
  return fetch(`${API_URL}/addcontent`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, url }),
  });
}

export async function editContent({ content_id, type, url }) {
  return fetch(`${API_URL}/editcontents`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content_id, type, url }),
  });
}
