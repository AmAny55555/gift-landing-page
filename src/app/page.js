import Image from "next/image";
import Navbar from "./Navbar";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
export default function Home() {
  return (
 <div className="bg-[#F8F8F8]">
  <Navbar/>
<Header/>
<Section/>
<Footer/>
 </div>
  );
}
