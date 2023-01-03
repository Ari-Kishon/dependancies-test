import { createBoard } from '@wixc3/react-board';
import { Flow } from '../../../components/react-flow/react-flow';

export default createBoard({
    name: 'ReactFlow',
    Board: () => <Flow />,
    environmentProps: {
        canvasWidth: 344,
        canvasHeight: 420
    },
});
