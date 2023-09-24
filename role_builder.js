let roleBuilder = {
	buildMode: false,
	upgradMode: false,
    run: function(creep) {

	    if(creep.store[RESOURCE_ENERGY] === 0){
			this.buildMode = false;
			this.upgradMode = false;
		}
	    if(creep.store.getFreeCapacity() === 0) this.buildMode = true;

	    if(this.buildMode) {
	        let targets = creep.room.find(FIND_CONSTRUCTION_SITES);
			if(targets.length) {
				if(creep.build(targets[0]) === ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
				}
			}
			else{
				this.buildMode = false;
				this.upgradMode = true;
			}
		}
		else if(this.upgradMod){
			if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
		}
		else {
			let sources = creep.room.find(FIND_SOURCES);
			if(creep.harvest(sources[1]) === ERR_NOT_IN_RANGE) {
				creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
			}
		}
	}
};

module.exports = roleBuilder;