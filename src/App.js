import React, { useState } from 'react';
import './App.css';

function Header() {
    return (
        <div className="header">
            <div className="contact-info">
                <span>+91 9876543210</span>
                <span className="separator">|</span>
                <span>+91 9123456789</span>
                <span className="separator">|</span>
                <span>email1@example.com</span>
                <span className="separator">|</span>
                <span>email2@example.com</span>
            </div>
            <div className="social-media">
                <SocialButton icon="fab fa-facebook" />
                <SocialButton icon="fab fa-twitter" />
                <SocialButton icon="fab fa-instagram" />
                <SocialButton icon="fab fa-linkedin" />
                <ActionButton text="Social Media" />
                <ActionButton text="Latest News" />
                <ActionButton text="Career" />
            </div>
        </div>
    );
}

function SocialButton({ icon }) {
    return (
        <button style={{ height: '30px', width: '30px', backgroundColor: '#2E348B' }}>
            <a href="#" className={icon} style={{ color: 'white' }}></a>
        </button>
    );
}

function ActionButton({ text }) {
    return (
        <button style={{ backgroundColor: '#2E348B', border: 'none' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#fff' }}>{text}</a>
        </button>
    );
}

function Navbar() {
    return (
        <header>
            <div className="logo">
                <img src="https://mgmnoida.org/wp-content/uploads/2023/02/mgmnoida_logo.png" alt="Logo" className="logo-img" />
            </div>
            <nav>
                <ul>
                    {['Home', 'About Us', 'Departments', 'Admissions', 'Training and Placement', 'Library', 'Doc Verification', 'Contact Us'].map((item, index) => (
                        <li key={index}><a href="#">{item}</a></li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

function Banner({ data }) {
    return (
        <section className="banner">
            <h1>Training & Placement Cell MGM CoET ,Noida</h1>
            <div className="stats">
                <StatItem label="COMPANIES" value={data.companies} />
                <StatItem label="PLACEMENT OFFERS" value={data.placement_offers} />
                <StatItem label="AVG PACKAGE - LPA" value={data.avg_package} />
                <StatItem label="MAX PACKAGE - LPA" value={data.max_package} />
                <StatItem label="PLACEMENTS" value={data.placements} />
            </div>
        </section>
    );
}

function StatItem({ label, value }) {
    return (
        <div className="stat-item">
            <h2>{value}</h2>
            <p>{label}</p>
        </div>
    );
}

function Sidebar() {
    return (
        <aside className="sidebar">
            <ul>
                {['Overview', 'Message from TPO', 'Vision & Mission', 'Activities', 'Placement Procedure & Policies', 'Facilities'].map((item, index) => (
                    <li key={index}><a href="#">{item}</a></li>
                ))}
            </ul>
        </aside>
    );
}

function MainContent() {
    return (
        <div className="main-content">
            <p>
                The training and placement cell of MGM COET Noida is responsible for building and nurturing the students to enhance their employability and ensure their placements in various industries.
            </p>
        </div>
    );
}

function App() {
    const [data] = useState({
        companies: 150,
        placement_offers: 310,
        avg_package: 4.5,
        max_package: 46,
        placements: 95,
    });

    return (
        <div>
            <Header />
            <Navbar />
            <Banner data={data} />
            <section className="content">
                <Sidebar />
                <MainContent />
            </section>
        </div>
    );
}

export default App;
