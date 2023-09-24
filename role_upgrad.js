let roleUpgrad = {
    upgradMode: false,
    run: function(creep) {
        if(creep.store[RESOURCE_ENERGY] === 0) this.upgradMode = false;
        if(creep.store.getFreeCapacity() === 0) this.upgradMode = true;

        if(this.upgradMode){
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
        else{
            let sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1]);
            }
        }

	}
};

module.exports = roleUpgrad;