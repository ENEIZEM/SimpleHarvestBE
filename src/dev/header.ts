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

type CropMaturityCheckFunc = (blockData: number) => boolean;
type NewCropGetFunc = (blockData: number) => number;
type SupportedBlockParams = { check: CropMaturityCheckFunc, getNewCrop: NewCropGetFunc };
const SUPPORTED_BLOCKS: java.util.Map<string, SupportedBlockParams> = new java.util.HashMap();
const addSupportedBlock = (id: number, func: CropMaturityCheckFunc, newCrop: NewCropGetFunc) => SUPPORTED_BLOCKS.put(IDRegistry.getIdInfo(id), {check: func, getNewCrop: newCrop});