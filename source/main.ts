if(__config__.getBool("on_click")){
	Callback.addCallback("ItemUse", (coords, item, block, isExternal, player) => {
		if(!!~SUPPORTED_BLOCKS.indexOf(block.id)){
			let region = BlockSource.getDefaultForActor(player);
			switch(block.id){
				case VanillaTileID.wheat:
					if(block.data == 7){
						region.spawnDroppedItem(coords.x, coords.y, coords.z, 295, randomInt(1, 2), 0, null);
						region.spawnDroppedItem(coords.x, coords.y, coords.z, 296, randomInt(0, 3), 0, null);
						region.setBlock(coords.x, coords.y, coords.z, VanillaBlockID.wheat, 0);
					}; break;
				case VanillaTileID.cocoa:
					if(block.data >= 8 && block.data <= 11){
						region.spawnDroppedItem(coords.x, coords.y, coords.z, VanillaItemID.cocoa_beans, 3, 0, null);
						region.setBlock(coords.x, coords.y, coords.z, VanillaTileID.cocoa, block.data - 8);
					}; break;
				case VanillaTileID.beetroot:
					if(block.data == 3){
						region.spawnDroppedItem(coords.x, coords.y, coords.z, VanillaBlockID.beetroot, randomInt(1, 2), 0, null);
						region.spawnDroppedItem(coords.x, coords.y, coords.z, VanillaItemID.beetroot_seeds, randomInt(0, 3), 0, null);
						region.setBlock(coords.x, coords.y, coords.z, VanillaTileID.beetroot, 0);
					}; break;
				case VanillaTileID.carrots:
					if(block.data == 3){
						region.spawnDroppedItem(coords.x, coords.y, coords.z, VanillaItemID.carrot, randomInt(1, 5) + fortune(item.extra), 0, null);
						region.setBlock(coords.x, coords.y, coords.z, VanillaTileID.carrots, 0);
					}; break;
				case VanillaTileID.potatoes:
					if(block.data == 3){
						region.spawnDroppedItem(coords.x, coords.y, coords.z, VanillaItemID.potato, randomInt(1, 4), 0, null);
						if(Math.random() <= .02) region.spawnDroppedItem(coords.x, coords.y, coords.z, VanillaItemID.poisonous_potato, 1, 0);
						region.setBlock(coords.x, coords.y, coords.z, VanillaTileID.potatoes, 0);
					}; break;
				case VanillaTileID.nether_wart:
					if(block.data == 3){
						region.spawnDroppedItem(coords.x, coords.y, coords.z, VanillaBlockID.nether_wart, randomInt(2, 4) + fortune(item.extra), 0, null);
						region.setBlock(coords.x, coords.y, coords.z, VanillaTileID.nether_wart, 0);
					}; break;
			}
		}
	});
}

if(__config__.getBool("on_destroy")){
	Callback.addCallback("DestroyBlock", (coords, block, player) => {
		if(!!~SUPPORTED_BLOCKS.indexOf(block.id)){
			Game.prevent();
			let region = BlockSource.getDefaultForActor(player);
			switch(block.id){
				case VanillaTileID.wheat:
					if(block.data == 7){
						region.spawnDroppedItem(coords.x, coords.y, coords.z, 295, randomInt(1, 2), 0, null);
						region.spawnDroppedItem(coords.x, coords.y, coords.z, 296, randomInt(0, 3), 0, null);
						region.setBlock(coords.x, coords.y, coords.z, VanillaBlockID.wheat, 0);
					}; break;
				case VanillaTileID.cocoa:
					if(block.data >= 8 && block.data <= 11){
						region.spawnDroppedItem(coords.x, coords.y, coords.z, VanillaItemID.cocoa_beans, 3, 0, null);
						region.setBlock(coords.x, coords.y, coords.z, VanillaTileID.cocoa, block.data - 8);
					}; break;
				case VanillaTileID.beetroot:
					if(block.data == 3){
						region.spawnDroppedItem(coords.x, coords.y, coords.z, VanillaBlockID.beetroot, randomInt(1, 2), 0, null);
						region.spawnDroppedItem(coords.x, coords.y, coords.z, VanillaItemID.beetroot_seeds, randomInt(0, 3), 0, null);
						region.setBlock(coords.x, coords.y, coords.z, VanillaTileID.beetroot, 0);
					}; break;
				case VanillaTileID.carrots:
					if(block.data == 3){
						region.spawnDroppedItem(coords.x, coords.y, coords.z, VanillaItemID.carrot, randomInt(1, 5) + fortune(Entity.getCarriedItem(player).extra), 0, null);
						region.setBlock(coords.x, coords.y, coords.z, VanillaTileID.carrots, 0);
					}; break;
				case VanillaTileID.potatoes:
					if(block.data == 3){
						region.spawnDroppedItem(coords.x, coords.y, coords.z, VanillaItemID.potato, randomInt(1, 4), 0, null);
						if(Math.random() <= .02) region.spawnDroppedItem(coords.x, coords.y, coords.z, VanillaItemID.poisonous_potato, 1, 0);
						region.setBlock(coords.x, coords.y, coords.z, VanillaTileID.potatoes, 0);
					}; break;
			}
		}
	});
}