if (npc.role.getOwner() != null) {
           arr1a = world.getTempData("questcorr");
if (npc.role.getOwner().hasFinishedQuest(3)) {
          npc.say("finished this");
 npc.executeCommand("setblock " + arr1a[0].x +" "+ arr1a[0].y+" "+ arr1a[0].z +" minecraft:glass 1 0");
  npc.executeCommand("noppes quest remove "+npc.role.getOwner().name + " 3");
}
if (npc.role.getOwner().hasFinishedQuest(7)) {
 npc.executeCommand("setblock " + arr1a[1].x +" "+ arr1a[1].y+" "+ arr1a[1].z+ " minecraft:glass 1 0");
  npc.executeCommand("noppes quest remove "+npc.role.getOwner().name + " 7");
}
if (npc.role.getOwner().hasFinishedQuest(6)) {
 npc.executeCommand("setblock " + arr1a[2].x +" "+ arr1a[2].y+" "+ arr1a[2].z +" minecraft:glass 1 0");
  npc.executeCommand("noppes quest remove "+npc.role.getOwner().name + " 6");
}
}
    




    
npc.say(npc.role.getOwner());
eventCancel(true);