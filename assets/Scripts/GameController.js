// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
const State = cc.Enum({
    NoState: -1,
    Plant: -1,
    Move: -1,
    Delete: -1,
});

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
        state: {
            default: State.NoState,
            type: State,
        },
        tree: {
            default: null,
            type: cc.Node,
        },
        canvas: {
            default: null,
            type: cc.Node,
        },

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {

    },

    update (dt) {
    },

    plantTree: function(event) {        
        var nodeTree = cc.instantiate(this.tree);
        nodeTree.parent = Canvas;
        nodeTree.setPosition(event.getLocationX,evet.getLocationY);
    }
});
