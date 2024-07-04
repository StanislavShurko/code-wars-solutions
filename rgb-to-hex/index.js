/**
 * The rgb function is incomplete.
 * Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
 * Valid decimal values for RGB are 0 - 255. 
 * Any values that fall out of that range must be rounded to the closest valid value.
 * 
 * Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
 */
function roundToRGB(value) {
    return Math.min(Math.max(value, 0), 255);
}

function convertColorToHex(value) {
    const base = 16;

    return (Math.floor(value/base).toString(base)  + (value%base).toString(base)).toUpperCase();
}

function rgb(r, g, b) {
    const red = roundToRGB(r);
    const green = roundToRGB(g);
    const blue = roundToRGB(b);

    return `${convertColorToHex(red)}${convertColorToHex(green)}${convertColorToHex(blue)}`
}

console.log(rgb(0, 0, 0)) // 000000;
console.log(rgb(300, 255, 255)) // FFFFFF;