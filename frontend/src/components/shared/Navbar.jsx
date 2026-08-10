import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from "../ui/avatar"
const Navbar = () => {
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
      <Popover>
         <PopoverTrigger asChild>
          <Avatar className="cursor-pointer">
             <AvatarImage src="https://github.com/shadcn.png" />
     </Avatar>        
</PopoverTrigger>
        <PopoverContent>
             <h1>Helo</h1>
        </PopoverContent>
      </Popover>

            </div>
        </div>
        </div>

        
    )
}

export default Navbar;

