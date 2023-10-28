const title = document.createElement('title');
title.textContent = 'test maket';
document.head.appendChild(title);

const style = document.createElement('style');
style.innerHTML = `
    * {
        margin: 0;
        padding: 0;
    }
    .app {
        max-width: 60%;
        margin: 0 auto;
    }
    h1 {
        margin-top: 100px;
        margin-bottom: 10px;
        text-align: center;
        color: #212121;
        font-family: Arvo;
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: 48px;
    }

    p {
        color: #9FA3A7;
        text-align: center;
        font-family: OpenSans;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
    }

    .head__content {
        margin-bottom: 55px;
    }

    .body__element {
        display: flex;
        margin-bottom: 140px
    }

    .left__element {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }

    .right__element {
        width: 50%;
        background: #8F75BE;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h3 {
        margin-top: 80px;
        margin-bottom: 19px
    }

    .title__h3__left {
        color: #9FA3A7;
        text-align: center;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 2.4px;
        text-transform: uppercase;
    }

    .title__h3__right {
        text-align: center;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 2.4px;
        text-transform: uppercase;
        color: #FFC80A;
    }

    h2 {
        width: 210px;
        height: 92px;
        text-align: center;
        font-family: Arvo;
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: 46px;

        margin-bottom: 25px;
    }

    .title__h2__left {
        color: #212121;
    }
    
    .title__h2__right {
        color: #fff;
    }

    .paragraph__left {
        max-width: 210px;
        font-size: 12px;
        line-height: 22px;
        margin-bottom: 56px;
    }

    .paragraph__right {
        max-width: 210px;
        font-size: 12px;
        line-height: 22px;
        margin-bottom: 56px;
        color: #fff;
        font-size: 12px;
        line-height: 22px;
    }

    button {
        width: 160px;
        border: 2px solid #FFC80A;
        padding: 15px 20px;
        margin-bottom: 75px;

        border-radius: 25px;
        text-align: center;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 2.4px;
    }

    .button__left {
        background: #fff;
        color: #212121;
    }

    .button__right {
        color: #fff;
        background: #8F75BE;
    }


`
document.head.appendChild(style);

const app = document.querySelector('.app');

const h1 = document.createElement('h1');
h1.textContent = 'Choose Your Option';
app.appendChild(h1);

const p = document.createElement('p');
p.classList.add('head__content');
p.textContent = 'But I must explain to you how all this mistaken idea of denouncing ';
app.appendChild(p);

const box = document.createElement('div');
box.classList.add('body__element');
app.appendChild(box);

const left = document.createElement('div');
left.classList.add('left__element');
box.appendChild(left);

const right = document.createElement('div');
right.classList.add('right__element');
box.appendChild(right);

const h3 = document.createElement('h3');
h3.classList.add('title__h3__left');
h3.textContent = 'freelancer';
left.appendChild(h3);

const h2 = document.createElement('h2');
h2.classList.add('title__h2__left');
h2.textContent = 'Initially designed to ';
left.appendChild(h2);

const pLeft = document.createElement('p');
pLeft.classList.add('paragraph__left');
pLeft.textContent = 'But I must explain to you how all this mistaken idea of denouncing '
left.appendChild(pLeft);

const button = document.createElement('button');
button.classList.add('button__left');
button.textContent = 'START HERE';
left.appendChild(button);

const h3Right = document.createElement('h3');
h3Right.classList.add('title__h3__right');
h3Right.textContent = 'studio';
right.appendChild(h3Right);

const h2Right = document.createElement('h2');
h2Right.classList.add('title__h2__right');
h2Right.textContent = 'Initially designed to ';
right.appendChild(h2Right);

const pRight = document.createElement('p');
pRight.classList.add('paragraph__right');
pRight.textContent = 'But I must explain to you how all this mistaken idea of denouncing '
right.appendChild(pRight);

const buttonRight = document.createElement('button');
buttonRight.classList.add('button__right');
buttonRight.textContent = 'START HERE';
right.appendChild(buttonRight);