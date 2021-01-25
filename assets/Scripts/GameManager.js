var state = null;
var isMove = true;
var count = 0;
var isbuttonClick = false;
var treeType = 1;
var target = null;

cc.Class({
    extends: cc.Component,
    
    properties: {
        btnPlant: cc.Button,
        btnMove: cc.Button,
        btnDelete: cc.Button,
        btnTypeChange: cc.Button,
        btnSave: cc.Button,
        btnLoad: cc.Button,
        lblInfo: cc.Label,
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
            this.lblInfo.string = 'Plant';
        },this)
        this.btnMove.node.on(cc.Node.EventType.MOUSE_DOWN,function (event){
            state = 'move'; 
            this.lblInfo.string = 'Move';            
        },this)
        this.btnDelete.node.on(cc.Node.EventType.MOUSE_DOWN,function (event){
            state = 'delete'; 
            this.lblInfo.string = 'Delete';
        },this)
        this.btnTypeChange.node.on(cc.Node.EventType.MOUSE_DOWN,function (event){
            state = 'plant';
            if (treeType === 1) {
                treeType = 2;
                this.lblInfo.string = 'Tree Type 2'; 
            } else {
                treeType = 1;
                this.lblInfo.string = 'Tree Type 1'; 
            }
            isbuttonClick = true; 
            
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
            count ++;
            newTree.name = "Tree" + count.toString();            
            newTree.on("mousedown", this.onClickTreeMouseDown, this, newTree);
            newTree.on("mousemove", this.onClickTreeMouseMove, this);
            newTree.on(cc.Node.EventType.MOUSE_UP, (event)=>{
                if (state === 'move') {
                    this.lblInfo.string = 'Move'    
                    isMove = false;
                }                
            });
            this.lblInfo.string = 'Plant ' + newTree.name;
            this.node.addChild(newTree);                        
         }
     },

     onClickTreeMouseDown(event) {
        target = event.target;
        if (state === 'delete') {
            this.lblInfo.string = 'Delete ' + target.name;
            target.destroy();
        } 
        if (state === 'move') {
            isMove = true;
            this.lblInfo.string = 'Move ' + target.name;
        }
     },

     onClickTreeMouseMove(event) {
        if( state === 'move' && isMove) {
            let mousePosition = event.getLocation();
            mousePosition = this.node.convertToNodeSpaceAR(mousePosition); 
                       
            target.setPosition(cc.v2(mousePosition.x, mousePosition.y));
        }      
     },
   
});
