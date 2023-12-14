import "mocha";
import { expect } from "chai";

import { isValidUUIDV4, uuidRegex, uuidRegexString } from "../../src/index";

describe("isValidUUIDV4", () => {
  describe("uuidRegex", () => {
    it("uuidRegex should exist", () => {
      expect(uuidRegex).to.exist;
    });

    it("uuidRegexString should exist", () => {
      expect(uuidRegexString).to.exist;
      expect(uuidRegexString).to.be.a("string");
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

    it("should determine that all of these combinations are valid", () => {
      const uuids = [
        "527218be-a09e-4d0e-86ce-c39d1348d953",
        "14163389-2eea-4e30-9124-fcf2451eb9fc",
        "c21b57cc-2a4e-4425-a2f4-129256562599",
        "37700270-6deb-4a73-bbcd-d47c6e20b567",
      ];

      for (let i = 0; i < uuids.length; i += 1) {
        expect(isValidUUIDV4(uuids[i])).to.be.true;
      }
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

    it("should not be valid uuid - it is uuid v5", () => {
      expect(isValidUUIDV4("d4817bfe-2687-5591-bdc9-2aebfe4c6733")).to.be.false;
    });
  });
});
