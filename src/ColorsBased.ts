export namespace Colors {

    export type Color = number | string;

    export const getColorR = (colorR: number)=> {

        return Math.floor(Math.random() * colorR);
    }

    export const getColorG = (colorG: number)=> {

        return Math.floor(Math.random() * colorG);
    }

    export const getColorB = (colorB: number)=> {

        return Math.floor(Math.random() * colorB);
    }

}
