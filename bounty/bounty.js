function uploadLocalStorage(event, key = 'bountyKey') {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);

      // Validate it's an array
      if (Array.isArray(data)) {
        // Save to localStorage
        localStorage.setItem(key, JSON.stringify(data));

        // Update in-memory caught array
        if (typeof caught !== 'undefined') caught = data;

        // Re-render the UI immediately
        if (typeof renderPokedex === 'function') renderPokedex();

        // Removed success alert
        // alert('Data restored successfully!');
      } else {
        alert('Invalid file: expected an array.');
      }
    } catch (err) {
      alert('Error parsing file: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function downloadLocalStorage(key = 'bountyKey') {
  const data = localStorage.getItem(key);
  if (!data) {
    alert('No data found to download.');
    return;
  }

  const filename = `${key}.json`; // filename matches key

  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

document.addEventListener("DOMContentLoaded", () => {
  fetch('bounty.json')
    .then(response => response.json())
    .then(pokedexData => {
      const typeToHex = [
        { type: "Water", hex: "#0D368C" },
        { type: "Fire", hex: "#AB510E" },
        { type: "Grass", hex: "#63922E" },
        { type: "Rock", hex: "#B6A136" },
        { type: "Ground", hex: "#E2BF65" },
        { type: "Fighting", hex: "#9B2520" },
        { type: "Electric", hex: "#c7a41aff" },
        { type: "Flying", hex: "#A98FF3" },
        { type: "Poison", hex: "#A33EA1" },
        { type: "Ice", hex: "#246462" },
        { type: "Bug", hex: "#A6B91A" },
        { type: "Psychic", hex: "#970532" },
        { type: "Normal", hex: "#535236" },
        { type: "Steel", hex: "#B7B7CE" },
        { type: "Dark", hex: "#705746" },
        { type: "Ghost", hex: "#735797" },
        { type: "Dragon", hex: "#6F35FC" },
        { type: "Fairy", hex: "#D685AD" },
      ];

      const TOTAL = pokedexData.length; // e.g. 301
      window.caught = JSON.parse(localStorage.getItem("bountyKey") || "[]");

      const container = document.getElementById("pokedex-container");
      const fill = document.getElementById("progress-fill");
      const text = document.getElementById("progress-text");

      function updateProgress() {
        const count = caught.length;
        const pct = Math.floor((count / TOTAL) * 100);
        fill.style.width = pct + "%";
        text.textContent = `${count} / ${TOTAL} (${pct}%)`;
      }

      function getHex(type) {
        const entry = typeToHex.find(t => t.type.toLowerCase() === type.toLowerCase());
        return entry ? entry.hex : "#AAA"; // fallback gray
      }

     window.renderPokedex = function() {
  container.innerHTML = "";
  const boxes = Math.ceil(TOTAL / 30);

  for (let b = 0; b < boxes; b++) {
    const group = document.createElement("div");
    group.className = "group";

    const grid = document.createElement("div");
    grid.className = "grid";

    pokedexData.slice(b * 30, b * 30 + 30).forEach((p, index) => {
      const tile = document.createElement("div");
      tile.className = "pokemon";
      tile.dataset.regional = p.regional;

      // 🔹 Middle tile (free-space)
      if (index === 12) {
        tile.classList.add("center-tile");
        const img = document.createElement("img");
        img.src = "../sprites/freespace.png"; // free-space image
        img.alt = "Free Space";
        img.style.pointerEvents = "none"; // prevent blocking
        tile.appendChild(img);
        grid.appendChild(tile);
        return; // skip Pokémon logic
      }

      // 🔹 Caught state
      if (caught.includes(p.regional)) tile.classList.add("caught");

      // 🔹 Background
      if (p.type1 && p.type2) {
        tile.style.background = `linear-gradient(135deg, ${getHex(p.type1)} 50%, ${getHex(p.type2)} 50%)`;
      } else if (p.type1) {
        tile.style.backgroundColor = getHex(p.type1);
      } else {
        tile.style.backgroundColor = "#AAA";
      }

      // 🔹 Pokémon image
      const staticSprite = `../sprites/bountyshiny/${p.name}.gif`;
      const animatedSprite = `../sprites/bountyshiny/${p.name}.gif`;
      const img = document.createElement("img");
      img.src = staticSprite;
      img.alt = p.name;
      img.style.pointerEvents = "none"; // important to pass clicks

      // Hover animation
      tile.addEventListener("mouseenter", () => { img.src = animatedSprite; });
      tile.addEventListener("mouseleave", () => { img.src = staticSprite; });

      // Label
      const label = document.createElement("div");
      label.className = "label";
      label.textContent = p.name;
      label.style.pointerEvents = "none"; // important

      tile.append(img, label);

      // Click handler (toggle caught)
      tile.addEventListener("click", () => {
        const r = p.regional;
        if (caught.includes(r)) {
          caught = caught.filter(x => x !== r);
          tile.classList.remove("caught");
        } else {
          caught.push(r);
          tile.classList.add("caught");
        }
        localStorage.setItem("bountyKey", JSON.stringify(caught));
        updateProgress();
      });

      grid.appendChild(tile);
    });

    group.appendChild(grid);
    container.appendChild(group);
  }

  updateProgress();
};



      document.getElementById("reset-all").addEventListener("click", () => {
        caught = [];
        localStorage.removeItem("bountyKey");
        renderPokedex();
        updateProgress();
      });

      renderPokedex();
    })
    .catch(error => {
      console.error("Error loading pokedex data:", error);
    });
});