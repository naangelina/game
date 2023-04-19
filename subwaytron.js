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
        rect(use.x -5, use.y + 40, this.width, this.height)
        fill('red')

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

        if (zombHit2 === true) {
            console.log('him')
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

function zomb() {
    this.show = function() {
        this.x = zombRandomX
        this.y = zombRandomY
        rect(zombRandomX,zombRandomY,20,20) 
        fill('pink') //zomb2
    } 

    this.update = function() {
        if (zombHitTable === false) {
            zombRandomX += (use.x - zombRandomX) / zombSpeed
            zombRandomY += (use.y - zombRandomY) / zombSpeed
        }
    }
}

function zomb2() {

    this.show = function() {
        this.x = zombRandomX2
        this.y = zombRandomY2
        rect(zombRandomX2,zombRandomY2,20,20) 
        fill('#964B00') //table

    } 

    this.update = function() {
        if (zombHitTable === false) {
            zombRandomX2 += (use.x - zombRandomX2) / zombSpeed
            zombRandomY2 += (use.y - zombRandomY2) / zombSpeed
        }
    }
}