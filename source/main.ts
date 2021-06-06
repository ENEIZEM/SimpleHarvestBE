/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 8
*/



// file: header.js

//сообщение
alert("AutoPlant by Максим Помазуев");

//сообщение в чате
Callback.addCallback("LevelLoaded", function(){ 
	Game.message("§2AutoPlant by Максим Помазуев")
});

//функция
function getRandomInt(min, max) { min = Math.ceil(min); max = Math.floor(max); return Math.floor(Math.random() * (max - min + 1)) + min; };

//когфиг; Илья прости, пришлось сп*здить переменную из твоего мода :(
var config = FileTools.ReadJSON(__dir__+"/config.json");




// file: wheat.js

//пшеница
if (config.Hiring.typePress == true){
Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){
var client = Network.getClientForPlayer(player);
if (client != null){
if (block.id == 59 && block.data == 7){
var blockSource = BlockSource.getDefaultForActor(player);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 296, getRandomInt(1,2), 0, null);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 295, getRandomInt(1,2), 0, null);
blockSource.setBlock(coords.x, coords.y, coords.z, 59, 0);
}
}
})};

//если сломать
if (config.Hiring.typeDestroy == true){
Callback.addCallback("DestroyBlock", function(coords, block, player){
var client = Network.getClientForPlayer(player);
if (client != null){
if (block.id ==59 && block.data == 7){
var blockSource = BlockSource.getDefaultForActor(player);
blockSource.setBlock(coords.x, coords.y, coords.z, 59, 0);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 296, getRandomInt(1,2), 0, null);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 295, getRandomInt(1,2), 0, null);
Game.prevent();
}
}
})};




// file: beans.js

//какао бобы
if (config.Hiring.typePress == true){
Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){
var client = Network.getClientForPlayer(player);
/*север*/if (client != null)
{if (block.id == 127 && block.data == 8){
var blockSource = BlockSource.getDefaultForActor(player);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 351, getRandomInt(1,2), 3, null);
blockSource.setBlock(coords.x, coords.y, coords.z, 127, 0);
}
};
/*восток*/if (client != null){if (block.id == 127 && block.data == 9){
var blockSource = BlockSource.getDefaultForActor(player);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 351, getRandomInt(1,2), 3, null);
blockSource.setBlock(coords.x, coords.y, coords.z, 127, 1);
}
};
/*юг*/if (client != null){if (block.id == 127 && block.data == 10){
var blockSource = BlockSource.getDefaultForActor(player);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 351, getRandomInt(1,2), 3, null);
blockSource.setBlock(coords.x, coords.y, coords.z, 127, 2);
}
};
/*запад*/if (client != null){if (block.id == 127 && block.data == 11){
var blockSource = BlockSource.getDefaultForActor(player);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 351, getRandomInt(1,2), 3, null);
blockSource.setBlock(coords.x, coords.y, coords.z, 127, 3);
}
}
})};

//если сломать
if (config.Hiring.typeDestroy == true){
Callback.addCallback("DestroyBlock", function(coords, block, player){
var client = Network.getClientForPlayer(player);
/*север*/if (client != null)
{if (block.id == 127 && block.data == 8){
var blockSource = BlockSource.getDefaultForActor(player);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 351, getRandomInt(1,2), 3, null);
blockSource.setBlock(coords.x, coords.y, coords.z, 127, 0);
Game.prevent();
}
};
/*восток*/if (client != null){if (block.id == 127 && block.data == 9){
var blockSource = BlockSource.getDefaultForActor(player);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 351, getRandomInt(1,2), 3, null);
blockSource.setBlock(coords.x, coords.y, coords.z, 127, 1);
Game.prevent();
}
};
/*юг*/if (client != null){if (block.id == 127 && block.data == 10){
var blockSource = BlockSource.getDefaultForActor(player);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 351, getRandomInt(1,2), 3, null);
blockSource.setBlock(coords.x, coords.y, coords.z, 127, 2);
Game.prevent();
}
};
/*запад*/if (client != null){if (block.id == 127 && block.data == 11){
var blockSource = BlockSource.getDefaultForActor(player);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 351, getRandomInt(1,2), 3, null);
blockSource.setBlock(coords.x, coords.y, coords.z, 127, 3);
Game.prevent();
}
}
})};




// file: beet.js

//свекла
if (config.Hiring.typePress == true){
Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){
var client = Network.getClientForPlayer(player);
if (client != null){
if (block.id == 244 && block.data == 3){
var blockSource = BlockSource.getDefaultForActor(player);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 457, getRandomInt(1,2), 0, null);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 458, getRandomInt(1,2), 0, null);
blockSource.setBlock(coords.x, coords.y, coords.z, 244, 0);
}
}
})};

