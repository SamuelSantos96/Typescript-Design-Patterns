interface IPhone {
    useLightning();
}

interface Android {
    useMicroUsb();
}

class IPhone7 implements IPhone {
    public useLightning() {
        console.log("Using lightning port...");
    }
}

class GooglePixel implements Android {
    public useMicroUsb() {
        console.log("Using micro USB...");
    }
}

class LightningToMicroUsbAdapter implements Android {
    iphoneDevice = new IPhone7();

    constructor(iphoneDevice: IPhone7) {
        this.iphoneDevice = iphoneDevice;
    }

    public useMicroUsb() {
        console.log("I want to use micro USB, converting to Lightning...");
        this.iphoneDevice.useLightning();
    }
}

let iphone = new IPhone7();
let chargeAdapter = new LightningToMicroUsbAdapter(iphone);

chargeAdapter.useMicroUsb(); 