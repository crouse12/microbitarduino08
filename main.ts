//% weight=0 color=#3CB371 icon="\uf0ad" block="Microbitnodemcu"
namespace microbitnodemcu {

     
      export enum digitalpin {
        D0 = 16,
        D1 = 5,
        D2 = 4,
        D3 = 0,
        D4 = 2,
        D5 = 14,
        D6 = 12,
        D7 = 13,
        D8 = 15
     }
      export enum type {
        INPUT = 2,
        OUTPUT = 1
     }
     export enum value {
        HIGH = 1,
        LOW = 0
     }
     //% blockId=setpinmode block="set digital pin %pin | for %XY"
    //% weight=100
    export function setpinmode(pin: digitalpin, XY: type): string {
        return "pinMode="+pin.toString()+","+XY.toString()+"\\n";    
    }
     
     
    //% blockId=setdigital block="set digital pin  %pin | value as %XY"
    //% weight=100
    export function setdigital(pin: digitalpin, XY: value): string {
        return "digitalWrite="+pin.toString()+","+XY.toString()+"\\n";    
    }
}
