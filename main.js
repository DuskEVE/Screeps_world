const roleBuilder = require('./role_builder');
const roleMining = require('./role_mining');
const roleRespawn = require('./role_respawn');
const roleUpgrad = require('./role_upgrad');

module.exports.loop = function () {
    roleRespawn.respawn();

    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        if(creep.memory == 'miner') {
            roleMining.run(creep);
        }
        if(creep.memory == 'upgrader') {
            roleUpgrad.run(creep);
        }
        if(creep.memory == 'builder') {
            roleBuilder.run(creep);
        }
    }
}

/*
var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    for(var name in Game.rooms) {
        console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}
*/