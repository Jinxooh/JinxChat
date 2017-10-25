import React from 'react';
import { Loader as SemanticLoader} from 'semantic-ui-react';

const Loader = () => {
  return (
    <div className="loader-container">
      <SemanticLoader active inverted inline/>
    </div>
  );
};

export default Loader;