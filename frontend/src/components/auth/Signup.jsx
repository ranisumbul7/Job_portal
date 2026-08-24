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

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: null,
    });

    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const changeFileHandler = (e) => {
        const selectedFile = e.target.files?.[0];

        setInput({
            ...input,
            file: selectedFile || null,
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!input.fullname || !input.email || !input.phoneNumber || !input.password || !input.role) {
            toast.error("Please fill all fields.");
            return;
        }

        if (!input.file) {
            toast.error("Please select profile photo.");
            return;
        }

        const formData = new FormData();

        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        formData.append("file", input.file);

        // Check what is actually being sent
        console.log("Signup Data:");
        console.log("fullname:", input.fullname);
        console.log("email:", input.email);
        console.log("phoneNumber:", input.phoneNumber);
        console.log("password:", input.password);
        console.log("role:", input.role);
        console.log("file:", input.file);

        try {
            const res = await axios.post(
                `${USER_API_END_POINT}/register`,
                formData,
                {
                    withCredentials: true,
                }
            );

            console.log("Register Response:", res.data);

            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/login");
            }
        } catch (error) {
            console.log("Signup Error:", error);

            console.log(
                "Backend Error Response:",
                error.response?.data
            );

            toast.error(
                error.response?.data?.message ||
                "Signup failed."
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
                        Sign Up
                    </h1>

                    <div className="my-2">
                        <Label>Full name</Label>

                        <Input
                            type="text"
                            name="fullname"
                            value={input.fullname}
                            onChange={changeEventHandler}
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="my-2">
                        <Label>Email</Label>

                        <Input
                            type="email"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="my-2">
                        <Label>Phone Number</Label>

                        <Input
                            type="text"
                            name="phoneNumber"
                            value={input.phoneNumber}
                            onChange={changeEventHandler}
                            placeholder="8080808080"
                        />
                    </div>

                    <div className="my-2">
                        <Label>Password</Label>

                        <Input
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex items-center justify-between">

                        <RadioGroup className="flex items-center gap-4 my-5">

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

                        <div className="flex items-center gap-2">
                            <Label>Profile</Label>

                            <Input
                                type="file"
                                accept="image/*"
                                onChange={changeFileHandler}
                                className="cursor-pointer"
                            />
                        </div>

                    </div>

                    <Button
                        type="submit"
                        className="w-full my-4"
                    >
                        Signup
                    </Button>

                    <span className="text-sm">
                        Already have an account?{" "}

                        <Link
                            to="/login"
                            className="text-blue-500"
                        >
                            Login
                        </Link>
                    </span>

                </form>
            </div>
        </div>
    );
};

export default Signup;