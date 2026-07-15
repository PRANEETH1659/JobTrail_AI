import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import SideBar from "./components/Sidebar";
import DashBoard from "./pages/Dashboard";
function App() {
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
        {/* / SideBar PlaceHolder */}
        <SideBar />

        {/*Main Content Area */}

        <main
          style={{
            flex: 1,
            padding: "24px",
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            <Route path="/dashboard" element={<DashBoard />} />

            <Route path="/profile" element={<h1>Profile Page</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
