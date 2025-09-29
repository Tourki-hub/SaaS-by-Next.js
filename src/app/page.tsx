import MaxWidthWrapper from "../components/MaxWidthWraper";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 rounded-full overflow-hidden border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="text-sm text-zinc-600">Welcome to Our Website hala</p>
      </div>
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-center">
        Chat with your <span className="text-blue-600">documents</span> in
        seconds lslslsl
      </h1>
      <p className="mt-4 max-w-prose text-zinc-700 sm:text-lg text-center">
        Our Hala AI is a powerful document analysis tool that allows you to
        interact with your documents effortlessly.
      </p>
      <Link
        href="/dashboard"
        target="_blank"
        className="inline-flex items-center justify-center px-6 py-3 mt-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
      >
        Get Started →
      </Link>
    </MaxWidthWrapper>
  );
}
