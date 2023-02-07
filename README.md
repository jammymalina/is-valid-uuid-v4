[![Build Status](https://travis-ci.com/jammymalina/is-valid-uuid-v4.svg?branch=master)](https://travis-ci.com/jammymalina/is-valid-uuid-v4) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=is-valid-uuid-v4&metric=coverage)](https://sonarcloud.io/dashboard?id=is-valid-uuid-v4) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=is-valid-uuid-v4&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=is-valid-uuid-v4) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=is-valid-uuid-v4&metric=code_smells)](https://sonarcloud.io/dashboard?id=is-valid-uuid-v4)

# is-valid-uuid-v4

Tests if a string is valid uuid v4.

## Install

npm i -S is-valid-uuid-v4

## Usage

Javascript:

```javascript
const isValidUUIDV4 = require("is-valid-uuid-v4").isValidUUIDV4;
isValidUUIDV4("93803acc-a876-4e38-9ed6-3ee87f0dfc76"); // true
```

Typescript:

```typescript
import { isValidUUIDV4 } from "is-valid-uuid-v4";
isValidUUIDV4("93803acc-a876-4e38-9ed6-3ee87f0dfc76"); // true
```
