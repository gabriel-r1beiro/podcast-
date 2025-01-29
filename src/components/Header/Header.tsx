import { format } from "date-fns/format";
import { ptBR } from "date-fns/locale";

export const Header = () => {
	const currentDate = format(new Date(), "EEEEEE, d MMM", {
		locale: ptBR,
	});
	return (
		<header className="bg-white h-[6.5rem] flex items-center px-16 py-8 border-b-[1px] border-gray-100">
			<div className="flex items-center gap-2">
				<img className="w-[6rme] h-16" src="/music.svg" alt="Podcastr.com" />
				<h2>Podcastr</h2>
			</div>
			<p className="ml-2 py-[0.25rem] pl-8 border-l-[1px] border-gray-100">
				O melhor para você ouvir sempre
			</p>
			<span className="ml-auto capitalize">{currentDate}</span>
		</header>
	);
};
