import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddHostelPage.css';

function AddHostelPage() {
  const [formData, setFormData] = useState({
    hostelName: '',
    location: '',
    checkInTime: '',
    checkOutTime: '',
    hostelPrice: '',
    maintenance: '',
    wifiAvailable: '',
    kitchenFacilities: '',
    laundryServices: '',
    safetyConcerns: '',
    staffAttitude: '',
    responseTime: '',
    additionalCosts: '',
    overallExperience: '',
    overallRating: 0, // New field to store calculated overall rating
    photos: []
  });

  const [notification, setNotification] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Calculate the overall rating based on selected fields
    const totalRatings = parseInt(formData.maintenance || '0')
      + parseInt(formData.wifiAvailable || '0')
      + parseInt(formData.kitchenFacilities || '0')
      + parseInt(formData.laundryServices || '0')
      + parseInt(formData.safetyConcerns || '0')
      + parseInt(formData.staffAttitude || '0');

    const numberOfRatingFields = 6; // Number of fields that are rated
    const overallRating = totalRatings / numberOfRatingFields;

    // Add the calculated overall rating to formData
    const updatedFormData = { ...formData, overallRating };

    try {
      await axios.post('http://localhost:5000/hostels', updatedFormData);
      setNotification('Hostel added successfully!');
      setTimeout(() => {
        navigate('/');
      }, 2000); // Redirect after 2 seconds to show the notification
    } catch (error) {
      setNotification('Error adding hostel. Please try again.');
      console.error('Error adding hostel:', error);
    }
  };

  return (
    <div className="AddHostelPage">
      <h1>Add New Hostel</h1>
      {notification && <p>{notification}</p>}
      <form onSubmit={handleSubmit}>
      <button className="back-btn" onClick={() => navigate('/')}>Back to Home</button>
        <input
          type="text"
          name="hostelName"
          value={formData.hostelName}
          onChange={handleChange}
          placeholder="Hostel Name"
          required
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          required
        />

        {/* Select for Check-in Time */}
        <select name="checkInTime" value={formData.checkInTime} onChange={handleChange} required>
          <option value="">Select Check-in Time</option>
          <option value="4:00 AM">4:00 AM</option>
          <option value="5:00 AM">5:00 AM</option>
          <option value="6:00 AM">6:00 AM</option>
          <option value="7:00 AM">7:00 AM</option>
        </select>

        {/* Select for Check-out Time */}
        <select name="checkOutTime" value={formData.checkOutTime} onChange={handleChange} required>
          <option value="">Select Check-out Time</option>
          <option value="8:00 AM">8:00 AM</option>
          <option value="9:00 AM">9:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
        </select>

        <input
          type="number"
          name="hostelPrice"
          value={formData.hostelPrice}
          onChange={handleChange}
          placeholder="Hostel Price"
          required
        />

        {/* Rating for Maintenance */}
        <select name="maintenance" value={formData.maintenance} onChange={handleChange} required>
          <option value="">Rate Maintenance (1-5)</option>
          <option value="1">1 - Poor</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 - Excellent</option>
        </select>

        {/* Rating for Wi-Fi Availability */}
        <select name="wifiAvailable" value={formData.wifiAvailable} onChange={handleChange} required>
          <option value="">Rate Wi-Fi Availability (1-5)</option>
          <option value="1">1 - Not Available</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 - Available</option>
        </select>

        {/* Rating for Kitchen Facilities */}
        <select name="kitchenFacilities" value={formData.kitchenFacilities} onChange={handleChange} required>
          <option value="">Rate Kitchen Facilities (1-5)</option>
          <option value="1">1 - Not Available</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 - Available</option>
        </select>

        {/* Rating for Laundry Services */}
        <select name="laundryServices" value={formData.laundryServices} onChange={handleChange} required>
          <option value="">Rate Laundry Services (1-5)</option>
          <option value="1">1 - Not Available</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 - Available</option>
        </select>

        {/* Rating for Safety Concerns */}
        <select name="safetyConcerns" value={formData.safetyConcerns} onChange={handleChange} required>
          <option value="">Rate Safety (1-5)</option>
          <option value="1">1 - Unsafe</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 - Very Safe</option>
        </select>

        {/* Rating for Staff Attitude */}
        <select name="staffAttitude" value={formData.staffAttitude} onChange={handleChange} required>
          <option value="">Rate Staff Attitude (1-5)</option>
          <option value="1">1 - Rude</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 - Very Friendly</option>
        </select>

        {/* Response Time */}
        <textarea
          name="responseTime"
          value={formData.responseTime}
          onChange={handleChange}
          placeholder="Response Time"
          required
        />

        {/* Additional Costs */}
        <textarea
          name="additionalCosts"
          value={formData.additionalCosts}
          onChange={handleChange}
          placeholder="Additional Costs"
          required
        />

        {/* Overall Experience */}
        <textarea
          name="overallExperience"
          value={formData.overallExperience}
          onChange={handleChange}
          placeholder="Overall Experience"
          required
        />

        <button type="submit">Add Hostel</button>
      </form>
    </div>
  );
}

export default AddHostelPage;
