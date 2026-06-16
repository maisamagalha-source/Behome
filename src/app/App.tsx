import { ConsumerNavbar } from "./components/ConsumerNavbar";
import { ConsumerHero } from "./components/ConsumerHero";
import { ConsumerEvents } from "./components/ConsumerEvents";
import { ConsumerArticles } from "./components/ConsumerArticles";
import { ConsumerFooter } from "./components/ConsumerFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <ConsumerNavbar />
      <ConsumerHero />
      <ConsumerEvents />
      <ConsumerArticles />
      <ConsumerFooter />
    </div>
  );
}
