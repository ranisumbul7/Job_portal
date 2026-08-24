import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

   const submitHandler = async (e) => {
    e.preventDefault();

    if (!input.email || !input.password || !input.role) {
        toast.error("Please fill all fields.");
        return;
    }

    try {
        const res = await axios.post(
            `${USER_API_END_POINT}/login`,
            input,
            {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            }
        );

        if (res.data.success) {
            console.log("Logged in user:", res.data.user);

            dispatch(setUser(res.data.user));

            toast.success(res.data.message);

            navigate("/");
        }

    } catch (error) {
        console.log("Login Error:", error);

        toast.error(
            error.response?.data?.message ||
            "Login failed. Please try again."
        );
    }
};


    return (
        <div>
            <Navbar />

            <div className="flex items-center justify-center mx-auto max-w-7xl">
                <form
                    onSubmit={submitHandler}
                    className="w-1/2 p-4 my-10 border border-gray-200 rounded-md"
                >
                    <h1 className="mb-5 text-2xl font-bold">
                        Login
                    </h1>

                    {/* Email */}
                    <div className="my-2">
                        <Label>Email</Label>

                        <Input
                            type="email"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="my-2">
                        <Label>Password</Label>

                        <Input
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {/* Role */}
                    <div className="flex items-center justify-between">
                        <RadioGroup className="flex items-center gap-4 my-5">

                            {/* Student */}
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === "student"}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />

                                <Label>Student</Label>
                            </div>

                            {/* Recruiter */}
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === "recruiter"}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />

                                <Label>Recruiter</Label>
                            </div>

                        </RadioGroup>
                    </div>

                    {/* Login Button */}
                    <Button
                        type="submit"
                        className="w-full my-4"
                    >
                        Login
                    </Button>

                    {/* Signup Link */}
                    <span className="text-sm">
                        Don't have an account?{" "}

                        <Link
                            to="/signup"
                            className="text-blue-500"
                        >
                            Sign Up
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Login;