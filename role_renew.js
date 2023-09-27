let roleRenew = {
    run: function(creep) {
        let targets = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => structure.structureType === STRUCTURE_SPAWN
        });

        if(Game.spawns['base_01'].renewCreep(creep) === ERR_NOT_IN_RANGE){
            creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffaa00'}});
        }
    }
}

module.exports = roleRenew;