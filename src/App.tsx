import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { VehicleHistoryPage } from './pages/VehicleHistoryPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { useAuthStore } from './store/authStore';

function App() {
  const { isAuthenticated, user } = useAuthStore();

  const handleSearch = (vin: string) => {
    window.location.href = `/vehicle/${vin}`;
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <Routes>
          <Route 
            path="/" 
            element={isAuthenticated ? (
              <main className="max-w-7xl mx-auto px-4 py-8">
                {user?.role === 'admin' && (
                  <div className="mb-8">
                    <a
                      href="/admin"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      Go to Admin Dashboard
                    </a>
                  </div>
                )}
                <div className="space-y-8">
                  <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-gray-900">
                      Vehicle History Search
                    </h1>
                    <p className="text-lg text-gray-600">
                      Enter a VIN to access comprehensive vehicle history
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <SearchBar onSearch={handleSearch} />
                  </div>

                  <div className="text-center text-sm text-gray-600">
                    <p>Numéros de série de test :</p>
                    <p>VF1LBN40544372198 (Renault Symbol avec fraude kilométrique)</p>
                    <p>JTDDH3FE2F3394527 (Toyota Corolla historique normal)</p>
                  </div>
                </div>
              </main>
            ) : (
              <LandingPage />
            )} 
          />
          <Route 
            path="/login" 
            element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />} 
          />
          <Route
            path="/admin"
            element={
              !isAuthenticated ? (
                <Navigate to="/login" />
              ) : user?.role !== 'admin' ? (
                <Navigate to="/" />
              ) : (
                <AdminDashboard />
              )
            }
          />
          <Route
            path="/vehicle/:vin"
            element={
              !isAuthenticated ? <Navigate to="/login" /> : <VehicleHistoryPage />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;