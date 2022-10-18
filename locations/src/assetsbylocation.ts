/* This code was initialised by Kalix tooling.
 * As long as this file exists it will not be re-generated.
 * You are free to make changes to this file.
 */

import { View } from "@kalix-io/kalix-javascript-sdk";
import { AssetsByLocation } from "../lib/generated/assetsbylocation";

const view: AssetsByLocation = new View(
  [
    "assets_by_location.proto",
    "assets.proto",
    "kalix_policy.proto"
  ],
  "example.locations.AssetsByLocation",
  {
    includeDirs: ["./proto"],
    viewId: "AssetsByLocation"
  }
);

const CustomerState = view.lookupType("example.locations.AssetLocation");

view.setUpdateHandlers({
  UpdateLocation(event, state, ctx) {
      return CustomerState.create({
          assetId: ctx.metadata.cloudevent.subject,
          location: event.location
      });
  }
});

export default view;
