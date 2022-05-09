import React from 'react';
const moduleFederationConfig = require('../module-federation.config');
const pkg = require('../package.json');

const Component = React.lazy(()=>import('ComponentLibrary/Component'));
const mfShared = __webpack_share_scopes__;

const HostComponent = (props) => {
  return <div>
    <div>Runtime React: {React.version}</div>
    <div>ModuleFederation Sharing:</div>
    <pre>{JSON.stringify(moduleFederationConfig.shared,null,2)}</pre>
    <div>package.json:</div>
    <pre>{JSON.stringify(pkg.dependencies,null,2)}</pre>
    <div>Shared Scope:</div>
    <pre>{JSON.stringify(mfShared,null,2)}</pre>
  </div>
};

const css = `
td { border:1px solid #666; vertical-align:top; }
`;

const App = () => {
  return <div>
    <style>{css}</style>
    <table>
      <thead>
        <tr>
          <th>Host</th>
          <th>MFE</th>
          <th>Console Warnings</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><HostComponent/></td>
          <td><React.Suspense fallback={"Loading..."}><Component/></React.Suspense></td>
          <td id={"warnings"}></td>
        </tr>
      </tbody>
    </table>
  </div>
};

export default App;
