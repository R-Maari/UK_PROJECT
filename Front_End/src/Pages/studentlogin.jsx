import React from 'react';
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import './studentlogin.scss';

const StudentLogin = () => {
  const {  handleSubmit, register } = useForm();

  const onDrop = (acceptedFiles) => {
    // Handle file upload here
    console.log('File uploaded:', acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const onSubmit = (data) => {
    // Handle form submission here
    console.log('Form Data:', data);
  };

  return (
    <div className="container" >
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            {...register('name', { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="parentName">Parent Name:</label>
          <input
            id="parentName"
            name="parentName"
            type="text"
            {...register('parentName', { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="parentPhone">Parent Phone Number:</label>
          <input
            id="parentPhone"
            name="parentPhone"
            type="tel"
            {...register('parentPhone', { required: true })}
          />
        </div>
        <button type="submit">Next</button>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            {...register('dateOfBirth', { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            {...register('address', { required: true })}
          ></textarea>
        </div>
        <button type="submit">Next</button>
        <div className="form-group">
          <label>Upload Photo:</label>
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="class">Class:</label>
          <input
            id="class"
            name="class"
            type="text"
            {...register('class', { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject(s) you are free:</label>
          <input
            id="subject"
            name="subject"
            type="text"
            {...register('subject', { required: true })}
          />
        </div>

        <button type="submit">Next</button>
        
      </form>
    </div>
  );
};

export default StudentLogin;

