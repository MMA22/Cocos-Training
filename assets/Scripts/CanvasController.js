// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


cc.Class({
    extends: cc.Component,

     properties: {
         btnSave: cc.Button,                
        btnLoad: cc.Button,
        btnPlant: cc.Button,
        btnMove: cc.Button,
        btnDelete: cc.Button,
        btnChangeType: cc.Button,     
        state: 'NoState',
    },


      // LIFE-CYCLE CALLBACKS:
    onLoad () {
        // this.btnPlant.node.on(cc.Node.EventType.MOUSE_DOWN,function (event){
        //     console.log('plant');
        //     state = 'plant'     
        // },this)
        // this.btnMove.node.on(cc.Node.EventType.MOUSE_DOWN,function (event){
        //     state = 'move'; 
        //     console.log('move');
        // },this)
        // this.btnDelete.node.on(cc.Node.EventType.MOUSE_DOWN,function (event){
        //     state = 'delete'; 
        //     console.log('delete');
        // },this)
        // this.btnChangeType.node.on(cc.Node.EventType.MOUSE_DOWN,function (event){
        //     state = 'changeType';
        //     console.log('type'); 
        // },this)
    },

    start () {        
    },
   

    update (dt) {        
    },
   

});
