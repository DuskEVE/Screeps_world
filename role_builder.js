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
	        let buildTargets = creep.room.find(FIND_CONSTRUCTION_SITES);
			let repairTargets = creep.room.find(FIND_STRUCTURES, {
				filter: object => object.hits < object.hitsMax
			});
			repairTargets.sort((a,b) => a.hits - b.hits);

			if(buildTargets.length) {
				if(creep.build(buildTargets[0]) === ERR_NOT_IN_RANGE) {
					creep.moveTo(buildTargets[0], {visualizePathStyle: {stroke: '#ffffff'}});
				}
			}
			else if(repairTargets.length){
				if(creep.repair(repairTargets[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(repairTargets[0]);
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