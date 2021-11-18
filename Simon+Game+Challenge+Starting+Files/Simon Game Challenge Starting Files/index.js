var colors=["green","red","yellow","blue"];
var sequence=[];
i=0;
$(document).on("keypress",game)
function game(){
    $(document).off("keypress")
    $("h1").text("Level "+(sequence.length+1))
    var ran=Math.floor(Math.random()*4);
    $("#"+colors[ran]).addClass("pressed")
    sound(colors[ran])
    setTimeout(function() {
        $("#"+colors[ran]).removeClass("pressed")
    },100);
    sequence.push(colors[ran]);
}
$(".btn").on("click",function(){
    var temp=this.id;
    sound(temp)
    $("#"+temp).addClass("pressed")
    setTimeout(function() {
        $("#"+temp).removeClass("pressed")
    },100);
    setTimeout(function(){
        if(temp==sequence[i]){
            i++;
            if(i==sequence.length){
                i=0
                game()
            }
        }
    },800)
    if(temp!=sequence[i]){
        sequence=[]
        var wrong=new Audio("sounds/wrong.mp3")
        wrong.play()
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
        },100)
        $("h1").text("Game Over, Press Any Key to Restart")
        $(document).on("keypress",game)
    }    
})
function sound(temp){
    switch (temp) {
        case "green":
            var green =new Audio("sounds/green.mp3")
            green.play()
            break;
        case "yellow":
            var yellow =new Audio("sounds/yellow.mp3")
            yellow.play()
            break;
        case "red":
            var red =new Audio("sounds/red.mp3")
            red.play()
            break;
        case "blue":
            var blue =new Audio("sounds/blue.mp3")
            blue.play()
            break;    
        default:
            break;
    }   
}