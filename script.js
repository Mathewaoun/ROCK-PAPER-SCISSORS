const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')

const SELECTIONS = [    
    {        
    name: 'rock',        
    emoji: '✊',        
    beats: 'scissors'    
},    
{        
    name: 'paper',        
    emoji: '✋',        
    beats: 'rock'    
},    
    {        
    name: 'scissors',        
    emoji: '✌️',       
    beats: 'paper'    
}]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)  
        makeSelection(selection)
    })
})

function makeSelection(selection){
    const computerSelection = randomselection()
    const youWin = isWinner(selection,computerSelection)
    const computerWin = isWinner(computerSelection,selection)

    addSelectionResult(computerSelection,computerWin)
    addSelectionResult(selection,youWin)

    if(youWin) incrementScore(yourScoreSpan)
    if(computerWin) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection,winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner') 
    finalColumn.after(div)
}

function isWinner(selection,oppenentSelection){
    return selection.beats === oppenentSelection.name
}

function randomselection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]

}
