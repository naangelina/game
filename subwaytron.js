function use() {
    this.x = w/2
    this.y = 57
    this.width = 30
    this.height = 30
    this.lift = -10
    this.velocity = 0

    this.show = function() {
        fill(0,230,20)
        rect(this.x,this.y,this.width,this.height)
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
        fill('blue')
        rect(use.x -5, use.y + 40, this.width, this.height)
    }
    this.update = function() {
        this.x = use.x
        this.y = use.y

        if (zombHit === true) {
            console.log('hi')
            if (this.width >= 0) {
                this.width -= 0.5

            }
            if (this.width <= 0) {
                this.width -= 0
            }
        }

        

    }
}


function table() {
    this.x = tableRandomX;
    this.y = tableRandomY
    rect(tableRandomX,tableRandomY,100,40)            
    fill('brown')
}

function zomb() {
    this.show = function() {
        this.x = zombRandomX
        this.y = zombRandomY
        rect(zombRandomX,zombRandomY,20,20) 
    } 

    this.update = function() {
        zombRandomX += (use.x - zombRandomX) / zombSpeed
        zombRandomY += (use.y - zombRandomY) / zombSpeed
    
        if (zombHitTable === true) {
            zombRandomX += 0
            zombRandomY += 0
        }
    }

}