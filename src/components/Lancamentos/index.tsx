import { episodes } from "@/utils/episodesMap";
import Image from "next/image";
import Link from "next/link";

export const Lancamentos = () => {
	const latestEpisodes = episodes.slice(0, 2);
	return (
		<section>
			<h2 className="mt-12 mb-6 ">Últimos lançamentos</h2>

			<ul className="list-none grid grid-cols-2 gap-6">
				{latestEpisodes.map((episode) => {
					return (
						<li
							className="bg-white border-[1px] border-gray-100 p-5 rounded-[1.5rem] relative flex items-center"
							key={episode.id}
						>
							<Image
								className="w-24 h-24 rounded-2xl object-cover"
								width={192}
								height={192}
								objectFit="cover"
								src={episode.thumbnail}
								alt={episode.title}
							/>

							<div className="flex-1 ml-4 episodesDetails">
								<Link href={`/episodes/${episode.id}`}>
									<p className="block text-gray-800 font-semibold leading-[1.4rem] hover:underline">
										{episode.title}
									</p>
								</Link>
								<p className="text-sm mt-2 max-w-[70%] whitespace-nowrap overflow-hidden text-ellipsis">
									{episode.members}
								</p>
								<span>{episode.publishedAt}</span>
								<span>{episode.durationAsString}</span>
							</div>

							<button
								type="button"
								className="tr-btt absolute right-8 bottom-8 flex items-center justify-center w-10 h-10 bg-white border-[1px] border-gray-100 rounded-[0.675rem] text-[0]"
							>
								<img
									className="w-6 h-6"
									src="/player.svg"
									alt="Tocar episódio"
								/>
							</button>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
