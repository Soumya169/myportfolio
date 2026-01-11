import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [displayedText, setDisplayedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const roles = ["Data Analyst", "Business Analyst", "ML Engineer"];

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 150);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "SQL", level: 85, icon: "🗃️" },
    { name: "Machine Learning", level: 88, icon: "🤖" },
    { name: "Data Analysis", level: 92, icon: "📊" },
    { name: "Tableau", level: 85, icon: "📈" },
    { name: "Pandas & NumPy", level: 90, icon: "🐼" },
    { name: "Excel", level: 88, icon: "📑" },
    { name: "Feature Engineering", level: 85, icon: "⚙️" },
    { name: "Scikit-learn", level: 87, icon: "🧠" },
    { name: "Data Visualization", level: 90, icon: "📉" },
    { name: "Statistical Analysis", level: 83, icon: "📐" },
    { name: "C++", level: 75, icon: "💻" }
  ];

  const experience = [
    {
      role: "Graduate Engineering Trainee",
      company: "Autoplant System India Pvt. Ltd.",
      location: "Navi Mumbai",
      period: "Sept 2025 – Present",
      icon: "🏢",
      points: [
        "Worked with different datasets for analysis",
        "Built Excel dashboards with pivot tables",
        "Performed data cleaning and validation"
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "Meta Craftlab Pvt. Ltd.",
      location: "Hybrid",
      period: "May 2024 – July 2024",
      icon: "💼",
      points: [
        "Developed React.js ticket booking system",
        "Reduced booking issues by 70%",
        "Integrated Dialogflow chatbot"
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Electronics and Telecommunication",
      institution: "VSSUT, Burla",
      period: "2021 – 2025",
      score: "CGPA: 7.91",
      icon: "🎓"
    },
    {
      degree: "Intermediate in Science",
      institution: "OUAT, Bhubaneswar",
      period: "2018 – 2020",
      score: "74.16%",
      icon: "📚"
    }
  ];

  const certifications = [
    { name: "Machine Learning & Data Science – CampusX", link: "#", icon: "🎯" },
    { name: "Tableau Data Prep & Visualization – Udemy", link: "#", icon: "📊" },
    { name: "SAP Backend Developer on ABAP Cloud", link: "#", icon: "💼" },
    { name: "Gen AI Essential – Maven Analytics", link: "#", icon: "🤖" },
    { name: "Google Cloud Computing – NASSCOM", link: "#", icon: "☁️" }
  ];

  const projects = [
    {
      title: "Smart Supply Chain Forecasting",
      tech: "Python, Streamlit, ML",
      image: "/about.png",
      description: "End-to-end ML demand forecasting system",
      highlights: ["Multiple ML models compared", "Interactive dashboard", "Inventory optimization"],
      liveLink: "https://allmlalgos.streamlit.app/",
      githubLink: "https://github.com/Soumya169/ALL_ML_ALGOS"
    },
    {
      title: "Tsunami Prediction System",
      tech: "Python, Scikit-learn",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      description: "AI-powered seismic data analysis",
      highlights: ["86% accuracy model", "Real-time predictions", "Historical data analysis"],
      liveLink: "https://github.com/Soumya169/Tsunami_ML_Project",
      githubLink: "https://github.com/Soumya169/Tsunami_ML_Project"
    },
    {
      title: "Pizza Sales Dashboard",
      tech: "Tableau, SQL, Excel",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "Analytics for $817.9K revenue",
      highlights: ["21.4K+ orders analyzed", "Peak hour insights", "KPI metrics"],
      liveLink: "https://public.tableau.com/app/profile/soumya.ranjan.maharana/viz/PizzaSalesReport_17478334166580/Home",
      githubLink: "https://public.tableau.com/app/profile/soumya.ranjan.maharana/viz/PizzaSalesReport_17478334166580/Home"
    },
    {
      title: "HR Analytics Dashboard",
      tech: "Tableau, SQL",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "20,000+ employee insights",
      highlights: ["Salary trend analysis", "6,480 hires tracked", "Diversity metrics"],
      liveLink: "https://public.tableau.com/views/EmployeeSummeryHRDashboard/Dashboard2?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      githubLink: "https://public.tableau.com/views/EmployeeSummeryHRDashboard/Dashboard2?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    },
    {
      title: "Next Word Prediction using LSTM",
      tech: "Python, LSTM, Keras , Tensorflow",
      image: "/image copy.png",
      description: "Next Word Prediction using LSTM",
      highlights: ["Trained 45000 sentences", "Accuracy 86%", "Loss 0.15"],
      liveLink: "https://github.com/Soumya169/Deep_Learning_Projects/blob/main/Next_word_predictor.ipynb",
      githubLink: "https://github.com/Soumya169/Deep_Learning_Projects/blob/main/Next_word_predictor.ipynb"
    },
    {
      title: "Boston Housing Price Prediction",
      tech: "Python, Scikit-learn",
      image: "/image12.png",
      description: "Boston Housing Price Prediction using Scikit-learn",
      highlights: ["housing price prediction", "used different parameters", "got 92% accuracy"],
      liveLink: "https://bostonhouseprediction-m8nnr8kykrgruxhecmbwok.streamlit.app/#enter-the-house-details-below-using-sliders",
      githubLink: "https://github.com/Soumya169/Boston_House_Prediction"
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #581c87 50%, #1e1b4b 75%, #0f172a 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite',
      color: '#fff',
      minHeight: '100vh',
      position: 'relative'
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      background: 'rgba(15, 23, 42, 0.98)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(168, 85, 247, 0.3)',
      zIndex: 1000,
      boxShadow: '0 8px 32px rgba(147, 51, 234, 0.3)',
      transition: 'all 0.3s ease'
    },
    navContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '1.2rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #a78bfa, #ec4899, #f59e0b)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      letterSpacing: '-0.5px'
    },
    navLinks: {
      display: 'flex',
      gap: '2.5rem',
      alignItems: 'center'
    },
    navButton: {
      background: 'none',
      border: 'none',
      color: '#cbd5e1',
      cursor: 'pointer',
      fontSize: '1.05rem',
      fontWeight: '500',
      textTransform: 'capitalize',
      transition: 'all 0.3s ease',
      position: 'relative',
      padding: '0.5rem 0'
    },
    section: {
      minHeight: '100vh',
      padding: '6rem 1.2rem 4rem',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative'
    },
    heroGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '4rem',
      alignItems: 'center',
      marginTop: '2rem'
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: '900',
      marginBottom: '1.5rem',
      lineHeight: 1.1,
      letterSpacing: '-2px'
    },
    gradient: {
      background: 'linear-gradient(135deg, #a78bfa, #ec4899, #f59e0b)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block'
    },
    roleText: {
      fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
      fontWeight: '700',
      color: '#ec4899',
      minHeight: '5rem',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '2rem'
    },
    cursor: {
      borderRight: '4px solid #ec4899',
      paddingRight: '0.25rem',
      animation: 'blink 1s infinite',
      marginLeft: '0.5rem'
    },
    description: {
      fontSize: '1.35rem',
      color: '#cbd5e1',
      lineHeight: 1.9,
      marginBottom: '2.5rem',
      fontWeight: '400'
    },
    buttonGroup: {
      display: 'flex',
      gap: '1.25rem',
      marginBottom: '2.5rem',
      flexWrap: 'wrap'
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #9333ea, #db2777)',
      border: 'none',
      padding: '1.1rem 2.5rem',
      borderRadius: '50px',
      color: '#fff',
      fontSize: '1.05rem',
      fontWeight: '700',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 20px 40px rgba(147, 51, 234, 0.6)',
      position: 'relative',
      overflow: 'hidden'
    },
    secondaryButton: {
      background: 'transparent',
      border: '2px solid #a78bfa',
      padding: '1.1rem 2.5rem',
      borderRadius: '50px',
      color: '#fff',
      fontSize: '1.05rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    socialLinks: {
      display: 'flex',
      gap: '1.25rem',
      flexWrap: 'wrap'
    },
    socialIcon: {
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #1e293b, #334155)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      fontSize: '1.5rem',
      border: '2px solid transparent',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative'
    },
    imageWrapper: {
      position: 'relative',
      width: '380px',
      height: '380px'
    },
    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '6px solid #a78bfa',
      boxShadow: '0 0 80px rgba(168, 85, 247, 0.6), 0 0 120px rgba(236, 72, 153, 0.4)',
      animation: 'float 4s ease-in-out infinite',
      position: 'relative',
      zIndex: 2
    },
    imageGlow: {
      position: 'absolute',
      inset: '-30px',
      background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(40px)',
      animation: 'pulse 3s ease-in-out infinite',
      zIndex: 1
    },
    sectionTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      fontWeight: '900',
      textAlign: 'center',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #a78bfa, #ec4899, #f59e0b)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      letterSpacing: '-1px'
    },
    subtitle: {
      textAlign: 'center',
      color: '#94a3b8',
      fontSize: '1.25rem',
      marginBottom: '4rem',
      fontWeight: '400'
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    skillCard: {
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(51, 65, 85, 0.6))',
      backdropFilter: 'blur(20px)',
      padding: '2rem',
      borderRadius: '1.5rem',
      border: '1px solid rgba(168, 85, 247, 0.3)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden'
    },
    skillHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    skillName: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#a78bfa',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    skillPercent: {
      color: '#ec4899',
      fontWeight: '800',
      fontSize: '1.25rem'
    },
    progressBar: {
      width: '100%',
      height: '14px',
      background: 'rgba(51, 65, 85, 0.6)',
      borderRadius: '10px',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)'
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(90deg, #9333ea, #ec4899, #f59e0b)',
      borderRadius: '10px',
      transition: 'width 2s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 0 20px rgba(147, 51, 234, 0.8)',
      position: 'relative'
    },
    experienceGrid: {
      display: 'grid',
      gap: '2.5rem',
      marginBottom: '4rem'
    },
    experienceCard: {
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(51, 65, 85, 0.6))',
      backdropFilter: 'blur(20px)',
      padding: '2.5rem',
      borderRadius: '1.5rem',
      border: '1px solid rgba(168, 85, 247, 0.3)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '2.5rem'
    },
    projectCard: {
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(51, 65, 85, 0.6))',
      backdropFilter: 'blur(20px)',
      borderRadius: '1.5rem',
      border: '1px solid rgba(168, 85, 247, 0.3)',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative'
    },
    projectImageWrapper: {
      position: 'relative',
      height: '240px',
      overflow: 'hidden'
    },
    projectImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    projectOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95), transparent)',
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0,
      transition: 'opacity 0.4s ease'
    },
    projectContent: {
      padding: '2rem'
    },
    projectTitle: {
      fontSize: '1.6rem',
      fontWeight: '800',
      color: '#fff',
      marginBottom: '0.75rem',
      letterSpacing: '-0.5px'
    },
    projectTech: {
      color: '#ec4899',
      fontSize: '0.95rem',
      fontWeight: '600',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      maxWidth: '900px',
      margin: '3rem auto'
    },
    contactCard: {
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(51, 65, 85, 0.6))',
      backdropFilter: 'blur(20px)',
      padding: '2.5rem',
      borderRadius: '1.5rem',
      border: '1px solid rgba(168, 85, 247, 0.3)',
      textAlign: 'center',
      textDecoration: 'none',
      color: '#fff',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden'
    },
    footer: {
      textAlign: 'center',
      padding: '3rem 2rem',
      borderTop: '1px solid rgba(168, 85, 247, 0.3)',
      color: '#94a3b8',
      fontSize: '1.05rem'
    }
  };

  return (
    <div style={styles.body}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(2deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        .nav-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #a78bfa, #ec4899);
          transition: width 0.3s ease;
        }
        .nav-button:hover::after,
        .nav-button.active::after {
          width: 100%;
        }
        .nav-button:hover {
          color: #a78bfa;
        }
        
        .primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 25px 50px rgba(147, 51, 234, 0.7);
        }
        .primary-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }
        .primary-button:hover::before {
          transform: translateX(100%);
        }
        
        .secondary-button:hover {
          background: rgba(168, 85, 247, 0.2);
          border-color: #ec4899;
          transform: translateY(-3px);
        }
        
        .social-icon:hover {
          background: linear-gradient(135deg, #9333ea, #db2777);
          border-color: #a78bfa;
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 12px 32px rgba(147, 51, 234, 0.6);
        }
        
        .skill-card:hover {
          border-color: #a78bfa;
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(147, 51, 234, 0.4);
        }
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #9333ea, #ec4899, #f59e0b);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        .skill-card:hover::before {
          transform: scaleX(1);
        }
        
        .experience-card:hover {
          border-color: #a78bfa;
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(147, 51, 234, 0.4);
        }
        
        .project-card:hover {
          border-color: #ec4899;
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 50px rgba(147, 51, 234, 0.5);
        }
        .project-card:hover img {
          transform: scale(1.15);
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        
        .cert-card:hover {
          background: linear-gradient(135deg, rgba(51, 65, 85, 0.8), rgba(30, 41, 59, 0.9));
          transform: translateX(10px);
        }
        
        .contact-card:hover {
          border-color: #ec4899;
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 20px 40px rgba(147, 51, 234, 0.5);
        }
        .contact-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1));
          opacity: 0;
          transition: opacity 0.4s;
        }
        .contact-card:hover::before {
          opacity: 1;
        }
        
        .project-button {
          padding: 0.7rem 1.5rem;
          background: rgba(147, 51, 234, 0.3);
          border: 1px solid #9333ea;
          borderRadius: 0.75rem;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s;
          textDecoration: none;
          display: inline-block;
          fontWeight: 600;
        }
        .project-button:hover {
          background: #9333ea;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(147, 51, 234, 0.5);
        }
        
        * {
          scrollbar-width: thin;
          scrollbar-color: #9333ea #1e293b;
        }
        *::-webkit-scrollbar {
          width: 10px;
        }
        *::-webkit-scrollbar-track {
          background: #1e293b;
        }
        *::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #9333ea, #ec4899);
          border-radius: 10px;
        }

        /* ================= MOBILE RESPONSIVE NAV ================= */

