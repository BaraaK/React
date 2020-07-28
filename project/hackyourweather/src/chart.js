import React from 'react';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from "recharts";


function chart({dataToDraw}) {
    return (
        <LineChart
                width={500}
                height={500}
                data={dataToDraw}
                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
            >
                <XAxis dataKey="name" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={1} />
                <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
            </LineChart>
    );
}

export default chart;