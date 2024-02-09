const CustomFooter = () => {
  return (
    <div className="row justify-content-center pt-5">
      <div className="col col-6">
        <div className="row">
          <div className="col mb-2">
            <i className="bi bi-facebook footer-icon me-2"></i>
            <i className="bi bi-instagram footer-icon me-2"></i>
            <i className="bi bi-twitter-x footer-icon me-2"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#" alt="footer link">
                    Our Meteo Center
                  </a>
                </p>
                <p>
                  <a href="https://openweathermap.org/api" alt="footer link">
                    Where to find API
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Privacy
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Contact us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#" alt="footer link">
                    Meteo Description
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Investor Relations
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Legal Notices
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#" alt="footer link">
                    Help Center
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Jobs
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Cookie Preferences
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#" alt="footer link">
                    Join us
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Terms of Use
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Corporate Information
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col mb-2">
            <button
              type="button"
              id="footerbutton"
              className="btn btn-sm  rounded-0 mt-3 "
            >
              <span className="spanbutton">Polar Bear Request</span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col mb-5 mt-2 copyright">
            © {new Date().getFullYear()} Mìtìo by Ciro
          </div>
        </div>
      </div>
    </div>
  )
}
export default CustomFooter
