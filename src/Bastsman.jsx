import { useState } from "react"

export default function Batsman (){

    const [runs, setRuns] = useState(0)
    const [sixes, setSixes] = useState(0)

    const handleSingle=()=>{
        const updateRuns = runs + 1;
        setRuns(updateRuns)
    }

    const handleSix = () => {
        const updateSix = runs +6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes)
        setRuns(updateSix);
    }

    const handleFour=()=>{
        const updateFour = runs +4;
        setRuns(updateFour);
    }
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <h1>Score: {runs}</h1>
            <p><small>six: {sixes}</small></p>
            {
                runs > 50 && <p>Your Score : 50 </p>
            }
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>

    )
}