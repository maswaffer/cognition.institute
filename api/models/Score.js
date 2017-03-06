/**
 * Score.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true
    },
    participantId: {
      type: 'string',
      defaultsTo: ''
    },
    sex: {
      type: 'string',
      defaultsTo: ''
    },
    trials: {
      type: 'integer'
    },
    sentenceTotal: {
      type: 'integer'
    },
    lettersTotal:{
      type: 'integer'
    },
    sentenceCorrect:{
      type: 'integer'
    },
    lettersCorrect: {
      type: 'integer'
    },
    partial: {
      type: 'float'
    },
    pcus: {
      type: 'float'
    },
    sentenceDuration: {
      type: 'float'
    }
  }
};

