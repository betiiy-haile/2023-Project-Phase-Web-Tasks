import React from 'react'
import ProfileCard from './Components/ProfileCard'
// import profileList from './Components/ProfileList'

export type profile  = {
    image: string
    name: string
    email: string
    phone: number
    website: string | null    
}
const profileList: profile = [
  {
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: 1234567890,
    website: "www.johndoe.com",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Jane Doe",
    email: "janedoe@yahoo.com",
    phone: 9876543210,
    website: null,
  },
  {
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Peter Smith",
    email: "petersmith@hotmail.com",
    phone: 9876543210,
    website: "www.petersmith.com",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Jane Doe",
    email: "janedoe@yahoo.com",
    phone: 9876543210,
    website: null,
  },
  {
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Peter Smith",
    email: "petersmith@hotmail.com",
    phone: 9876543210,
    website: "www.petersmith.com",
  },
];

const App = () => {
  return (
    <div className="mt-5">
      <h1 className="text-zinc-300 text-5xl font-bold p-5 text-center">
        PROFILE LIST
      </h1>
      <div className="grid xl:grid-cols-3 lg:gap:10 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-20 py-5 px-40">
        {profileList.map((profile) => {
          return <ProfileCard profile={profile} />;
        })}
      </div>
    </div>
  );
}

export default App
