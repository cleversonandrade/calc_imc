import { Inter } from "next/font/google";
import CalcIMC from "./calcimc/CalcImc";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <CalcIMC />
    </div>
  );
}
