declare module '*.astro' {
  const Component: (_props: Record<string, unknown>) => unknown;
  export default Component;
}

import 'schema-dts';
declare module 'schema-dts' {
  export type HowToThing = HowTo;
}

