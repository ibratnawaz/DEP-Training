class Torch {
    constructor(){
      this.states=[new Yellow(),new Green(),new Red()]
      this.currentState = new Red();
      this.count=0;
    }

    change() {
      if(this.count>=this.states.length) this.count=0;
      this.currentState=this.states[this.count];
      this.currentState.go();
      this.count++;
    }

    start() {
        this.currentState.go();
        this.change();
    }
}

class Red{
    go() {
      console.log("Red");
    }
}

class Yellow{
    go() {
      console.log("Yellow");
    }
}

class Green{
    go() {
      console.log("Green\n");
    }
}

function run() {

    var light = new Torch();
    light.start();
    for (var i = 0; i < 10; i++) {
      light.change();
    }
}

run()
