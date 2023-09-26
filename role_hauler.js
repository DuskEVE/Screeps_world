let roleHauler = {
    transportMode: false,
    run:function(creep) {
        if(creep.store.getFreeCapacity() === 0) this.transportMode = true;
        if(creep.store[RESOURCE_ENERGY] === 0) this.transportMode = false;

        if(this.transportMode){
            let targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType === STRUCTURE_CONTAINER) > 0;
                    }
            });

            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        else{
            const target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
            if(target) {
                if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }
        }
    }
};

module.exports = roleHauler;