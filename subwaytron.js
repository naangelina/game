function use() {
    
    this.x = w/2
    this.y = 57
    this.width = 30
    this.height = 30
    this.lift = -10
    this.velocity = 0
    this.hp = 100; 
    this.setHp = 100; 


    this.show = function() {
        rect(this.x,this.y,this.width,this.height)
        fill('green')

    }

    this.update = function() {
        this.y += this.velocity
        this.velocity *= 0.9
        
        if (this.y < 0) {
            this.y = 0
        }

        if (this.y > h-30) {
            this.y = h-30
        }

        if (this.x > (w-30)) {
            this.x = w-30
        
        }

        if (this.x < (0)) {
            this.x = 0
        
        }

        
    }
}

function userHP() {
    this.width = 40
    this.height = 5

    this.show = function() {
        rect(use.x -5, use.y + 35, this.width*(use.hp/use.setHp), this.height)
        fill('red')

    }
    this.update = function() {
        this.x = use.x
        this.y = use.y

        // if (zombHit === true) {
        //     if (this.width >= 0) {
        //         this.width -= 0.2

        //     }
        //     if (this.width <= 0) {
        //         this.width -= 0
        //     }
        // }
    }
}

function HPbar() {
    this.x = 5
    this.y = 5
    this.width = 100 * (w/5)
    this.height = 20

    this.show = function() {
        rect(this.x,this.y,this.width,this.height)
    }
}

class zombie {
    constructor() {
        this.x = random(158,w-20)
        this.y = random(57,h-20)
        this.speed = random(0.5,2)
        this.hp = 20; 
        this.dmg = 15
    }

    draw() {
        ellipse(this.x,this.y,20,20) 
        var zo = createVector (this.x - use.x, this.y - use.y)
        zo.normalize()

        fill('pink')

        if (!zombHit) {
            zombHit = collideRectRect(use.x,use.y,use.width,use.height,this.x,this.y,20,20)
            if(zombHit && !inv)
            {
                inv = true;
                use.hp -= this.dmg;
                setTimeout(function()
                {
                    inv = false
                }, invTimer*1000)
            }
        }

        this.x -= zo.x / this.speed
        this.y -= zo.y / this.speed

        
        //this.x += (use.x - this.x) / this.speed
        //this.y += (use.y - this.y) / this.speed

            
        
    }

    takeDamage(dmg)
    {
        this.hp -= dmg; 
    }
}

class hpPack {
    constructor() {
        this.x = random(158,w)
        this.y = random(57,h)
        this.hpHit = false;
    }

    draw() {
        rect(this.x,this.y,20,20) 
        this.hpHit = collideRectCircle(this.x-10,this.y-10,20,20, use.x, use.y, use.width);
        
        // if (!hpHit) {
        //     hpHit = collideRectCircle(this.x,this.y,20,20, use.x, use.y, use.width);
        //     //console.log("test")
        //     console.log(hpHit)
        // }
    }
}

    

//fix table user/zombie collision
//add healthpakcs
