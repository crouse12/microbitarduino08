//% weight=0 color=#3CB371 icon="\uf0ad"
namespace microbitarduino {

     
      export enum digitalpin {
        D0 = 0,
        D1 = 1,
        D2 = 2,
        D3 = 3,
        D4 = 4,
        D5 = 5,
        D6 = 6,
        D7 = 7,
        D8 = 8
     }
     //% blockId=setpinmode block="set digital pin %pin | for %XY"
    //% weight=100
    export function setpinmode(pin: digitalpin, XY: number): string {
        return "pinMode("+pin.toString()+","+XY.toString()+")\n";    
    }
     
     
    //% blockId=setdigital block="digital pin  %pin | to %XY"
    //% weight=100
    export function setdigital(pin: number, XY: number): string {
        return "digitalWrite("+pin.toString()+","+XY.toString()+")\n";    
    }
}
