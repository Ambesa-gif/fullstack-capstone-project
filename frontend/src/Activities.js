import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";

function Activities() {
  return (
    <div className="container">
      <h1>Activities</h1>

      <ActivityForm />

      <ActivityList />
    </div>
  );
}

export default Activities;