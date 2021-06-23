addSupportedBlock(VanillaTileID.wheat, (data) => data == 7, () => 0);
addSupportedBlock(VanillaTileID.cocoa, (data) => data >= 8 && data <= 11, (data) => data - 8);
addSupportedBlock(VanillaTileID.beetroot, (data) => data == 3, () => 0);
addSupportedBlock(VanillaTileID.carrots, (data) => data == 3, () => 0);
addSupportedBlock(VanillaTileID.potatoes, (data) => data == 3, () => 0);