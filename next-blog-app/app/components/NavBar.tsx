import Link from "@/node_modules/next/link";

const NavBar = () => {
  return (
    <nav className="px-40 py-5 bg-gray-900 md:flex md:items-center md:justify-between">
      <div>
        <span className="text-3xl font-[poppins] text-slate-300 font-bold">
          <img
            className="h-10 inline rounded-full mr-5"
            src="https://cdn3.f-cdn.com//files/download/144571748/professional%20logo.jpg?fit=crop"
            alt="my-logo"
          />
          Blog-post
        </span>
      </div>
      <ul className="md:flex md:justify-around md:gap-10">
        <li>
          <Link
            href="/"
            className="text-2xl text-slate-300 hover:text-slate-500 duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/blogs"
            className="text-2xl text-slate-300 hover:text-slate-500 duration-300"
          >
            blogs
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-2xl text-slate-300 hover:text-slate-500 duration-300"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            href="/blogs/new"
            className="text-2xl text-slate-300 hover:text-slate-500 duration-300"
          >
            new Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
