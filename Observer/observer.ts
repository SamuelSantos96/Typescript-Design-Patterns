interface Subject {
    registerObserver(obs: Observer);
    removeObserver(obs: Observer);
    notifyObservers();
}

interface Observer {
    update(temperature: number);
}

class WeatherStation implements Subject {
    private temperature: number;
    private observers: Observer[] = [];

    setTemperature(temp: number) {
        console.log("WeatherStation: new temperature measurement:", temp);
        this.temperature = temp;
        this.notifyObservers();
    }

    registerObserver(obs: Observer) {
        this.observers.push(obs);
    }

    removeObserver(obs: Observer) {
        let index = this.observers.indexOf(obs);
        this.observers.splice(index, 1);
    }

    notifyObservers() {
        this.observers.map((obs) => {
            obs.update(this.temperature);
        })
    }
}

class TemperatureDisplay implements Observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this)
    }

    update(temperature: number) {
        console.log("TemperatureDisplay:", temperature);
    }
}

class Fan implements Observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this)
    }

    update(temperature: number) {
        if (temperature > 25) console.log("Fan: It's hot here, turning myself on...");
        else console.log("Fan: It's nice and cool, turning myself off...");
    }
}

let weatherStation = new WeatherStation();

let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);

