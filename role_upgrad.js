let roleUpgrad = {
    upgradMode: false,
    renew: false,
    run: function(creep) {
        if(creep.store[RESOURCE_ENERGY] === 0) this.upgradMode = false;
        if(creep.store.getFreeCapacity() === 0) this.upgradMode = true;
        if(creep.ticksToLive < 300) this.renew = true;

        if(this.renew){
            if(creep.ticksToLive >= 1450) this.renew = false;
            let targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType === STRUCTURE_SPAWN
            });
    
            if(Game.spawns['base_01'].renewCreep(creep) === ERR_NOT_IN_RANGE){
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else if(this.upgradMode){
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
        else{
            let sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[sources.length-1]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[sources.length-1]);
            }
        }

	}
};

module.exports = roleUpgrad;