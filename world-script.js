Hooks.once("init", () => {
  CONFIG.DND5E.damageTypes.radium = {
    label: "Radium",      // The displayed name of the damage type
    isPhysical: false,     // Whether this is negated by adamantine/magical/silvered
    icon: "modules/veskarath-add-on-for-dd5e/img/radia2.svg",             // An svg icon.
    color: new Color("Chartreuse"),  // The color of the damage type (currently unused).
    reference: ""         // A uuid of a journal entry rules page.
  };

  CONFIG.DND5E.spellSchools.radiomantie = {
    label: "Radiomantie",
    icon: "modules/veskarath-add-on-for-dd5e/img/radia2.svg",
    fullKey: "radiomantie", // Full key used in enrichers
    reference: "" // UUID of journal entry page for rich tooltips
  };
});