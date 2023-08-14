import React from 'react'
import Avator from './Avator'
import ProfileDetails from './ProfileDetails'
import { profile } from './ProfileList'

const ProfileCard:React.FC<profile> = ({ profile }) => {
  return (
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <Avator image={profile.image} />
        <ProfileDetails
            name={profile.name}
            email={profile.email}
            website={profile.website}
            phone={profile.phone}
        />
    </div>
  );
}

export default ProfileCard
