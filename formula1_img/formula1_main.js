let des = document.getElementById('des').getContext('2d')

// let carro = new Carro(225,600,50,80,'darkblue')
let carro = new Carro(225,500,45,100,'./assets/carro_01.png')
let c2 = new Carro2(400,-40,45,100,'./assets/carro_02.png')
let c3 = new Carro2(200,-280,45,100,'./assets/carro_03.png')
let ee = new Estrada(2,2,10,696,'yellow')
let ed = new Estrada(488,2,10,696,'yellow')
let ec1 = new Estrada(246,10,10,80,'yellow')
let ec2 = new Estrada(246,150,10,80,'yellow')
let ec3 = new Estrada(246,290,10,80,'yellow')
let ec4 = new Estrada(246,430,10,80,'yellow')
let ec5 = new Estrada(246,570,10,80,'yellow')
let ec6 = new Estrada(246,690,10,80,'yellow')
let ec7 = new Estrada(246,810,10,80,'yellow')

let t1 = new Text()
let t2 = new Text()
let t3 = new Text()
let t4 = new Text()
let t5 = new Text()

let motor = new Audio('./assets/motor.wav')
let batida = new Audio('./assets/batida.mp3')
motor.volume = 0.8
motor.loop = true
batida.volume = 0.8

let jogar = true


document.addEventListener('keydown',(e)=>{
    // console.log(e.key)
    if(e.key === 'a'){
        carro.dir -= 10
    }else if(e.key === 'd'){
        carro.dir += 10
    }
})
document.addEventListener('keyup', (e)=>{
    if(e.key === 'a'){
        carro.dir = 0
    }else if(e.key === 'd'){
        carro.dir = 0
    }
})

function game_over(){
    if(carro.vida <=0){
        jogar = false
        motor.pause()
        // música com o jogo parado
    }
}

function pontos(){
    if(carro.point(c2)){
        carro.pts +=1
    }else if(carro.point(c3)){
        carro.pts += 1
    }
}

function colisao(){
    if(carro.colid(c2)){
        carro.vida -= 1
        c2.recomeca()
        batida.play()
    }else if(carro.colid(c3)){
        carro.vida -= 1
        c3.recomeca()
        batida.play()
    } 
}

function desenha(){
    t1.des_text('Pontos: ',360,40,'yellow','26px Times')
    t2.des_text(carro.pts,460,40,'yellow','26px Times')
    t3.des_text('Vida: ',40,40,'yellow','26px Times')
    t4.des_text(carro.vida,100,40,'yellow','26px Times')

    if(jogar){
        ee.des_estrada()
        ed.des_estrada()
        ec1.des_estrada()
        ec2.des_estrada()
        ec3.des_estrada()
        ec4.des_estrada()
        ec5.des_estrada()
        ec6.des_estrada()
        ec7.des_estrada()
        c2.des_img()
        c3.des_img()
        carro.des_img()
    }else{
        ee.des_estrada()
        ed.des_estrada()
        t5.des_text('Game Over',120,340,'yellow','46px Times')
    }  
}
function atualiza(){
    if(jogar){
        motor.play()
        ec1.mov_est()
        ec2.mov_est()
        ec3.mov_est()
        ec4.mov_est()
        ec5.mov_est()
        ec6.mov_est()
        ec7.mov_est()
        c2.atual_carro2()
        c3.atual_carro2()
        carro.atual_carro()
        carro.anim('carro_01_')
        pontos()
        colisao()
        game_over()
    }
    

}
function main(){
    des.clearRect(0,0,500,700)
    desenha()
    atualiza()
}

setInterval(main,10)