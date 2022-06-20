import FinditFast from "../components/FinditFast";
import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import NewAcquisitions from "../components/NewAcquisitions";
import StatsSection from "../components/StatsSection";

export default function Home() {
  return <div>
		<Hero />
		<NewAcquisitions />
		<StatsSection />
		<LatestNews />
		<FinditFast />
	</div>
}
