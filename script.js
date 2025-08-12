document.addEventListener("DOMContentLoaded", () => {
  // Full Black 2 / White 2 regional Pokédex (301 entries)
  const pokedexData = [
{ regional: 0, ndex: 494, name: "Victini" },
{ regional: 1, ndex: 495, name: "Snivy" },
{ regional: 2, ndex: 496, name: "Servine" },
{ regional: 3, ndex: 497, name: "Serperior" },
{ regional: 4, ndex: 498, name: "Tepig" },
{ regional: 5, ndex: 499, name: "Pignite" },
{ regional: 6, ndex: 500, name: "Emboar" },
{ regional: 7, ndex: 501, name: "Oshawott" },
{ regional: 8, ndex: 502, name: "Dewott" },
{ regional: 9, ndex: 503, name: "Samurott" },
{ regional: 10, ndex: 504, name: "Patrat" },
{ regional: 11, ndex: 505, name: "Watchog" },
{ regional: 12, ndex: 509, name: "Purrloin" },
{ regional: 13, ndex: 510, name: "Liepard" },
{ regional: 14, ndex: 519, name: "Pidove" },
{ regional: 15, ndex: 520, name: "Tranquill" },
{ regional: 16, ndex: 521, name: "Unfezant" },
{ regional: 17, ndex: 540, name: "Sewaddle" },
{ regional: 18, ndex: 541, name: "Swadloon" },
{ regional: 19, ndex: 542, name: "Leavanny" },
{ regional: 20, ndex: 191, name: "Sunkern" },
{ regional: 21, ndex: 192, name: "Sunflora" },
{ regional: 22, ndex: 506, name: "Lillipup" },
{ regional: 23, ndex: 507, name: "Herdier" },
{ regional: 24, ndex: 508, name: "Stoutland" },
{ regional: 25, ndex: 179, name: "Mareep" },
{ regional: 26, ndex: 180, name: "Flaaffy" },
{ regional: 27, ndex: 181, name: "Ampharos" },
{ regional: 28, ndex: 54, name: "Psyduck" },
{ regional: 29, ndex: 55, name: "Golduck" },
{ regional: 30, ndex: 298, name: "Azurill" },
{ regional: 31, ndex: 183, name: "Marill" },
{ regional: 32, ndex: 184, name: "Azumarill" },
{ regional: 33, ndex: 447, name: "Riolu" },
{ regional: 34, ndex: 448, name: "Lucario" },
{ regional: 35, ndex: 206, name: "Dunsparce" },
{ regional: 36, ndex: 531, name: "Audino" },
{ regional: 37, ndex: 511, name: "Pansage" },
{ regional: 38, ndex: 512, name: "Simisage" },
{ regional: 39, ndex: 513, name: "Pansear" },
{ regional: 40, ndex: 514, name: "Simisear" },
{ regional: 41, ndex: 515, name: "Panpour" },
{ regional: 42, ndex: 516, name: "Simipour" },
{ regional: 43, ndex: 543, name: "Venipede" },
{ regional: 44, ndex: 544, name: "Whirlipede" },
{ regional: 45, ndex: 545, name: "Scolipede" },
{ regional: 46, ndex: 109, name: "Koffing" },
{ regional: 47, ndex: 110, name: "Weezing" },
{ regional: 48, ndex: 81, name: "Magnemite" },
{ regional: 49, ndex: 82, name: "Magneton" },
{ regional: 50, ndex: 462, name: "Magnezone" },
{ regional: 51, ndex: 58, name: "Growlithe" },
{ regional: 52, ndex: 59, name: "Arcanine" },
{ regional: 53, ndex: 240, name: "Magby" },
{ regional: 54, ndex: 126, name: "Magmar" },
{ regional: 55, ndex: 467, name: "Magmortar" },
{ regional: 56, ndex: 239, name: "Elekid" },
{ regional: 57, ndex: 125, name: "Electabuzz" },
{ regional: 58, ndex: 466, name: "Electivire" },
{ regional: 59, ndex: 19, name: "Rattata" },
{ regional: 60, ndex: 20, name: "Raticate" },
{ regional: 61, ndex: 41, name: "Zubat" },
{ regional: 62, ndex: 42, name: "Golbat" },
{ regional: 63, ndex: 169, name: "Crobat" },
{ regional: 64, ndex: 88, name: "Grimer" },
{ regional: 65, ndex: 89, name: "Muk" },
{ regional: 66, ndex: 527, name: "Woobat" },
{ regional: 67, ndex: 528, name: "Swoobat" },
{ regional: 68, ndex: 524, name: "Roggenrola" },
{ regional: 69, ndex: 525, name: "Boldore" },
{ regional: 70, ndex: 526, name: "Gigalith" },
{ regional: 71, ndex: 95, name: "Onix" },
{ regional: 72, ndex: 208, name: "Steelix" },
{ regional: 73, ndex: 532, name: "Timburr" },
{ regional: 74, ndex: 533, name: "Gurdurr" },
{ regional: 75, ndex: 534, name: "Conkeldurr" },
{ regional: 76, ndex: 529, name: "Drilbur" },
{ regional: 77, ndex: 530, name: "Excadrill" },
{ regional: 78, ndex: 300, name: "Skitty" },
{ regional: 79, ndex: 301, name: "Delcatty" },
{ regional: 80, ndex: 427, name: "Buneary" },
{ regional: 81, ndex: 428, name: "Lopunny" },
{ regional: 82, ndex: 546, name: "Cottonee" },
{ regional: 83, ndex: 547, name: "Whimsicott" },
{ regional: 84, ndex: 548, name: "Petilil" },
{ regional: 85, ndex: 549, name: "Lilligant" },
{ regional: 86, ndex: 517, name: "Munna" },
{ regional: 87, ndex: 518, name: "Musharna" },
{ regional: 88, ndex: 173, name: "Cleffa" },
{ regional: 89, ndex: 35, name: "Clefairy" },
{ regional: 90, ndex: 36, name: "Clefable" },
{ regional: 91, ndex: 133, name: "Eevee" },
{ regional: 92, ndex: 134, name: "Vaporeon" },
{ regional: 93, ndex: 135, name: "Jolteon" },
{ regional: 94, ndex: 136, name: "Flareon" },
{ regional: 95, ndex: 196, name: "Espeon" },
{ regional: 96, ndex: 197, name: "Umbreon" },
{ regional: 97, ndex: 470, name: "Leafeon" },
{ regional: 98, ndex: 471, name: "Glaceon" },
{ regional: 99, ndex: 551, name: "Sandile" },
{ regional: 100, ndex: 552, name: "Krokorok" },
{ regional: 101, ndex: 553, name: "Krookodile" },
{ regional: 102, ndex: 554, name: "Darumaka" },
{ regional: 103, ndex: 555, name: "Darmanitan" },
{ regional: 104, ndex: 550, name: "Basculin" },
{ regional: 105, ndex: 568, name: "Trubbish" },
{ regional: 106, ndex: 569, name: "Garbodor" },
{ regional: 107, ndex: 572, name: "Minccino" },
{ regional: 108, ndex: 573, name: "Cinccino" },
{ regional: 109, ndex: 627, name: "Rufflet" },
{ regional: 110, ndex: 628, name: "Braviary" },
{ regional: 111, ndex: 629, name: "Vullaby" },
{ regional: 112, ndex: 630, name: "Mandibuzz" },
{ regional: 113, ndex: 27, name: "Sandshrew" },
{ regional: 114, ndex: 28, name: "Sandslash" },
{ regional: 115, ndex: 557, name: "Dwebble" },
{ regional: 116, ndex: 558, name: "Crustle" },
{ regional: 117, ndex: 559, name: "Scraggy" },
{ regional: 118, ndex: 560, name: "Scrafty" },
{ regional: 119, ndex: 556, name: "Maractus" },
{ regional: 120, ndex: 561, name: "Sigilyph" },
{ regional: 121, ndex: 328, name: "Trapinch" },
{ regional: 122, ndex: 329, name: "Vibrava" },
{ regional: 123, ndex: 330, name: "Flygon" },
{ regional: 124, ndex: 562, name: "Yamask" },   
{ regional: 125, ndex: 563, name: "Cofagrigus" }, 
{ regional: 126, ndex: 564, name: "Tirtouga" },  
{ regional: 127, ndex: 565, name: "Carracosta" }, 
{ regional: 128, ndex: 566, name: "Archen" },    
{ regional: 129, ndex: 567, name: "Archeops" },  
{ regional: 130, ndex: 599, name: "Klink" },
{ regional: 131, ndex: 600, name: "Klang" },
{ regional: 132, ndex: 601, name: "Klinklang" },
{ regional: 133, ndex: 406, name: "Budew" },
{ regional: 134, ndex: 315, name: "Roselia" },
{ regional: 135, ndex: 407, name: "Roserade" },
{ regional: 136, ndex: 574, name: "Gothita" },
{ regional: 137, ndex: 575, name: "Gothorita" },
{ regional: 138, ndex: 576, name: "Gothitelle" },
{ regional: 139, ndex: 577, name: "Solosis" },
{ regional: 140, ndex: 578, name: "Duosion" },
{ regional: 141, ndex: 579, name: "Reuniclus" },
{ regional: 142, ndex: 415, name: "Combee" },
{ regional: 143, ndex: 416, name: "Vespiquen" },
{ regional: 144, ndex: 587, name: "Emolga" },
{ regional: 145, ndex: 214, name: "Heracross" },
{ regional: 146, ndex: 127, name: "Pinsir" },
{ regional: 147, ndex: 522, name: "Blitzle" },
{ regional: 148, ndex: 523, name: "Zebstrika" },
{ regional: 149, ndex: 418, name: "Buizel" },
{ regional: 150, ndex: 419, name: "Floatzel" },
{ regional: 151, ndex: 570, name: "Zorua" },
{ regional: 152, ndex: 571, name: "Zoroark" },
{ regional: 153, ndex: 580, name: "Ducklett" },
{ regional: 154, ndex: 581, name: "Swanna" },
{ regional: 155, ndex: 588, name: "Karrablast" },
{ regional: 156, ndex: 589, name: "Escavalier" },
{ regional: 157, ndex: 616, name: "Shelmet" },
{ regional: 158, ndex: 617, name: "Accelgor" },
{ regional: 159, ndex: 585, name: "Deerling" },
{ regional: 160, ndex: 586, name: "Sawsbuck" },
{ regional: 161, ndex: 590, name: "Foongus" },
{ regional: 162, ndex: 591, name: "Amoonguss" },
{ regional: 163, ndex: 351, name: "Castform" },
{ regional: 164, ndex: 299, name: "Nosepass" },
{ regional: 165, ndex: 476, name: "Probopass" },
{ regional: 166, ndex: 304, name: "Aron" },
{ regional: 167, ndex: 305, name: "Lairon" },
{ regional: 168, ndex: 306, name: "Aggron" },
{ regional: 169, ndex: 343, name: "Baltoy" },
{ regional: 170, ndex: 344, name: "Claydol" },
{ regional: 171, ndex: 636, name: "Larvesta" },
{ regional: 172, ndex: 637, name: "Volcarona" },
{ regional: 173, ndex: 595, name: "Joltik" },
{ regional: 174, ndex: 596, name: "Galvantula" },
{ regional: 175, ndex: 597, name: "Ferroseed" },
{ regional: 176, ndex: 598, name: "Ferrothorn" },
{ regional: 177, ndex: 602, name: "Tynamo" },
{ regional: 178, ndex: 603, name: "Eelektrik" },
{ regional: 179, ndex: 604, name: "Eelektross" },
{ regional: 180, ndex: 592, name: "Frillish" },
{ regional: 181, ndex: 593, name: "Jellicent" },
{ regional: 182, ndex: 594, name: "Alomomola" },
{ regional: 183, ndex: 610, name: "Axew" },
{ regional: 184, ndex: 611, name: "Fraxure" },
{ regional: 185, ndex: 612, name: "Haxorus" },
{ regional: 186, ndex: 335, name: "Zangoose" },
{ regional: 187, ndex: 336, name: "Seviper" },
{ regional: 188, ndex: 605, name: "Elgyem" },
{ regional: 189, ndex: 606, name: "Beheeyem" },
{ regional: 190, ndex: 607, name: "Litwick" },
{ regional: 191, ndex: 608, name: "Lampent" },
{ regional: 192, ndex: 609, name: "Chandelure" },
{ regional: 193, ndex: 631, name: "Heatmor" },
{ regional: 194, ndex: 632, name: "Durant" },
{ regional: 195, ndex: 613, name: "Cubchoo" },
{ regional: 196, ndex: 614, name: "Beartic" },
{ regional: 197, ndex: 615, name: "Cryogonal" },
{ regional: 198, ndex: 641, name: "Tornadus" },
{ regional: 199, ndex: 642, name: "Thundurus" },
{ regional: 200, ndex: 645, name: "Landorus" },
{ regional: 201, ndex: 451, name: "Skorupi" },
{ regional: 202, ndex: 452, name: "Drapion" },
{ regional: 203, ndex: 227, name: "Skarmory" },
{ regional: 204, ndex: 322, name: "Numel" },
{ regional: 205, ndex: 323, name: "Camerupt" },
{ regional: 206, ndex: 325, name: "Spoink" },
{ regional: 207, ndex: 326, name: "Grumpig" },
{ regional: 208, ndex: 425, name: "Drifloon" },
{ regional: 209, ndex: 426, name: "Drifblim" },
{ regional: 210, ndex: 353, name: "Shuppet" },
{ regional: 211, ndex: 354, name: "Banette" },
{ regional: 212, ndex: 278, name: "Wingull" },
{ regional: 213, ndex: 279, name: "Pelipper" },
{ regional: 214, ndex: 337, name: "Lunatone" },
{ regional: 215, ndex: 338, name: "Solrock" },
{ regional: 216, ndex: 359, name: "Absol" },
{ regional: 217, ndex: 114, name: "Tangela" },
{ regional: 218, ndex: 465, name: "Tangrowth" },
{ regional: 219, ndex: 619, name: "Mienfoo" },
{ regional: 220, ndex: 620, name: "Mienshao" },
{ regional: 221, ndex: 207, name: "Gligar" },
{ regional: 222, ndex: 472, name: "Gliscor" },
{ regional: 223, ndex: 624, name: "Pawniard" },
{ regional: 224, ndex: 625, name: "Bisharp" },
{ regional: 225, ndex: 638, name: "Cobalion" },
{ regional: 226, ndex: 639, name: "Terrakion" },
{ regional: 227, ndex: 640, name: "Virizion" },
{ regional: 228, ndex: 535, name: "Tympole" },
{ regional: 229, ndex: 536, name: "Palpitoad" },
{ regional: 230, ndex: 537, name: "Seismitoad" },
{ regional: 231, ndex: 618, name: "Stunfisk" },
{ regional: 232, ndex: 213, name: "Shuckle" },
{ regional: 233, ndex: 458, name: "Mantyke" },
{ regional: 234, ndex: 226, name: "Mantine" },
{ regional: 235, ndex: 223, name: "Remoraid" },
{ regional: 236, ndex: 224, name: "Octillery" },
{ regional: 237, ndex: 222, name: "Corsola" },
{ regional: 238, ndex: 120, name: "Staryu" },
{ regional: 239, ndex: 121, name: "Starmie" },
{ regional: 240, ndex: 320, name: "Wailmer" },
{ regional: 241, ndex: 321, name: "Wailord" },
{ regional: 242, ndex: 131, name: "Lapras" },
{ regional: 243, ndex: 363, name: "Spheal" },
{ regional: 244, ndex: 364, name: "Sealeo" },
{ regional: 245, ndex: 365, name: "Walrein" },
{ regional: 246, ndex: 333, name: "Swablu" },
{ regional: 247, ndex: 334, name: "Altaria" },
{ regional: 248, ndex: 37, name: "Vulpix" },
{ regional: 249, ndex: 38, name: "Ninetales" },
{ regional: 250, ndex: 436, name: "Bronzor" },
{ regional: 251, ndex: 437, name: "Bronzong" },
{ regional: 252, ndex: 215, name: "Sneasel" },
{ regional: 253, ndex: 461, name: "Weavile" },
{ regional: 254, ndex: 225, name: "Delibird" },
{ regional: 255, ndex: 582, name: "Vanillite" },
{ regional: 256, ndex: 583, name: "Vanillish" },
{ regional: 257, ndex: 584, name: "Vanilluxe" },
{ regional: 258, ndex: 220, name: "Swinub" },
{ regional: 259, ndex: 221, name: "Piloswine" },
{ regional: 260, ndex: 473, name: "Mamoswine" },
{ regional: 261, ndex: 132, name: "Ditto" },
{ regional: 262, ndex: 374, name: "Beldum" },
{ regional: 263, ndex: 375, name: "Metang" },
{ regional: 264, ndex: 376, name: "Metagross" },
{ regional: 265, ndex: 86, name: "Seel" },
{ regional: 266, ndex: 87, name: "Dewgong" },
{ regional: 267, ndex: 538, name: "Throh" },
{ regional: 268, ndex: 539, name: "Sawk" },
{ regional: 269, ndex: 626, name: "Bouffalant" },
{ regional: 270, ndex: 621, name: "Druddigon" },
{ regional: 271, ndex: 622, name: "Golett" },
{ regional: 272, ndex: 623, name: "Golurk" },
{ regional: 273, ndex: 633, name: "Deino" },
{ regional: 274, ndex: 634, name: "Zweilous" },
{ regional: 275, ndex: 635, name: "Hydreigon" },
{ regional: 276, ndex: 287, name: "Slakoth" },
{ regional: 277, ndex: 288, name: "Vigoroth" },
{ regional: 278, ndex: 289, name: "Slaking" },
{ regional: 279, ndex: 341, name: "Corphish" },
{ regional: 280, ndex: 342, name: "Crawdaunt" },
{ regional: 281, ndex: 174, name: "Igglybuff" },
{ regional: 282, ndex: 39, name: "Jigglypuff" },
{ regional: 283, ndex: 40, name: "Wigglytuff" },
{ regional: 284, ndex: 108, name: "Lickitung" },
{ regional: 285, ndex: 463, name: "Lickilicky" },
{ regional: 286, ndex: 193, name: "Yanma" },
{ regional: 287, ndex: 469, name: "Yanmega" },
{ regional: 288, ndex: 357, name: "Tropius" },
{ regional: 289, ndex: 455, name: "Carnivine" },
{ regional: 290, ndex: 453, name: "Croagunk" },
{ regional: 291, ndex: 454, name: "Toxicroak" },
{ regional: 292, ndex: 246, name: "Larvitar" },
{ regional: 293, ndex: 247, name: "Pupitar" },
{ regional: 294, ndex: 248, name: "Tyranitar" },
{ regional: 295, ndex: 643, name: "Reshiram" },
{ regional: 296, ndex: 644, name: "Zekrom" },
{ regional: 297, ndex: 646, name: "Kyurem" },
{ regional: 298, ndex: 647, name: "Keldeo" },
{ regional: 299, ndex: 648, name: "Meloetta" },
{ regional: 300, ndex: 649, name: "Genesect" },
];


  const TOTAL = pokedexData.length; // 301
  let caught = JSON.parse(localStorage.getItem("caughtPokemon") || "[]");

  const container = document.getElementById("pokedex-container");
  const fill = document.getElementById("progress-fill");
  const text = document.getElementById("progress-text");

  function updateProgress() {
    const count = caught.length;
    const pct = Math.floor((count / TOTAL) * 100);
    fill.style.width = pct + "%";
    text.textContent = `${count} / ${TOTAL} (${pct}%)`;
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

        const img = document.createElement("img");
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.ndex}.png`;
        img.alt = p.name;
        img.onerror = () => img.src = "";

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
          localStorage.setItem("caughtPokemon", JSON.stringify(caught));
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
    localStorage.removeItem("caughtPokemon");
    renderPokedex();
    updateProgress();
  });

  renderPokedex();
});