//если сломать
if (config.Hiring.typeDestroy == true){
Callback.addCallback("DestroyBlock", function(coords, block, player){
var client = Network.getClientForPlayer(player);
if (client != null){
if (block.id == 244 && block.data == 3){
var blockSource = BlockSource.getDefaultForActor(player);
blockSource.setBlock(coords.x, coords.y, coords.z, 244, 0);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 457, getRandomInt(1,2), 0, null);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 458, getRandomInt(1,2), 0, null);
Game.prevent();
}
}
})};




// file: cane.js

//тростник
if (config.Hiring.typePress == true){
Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){
var client = Network.getClientForPlayer(player);
if (client != null){
var blockSource = BlockSource.getDefaultForActor(player);
if (blockSource.getBlockId(coords.x, coords.y, coords.z)==83 && blockSource.getBlockData(coords.x, coords.y, coords.z)==0 && blockSource.getBlockId(coords.x, coords.y+1, coords.z)==83 && blockSource.getBlockData(coords.x, coords.y+1, coords.z)==0 && item.id != 351 && item.data != 15){
blockSource.setBlock(coords.x, coords.y, coords.z, 83, 0);
blockSource.setBlock(coords.x, coords.y+1, coords.z, 0, 0);
blockSource.spawnDroppedItem(coords.x, coords.y+1, coords.z, 338, 1, 0, null);
}
}
})};

//если сломать
if (config.Hiring.typeDestroy == true){
Callback.addCallback("DestroyBlock", function(coords, block, player){
var client = Network.getClientForPlayer(player);
if (client != null){
var blockSource = BlockSource.getDefaultForActor(player);
if (blockSource.getBlockId(coords.x, coords.y, coords.z)==83 && blockSource.getBlockData(coords.x, coords.y, coords.z)==0 && blockSource.getBlockId(coords.x, coords.y+1, coords.z)==83 && blockSource.getBlockData(coords.x, coords.y+1, coords.z)==0){
blockSource.setBlock(coords.x, coords.y, coords.z, 83, 0);
blockSource.setBlock(coords.x, coords.y+1, coords.z, 0, 0);blockSource.spawnDroppedItem(coords.x, coords.y+1, coords.z, 338, 1, 0, null);
Game.prevent();
}
}
})};




// file: carrot.js

//морковь
if (config.Hiring.typePress == true){
Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){
var client = Network.getClientForPlayer(player);
if (client != null){
if (block.id == 141 && block.data == 3){
var blockSource = BlockSource.getDefaultForActor(player);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 391, getRandomInt(1,3), 0, null);
blockSource.setBlock(coords.x, coords.y, coords.z,141, 0);
}
}
})};

//если сломать
if (config.Hiring.typeDestroy == true){
Callback.addCallback("DestroyBlock", function(coords, block, player){
var client = Network.getClientForPlayer(player);
if (client != null){
if (block.id == 141 && block.data == 3){
var blockSource = BlockSource.getDefaultForActor(player);
blockSource.setBlock(coords.x, coords.y, coords.z,141, 0);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 391, getRandomInt(1,3), 0, null);
Game.prevent();
}
}
})};




// file: potato.js

//картошка
if (config.Hiring.typePress == true){
Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){
var client = Network.getClientForPlayer(player);
if (client != null){
if (block.id == 142 && block.data == 3){
var blockSource = BlockSource.getDefaultForActor(player);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 392, getRandomInt(1,3), 0, null);
blockSource.setBlock(coords.x, coords.y, coords.z,142, 0);
if(Math.random() < 0.02){
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 394, 1, 0, null);
}
}
}
})};

//если сломать
if (config.Hiring.typeDestroy == true){
Callback.addCallback("DestroyBlock", function(coords, block, player){
var client = Network.getClientForPlayer(player);
if (client != null){
if (block.id == 142 && block.data == 3){
var blockSource = BlockSource.getDefaultForActor(player);
blockSource.setBlock(coords.x, coords.y, coords.z,142, 0);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 392, getRandomInt(1,3), 0, null);
if(Math.random() < 0.02){
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 394, 1, 0, null);
};
Game.prevent();
}
}
})};




// file: wart.js

//адский нарост
if (config.Hiring.typePress == true){
Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){
var client = Network.getClientForPlayer(player);
if (client != null){
if (block.id == 115 && block.data == 3){
var blockSource = BlockSource.getDefaultForActor(player);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 372, getRandomInt(1,3), 0, null);
blockSource.setBlock(coords.x, coords.y, coords.z, 115, 0);
}
}
})};

//если сломать
if (config.Hiring.typeDestroy == true){
Callback.addCallback("DestroyBlock", function(coords, block, player){
var client = Network.getClientForPlayer(player);
if (client != null){
if (block.id == 115 && block.data == 3){
var blockSource = BlockSource.getDefaultForActor(player);
blockSource.setBlock(coords.x, coords.y, coords.z, 115, 0);
blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 372, getRandomInt(1,3), 0, null);
Game.prevent();
}
}
})};