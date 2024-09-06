import React, { useState } from 'react';

const StaffRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    photo: null,
    resume: null,
    previousWork: '',
    subject: '',
    interestedClass: '',
  });

  const subjects = ['Mathematics', 'Science', 'English', 'History', 'Programming'];
  const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <h2>Staff Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Profile Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Resume:</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="previousWork">Previous Work Experience:</label>
          <textarea
            id="previousWork"
            name="previousWork"
            value={formData.previousWork}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject You Can Teach:</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select a subject</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="interestedClass">Classes You Are Interested In Teaching:</label>
          <select
            id="interestedClass"
            name="interestedClass"
            value={formData.interestedClass}
            onChange={handleChange}
            required
          >
            <option value="">Select a class</option>
            {classes.map((className) => (
              <option key={className} value={className}>
                {className}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default StaffRegistration;