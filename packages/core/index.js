import { makeInstaller } from "@zhu-element/utils";
import components from "./components";
import "@zhu-element/theme/index.css"
const installer = makeInstaller(components);

export * from "@zhu-element/components";
export default installer;