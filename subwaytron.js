function use() {
    this.x = w/2
    this.y = 57
    this.width = 30
    this.height = 30


    this.show = function() {
        fill(0,230,20)
        rect(this.x,this.y,this.width,this.height)
    }

    //handle updating the object
    this.update = function() {
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