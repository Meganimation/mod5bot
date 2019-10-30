
import {ApiAiClient} from  'api-ai-javascript';
import {applyMiddleware, createStore} from 'redux';


const accessToken = '2b78f77b6519438d9c19376d57e95bf2'
const client = new ApiAiClient ({accessToken})
const ON_MESSAGE = 'ON_MESSAGE';




export const sendMessage = (text, sender='user') => ({
    type: ON_MESSAGE,
    payload: {text, sender}
});


export const recieveMessage = (sender='user') => ({
    type: ON_MESSAGE,
    payload: {sender}
});





const messageMiddleware = () => next => action => {
    next(action);

    

if (action.type === ON_MESSAGE) {
const { text } = action.payload;


client.textRequest(text)
    .then( onSuccess )

    function onSuccess(response) {
        const {result: {fulfillment}} = response;
        next(sendMessage(fulfillment.speech, 'bot'))
        //update state
        console.log(fulfillment.speech)
        //POST this as the bot model to rails 
        console.log(text)
        //and this 
    }
    }
};

const initState = [{text: 'ayy'}];

const messageReducer = (state = initState, action) => {
    switch(action.type) {

        case ON_MESSAGE:
            return [ ...state, action.payload ];

            default:
                return state;

    }
};

export const store = createStore(messageReducer, applyMiddleware(messageMiddleware))




