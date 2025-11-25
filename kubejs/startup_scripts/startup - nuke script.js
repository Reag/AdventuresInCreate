global.nukelist = [ // List of items to be disabled and hidden from the game.
// Items/Blocks

// Mobs

// Regex



]

// Below section is for removing items/blocks that come in multiple different wood types or colours.

const vanillaWoodTypes = [
  'oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak',
  'mangrove', 'cherry', 'bamboo', 'crimson', 'warped'
]

const dyeColours = [
  'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink',
  'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
]

/*for (const wood of vanillaWoodTypes) {
  if (wood !== 'oak') {
    global.nukelist.push(`friendsandfoes:${wood}_beehive`)
  }
}*/


// To use these item nuking scripts, type the IDs of items you want to disable in the space above. 
// Then, type 'nukelist reload', which will run these commands: (this is a custom script as well)
// /kubejs reload startup-scripts
// /reload
// /kubejs reload lang

// Can nuke Items, Blocks, Fluids, Entities