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
	
}

Events.on(ModContentLoadEvent, () => {
	postLoadContent();
});
