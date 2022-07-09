const s = document.getElementById("screen")
const ball = document.createElement('div')
ball.style.width = 100
ball.style.height = 100
ball.style.borderRadius = '50px'
ball.style.backgroundColor = 'red'
ball.style.border = '2px solid black'
ball.style.position = 'absolute'
let x = Math.floor(Math.random()*(window.innerWidth-100))
let y = Math.floor(Math.random()*(window.innerHeight-100))
let dx = (Math.floor(Math.random()*10)+1)*(Math.round(Math.random())*2-1)
let dy = (Math.floor(Math.random()*10)+1)*(Math.round(Math.random())*2-1)
const root = document.querySelector(':root')
setInterval(()=>{
	let hue = Math.floor(Math.random()*100)
	root.style.setProperty('--hue',hue)
},5000)
function paint(){
	s.appendChild(ball)
	if(x+100 > window.innerWidth){
		dx*=-1
	}
	if(x < 0){
		dx*=-1
	}
	if(y+100 > window.innerHeight){
		dy*=-1
	}
	if(y < 0){
		dy*=-1
	}
	x+=dx
	y+=dy
	ball.style.left = x
	ball.style.top = y
	
	requestAnimationFrame(paint)
}
paint()