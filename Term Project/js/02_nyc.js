// -------------------- Spring Flowers Section --------------------
let guggenheimBubbles = document.querySelectorAll('.guggenheim-bubble');
let guggenheimPic1 = document.querySelector('.guggenheim-pic-1');
let guggenheimPic2 = document.querySelector('.guggenheim-pic-2');
let guggenheimPic3 = document.querySelector('.guggenheim-pic-3');
let guggenheimPic4 = document.querySelector('.guggenheim-pic-4');

for (let i = 0; i < guggenheimBubbles.length; i++) {
    guggenheimBubbles[i].addEventListener('mouseover', function () {
        let bubbleId = this.id;
        guggenheimPic1.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 1 + '.png)';
        guggenheimPic2.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 2 + '.png)';
        guggenheimPic3.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 3 + '.png)';
        guggenheimPic4.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 4 + '.png)';
        guggenheimPic3.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 5 + '.png)';
        guggenheimPic3.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 6 + '.png)';
        if (bubbleId === 'green') {
            guggenheimPic3.style.width = '380px';
            guggenheimPic3.style.height = '245px';
            guggenheimPic4.style.display = 'none';
            guggenheimPic3.style.position = 'absolute';
            guggenheimPic3.style.top = '555px';
            guggenheimPic3.style.right = '0px';
        } else if (guggenheimPic3.style.position === 'absolute') {
            guggenheimPic3.style.width = '';
            guggenheimPic3.style.height = '';
            guggenheimPic4.style.display = '';
            guggenheimPic3.style.position = '';
            guggenheimPic3.style.top = '';
            guggenheimPic3.style.right = '';
        }

        for (let j = 0; j < guggenheimBubbles.length; j++) {
            let bubble = guggenheimBubbles[j];
            let size = getBubbleSize(bubble.id, bubbleId);
            bubble.style.transition = 'all 0.5s ease';
            bubble.style.width = size.width + 'px';
            bubble.style.height = size.height + 'px';
            bubble.style.borderRadius = size.width / 2 + 'px';
            bubble.style.transform = 'translate(' + size.translateX + 'px, ' + size.translateY + 'px)';
        }
        let guggenheimJournal = document.querySelector('.guggenheim-journal');
        switch (bubbleId) {
            case 'green':
                guggenheimJournal.innerHTML = "xxx";
                break;
            case 'blue':
                guggenheimJournal.innerHTML = "xxxx";
                break;
            case 'red':
                guggenheimJournal.innerHTML = "xxxxx";
                break;
            default:
                springJournal.innerHTML = "";
                break;
        }

    });

}

// change the size of bubbles when hovering
function getBubbleSize(id, hoveredId) {
    switch (id) {
        case 'light_pink':
            return { width: hoveredId === 'light_pink' ? 120 : 60, height: hoveredId === 'light_pink' ? 120 : 60 };
        case 'light_blue':
            return { width: hoveredId === 'light_blue' ? 80 : 48, height: hoveredId === 'light_blue' ? 80 : 48 };
        case 'dark_blue':
            return { width: hoveredId === 'dark_blue' ? 78 : 26, height: hoveredId === 'dark_blue' ? 78 : 26 };
        case 'orange':
            return { width: hoveredId === 'orange' ? 108 : 55, height: hoveredId === 'orange' ? 108 : 55 };
        case 'light_purple':
            return { width: hoveredId === 'light_purple' ? 95 : 40, height: hoveredId === 'light_purple' ? 95 : 40 };
        default:
            return { width: 0, height: 0 };
    }
}


// -------------------- Shadyside Architecture Section --------------------
let architectureBubbles = document.querySelectorAll('.architecture-bubble');
let architecturePic1 = document.querySelector('.architecture-pic-1');
let architecturePic2 = document.querySelector('.architecture-pic-2');
let architecturePic3 = document.querySelector('.architecture-pic-3');
let architectureJournal = document.querySelector('.architecture-journal');

