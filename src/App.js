import { useState } from "react";
import "./App.css";
import Overlay from "./Components/Overlay";

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  return (
    <div>
      <button className="button" onClick={handleOpenPopup}>
        <i className="bi bi-plus"></i> Add Ordering Service
      </button>
      {isPopupOpen && <Overlay onClose={() => setPopupOpen(false)} />}
    </div>
  );
}

export default App;
