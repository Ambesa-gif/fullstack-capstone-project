import API from "../api/api";

const handleRegister = async (e) => {
  e.preventDefault();

  try {
    const res = await API.post("/auth/register", {
      username,
      email,
      password,
    });

    alert(res.data.message);
  } catch (error) {
    alert("Registration failed");
  }
};

<form onSubmit={handleRegister}></form>
