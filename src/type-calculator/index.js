import weaknessCalc from "./weakness-calc";
import weakness from "./type-weakness.json"

function TypeCalculator() {
    return (
        <h1>
            Type Calculator
            {weakness["normal"]}
        </h1>
    );
}

export default TypeCalculator;