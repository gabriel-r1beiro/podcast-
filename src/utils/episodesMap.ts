import { data } from "@/services/data";
import { convertDurationToTimeString } from "@/utils/converteDurationToTimeString";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export const episodes = data.map((episode) => {
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
