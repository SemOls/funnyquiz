const button =document.querySelector("#button");
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
    

const arr = [
'Кто хорошо смеётся?', 
'Ужасная оконная колючка. Что это?',
'Какие блюда называют острыми?',
'В народе четверть могут назвать ...', 
  'Эту посуду мы можем найти в то время, когда играют участники оркестра. Какую?',
  'Что происходит согласно поговорке, когда все суетятся?',
  "Что можно найти у устаревшего анекдота?",
  "Если человек слишком сильно выпил, на чём он ходит?",
  "Другое название мерседеса в народе",
  "Каждый человек уносит это, если сейчас будет опасность. Что?",
  "Этот напиток люди первым делом пьют утром. Что?",
  "Назовите сказку, где была битва за урожай.",
  "Назовите права, которые принадлежат кому-то, кто не имеет никакого влияния.",
  "Наполеон полагал, что именно это отделяет великое от смешного. Что?",

  
];

Swal.fire('Поиграем? Проверь себя! Нажми на кнопку. На ответ у тебя будет только 6 секуннд.')

button.addEventListener("click", start);
button.addEventListener("click", timer);

function start () {
    
    answer.style.display="none";
    let rand = arr[(Math.floor(Math.random()*arr.length))];
    question.style.display="block";
    question.textContent=rand;
    console.log (rand)

    let message = (rand == 'Кто хорошо смеётся?') ? 'Тот, кто смеётся последним' :
            (rand == "Ужасная оконная колючка. Что это?") ? 'Кактус' :
            (rand == 'Какие блюда называют острыми?') ? 'Любые с преобладанием перца' :
            (rand == 'В народе четверть могут назвать ...') ? 'чекушка' :
            (rand == 'Эту посуду мы можем найти в то время, когда играют участники оркестра. Какую?') ? 'тарелки' :
            (rand == 'Что происходит согласно поговорке, когда все суетятся?') ? 'Дым коромыслом' :
            (rand == 'Что можно найти у устаревшего анекдота?') ? 'бороду' :
            (rand == 'Если человек слишком сильно выпил, на чём он ходит?') ? 'на бровях' :
            (rand == 'Другое название мерседеса в народе') ? 'мерин' :
            (rand == 'Каждый человек уносит это, если сейчас будет опасность. Что?') ? 'ноги' :
            (rand == 'Этот напиток люди первым делом пьют утром. Что?') ? 'воду' :
            (rand == 'Назовите сказку, где была битва за урожай.') ? 'Репка' :
            (rand == 'Назовите права, которые принадлежат кому-то, кто не имеет никакого влияния.') ? 'Птичьи права' :
            (rand == 'Наполеон полагал, что именно это отделяет великое от смешного. Что?') ? 'Один шаг' :
            '';
    answer.textContent=message;
    console.log (message)
}

function timer(){
    document.querySelector("#player").play();
    const timer = 0.1
    let amountTime = timer*60
    countdown.style.display="block";
     
    function calculateTime(){

        const countdown=document.querySelector("#countdown");
    
        let minutes = Math.floor(amountTime/60);
        let seconds = amountTime%60;
    
        amountTime--;
    
        if (seconds<10) {
            seconds = "0"+seconds;
        }
        console.log(amountTime);
        
        countdown.textContent = `${minutes} : ${seconds}`;
        if (amountTime<0) {
                stopTimer();
            amountTime=0;
        }
        function stopTimer(){
            clearInterval(timerId);
        
      anSwer();
        
        }
    }
    let timerId = setInterval(calculateTime,1000);
    
}
   
        console.log (countdown)

        function anSwer () {
   
            Swal.fire('Хочешь узнать правильный ответ?');
            countdown.style.display="none";
            answer.style.display="block";
            document.querySelector("#player").pause();
          

        }
    
      