.mobile-menu-btn {
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: #a78bfa;
}

.mobile-nav {
  display: none;
}

/* Mobile & Tablet */
@media (max-width: 768px) {
  .desktop-nav {
    display: none !important;
  }

  .mobile-menu-btn {
    display: block;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    background: rgba(15, 23, 42, 0.98);
    border-top: 1px solid rgba(168, 85, 247, 0.3);
    animation: slideDown 0.3s ease;
  }

  .mobile-nav-item {
    padding: 1rem 2rem;
    text-align: left;
    font-size: 1.1rem;
    color: #e5e7eb;
    background: none;
    border: none;
    border-bottom: 1px solid rgba(148, 163, 184, 0.2);
    cursor: pointer;
  }

  .mobile-nav-item:hover {
    background: rgba(168, 85, 247, 0.15);
    color: #a78bfa;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
/* ================= HERO MOBILE FIX ================= */

@media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr !important;
    text-align: center;
  }

  .hero-title {
    font-size: 2.2rem !important;
  }

  .role-text {
    justify-content: center;
  }

  .button-group {
    justify-content: center;
  }
}

/* ================= EXTRA SMALL DEVICES (Samsung S51 etc) ================= */

@media (max-width: 420px) {

  /* NAVBAR */
  nav {
    padding: 0.5rem 0;
  }

  .mobile-menu-btn {
    font-size: 1.8rem;
  }

  /* HERO SECTION */
  .hero-grid {
    padding-top: 2rem;
    gap: 2rem;
  }

  .hero-title {
    font-size: 1.9rem !important;
    line-height: 1.2;
  }

  .role-text {
    font-size: 1.4rem !important;
    min-height: 2.2rem;
    justify-content: center;
  }

  .role-text span {
    white-space: nowrap;
  }

  p {
    font-size: 1rem !important;
    line-height: 1.6;
  }

  /* BUTTONS */
  .button-group {
    flex-direction: column;
    gap: 0.75rem;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
    justify-content: center;
    padding: 0.9rem 1.5rem;
    font-size: 0.95rem;
  }

  /* SOCIAL ICONS */
  .social-icon {
    width: 44px;
    height: 44px;
    font-size: 1.2rem;
  }

  /* IMAGE */
  .profile-image {
    width: 260px !important;
    height: 260px !important;
  }
}

      `}</style>

      {/* Navigation */}
<nav style={styles.nav}>
  <div style={styles.navContent}>
    <div style={styles.logo}>Soumya Maharana</div>

    {/* Desktop Nav */}
    <div style={styles.navLinks} className="desktop-nav">
      {['home', 'skills', 'experience', 'projects', 'contact'].map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          style={styles.navButton}
          className={`nav-button ${activeSection === section ? 'active' : ''}`}
        >
          {section}
        </button>
      ))}
    </div>

    {/* Mobile Menu Button */}
    <div
      className="mobile-menu-btn"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      ☰
    </div>
  </div>

  {/* Mobile Dropdown Menu */}
  {isMenuOpen && (
    <div className="mobile-nav">
      {['home', 'skills', 'experience', 'projects', 'contact'].map((section) => (
        <button
          key={section}
          onClick={() => {
            scrollToSection(section);
            setIsMenuOpen(false);
          }}
          className="mobile-nav-item"
        >
          {section}
        </button>
      ))}
    </div>
  )}
</nav>


      {/* Hero Section */}
      <section id="home" style={styles.section}>
        <div style={styles.heroGrid} className="hero-grid">
          <div>
            <h1 style={styles.heroTitle} className="hero-title">
              Hi, I'm<br />
              <span style={styles.gradient}>Soumya Ranjan</span>
            </h1>
            <div style={styles.roleText} className="role-text">
  I am&nbsp;
  <span style={{ whiteSpace: 'nowrap' }}>
    <span style={styles.cursor}>{displayedText}</span>
  </span>
</div>

            <p style={styles.description}>
              Entry-level Data Analyst and Machine Learning Engineer with hands-on experience in data analysis,
              demand forecasting, predictive modeling, and dashboard development.
            </p>
            <div style={styles.buttonGroup} className="button-group">
              <button
                className="primary-button"
                style={styles.primaryButton}
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                📥 Download Resume
              </button>
              <button className="secondary-button" style={styles.secondaryButton} onClick={() => scrollToSection('contact')}>
                💬 Contact Me
              </button>
            </div>
            <div style={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/in/soumyamaharana169"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin size={28} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/soumyamaharana169"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="mailto:soumyamaharana169@gmail.com"
                className="social-icon"
              >
                <FaEnvelope size={24} />
              </a>

              {/* Phone */}
              <a
                href="tel:+917852999032"
                className="social-icon"
              >
                <FaPhoneAlt size={24} />
              </a>
            </div>
          </div>
          <div style={styles.imageContainer}>
            <div style={styles.imageWrapper}>
              <div style={styles.imageGlow}></div>
              <img
                src="\image.png"
                alt="Soumya"
                style={styles.profileImage}
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Professional Enterprise Design */}
      <section id="skills" style={{ ...styles.section, background: 'rgba(15, 23, 42, 0.5)' }}>
        <h2 style={styles.sectionTitle}>Technical Expertise</h2>
        <p style={styles.subtitle}>Proficiency in modern data science and development technologies</p>

        {/* Skills Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>

          {/* Programming & Databases */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#a78bfa',
              marginBottom: '1.5rem',
              paddingLeft: '1rem',
              borderLeft: '4px solid #9333ea'
            }}>Programming & Databases</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { name: "Python", level: 90, icon: "🐍", color: '#3776ab' },
                { name: "SQL", level: 85, icon: "🗃️", color: '#cc2927' },
                { name: "C++", level: 75, icon: "💻", color: '#00599c' }
              ].map((skill, idx) => (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(51, 65, 85, 0.8))',
                  backdropFilter: 'blur(20px)',
                  padding: '1.75rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }} className="skill-pro-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        background: `linear-gradient(135deg, ${skill.color}22, ${skill.color}11)`,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.75rem',
                        border: `2px solid ${skill.color}44`
                      }}>
                        {skill.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}>{skill.name}</div>
                        <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                          {skill.level >= 85 ? 'Expert' : skill.level >= 75 ? 'Advanced' : 'Intermediate'}
                        </div>
                      </div>
                    </div>
                    <div style={{
                      fontSize: '1.75rem',
                      fontWeight: '900',
                      background: 'linear-gradient(135deg, #9333ea, #ec4899)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {skill.level}%
                    </div>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    background: 'rgba(51, 65, 85, 0.8)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, ${skill.color}, #ec4899)`,
                      borderRadius: '10px',
                      transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: `0 0 15px ${skill.color}88`,
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: '20px',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4))',
                        animation: 'shimmer 2s infinite'
                      }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Machine Learning & Analytics */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#ec4899',
              marginBottom: '1.5rem',
              paddingLeft: '1rem',
              borderLeft: '4px solid #db2777'
            }}>Machine Learning & Analytics</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { name: "Machine Learning", level: 88, icon: "🤖", color: '#ff6b6b' },
                { name: "Data Analysis", level: 92, icon: "📊", color: '#4ecdc4' },
                { name: "Feature Engineering", level: 85, icon: "⚙️", color: '#95e1d3' },
                { name: "Statistical Analysis", level: 83, icon: "📐", color: '#f38181' }
              ].map((skill, idx) => (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(51, 65, 85, 0.8))',
                  backdropFilter: 'blur(20px)',
                  padding: '1.75rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }} className="skill-pro-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        background: `linear-gradient(135deg, ${skill.color}22, ${skill.color}11)`,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.75rem',
                        border: `2px solid ${skill.color}44`
                      }}>
                        {skill.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}>{skill.name}</div>
                        <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                          {skill.level >= 85 ? 'Expert' : skill.level >= 75 ? 'Advanced' : 'Intermediate'}
                        </div>
                      </div>
                    </div>
                    <div style={{
                      fontSize: '1.75rem',
                      fontWeight: '900',
                      background: 'linear-gradient(135deg, #ec4899, #f59e0b)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {skill.level}%
                    </div>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    background: 'rgba(51, 65, 85, 0.8)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, ${skill.color}, #f59e0b)`,
                      borderRadius: '10px',
                      transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: `0 0 15px ${skill.color}88`
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Frameworks */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#f59e0b',
              marginBottom: '1.5rem',
              paddingLeft: '1rem',
              borderLeft: '4px solid #d97706'
            }}>Tools & Frameworks</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { name: "Tableau", level: 85, icon: "📈", color: '#e97627' },
                { name: "Pandas & NumPy", level: 90, icon: "🐼", color: '#150458' },
                { name: "Scikit-learn", level: 87, icon: "🧠", color: '#f7931e' },
                { name: "Excel", level: 88, icon: "📑", color: '#217346' },
                { name: "Data Visualization", level: 90, icon: "📉", color: '#06b6d4' }
              ].map((skill, idx) => (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(51, 65, 85, 0.8))',
                  backdropFilter: 'blur(20px)',
                  padding: '1.75rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(245, 158, 11, 0.2)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }} className="skill-pro-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        background: `linear-gradient(135deg, ${skill.color}22, ${skill.color}11)`,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.75rem',
                        border: `2px solid ${skill.color}44`
                      }}>
                        {skill.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}>{skill.name}</div>
                        <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                          {skill.level >= 85 ? 'Expert' : skill.level >= 75 ? 'Advanced' : 'Intermediate'}
                        </div>
                      </div>
                    </div>
                    <div style={{
                      fontSize: '1.75rem',
                      fontWeight: '900',
                      background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {skill.level}%
                    </div>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    background: 'rgba(51, 65, 85, 0.8)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, ${skill.color}, #ef4444)`,
                      borderRadius: '10px',
                      transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: `0 0 15px ${skill.color}88`
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KEY STRENGTHS */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#ec4899',
              marginBottom: '1.5rem',
              paddingLeft: '1rem',
              borderLeft: '4px solid #db2777'
            }}>KEY STRENGTHS</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { name: "Comm. & storytelling", level: 82, icon: "💬", color: '#ff6b6b' },
                { name: "Problem Solving & Critical Thinking", level: 90, icon: "🧠", color: '#4ecdc4' },
                { name: "Presentation & Visualization Clarity", level: 92, icon: "📊 ", color: '#95e1d3' },
                { name: "Collaboration & Teamwork", level: 80, icon: "🤝", color: '#f38181' }
              ].map((skill, idx) => (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(51, 65, 85, 0.8))',
                  backdropFilter: 'blur(20px)',
                  padding: '1.75rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }} className="skill-pro-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        background: `linear-gradient(135deg, ${skill.color}22, ${skill.color}11)`,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.75rem',
                        border: `2px solid ${skill.color}44`
                      }}>
                        {skill.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}>{skill.name}</div>
                        <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                          {skill.level >= 85 ? 'Expert' : skill.level >= 75 ? 'Advanced' : 'Intermediate'}
                        </div>
                      </div>
                    </div>
                    <div style={{
                      fontSize: '1.75rem',
                      fontWeight: '900',
                      background: 'linear-gradient(135deg, #ec4899, #f59e0b)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {skill.level}%
                    </div>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    background: 'rgba(51, 65, 85, 0.8)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, ${skill.color}, #f59e0b)`,
                      borderRadius: '10px',
                      transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: `0 0 15px ${skill.color}88`
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" style={styles.section}>
        <h2 style={styles.sectionTitle}>Experience & Education</h2>
        <p style={styles.subtitle}>My professional journey and academic background</p>

        <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#a78bfa', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          💼 Work Experience
        </h3>
        <div style={styles.experienceGrid}>
          {experience.map((exp, idx) => (
            <div key={idx} style={styles.experienceCard} className="experience-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#fff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '2rem' }}>{exp.icon}</span>
                    {exp.role}
                  </h4>
                  <p style={{ fontSize: '1.25rem', color: '#cbd5e1', marginBottom: '0.25rem' }}>{exp.company}</p>
                  <p style={{ color: '#94a3b8' }}>{exp.location}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ color: '#ec4899', fontWeight: '700', fontSize: '1.1rem' }}>{exp.period}</p>
                </div>
              </div>
              <ul style={{ paddingLeft: '1.5rem', color: '#cbd5e1', lineHeight: '2' }}>
                {exp.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: '0.75rem', fontSize: '1.05rem' }}>
                    <span style={{ color: '#a78bfa', fontWeight: '600' }}>▹</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#a78bfa', margin: '4rem 0 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          🎓 Education
        </h3>
        <div style={styles.experienceGrid}>
          {education.map((edu, idx) => (
            <div key={idx} style={styles.experienceCard} className="experience-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <h4 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#fff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '2rem' }}>{edu.icon}</span>
                    {edu.degree}
                  </h4>
                  <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '0.5rem' }}>{edu.institution}</p>
                  <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                    <p style={{ color: '#ec4899', fontWeight: '700' }}>{edu.period}</p>
                    <p style={{ color: '#a78bfa', fontWeight: '800', fontSize: '1.1rem' }}>{edu.score}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#a78bfa', margin: '4rem 0 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          🏆 Certifications
        </h3>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {certifications.map((cert, idx) => (
            <div key={idx} style={{ ...styles.experienceCard, padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="experience-card cert-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '1.75rem' }}>{cert.icon}</span>
                <span style={{ color: '#cbd5e1', fontSize: '1.1rem', fontWeight: '500' }}>{cert.name}</span>
              </div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer"
                style={{ color: '#ec4899', textDecoration: 'none', fontWeight: '700', fontSize: '1.5rem', transition: 'transform 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                🔗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ ...styles.section, background: 'rgba(15, 23, 42, 0.5)' }}>
        <h2 style={styles.sectionTitle}>Featured Projects</h2>
        <p style={styles.subtitle}>Showcasing my recent work and technical achievements</p>
        <div style={styles.projectsGrid} className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} style={styles.projectCard} className="project-card">
              <div style={styles.projectImageWrapper}>
                <img src={project.image} alt={project.title} style={styles.projectImage} />
                <div style={styles.projectOverlay} className="project-overlay">
                  <a href={project.liveLink} className="project-button">🔗 Live Demo</a>
                  <a href={project.githubLink} className="project-button">💻 GitHub</a>
                </div>
              </div>
              <div style={styles.projectContent}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectTech}>
                  <span>🛠️</span> {project.tech}
                </p>
                <p style={{ color: '#cbd5e1', marginBottom: '1.25rem', lineHeight: '1.7', fontSize: '1.05rem' }}>
                  {project.description}
                </p>
                <ul style={{ paddingLeft: '1.25rem', color: '#94a3b8' }}>
                  {project.highlights.map((h, i) => (
                    <li key={i} style={{ marginBottom: '0.6rem', fontSize: '0.95rem' }}>
                      <span style={{ color: '#a78bfa', fontWeight: '600' }}>✓</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ ...styles.section, textAlign: 'center' }}>
        <h2 style={styles.sectionTitle}>Get In Touch</h2>
        <p style={{ ...styles.subtitle, fontSize: '1.35rem', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: '1.8' }}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <div style={styles.contactGrid} className="contact-grid">
          <a href="mailto:soumyamaharana169@gmail.com" style={styles.contactCard} className="contact-card">
            <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>✉️</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem' }}>Email</h3>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem' }}>soumyamaharana169@gmail.com</p>
          </a>
          <a href="tel:7852999032" style={styles.contactCard} className="contact-card">
            <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>📱</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem' }}>Phone</h3>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem' }}>+91 7852999032</p>
          </a>
        </div>
        <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/soumyamaharana169"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={28} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/soumyamaharana169"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={28} />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/soumyamaharana169"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <SiLeetcode size={28} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={{ fontWeight: '600' }}>© 2026 Soumya Ranjan Maharana</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>Built with React & Pure CSS ✨</p>
      </footer>
    </div>
  );
};

export default Portfolio;