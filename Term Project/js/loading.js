// Select the progress bar
const progressBar = document.querySelector('.progress');

// Set the duration of the progress bar animation (in milliseconds)
const duration = 4000;

const lines = ["Travel is fatal to prejudice, bigotry, and narrow-mindedness.", "여행은 편견과 편견, 편협한 생각에 치명적입니다. 사람과 사물에 대한 넓고 건전하며 자선적인 관점은 평생 지구의 한 구석에서 식물만 키운다고 해서 얻을 수 있는 것이 아닙니다.", "旅行对偏见、偏执和心胸狭窄是致命的。对人和事的宽广、健康、慈善的看法，是不可能通过一生都在地球的一个小角落里吃草而获得的。", "旅は偏見、偏屈、狭量にとって致命的である。人間や物事に対する広く健全で慈愛に満ちた見方は、一生涯、地球の片隅で過ごしていても身につくものではありません。",];

const textContainer = document.querySelector('.text-container');
const speed = 0.5;

for (let i = 0; i < lines.length; i++) {
    const lineDiv = document.createElement("div");
    lineDiv.textContent = lines[i];
    lineDiv.classList.add("text-line");
    textContainer.appendChild(lineDiv);
}

function update(time) {
    const clonedDivs = document.querySelectorAll('.cloned');
    for (let i = 0; i < clonedDivs.length; i++) {
        const clonedDiv = clonedDivs[i];
        const currentPos = clonedDiv.getBoundingClientRect().left;
        const newPos = currentPos - speed * time / 1000;
        if (newPos < -clonedDiv.offsetWidth) {
            clonedDiv.style.transform = `translateX(${container.offsetWidth}px)`;
        } else {
            clonedDiv.style.transform = `translateX(${newPos}px)`;
        }
    }
    requestAnimationFrame(update);
}

update();


// Animate the progress bar to 100% width over the specified duration
function animateProgressBar() {
    progressBar.style.width = '100%';
}

// Redirect to the main page after the animation finishes
function redirectToMainPage() {
    window.location.href = 'albums.html';
}

// Call the functions to start the animation and redirect to the main page
setTimeout(animateProgressBar, 0);
setTimeout(redirectToMainPage, duration);
