class miner{
    constructor(creep){
        this.creep = creep;
        this.memory = creep.memory;
        this.work = true;
        this.lowHp = false;
    }

    run(){
        if(this.creep.hit < 300){
            this.work = false;
            this.lowHp = true;
        }

        if(this.lowHp) this.renew();
        else this.mining();
    }

    mining(){
        
    }

    renew(){

    }

    move(){

    }
}

module.exports = roleMiner;