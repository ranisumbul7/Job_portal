import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar,  AvatarImage } from "../ui/avatar"
import { LogOut, User2 } from 'lucide-react'

const Navbar = () => {
    const user = false; // Replace with your authentication logic
    return (
        <div className='bg-white'>
        <div className="flex items-center justify-between h-16 mx-auto max-w-7xl">
       <div>
            <h1 className='text-2xl font-bold'>Job<spam className='text-[#F83002]'>Portal</spam></h1>
            </div>
            <div className='flex items-center gap-12'>
                <ul className='flex items-center gap-5 font-medium'>
                <li>Home</li>
                <li>Jobs</li>
                <li>Browse</li>
            </ul>
            {
              !user ? (
                <div>
                    <Button variant="outline">Login</Button>
                    <Button>Signup</Button>
                </div>

              )  : (
                <Popover>
         <PopoverTrigger asChild>
          <Avatar className="cursor-pointer">
             <AvatarImage src="https://github.com/shadcn.png" />
     </Avatar>        
</PopoverTrigger>
        <PopoverContent className="w-88">
     <div className="flex gap-4 p-4 space-y-2">
        <Avatar className="cursor-pointer">
             <AvatarImage src="https://github.com/shadcn.png" />
     </Avatar> 
     <div>
     <h4 className="font-medium">johndoe</h4>
     <p className="text-sm text-muted-foreground">johndoe@example.com</p>
     </div>
     </div>

      <div className="flex flex-col gap-3 my-2 text-gray-600"> 
        <div className="flex items-center gap-2 cursor-pointer">
            <User2 /> 
        <Button variant="link">Profile</Button>
        </div>


        <div className="flex items-center gap-2 cursor-pointer">
            <LogOut />
        <Button variant="link">Logout</Button>
        </div>
      </div>
        </PopoverContent>
      </Popover>
              )
            }
      

            </div>
        </div>
        </div>

        
    )
}

export default Navbar;

