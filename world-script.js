Hooks.once('setup', async function() {
  CONFIG.statusEffects = CONFIG.statusEffects.concat({id: "maladie", name: "Malade", img: "modules/veskarath-add-on-for-dd5e/img/radia.svg",},);
});

Hooks.once("init", () => {
  CONFIG.DND5E.damageTypes.radium = {
    label: "Radium",      // The displayed name of the damage type
    isPhysical: false,     // Whether this is negated by adamantine/magical/silvered
    icon: "modules/veskarath-add-on-for-dd5e/img/radia.svg",             // An svg icon.
    color: new Color(0),  // The color of the damage type (currently unused).
    reference: ""         // A uuid of a journal entry rules page.
  };
  
  CONFIG.DND5E.itemProperties.radium = {
    label: "Radium",
    isPhysical: true
  };
  CONFIG.DND5E.validProperties.weapon.add("radium");

  CONFIG.DND5E.damageTypes.psionique = {
    label: "Psionique",      // The displayed name of the damage type
    isPhysical: false,     // Whether this is negated by adamantine/magical/silvered
    icon: "modules/veskarath-add-on-for-dd5e/img/brain.svg",             // An svg icon.
    color: new Color(0),  // The color of the damage type (currently unused).
    reference: ""         // A uuid of a journal entry rules page.
  };

  CONFIG.DND5E.spellSchools.radiomantie = {
    label: "Radiomantie",
    icon: "modules/veskarath-add-on-for-dd5e/img/radia.svg",
    fullKey: "radiomantie", // Full key used in enrichers
    reference: "" // UUID of journal entry page for rich tooltips
  };
});