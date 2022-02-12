import { useEffect, useState } from 'react';
import { URL_API } from '../../../constants/Url';

const useAudio = () => {
    const [audio, setAudio] = useState<HTMLAudioElement[] | null>(null);
    const [currentAudio, setCurrentAudio] = useState(0);

    const listener = () => {
        setCurrentAudio((state) => {
            return state + 1;
        });
    };

    const stopAudio = () => {
        audio?.forEach((e) => {
            e.pause();
            e.removeEventListener('ended', listener);
        });
    };

    const collectAudio = (list: Array<string>) => {
        const audioList = list.map((e) => {
            const value = new Audio(`${URL_API}/${e}`);

            value.addEventListener('ended', listener);

            return value;
        });

        stopAudio();
        setAudio(audioList);
        setCurrentAudio(0);
    };

    const playAudio = () => {
        if (audio) {
            if (audio[currentAudio]) audio[currentAudio].play();
        }
    };

    useEffect(() => {
        if (audio) playAudio();
    }, [audio, currentAudio]);

    return collectAudio;
};

export default useAudio;
