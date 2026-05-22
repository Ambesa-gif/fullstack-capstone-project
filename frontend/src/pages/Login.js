import API from "../api/api";

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await API.post("/auth/login", {
      email,
      password,
    });

    alert(res.data.message);

    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );
  } catch (error) {
    alert("Login failed");
  }
};

<form onSubmit={handleLogin}></form>