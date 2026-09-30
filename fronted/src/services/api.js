// Use local Vite proxy '/api' to eliminate cross-origin CORS/preflight issues
const API_URL = '/api';

// Helper to get token
const getToken = () => localStorage.getItem('token');

// Generic API caller with resilient JSON and network error handling
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
    let response;
    try {
      response = await fetch(`${API_URL}${endpoint}`, options);
    } catch (networkErr) {
      console.warn('Proxy call failed, falling back to direct port 5000:', networkErr);
      // Fallback directly to localhost:5000 if proxy failed
      response = await fetch(`http://localhost:5000/api${endpoint}`, options);
    }

    const rawText = await response.text();
    let data = {};
    if (rawText && rawText.trim().length > 0) {
      try {
        data = JSON.parse(rawText);
      } catch (parseErr) {
        console.error('Non-JSON response received from server:', rawText);
        throw new Error(`Server returned unexpected response (Status ${response.status}).`);
      }
    }

    if (!response.ok) {
      throw new Error(data.message || `Request failed with status ${response.status}`);
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
