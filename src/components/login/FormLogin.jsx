"use client";
import { useForm } from "react-hook-form";
import email from "../../../public/sms.svg";
import lock from "../../../public/lock.svg";
import { api } from "../../axios/config";
import { useNavigate } from 'react-router';
import useUserStore from "../../store/userStore";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export default function FormLogin() {
  const setUser = useUserStore((state) => state?.setUser);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
  try {
    const response = await api.post("/yeshtery/token", {
      ...data,
      isEmployee: true
    });

    if (response.status !== 200) throw new Error("Login failed");

    const token = response.data?.token;
    const refreshToken = response.data?.refresh;

    Cookies.set("token", token, { secure: true, sameSite: "Strict", httpOnly: true });
    Cookies.set("refresh", refreshToken, { secure: true, sameSite: "Strict", httpOnly: true });

    const userRes = await api.get("/user/info", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (userRes.status === 401) {
      Cookies.remove("token");
      Cookies.remove("refresh");
      throw new Error("Unauthorized");
    }
    
    if (userRes.status !== 200) throw new Error("Failed to fetch user");

    toast.success("Login successful");
    setUser({id: userRes.data?.id, name: userRes.data?.name});
    navigate("/products");
  } catch (err) {
    const message =
      err?.response?.data?.message ||
      err?.message ||
      "Login failed";
    console.error("Login error:", err);
    toast.error(message);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="p-8 rounded-2xl w-full max-w-sm">
        <h2 className="text-4xl text-center mb-2">Welcome back</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Step into our shopping metaverse for an unforgettable shopping experience
        </p>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="relative">
            <img
              src={email}
              alt="email"
              className="absolute size-4 left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border bg-white/40 shadow-md border-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <img
              src={lock}
              alt="lock"
              className="absolute size-4 left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-white bg-white/40 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 ml-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isDirty || !isValid || isSubmitting}
            className="disabled:opacity-50 disabled:cursor-not-allowed w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
