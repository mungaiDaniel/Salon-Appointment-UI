import './styles/Stylist.scss';

const Stylist = () => {
  return (
    <div className="container-fliud styles bg-dark " id="stylist">
      <h2 className="text-center text-white">Our Stylists</h2>
      <p className="lead text-center text-white mb-5">
        Our Stylists all have 5+ years working as Hair Stylists in the industry
      </p>
      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <div className="card bg-light">
            <div className="card-body text-center">
              <img
                src="https://randomuser.me/api/portraits/men/11.jpg"
                className="rounded-circle mb-3"
                alt="John Doe"
              />
              <h3 className="card-title mb-3">John Doe</h3>
              <p className="card-text">
                Professional hair stylist specializing in modern fades, hair cuts, and styling.
              </p>
              <a href="#stylist" aria-label="Twitter"><i className="bi bi-twitter text-primary mx-1"></i></a>
              <a href="#stylist" aria-label="Facebook"><i className="bi bi-facebook text-primary mx-1"></i></a>
              <a href="#stylist" aria-label="LinkedIn"><i className="bi bi-linkedin text-primary mx-1"></i></a>
              <a href="#stylist" aria-label="Instagram"><i className="bi bi-instagram text-primary mx-1"></i></a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card bg-light">
            <div className="card-body text-center">
              <img
                src="https://randomuser.me/api/portraits/women/11.jpg"
                className="rounded-circle mb-3"
                alt="Jane Barathion"
              />
              <h3 className="card-title mb-3">Jane Barathion</h3>
              <p className="card-text">
                Color specialist and hair treatment expert with vast experience in hair care.
              </p>
              <a href="#stylist" aria-label="Twitter"><i className="bi bi-twitter text-primary mx-1"></i></a>
              <a href="#stylist" aria-label="Facebook"><i className="bi bi-facebook text-primary mx-1"></i></a>
              <a href="#stylist" aria-label="LinkedIn"><i className="bi bi-linkedin text-primary mx-1"></i></a>
              <a href="#stylist" aria-label="Instagram"><i className="bi bi-instagram text-primary mx-1"></i></a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card bg-light">
            <div className="card-body text-center">
              <img
                src="https://randomuser.me/api/portraits/men/12.jpg"
                className="rounded-circle mb-3"
                alt="Steve Smith"
              />
              <h3 className="card-title mb-3">Steve Smith</h3>
              <p className="card-text">
                Master barber skilled in classic grooming, beard shaping, and hair styling.
              </p>
              <a href="#stylist" aria-label="Twitter"><i className="bi bi-twitter text-primary mx-1"></i></a>
              <a href="#stylist" aria-label="Facebook"><i className="bi bi-facebook text-primary mx-1"></i></a>
              <a href="#stylist" aria-label="LinkedIn"><i className="bi bi-linkedin text-primary mx-1"></i></a>
              <a href="#stylist" aria-label="Instagram"><i className="bi bi-instagram text-primary mx-1"></i></a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card bg-light">
            <div className="card-body text-center">
              <img
                src="https://randomuser.me/api/portraits/women/12.jpg"
                className="rounded-circle mb-3"
                alt="Sara Kim"
              />
              <h3 className="card-title mb-3">Sara Kim</h3>
              <p className="card-text">
                Bridal hair stylist and creative hair designer delivering top salon experiences.
              </p>
              <a href="#stylist" aria-label="Twitter"><i className="bi bi-twitter text-primary mx-1"></i></a>
              <a href="#stylist" aria-label="Facebook"><i className="bi bi-facebook text-primary mx-1"></i></a>
              <a href="#stylist" aria-label="LinkedIn"><i className="bi bi-linkedin text-primary mx-1"></i></a>
              <a href="#stylist" aria-label="Instagram"><i className="bi bi-instagram text-primary mx-1"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stylist;
