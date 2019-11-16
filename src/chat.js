
import {ApiAiClient} from  'api-ai-javascript';
import {applyMiddleware, createStore} from 'redux';
import ls from 'local-storage';


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





const messageMiddleware = (event) => next => action => {
    next(action);
 

   
if (action.type === ON_MESSAGE) {
const { text } = action.payload;

client.textRequest(text)
    .then( beforeSuccess)


 

    function onSuccess(response) {
        const {result: {fulfillment}} = response;
  
        next(sendMessage(fulfillment.speech, 'bot'))
        //update state
    

            var msg = new SpeechSynthesisUtterance(fulfillment.speech);
            msg.lang = 'en-AU'
          return (  
            window.speechSynthesis.speak(msg) 
   )
        
  
        console.log(text)
        //and this 

    }
    function beforeSuccess(response) {
        ls.set('botSpeech', response.result.fulfillment.speech)

        return onSuccess(response)
        }
    }
};

const initState = [{text: 'Hi!', sender: 'bot'}];

const messageReducer = (state = initState, action) => {
    switch(action.type) {

        case ON_MESSAGE:
            return [ ...state, action.payload ];

            default:
                return state;

    }
};

export const store = createStore(messageReducer, applyMiddleware(messageMiddleware))