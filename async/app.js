//sync code example
function otherFunction() {
    console.log('We are in another function');
    console.log('faça alguma coisa!')
}



console.log('Start Teste 1 - Synchronous');

otherFunction();


console.log('End');


console.log('\n');

//async code example

console.log('Start Teste 2 - Async');

setTimeout(() => {
    console.log("Notificação atrasada em 5s")
}, 5000);


const items = [1, 2, 3, 4, 5];

items.forEach(item => {
    console.log(item);
});

console.log('End');


//teste loginuser utilizando callback

console.log('Start3');

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log('O usuário logado foi:'); 
        callback({ userEmail: email });
   

    }, 3500);
}

function getUserVideos(email, callback){
    setTimeout(() => {
        callback (['video1', 'video2' , 'video3']);
    },1000)
}

function videoDetails(video, callback){
    setTimeout(()=>{
        callback('title ot the video')
    }, 1500);
}


//Código muito aninhado e que demora muito para realizar todas as requisições!


const user = loginUser('exemplodeemail@gmail.com', 123456, user => {
    console.log(user)
    getUserVideos(user.userEmail, videos=> {
        console.log(videos);
        videoDetails(videos[0], title => {
            console.log(title);
        })
    });
});


console.log('End3');