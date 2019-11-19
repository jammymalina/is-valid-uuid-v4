import "mocha";
import { expect } from "chai";

import { isValidUUIDV4, uuidRegex } from "../../src/index";

describe("isValidUUIDV4", () => {
  describe("uuidRegex", () => {
    it("uuidRegex should exist", () => {
      expect(uuidRegex).to.exist;
    });
  });

  describe("Valid uuids", () => {
    it("should be valid uuid 1", () => {
      expect(isValidUUIDV4("818c986f-7e16-4c5f-a3b3-ab633368e9b6")).to.be.true;
    });

    it("should be valid uuid 2", () => {
      expect(isValidUUIDV4("8fc96fdc-c74c-4c81-af44-8b4236e6070d")).to.be.true;
    });

    it("should be valid uuid 3", () => {
      expect(isValidUUIDV4("0743d037-c20a-4b60-959b-3e80e62ad506")).to.be.true;
    });

    it("should be valid uuid 4", () => {
      expect(isValidUUIDV4("6ffdf7d9-6cd7-4eb8-bde1-afdec2d92a15")).to.be.true;
    });
  });

  describe("Invalid uuids", () => {
    it("should not be valid uuid - empty string", () => {
      expect(isValidUUIDV4("")).to.be.false;
    });

    it("should not be valid uuid - Hello string", () => {
      expect(isValidUUIDV4("hello")).to.be.false;
    });

    it("should not be valid uuid - random string", () => {
      expect(isValidUUIDV4("ajdpojsdapoj")).to.be.false;
    });

    it("should not be valid uuid - string resembling uuid v4", () => {
      expect(isValidUUIDV4("821adb8d-79ca-424e-b9f0-fdc8048f07al")).to.be.false;
    });
  });
});
