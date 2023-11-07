import * as world from "./world.js";


class Organism {
  constructor(point)
  {
    this.location = point;
    this.velocity = new world.Vector(0,0,0);
    this.energy = 1.0;
  }
  move();
  reproduce();
  displayEnergy();
  death();
}

class Eukaryote extends Organism {
  constructor(point, species)
  {
    super(point);
    this.species = species;
  }

  move(){
    this.location = this.location.translate(velocity * deltaTime);
  }

  displayEnergy(){
    console.log('${this.energy}');
    
  }
  death(){
    if(this.energy <= 0)
    {
      this.velocity = 0;
      
    }
    return true;
  }
}

class Protist extends Eukaryote(point, species)
  {
    constructor(point, species)
    {
      super(point, species);
     
    }

    move(){
      super.move();
      this.energy -= 0.1;
    }

    reproduce(){
      let baby = new Protist(this.location, this.species);
      energy -= 0.5;
      return baby;
    }

  }

class Amoeba extends Protist(point, species)
  {
    constructor(point, species)
    {
      super(point, species);
    }
    
    move()
  }