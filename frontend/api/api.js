const API_BASE = 'http://<your-backend-ip>:8080'; // Update for your backend

export default {
  signIn: (username, password) =>
    fetch(`${API_BASE}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    }).then(res => {
      if (!res.ok) throw new Error('Failed login');
      return res.json();
    }),

  signUp: (username, password) => { /* ... */ },

  getCustomers: (token) =>
    fetch(`${API_BASE}/customers`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => res.json()),

  addCustomer: (customer, token) =>
    fetch(`${API_BASE}/customers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(customer)
    }),

  addDebt: (debt, token) =>
    fetch(`${API_BASE}/debts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(debt)
    }),

  getDebts: (customerId, token) =>
    fetch(`${API_BASE}/customers/${customerId}/debts`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => res.json()),
};