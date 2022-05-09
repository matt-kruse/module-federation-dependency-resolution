import React from 'react';
const moduleFederationConfig = require('../module-federation.config');
const pkg = require('../package.json');
const mfShared = __webpack_share_scopes__;

const Component = (props) => {
    return <div>
      <div>Runtime React: {React.version}</div>
      <div>ModuleFederation Sharing:</div>
      <pre>{JSON.stringify(moduleFederationConfig.shared,null,3)}</pre>
      <div>package.json:</div>
      <pre>{JSON.stringify(pkg.dependencies,null,2)}</pre>
      <div>Shared Scope:</div>
      <pre>{JSON.stringify(mfShared,null,2)}</pre>
    </div>
}

export default Component;
