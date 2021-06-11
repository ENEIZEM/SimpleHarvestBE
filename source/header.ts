/*
 ██████╗██╗███╗   ███╗██████╗ ██╗     ███████╗  ██╗  ██╗ █████╗ ██████╗ ██╗   ██╗███████╗ ██████╗████████╗  ██████╗ ███████╗
██╔════╝██║████╗ ████║██╔══██╗██║     ██╔════╝  ██║  ██║██╔══██╗██╔══██╗██║   ██║██╔════╝██╔════╝╚══██╔══╝  ██╔══██╗██╔════╝
╚█████╗ ██║██╔████╔██║██████╔╝██║     █████╗    ███████║███████║██████╔╝╚██╗ ██╔╝█████╗  ╚█████╗    ██║     ██████╦╝█████╗  
 ╚═══██╗██║██║╚██╔╝██║██╔═══╝ ██║     ██╔══╝    ██╔══██║██╔══██║██╔══██╗ ╚████╔╝ ██╔══╝   ╚═══██╗   ██║     ██╔══██╗██╔══╝  
██████╔╝██║██║ ╚═╝ ██║██║     ███████╗███████╗  ██║  ██║██║  ██║██║  ██║  ╚██╔╝  ███████╗██████╔╝   ██║     ██████╦╝███████╗
╚═════╝ ╚═╝╚═╝     ╚═╝╚═╝     ╚══════╝╚══════╝  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═════╝    ╚═╝     ╚═════╝ ╚══════╝
*/

if(__config__.getBool("chat_message")){
    Callback.addCallback("LevelLoaded", () => {
        Game.message("SimpleHarvestBE by Максим Помазуев");
    });
}

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const SUPPORTED_BLOCKS: number[] = [VanillaTileID.wheat, VanillaTileID.cocoa, VanillaTileID.beetroot, VanillaTileID.carrots, VanillaTileID.potatoes, VanillaTileID.nether_wart];
const fortune = (extra: ItemExtraData) => ToolAPI.getEnchantExtraData(extra).fortune;