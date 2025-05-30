import Image from "next/image";
import Main from "./Main/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
