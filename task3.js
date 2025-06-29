let player = {
    name: "Oyuncu",
    health: 100,

    attack(zerer) {
        this.health = this.health - zerer;
        if (this.health < 0) {
            this.health = 0;
        }
        console.log("Sağlamlıq: " + this.health);
    },

    heal(miqdar) {
        this.health = this.health + miqdar;
        if (this.health > 100) {
            this.health = 100;
        }
        console.log("Sağlamlıq: " + this.health);
    }
};

player.attack(40);
player.heal(30);
player.attack(100);