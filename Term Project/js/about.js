let bubbles = document.querySelectorAll('.bubble');
let myphoto = document.querySelector('.my-photo');
let mypersonality = document.querySelector('.my-personality');

for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].addEventListener('mouseover', function () {
        let bubbleId = this.id;
        myphoto.style.backgroundImage = 'url(images/about_' + bubbleId + '.png)';
        mypersonality.innerHTML = getPersonalityText(bubbleId);

        for (let j = 0; j < bubbles.length; j++) {
            let bubble = bubbles[j];
            let size = getBubbleSize(bubble.id, bubbleId, bubble.getBoundingClientRect());
            bubble.style.transition = 'all 0.5s ease';
            bubble.style.width = size.width + 'px';
            bubble.style.height = size.height + 'px';
            bubble.style.transform = 'translate(' + size.translateX + 'px, ' + size.translateY + 'px)';
        }
    });
}


function getBubbleSize(id, hoveredId) {
    switch (id) {
        case 'green':
            return { width: hoveredId === 'green' ? 96 : 60, height: hoveredId === 'green' ? 96 : 60 };
        case 'black':
            return { width: hoveredId === 'black' ? 80 : 32, height: hoveredId === 'black' ? 80 : 32 };
        case 'yellow':
            return { width: hoveredId === 'yellow' ? 86 : 26, height: hoveredId === 'yellow' ? 86 : 26 };
        case 'orange':
            return { width: hoveredId === 'orange' ? 88 : 47, height: hoveredId === 'orange' ? 88 : 47 };
        case 'pink':
            return { width: hoveredId === 'pink' ? 93 : 40, height: hoveredId === 'pink' ? 93 : 40 };
        default:
            return { width: 0, height: 0 };
    }
}

function getPersonalityText(bubbleId) {
    switch (bubbleId) {
        case 'green':
            return "I'm Clara, a product designer care about humanity and beauty.";
        case 'black':
            return "I must confess that I am an introverted - an INTJ, to be exact.";
        case 'orange':
            return "I find joy in sunshine, trees, and flowers, and of course, a simple smile can always brighten up my day :)";
        case 'pink':
            return "Books are my lifetime. I can't imagine living without them.";
        case 'yellow':
            return "Despite not pursuing a career in architecture, my passion for it still burns strong, as I found myself captivated by Carol Scarpa's yard.";
        default:
            return '';
    }
}
