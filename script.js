const words = [
  "WubbaLubbaDubDub",
  "PickleRick",
  "Morty",
  "Rick",
  "Meeseeks",
  "Schwifty",
  "PortalGun",
  "Gazorpazorp",
  "Birdperson",
  "MrPoopybutthole",
  "Interdimensional",
  "Plumbus",
  "Squanchy",
  "Beth",
  "Summer",
  "Jerry",
  "EvilMorty",
  "RiggityRiggityWrecked",
  "Cronenberg",
  "Citadel",
  "ButterRobot",
  "Unity",
  "ScaryTerry",
  "Snuffles",
  "Gearhead",
];

const container = document.getElementById("anim");
function startWave(container, words) {
  function renderWords(arr) {
    container.innerHTML = "";
    arr.forEach((word) => {
      const span = document.createElement("span");
      span.textContent = word;
      span.style.margin = "5px";
      container.appendChild(span);
    });
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  // Start changing positions every 100ms
  return setInterval(() => {
    const shuffled = shuffle([...words]);
    renderWords(shuffled);
  }, 100);
}

const projects = [
  {
    name: "Movie ",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatum magnam nemo, ratione eum eos.",
    link: "https://github.com/hope-dies-here/project-1",
    image: "./420.png",
  },
  {
    name: "Random Blog Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatum magnam nemo, ratione eum eos.",
    link: "https://github.com/hope-dies-here/project-1",
    image: "./terminal.png",
  },
  {
    name: "Color Swap",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatum magnam nemo, ratione eum eos.",
    link: "https://github.com/hope-dies-here/project-1",
    image: "./420.png",
  },
  {
    name: "Repository ",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatum magnam nemo, ratione eum eos.",
    link: "https://github.com/hope-dies-here/project-1",
    image: "./chrome.png",
  },
  {
    name: "Random Blog Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatum magnam nemo, ratione eum eos.",
    link: "https://github.com/hope-dies-here/project-1",
    image: "./terminal.png",
  },
  {
    name: "Movie ",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatum magnam nemo, ratione eum eos.",
    link: "https://github.com/hope-dies-here/project-1",
    image: "./420.png",
  },
  {
    name: "Color Swap",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatum magnam nemo, ratione eum eos.",
    link: "https://github.com/hope-dies-here/project-1",
    image: "./420.png",
  },
  {
    name: "Repository ",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatum magnam nemo, ratione eum eos.",
    link: "https://github.com/hope-dies-here/project-1",
    image: "./chrome.png",
  },
  {
    name: "Random Blog Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatum magnam nemo, ratione eum eos.",
    link: "https://github.com/hope-dies-here/project-1",
    image: "./terminal.png",
  },
  {
    name: "Movie ",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatum magnam nemo, ratione eum eos.",
    link: "https://github.com/hope-dies-here/project-1",
    image: "./420.png",
  },
  {
    name: "Repository ",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatum magnam nemo, ratione eum eos.",
    link: "https://github.com/hope-dies-here/project-1",
    image: "./chrome.png",
  },
  {
    name: "Color Swap",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatum magnam nemo, ratione eum eos.",
    link: "https://github.com/hope-dies-here/project-1",
    image: "./420.png",
  },
];

const aaaa =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aut alias omnis, vero quam voluptatibus iusto iure recusandae mollitia accusantium tempore at autem pariatur cupiditate minus quos sint. Est doloremque minima accusamus itaque velit placeat repellat provident aut exercitationem architecto, fugit, cupiditate iusto dolor blanditiis expedita praesentium sed omnis tempore maxime laboriosam veritatis temporibus aliquid. Sunt accusantium incidunt, ab unde quia ut neque veritatis aut, dignissimos placeat molestiae pariatur amet dolor velit quasi ducimus eum, natus cupiditate reprehenderit consequatur? Doloremque sunt, fugit iure adipisci perferendis ea qui vel ullam explicabo impedit officia maiores laudantium dolor molestias inventore! Consequatur ab consectetur quas quae sit? Beatae fuga eos recusandae voluptatum accusamus sint voluptatem sequi expedita nobis necessitatibus, commodi est magnam molestiae excepturi animi et fugiat aspernatur blanditiis eveniet a in, culpa saepe suscipit sit. Repellendus unde exercitationem necessitatibus delectus quisquam, pariatur natus ex tenetur voluptatem id repudiandae voluptate minima cum esse veniam fugiat. Iusto amet accusantium dicta quas magnam! Ipsum sed vero atque fugiat. Minus deleniti totam modi fugit. Nesciunt quasi labore impedit ad commodi doloremque, hic cumque, explicabo atque fugit voluptatum suscipit omnis at voluptates ullam! Enim fugiat dolore nostrum dolor, modi totam corrupti assumenda, quas facilis eveniet architecto molestiae odio.";
const projectsContainer = document.getElementById("projects");
const infoBar = document.getElementById("info-bar");
const info = document.getElementById("info-placeholder");

projects.forEach((project) => {
  const projectCard = document.createElement("div");

  projectCard.innerHTML = `
      <li class=" text-black group relative project w-45 h-40 grid items-center justify-center rounded hover:scale-105 transition-all cursor-pointer">
        <img src="./img/dir.png" class=" object-cover rounded w-4=30 h-30 mx-auto" />
          <a class="text-sm text-center" href="${project.link}">${project.name}</a>
      </li>
    `;
  projectsContainer.appendChild(projectCard);
});

const projectCards = document.querySelectorAll(".project");

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    infoBar.classList.remove("pointer-events-none");
    infoBar.classList.remove("opacity-0");
    infoBar.classList.add("opacity-100");
    infoBar.classList.add("pointer-events-auto");
    info.innerText = "";
    const beyene = projects[0].description;
    // info.innerText = beyene;
    // return;
    const arr = aaaa.split(" ");
    let wordCount = 0;
    arr.forEach((word, index) => {
      setTimeout(() => {
        info.innerText = `${info.innerText} ${word} `;

        wordCount++;
        if (wordCount == 40) {
          info.innerText = `${info.innerText} \n\n`;
          wordCount = 0;
        }
      }, 0);
    });
    console.log();

    // infoBar.innerText = card.innerText;
  });
});
const titleBar = document.getElementById("title-bar");

