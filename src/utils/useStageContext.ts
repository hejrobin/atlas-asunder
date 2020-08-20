import { useContext } from 'react';

import { StageContext } from 'views/components/stage/Stage';

const useStageContext = () => useContext(StageContext);

export default useStageContext;
