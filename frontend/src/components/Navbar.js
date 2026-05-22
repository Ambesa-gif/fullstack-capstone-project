import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logout = () => {
    localStorage.removeItem("user");

    window.location.reload();
  };

  return (
    <nav>
      <h2>Footprint Logger</h2>

      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/activities">
            Activities
          </Link>
        </li>

        {!user ? (
          <>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>

            <li>
              <Link to="/register">
                Register
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              Welcome, {user.username}
            </li>

            <li>
              <button onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;