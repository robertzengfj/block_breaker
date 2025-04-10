import { _decorator, Component, Node,Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AttackController')
export class AttackController extends Component {
    @property
    public maxNumberOfAttack: number=20 ;
    @property
    public teststring:string="teststring" ;
    @property(Node)
    public ground:Node=null;
    @property(Prefab)
    public bulletPrefab: Prefab = null;
    start() {

    }

    update(deltaTime: number) {
        
    }
}


