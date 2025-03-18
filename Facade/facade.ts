class BlurayPlayer {
    on() {
        console.log("Bluray player turning on...");
    }

    off() {
        console.log("Bluray player turning off...");
    }

    play() {
        console.log("Playing Bluray disc...");
    }
}

class Amplifier {
    on() {
        console.log("Amp player turning on...");
    }

    off() {
        console.log("Amp player turning off...");
    }

    setSource(source: string) {
        console.log("Setting source to", source);
    }

    setVolume(volume: number) {
        console.log("Setting volume to", volume);
    }
}

class Lights {
    dim() {
        console.log("Lights are dimming...");
    }
}

class TV {
    on() {
        console.log("TV turning on...");
    }

    off() {
        console.log("TV turning off...");
    }
}

class PopcornMaker {
    on() {
        console.log("Popcorn Maker turning on...");
    }

    off() {
        console.log("Popcorn Maker turning off...");
    }

    pop() {
        console.log("Popping Corn!");
    }
}

class HomeTheaterFacade {
    private blurayPlayer: BlurayPlayer;
    private amp: Amplifier;
    private lights: Lights;
    private tv: TV;
    private popcornMaker: PopcornMaker;

    constructor(blurayPlayer: BlurayPlayer, amp: Amplifier, lights: Lights, tv: TV, popcornMaker: PopcornMaker) {
        this.blurayPlayer = blurayPlayer;
        this.amp = amp;
        this.lights = lights;
        this.tv = tv;
        this.popcornMaker = popcornMaker;
    }

    public watchMovie() {
        this.popcornMaker.on();
        this.popcornMaker.pop();

        this.lights.dim();

        this.tv.on();

        this.amp.on();
        this.amp.setSource("bluray");
        this.amp.setVolume(12);

        this.blurayPlayer.on();
        this.blurayPlayer.play();
    }

    public endMovie() {
        this.popcornMaker.off();

        this.tv.off();

        this.amp.off();

        this.blurayPlayer.off();
    }
}

let blurayPlayer = new BlurayPlayer();
let amp = new Amplifier();
let lights = new Lights();
let tv = new TV();
let popcornMaker = new PopcornMaker();

let homeTheater = new HomeTheaterFacade(blurayPlayer, amp, lights, tv, popcornMaker);
homeTheater.watchMovie();