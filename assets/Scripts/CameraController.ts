import { _decorator, Component, Input, input, Node, EventTouch, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraController')
export class CameraController extends Component {
    start() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this)
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this)
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this)
    }
    onTouchStart(event: EventTouch) {
        console.log('touch start' + event.getLocation())
    }
    onTouchEnd(event: EventTouch) {
        console.log('touch end' + event.getLocation())
    }
    onTouchMove(event: EventTouch) {
        // console.log('touch move' + event.getLocation())
        // console.log('touch move delta' + event.getDelta())
        const moveScale = 0.05;
        const pos = this.node.position;
        this.node.setPosition(pos.x + event.getDeltaX()*moveScale, pos.y + event.getDeltaY()*moveScale, pos.z)
    }

    update(deltaTime: number) {

    }
}


