const API_URL = process.env.REACT_APP_API_URL+ '/api/web';

export async function getFaqs() {
  const res = await fetch(`${API_URL}/getfaqs`);
  return res.json();
}

export async function addFaq(faq) {
  return fetch(`${API_URL}/addfaq`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(faq),
  });
}

export async function editFaq(id, updatedFaq) {
  return fetch(`${API_URL}/editfaq/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedFaq),
  });
}

export async function deleteFaq(id) {
  return fetch(`${API_URL}/deletefaq/${id}`, {
    method: 'DELETE',
  });
}