let isHolding = false;
const doubleClickThreshold = 500; // ms

titleBar.addEventListener("mousedown", (event) => {
  event.preventDefault();

  // infoBar.style = `opacity: .4; user-select: none; top: ${event.clientY}px; left: ${event.clientX}px;`;
  isHolding = true;

  const positions = infoBar.getBoundingClientRect();
  let xDiff = event.clientX - positions.left;
  let yDiff = event.clientY - positions.top;

  document.addEventListener("mousemove", (event) => {
    if (isHolding) {
      document.body.style = " pointer-events: none; cursor: move;";
      titleBar.style = "cursor: move";
      infoBar.style.left = event.clientX - xDiff + "px";
      infoBar.style.top = event.clientY - yDiff + "px";
      console.log(isHolding);
      document.addEventListener("mouseup", () => {
        isHolding = false;
        infoBar.style = `top: ${event.clientY - yDiff}px; left: ${
          event.clientX - xDiff
        }px;`;
        titleBar.style = "cursor: default";
        document.body.style = "pointer-events: auto; cursor: default; ";
      });
    }
  });
});

let interval = null;
function playSong() {
  const audio = document.getElementById("audio");
  const playBtn = document.getElementById("play-btn");
  const pauseBtn = document.getElementById("pause-btn");

  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
  audio.play();
  // interval = startWave(container, words);
}

function pauseSong() {
  const audio = document.getElementById("audio");
  const pauseBtn = document.getElementById("pause-btn");

  pauseBtn.classList.add("hidden");
  const playBtn = document.getElementById("play-btn");
  playBtn.classList.remove("hidden");
  audio.pause();
  clearInterval(interval);
}

const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");

let musicOn = false;
const wave = document.getElementById("music-greet-msg");
const playBtnContainer = document.getElementById("play-btn-container");

// playBtn.addEventListener("click", playSong);
// pauseBtn.addEventListener("click", playSong);
playBtnContainer.addEventListener("click", function () {
  if (musicOn) {
    musicOn = false;
    wave.classList.remove("wave-font");
    wave.classList.remove("text-2xl");
    wave.classList.add("dynapuff");
    wave.innerText = "Enjoy good music while you are here";
    clearInterval(interval);
    pauseSong();
  } else {
    musicOn = true;
    const words = wave.innerText.split(" ");
    wave.classList.remove("dynapuff");
    wave.classList.add("wave-font");
    wave.classList.add("text-2xl");
    interval = startWave(wave, words);
    playSong();
  }
});

function showInfoBar() {
  infoBar.classList.remove("pointer-events-none");
  infoBar.classList.remove("opacity-0");
  infoBar.classList.add("opacity-100");
  infoBar.classList.add("pointer-events-auto");
}

function hideInfoBar() {
  infoBar.classList.remove("pointer-events-auto");
  infoBar.classList.remove("opacity-100");
  infoBar.classList.add("opacity-0");
  infoBar.classList.add("pointer-events-none");
}

console.log(window.innerWidth);

const size = Math.floor(window.innerWidth / 45);

for (let i = 0; i < size; i++) {
  const div = document.createElement("div");
  div.innerHTML = `<img src="./img/const1.png" class="w-10" />`;
  document.querySelector("#const").appendChild(div);
}
