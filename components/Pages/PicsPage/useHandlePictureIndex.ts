import { SetStateAction, useCallback } from 'react';

interface UseHandlePictureIndexProps {
    setPictureIndex: (value: SetStateAction<number | null>) => void;
    resLength: number;
}

const useHandlePictureIndex = ({ resLength, setPictureIndex }: UseHandlePictureIndexProps) => {
    return useCallback(
        (action?: 'incr' | 'decr') => {
            setPictureIndex((currIndex) => {
                if (currIndex === null) {
                    return null;
                }
                if (action === 'decr' && currIndex > 0) {
                    return currIndex - 1;
                }

                if (action === 'incr' && currIndex < resLength - 1) {
                    return currIndex + 1;
                }

                return null;
            });
        },
        [resLength]
    );
};

export { useHandlePictureIndex };
