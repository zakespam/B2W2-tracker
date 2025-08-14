document.addEventListener("DOMContentLoaded", () => {
  fetch('pt.json')
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
      let caught = JSON.parse(localStorage.getItem("ptKey") || "[]");

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

      function renderPokedex() {
        container.innerHTML = "";
        const boxes = Math.ceil(TOTAL / 30);

        for (let b = 0; b < boxes; b++) {
          const group = document.createElement("div");
          group.className = "group";

          const header = document.createElement("h2");
          header.textContent = `Box ${b + 1}`;
          group.appendChild(header);

          const grid = document.createElement("div");
          grid.className = "grid";

          pokedexData.slice(b * 30, b * 30 + 30).forEach(p => {
            const tile = document.createElement("div");
            tile.className = "pokemon";
            tile.dataset.regional = p.regional;

            if (caught.includes(p.regional)) tile.classList.add("caught");

            // Background with 50/50 split for dual types or solid for single type
            if (p.type1 && p.type2) {
              const hex1 = getHex(p.type1);
              const hex2 = getHex(p.type2);
              tile.style.background = `linear-gradient(135deg, ${hex1} 50%, ${hex2} 50%)`;
            } else if (p.type1) {
              tile.style.backgroundColor = getHex(p.type1);
            } else {
              tile.style.backgroundColor = "#AAA"; // default gray
            }

            // Static + animated sprite URLs
            const staticSprite = `../sprites/static/${String(p.ndex).padStart(3, "0")}.png`;
            const animatedSprite = `../sprites/animated/${String(p.ndex).padStart(3, "0")}.gif`;

            const img = document.createElement("img");
            img.src = staticSprite;
            img.alt = p.name;
            img.onerror = () => img.src = "";

            // Swap sprites on hover
            tile.addEventListener("mouseenter", () => {
              img.src = animatedSprite;
            });
            tile.addEventListener("mouseleave", () => {
              img.src = staticSprite;
            });

            const label = document.createElement("div");
            label.className = "label";
            label.textContent = `#${String(p.regional).padStart(3, "0")} ${p.name}`;

            tile.append(img, label);
            tile.addEventListener("click", () => {
              const r = p.regional;
              if (caught.includes(r)) {
                caught = caught.filter(x => x !== r);
                tile.classList.remove("caught");
              } else {
                caught.push(r);
                tile.classList.add("caught");
              }
              // Save to custom key
              localStorage.setItem("ptKey", JSON.stringify(caught));
              updateProgress();
            });

            grid.appendChild(tile);
          });

          group.appendChild(grid);
          container.appendChild(group);
        }
        updateProgress();
      }

      document.getElementById("reset-all").addEventListener("click", () => {
        caught = [];
        localStorage.removeItem("ptKey");
        renderPokedex();
        updateProgress();
      });

      renderPokedex();
    })
    .catch(error => {
      console.error("Error loading pokedex data:", error);
    });
});