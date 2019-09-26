import Typography from "typography";
import sutroTheme from "typography-theme-sutro";
sutroTheme.bodyWeight = "400";

const typography = new Typography(sutroTheme);
const { rhythm, scale } = typography;

export { rhythm, scale, typography as default };
