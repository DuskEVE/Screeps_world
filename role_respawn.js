let roleRespawn = {
    respawn: function(){
        let creeps = Array.from(Game.creeps);
        let miners = [];
        let upgraders = [];
        let builders = [];
        let soldiers = [];

        for(let i in Game.creeps){
            if(Game.creeps[i].memory == 'miner') miners.push(Game.creeps[i].name);
            else if(Game.creeps[i].memory == 'upgrader') upgraders.push(Game.creeps[i].name);
            else if(Game.creeps[i].memory == 'builder') builders.push(Game.creeps[i].name);
            else if(Game.creeps[i].memory == 'soldier') soldiers.push(Game.creeps[i].name);
        }

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

        
            if(builders.length < 2){
            let name = null;
            let num = 1;

            for(let i=0; i<9; i++){
                if(builders.indexOf(`Builder${num}`) === -1){
                    name = `Builder${num}`;
                    break;
                }
                num++;
            }

            Game.spawns['base_01'].spawnCreep([WORK, WORK, CARRY, MOVE], name, {memory:'builder'});
        }
    }
}

module.exports = roleRespawn;