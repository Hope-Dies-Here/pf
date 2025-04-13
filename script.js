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
    name: "Random Movie Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatum magnam nemo, ratione eum eos.",
    link: "https://github.com/hope-dies-here/project-1",
  },
  {
    name: "Random Blog Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatum magnam nemo, ratione eum eos.",
    link: "https://github.com/hope-dies-here/project-1",
  },
  {
    name: "Repository ",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatum magnam nemo, ratione eum eos.",
    link: "https://github.com/hope-dies-here/project-1",
  },
  {
    name: "Color Swap",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatum magnam nemo, ratione eum eos.",
    link: "https://github.com/hope-dies-here/project-1",
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
      <li class="group relative project min-h-[14rem] flex items-end gap-4 border border-gray-200 bg-gray-50 rounded hover:scale-105 transition-all px-2 pb-4 py-12 cursor-pointer">
        <img src="420.png" class="w-[40%] h-[40%] object-cover rounded" />
        <div class="">
          <p class="text-zinc-600 text-xs">${project.description}</p>
          <a class="text-lg" href="${project.link}">${project.name}</a>
            <div
                id="project-div-action-tooltip"
                class="transition-all duration-500pointer-events-none absolute top-1 right-1 rounded-lg bg-yellow-300 px-4 py-2 text-sm text-gray-800 opacity-0 group-hover:opacity-100"
                >
                <p>Click to see more info</p>
            </div>
        </div>
        
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
    document.querySelector("body").style = "opacity: 0.9";
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

  card.addEventListener("mouseout", () => {
    console.log("mouseout");
    document.querySelector("body").style = "opacity: 1";
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
