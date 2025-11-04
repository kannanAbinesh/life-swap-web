"use client"
import React, { useState } from 'react';

import NavBar from '../NavBar/NavBar';

import './home.css';
import banner from '../../Assets/Images/banner.png'
import Image from 'next/image';

const Home = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks for signing up with ${email}!`);
        setEmail('');
    };

    return (
        <>
            <div className="landing-container">
                <NavBar />

                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-content">
                        <div className="hero-text">
                            <div className="hero-badge">✨ Join 10,000+ Habit Builders</div>
                            <h1 className="hero-title">
                                Share Habits. <span className="highlight">Inspire Change.</span>
                            </h1>
                            <p className="hero-subtitle">
                                Discover life-changing habits from people around the world. Share your own routines and help others build better lives, one habit at a time.
                            </p>
                            <div className="hero-buttons">
                                <button className="btn btn-primary btn-large">Start Sharing →</button>
                                <button className="btn btn-secondary btn-large">Browse Habits</button>
                            </div>
                            <div className="hero-stats">
                                <div className="hero-stat-item">
                                    <div className="hero-stat-number">10K+</div>
                                    <div className="hero-stat-label">Active Users</div>
                                </div>
                                <div className="hero-stat-item">
                                    <div className="hero-stat-number">50K+</div>
                                    <div className="hero-stat-label">Habits Shared</div>
                                </div>
                                <div className="hero-stat-item">
                                    <div className="hero-stat-number">85%</div>
                                    <div className="hero-stat-label">Success Rate</div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <div className="hero-image-container">
                                <Image src={banner} alt="Habit Dashboard" className="hero-banner-image" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rest of your sections remain the same */}
                <section className="features-section" id="features">
                    <div className="section-header">
                        <div className="section-badge">Why Choose Us</div>
                        <h2 className="section-title">Why HabitShare?</h2>
                        <p className="section-subtitle">
                            Join thousands of people transforming their lives through shared habits and community support
                        </p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">📝</div>
                            <h3 className="feature-title">List Your Habits</h3>
                            <p className="feature-description">
                                Share your successful routines, morning rituals, fitness goals, or any positive habit you've built. Help others by showing what works for you.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🎯</div>
                            <h3 className="feature-title">Adopt & Track</h3>
                            <p className="feature-description">
                                Browse habits from our community and adopt ones that resonate with you. Track your progress and stay accountable to your goals.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">👥</div>
                            <h3 className="feature-title">Connect & Grow</h3>
                            <p className="feature-description">
                                Follow habit creators, join challenges, and connect with like-minded people on the same journey to self-improvement.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="how-it-works" id="how-it-works">
                    <div className="section-header">
                        <div className="section-badge">Simple Process</div>
                        <h2 className="section-title">How It Works</h2>
                        <p className="section-subtitle">
                            Get started in three simple steps and begin your transformation journey today
                        </p>
                    </div>
                    <div className="steps-container">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <h3 className="step-title">Create Your Profile</h3>
                            <p className="step-description">
                                Sign up and tell us about your interests and goals. Customize your profile to connect with the right community.
                            </p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <h3 className="step-title">Share or Discover</h3>
                            <p className="step-description">
                                List your successful habits or browse through thousands of habits shared by others. Find what inspires you.
                            </p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">3</div>
                            <h3 className="step-title">Build Together</h3>
                            <p className="step-description">
                                Adopt habits, track your progress, and engage with a supportive community cheering you on every step.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="stats-section">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">10K+</div>
                            <div className="stat-label">Active Users</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">50K+</div>
                            <div className="stat-label">Habits Shared</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">200K+</div>
                            <div className="stat-label">Habits Adopted</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">85%</div>
                            <div className="stat-label">Success Rate</div>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-container">
                        <h2 className="cta-title">Ready to Transform Your Life?</h2>
                        <p className="cta-description">
                            Join our growing community today and start building the habits that will change your tomorrow.
                        </p>
                        <div className="cta-form">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="cta-input"
                            />
                            <button onClick={handleSubmit} className="btn btn-primary btn-large">
                                Get Started Free
                            </button>
                        </div>
                    </div>
                </section>

                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3>🌱 HabitShare</h3>
                            <p>Building better habits together, one day at a time. Join our community and transform your life through shared experiences.</p>
                        </div>
                        <div className="footer-section">
                            <h3>Product</h3>
                            <ul className="footer-links">
                                <li><a href="#features">Features</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                                <li><a href="#mobile">Mobile App</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>Company</h3>
                            <ul className="footer-links">
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#careers">Careers</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>Support</h3>
                            <ul className="footer-links">
                                <li><a href="#help">Help Center</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="#privacy">Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2025 HabitShare. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Home;