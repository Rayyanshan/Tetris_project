document.addEventListener('DOMContentLoaded', () =>{
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button')
    const width = 10

    const ltetromino = [
        [1, width+1, (width*2)+1, 2],
        [width, width+1, width+2, (width*2)+2],
        [1, width+1, (width*2)+1, width*2],
        [(width*2)+2, (width*2)+1, width*2, width]
    ]

    const jtetronimo = [
        [0, 1, width+1, (width*2)+1],
        [2, width+2, width+1, width],
        [(width*2)+2, (width*2)+1, width+1, 1],
        [(width*2), width, width+1, width+2]
    ]

    const stetromino = [
        [(width*2), (width*2)+1, (width)+1, (width)+2],
        [1, width, width+1, (width*2)+1],
        [(width*2), (width*2)+1, (width)+1, (width)+2],
        [1, width, width+1, (width*2)+1]
    ]

    const ztetronimo = [
        [width, width+1, (width*2)+1, (width*2)+2],
        [1, width+1, width, (width*2)],
        [width, width+1, (width*2)+1, (width*2)+2],
        [1, width+1, width, (width*2)]
    ]

    const ttetromino = [
        [1, width, width+1, width+2],
        [width+2, 1, width+1, (width*2)+1],
        [(width*2)+1, width+2, width+1, width],
        [width, 1, width+1, (width*2)+1]
    ]

    const otetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]

    const itetromino = [
        [1, width+1, (width*2)+1, (width*3)+1],
        [width, width+1, width+2, width+3],
        [1, width+1, (width*2)+1, (width*3)+1],
        [width, width+1, width+2, width+3]

    ]

    const tetrominos = [ltetromino, jtetronimo, stetromino, ztetronimo, otetromino,ttetromino, itetromino]


})