for (let i = 0; i < architectureBubbles.length; i++) {
    architectureBubbles[i].addEventListener('mouseover', function () {
        let bubbleId = this.id;
        architecturePic1.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 1 + '.png)';
        console.log(architecturePic1.style.backgroundImage);
        architecturePic2.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 2 + '.png)';
        console.log(architecturePic2.style.backgroundImage);
        architecturePic3.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 3 + '.png)';

        if (bubbleId === 'dark_red') {
            architecturePic1.style.width = '574px';
            architecturePic1.style.height = '323px';
            architecturePic2.style.display = 'none';
            architecturePic3.style.width = '431px';
            architecturePic3.style.height = '526px';
        } else if (bubbleId === 'navyblue') {
            architecturePic3.style.width = '431px';
            architecturePic3.style.height = '526px';
        } else if (bubbleId === 'dark_green') {
            architecturePic1.style.width = '270px';
            architecturePic2.style.display = 'none';
        } else {
            // reset the styles
            architecturePic1.style.width = '';
            architecturePic1.style.height = '';
            architecturePic2.style.display = '';
            architecturePic3.style.width = '';
            architecturePic3.style.height = '';
        }

        switch (bubbleId) {
            case 'skyblue':
                architectureJournal.innerHTML = "xxxx";
                break;
            case 'dark_red':
                architectureJournal.innerHTML = "xxxxxx";
                break;
            case 'dark_green':
                architectureJournal.innerHTML = "xxxxxxxxxxxxxx";
                break;
            case 'green':
                architectureJournal.innerHTML = "xx";
                break;
            case 'navyblue':
                architectureJournal.innerHTML = "xxxxxxxxxxx";
                break;
            default:
                architectureJournal.innerHTML = "";
                break;
        }

        for (let j = 0; j < architectureBubbles.length; j++) {
            let bubble = architectureBubbles[j];
            let size = getBubbleSize2(bubble.id, bubbleId);
            bubble.style.transition = 'all 0.5s ease';
            bubble.style.width = size.width + 'px';
            bubble.style.height = size.height + 'px';
            bubble.style.borderRadius = size.width / 2 + 'px';
            bubble.style.transform = 'translate(' + size.translateX + 'px, ' + size.translateY + 'px)';
        }
    });
}

// change the size of bubbles when hovering
function getBubbleSize2(id, hoverId) {
    switch (id) {
        case 'navyblue':
            return { width: hoverId === 'navyblue' ? 80 : 30, height: hoverId === 'navyblue' ? 80 : 30 };
        case 'skyblue':
            return { width: hoverId === 'skyblue' ? 130 : 48, height: hoverId === 'skyblue' ? 130 : 48 };
        case 'dark_red':
            return { width: hoverId === 'dark_red' ? 98 : 26, height: hoverId === 'dark_red' ? 98 : 26 };
        case 'green':
            return { width: hoverId === 'green' ? 108 : 55, height: hoverId === 'green' ? 108 : 55 };
        case 'dark_green':
            return { width: hoverId === 'dark_green' ? 125 : 40, height: hoverId === 'dark_green' ? 125 : 40 };
        default:
            return { width: 0, height: 0 };
    }
}

// -------------------- Yellow Autumn Section --------------------
let autumnBubbles = document.querySelectorAll('.autumn-bubble');
let autumnPic1 = document.querySelector('.autumn-pic-1');
let autumnPic2 = document.querySelector('.autumn-pic-2');
let autumnPic3 = document.querySelector('.autumn-pic-3');
let autumnJournal = document.querySelector('.autumn-journal');

for (let i = 0; i < autumnBubbles.length; i++) {
    autumnBubbles[i].addEventListener('mouseover', function () {
        let bubbleId = this.id;
        autumnPic1.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 1 + '.png)';
        autumnPic2.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 2 + '.png)';
        autumnPic3.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 3 + '.png)';

        if (bubbleId === 'beige') {
            autumnPic1.style.width = '420px';
        } else if (bubbleId === 'sora') {
            autumnPic1.style.width = '420px';
        } else {
            // reset the styles
            autumnPic1.style.width = '';
            autumnPic1.style.height = '';
        }

        switch (bubbleId) {
            case 'yellow':
                autumnJournal.innerHTML = "xxxx";
                break;
            case 'brown':
                autumnJournal.innerHTML = "xxxxxxxx";
                break;
            case 'beige':
                autumnJournal.innerHTML = "xxxxxx";
                break;
            case 'sora':
                autumnJournal.innerHTML = "xxxxxxxxx";
                break;
            case 'red':
                autumnJournal.innerHTML = "xxxxxxxxxx";
                break;
            default:
                autumnJournal.innerHTML = "";
                break;
        }

        for (let j = 0; j < autumnBubbles.length; j++) {
            let bubble = autumnBubbles[j];
            let size = getBubbleSize3(bubble.id, bubbleId);
            bubble.style.transition = 'all 0.5s ease';
            bubble.style.width = size.width + 'px';
            bubble.style.height = size.height + 'px';
            bubble.style.borderRadius = size.width / 2 + 'px';
            bubble.style.transform = 'translate(' + size.translateX + 'px, ' + size.translateY + 'px)';
        }
    });
}

// change the size of bubbles when hovering
function getBubbleSize3(id, hoverId) {
    switch (id) {
        case 'yellow':
            return { width: hoverId === 'yellow' ? 150 : 30, height: hoverId === 'yellow' ? 150 : 30 };
        case 'brown':
            return { width: hoverId === 'brown' ? 130 : 48, height: hoverId === 'brown' ? 130 : 48 };
        case 'beige':
            return { width: hoverId === 'beige' ? 98 : 26, height: hoverId === 'beige' ? 98 : 26 };
        case 'sora':
            return { width: hoverId === 'sora' ? 126 : 55, height: hoverId === 'sora' ? 126 : 55 };
        case 'red':
            return { width: hoverId === 'red' ? 90 : 32, height: hoverId === 'red' ? 90 : 32 };
        default:
            return { width: 0, height: 0 };
    }
}
