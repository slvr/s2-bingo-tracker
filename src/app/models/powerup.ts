export class Powerup {

    type: PowerupType;
    limit: number;

    constructor(type: PowerupType, limit: number) {
        this.type = type;
        this.limit = limit;
    }


}

export enum PowerupType{
    Superfly = 'Superfly',
    Superflame = 'Superflame',
    Supercharge = 'Supercharge',
    Superbounce = 'Superbounce',
    Invincibility = 'Invincibility',
    Superfreeze = 'Superfreeze',
    Dual = 'Dual',
}
