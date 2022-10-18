import { Kalix } from "@kalix-io/kalix-javascript-sdk";
import assetEntity from "./asset";
import assetPublisher from "./publishassets";

new Kalix()
  .addComponent(assetEntity)
  .addComponent(assetPublisher)
  .start();
