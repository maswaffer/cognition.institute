"use strict";
exports.NEXT_SENTENCE = 'NEXT_SENTENCE';
exports.RESET = 'RESET';
exports.sentenceCounterReducer = (state = 0, action) => {
    switch (action.type) {
        case exports.NEXT_SENTENCE:
            return state + 1;
        case exports.RESET:
            return 0;
        default:
            return state;
            break;
    }
};
//# sourceMappingURL=sentenceCounter.reducer.js.map