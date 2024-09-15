// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './HomePage.css';


// function HomePage() {
//   const [hostels, setHostels] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('http://localhost:5000/hostels')
//       .then(response => {
//         setHostels(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching hostels:', error);
//       });
//   }, []);

//   const formatPrice = (price) => {
//     if (price === undefined || price === null) {
//       return 'N/A'; // Provide a default or placeholder value
//     }
//     return `$${Number(price).toFixed(2)}`;
//   };

//   return (
//     <div className="HomePage">
//       <h1>Hostel List</h1>
//       <button onClick={() => navigate('/add-hostel')}>Add New Hostel</button>
//       <ul>
//         {hostels.map(hostel => (
//           <li key={hostel._id}>
//             <h2>{hostel.hostelName}</h2>
//             <p>Location: {hostel.location}</p>
//             <p>Price: {formatPrice(hostel.hostelPrice)}</p>
//             <p>
//               Overall Rating: {hostel.overallRating ? hostel.overallRating.toFixed(1) : 'N/A'}
//             </p>
//             <button onClick={() => navigate(`/hostel-details/${hostel._id}`)}>View Details</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default HomePage;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const [hostels, setHostels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/hostels')
      .then(response => {
        setHostels(response.data);
      })
      .catch(error => {
        console.error('Error fetching hostels:', error);
      });
  }, []);

  const formatPrice = (price) => {
    if (price === undefined || price === null) {
      return 'N/A'; // Provide a default or placeholder value
    }
    return `$${Number(price).toFixed(2)}`;
  };

  return (
    <div className="HomePage">
      <div className="HomePage-container">
        <h1 className="page-title">Hostel List</h1>
        <div className="button-container">
          <button className="add-hostel-btn" onClick={() => navigate('/add-hostel')}>Add New Hostel</button>
        </div>
        <ul className="hostel-list">
          {hostels.map(hostel => (
            <li key={hostel._id} className="hostel-item">
              <h2 className="hostel-name">{hostel.hostelName}</h2>
              <p className="hostel-location">Location: {hostel.location}</p>
              <p className="hostel-price">Price: {formatPrice(hostel.hostelPrice)}</p>
              <p className="hostel-rating">
                Overall Rating: {hostel.overallRating ? hostel.overallRating.toFixed(1) : 'N/A'}
              </p>
              <button className="view-details-btn" onClick={() => navigate(`/hostel-details/${hostel._id}`)}>View Details</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
