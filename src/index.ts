import {Colors} from "./ColorsBased";
import Color = Colors.Color;

const toHex = (color: Color) => {

    return color.toString(16);
}

function main()  {

    let colorR = Colors.getColorR(254 + 1) as Color;
    let colorG = Colors.getColorR(254 + 1) as Color;
    let colorB = Colors.getColorR(254 + 1) as Color;

    console.log(toHex(colorR) + toHex(colorG) + toHex(colorB));
    console.log(`R: ${colorR}, G: ${colorG}, B: ${colorB}`);
}

main();
