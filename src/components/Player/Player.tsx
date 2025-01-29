export const Player = () => {
	return (
		<div className="w-[26.5rem] h-screen px-16 py-12 text-white bg-purple-500 flex flex-col items-center justify-between">
			<header className="flex items-center gap-4">
				<img
					src="/music-player.svg"
					className="w-16 h-16"
					alt="Tocando agora"
				/>
				<strong>Tocando agora</strong>
			</header>

			<div className="max-w-full h-[20rem] rounded-[1.5rem] border-[1.5px] border-dashed border-purple-500 emptyPlayer text-center flex items-center justify-center">
				<strong>Selecione um podcastr para ouvir</strong>
			</div>

			<footer>
				<div className="flex items-center gap-2 text-[0.875rem]">
					<span className="inline-block w-16 text-center">00:00</span>
					<div className="flex-1">
						<div className="w-full h-[4px] bg-purple-300 rounded-[2px]" />
					</div>
					<span className="inline-block w-16 text-center">00:00</span>
				</div>

				<div className="flex buttons">
					<button type="button">
						<img src="/shuffle.svg" alt="Embaralhar" />
					</button>

					<button type="button">
						<img src="/player-previous.svg" alt="Tocar anterior" />
					</button>

					<button type="button" className="p-4 rounded-2xl bg-purple-400">
						<img src="/player.svg" alt="Tocar" />
					</button>

					<button type="button">
						<img src="/player-next.svg" alt="Tocar Proxima" />
					</button>

					<button type="button">
						<img src="/refresh.svg" alt="Repetir" />
					</button>
				</div>
			</footer>
		</div>
	);
};
