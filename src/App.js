// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            Amreen Consultancy
          </a>
        </div>
      </nav>

      <section className="container text-center py-5">
        <h1 className="fw-bold">
          Welcome to Amreen Consultancy
        </h1>

        <p className="lead mt-3">
          Your Trusted Recruitment & Manpower Partner
        </p>

        <a
          href="mailto:info@example.com"
          className="btn btn-primary mt-3"
        >
          Contact Us
        </a>
      </section>

      <footer className="bg-dark text-white text-center py-3">
        © 2026 Amreen Consultancy. All Rights Reserved.
      </footer>
    </>
  );
}


export default App;
