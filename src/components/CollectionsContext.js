import React from 'react';

const CollectionsContext = React.createContext({
  collections: []
});

export const withCollectionsContext = Component => {
  return props => (
    <CollectionsContext.Consumer>
      {context => <Component {...props} context={context} />}
    </CollectionsContext.Consumer>
  );
};

export default CollectionsContext;
