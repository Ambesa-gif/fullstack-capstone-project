import React, { useEffect, useState } from "react";
import axios from "axios";
function Dashboard() {
  const [activities, setActivities] = useState([]);
  const [activityType, setActivityType] = useState("");
  const [duration, setDuration] = useState("");
  const [carbonEmission, setCarbonEmission] = useState("");

  const fetchActivities = async () => {
    const res = await axios.get("http://localhost:5000/api/activities");
    setActivities(res.data);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const addActivity = async () => {
    if (!activityType || !duration || !carbonEmission) {
      alert("Please fill all fields");
      return;
    }

    await axios.post("http://localhost:5000/api/activities", {
      activityType,
      duration,
      carbonEmission,
    });

    setActivityType("");
    setDuration("");
    setCarbonEmission("");

    fetchActivities();
  };

  const deleteActivity = async (id) => {
    await axios.delete(`http://localhost:5000/api/activities/${id}`);
    fetchActivities();
  };

  const totalEmission = activities.reduce(
    (total, activity) => total + Number(activity.carbonEmission),
    0
  );

  const highestEmission = activities.reduce((max, activity) => {
    return activity.carbonEmission > (max?.carbonEmission || 0)
      ? activity
      : max;
  }, null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Footprint Logger Dashboard</h1>

      <h2>Total Emissions: {totalEmission} kg CO2</h2>

      {highestEmission && (
        <h3>
          Highest Emission Activity: {highestEmission.activityType} (
          {highestEmission.carbonEmission} kg)
        </h3>
      )}

      <h3>Weekly Goal</h3>
      <p>Try to keep emissions below 20 kg this week.</p>

      <h3>Eco Tip</h3>
      <p>
        Use public transport or cycling to reduce your carbon footprint.
      </p>

      <hr />

      <h2>Add Activity</h2>

      <input
        type="text"
        placeholder="Activity Type"
        value={activityType}
        onChange={(e) => setActivityType(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Carbon Emission"
        value={carbonEmission}
        onChange={(e) => setCarbonEmission(e.target.value)}
      />

      <br /><br />

      <button onClick={addActivity}>Add Activity</button>

      <hr />

      <h2>Activity Logs</h2>

      {activities.map((activity) => (
        <div
          key={activity._id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p>Activity: {activity.activityType}</p>
          <p>Duration: {activity.duration}</p>
          <p>Emission: {activity.carbonEmission} kg</p>

          <button onClick={() => deleteActivity(activity._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;