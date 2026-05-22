import { useEffect, useState } from "react";
import axios from "axios";

function ActivityList() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/activities"
      );

      setActivities(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteActivity = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/activities/${id}`
      );

      fetchActivities();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Activity List</h2>

      {activities.map((activity) => (
        <div className="activity-card" key={activity._id}>
          <h3>{activity.activityType}</h3>

          <p>Duration: {activity.duration} hrs</p>

          <p>
            Carbon Emission: {activity.carbonEmission} CO2
          </p>

          <button
            onClick={() => deleteActivity(activity._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ActivityList;