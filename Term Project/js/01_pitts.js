let bubbles = document.querySelectorAll('.bubble');
let springPic1 = document.querySelector('.spring-pic-1');
let springPic2 = document.querySelector('.spring-pic-2');
let springPic3 = document.querySelector('.spring-pic-3');
let springPic4 = document.querySelector('.spring-pic-4');

for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].addEventListener('mouseover', function () {
        let bubbleId = this.id;
        springPic1.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 1 + '.png)';
        console.log(springPic1.style.backgroundImage);
        springPic2.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 2 + '.png)';
        console.log(springPic2.style.backgroundImage);
        springPic3.style.backgroundImage = 'url(images/pitts_' + bubbleId + '_' + 3 + '.png)';
        console.log(springPic3.style.backgroundImage);
        if (bubbleId === 'light_blue') {
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
    bubbles[i].addEventListener('mouseout', function () {
        springPic4.style.display = '';
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
