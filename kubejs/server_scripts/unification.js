// Partially copied from All Of Fabric 3
events.listen("recipes", function (event) {
  // --------- INDUSTRIAL REVOLUTION --------- //

  var indrev_materials = [
    "copper",
    "gold",
    "iron",
    "tin",
    "steel",
    "silver",
    "lead",
    "electrum",
    "bronze",
    "tungsten",
  ];

  var indrev_dusts = [
    "copper",
    "gold",
    "iron",
    "tin",
    "steel",
    "diamond",
    "coal",
    "silver",
    "lead",
    "electrum",
    "bronze",
    "tungsten",
  ];

  var indrev_metals = [
    "copper",
    "tin",
    "steel",
    "lead",
    "silver",
    "electrum",
    "bronze",
    "tungsten",
  ];

  var indrev_ores = ["copper", "tin", "lead", "silver", "tungsten"];

  // Plates
  indrev_materials.forEach(function (item, index) {
    event.remove({
      type: "crafting_shaped",
      output: "techreborn:" + item + "_plate",
    });

    event.replaceOutput(
      {},
      "indrev:" + item + "_plate",
      "techreborn:" + item + "_plate"
    );

    event.remove({
      id: "indrev:shapeless/" + item + "_plate" + "_from_hammer",
    });
  });

  // Dusts
  indrev_dusts.forEach(function (item, index) {
    event.replaceOutput(
      {},
      "indrev:" + item + "_dust",
      "techreborn:" + item + "_dust"
    );
  });

  event.replaceOutput({}, "indrev:sawdust", "techreborn:saw_dust");

  // Ingots
  indrev_metals.forEach(function (item, index) {
    event.replaceOutput(
      {},
      "indrev:" + item + "_ingot",
      "techreborn:" + item + "_ingot"
    );

    // Blocks
    event.replaceOutput(
      {},
      "indrev:" + item + "_block",
      "techreborn:" + item + "_storage_block"
    );

    // REI
    event.remove({ id: "indrev:shapeless/" + item + "_ingot_from_block" });
    event.remove({ id: "indrev:shapeless/" + item + "_nugget" });
    event.remove({ id: "indrev:shaped/" + item + "_ingot_from_nuggets" });
    event.remove({ id: "indrev:shaped/" + item + "_block" });
  });

  indrev_materials.forEach(function (item, index) {
    event.remove({ id: "indrev:smelting/" + item + "_ingot_from_smelting" });
    event.remove({ id: "indrev:smelting/" + item + "_ingot_from_dust" });
    event.remove({ id: "indrev:smelting/" + item + "_ingot" });
    event.remove({ id: "indrev:blasting/" + item + "_ingot_from_smelting" });
    event.remove({ id: "indrev:blasting/" + item + "_ingot_from_dust" });
  });

  indrev_ores.forEach(function (item, index) {
    event.remove({ id: "indrev:smelting/" + item + "_ingot_from_ore" });
    event.remove({ id: "indrev:blasting/" + item + "_ingot_from_ore" });
  });

  // --------- MODERN INDUSTRIALIZATION --------- //

  var modern_materials = [
    "copper",
    "aluminum",
    "bronze",
    "chrome",
    "electrum",
    "gold",
    "invar",
    "redstone",
    "iron",
    "quartz",
    "lead",
    "nickel",
    "silver",
    "steel",
    "tin",
    "titanium",
  ];

  var modern_dusts = [
    "charcoal",
    "coal",
    "copper",
    "aluminum",
    "bronze",
    "bauxite",
    "chrome",
    "electrum",
    "gold",
    "invar",
    "nickel",
    "redstone",
    "manganese",
    "iron",
    "quartz",
    "lead",
    "ruby",
    "nickel",
    "silver",
    "steel",
    "tin",
    "titanium",
  ];

  var modern_nuggets = [
    "copper",
    "aluminum",
    "bronze",
    "chrome",
    "electrum",
    "invar",
    "nickel",
    "lead",
    "nickel",
    "silver",
    "steel",
    "tin",
    "titanium",
  ];

  var modern_metals = [
    "copper",
    "aluminum",
    "bronze",
    "chrome",
    "electrum",
    "invar",
    "redstone",
    "lead",
    "nickel",
    "silver",
    "steel",
    "tin",
    "titanium",
  ];

  var modern_ores = ["copper", "bauxite", "lead", "silver", "tin"];

  // Plates
  modern_materials.forEach(function (item, index) {
    event.replaceOutput(
      {},
      "modern_industrialization:" + item + "_plate",
      "techreborn:" + item + "_plate"
    );
  });

  event.replaceOutput(
    {},
    "modern_industrialization:silicon_plate",
    "techreborn:silicon_plate"
  );

  // Dusts
  modern_dusts.forEach(function (item, index) {
    event.replaceOutput(
      {},
      "modern_industrialization:" + item + "_dust",
      "techreborn:" + item + "_dust"
    );
  });

  // Ingots
  modern_metals.forEach(function (item, index) {
    event.replaceOutput(
      {},
      "modern_industrialization:" + item + "_ingot",
      "techreborn:" + item + "_ingot"
    );

    // Blocks
    event.replaceInput(
      {},
      "modern_industrialization:" + item + "_block",
      "techreborn:" + item + "_storage_block"
    );
  });

  // Nuggets
  modern_nuggets.forEach(function (item, index) {
    event.replaceOutput(
      {},
      "modern_industrialization:" + item + "_nugget",
      "techreborn:" + item + "_nugget"
    );
  });

  // Ores
  modern_ores.forEach(function (item, index) {
    event.replaceOutput(
      {},
      "modern_industrialization:" + item + "_ore",
      "techreborn:" + item + "_ore"
    );
  });

  event.replaceOutput(
    {},
    "modern_industrialization:salt_ore",
    "croptopia:salt_ore"
  );

  // REI
  modern_materials.forEach(function (item, index) {
    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/smelting/dust_smelting",
    });

    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/smelting/dust_blasting",
    });
  });

  modern_ores.forEach(function (item, index) {
    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/smelting/ore_smelting",
    });

    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/smelting/ore_blasting",
    });
  });

  modern_metals.forEach(function (item, index) {
    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/craft/main_from_nugget",
    });

    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/craft/nugget_from_main",
    });

    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/craft/main_from_block",
    });

    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/craft/block_from_main",
    });
  });

  // --------- APPLIED ENERGESTICS 2 --------- //

  var applied_dusts = ["gold", "iron"];

  applied_dusts.forEach(function (item, index) {
    event.remove({
      id: "appliedenergistics2:smelting/" + item + "_ingot",
    });
  });

  // --------- CROPTOPIA --------- //

  var salt = ["sandwichable:salt", "modern_industrialization:salt_dust"];

  /*salt.forEach(function (item, index) {
    event.replaceOutput({}, item, "croptopia:salt");

    event.replaceInput({}, item, "croptopia:salt");
  });*/

  // --------- ULTIMATE REI FIX --------- //

  var rei_materials = [
    "tin",
    "copper",
    "lead",
    "aluminum",
    "chrome",
    "bronze",
    "silicon",
    "electrum",
    "invar",
    "nickel",
    "iron",
    "gold",
    "silver",
    "steel",
    "titanium",
    "tungsten",
  ];

  var rei_ingots = [
    "tin",
    "copper",
    "lead",
    "aluminum",
    "bronze",
    "electrum",
    "chrome",
    "invar",
    "nickel",
    "silver",
    "steel",
    "titanium",
    "tungsten",
  ];

  var rei_dusts = [
    "coal",
    "charcoal",
    "iron",
    "gold",
    "diamond",
    "emerald",
    "manganese",
    "chrome",
    "ruby",
    "bauxite",
    "nickel",
    "quartz",
    "copper",
    "aluminum",
    "lead",
    "tungsten",
    "tin",
    "silver",
    "steel",
    "bronze",
    "electrum",
    "titanium",
    "chrome",
  ];

  var rei_ores = ["tin", "copper", "lead", "bauxite", "silver", "tungsten"];

  event.replaceInput({}, "minecraft:quartz", "#c:quartz");
});
