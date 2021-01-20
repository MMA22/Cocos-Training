// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


cc.Class({
    extends: cc.Component,

     properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        btnSave: {
            type: cc.Button, // 
            default: null,
        },
        btnLoad: {
            type: cc.Button, // 
            default: null,
        },
        btnPlant: {
            type: cc.Button, // 
            default: null,
        },
        btnMove: {
            type: cc.Button, // 
            default: null,
        },
        btnDelete: {
            type: cc.Button, // 
            default: null,
        },
        btnChangeType: {
            type: cc.Button, // 
            default: null,
        },       
        gameContorller: {            
            type: cc.Node,
            default: null,
        }, 
    },


      // LIFE-CYCLE CALLBACKS:
    onLoad () {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.plantTree, event); 
    },

    start () {
        
    },

    OnClickPlantBtn : function () {        
        gameContorller.state = GameContorller.state.Plant;
        console.log("State info " + gameContorller.state);     
    },

    OnClickMoveBtn : function() {
        gameContorller.state = GameContorller.state.Move;
    },

    OnClickDeleteBtn : function() {
        gameContorller.state = GameContorller.state.Delete;
    },

    update (dt) {
        
    },
    plantTree(e) {
        gameContorller.plantTree(e);
        
    },

});
