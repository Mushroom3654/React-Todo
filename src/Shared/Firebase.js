import * as firebase from 'firebase';

const projectId = "todolist-dd157";

let config = {
    apiKey:"AIzaSyDj4505dFy_sG1oKry3JA2Jp90cVgvU6QY",
    authDomain:`${projectId}.firebaseapp.com`,
    databaseURL:`https://${projectId}.firebaseio.com`,
    projectId:`${projectId}`,
    storageBucket:`${projectId}.appspot.com`,
    messagingSenderId:"99419747328",
};

let database;

export const initFirebase = () =>{
    if(!firebase.apps.length){
        firebase.initializeApp(config);
    }
    database = firebase.database();
};