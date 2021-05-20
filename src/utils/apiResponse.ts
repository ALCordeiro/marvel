export const characters: any = [
    {
        comics: {
            available: 12,
            collectionURI:
                'http://gateway.marvel.com/v1/public/characters/1011334/comics',
            items: Array(12),
            returned: 12,
        },
        description: '',
        events: {
            available: 1,
            collectionURI:
                'http://gateway.marvel.com/v1/public/characters/1011334/events',
            items: Array(1),
            returned: 1,
        },
        id: 1011334,
        modified: '2014-04-29T14:18:17-0400',
        name: '3-D Man',
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
        series: {
            available: 3,
            collectionURI:
                'http://gateway.marvel.com/v1/public/characters/1011334/series',
            items: Array(3),
            returned: 3,
        },
        stories: {
            available: 21,
            collectionURI:
                'http://gateway.marvel.com/v1/public/characters/1011334/stories',
            items: Array(20),
            returned: 20,
        },
        thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
            extension: 'jpg',
        },
        map: () => 'test',
        length: () => 1,
        filter: () => 'test',
    },
];

export const character: any = {
    state: {
        id: 10,
        name: 'Rubick',
        description: 'The Grand magus',
        comics: {
            available: 1,
            items: [
                {
                    name: 'The Granddd magus',
                },
            ],
        },
        series: {
            available: 1,
            collectionURI:
                'http://gateway.marvel.com/v1/public/characters/1017100/series',
            items: [
                {
                    name: 'FREE COMIC BOOK DAY 2013 1 (2013)',
                    resourceURI:
                        'http://gateway.marvel.com/v1/public/series/17765',
                },
            ],
            returned: 1,
        },
        thumbnail: {
            extension: 'jpg',
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
        },
    },
};
