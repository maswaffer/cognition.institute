import { ActionReducer, Action } from '@ngrx/store';

export const NEXT_SENTENCE = 'NEXT_SENTENCE';
export const RESET = 'RESET';

export const sentenceCounterReducer : ActionReducer<number> = (state: number = 0, action: Action)=>{
    switch (action.type) {
        case NEXT_SENTENCE:
           return state + 1;
        case RESET:
            return 0;
        default:
            return state;
            break;
    }
}