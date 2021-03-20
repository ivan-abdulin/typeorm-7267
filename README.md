# typeorm-7267

#### Foreword
This is the minimal project to verify that 'typeorm-typedi-extensions' update from 0.4.0 to 0.4.1 fixes the issue with ServiceNotFound errors thrown from typedi.

Original issue https://github.com/typeorm/typeorm/issues/7267

Related type-graphql issue https://github.com/MichalLytek/type-graphql/issues/775

All magic happens here

Replace older (pre-0.4.1) line
```typescript
import { Container } from 'typedi'
```

With
```typescript
import { Container } from 'typeorm-typedi-extensions'
```

You could just uncomment import in index.ts to verify that Container from typeorm-typedi-extensions works.


#### Usage
Install packages with yarn

```bash
yarn
```

Run example with
```bash
yarn start
```

#### P.S.
If you receive "ServiceNotFound" in *your* project when getting Resolvers - just decorate them with @Service

See https://github.com/MichalLytek/typegraphql-prisma/issues/63 for details
