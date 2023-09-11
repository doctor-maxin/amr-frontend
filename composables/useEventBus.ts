import mitt from 'mitt'

type ApplicationEvents = {
    'on-filter': void;
    'toFeedBack': void;
};

const emitter = mitt<ApplicationEvents>()

export const useEvent = emitter.emit
export const useListen = emitter.on