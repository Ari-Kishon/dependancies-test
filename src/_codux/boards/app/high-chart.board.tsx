import { createBoard } from '@wixc3/react-board';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
        type: 'spline',
    },
    title: {
        text: 'My chart',
    },
    series: [
        {
            data: [1, 2, 1, 4, 3, 6],
        },
    ],
};

export default createBoard({
    name: 'highChart',
    Board: () => (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    ),
});
