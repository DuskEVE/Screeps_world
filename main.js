const roleBuilder = require('./role_builder');
const roleMining = require('./role_mining');
const roleRespawn = require('./role_respawn');
const roleUpgrad = require('./role_upgrad');
const roleLongHauler = require('./role_longHauler');

module.exports.loop = function (){
    if(Game.getObjectById('5bbcabaa9099fc012e634159').safeMode === undefined){
        Game.getObjectById('5bbcabaa9099fc012e634159').activateSafeMode();
    }

    const look = Game.flags.Flag1.pos.look();

    let tower = Game.getObjectById('6511779d88fd0b6d4e1cdb10');
    if(tower) {
        let closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        let closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

    roleRespawn.respawn();

    for(let name in Game.creeps){
        let creep = Game.creeps[name];
        if(creep.memory == 'miner') roleMining.run(creep);
        if(creep.memory == 'upgrader') roleUpgrad.run(creep);
        if(creep.memory == 'builder') roleBuilder.run(creep);
        if(creep.memory == 'longHauler') roleLongHauler.run(creep, name, look);
    }
}
