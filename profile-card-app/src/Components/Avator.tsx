import React from 'react'
type Props ={
    image: string
}

const Avator: React.FC<Props> = ({ image }) => {
  return (
    <div className="rounded-full overflow-hidden w-1/2 h-1/2 mx-auto my-5 aspect-square">
      <img src={image} alt="profile-image" className="aspect-square" />
    </div>
  );
}

export default Avator

