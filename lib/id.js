class ID{
    constructor(id){
        this.number = 1
        this.nextID = function(){
            this.number ++
        }
    }
}

module.exports = ID;