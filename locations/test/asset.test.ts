/* This code was initialised by Kalix tooling.
 * As long as this file exists it will not be re-generated.
 * You are free to make changes to this file.
 */

import { MockEventSourcedEntity } from "@kalix-io/testkit";
import { expect } from "chai";
import asset from "../src/asset";

describe("AssetService", () => {
  const entityId = "entityId";
  
  describe("CheckIn", () => {
    it("should...", async () => {
      const entity = new MockEventSourcedEntity(asset, entityId);
      // TODO: you may want to set fields in addition to the entity id
      // const result = await entity.handleCommand("CheckIn", { entityId });
      
      // expect(result).to.deep.equal({});
      // expect(entity.error).to.be.undefined;
      // expect(entity.state).to.deep.equal({});
      // expect(entity.events).to.deep.equal([]);
    });
  });
  
  describe("Get", () => {
    it("should...", async () => {
      const entity = new MockEventSourcedEntity(asset, entityId);
      // TODO: you may want to set fields in addition to the entity id
      // const result = await entity.handleCommand("Get", { entityId });
      
      // expect(result).to.deep.equal({});
      // expect(entity.error).to.be.undefined;
      // expect(entity.state).to.deep.equal({});
      // expect(entity.events).to.deep.equal([]);
    });
  });
});