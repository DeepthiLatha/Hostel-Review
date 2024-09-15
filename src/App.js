import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AddHostelPage from './AddHostelPage';
import HostelDetails from './HostelDetails'; // Import HostelDetails

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-hostel" element={<AddHostelPage />} />
        <Route path="/hostel-details/:id" element={<HostelDetails />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
