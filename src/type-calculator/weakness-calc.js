import weakness from "./type-weakness.json";

const weaknessCalc = (type1, type2) => {
    if (type2 == null)
        return weakness[type1]
    else {
        weakness[type1].map((type) => {
            console.log(type)
        })
    }
}

export default weaknessCalc;