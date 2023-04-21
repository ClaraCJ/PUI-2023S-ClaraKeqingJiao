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
        let springJournal = document.querySelector('.spring-journal');
        switch (bubbleId) {
            case 'light_pink':
                springJournal.innerHTML = "Having spent six warm, and some would argue hot, years in Hong Kong, I ventured to Pittsburgh to embark on my graduate studies. Though I hail from a northern Chinese city, the cold has always been a source of trepidation for me. The climate in Hong Kong was perfectly suited to my liking, so I couldn't help but feel a bit anxious about the weather in my new home. I had heard rumors that the snow would start falling as early as November, and winter would drag on until April. Fearing the worst, I stocked up on two down jackets, two pairs of winter boots, and an array of hats, gloves, and scarves to see me through the impending winter months.";
                break;
            case 'light_blue':
                springJournal.innerHTML = "花树和古老建筑的碰撞，更是美得无以复加。视觉效果足够繁复，非常容易出有质感的照片。我还记得三月底的一个周二的下午，我从家走路去匹兹堡大学附近喜欢的麻辣烫店吃晚饭；其实吃饭真的不是为了吃饭，是为了在日光下走走，吹吹风。从香港这个喧闹的大都市来到匹兹堡这个在我看来可以称之为“村”的地方，逛街看电影吃吃喝喝等娱乐活动一下子减去大半，每天大部分时间都在电脑前蜷缩着作业，过着两点一线的重复性生活。刚来的第一个学期，因为对新环境的好奇和转行找实习的巨大压力，我每日几乎不浪费一分一秒在读书、学习、做作品集、投递，不给自己留任何空隙。等到学期末最后几周的时候，某一日走在上学的路上，突然感受到巨大的无聊、有一种身在牢笼中的窒息感。万幸学期结束马上就开始了为期半个月的纽约和波士顿之旅，消除掉这种窒息感，但也确实意识到自己或许更适合，或者说更习惯吵闹的大都市生活。说着花树和建筑，不知道怎么扯到这么远的。我大概想要表达的意思是，花、树、建筑、四季，给我两点一线的生活多些出去走走的动力。相机记录的这些绝不算专业甚至可以称得上艳俗的照片，以及这段语无伦次的文字，几年后也会成为我珍贵回忆的记录。所以这个网站呀，我是真的想好好做，一直做下去。每去一个地方，整理照片，多少写些文字，好像年少时那样。";
                break;
            case 'dark_blue':
                springJournal.innerHTML = "Yet, to my pleasant surprise, the winter in Pittsburgh proved to be far more manageable than I had anticipated. The heating was more than adequate, and spring arrived at lightning speed - with temperatures in the double digits Celsius making a welcome appearance in February and flowers blossoming by mid-March. By the end of the month, the surroundings of Carnegie Mellon University, the University of Pittsburgh, and my neighborhood of Shadyside were bursting with an array of colorful blooms, filling me with elation and joy. I couldn't resist taking pictures every day on my way to school or during my walks, such was the beauty of my surroundings. It was at this moment that I realized the true wonder of the four seasons! Compared to Hong Kong, where the lush greenery reigns all year round, the summer's verdant green, autumn's golden hues, winter's pristine white, and spring's riotous colors in Pittsburgh make one appreciate nature even more and experience the fleeting nature of time.<br/>The collision between flowering trees and ancient buildings is a sight to behold, and its visual complexity makes for photographs that exude texture and depth.";
                break;
            case 'orange':
                springJournal.innerHTML = "I'm not sure how I veered off-topic from flowering trees and buildings, but my point is that flowers, trees, buildings, and the four seasons give me the motivation to venture out beyond my routine. The photos I take with my camera may not be professional, and my writing may be incoherent, but in a few years' time, they will become treasured memories. That's why I really want to put effort into this photography website and keep doing it. Every time I go somewhere new, I want to sort through my photos and write about my experiences, like I did when I was younger.<br/>在气候温暖甚至可以说炎热的香港生活6年之后，我来到匹兹堡攻读研究生。我虽然在中国北方城市出生和长大，但其实一直都很怕冷。香港的气候特别适合我，所以在来匹兹堡之前，我是有些害怕这里的气候的。听说这里11月就会开始下雪，而且冬天一直持续到4月份。所以我早早买好了两件羽绒服，还有两双过冬的棉靴，帽子手套围巾样样具备，却没想到这里的冬天并没有想象中难捱。暖气非常充足，而且春天来得很快——2月开始就不时有十几摄氏度的好天气，3月中花就开了，到了3月底，卡耐基梅隆大学和匹兹堡大学附近，还有我居住的shadyside区域，一路上到处都是五颜六色的繁花，开得令人心旷神怡，惹得我每天上学或者散步都在不停拍照。太美了。我突然意识到，原来四季分明是那么美好呀！比起香港四季皆绿，这里夏天的绿，秋天的黄，冬天的白和春天的五彩斑斓，更加令人珍惜自然，体会时间的流逝。";
                break;
            case 'light_purple':
                springJournal.innerHTML = "I remember a Tuesday afternoon in late March when I strolled from home to a favorite spicy hotpot restaurant near the University of Pittsburgh. The meal wasn't really about the food; it was about soaking in the sunshine and breathing in the fresh air. Coming from Hong Kong, a bustling metropolis, to Pittsburgh - a place I would almost call a 'village' - most of the leisure activities, like shopping, watching movies, and dining out, vanished almost instantly. The majority of my time was spent hunched over my computer, working on assignments, portfolios, and applications for internships, during my first semester. I was curious about my new environment, but also under immense pressure to change careers and find a meaningful internship. In the final weeks of the term, as I walked to class one day, I suddenly felt an overwhelming sense of boredom and suffocation, like being trapped in a cage. <br/>Luckily, the end of the semester meant a two-week trip to New York and Boston, which helped me shake off the malaise. But it also made me realize that I may be better suited or more accustomed to the noisy and busy city life. ";
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
                architectureJournal.innerHTML = "As someone who dedicated seven years of youth to architecture, from the age of 18 to 25, even though I now dislike this industry after starting my career, I cannot deny that my love for the aesthetics of construction still manifests in my daily life. For instance, I obsessively photograph the little houses on the streets near my apartment! One friend joked with me, saying, ’The poorest people living in these houses near your apartment are probably professors.‘ This demonstrates the affluence of the area.";
                break;
            case 'dark_red':
                architectureJournal.innerHTML = "Indeed, without them saying it, one can tell from the meticulously manicured lawns, flower beds, trees, clean streets, grand Christmas and Halloween decorations, and the cars coming in and out (strangely, few people are seen), that the neighborhood is primarily inhabited by the relatively wealthy middle class. A considerable portion of the buildings bear traces of professional design, and even the use of materials is incredibly well-considered from a facade standpoint alone. Every time I pass by, I can't help but peek at the buildings and try to guess the homeowners' preferences and lifestyles from the architectural style, layout of the volumes, and arrangement of entrances and courtyards. I also dream about having a house like this someday, one that I would design myself!";
                break;
            case 'dark_green':
                architectureJournal.innerHTML = "Thinking about having a house suddenly gives me more motivation for learning and work. Owning a small house before the age of 30 has always been my ’little goal.‘ A little goal that seems so unattainable, especially when I consider the property prices in Hong Kong or Beijing, Shanghai, and Guangzhou. But I don't want to dwell on reality right now; after all, this is a diary, and I want to focus on idealistic and happy things!For example... Why do I want to have my own house so badly? Because I can decorate it myself and not worry about giving away my beloved books when moving. I could also purchase a piano and practice every day, and I am obsessed with designing and arranging furniture. Oh, how lovely it would be! I am someone who is content in my heart, not lacking in love since childhood, introverted, enjoys peace and quiet, and never feels lonely when alone. A house is not just a place to live; it is where life happens. Thinking about it this way, I don't dislike the architecture industry as much. Who knows?";
                break;
            case 'green':
                architectureJournal.innerHTML = "作为一个18岁到25岁，把七年青春都贡献给建筑的人，虽然工作之后对这个行业只剩厌恶，但不得不说，骨子里对建构美学的热爱，还是会体现到日常生活中，就比如，疯狂拍家门口几条街的小房子们！有个朋友曾对我戏言：“你公寓附近这些房子里住的最贫穷的就是教授了”，可见此区域的富裕。确实，不用他说，从这些打理的一丝不苟的草坪、花丛、树木，干净的街道，气派的圣诞节万圣节装饰，还有进进出出的车辆（奇怪的是很少见人）来看，也能猜到住在这附近的都是相对富足的中产阶层。相当一部分建筑是能看出有专业设计师参与的痕迹的。材料的使用，仅从立面看，就有一些极其讲究。每每路过，我都忍不住‘偷窥’：从建筑的风格、体块的设置、入口和院落的安排猜测主人家的喜好和生活习惯。也会幻想自己会不会有一天，也能拥有一座这样的小屋，而且一定会自己操刀设计的！";
                break;
            case 'navyblue':
                architectureJournal.innerHTML = "想着房子，突然就更有学习工作的动力了。30岁之前拥有一栋自己的小屋，一直是我的“小目标”。小目标真的是遥不可及，尤其是如果想想香港或北上广的地价。在这里我不想谈得那么现实。日记嘛，还是想一些理想主义的、开心的事情！比如... 我为什么那么想拥有一栋自己的房子？因为可以自己布置，不用因为搬家，把心爱的藏书送人，还可以置办一台钢琴每日练习，家具设计和摆放也令我痴迷。啊，真好啊！我是一个内心富足，从小不缺爱，内向性格，喜欢清静，独处不会感到孤独的人。房子就是居住，居住就是生活呀。这么一想也没那么讨厌建筑业了。谁知道呢？";
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
                autumnJournal.innerHTML = "During my first autumn break of the first semester, I went sightseeing in downtown with my friends for the first time. It had been a while since I had seen towering skyscrapers, and I suddenly felt like I had 'entered the city'.";
                break;
            case 'brown':
                autumnJournal.innerHTML = "We first went to the Andy Warhol Museum, where the only works I could appreciate were his early commercial illustrations and his half-tone prints of celebrity portraits and movie scenes (I thought it was a clever way of creating millions of images, but it also felt like he was being lazy). However, I didn't quite appreciate his movies, short films, sculptures, and some of his later paintings after he became famous. ";
                break;
            case 'beige':
                autumnJournal.innerHTML = "We had Turkish cuisine for lunch and then went for a walk to Randyland, which is a courtyard filled with colorful children's toys (if you hover your mouse over the red bubble on the left, you can see photos of the place).<br/>Finally, we timed our visit to Duquesne Incline to catch the sunset and took the red cable car up the mountain to overlook Pittsburgh. It truly lived up to its reputation as the 'City of Bridges'! (Hover on the ice-cream color bubble to see more bridges!) The yellow sunset and yellow autumn leaves were accompanied by yellow bridges... It seems that yellow is not just the color of autumn, but also the color of Pittsburgh! ";
                break;
            case 'sora':
                autumnJournal.innerHTML = "第一学期秋假的时候，第一次和朋友一起去downtown观光。许久不见高楼大厦，顿时感觉自己“进城了”。那天我们先是去了安迪沃霍尔博物馆，我比较能欣赏的只有他早期的商业插画和还有他半丝网印刷名人肖像、电影场景的作品（感觉是很聪明的创作方式，发明一种方法能创作千万张画，不过又觉得有些偷懒了）。然而他成名之后的电影、短片、雕塑还有一些画作都太“阴间”了，我不是很能欣赏。";
                break;
            case 'red':
                autumnJournal.innerHTML = "午饭吃了一家土耳其菜，然后走走拍拍，散步到Randyland看不知道如何形容的一个堆满了五颜六色儿童玩具的庭院（如果你把鼠标放在左边红色的bubble上可以看到这里的照片）。最后我们卡准日落的时间，到Duquesne Incline坐红色的缆车上山，俯瞰匹兹堡。不愧是“桥梁之城”！黄色日落下的黄色晚霞伴随着黄色枫叶与黄色的桥...... 看来黄色不只是秋天的颜色，更是匹兹堡的颜色呀！";
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

// -------------------- initialize Tippy.js --------------------
tippy('.spring-pic-1', {
    content: "Sakura tree at dawn in front of the UPMC Shadyside.",
    animation: 'fade',
    followCursor: true,
    interactive: true
});


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
        document.querySelectorAll('a, .spring-pic-1, .spring-pic-2, .spring-pic-3, .spring-pic-4, .architecture-pic-1, .architecture-pic-2, .architecture-pic-3, .autumn-pic-1, .autumn-pic-2, .autumn-pic-3').forEach(function (el) {
            el.addEventListener('mouseover', function () {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function () {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });

        // Header and footer hovering
        var header = document.querySelector('header');
        var footer = document.querySelector('footer');

        header.addEventListener('mouseenter', function () {
            self.$outline.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            self.$dot.style.backgroundColor = '#fff';
        });
        header.addEventListener('mouseleave', function () {
            self.$outline.style.backgroundColor = 'rgba(92, 23, 21, 0.4)';
            self.$dot.style.backgroundColor = 'rgba(92, 23, 21, 1)';
        });
        footer.addEventListener('mouseenter', function () {
            self.$outline.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            self.$dot.style.backgroundColor = '#fff';
        });
        footer.addEventListener('mouseleave', function () {
            self.$outline.style.backgroundColor = 'rgba(92, 23, 21, 0.4)';
            self.$dot.style.backgroundColor = 'rgba(92, 23, 21, 1)';
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