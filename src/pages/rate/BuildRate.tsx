import React from 'react';
import {Line} from 'react-chartjs-2';

function BuildRate(){
    const xVals = generateNumbers(100);
    const formula = (n : number) => chanceFormula(0.02, n);
    const yVals = applyFormula(xVals, formula) as number[];
    console.log("data", xVals, yVals);
    const data = {
        labels : xVals,
        datasets: [{
            label: "test",
            data: yVals
        }]
    };
    return <div>
        <Line data={data} />
    </div>
}

function applyFormula(values : number[], formula : Function) {
    const results = new Array<any>();
    values.forEach(value => {
        const ans = formula(value);
        results.push(ans);
    });
    return results;
}

function generateNumbers(length : number) : Array<number> {
    if(length <= 0){
        return [];
    }
    const array = new Array<number>();
    for(let i = 0; i < length; i++){
        array.push(i);
    }
    return array;
}

function chanceFormula(rate : number, times : number) : number {
    return 1 - Math.pow(1 - rate, times);
}

export default BuildRate;