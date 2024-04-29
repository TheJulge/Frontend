import React from 'react';

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
declare module '*.svg' {
  const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default value;
}
