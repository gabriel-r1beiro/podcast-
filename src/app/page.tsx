import { Header } from "@/components/Header/Header";
import { Player } from "@/components/Player/Player";
import { api } from "@/services/api";
import { convertDurationToTimeString } from "@/utils/converteDurationToTimeString";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

type Episode = {
	id: string;
	title: string;
	members: string;
	thumbnail: string;
	published_at: string;
	file: {
		url: string;
		type: string;
		duration: number;
	};
	durationAsString: string;
	description: string;
};

type HomeProps = {
	data: Episode[];
};

export default async function Home() {
	const { data }: HomeProps = await api.get("episodes", {
		params: {
			_limit: 12,
			_sort: "published_at",
			_order: "desc",
		},
	});

	const episodes = data.map((episode) => {
		return {
			id: episode.id,
			title: episode.title,
			thumbnail: episode.thumbnail,
			members: episode.members,
			publishedAt: format(parseISO(episode.published_at), "d MMM yy", {
				locale: ptBR,
			}),
			duration: Number(episode.file.duration),
			durationAsString: convertDurationToTimeString(
				Number(episode.file.duration),
			),
			description: episode.description,
			url: episode.file.url,
		};
	});

	return (
		<div className="flex">
			<main className="flex-1">
				<Header />
				<p>{JSON.stringify(episodes)}</p>
			</main>
			<Player />
		</div>
	);
}
