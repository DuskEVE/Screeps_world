const roleBuilder = require('./role_builder');
const roleMining = require('./role_mining');
const roleRespawn = require('./role_respawn');
const roleUpgrad = require('./role_upgrad');
const roleLongHauler = require('./role_longHauler');

module.exports.loop = function (){
    if(Game.getObjectById('5bbcabaa9099fc012e634159').safeMode === undefined){
        Game.getObjectById('5bbcabaa9099fc012e634159').activateSafeMode();
    }

    roleRespawn.respawn();

    for(let name in Game.creeps){
        let creep = Game.creeps[name];
        if(creep.memory == 'miner') roleMining.run(creep);
        if(creep.memory == 'upgrader') roleUpgrad.run(creep);
        if(creep.memory == 'builder') roleBuilder.run(creep);
        if(creep.memory == 'longHauler') roleLongHauler.run(creep);
    }
}
