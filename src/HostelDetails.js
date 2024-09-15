import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './HostelDetails.css';

function HostelDetails() {
  const { id } = useParams(); // Get the hostel ID from the URL
  const [hostel, setHostel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchHostelDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/hostels/${id}`);
        setHostel(response.data);
      } catch (error) {
        setError('Failed to fetch hostel details');
        console.error('Error fetching hostel details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHostelDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!hostel) return <p>No hostel found</p>;

  return (
    <div className="HostelDetails">
      <h1>{hostel.hostelName}</h1>
      <button className="back-btn" onClick={() => navigate('/')}>Back to Home</button>
      <div className="info-container">
        <div className="info-item">
          <p className="label">Location:</p> <p>{hostel.location}</p>
        </div>
        <div className="info-item">
          <p className="label">Check-in Time:</p> <p>{hostel.checkInTime}</p>
        </div>
        <div className="info-item">
          <p className="label">Check-out Time:</p> <p>{hostel.checkOutTime}</p>
        </div>
        <div className="info-item">
          <p className="label">Price:</p> <p>{hostel.hostelPrice} USD/night</p>
        </div>
        <div className="info-item">
          <p className="label">Bed Comfort:</p> <p>{hostel.bedComfort}</p>
        </div>
        <div className="info-item">
          <p className="label">Maintenance:</p> <p>{hostel.maintenance}</p>
        </div>
        <div className="info-item">
          <p className="label">Wi-Fi Facility:</p> <p>{hostel.wifiFacility}</p>
        </div>
        <div className="info-item">
          <p className="label">Kitchen Facilities:</p> <p>{hostel.kitchenFacilities}</p>
        </div>
        <div className="info-item">
          <p className="label">Laundry Services:</p> <p>{hostel.laundryServices}</p>
        </div>
        <div className="info-item">
          <p className="label">Staff Attitude:</p> <p>{hostel.staffAttitude}</p>
        </div>
        <div className="info-item">
          <p className="label">Response Time:</p> <p>{hostel.responseTime}</p>
        </div>
        <div className="info-item">
          <p className="label">Transportation:</p> <p>{hostel.transportation}</p>
        </div>
        <div className="info-item">
          <p className="label">Additional Costs:</p> <p>{hostel.additionalCosts}</p>
        </div>
        <div className="info-item">
          <p className="label">Overall Experience:</p> <p>{hostel.overallExperience}</p>
        </div>
      </div>
      <div>
        <h3>Photos:</h3>
        {hostel.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Hostel Photo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default HostelDetails;
