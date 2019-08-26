//% weight=0 color=#3CB371 icon="\uf0ad"
namespace microbitarduino {

     //% blockId=setdigital block="Joystick's  %pin | for %XY"
    //% weight=100
        //%pin
    export function setdigital(pin: string, XY: string): string {
        return "pinMode"+pin+XY;    
    }
    
}
