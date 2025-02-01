import { episodes } from "@/utils/episodesMap";
import Image from "next/image";
import Link from "next/link";

export const AllEpisodes = () => {
	const allEpisodes = episodes.slice(2, episodes.length);
	return (
		<section className="pb-8 allEpisodes">
			<h2>Todos Episódios</h2>

			<table cellSpacing={0} className="w-full bg-gra">
				<thead>
					<tr>
						<th> </th>
						<th>Podcast</th>
						<th>Integrantes</th>
						<th>Data</th>
						<th>Duração</th>
						<th> </th>
					</tr>
				</thead>
				<tbody>
					{allEpisodes.map((episodes) => {
						return (
							<tr key={episodes.id}>
								<td style={{ width: 72 }}>
									<Image
										className="object-cover"
										width={120}
										height={120}
										objectFit="cover"
										alt={episodes.title}
										src={episodes.thumbnail}
									/>
								</td>
								<td>
									<Link href={`/episodes/${episodes.id}`}>
										<p>{episodes.title}</p>
									</Link>
								</td>
								<td>{episodes.members}</td>
								<td style={{ width: 100 }}>{episodes.publishedAt}</td>
								<td>{episodes.durationAsString}</td>
								<td>
									<button
										type="button"
										className="tr-btt flex items-center justify-center w-8 h-8 bg-white border-[1px] border-gray-100 rounded-[0.5rem] text-[0]"
									>
										<img
											className="w-5 h-5"
											src="/player.svg"
											alt="Tocar episódio"
										/>
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</section>
	);
};
