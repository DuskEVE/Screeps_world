
const roleMining = require('./role_mining');
const roleUpgrad = require('./role_upgrad');

module.exports.loop = function () {

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleMining.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrad.run(creep);
        }
    }
}