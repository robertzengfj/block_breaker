import { _decorator, Component, Node, Prefab, input, Input, EventTouch, instantiate, RigidBody, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AttackController')
export class AttackController extends Component {
    // @property
    // public maxNumberOfAttack: number=20 ;
    // @property
    // public teststring:string="teststring" ;
    // @property(Node)
    // public ground:Node=null;
    @property(Prefab)
    public bulletPrefab: Prefab = null;
    @property(Node)
    public bulletParent: Node = null;

    @property
    public bulletspeed: number = 40

    private isTouching: boolean = false

    @property
    public fireRate:number=0.3

    private fireTimer=0;

    start() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this)
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this)
    }
    onTouchStart(event: EventTouch) {
        console.log('touch start' + event.getLocation())
        // const bullet = instantiate(this.bulletPrefab)
        // bullet.setParent(this.bulletParent)
        // //bullet.setPosition(0,0,0)
        // bullet.setWorldPosition(this.node.position)
        // const rgd = bullet.getComponent(RigidBody)
        // rgd.setLinearVelocity(new Vec3(0, 0, -1 * this.bulletspeed))
        this.isTouching = true
    }
    onTouchEnd(event: EventTouch) {
        this.isTouching = false
    }

    update(deltaTime: number) {
        if(this.isTouching){
            this.fireTimer+=deltaTime;
            if(this.fireTimer>this.fireRate){   
               this.fire();
               this.fireTimer=0;
            }
        }
    }
    fire(){
        const bullet = instantiate(this.bulletPrefab)
        bullet.setParent(this.bulletParent)
        //bullet.setPosition(0,0,0)
        bullet.setWorldPosition(this.node.position)
        const rgd = bullet.getComponent(RigidBody)
        rgd.setLinearVelocity(new Vec3(0, 0, -1 * this.bulletspeed))
    }
}


