declare module '*.svg' {
    const content: string;
    export default content;
  }
  
  declare module '*.svg?component' {
    import * as React from 'react';
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
  }
