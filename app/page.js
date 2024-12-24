import Image from "next/image";
import Header from "./component/header/Header";
import Body from "./component/body/Body";
import Footer from "./component/footer/Footer";
import './globals.css';

export default function Home() {
  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  );
}
