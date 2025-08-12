document.addEventListener("DOMContentLoaded", () => {
  const pokedexData = [
    "Victini","Snivy","Servine","Serperior","Tepig","Pignite","Emboar",
    "Oshawott","Dewott","Samurott","Patrat","Watchog","Purrloin","Liepard",
    "Pansage","Simisage","Pansear","Simisear","Panpour","Simipour","Munna",
    "Musharna","Pidove","Tranquill","Unfezant","Blitzle","Zebstrika",
    "Roggenrola","Boldore","Gigalith","Woobat","Swoobat","Drilbur","Excadrill",
    "Audino","Timburr","Gurdurr","Conkeldurr","Tympole","Palpitoad","Seismitoad",
    "Throh","Sawk","Sewaddle","Swadloon","Leavanny","Venipede","Whirlipede",
    "Scolipede","Cottonee","Whimsicott","Petilil","Lilligant","Basculin",
    "Sandile","Krokorok","Krookodile","Darumaka","Darmanitan","Maractus",
    "Dwebble","Crustle","Scraggy","Scrafty","Sigilyph","Yamask","Cofagrigus",
    "Tirtouga","Carracosta","Archen","Archeops","Trubbish","Garbodor",
    "Zorua","Zoroark","Minccino","Cinccino","Gothita","Gothorita","Gothitelle",
    "Solosis","Duosion","Reuniclus","Ducklett","Swanna","Vanillite","Vanillish",
    "Vanilluxe","Deerling","Sawsbuck","Emolga","Karrablast","Escavalier",
    "Foongus","Amoonguss","Frillish","Jellicent","Alomomola","Joltik",
    "Galvantula","Ferroseed","Ferrothorn","Klink","Klang","Klinklang",
    "Tynamo","Eelektrik","Eelektross","Elgyem","Beheeyem","Litwick",
    "Lampent","Chandelure","Axew","Fraxure","Haxorus","Cubchoo","Beartic",
    "Cryogonal","Shelmet","Accelgor","Stunfisk","Mienfoo","Mienshao",
    "Druddigon","Golett","Golurk","Pawniard","Bisharp","Bouffalant",
    "Rufflet","Braviary","Vullaby","Mandibuzz","Heatmor","Durant",
    "Deino","Zweilous","Hydreigon","Larvesta","Volcarona","Cobalion",
    "Terrakion","Virizion","Tornadus","Thundurus","Reshiram","Zekrom",
    "Landorus","Kyurem","Keldeo","Genesect"
  ];

  const container = document.getElementById("pokedex-container");
  const caughtSet = new Set(JSON.parse(localStorage.getItem("caught") || "[]"));

  function updateStorage() {
    localStorage.setItem("caught", JSON.stringify([...caughtSet]));
  }

  function updateOverallProgress() {
    document.getElementById("overall-progress").textContent =
      `Caught: ${caughtSet.size} / ${pokedexData.length}`;
  }

  for (let g = 0; g < Math.ceil(pokedexData.length / 30); g++) {
    const startNum = g * 30;
    const endNum = Math.min(startNum + 30, pokedexData.length);

    const groupDiv = document.createElement("div");
    groupDiv.className = "dex-group";

    const header = document.createElement("div");
    header.className = "group-header";
    const h2 = document.createElement("h2");
    h2.textContent = `#${startNum + 1}–${endNum}`;
    const groupProgress = document.createElement("span");
    header.appendChild(h2);
    header.appendChild(groupProgress);
    groupDiv.appendChild(header);

    const gridDiv = document.createElement("div");
    gridDiv.className = "grid";

    let groupCaught = 0;

    for (let i = startNum; i < endNum; i++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.dataset.index = i;

      const img = document.createElement("img");
      img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 494}.png`; 
      // Black 2 starts with Victini (#494 in National Dex)
      img.alt = pokedexData[i];

      const label = document.createElement("span");
      label.textContent = pokedexData[i];

      tile.appendChild(img);
      tile.appendChild(label);

      if (caughtSet.has(i)) {
        tile.classList.add("caught");
        groupCaught++;
      }

      tile.addEventListener("click", () => {
        if (caughtSet.has(i)) {
          caughtSet.delete(i);
          tile.classList.remove("caught");
          groupCaught--;
        } else {
          caughtSet.add(i);
          tile.classList.add("caught");
          groupCaught++;
        }
        updateStorage();
        groupProgress.textContent = `Caught: ${groupCaught} / ${endNum - startNum}`;
        updateOverallProgress();
      });

      gridDiv.appendChild(tile);
    }

    groupProgress.textContent = `Caught: ${groupCaught} / ${endNum - startNum}`;
    groupDiv.appendChild(gridDiv);
    container.appendChild(groupDiv);
  }

  updateOverallProgress();

  document.getElementById("reset-all").addEventListener("click", () => {
    if (confirm("Reset all caught Pokémon?")) {
      caughtSet.clear();
      updateStorage();
      document.querySelectorAll(".tile").forEach(t => t.classList.remove("caught"));
      document.querySelectorAll(".group-header span").forEach(span => {
        const total = span.textContent.split("/")[1];
        span.textContent = `Caught: 0 / ${total}`;
      });
      updateOverallProgress();
    }
  });
});
