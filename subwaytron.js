function use() {
    
    this.x = w/2
    this.y = 57
    this.width = 36
    this.height = 40
    this.lift = -10
    this.velocity = 0
    this.hp = 100; 
    this.setHp = 100; 


    this.show = function() {
        image(peng,this.x,this.y,this.width,this.height)
        fill('#D3D3D3')

    }

    this.update = function() {
        this.y += this.velocity
        this.velocity *= 0.9
        
        if (this.y < 0) {
            this.y = 0
        }

        if (this.y > h-40) {
            this.y = h-40
        }

        if (this.x > (w-36)) {
            this.x = w-36
        
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
        rect(use.x -3 , use.y + 45, 40, this.height)
        fill('green')

        rect(use.x -3, use.y + 45, this.width*(use.hp/use.setHp), this.height)
        fill('#D3D3D3') //HPbar

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
    this.x = 10
    this.y = 10
    this.setWidth = w/2.5
    this.wHeal = this.setWidth/5


    this.width = w/2.5
    this.height = 15

    


    this.show = function() {
        rect(this.x,this.y,w/2.5,this.height)
        fill('green')
        rect(this.x,this.y,this.width,this.height)
        fill(0) //bullet

    }
}

function sprint() {
    this.x = 10
    this.y = 25
    this.height = 8
    this.width = w/2.5
    this.setWidth = w/2.5

    this.drain = w/750


    this.show = function() {
        fill('white')
        rect(this.x,this.y,this.width,this.height)
        fill(0)

    }
}


class zombie {
    constructor() {
        this.x = random(158,w-40)
        this.y = random(57,h-40)
        this.speed = random(0.5,2)
        this.hp = 20; 
        this.dmg = 15
        this.hpdmg = HPbar.width/6.6
    }

    draw() {

        image(z1,this.x,this.y,30,49) 
        var zo = createVector (this.x - use.x, this.y - use.y)
        zo.normalize()

        fill('pink')

        if (!zombHit) {
            zombHit = collideRectRect(use.x,use.y,use.width,use.height,this.x,this.y,30,49)
            if(zombHit && !inv)
            {
                inv = true;
                HPbar.width -= this.hpdmg
                use.hp -= this.dmg;
                hits.setVolume(0.5)
                hits.play()
                hits.setLoop(false)
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

    takeDamage(dmg) {
        this.hp -= dmg; 
    }
}

class hpPack {
    constructor() {
        this.x = random(158,w-30)
        this.y = random(57,h-30)
        this.hpHit = false;
    }

    draw() {
        image(fish,this.x,this.y,30,30) 
        this.hpHit = collideRectCircle(this.x-10,this.y-10,30,30, use.x, use.y, use.width);
        
        // if (!hpHit) {
        //     hpHit = collideRectCircle(this.x,this.y,20,20, use.x, use.y, use.width);
        //     //console.log("test")
        //     console.log(hpHit)
        // }
    }
}

    

//fix table user/zombie collision
//add healthpakcs
