

function use() {
    //define jumper start position and dimensions
    this.x = w/2
    this.y = 70
    this.width = 30
    this.height = 30



    //show what object looks like
    this.show = function() {
        fill(0,230,20)
        rect(this.x,this.y,this.width,this.height)
    }

    //handle updating the object
    this.update = function() {
        

        if (this.y < 50) {
            this.y = 50
            this.velocity = 0
        }

        if (this.x ) {
            this.x = 0
        }

        if (this.x > (w-30)) {
            this.x = w - 30
        
        }
    }
}