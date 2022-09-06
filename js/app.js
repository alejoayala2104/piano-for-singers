const keys = document.querySelectorAll('.key');
const addOctaveButton = document.querySelector('#add-octave')
const subtractOctaveButton = document.querySelector('#subtract-octave')

const pianoSounds = Synth.createInstrument('piano')
// pianoSounds.play('C', 4, 2);

// let keynotes = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']

var firstOctave = 1
var secondOctave = 2
var thirdOctave = 3

const addOctave = () =>{
    if(firstOctave<4){
        firstOctave++;
        secondOctave++;
        thirdOctave++;
    }
    updateKeys()    
}

const subtractOctave = () =>{
    if(firstOctave>1){
        firstOctave--;
        secondOctave--;
        thirdOctave--;
    }
    updateKeys()
}

const updateKeys = () => {
    keys.forEach((key, index) =>{
        if (index <= 11) {
            key.innerHTML = key.dataset.note + firstOctave
        }
        else if(index <= 23){
            key.innerHTML = key.dataset.note  + secondOctave
        }else{
            key.innerHTML = key.dataset.note  + thirdOctave
        }
    })
}

updateKeys()
