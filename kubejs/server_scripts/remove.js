// remove items
events.listen('recipes', function (event) {

    event.remove({ output: "techreborn:sapphire_sword" });

    // Causes server kick due to allow-flight=false in server.properties by default
    event.remove({ output: 'gobber2:gobber2_ring_airwalking' });
})