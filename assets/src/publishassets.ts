/* This code was initialised by Kalix tooling.
 * As long as this file exists it will not be re-generated.
 * You are free to make changes to this file.
 */

import { Action, Reply, Metadata } from "@kalix-io/kalix-javascript-sdk";
import { PublishAssets } from "../lib/generated/publishassets";

const action: PublishAssets = new Action(
  [
    "assets_publisher.proto",
    "assets.proto",
    "kalix_policy.proto"
  ],
  "example.assets.PublishAssets",
  {
    includeDirs: ["./proto"]
  }
);

action.commandHandlers = {
  HandleCheckedIn(request, ctx) {
    const metadata = new Metadata();
    metadata.cloudevent.subject = ctx.metadata.cloudevent.subject;
    metadata.cloudevent.time = ctx.metadata.cloudevent.time;
    return Reply.message(request, metadata);
  }
};

export default action;
