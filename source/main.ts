if(__config__.getBool("on_click")){
	Callback.addCallback("ItemUse", (coords, item, block, isExternal, player) => {
		if(SUPPORTED_BLOCKS.containsKey(IDRegistry.getIdInfo(block.id))){
			let params = SUPPORTED_BLOCKS.get(IDRegistry.getIdInfo(block.id)),
				region = BlockSource.getDefaultForActor(player);
			if(params.check(block.data)){
				let _drop = Block.getDropFunction(block.id)(coords, block.id, block.data, ToolAPI.getToolLevel(item.id), ToolAPI.getEnchantExtraData(item.extra ?? null), item, region);
				for(let i in _drop) region.spawnDroppedItem(coords.x, coords.y, coords.z, _drop[i][0], _drop[i][1], _drop[i][2], _drop[i][3] ?? null);
				let newCrop = params.getNewCrop(block.data);
				region.setBlock(coords.x, coords.y, coords.z, block.id, newCrop);
			}
		}
	});
}

if(__config__.getBool("on_destroy")){
	Callback.addCallback("DestroyBlock", (coords, block, player) => {
		if(SUPPORTED_BLOCKS.containsKey(IDRegistry.getIdInfo(block.id))){
			let params = SUPPORTED_BLOCKS.get(IDRegistry.getIdInfo(block.id)),
				region = BlockSource.getDefaultForActor(player);
			if(params.check(block.data)){
				Game.prevent();
				let item = Entity.getCarriedItem(player);
				let _drop = Block.getDropFunction(block.id)(coords, block.id, block.data, ToolAPI.getToolLevel(item.id), ToolAPI.getEnchantExtraData(item.extra ?? null), item, region);
				for(let i in _drop) region.spawnDroppedItem(coords.x, coords.y, coords.z, _drop[i][0], _drop[i][1], _drop[i][2], _drop[i][3] ?? null);
				let newCrop = params.getNewCrop(block.data);
				region.setBlock(coords.x, coords.y, coords.z, block.id, newCrop);
			}
		}
	});
}