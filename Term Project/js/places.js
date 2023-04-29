google.charts.load('current', {
    'packages': ['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Cities Visited'],
        ['France', 1],
        ['United States', 5],
        ['Italy', 4],
        ['Spain', 1],
        ['Portugal', 1],
        ['China', 12],
        ['Taiwan', 1]
    ]);

    var options = {
        backgroundColor: '#5c1715',
        colorAxis: {
            minValue: 0,
            maxValue: 20,
            colors: ['#9D7473', '#AE8B8A']
        },
        legend: 'none'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);

    google.visualization.events.addListener(chart, 'regionClick', function (eventData) {
        if (eventData.region === 'US') {
            // Show the "united-states-albums" box after clicking on the United States
            document.querySelector('.united-states-albums').style.display = 'block';
        } else {
            // Hide the "united-states-albums" box when clicking on any other region
            document.querySelector('.united-states-albums').style.display = 'none';
        }

        if (eventData.region === 'CN') {
            // Show the "china-albums" box after clicking on China
            document.querySelector('.china-albums').style.display = 'block';
        } else {
            // Hide the "china-albums" box when clicking on any other region
            document.querySelector('.china-albums').style.display = 'none';
        }

        if (eventData.region === 'IT') {
            // Show the "italy-albums" box after clicking on Italy
            document.querySelector('.italy-albums').style.display = 'block';
        } else {
            // Hide the "italy-albums" box when clicking on any other region
            document.querySelector('.italy-albums').style.display = 'none';
        }
    });

    google.visualization.events.addListener(chart, 'onmouseout', function (eventData) {
        // Hide the "united-states-albums" box when the mouse hovers out
        document.querySelector('.united-states-albums').style.display = 'none';
        // Hide the "china-albums" box when the mouse hovers out
        document.querySelector('.china-albums').style.display = 'none';
        // Hide the "italy-albums" box when the mouse hovers out
        document.querySelector('.italy-albums').style.display = 'none';
    });
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