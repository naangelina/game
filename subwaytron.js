function use() {
    this.x = w/2
    this.y = 57
    this.width = 30
    this.height = 30
    //opposing force 
    this.lift = -10
    //velocity
    this.velocity = 0



    this.show = function() {
        fill(0,230,20)
        rect(this.x,this.y,this.width,this.height)
    }

    this.jump = function() {
        console.log('hi')
        this.velocity += this.lift
        
    }

    //handle updating the object
    this.update = function() {
        this.y += this.velocity
        //air resistence
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



function table() {
    this.x = tableRandomX;
    this.y = tableRandomY
    rect(tableRandomX,tableRandomY,100,40)            

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
    
    }
}