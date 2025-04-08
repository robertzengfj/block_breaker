import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {
    start() {
        console.log('start project')
    }

    update(deltaTime: number) {
        console.log('update'+deltaTime);
    }
}


