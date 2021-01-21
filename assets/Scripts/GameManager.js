var state = null;
var isMove = true;
var count = 0;
var isbuttonClick = false;
var treeType = 1;

cc.Class({
    extends: cc.Component,
    
    properties: {
        btnPlant: cc.Button,
        btnMove: cc.Button,
        btnDelete: cc.Button,
        btnTypeChange: cc.Button,
        btnSave: cc.Button,
        btnLoad: cc.Button,
        tree1: cc.Prefab,
        tree2: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:
        
     onLoad () {
        let self = this;
        cc.resources.load("Tree1", (err, tree1) => {
        self.tree1 = tree1;
        });   
        cc.resources.load("Tree2", (err, tree2) => {
            self.tree2 = tree2;
        }); 
   
        this.btnPlant.node.on(cc.Node.EventType.MOUSE_DOWN,function (event){           
            state = 'plant';  
            isbuttonClick = true;   
            console.log('plant');
        },this)
        this.btnMove.node.on(cc.Node.EventType.MOUSE_DOWN,function (event){
            state = 'move'; 
            console.log('move');            
        },this)
        this.btnDelete.node.on(cc.Node.EventType.MOUSE_DOWN,function (event){
            state = 'delete'; 
            console.log('delete');
        },this)
        this.btnTypeChange.node.on(cc.Node.EventType.MOUSE_DOWN,function (event){
            state = 'plant';
            if (treeType === 1) {
                treeType = 2;
            } else {
                treeType = 1;
            }
            isbuttonClick = true; 
            console.log('type'); 
        },this)
        this.node.on("mousedown", this.onClickMouseLeftButton, this);    
     },

     start() {},

     update(dt) {},

     onClickMouseLeftButton(event) {         
       
        if (event.target.name ==='btnPlant' || event.target.name === 'btnTypeChange') {            
            return;
        }
        if (isbuttonClick) {
            isbuttonClick = false;
            return;
        }

        if (state === 'plant') {        
            var newTree = null;
            if (treeType === 1) {
                newTree = cc.instantiate(this.tree1);
            }  else {
                newTree = cc.instantiate(this.tree2);
            }            
            let mousePosition = event.getLocation();
            mousePosition = this.node.convertToNodeSpaceAR(mousePosition);
            newTree.setPosition(cc.v2(mousePosition.x, mousePosition.y));
            var count = count + 1;
            newTree.name = "Tree" + count.toString();
            newTree.on("mousedown", this.onClickTreeMouseDown, this, newTree);
            newTree.on("mousemove", this.onClickTreeMouseMove, this);
            newTree.on(cc.Node.EventType.MOUSE_UP, (event)=>{
            isMove = false;
            });
            this.node.addChild(newTree);
            console.log(mousePosition);            
         }
     },

     onClickTreeMouseDown(event) {
        if (state === 'delete') {  
            var target = event.target;
            target.destroy();
        } 
        if (state === 'move') {
            isMove = true;
        }
     },

     onClickTreeMouseMove(event) {
        if( state === 'move' && isMove) {
            let mousePosition = event.getLocation();
            mousePosition = this.node.convertToNodeSpaceAR(mousePosition);
            var target = event.target;
            target.setPosition(cc.v2(mousePosition.x, mousePosition.y));
        }      
     },
   
});
