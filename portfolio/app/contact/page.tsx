'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React. FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ email: '', name:  '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target. name]: e.target.value
    });
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Questions? </h1>
          <p>Send me an email! </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon"><img src="/Phone.svg" alt="Phone icon" width={30} height={30} /></span>
              <span>+31 6 23965574</span>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon"><img src="/Mail.png" alt="Mail icon" width={30} height={30} /></span>
              <span>davixsmit@gmail.com</span>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon"><img src="/X.svg" alt="X icon" width={30} height={30} /></span>
              <span>@Nyaki</span>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Your message..."
              />
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending.. .' : 'Submit'}
            </button>

            {status === 'success' && (
              <p className="success-message">✅ Message sent successfully! </p>
            )}
            {status === 'error' && (
              <p className="error-message">❌ Failed to send message. Try again.</p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}