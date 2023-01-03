import { createBoard } from '@wixc3/react-board';
import React from 'react';
import { AxisOptions, Chart } from 'react-charts';

type DailyStars = {
    date: Date;
    stars: number;
};

type Series = {
    label: string;
    data: DailyStars[];
};

const data: Series[] = [
    {
        label: 'React Charts',
        data: [
            {
                date: new Date(),
                stars: 202123,
            },
        ],
    },
    {
        label: 'React Query',
        data: [
            {
                date: new Date(),
                stars: 10234230,
            },
        ],
    },
];
function App() {
    const primaryAxis = React.useMemo(
        (): AxisOptions<DailyStars> => ({
            getValue: (datum) => datum.date,
        }),
        []
    );

    const secondaryAxes = React.useMemo(
        (): AxisOptions<DailyStars>[] => [
            {
                getValue: (datum) => datum.stars,
            },
        ],
        []
    );

    return (
        <Chart
            options={{
                data,
                primaryAxis,
                secondaryAxes,
            }}
        />
    );
}

export default createBoard({
    name: 'react-chart',
    Board: () => (
        <div>
            <App />
        </div>
    ),
});
