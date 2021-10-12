import { backgroundColors, effects, fontColors, Reset, Effect, FontColor, BackgroundColor, Color } from './model';

export interface ColorOptions {
    font?: FontColor;
    background?: BackgroundColor;
    effects?: Effect[];
}

function addColor(text: string, color: Color, isBackground: boolean = false) {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}
function getEffects(effectList: Effect[]) {
    return effectList.map(effect => effects[effect]).join('');
}
export function color(text: string, options: ColorOptions) {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
