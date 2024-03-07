import React, { useState } from 'react';
import './PostPic.css';

function PostPic() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('image', file);

    try {
      const response = await fetch('https://agreeable-scarce-freedom.glitch.me/uploadsss', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Image uploaded successfully');
        toggleForm();
        // Handle success (e.g., show a success message)
      } else {
        console.error('Image upload failed');
        // Handle the error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Request failed:', error);
      // Handle the request failure (e.g., show an error message)
    }
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="app-container">
      <button className="toggle-button f3 link dim br-pill br3 ph4 pv3 mb2 dib bg-purple white hover-bg-white hover-blue" onClick={toggleForm}>
        Add Picture
      </button>
      <div className={`form-backdrop ${isFormVisible ? 'visible' : ''}`}>
        <div className="form-container">
          <button className="close-button" onClick={toggleForm} >
            <i class="fas fa-times"></i>
          </button>
          <h2>Post a Picture</h2>
          <form onSubmit={handleFormSubmit}>
            <input
                type="number"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostPic;
