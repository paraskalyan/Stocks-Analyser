import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="bg-black min-h-screen bg-[linear-gradient(180deg,_#000000_0%,_#0d0d0d_100%)]">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}
