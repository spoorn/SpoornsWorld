events.listen('rei.hide.items', event => {
    console.log("Hiding extra slime sling/boots");
    event.hide('kibe:slime_sling');
    event.hide('equip:slime_boots');
})