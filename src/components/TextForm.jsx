import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("UpperCase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{  // For listening
        console.log("On change");
        setText(event.target.value); // The state text is updated here on typing on the form
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = ()=> {
        let newText = '';
        setText(newText);
    }
        
    // Lecture 11:
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    } 


    const[text, setText] = useState('Enter text here'); // Here 'Enter text here' is the default text inside text variable
    // text = "new text"; // wrong way to change the state
    // setText("new text"); // correct way to change the state


    // Experiment
        const utterance = new SpeechSynthesisUtterance(text); // For Web Speech API
        const [isPaused, setIsPaused] = useState(false);
        const [utterence, setUtterence] = useState(null);

        const handlePlay = () => {
            const synth = window.speechSynthesis;
        
            if (isPaused) {
            synth.resume();
            }
        
            synth.speak(utterance);
        
            setIsPaused(false);

            props.showAlert("Now Playing", "success");
        };
        
        const handlePause = () => {
            const synth = window.speechSynthesis;
        
            synth.pause();
        
            setIsPaused(true);
            props.showAlert("Paused", "success");
        };
        
        const handleStop = () => {
            const synth = window.speechSynthesis;
        
            synth.cancel();
        
            setIsPaused(false);
            props.showAlert("Stopped", "success");
        };


    return (
        <>

            <div className="container-fluid" style={{color: props.mode === 'dark'? 'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">                                                 
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey':'white', 
            color: props.mode === 'dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handlePlay}>Play</button>
                <button className="btn btn-primary mx-1" onClick={handlePause}>Pause</button>
                <button className="btn btn-primary mx-1" onClick={handleStop}>Stop</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>

            <div className="container-fluid my-3 w-100" style={{color: props.mode === 'dark'? 'white':'#042743'}}>
                <h2>Text Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read the text.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox here to preview it here."}</p>
            </div>
        </>
        
    )
}
