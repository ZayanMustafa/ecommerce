

'use client';
import { useState } from 'react';

export default function CardInput({ value, onChange }) {
  const [cardNumber, setCardNumber] = useState(value);

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    return parts.length ? parts.join(' ') : '';
  };

  const handleChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
    onChange({ target: { name: 'cardNumber', value: formatted.replace(/\s/g, '') } });
  };

  return (
    <input
      type="text"
      value={cardNumber}
      onChange={handleChange}
      placeholder="1234 5678 9012 3456"
      className="w-full px-4 py-2 border rounded-md"
      maxLength={19}
    />
  );
}