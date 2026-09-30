// Dynamic backend API URL detection
const getApiEndpoints = (endpoint) => {
  const hostname = (typeof window !== 'undefined' && window.location && window.location.hostname) || 'localhost';
  return [
    `http://${hostname}:5000/api${endpoint}`,
    `http://127.0.0.1:5000/api${endpoint}`,
    `http://localhost:5000/api${endpoint}`,
    `/api${endpoint}`
  ];
};

// Helper to get token
const getToken = () => localStorage.getItem('token');

// Generic API caller with auto-fallback across direct backend and proxy ports
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

  const urlsToTry = getApiEndpoints(endpoint);
  let lastError = null;

  for (const url of urlsToTry) {
    try {
      const response = await fetch(url, options);

      // If static dev server returns 405 or 404, try next direct endpoint
      if (response.status === 405 || response.status === 404) {
        console.warn(`URL ${url} returned ${response.status}, trying fallback endpoint...`);
        continue;
      }

      const rawText = await response.text();
      let data = {};
      if (rawText && rawText.trim().length > 0) {
        try {
          data = JSON.parse(rawText);
        } catch (parseErr) {
          console.error(`Non-JSON response from ${url}:`, rawText);
        }
      }

      if (!response.ok) {
        throw new Error(data.message || `Server request failed with status ${response.status}`);
      }

      return data;
    } catch (err) {
      lastError = err;
      console.warn(`Call to ${url} failed:`, err.message);
    }
  }

  throw lastError || new Error('Backend server is not reachable. Please ensure backend is running on port 5000.');
};

export const api = {
  // Auth
  registerDriver: (data) => apiCall('/auth/register', 'POST', data),
  loginDriver: (data) => apiCall('/auth/login', 'POST', data),
  getMe: () => apiCall('/auth/me', 'GET', null, true),
  
  // Earnings
  calculateEarnings: (data) => apiCall('/earnings/calculate', 'POST', data),
};
