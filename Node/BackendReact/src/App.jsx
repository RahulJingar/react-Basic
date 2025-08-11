import React, { useState, useEffect } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const [data, setData] = useState([]);

  // 👇 Handle input change
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // 👇 Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8082/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      console.log('POST response:', result);

      // Optionally update state
      setData(prev => [...prev, result]);

    } catch (err) {
      console.error('Error posting data:', err);
    }
  };

  // 👇 Fetch data on load (GET request)
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:8082/create');
      const json = await res.json();
      setData(json);
    };
    getData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Register</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-64">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
    type="number"
    name="phone"   // ✅ fixed
    placeholder="Enter Number"
    value={formData.phone}
    onChange={handleChange}
  />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-500 text-white py-1 rounded">
          Submit
        </button>
      </form>

      <h3 className="mt-4">Fetched Users:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
