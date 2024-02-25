import { anime, radio, paint, place, chain } from '../assets/icons';
import {
    aeth,
    crystal,
    drift,
    cs,
    haunt,
    kitty,
    moonchild,
    ps1,
    synth,
    aeth1,
    aeth2,
    aeth3,
    aeth4,
    aeth5,
    aeth6,
    aeth7,
    aeth8,
    aeth9,
    aeth10,
} from '../assets/pics';

export const ROUTES = {
    CV: 'CV',
    RADIO: 'radio',
    PICS: 'pics',
    MAPS: 'maps',
    TEKKEN: 'tekken',
    LOGO: 'logo',
    HOME: '/',
    SOON: 'soon',
    ABOUT: 'about',
} as const;

export const pages = [
    {
        id: 1,
        name: 'about me',
        icon: anime,
        path: ROUTES.CV,
    },
    {
        id: 2,
        name: 'radio',
        icon: radio,
        path: ROUTES.RADIO,
    },
    {
        id: 3,
        name: 'pics',
        icon: paint,
        path: ROUTES.PICS,
    },
    {
        id: 4,
        name: 'maps',
        icon: place,
        path: ROUTES.MAPS,
    },
    {
        id: 5,
        name: 'tekken 3',
        icon: chain,
        path: ROUTES.TEKKEN,
    },
];

export const pics = [
    {
        id: 1,
        name: 'aeth',
        pic: aeth,
        path: 'aeth',
    },
    {
        id: 2,
        name: 'crystal',
        pic: crystal,
        path: 'crystal',
    },
    {
        id: 3,
        name: 'drift',
        pic: drift,
        path: 'drift',
    },
    {
        id: 4,
        name: 'cs',
        pic: cs,
        path: 'cs',
    },
    {
        id: 5,
        name: 'haunt',
        pic: haunt,
        path: 'haunt',
    },
    {
        id: 6,
        name: 'kitty',
        pic: kitty,
        path: 'kitty',
    },
    {
        id: 7,
        name: 'moonchild',
        pic: moonchild,
        path: 'aeth',
    },
    {
        id: 8,
        name: 'ps1',
        pic: ps1,
        path: 'ps1',
    },
    {
        id: 9,
        name: 'synth',
        pic: synth,
        path: 'synth',
    },
    {
        id: 10,
        name: 'aeth1',
        pic: aeth1,
        path: 'aeth1',
    },
    {
        id: 11,
        name: 'aeth2',
        pic: aeth2,
        path: 'aeth2',
    },
    {
        id: 12,
        name: 'aeth3',
        pic: aeth3,
        path: 'aeth3',
    },
    {
        id: 13,
        name: 'aeth4',
        pic: aeth4,
        path: 'aeth4',
    },
    {
        id: 14,
        name: 'aeth5',
        pic: aeth5,
        path: 'aeth5',
    },
    {
        id: 15,
        name: 'aeth6',
        pic: aeth6,
        path: 'aeth6',
    },
    {
        id: 16,
        name: 'aeth7',
        pic: aeth7,
        path: 'aeth7',
    },
    {
        id: 17,
        name: 'aeth8',
        pic: aeth8,
        path: 'aeth8',
    },
    {
        id: 18,
        name: 'aeth9',
        pic: aeth9,
        path: 'aeth9',
    },
    {
        id: 19,
        name: 'aeth10',
        pic: aeth10,
        path: 'aeth10',
    },
];

export const navs = [
    {
        id: 1,
        name: 'File',
        content: [
            {
                id: 1,
                label: 'Create New Directory',
                path: ROUTES.SOON,
            },
            {
                id: 2,
                label: 'Print',
            },
            {
                id: 3,
                label: 'About Project',
                path: ROUTES.ABOUT,
            },
        ],
    },
    {
        id: 2,
        name: 'Edit',
    },
    {
        id: 3,
        name: 'View',
        content: [
            {
                id: 1,
                label: '🖵 fullscreen',
            },
        ],
    },
    {
        id: 4,
        name: 'Options',
        content: [
            {
                id: 1,
                label: '"contact me" button',
            },
        ],
    },
];
