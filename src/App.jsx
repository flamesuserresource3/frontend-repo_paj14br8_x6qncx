import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import HeroSpline from './components/HeroSpline.jsx';
import MapView from './components/MapView.jsx';
import ParallaxContent from './components/ParallaxContent.jsx';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <Header darkMode={darkMode} onToggleDark={() => setDarkMode((d) => !d)} />
      <main>
        <HeroSpline />
        <MapView darkMode={darkMode} onToggleDark={() => setDarkMode((d) => !d)} />
        <ParallaxContent />
      </main>
    </div>
  );
}
