function use() {
    this.x = w/2
    this.y = 60
    this.width = 30
    this.height = 30


    this.show = function() {
        fill(0,230,20)
        rect(this.x,this.y,this.width,this.height)
    }

    //handle updating the object
    this.update = function() {
        if (this.y < 60) {
            this.y = 60
        }


        if (this.x > (w-30)) {
            this.x = w - 30
        
        }
    }
}