const roleBuilder = require('./role_builder');
const roleMining = require('./role_mining');
const roleRespawn = require('./role_respawn');
const roleUpgrad = require('./role_upgrad');
const roleLongHauler = require('./role_longHauler');
const roleHauler = require('./role_hauler');
const roleRenew = require('./role_renew');

module.exports.loop = function (){
    /*if(Game.getObjectById('5bbcabaa9099fc012e634159').safeMode === undefined){
        Game.getObjectById('5bbcabaa9099fc012e634159').activateSafeMode();
    }*/

    const look = Game.flags.Flag1.pos.look();

    let tower = Game.getObjectById('6511779d88fd0b6d4e1cdb10');
    if(tower) {
        let damagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        let closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        let energy = tower.store.getFreeCapacity(RESOURCE_ENERGY);
        console.log(energy)
        if(closestHostile) {
            tower.attack(closestHostile);
        }
        else if(damagedStructure && energy < 500) {
            tower.repair(damagedStructure);
        }

    }

    roleRespawn.respawn();

    for(let name in Game.creeps){
        let creep = Game.creeps[name];
        let time = Number(creep.ticksToLive);

        /*if(time < 200){
            roleRenew.run(creep);
        }
        else{*/
            if(creep.memory === 'miner') roleMining.run(creep);
            if(creep.memory === 'upgrader') roleUpgrad.run(creep);
            if(creep.memory === 'builder') roleBuilder.run(creep);
            if(creep.memory === 'longHauler') roleLongHauler.run(creep, name, look);
            if(creep.memory === 'hauler') roleHauler.run(creep);
        //}
    }
}
