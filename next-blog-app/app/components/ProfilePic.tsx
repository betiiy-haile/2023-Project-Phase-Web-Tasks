import Image from "next/image";

const ProfilePic = () => {
  return (
    <div className="md:flex-shrink-0">
      <Image
        src="/images/ensaro.jpg"
        alt="profile pic"
        width={300}
        height={270}
        className="h-64 w-full object-cover md:w-64 rounded-full mx-auto mt-10 border-4 border-slate-600"
      />
    </div>    
  );
};

export default ProfilePic;
