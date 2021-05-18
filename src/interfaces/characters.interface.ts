export interface ICharacters {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: EventsOrComicsOrSeries;
    series: EventsOrComicsOrSeries;
    stories: Stories;
    events: EventsOrComicsOrSeries;
    urls?: UrlsEntity[] | null;
    length(): number;
}
export interface ICharacterDetail {
    character: {
        name: string;
        description: string;
        comics: {
            available: number;
            items: [
                {
                    name: string;
                },
            ];
        };
        series: ComicsOrSeries;
    };
}

export interface IState {
    state: {
        id: number;
        name: string;
        description: string;
        comics: {
            available: number;
            items: [
                {
                    name: string;
                },
            ];
        };
        series: ComicsOrSeries;
    };
}

export interface ComicsOrSeries {
    available: number;
    collectionURI: string;
    items?: ItemsEntity[] | null;
    returned: number;
}

export interface Thumbnail {
    path: string;
    extension: string;
}

export interface EventsOrComicsOrSeries {
    available: number;
    collectionURI: string;
    items?: (ItemsEntity | null)[] | null;
    returned: number;
}

export interface ItemsEntity {
    resourceURI: string;
    name: string;
}

export interface Stories {
    available: number;
    collectionURI: string;
    items?: (ItemsEntity1 | null)[] | null;
    returned: number;
}

export interface ItemsEntity1 {
    resourceURI: string;
    name: string;
    type: string;
}

export interface UrlsEntity {
    type: string;
    url: string;
}

export interface IRootState {
    characters: { characters: ICharacters };
}

export interface ICharacters2 {
    characters: ICharacters;
}

export interface ICharacterCard {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: ComicsOrSeriesOrStoriesOrEvents;
    series: ComicsOrSeriesOrStoriesOrEvents;
    stories: ComicsOrSeriesOrStoriesOrEvents;
    events: ComicsOrSeriesOrStoriesOrEvents;
    urls?: UrlsEntity[] | null;
}

export interface ComicsOrSeriesOrStoriesOrEvents {
    available: number;
    collectionURI: string;
    items?: null[] | null;
    returned: number;
}

export interface ICharacterCard2 {
    character: ICharacterCard;
}
