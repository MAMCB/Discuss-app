'use client';
import { useSession } from 'next-auth/react';


const Profile = () => {
    const session = useSession();
    if(session.data?.user)
        {
            return (
                <div>
                    From client:user is signed in
                    <h1>Profile</h1>
                    <p>{session.data.user.name}</p>
                    <p>{session.data.user.email}</p>
                    
                    
                </div>
            )
        }
  return (
    <div>From client:user is NOT signed in</div>
  )
}

export default Profile