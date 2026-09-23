import React, { useState } from 'react'
import UpdateProfileDialog from './UpdateProfileDialog'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'

const skills = [ "JavaScript", "React", "Node.js", "CSS", "HTML" ]
  const isResume = true;

const Profile = () => {
const [open, setOpen] = useState(false);
  return (
    <div>
        <Navbar />
        <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
          <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                      <Avatar className="w-24 h-24">
            <AvatarImage src= "#" alt="profile" />
        </Avatar>
        <div>
        <h1 className='font-medium text-xl'>Full Name</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam unde laboriosam maiores autem animi repellat quod eius!</p>
         </div>
         </div>
          
          <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
          </div>
                 <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>Email</span>
                    </div>
                     <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>Phone Number</span>
                    </div>
                    </div>
                    <div className='my-5'>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                         skills.length !== 0 ? skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>No skills to display</span>
                        }
                    </div>
                </div>

                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                    isResume ? <a href="#" className='text-blue-500 w-full hover:underline cursor-pointer'>Download Resume</a> : <span>No resume uploaded</span>
                      }
                    </div>
            </div>
             <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                {/* Applied Job Table   */}
                <AppliedJobTable />
            </div>
          <UpdateProfileDialog open={open} setOpen={setOpen}/>  
</div>
  )
}
export default Profile; 