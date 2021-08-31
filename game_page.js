player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");

document.getElementById("player1_name").innerHTML=player1_name +  " : " ;
document.getElementById("player2_name").innerHTML=player2_name +  ": " ;

player1_score= 0;
player2_score= 0;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn  " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn  " + player2_name;

function send(){
    word_get=document.getElementById("word").value;
    word=word_get.toLowerCase();
    console.log("Word in lower case is "+ word);

    charAt1=word.charAt(1);
    console.log(charAt1);

    len_div_by_2=Math.floor(word.length/2);

    charAt2=word.charAt(len_div_by_2);
    console.log(charAt2);

    len_1_minus=word.length-1;

    charAt3=word.charAt(len_1_minus);
    console.log(charAt3);

    word_1=word.replace(charAt1,"_");
    console.log(word_1);

    word_2=word_1.replace(charAt2,"_");
    console.log(word_2);

    word_3=word_2.replace(charAt3,"_");
    console.log(word_3);

    q_word="<h4 id='word_display'>Q. " + word_3 + "</h4>";
    input_box="<br>Answer : <input type='text' id='input_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=q_word + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="" ;
}