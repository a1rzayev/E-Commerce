import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <Link href="/" className="text-lg font-bold">
        My App
      </Link>
      <div className="space-x-4">
        <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link href="/profile" className="hover:underline">
          Profile
        </Link>
        <Link href="/auth/sign-in" className="hover:underline">
          Sign In
        </Link>
      </div>
    </nav>
  );
}
