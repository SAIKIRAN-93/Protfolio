// App.tsx
import React from 'react';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header if you have one */}
      {/* <Header /> */}
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Your main content goes here */}
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to My Portfolio
        </h1>
        {/* Other content components */}
      </main>

      <Footer />
    </div>
  );
};

export default App;

// index.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Add this to your index.css or create a new styles file
const styles = `
  html, body, #root {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
