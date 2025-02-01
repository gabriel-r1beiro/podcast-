import { api } from "./api";

export type Episode = {
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

export type HomeProps = {
    data: Episode[];
};

export const { data }: HomeProps = await api.get("episodes", {
    params: {
        _limit: 12,
        _sort: "published_at",
        _order: "desc",
    },
});