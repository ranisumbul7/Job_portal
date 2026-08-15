import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    return (
        <div>
            <Navbar />
           <div className="flex items-center justify-center mx-auto max-w-7xl">
            <from action="" className="w-1/2 p-4 my-10 border border-gray-200 rounded-md">
                <h1 className="mb-5 text-2xl font-bold">Sign Up</h1>
                <div className="my-2">
                  <Label>Full name</Label> 
                  <Input 
                   type="text"
                   placeholder="Enter your name"
                  /> 
                </div>
                <div className="my-2">
                  <Label>Email</Label> 
                  <Input 
                   type="email"
                   placeholder="Enter your email"
                  /> 
                </div>
                <div className="my-2">
                  <Label>phone Number</Label> 
                  <Input 
                   type="text"
                   placeholder="123...."
                  /> 
                </div>
                
                <div className="my-2">
                  <Label>Password</Label> 
                  <Input 
                   type="password"
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
        className="cursor-pointer"
         />
        <Label htmlFor="r1">Student</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Input
          type="radio"
          name="role"
          value="recruiter"
          className="cursor-pointer"
        />
        <Label htmlFor="r3">Recruiter</Label>
      </div>
    </RadioGroup>
    <div className="flex items-center gap-2">
      <Label>Profile</Label>
      <Input
        accept="image/*"
        type="file"
        className="cursor-pointer"
      />
    </div>
       </div>

    <Button type="Submit" className="w-full my-4">Signup</Button>
    <span className="text-sm">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></span>
            </from>
           </div>
        </div>
    )
}

export default Signup  