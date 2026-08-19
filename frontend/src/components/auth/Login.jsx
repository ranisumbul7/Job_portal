import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const [input, setInput] = useState({
       email: "",
       password: "",
       role: ""
    })

   const changeEventHandler = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
   } 
    
    const submitHandler = async (e) => {
      e.preventDefault();
      console.log(input);
   }
   
    return (
        <div>
            <Navbar />
           <div className="flex items-center justify-center mx-auto max-w-7xl">
            <form onSubmit={submitHandler} className="w-1/2 p-4 my-10 border border-gray-200 rounded-md">
                <h1 className="mb-5 text-2xl font-bold">Login</h1>
                
                <div className="my-2">
                  <Label>Email</Label> 
                  <Input 
                   type="email"
                   value={input.email}
                   name="email"
                   onChange={changeEventHandler}
                   placeholder="Enter your email"
                  /> 
                </div>
                
                
                <div className="my-2">
                  <Label>Password</Label> 
                  <Input 
                   type="password"
                   value={input.password}
                     name="password"
                    onChange={changeEventHandler}
                    placeholder="••••••••"
                  /> 
                </div>
                <div className="flex items-center justify-between ">
                    <RadioGroup className="flex items-center gap-4 my-5">
      <div className="flex items-center space-x-2">
        <Input
        type="radio"
        name="role"
        value="student"
        checked={input.role === 'student'}
       onChange={changeEventHandler}
        className="cursor-pointer"
         />
        <Label htmlFor="r1">Student</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Input
          type="radio"
          name="role"
          value="recruiter"
          checked={input.role === 'recruiter'}
          onChange={changeEventHandler}
          className="cursor-pointer"
        />
        <Label htmlFor="r3">Recruiter</Label>
      </div>
    </RadioGroup>
    
       </div>

    <Button type="Submit" className="w-full my-4">Login</Button>
    <span className="text-sm">Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link></span>
            </form>
           </div>
        </div>
    )
}

export default Login 