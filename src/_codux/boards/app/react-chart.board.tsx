import { createBoard } from '@wixc3/react-board';
import { ReactChart } from '../../../components/react-chart/react-chart';

export default createBoard({
    name: 'react-chart',
    Board: () => (
        <div>
            <ReactChart />
        </div>
    ),
});
