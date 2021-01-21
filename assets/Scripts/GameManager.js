// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        canvas: cc.Node,
        tree: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         canvasController = canvas.node.getComponent('CanvasController');
         console.log('state ' + canvasController.state);
         console.log('here');
         this.node.on(cc.Node.EventType.MOUSE_DOWN,function (event) {
            console.log('I am here');
            event.bubbles = false;
        },this);

        
        let mouseDown = false;
        this.tree.on(cc.Node.EventType.MOUSE_DOWN, (event)=>{
            mouseDown = true;
        });
        this.tree.on(cc.Node.EventType.MOUSE_MOVE, (event)=>{
                if(!mouseDown) return;
                
                let delta = event.getDelta();                
                teee.x = tree.x + delta.x;
                tree.y = tree.y + delta.y;
            });
            this.tree.on(cc.Node.EventType.MOUSE_UP, (event)=>{
                mouseDown = false;
            });
     },



    // update (dt) {},
});
