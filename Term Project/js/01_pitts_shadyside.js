// -------------------- Spring Flowers Section --------------------
let springBubbles = document.querySelectorAll('.spring-bubble');
let springPic1 = document.querySelector('.spring-pic-1');
let springPic2 = document.querySelector('.spring-pic-2');
let springPic3 = document.querySelector('.spring-pic-3');
let springPic4 = document.querySelector('.spring-pic-4');

for (let i = 0; i < springBubbles.length; i++) {
    springBubbles[i].addEventListener('mouseover', function () {
        let bubbleId = this.id;
        springPic1.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 1 + '.png)';
        console.log(springPic1.style.backgroundImage);
        springPic2.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 2 + '.png)';
        console.log(springPic2.style.backgroundImage);
        springPic4.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 4 + '.png)';
        console.log(springPic2.style.backgroundImage);
        springPic3.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 3 + '.png)';
        console.log(springPic3.style.backgroundImage);
        if (bubbleId === 'light_blue' || bubbleId === 'orange') {
            springPic3.style.width = '380px';
            springPic3.style.height = '245px';
            springPic4.style.display = 'none';
            springPic3.style.position = 'absolute';
            springPic3.style.top = '555px';
            springPic3.style.right = '0px';
        } else if (springPic3.style.position === 'absolute') {
            springPic3.style.width = '';
            springPic3.style.height = '';
            springPic4.style.display = '';
            springPic3.style.position = '';
            springPic3.style.top = '';
            springPic3.style.right = '';
        }

        for (let j = 0; j < springBubbles.length; j++) {
            let bubble = springBubbles[j];
            let size = getBubbleSize(bubble.id, bubbleId);
            bubble.style.transition = 'all 0.5s ease';
            bubble.style.width = size.width + 'px';
            bubble.style.height = size.height + 'px';
            bubble.style.borderRadius = size.width / 2 + 'px';
            bubble.style.transform = 'translate(' + size.translateX + 'px, ' + size.translateY + 'px)';
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

