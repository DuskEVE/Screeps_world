let roleRespawn = {
    respawn: function(){
        let miners = [];
        let upgraders = [];
        let builders = [];
        let longHaulers = [];
        let soldiers = [];

        for(let i in Game.creeps){
            if(Game.creeps[i].memory == 'miner') miners.push(Game.creeps[i].name);
            else if(Game.creeps[i].memory == 'upgrader') upgraders.push(Game.creeps[i].name);
            else if(Game.creeps[i].memory == 'builder') builders.push(Game.creeps[i].name);
            else if(Game.creeps[i].memory == 'longHauler') longHaulers.push(Game.creeps[i].name);
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

            Game.spawns['base_01'].spawnCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], name, {memory:'miner'});
        }

        if(upgraders.length < 2){
            let name = null;
            let num = 1;

            for(let i=0; i<9; i++){
                if(upgraders.indexOf(`Upgrader${num}`) === -1){
                    name = `Upgrader${num}`;
                    break;
                }
                num++;
            }

            Game.spawns['base_01'].spawnCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], name, {memory:'upgrader'});
        }
        
        if(builders.length < 1){
            let name = null;
            let num = 1;

            for(let i=0; i<9; i++){
                if(builders.indexOf(`Builder${num}`) === -1){
                    name = `Builder${num}`;
                    break;
                }
                num++;
            }

            Game.spawns['base_01'].spawnCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], name, {memory:'builder'});
        }

        if(longHaulers.length < 1){
            let name = null;
            let num = 1;

            for(let i=0; i<9; i++){
                if(longHaulers.indexOf(`LongHauler${num}`) === -1){
                    name = `LongHauler${num}`;
                    break;
                }
                num++;
            }

            Game.spawns['base_01'].spawnCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], name, {memory:'longHauler'});
        }
        
    }
}

module.exports = roleRespawn;