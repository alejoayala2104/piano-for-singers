/**
 * Combine events in a single function
 * https://stackoverflow.com/questions/51791167/combining-mouse-click-and-enter-key-press-in-the-same-event-listener
 */


// All the keys
const keys = document.querySelectorAll(".key");
const keysArray = [...keys]
// Buttons to add or substract octaves
const addOctaveButton = document.querySelector("#add-octave");
const subtractOctaveButton = document.querySelector("#subtract-octave");

const optionsDropdown = document.querySelector("#options-dropdown");

// Audiosynth.js piano instance to play notes
const pianoInstrument = Synth.createInstrument("piano");

// let keynotes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]

// First octave for the piano to be loaded in.
var firstOctave = 2;
var secondOctave = 3;
var thirdOctave = 4;

/**
 * Sets the octave for every key according to its position, meaning if it's low or high in pitch.
 * Also, it changes the label in the key accordingly.
 */
 const updateKeys = () => {
    keys.forEach((key, index) =>{
        if (index <= 11) {
            key.dataset.octave = firstOctave;
        }
        else if(index <= 23){
            key.dataset.octave = secondOctave;
        }else{
            key.dataset.octave = thirdOctave;            
        }
        key.innerHTML = key.dataset.note + key.dataset.octave;
    });
};

// Updates the keys when this script is loaded
updateKeys();
       
/**
 * Single option.
 * Adds the event to every key according to its note and octave.
 */
keys.forEach(key =>{
    key.addEventListener("click", (event) => {
        playNotes("123",event.target)
        // pianoInstrument.play(key.dataset.note, key.dataset.octave, 2);        
    });
});

function playNotes(option,key){
    if(option=="single"){
        pianoInstrument.play(key.dataset.note, key.dataset.octave, 2);
    }
    else if(option=="123"){        
        majorSecond = keysArray[keysArray.indexOf(key) + 2]
        majorThird = keysArray[keysArray.indexOf(key) + 4]
        pianoInstrument.play(key.dataset.note, key.dataset.octave, 1);

        setTimeout(() => {
            pianoInstrument.play(majorSecond.dataset.note, majorSecond.dataset.octave, 2);
            setTimeout(() => {
                pianoInstrument.play(majorThird.dataset.note, majorThird.dataset.octave, 2);                
            }, 200);
        }, 200);

    }
}

const addOctave = () =>{
    if(firstOctave<4){
        firstOctave++;
        secondOctave++;
        thirdOctave++;
    }
    updateKeys();
};
const subtractOctave = () =>{
    if(firstOctave>2){
        firstOctave--;
        secondOctave--;
        thirdOctave--;
    }
    updateKeys();
};


// optionsDropdown.addEventListener("change", (event) => {
//     selectedOption = event.target.value;
//     if (selectedOption == "single"){       
        
//     }
//     else if(selectedOption == "123"){
//         console.log("Im playing 123")
//     }
// });





