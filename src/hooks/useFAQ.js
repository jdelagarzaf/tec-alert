import { useEffect, useState } from 'react';
import * as faqService from '../services/FAQservice';

export default function useFAQ() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFaqs = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await faqService.getFaqs();
      setFaqs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  return {
    faqs,
    loading,
    error,
    refresh: fetchFaqs,
    addFaq: faqService.addFaq,
    editFaq: faqService.editFaq,
    deleteFaq: faqService.deleteFaq,
  };
}
