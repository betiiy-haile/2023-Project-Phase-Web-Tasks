import ProfilePic from "./components/ProfilePic";

export default function Home() {
  return (
    <main className="mx-auto text-center">
      <ProfilePic />

      {/* <div className=""> */}
      <h1 className="text-3xl font-bold font-serif text-slate-300 p-5">
        Hello and Welcome, I'm Betty
      </h1>
      <h1 className="text-3xl font-bold font-serif text-slate-300">
        This is a simple blog post app built with next js
      </h1>
      {/* </div> */}
    </main>
  );
}
