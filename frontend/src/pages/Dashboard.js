import API from "../api/api";
import { useEffect, useState } from "react";

const [activities, setActivities] = useState([]);

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

const addActivity = async () => {
  try {
    const res = await API.post("/activities", {
      activityType,
      duration,
      carbonEmission,
    });

    setActivities([...activities, res.data]);
  } catch (error) {
    console.log(error);
  }
};

const addActivity = async () => {
  try {
    const res = await API.post("/activities", {
      activityType,
      duration,
      carbonEmission,
    });

    setActivities([...activities, res.data]);
  } catch (error) {
    console.log(error);
  }
};

const deleteActivity = async (id) => {
  try {
    await API.delete(`/activities/${id}`);

    setActivities(
      activities.filter(
        (activity) => activity._id !== id
      )
    );
  } catch (error) {
    console.log(error);
  }
};