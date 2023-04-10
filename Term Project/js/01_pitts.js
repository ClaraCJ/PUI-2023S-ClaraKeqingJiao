let bubbles = document.querySelectorAll('.bubble');
let springPic1 = document.querySelector('.spring-pic-1');
let springPic2 = document.querySelector('.spring-pic-2');
let springPic3 = document.querySelector('.spring-pic-3');
let springPic4 = document.querySelector('.spring-pic-4');

for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].addEventListener('mouseover', function () {
        let bubbleId = this.id;
        let num1 = i + 1;
        let num2 = i + 2;
        let num3 = i + 3;
        let num4 = i + 4;
        springPic1.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + num1 + '.png)';
        springPic2.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + num2 + '.png)';
        springPic3.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + num3 + '.png)';
        springPic4.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + num4 + '.png)';

        for (let j = 0; j < bubbles.length; j++) {
            let bubble = bubbles[j];
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

