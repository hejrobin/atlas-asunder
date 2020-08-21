import styled from 'styled-components';

import Paragraph from 'views/components/text/Paragraph';

const Actions = styled(Paragraph)`
	margin-top: 2rem;
	display: inline-grid;
	grid-auto-flow: column;
	justify-content: start;
	column-gap: 2rem;
`;

export default Actions;
