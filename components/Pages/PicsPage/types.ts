export interface PhotoItem {
    alt_description: string;
    id: string;
    urls: {
        thumb: string;
        regular: string;
    };
}

export type Status = 'idle' | 'success' | 'error' | 'loading' | 'no-data';
