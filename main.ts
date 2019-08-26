//% weight=0 color=#3CB371 icon="\uf0ad"
namespace microbitarduino {
        export enum pin1 {
        //% block="0"
        "0",
        //% block="1"
        "1",
        //% block="2"
        "2",
        //% block="3"
        "3",
        //% block="4"
        "4",
        //% block="5"
        "5",
        //% block="6"
        "6",
        //% block="7"
        "7",
        //% block="8"
        "8",
   }
       export enum XY1 {
        //% block="X"
        "X",
        //% block="Y"
        "Y"
    } 
     //% blockId=setdigital block="Joystick's  %pin | for %XY"
    //% weight=100
    export function setdigital(pin: pin1, XY: XY1): string {
        return "pinMode"+pin+XY;    
    }
    
}
