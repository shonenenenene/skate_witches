import { anime, radio, paint, place, chain } from '../assets/icons';
import { aeth, bible, crystal, drift, cs, haunt, kitty, machete, moonchild, poles, ps1, sailor, shoe, synth, pepe } from '../assets/pics';

export const ROUTES = {
    CV: 'CV',
    RADIO: 'radio',
    PICS: 'pics',
    MAPS: 'maps',
    TEKKEN: 'tekken',
    LOGO: 'logo',
    HOME: '/',
    NEW_DIRECTORY: 'new-directory',
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
        name: 'bible',
        pic: bible,
        path: 'bible',
    },
    {
        id: 3,
        name: 'crystal',
        pic: crystal,
        path: 'crystal',
    },
    {
        id: 4,
        name: 'drift',
        pic: drift,
        path: 'drift',
    },
    {
        id: 5,
        name: 'cs',
        pic: cs,
        path: 'cs',
    },
    {
        id: 6,
        name: 'haunt',
        pic: haunt,
        path: 'haunt',
    },
    {
        id: 7,
        name: 'kitty',
        pic: kitty,
        path: 'kitty',
    },
    {
        id: 8,
        name: 'machete',
        pic: machete,
        path: 'machete',
    },
    {
        id: 9,
        name: 'moonchild',
        pic: moonchild,
        path: 'aeth',
    },
    {
        id: 10,
        name: 'pepe',
        pic: pepe,
        path: 'pepe',
    },
    {
        id: 11,
        name: 'poles',
        pic: poles,
        path: 'poles',
    },
    {
        id: 12,
        name: 'ps1',
        pic: ps1,
        path: 'ps1',
    },
    {
        id: 13,
        name: 'sailor',
        pic: sailor,
        path: 'sailor',
    },
    {
        id: 14,
        name: 'shoe',
        pic: shoe,
        path: 'shoe',
    },
    {
        id: 15,
        name: 'synth',
        pic: synth,
        path: 'synth',
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
                path: ROUTES.NEW_DIRECTORY,
            },
            {
                id: 2,
                label: 'Print CV',
            },
            {
                id: 3,
                label: 'About Project',
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
                label: '🗖 fullscreen',
            },
        ],
    },
    {
        id: 4,
        name: 'Options',
    },
];
