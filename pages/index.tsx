import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-red-100">
      <h1 className="text-blue-500">it works</h1>
    </div>
  );
}
