import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import SummerSchool from './pages/SummerSchool';
import FoodHeroes from './pages/FoodHeroes';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'Youth Matterz - Empowering the Next Generation',
      'summer-school': 'Young Changemakers Summer School - Youth Matterz',
      'food-heroes': 'Food Heroes Workshop - Youth Matterz',
      contact: 'Contact Us - Youth Matterz',
    };

    document.title = titles[currentPage] || 'Youth Matterz';
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'summer-school':
        return <SummerSchool onNavigate={handleNavigate} />;
      case 'food-heroes':
        return <FoodHeroes onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
