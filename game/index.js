const canvas = document.querySelector("canvas")

const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }

}

class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }

    update() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

const x = canvas.width / 2
const y = canvas.height / 2

const player = new Player(x, y, 30, 'green')

player.draw()


// const projectile = new Projectile(canvas.width / 2, canvas.height / 2, 5, "red", { x: 1, y: 1 })
// const projectile2 = new Projectile(canvas.width / 2, canvas.height / 2, 5, "blue", { x: -1, y: -1 })

const projectiles = []

function animate() {
    requestAnimationFrame(animate)

    //projectile.draw()
    //projectile.update()

    projectiles.forEach(projectile => {
        projectile.update()
    })
    //console.log("go")
}

window.addEventListener("click", (event) => {
    //console.log()

    // const angle = Math.atan2()

    projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, 5, "red", { x: 1, y: 1 }))
})

animate()