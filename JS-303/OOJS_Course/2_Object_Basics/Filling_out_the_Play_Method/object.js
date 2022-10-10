const player1 = {
    name: 'Ashley',
    color: 'purple',
    isTurn: true,
    play: function(){
        if(this.isTurn === true){
            return `${this['name']} is now playing!`
        }
    }
}
