events.listen("recipes", function (event) {
  // Silicon
  event.recipes.minecraft.blasting(
    item.of("appliedenergistics2:silicon"),
    "appliedenergistics2:certus_quartz_dust"
  );

  event.recipes.minecraft.smelting(
    item.of("appliedenergistics2:silicon"),
    "appliedenergistics2:certus_quartz_dust"
  );

  // Ebony Bookshelf
  event.shaped(item.of("byg:ebony_bookshelf", 1), ["EEE", "BBB", "EEE"], {
    E: "byg:ebony_planks",
    B: "minecraft:book",
  });

  // Oak Sign
  event.replaceInput(
    { id: "minecraft:oak_sign" },
    "minecraft:oak_planks",
    "#minecraft:planks"
  );

  // Cobweb
  event.shaped(item.of("minecraft:cobweb"), [
    ["minecraft:string", "minecraft:string", "minecraft:string"],
    ["minecraft:string", "minecraft:string", "minecraft:string"],
    ["minecraft:string", "minecraft:string", "minecraft:string"],
  ]);

  // Wool Tarp
  event.shaped(item.of("campanion:wool_tarp"), [
    ["minecraft:white_wool", "minecraft:white_wool", "minecraft:white_wool"],
  ]);

  // Pine Slab
  event.shaped(item.of("woods_and_mires:pine_slab", 6), [
    ["woods_and_mires:pine_planks", "woods_and_mires:pine_planks", "woods_and_mires:pine_planks"],
  ]);

  // Crafting tables
  event.shaped(item.of("sakurarosea:sakura_crafting_table", 1), ["PP ", "PP ", "   "], {
    P: "sakurarosea:sakura_planks"
  })
});
