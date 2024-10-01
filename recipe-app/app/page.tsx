import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Recipe Rush!
      </h1>
      <p className="text-xl text-gray-600">
        Your one-stop destination for delicious recipes.
      </p>
      <Link
        href="/recipes"
        className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
      >
        View recipes
      </Link>
    </div>
  );
}
