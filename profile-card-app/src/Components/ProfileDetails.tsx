import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";

type Props = {
  name: string;
  email: string;
  website: string;
  phone: number;
};

const ProfileDetails: React.FC<Props> = ({ name, email, phone, website }) => {
  return (
    <div className="flex flex-col px-20 mb-20 text-xl">
      <h2 className="text-2xl font-bold text-center"> {name} </h2>
      <div>
        <AiOutlineMail className="text-lg inline-block font-bold w-50 h-50" />
        {email}
      </div>
      <div>
        <AiOutlinePhone className="text-lg inline-block font-bold w-50 h-50" />{" "}
        {phone}{" "}
      </div>
      {website && (
        <div>
          <TbWorld className="text-lg inline-block font-bold w-50 h-50" />{" "}
          {website}{" "}
        </div>
      )}
      <div className="bg-slate-700 text-slate-50 p-3 m-5 shadow-lg rounded-2xl text-center">View Profile</div>
    </div>
  );
};

export default ProfileDetails;
