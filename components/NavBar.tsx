import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-black text-white py-3 px-6 flex items-center justify-between">
      <div className="text-2xl font-bold">Cab Connect</div>

      <div className="flex items-center gap-8">
        <Link href="#" className="text-sm hover:text-gray-300">
          Ride
        </Link>
        <Link href="#" className="text-sm hover:text-gray-300">
          Drive
        </Link>
        <Link href="#" className="text-sm hover:text-gray-300">
          Business
        </Link>
        <Link
          href="#"
          className="text-sm flex items-center hover:text-gray-300"
        >
          About
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <Link href="#" className="text-sm hover:text-gray-300">
          Help
        </Link>
        <Link href="#" className="text-sm hover:text-gray-300">
          Log in
        </Link>

        <button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200">
          Sign up
        </button>
      </div>
    </div>
  );
}
