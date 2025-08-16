import { useState } from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import './CreateProject.css';

export default function CreateProject() {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating project:', formData);
    setFormData({ title: '', description: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="create-project-wrapper">
      <div className="create-project-container">
        <div className="create-project-header">
          <h1 className="create-project-title">Create New Project</h1>
          <p className="create-project-subtitle">
            Start building something amazing today
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="create-project-form">
          <div className="form-section">
            <div className="form-group">
              <label className="form-label">
                Project Title
              </label>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter your project title"
                className="form-input-large"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-textarea-large"
                placeholder="Describe your project goals, features, and vision..."
                rows={6}
              />
            </div>
          </div>

          <div className="form-actions">
            <Button
              type="submit"
              className="create-btn-primary"
            >
              Create Project
            </Button>
            <Button
              type="button"
              className="create-btn-secondary"
              onClick={() => setFormData({ title: '', description: '' })}
            >
              Clear Form
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}