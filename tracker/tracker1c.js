// TRACKER initeract
var arr1a = [], x, z, y, questx, questz, questy, tan_dif, quest_dist, xdiff, zdiff, ydiff, dialog_number, zz, bypass1;
arr1a[3] = new Array();
npc.getRole().setGuiDisabled(false);
if (player.hasActiveQuest(3)) {
 arr1a = world.getTempData("questcorr");
 npc.say("Quest 1");
 bypass1 = 0;
 world.setTempData("coor_quest", [arr1a[0].x, arr1a[0].y, arr1a[0].z]);
} else if (player.hasActiveQuest(7)) {
 arr1a = world.getTempData("questcorr");
 npc.say("Quest 2");
 bypass1 = 0;
 world.setTempData("coor_quest", [arr1a[1].x, arr1a[1].y, arr1a[1].z]);
} else if (player.hasActiveQuest(6)) {
 arr1a = world.getTempData("questcorr");
 npc.say("Quest 3");
 bypass1 = 0;
 world.setTempData("coor_quest", [arr1a[2].x, arr1a[2].y, arr1a[2].z]);
} else {
 npc.say("You have no quest");
 npc.executeCommand("/noppes dialog unread @p 110");
 bypass1 = 1;
}
if (npc.getRole().hasOwner()) {
 if (npc.getRole().getOwner().name == player.name) {
  if (bypass1 == 0) {
   zz = world.getTempData("coor_quest");
   questx = zz[0];
   questy = zz[1];
   questz = zz[2];
   x = npc.getBlockX();
   z = npc.getBlockZ();
   y = npc.getBlockY();
   quest_dist = Math.sqrt(Math.pow(x - questx, 2) + Math.pow(z - questz, 2));
   world.setTempData("quest_dist", quest_dist);
   ydiff = y - questy;
   xdiff = x - questx;
   zdiff = z - questz;
   tan_dif = zdiff / xdiff;
   if (Math.abs(xdiff) + Math.abs(zdiff) >= 5) {
    if (xdiff == 0) {
     if (zdiff > 0) {
      // direction is south
      npc.executeCommand("/noppes dialog read @p 82");
      world.setTempData("dialog_number", 82);
     } else {
      // direction is north
      npc.executeCommand("/noppes dialog read @p 77");
      world.setTempData("dialog_number", 77);
     }
    } else if (zdiff == 0) {
     if (xdiff > 0) {
      // direction is west
      npc.executeCommand("/noppes dialog read @p 81");
      world.setTempData("dialog_number", 81);
     } else {
      // direction is east
      npc.executeCommand("/noppes dialog read @p 80");
      world.setTempData("dialog_number", 80);
     }
    } else if (xdiff < 0) {
     if (tan_dif >= 2.4) {
      // direction is south
      npc.executeCommand("/noppes dialog read @p 82");
      world.setTempData("dialog_number", 82);
     } else if (.4 <= tan_dif && tan_dif < 2.4) {
      //direction is se
      npc.executeCommand("/noppes dialog read @p 83");
      world.setTempData("dialog_number", 83);
     } else if ( - .4 <= tan_dif && tan_dif < .4) {
      // direction is east
      npc.executeCommand("/noppes dialog read @p 80");
      world.setTempData("dialog_number", 80);
     } else if (-2.4 <= tan_dif && tan_dif <  - .4) {
      //direction is ne
      npc.executeCommand("/noppes dialog read @p 78");
      world.setTempData("dialog_number", 78);
     } else if (tan_dif < -2.4) {
      //direction is north
      npc.executeCommand("/noppes dialog read @p 77");
      world.setTempData("dialog_number", 77);
     }
     // x greater than 0
    } else {
     if (tan_dif >= 2.4) {
      // direction is north
      npc.executeCommand("/noppes dialog read @p 77");
      world.setTempData("dialog_number", 77);
     } else if (.4 <= tan_dif && tan_dif < 2.4) {
      //direction is nw
      npc.executeCommand("/noppes dialog read @p 79");
      world.setTempData("dialog_number", 79);
     } else if ( - .4 <= tan_dif && tan_dif < .4) {
      // direction is west
      npc.executeCommand("/noppes dialog read @p 81");
      world.setTempData("dialog_number", 81);
     } else if (-2.4 <= tan_dif && tan_dif <  - .4) {
      //direction is sw
      npc.executeCommand("/noppes dialog read @p 84");
      world.setTempData("dialog_number", 84);
     } else if (tan_dif < -2.4) {
      //direction is south
      npc.executeCommand("/noppes dialog read @p 82");
      world.setTempData("dialog_number", 82);
     }
    }
   } else if (ydiff < 0) {
    npc.getRole().setGuiDisabled(true);
    npc.say("It is above us!");
    event.setCancelled(true);
    // it is above
   } else if (ydiff < 3) {
    npc.getRole().setGuiDisabled(true);
    npc.say("It is very close");
    event.setCancelled(true);
    //very close
   } else if (ydiff < 15) {
    npc.getRole().setGuiDisabled(true);
    npc.say("It is not too deep");
    event.setCancelled(true);
    //not too deep
   } else if (ydiff < 30) {
    npc.getRole().setGuiDisabled(true);
    npc.say("It is quite deep!");
    event.setCancelled(true);
    //a quite a ways down
   } else {
    npc.getRole().setGuiDisabled(true);
    npc.say("Very deep!!");
    event.setCancelled(true);
    //very deep
   }
  }
 } else {
  npc.say("I'm not working for you!");
  event.setCancelled(true);
 }
} else {
 npc.say("I am a Tracker");
}
