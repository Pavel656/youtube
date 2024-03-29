const switcher = document.querySelector('#cbx'),
        more = document.querySelector('.more'),
        modal = document.querySelector('.modal'),
        videos = document.querySelector('.videos_item');
let player;

function bindSlibeToggle(trigger,boxBody,content,openClass) {
        let button = {
                'element': document.querySelector(trigger),
                'active': false
        };
        const box = document.querySelector(boxBody),
         boxContent = document.querySelector(content);

        button.element.addEventListener('click', () =>{
             if (button.active === false){ // Проверяем меню на неактивность
                 button.active = true;     // Если она не активна -то мы делаем её вктивной
                 box.style.height = boxContent.clientHeight +'px';
                 box.classList.add(openClass); //Активный класс для меню
             }  else {
                     button.active =false;//
                     box.style.height = 0 +'px';
                     box.classList.remove(openClass);
             } 
        });        
}
bindSlibeToggle('.hamburger', '[data-slide="nav"]','.header__menu','slide-active');

function switcMode(){
if (night === false){
        night = true;
       // document.body.style.backgroundColor = '#000';
       document.body.classList.add('night');
       document.querySelectorAll('.hamburger > line').forEach(item=>{
               item.style.stroke = '#fff';
       });

       document.querySelectorAll('.videos__item-descr').forEach(item=>{
        item.style.color = '#fff';
});

document.querySelectorAll('.videos__item-views').forEach(item=>{
        item.style.color = '#fff';
});

document.querySelector('.header__item-descr').style.color ='#fff';
document.querySelector('.logo > img').src = 'logo/youtube_night.svg';
        } else {
                night = false;
                document.body.classList.remove('night');
                document.querySelectorAll('.hamburger > line').forEach(item =>{
                        item.style.stroke = '#000';
                });

                document.querySelectorAll('.videos__item-descr').forEach(item =>{
                        item.style.color = '#000';
                });

                document.querySelectorAll('.videos__item-descr').forEach(item =>{
                        item.style.color = '#000';
                });
                document.querySelector('.header__item-descr').style.color ='#000';
                document.querySelector('.logo > img').src = 'logo/youtube.svg';

        }
}
let night = false;
switcher.addEventListener('change', ()=>{
        switcMode();
});


const data = [
        ['img/thumb_3.webp','img/thumb_4.webp','img/thumb_5.webp'],
        ['#3 Верстка на flexbox CSS | Блок преимущества и галерея | Марафон верстки | Артем Исламов',
           '#2 Установка spikmi и работа с ветками на Github | Марафон верстки Урок 2',
           '#1 Верстка реального заказа landing Page | Марафон верстки | Артем Исламов'],
        ['3,6 тыс. просмотров', '4.2 тыс. просмотров ', '28 тыс. просмотров'],
        ['X9SmcY3lM-U','7BvHoh0BrMw', 'mC8Jw_aG2EM']
        ];

more.addEventListener('click', () => {
        const videosWrapper = document.querySelector('.videos__wrapper');
        more.remove();

        for(let i = 0; i < data[0].length; i++){
                let card = document.createElement('a');
                card.classList.add('videos__item');
                card.setAttribute('data-url', data[3][i]);
                card.innerHTML =`
                <img src="${data[0][i]}" alt="thumb">
                <div class="videos__item-descr">
                ${data[1][i]}
                </div>
                <div class="videos__item-views">
                ${data[2][i]}
                </div>
                `;
                videosWrapper.appendChild(card);
        }
});