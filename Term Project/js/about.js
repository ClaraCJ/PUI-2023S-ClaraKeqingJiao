let bubbles = document.querySelectorAll('.bubble');
let myphoto = document.querySelector('.my-photo');
let mypersonality = document.querySelector('.my-personality');

for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].addEventListener('mouseover', function () {
        let bubbleId = this.id;
        myphoto.style.backgroundImage = 'url(../images/about_' + bubbleId + '.png)';
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


// -------------------- Custom Cursor --------------------
var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),

    init: function () {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
    },

    setupEventListeners: function () {
        var self = this;

        // Anchor hovering
        document.querySelectorAll('a, .pitts, .nyc, .hk, .boston, .barcelona, .paris, .italy').forEach(function (el) {
            el.addEventListener('mouseover', function () {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function () {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });

        // Click events
        document.addEventListener('mousedown', function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });

        document.addEventListener('mousemove', function (e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.clientX;
            self.endY = e.clientY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });

        // Hide/show cursor
        document.addEventListener('mouseenter', function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });

        document.addEventListener('mouseleave', function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },

    animateDotOutline: function () {
        var self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';

        requestAnimationFrame(this.animateDotOutline.bind(self));
    },

    toggleCursorSize: function () {
        var self = this;

        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },

    toggleCursorVisibility: function () {
        var self = this;

        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
}

cursor.init();