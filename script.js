const cube = document.querySelector('.box .cube');
const door = document.querySelector('.door');
const doorOpen = document.querySelector('.door .open');
const doorRam = document.querySelector('.door .ram');
const descTitle = document.querySelector('.wall4 .description .title');
const descInfo = document.querySelector('.wall4 .description .desc');
const langButtons = document.querySelectorAll('.wall4 .description .setLanguage span')
const wall1Spans = document.querySelectorAll('.wall1 .titleBox .title span');
const infoButton = document.querySelector('.info-button');
const infoPanel = document.querySelector('.info-panel');

infoButton.addEventListener('click', () => {
    infoPanel.classList.toggle('active');
});

for (let i = 0; i < wall1Spans.length; i++) {
    wall1Spans[i].style.transform = 'none';
}

let open = false;
let rotateCurrent = 0;
let onWheel = false;
doorRam.onclick = () => {
    if (open == false) {
        doorOpen.style.transform = 'rotateY(90deg)';
        setTimeout(() => cube.style.top = '-70px', 400);
        setTimeout(() => {
        cube.style.transform = 'translateZ(800px) scale(0.6)';
        setTimeout(() => {
            cube.style.top = 0;
            onWheel = true;
            open = true;
        }, 400);
        setTimeout(() => doorOpen.style.transform = 'none', 800);
    }, 1000);
    }
}
document.body.onmousewheel = e => {
    if (onWheel) {
        if (e.deltaY > 0) {
            rotateCurrent -= 90;
            cube.style.transform = `translateZ(800px) scale(0.6) rotateY(${rotateCurrent}deg)`;
        } else if (e.deltaY < 0) {
            rotateCurrent += 90;
            cube.style.transform = ` translateZ(800px) scale(0.6) rotateY(${rotateCurrent}deg)`;
        }
    }
}
document.onkeydown = e => {
    if (open) {
        if (e.which == 37) {
            rotateCurrent -= 90;
            cube.style.transform = `translateZ(800px) scale(0.6) rotateY(${rotateCurrent}deg)`;
        } else if (e.which == 39) {
            rotateCurrent += 90;
            cube.style.transform = `translateZ(800px) scale(0.6) rotateY(${rotateCurrent}deg)`;
        }
    }
}

const content = {
    eng: {
        title: 'Armenian Secret Army for the Liberation of Armenia (ASALA)',
        desc: `An Armenian terrorist organization that existed from 1975 until the early 1990s. ASALA was designated a terrorist organization by the US State Department in the 1980s. ASALA's stated goals were "to force the Turkish government to publicly acknowledge its responsibility for the deaths of 1.5 million Armenians, pay reparations and cede territories to historical Armenia". The group received significant covert support from the Armenian diaspora in Europe and the United States. Suffering from internal splits, the group in the 1990s. It was relatively inactive, although in 1991 it claimed an unsuccessful attack on the Turkish ambassador to Hungary.`
    }, 
    rus: {
        title: 'Армянская секретная армия освобождения Армении (ASALA)',
        desc: 'Армянская террористическая организация, существовавшая с 1975 до начала 1990-х гг. АСАЛА была признана террористической организацией Государственным департаментом США в 1980-х годах. Заявленные цели АСАЛА заключались в том, чтобы «заставить правительство Турции публично признать свою ответственность за гибель 1,5 миллиона армян, выплатить репарации и уступить территории исторической Армении». Группа получила значительную скрытую поддержку со стороны армянской диаспоры в Европе и США. Страдая от внутренних расколов, группа в 1990-х гг. Он был относительно бездействующим, хотя в 1991 году заявил о неудачном нападении на посла Турции в Венгрии.'
    }, 
    arm: {
        title: 'Հայաստանի Ազատագրության Հայ Գաղտնի Բանակ, ՀԱՀԳԲ (ASALA)',
        desc: 'Հայկական ահաբեկչական կազմակերպություն, որը գոյություն է ունեցել 1975 թվականից մինչև 1990-ականների սկիզբը։ ԱՍԱԼԱ-ն 1980-ականներին ԱՄՆ Պետդեպարտամենտի կողմից ճանաչվել է ահաբեկչական կազմակերպություն: ASALA-ի հայտարարած նպատակներն էին «ստիպել Թուրքիայի կառավարությանը հրապարակայնորեն ընդունել իր պատասխանատվությունը 1,5 միլիոն հայերի մահվան համար, վճարել փոխհատուցում և տարածքներ զիջել պատմական Հայաստանին»: Խումբը զգալի քողարկված աջակցություն է ստացել Եվրոպայի և ԱՄՆ-ի հայկական սփյուռքից: Ներքին պառակտումներից տառապող խումբը 1990-ական թթ. Այն համեմատաբար պասիվ էր, թեև 1991-ին հայտարարեց Հունգարիայում Թուրքիայի դեսպանի վրա անհաջող հարձակման մասին:'
    }, 
}

langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        descTitle.innerText = content[btn.classList.value].title;
        descInfo.innerText = content[btn.classList.value].desc;
    })
});

