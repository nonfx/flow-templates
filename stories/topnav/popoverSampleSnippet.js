export default `
<script>
/**
 * Refer following code to open popover and switch theme.
 * You need to convert based on framework that you are using.
 * Note : supported theme values \`f-dark\`, \`f-light\`
 */
/**
 * import config module to set theme
 */
import { ConfigUtil } from "@cldcvr/flow-core";

/**
 * default values
 */
const args={
	open: false,
	theme: "f-dark",
}
/**
 * handle method called to open or close popover
 */
const toggle = () => {
	args.open=!args.open;
  };
/**
 * To update theme
 */
const setTheme = (theme) => {
	ConfigUtil.setConfig({ theme });
};
</script>

`;
