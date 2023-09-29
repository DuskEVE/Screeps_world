let roleLongHauler = {
    transportMode1: false,
    transportMode2: false,
    renew: false,
    run: function(creep, name, look) {
        if(creep.store[RESOURCE_ENERGY] === 0){
            if(name === 'LongHauler1') this.transportMode1 = false;
            if(name === 'LongHauler2') this.transportMode2 = false;
        }
        if(creep.store.getFreeCapacity() === 0){
            if(name === 'LongHauler1') this.transportMode1 = true;
            if(name === 'LongHauler2') this.transportMode2 = true;
        }
        if(creep.ticksToLive < 300) this.renew = true;

        let creepInPos = null;
        look.forEach(function(lookObject) {
            if(lookObject.type == LOOK_CREEPS) {
                creepInPos = lookObject.creep.name;
            }
        });

        if(this.renew){
            if(creep.ticksToLive >= 1450) this.renew = false;
            let targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType === STRUCTURE_SPAWN
            });
    
            if(Game.spawns['base_01'].renewCreep(creep) === ERR_NOT_IN_RANGE){
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else if(this.transportMode1 && name === 'LongHauler1' || this.transportMode2 && name === 'LongHauler2' ){
            let targets = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType === STRUCTURE_EXTENSION ||
                    structure.structureType == STRUCTURE_SPAWN ||
                    structure.structureType == STRUCTURE_TOWER) &&
                    structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else{
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        }
        else{
            let sources = creep.room.find(FIND_SOURCES);
            
            if(creepInPos === null || creepInPos === name){
                if(creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0]);
                }
            }
            else{
                creep.moveTo(Game.flags['Flag2']);
            }
        }

	}
};

module.exports = roleLongHauler;