//% weight=0 color=#3CB371 icon="\uf0ad"
namespace microbitarduino {

     //% blockId=setpinmode block="set digital pin %pin | for %XY"
    //% weight=100
    export function setpinmode(pin: number, XY: number): string {
        return "pinMode("+pin.toString()+","+XY.toString()+")\n";    
    }
     
     
    //% blockId=setdigital block="digital pin  %pin | to %XY"
    //% weight=100
    export function setdigital(pin: number, XY: number): string {
        return "digitalWrite("+pin.toString()+","+XY.toString()+")\n";    
    }
}
