function setup (){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
}
function preload (){
    classifier=ml5.imageClassifier('DoodleNet');
}
timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;
function draw (){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
    check_sketch()
            if(drawn_sketch==sketch)
            {
                answer_holder="set";
                score++;
                document.getElementById('score').innerHTML='score'+score;
            }
    
}