let roleMining = {
    miningMode: false,
    buildMode: false,
    run: function(creep) {
        if(creep.store.getFreeCapacity() === 0) this.miningMode = false;
        if(creep.store[RESOURCE_ENERGY] === 0){
            this.miningMode = true;
            this.buildMode = false;
        }

        if(this.miningMode){
            let sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[sources.length-1]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[sources.length-1], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else{
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
            else this.buildMode = true;
        }

        if(this.buildMode){
            let targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else this.buildMode = false;
        }
	}
};

module.exports = roleMining;