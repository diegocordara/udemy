new Vue({
    el: '#exercise',
    data: {
        isHighlight:false,
        effect: '',
        border:'borderThick',
        success:'green',
        block:'block',
        cssClass:'',
        cssStyle:'',
        cssClass2:'',
        boolText:'',
        progress:0
    },
    computed:{
        paintitgreen:function(){
            var vm = this;
            return (vm.boolText == "true")? true:false;
        },
        bgbar:function () {
            var vm = this;
            return 'width:'+vm.progress+'%;'
        }
    },
    methods: {
        startEffect: function() {
            var vm=this;
            setInterval(function(){
                vm.effect =  (vm.isHighlight)? 'shrink':'highlight';
                vm.isHighlight = !vm.isHighlight;
            },1000);
        },
        startProgress: function() {
            var vm=this;
            var timerId=setInterval(function(){
                vm.progress += 10;
                if(vm.progress == 100){
                    clearInterval(timerId);
                }
            },1000);
        }
    }
});