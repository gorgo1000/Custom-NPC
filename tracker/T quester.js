//TQUESTER init
var quest = [{
  x : 0,
  y : 0,
  z : 0
 }, {
  x : 0,
  y : 0,
  z : 0
 }, {
  x : 0,
  y : 0,
  z : 0
 }
]
world.setTempData("questcorr", quest);

/*
TQUESTER dialog close
 */
var x, y, z, arr1 = [], cor1, cor2, cor3;
if (player.hasReadDialog(114)) {
 arr1 = world.getTempData("questcorr");
 cor1 = {
  x : npc.getBlockX(),
  y : npc.getBlockY() - 1,
  z : npc.getBlockZ()
 };
 arr1.splice(0, 1, cor1);
 world.setTempData("questcorr", arr1);
 npc.executeCommand("/setblock " + npc.getBlockX() + " " + arr1[0].y + " " + npc.getBlockZ() + " customnpcs:npcWaypoint 3 replace {LocationRange:2,LocationName:\"Tracker Quest 1\"}")
 npc.executeCommand("/noppes dialog unread @p 114");
} else if (player.hasReadDialog(115)) {
 arr1 = world.getTempData("questcorr");
 cor2 = {
  x : npc.getBlockX(),
  y : npc.getBlockY() - 1,
  z : npc.getBlockZ()
 };
 arr1.splice(1, 1, cor2);
 world.setTempData("questcorr", arr1);
 npc.executeCommand("/setblock " + npc.getBlockX() + " " + arr1[1].y + " " + npc.getBlockZ() + " customnpcs:npcWaypoint 3 replace {LocationRange:2,LocationName:\"Tracker Quest 2\"}")
 npc.executeCommand("/noppes dialog unread @p 115");
} else if (player.hasReadDialog(116)) {
 arr1 = world.getTempData("questcorr");
 cor3 = {
  x : npc.getBlockX(),
  y : npc.getBlockY() - 1,
  z : npc.getBlockZ()
 };
 arr1.splice(2, 1, cor3);
 world.setTempData("questcorr", arr1);
 npc.executeCommand("/setblock " + npc.getBlockX() + " " + arr1[2].y + " " + npc.getBlockZ() + " customnpcs:npcWaypoint 3 replace {LocationRange:2,LocationName:\"Tracker Quest 3\"}")
 npc.executeCommand("/noppes dialog unread @p 116");
}
if (player.hasReadDialog(113)) {
 npc.getRole().setOwner(player);
 npc.getRole().setInfiniteDays(true);
 npc.getRole().addDaysLeft(10);
 npc.executeCommand("/noppes dialog unread @p 113");
} else if (player.hasReadDialog(117)) {
 npc.executeCommand("/noppes dialog unread @p 117");
 npc.getRole().setInfiniteDays(false);
 npc.getRole().addDaysLeft(-1000);
}
