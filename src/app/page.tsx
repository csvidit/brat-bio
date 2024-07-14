import MainContent from "@/components/containers/MainContent";
import ListLinks from "@/components/links/ListLinks";
import FeaturedLinks from "@/components/sections/FeaturedLinks";
import Footer from "@/components/sections/Footer";
import Intro from "@/components/sections/Intro";

export default function Home() {
  return (
    <MainContent>
      <Intro />
      <FeaturedLinks/>
      <ListLinks />
      <Footer />
    </MainContent>
  );
}
