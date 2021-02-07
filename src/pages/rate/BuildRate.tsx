import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Slider,
    Grid,
    makeStyles,
    TextField,
    InputAdornment,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    layer: {
        padding: 'auto',
        height: '100%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    content: {
        flex: '1 0 auto',
    },
    section: {
        marginBottom: '1vh',
    },
    title: {
        marginBottom: '3%',
    },
    main: {
        padding: '1vw',
    },
    chart: {
        padding: '0 5vh',
        overflowX: 'hidden',
    },
}));

const minBuild = 0;
const maxBuild = 600;

const chartOptions = {
    maintainAspectRatio: false,
    scales: {
        yAxes: [
            {
                scaleLabel: {
                    display: true,
                    labelString: 'Chance to get at least one ship',
                },
                ticks: {
                    callback: (value, index, values) => {
                        return chanceToPercent(value);
                    },
                },
            },
        ],
        xAxes: [
            {
                scaleLabel: {
                    display: true,
                    labelString: 'Number of builds',
                },
            },
        ],
    },
    tooltips: {
        callbacks: {
            label: function (tooltipItem, data) {
                var label = data.datasets[tooltipItem.datasetIndex].label || '';

                if (label) {
                    label += ' = ';
                }

                label += chanceToPercent(tooltipItem.yLabel, 2);
                return label;
            },
        },
    },
};

function BuildRate() {
    const classes = useStyles();

    const [pulls, setPulls] = useState(100);
    const [buildRate, setBuildRate] = useState(2);
    //buildrate is %, buildchance is decimal
    const buildChance = percentToChance(buildRate);
    const xVals = generateNumbers(pulls);
    const formula = (n: number) => chanceFormula(buildChance, n);
    const yVals = applyFormula(xVals, formula) as number[];
    const data = {
        labels: xVals,
        datasets: [
            {
                label: `Chance of getting a ship of rate ${buildRate}%`,
                data: yVals,
            },
        ],
    };

    const handleSliderChange = (event, newValue) => {
        setPulls(newValue);
    };

    const handleInputChange = (event) => {
        setPulls(event.target.value);
    };

    const handleRateChange = (event) => {
        setBuildRate(event.target.value);
    };

    const chartHeight = getVH(60);
    const chartWidth = getVW(90);

    return (
        <div className={classes.main}>
            <h1 className={classes.title}>
                Chance to get at least one rate up ship
            </h1>
            <Grid
                container
                spacing={3}
                alignItems={'stretch'}
                justify={'center'}
            >
                <Grid item xs={5}>
                    <Slider
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        value={pulls}
                        onChange={handleSliderChange}
                        step={1}
                        marks
                        min={minBuild}
                        max={maxBuild}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label={'Number of builds'}
                        type={'number'}
                        variant={'outlined'}
                        value={pulls}
                        onChange={handleInputChange}
                        InputProps={{ inputProps: { min: minBuild } }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label={'Build rate'}
                        type={'number'}
                        variant={'outlined'}
                        value={buildRate}
                        InputProps={{
                            inputProps: { min: 0, max: 100, step: 0.5 },
                            endAdornment: (
                                <InputAdornment position="end">
                                    %
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleRateChange}
                    />
                </Grid>
            </Grid>
            <div className={classes.chart}>
                <Line
                    data={data}
                    options={chartOptions}
                    width={chartWidth}
                    height={chartHeight}
                />
            </div>
        </div>
    );
}

function getVW(percent: number): number {
    let width: number;
    if (window.innerWidth !== undefined) {
        width = window.innerWidth;
    } else {
        width = document.documentElement.clientWidth;
    }
    return (width * percent) / 100;
}

function getVH(percent: number): number {
    let height: number;
    if (window.innerHeight !== undefined) {
        height = window.innerHeight;
    } else {
        height = document.documentElement.clientHeight;
    }
    return (height * percent) / 100;
}

function chanceToPercent(chance: number, dp: number | null = null) {
    let percent: string | number = chance * 100;
    if (dp !== null) {
        percent = percent.toFixed(dp);
        if (parseFloat(percent) >= 100) {
            percent = 'almost 100';
        }
    }
    return `${percent}%`;
}

function percentToChance(percent: string | number) {
    const number = parseFloat(percent + '');
    return number / 100;
}

function applyFormula(values: number[], formula: Function) {
    const results = new Array<any>();
    values.forEach((value) => {
        const ans = formula(value);
        results.push(ans);
    });
    return results;
}

function generateNumbers(length: number): Array<number> {
    if (length <= 0) {
        return [];
    }
    const array = new Array<number>();
    for (let i = 0; i < length; i++) {
        array.push(i);
    }
    return array;
}

function chanceFormula(rate: number, times: number): number {
    return 1 - Math.pow(1 - rate, times);
}

export default BuildRate;
