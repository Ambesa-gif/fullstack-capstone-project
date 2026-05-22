import { useState } from "react";
import axios from "axios";

function ActivityForm() {
  const [activityType, setActivityType] = useState("");
  const [duration, setDuration] = useState("");
  const [carbonEmission, setCarbonEmission] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/activities", {
        activityType,
        duration,
        carbonEmission,
      });

      alert("Activity Added");

      setActivityType("");
      setDuration("");
      setCarbonEmission("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Activity Type"
        value={activityType}
        onChange={(e) => setActivityType(e.target.value)}
      />

      <input
        type="number"
        placeholder="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <input
        type="number"
        placeholder="Carbon Emission"
        value={carbonEmission}
        onChange={(e) => setCarbonEmission(e.target.value)}
      />

      <button type="submit">Add Activity</button>
    </form>
  );
}

export default ActivityForm;