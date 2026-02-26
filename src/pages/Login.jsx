import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    dispatch(login({ email: form.email }));
    navigate("/");
  };

  return (
    <div className=" flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login to Your Account
        </h1>

        <input
          type="email"
          placeholder="Email address"
          className="w-full border border-gray-300 p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 p-3 mb-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg transition font-semibold"
        >
          Login
        </button>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition">
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition">
            <FaFacebookF className="text-blue-600" />
            Continue with Facebook
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-yellow-600 font-semibold hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
