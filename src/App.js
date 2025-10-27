import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ make sure Bootstrap is imported

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Welcome to Shyam Mandir Delsar</h1>
      </header>

      {/* Main */}
      <main>
        <section>
          <h2>Connect With Us</h2>

          <div className="container social-links">
            {/* WhatsApp Row */}
            <div className="row social-row whatsapp align-items-center">
              <div className="col-md-4 col-12">
                <img
                  src="/img/whatsapp-logo.png"
                  alt="WhatsApp"
                  className="social-img"
                />
              </div>
              <div className="col-md-4 col-12">
                <h3 className="social-name">श्री श्याम मंदिर देलसर</h3>
              </div>
              <div className="col-md-4 col-12">
                <a
                  href="https://l.instagram.com/?u=https%3A%2F%2Fchat.whatsapp.com%2FFPYGqJr0pqYANvMilbtG7t%3Fmode%3Dr_c%26fbclid%3DPAZXh0bgNhZW0CMTEAAacEptE1FGcWxC1daOQOJheJ64voX0l78r8PY7pI7ZTWtWnqjohfFjaTkkeqZw_aem_GodFGhGecvg43AFT_8g5OA&e=AT03mntY5c2-4YdqmHYbPlUEu60aLvwbqVPbsd3CVWCuPqRIGPRytpcQZ_oAFWUMWJLhUTYSneQZI9yYZbXn48Hg9zetqpEacbHzfh1BbmBHOR2XZmc_HP8_-w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  Join Now
                </a>
              </div>
            </div>

            {/* Instagram Row */}
            <div className="row social-row instagram align-items-center">
              <div className="col-md-4 col-12">
                <img
                  src="/img/instagram-logo.jpg"
                  alt="Instagram"
                  className="social-img"
                />
              </div>
              <div className="col-md-4 col-12">
                <h3 className="social-name">श्री श्याम मंदिर देलसर</h3>
              </div>
              <div className="col-md-4 col-12">
                <a
                  href="https://www.instagram.com/shyam_mandir_delsar?igsh=dTdnZ3hmcjBsdm5j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  Visit
                </a>
              </div>
            </div>

            {/* Location Row */}
            <div className="row social-row address align-items-center">
              <div className="col-md-4 col-12">
                <img
                  src="/img/location-logo.jpg"
                  alt="Location"
                  className="social-img"
                />
              </div>
              <div className="col-md-4 col-12">
                <h3 className="social-name">Temple Location</h3>
              </div>
              <div className="col-md-4 col-12">
                <a
                  href="https://maps.app.goo.gl/Lz6rQjgDy3xKQh7F7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2025 Shyam Mandir Delsar | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
