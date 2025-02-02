import { api } from "@/services/api";
import { convertDurationToTimeString } from "@/utils/converteDurationToTimeString";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";

interface EpisodesProps {
    params: {
        slug: string
    }
}

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

export type EpisodeDataProps = {
  data: Episode;
};

export default async function Episodes({ params }: EpisodesProps) {
  const { slug } = await params;
  if(!params || !slug) {
    return<span>Loading...</span>
  }
    const { data }: EpisodeDataProps =  await api.get(`/episodes/${slug}`)
    
    const episodes = {
        id: data.id,
        title: data.title,
        thumbnail: data.thumbnail,
        members: data.members,
        publishedAt: format(parseISO(data.published_at), "d MMM yy", {
          locale: ptBR,
        }),
        duration: Number(data.file.duration),
        durationAsString: convertDurationToTimeString(
          Number(data.file.duration),
        ),
        description: data.description,
        url: data.file.url,
      }

    return (
      <div className="max-w-[45rem] px-2 py-3 my-0 mx-auto">
        <div className="relative thumbnailConteiner">
          
            <button type="button">
              <Link href="/">              
                <img className="arrow w-12" src="/arrow-left.svg" alt="Voltar" />
              </Link>
            </button>

          <Image 
            width={700} 
            height={160} 
            src={episodes.thumbnail} 
            className="object-cover rounded-2xl h-[160px]" 
            alt={episodes.title}/>

            <button type="button">
              <img className="w-8" src="/player.svg" alt="Tocar Episodio" />
            </button>
        </div>

        <header className="headerSlug pb-4 border-b-[1px] border-gray-100">
          <h1 className="ml-8 mb-8">{episodes.title}</h1>
          <span>{episodes.members}</span>
          <span>{episodes.publishedAt}</span>
          <span>{episodes.durationAsString}</span>
        </header>

        <div className="mt-8 text-gray-800 leading-[1.675rem] descript" dangerouslySetInnerHTML={{__html: episodes.description}}/>
       
      </div>
    )
  }
  