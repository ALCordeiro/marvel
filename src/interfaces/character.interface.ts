export interface CharacterResponseData {
    character: {
        id: string;
        name: string;
        description: string;
        thumbnail: {
            path: string;
            extension: string;
        };
    };
}

export interface ResponseData {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}
