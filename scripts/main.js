function postLoadContent(){
	let stell = new UnitFactory.UnitPlan(UnitTypes.stell, 
										 60 * 40,
										 ItemStack.copy(Blocks.groundFactory.plans.get(2).requirements));
	stell.requirements[1].item = Items.graphite;
	
	let merui = new UnitFactory.UnitPlan(UnitTypes.merui, 
										 60 * 40,
										 stell.requirements);
										 
	let elude = new UnitFactory.UnitPlan(UnitTypes.elude, 
										 60 * 40,
										 stell.requirements);

	
	Blocks.groundFactory.plans.add(stell);
	Blocks.airFactory.plans.add(elude);
	Blocks.navalFactory.plans.add(merui);
	
	let req = ItemStack.copy(Blocks.groundFactory.plans.get(2).requirements);
	req[1].item = Items.graphite;
	
	req[0].amount = 1000;
	req[1].amount = 1000;
	req[2].amount = 1000;
	
	new TechTree.TechNode(Blocks.groundFactory.techNode, UnitTypes.stell, req);
	new TechTree.TechNode(Blocks.airFactory.techNode, UnitTypes.elude, req);
	new TechTree.TechNode(Blocks.navalFactory.techNode, UnitTypes.merui, req);
	

	let coreToo = false;
	for(let i = 0; i < Vars.mods.list().size; i++){
		let m = Vars.mods.list().get(i);
		if(coreToo) break;
		
		if(m.name == "coreunitsbuildable" && m.enabled) coreToo = true;

	}
	Log.err("evoke:" + coreToo)
	
	if(coreToo == true){
		let evoke = new UnitFactory.UnitPlan(
		UnitTypes.evoke, 
	 	60 * 60,
	 	ItemStack.with(
			Items.silicon, 100,
			Items.graphite, 100,
			Items.titanium, 100
		));
		
		Blocks.airFactory.plans.add(evoke);
		new TechTree.TechNode(Blocks.airFactory.techNode, UnitTypes.evoke, req);
		

	}
}

Events.on(ModContentLoadEvent, () => {
	postLoadContent();
});