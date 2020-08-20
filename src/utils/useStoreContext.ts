import { useContext } from 'react';

import { StoreContext } from 'data/state';

const useStoreContext = () => useContext(StoreContext);

export default useStoreContext;
