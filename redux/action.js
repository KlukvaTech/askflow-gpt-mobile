import axios from 'axios';
export const GET_ANSWER = 'GET_ANSWER';
export const SET_DATA = 'SET_DATA';
export const SET_COMPLETED = 'SET_COMPLETED';

const API_URL = "http://5b283eba058fc4812cc39daef113e972.serveo.net/api/";
// Access API key from environment variable
const apiKey = "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";
const history = [];

export const getAnswer = (question, document) => {
    if (history.length < 1 || "response" in history[history.length-1]) {
    	history.push({"prompt" : question});
    } else {
    	history[history.length-1] = {"prompt" : question}
    }
    console.log(question, document, history)
    try {
        return async dispatch => {
        const response = await axios.post(API_URL + 'answer', {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
                "question": question,
                "history": history,
                "api_key": apiKey,
                "embeddings_key": apiKey,
                "active_docs": 'local/' + document + '/'
            })
    	history[history.length-1]['response'] = response.data.answer
        dispatch({
                type: GET_ANSWER,
                payload: response.data.answer
            });     
        }
    } catch (error) {
        console.log('Error while fetching answer:', error);
    }
}

export const setData = (data) => dispatch => {
    dispatch({
        type: SET_DATA,
        payload: data
    })
}

export const setCompleted = (completed) => dispatch => {
    dispatch({
        type: SET_COMPLETED,
        payload: completed
    })
}
