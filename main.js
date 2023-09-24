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
    }
}
