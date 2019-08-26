//% weight=0 color=#3CB371 icon="\uf0ad"
namespace microbitarduino {
        export enum button {
        //% block="A"
        A,
        //% block="B"
        B,
        //% block="C"
        C,
        //% block="D"
        D,
        //% block="E"
        E,
        //% block="F"
        F,
        //% block="SW"
        SW
   }
       export enum XY {
        //% block="X"
        X,
        //% block="Y"
        Y
    } 
     //% blockId=getXY block="Joystick's  %joystickXY"
    //% weight=100
    export function getXY(joystickXY: XY): number {
        switch (joystickXY) {
            case XY.X: 
                return (1023 - pins.analogReadPin(AnalogPin.P2));
            case XY.Y: 
                return pins.analogReadPin(AnalogPin.P1);
        }
    }
    
}
