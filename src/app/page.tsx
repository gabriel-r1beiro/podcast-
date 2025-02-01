import { AllEpisodes } from "@/components/AllEpisodes";
import { Lancamentos } from "@/components/Lancamentos";

export default async function Home() {
	return (
		<div className="flex">
			<main className="flex-1">
				<div className="overflow-y-scroll homepage px-16">
					<Lancamentos />
					<AllEpisodes />
				</div>
			</main>
		</div>
	);
}
