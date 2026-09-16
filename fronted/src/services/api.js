const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper to get token
const getToken = () => localStorage.getItem('token');

// Generic API caller
const apiCall = async (endpoint, method = 'GET', body = null, isAuth = false) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (isAuth) {
    const token = getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
};

export const api = {
  // Auth
  registerDriver: (data) => apiCall('/auth/register', 'POST', data),
  loginDriver: (data) => apiCall('/auth/login', 'POST', data),
  getMe: () => apiCall('/auth/me', 'GET', null, true),
  
  // Earnings
  calculateEarnings: (data) => apiCall('/earnings/calculate', 'POST', data),
};
