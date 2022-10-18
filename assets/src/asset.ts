import { EventSourcedEntity, Reply } from "@kalix-io/kalix-javascript-sdk";
import { AssetService } from "../lib/generated/asset";

const entity: AssetService = new EventSourcedEntity(
  [
    "assets.proto"
  ],
  "example.assets.AssetService",
  "asset",
  {
    includeDirs: ["./proto"]
  }
);

const Asset = entity.lookupType("example.assets.Asset");
const CheckedIn = entity.lookupType("example.assets.CheckedIn");

entity.setInitial(entityId => Asset.create({}));

entity.setBehavior(state => ({
  commandHandlers: {
    CheckIn(command, state, ctx) {
      // Do any necessary validation here
      
      ctx.emit(CheckedIn.create({location: command.location}));
      return Reply.message({});
    },
    Get(command, state, ctx) {
      return Reply.message(state);
    }
  },
  
  eventHandlers: {
    CheckedIn(event, state) {
      state.location = event.location;
      return state;
    }
  }
}));

export default entity;
