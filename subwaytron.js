function use() {
    
    this.x = w/2
    this.y = 57
    this.width = 30
    this.height = 30
    this.lift = -10
    this.velocity = 0


    this.show = function() {
        rect(this.x,this.y,this.width,this.height)
        fill('green')

    }

    this.update = function() {
        this.y += this.velocity
        this.velocity *= 0.9
        
        if (this.y < 57) {
            this.y = 57
        }

        if (this.x > (w-190)) {
            this.x = w - 190
        
        }

        if (this.x < (158)) {
            this.x = 158
        
        }

        
    }
}

function userHP() {
    this.width = 40
    this.height = 5

    this.show = function() {
        rect(use.x -5, use.y + 35, this.width, this.height)
        fill('red')

    }
    this.update = function() {
        this.x = use.x
        this.y = use.y

        if (zombHit === true) {
            console.log('hi')
            if (this.width >= 0) {
                this.width -= 0.2

            }
            if (this.width <= 0) {
                this.width -= 0
            }
        }

        
        

    }
}


function table() {

    this.x = tableRandomX
    this.y = tableRandomY
    this.width = 100
    this.height = 40


    this.show = function () {
        rect(tableRandomX,tableRandomY,this.width,this.height)  
        fill('blue')
          
    }

    this.update = function() {
        if (use.x > tableRandomX-table.width && use.x < tableRandomX.width && use.y > tableRandomY-table.height && use.y < tableRandomY+table.height) {
            console.log('hi1')
            use.x += 0
            use.y += 0
        }
    }
}


class zombie {
    constructor() {
        this.x = random(158,w-260)
        this.y = random(57,h-85)
        this.speed = random(0.5,2)
        
    }

    draw() {
        console.log(this.speeds)
        ellipse(this.x,this.y,20,20) 
        var zo = createVector (this.x - use.x, this.y - use.y)
        zo.normalize()

        fill('pink')

        if (!zombHit) {
            zombHit = collideRectRect(use.x,use.y,use.width,use.height,this.x,this.y,20,20)
        }

        this.x -= zo.x / this.speed
        this.y -= zo.y / this.speed

        
        //this.x += (use.x - this.x) / this.speed
        //this.y += (use.y - this.y) / this.speed

            
        
    }
}


function bullet() {
    this.x = use.x
    this.y = use.y
    

    this.show = function() {
        line(this.x, this.y, mouseX,mouseY);
        circle(mouseX, mouseY, 5)

        fill('black')

    }

    this.update = function() {
        var m = createVector(bullet.x - mouseX,bullet.y - mouseY)
        m.normalize()

        bullet.x -= m.x *5
        bullet.y -= m.y *5
        console.log('pew')

        
    }
}

//fix table user/zombie collision