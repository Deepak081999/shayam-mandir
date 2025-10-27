import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap CSS
import "./App.css";

function App() {
  return (
    <div className="app text-center">
      {/* Header */}
      <header className="py-4 bg-dark text-white">
        <h1>Welcome to Shyam Mandir Delsar</h1>
      </header>

      {/* Main */}
      <main className="container my-5">
        <h2 className="text-warning mb-4">Connect With Us</h2>

        {/* WhatsApp Row */}
        <div className="row align-items-center bg-success bg-opacity-50 p-3 mb-3 rounded">
          <div className="col-md-4">
            <img
              src="/img/whatsapp-logo.png"
              alt="WhatsApp"
              className="img-fluid rounded-circle"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
          <div className="col-md-4">
            <h4 className="text-white">WhatsApp Channel</h4>
          </div>
          <div className="col-md-4">
            <a
              href="https://whatsapp.com/channel/0029Vb75Ibp0Qearq0F9D61d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              Join Now
            </a>
          </div>
        </div>

        {/* Instagram Row */}
        <div className="row align-items-center bg-danger bg-opacity-50 p-3 mb-3 rounded">
          <div className="col-md-4">
            <img
              src="/img/instagram-logo.jpg"
              alt="Instagram"
              className="img-fluid rounded-circle"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
          <div className="col-md-4">
            <h4 className="text-white">Instagram Page</h4>
          </div>
          <div className="col-md-4">
            <a
              href="https://www.instagram.com/shyam_mandir_delsar?igsh=dTdnZ3hmcjBsdm5j"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              Visit
            </a>
          </div>
        </div>

        {/* Facebook Row */}
        <div className="row align-items-center bg-primary bg-opacity-50 p-3 mb-3 rounded">
          <div className="col-md-4">
            <img
              src="/img/facebook-logo.png"
              alt="Facebook"
              className="img-fluid rounded-circle"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
          <div className="col-md-4">
            <h4 className="text-white">Facebook Page</h4>
          </div>
          <div className="col-md-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              Follow
            </a>
          </div>
        </div>

        {/* Address Row */}
        <div className="row align-items-center bg-info bg-opacity-50 p-3 mb-3 rounded">
          <div className="col-md-4">
            <img
              src="/img/location-logo.jpg"
              alt="Location"
              className="img-fluid rounded-circle"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
          <div className="col-md-4">
            <h4 className="text-white">Temple Location</h4>
          </div>
          <div className="col-md-4">
            <a
              href="https://maps.app.goo.gl/Lz6rQjgDy3xKQh7F7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              View Map
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-3">
        <p>© 2025 Shyam Mandir Delsar | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
