import { useEffect, useState } from "react";
import API from "../api/api";

function Dashboard() {
  const [activities, setActivities] = useState([]);

  const [activityType, setActivityType] =
    useState("");

  const [duration, setDuration] =
    useState("");

  const [carbonEmission, setCarbonEmission] =
    useState("");

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const res = await API.get("/activities");

      setActivities(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addActivity = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/activities",
        {
          activityType,
          duration,
          carbonEmission,
        }
      );

      setActivities([
        ...activities,
        res.data,
      ]);

      setActivityType("");
      setDuration("");
      setCarbonEmission("");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteActivity = async (id) => {
    try {
      await API.delete(
        `/activities/${id}`
      );

      setActivities(
        activities.filter(
          (activity) =>
            activity._id !== id
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <form onSubmit={addActivity}>
        <input
          type="text"
          placeholder="Activity Type"
          value={activityType}
          onChange={(e) =>
            setActivityType(e.target.value)
          }
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Duration"
          value={duration}
          onChange={(e) =>
            setDuration(e.target.value)
          }
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Carbon Emission"
          value={carbonEmission}
          onChange={(e) =>
            setCarbonEmission(
              e.target.value
            )
          }
        />

        <br />
        <br />

        <button type="submit">
          Add Activity
        </button>
      </form>

      <hr />

      <h2>Activities</h2>

      {activities.map((activity) => (
        <div
          key={activity._id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>
            {activity.activityType}
          </h3>

          <p>
            Duration:{" "}
            {activity.duration}
          </p>

          <p>
            Carbon Emission:{" "}
            {activity.carbonEmission}
          </p>

          <button
            onClick={() =>
              deleteActivity(
                activity._id
              )
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;