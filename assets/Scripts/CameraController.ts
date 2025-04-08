import { _decorator, Component, Input, input, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraController')
export class CameraController extends Component {
    start() {
        input.on(Input.EventType.TOUCH_START,this.onTouchStart,this)
    }
    onTouchStart(){
console.log('touch start')
    }

    update(deltaTime: number) {
        
    }
}


