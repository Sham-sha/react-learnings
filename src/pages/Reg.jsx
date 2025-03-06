import React, { useState } from "react";
import "./reg.css";
import "./styles.css";
function Reg() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    food: "bf",
  });

  const [submittedData, setSubmittedData] = useState([]); // Store multiple entries

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new data to the submittedData list
    setSubmittedData([...submittedData, formData]);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      number: "",
      city: "",
      food: "bf",
    });
  };

  return (
    <div>
      <div className="div">
        <h6>Registration Form </h6>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label>Phone: </label>
        <input
          type="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label>City: </label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label>Food Preference: </label>
        <select name="food" value={formData.food} onChange={handleChange}>
          <option value="bf">Breakfast</option>
          <option value="ln">Lunch</option>
          <option value="dr">Dinner</option>
        </select>
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      {/* Display data in a table */}
      {submittedData.length > 0 && (
        <div>
          <h3>Submitted Data</h3>
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Food</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.number}</td>
                  <td>{data.city}</td>
                  <td>
                    {data.food === "bf"
                      ? "Breakfast"
                      : data.food === "ln"
                      ? "Lunch"
                      : "Dinner"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Reg;
