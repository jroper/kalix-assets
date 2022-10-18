import { Kalix } from "@kalix-io/kalix-javascript-sdk";
import byLocationView from "./assetsbylocation";

new Kalix()
  .addComponent(byLocationView)
  .start();
