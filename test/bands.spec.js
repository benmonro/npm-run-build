/* global describe, it */
import bands from "../src/bands.js";

describe("Bands I like", () => {
  it("should include queens of the stone age", () => {
    bands.should.include("queens of the stone age");
  });

  it("should include iggy and dolly", () => bands.should.include.members(["dolly parton", "iggy pop"]))
});
