import Hero from "./components/Hero";
import { MidPage } from "./components/MidPage";
import Newest from "./components/Newest"


export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div>
      <Hero />
      
      <Newest />
      <MidPage />
    </div>
  );
}
