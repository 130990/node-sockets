//HTML Refs
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const txtMessage = document.querySelector('#txtMessage');
const btnSubmit = document.querySelector('#btnSubmit');

const socketClient = io();

socketClient.on('connect',()=>{
    lblOffline.style.display ='none';
    lblOnline.style.display ='';
});
socketClient.on('disconnect',()=>{
    console.log('Disconnected from server!!');

    lblOnline.style.display ='none';
    lblOffline.style.display ='';
});

socketClient.on('submit-message',(payload)=>{
    console.log(payload);

    lblOnline.style.display ='none';
    lblOffline.style.display ='';
});

btnSubmit.addEventListener('click',()=>{
    const message = txtMessage.value;
    const payload = {
        message,
        id: '123',
        date: new Date()
    }

    socketClient.emit('submit-message', payload,(id)=>{
        console.log('From server response =>', id)
    });   
});