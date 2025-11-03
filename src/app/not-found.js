import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
            <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-6">
                Sorry, we couldn’t find the page you were looking for.
            </p>
            <Link
                href="/"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Go Back Home
            </Link>
        </div>
    );
}
