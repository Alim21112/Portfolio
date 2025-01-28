import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <Header />
            <HeroSection />
            {/* Add more components as needed */}
        </div>
    );
}

function Header() {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

function HeroSection() {
    return (
        <section id="hero" className="hero">
            <div className="overlay"></div>
            <div className="container text-center">
                <h1>Welcome to My Portfolio</h1>
                <p>Discover my projects and skills</p>
            </div>
        </section>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));