let roleRespawn = {
    respawn: function(){
        let creeps = Array.from(Game.creeps);
        let miners = [];
        let upgraders = [];
        let builders = [];
        let soldiers = [];

        creeps.forEach(creep => {
            if(creep.memory.role == 'miner') miners.push(creep.name);
            else if(creep.memory.role == 'upgrader') upgraders.push(creep.name);
            else if(creep.memory.role == 'builder') builders.push(creep.name);
            else if(creep.memory.role == 'soldier') soldiers.push(creep.name);
        });

        if(miners.length < 1){
            let name = null;
            let num = 1;

            for(let i=0; i<9; i++){
                if(miners.indexOf(`Miner${num}`) === -1){
                    name = `Miner${num}`;
                    break;
                }
                num++;
            }

            Game.spawns['base_01'].spawnCreep([WORK, WORK, CARRY, MOVE], name, {memory:'miner'});
        }

        if(upgraders.length < 1){
            let name = null;
            let num = 1;

            for(let i=0; i<9; i++){
                if(upgraders.indexOf(`Upgrader${num}`) === -1){
                    name = `Upgrader${num}`;
                    break;
                }
                num++;
            }

            Game.spawns['base_01'].spawnCreep([WORK, WORK, CARRY, MOVE], name, {memory:'upgrader'});
        }
    }
}

module.exports = roleRespawn;