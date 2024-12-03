import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) alert('Message sent!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
      <input
        type="text"
        placeholder="Name"
        className="w-full border mb-4 p-2 rounded"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border mb-4 p-2 rounded"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <textarea
        placeholder="Message"
        className="w-full border mb-4 p-2 rounded"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
    </form>
  );
};

export default ContactForm;