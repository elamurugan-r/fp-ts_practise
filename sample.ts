import * as A from "fp-ts/ReadonlyArray";
import * as R from "fp-ts/ReadonlyRecord";
import { pipe } from "fp-ts/function";

const arrayToRecord = <A>(
  items: ReadonlyArray<A>,
  keyGetter: (i: A) => string,
): Readonly<Record<string, A>> =>
  pipe(
    items,
    A.reduce({}, (acc, item) => pipe(acc, R.upsertAt(keyGetter(item), item))),
  )

  const xs = [
    { id: 'abc', date: new Date() },
    { id: 'snt', date: new Date() },
  ]
  const res = arrayToRecord(xs, (x) => x.id)
  
  console.log(res)