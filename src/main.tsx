import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Initialize auth store with mock admin user for testing
import { useAuthStore } from './store/authStore';
import { mockUsers } from './data/mockData';

// Comment this out in production
if (import.meta.env.DEV) {
  const adminUser = mockUsers.find(user => user.role === 'admin');
  if (adminUser) {
    useAuthStore.getState().login(adminUser);
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);