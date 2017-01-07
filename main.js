//Javascript File
function myFunction() {
    var quote,x;
    switch(Math.floor(Math.random() * 16)){
    	case 0 :
        quote = '"One who wins without problem",it is just a VICTORY but "One who wins with lot of troubles" that is HISTORY.<br><blockquote>Adolf Hitler</blockquote>';
		break;
     	case 1 :
        quote = "Hard Work may not always result in SUCCESS,But it will never result in REGRET.";
		break;
    	case 2 :
        quote = "My pain may be the reason for somebody's laugh.But my laugh must never be the reason for somebody's pain. <br><blockquote>Charlie chaplin</blockquote>";break;
	case 3 :
        quote = "'Empty pockets' teaches you a million things in life,but 'Full pockets' spoils you in a million ways.";
		break;
	case 4 :
        quote = "To handle yourself, use your head; to handle others, use your heart.<br> <blockquote> Eleanor Roosevelt</blockquote>";break;
	case 5 :
        quote = "Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.<br><blockquote> A.P.J Abdul Kalam </blockquote>";
		break;
	case 6 :
        quote = "Never work about numbers.Help one person at a time,and always start with the person nearest you.<br><blockquote>Mother Teresa</blockquote>";break;
	case 7 :
        quote = "All of us do not have equal talent. But , all of us have an equal opportunity to develop our talents.<br><blockquote>A.P.J Abdul Kalam</blockquote> ";break;
	case 8 :
        quote = "When you have money in hand,only you forget who are you. But when you do not have any money in your hand,the whole world forget who you are. Its LIFE....!<br><blockquote>Bill gates</blockquote>";break;
	case 9 :
        quote = "Strength does not come from winning.Your struggles develop your strengths.When you go through hardships and decide not to surrender,that is strength-Mahatma Gandhi";break;
	case 10 :
        quote = "All Birds find shelter during a rain. But Eagle avoids rain by flying above the Clouds.<br><blockquote> A.P.J Abdul Kalam</blockquote>";break;
		case 11 :
        quote = "Your aim is yours So dont change it for others but Your character is not yours so change it for others.<br><blockquote>Swamy Vivekananda</blockquote>";break;
		case 12 :
        quote = "When people throw stones at you,you turn them into milestones.<br><blockquote>Sachin Tendulkar</blockquote>";break;
		case 13 :
        quote = "Like me or Hate me,both are in my favour,If you like me I am in your Heart,If you hate me I am in your mind.<br><blockquote> Swami Vivekananda</blockquote>";break;
		case 14 :
        quote = "Talk to yourself atleast once in a Day… Otherwise you may miss a meeting with an EXCELLENT person in this World.<br><blockquote>Swami Vivekananda</blockquote>";break;
		case 15 :
        quote = "I can do things you cannot,You can do things I cannot;Together we can do Great things.<br><blockquote>Mother teresa</blockquote>";break;
    }
	
document.getElementById("quotes").innerHTML = quote;
}
function myStory() {
    var story,x;
    switch(Math.floor(Math.random() * 4)){
    case 0 :
        story = "<b><u>BILL GATES</u></b> <br><br>BILL GATES in a restaurant.After eating,he gave 5$ to the waiter as a tip...The waiter had a strange feeling on his face after the tip.Gates realized & asked.What happened?Waiter: I'm just amazed B'coz on the same table ur daughter gave Tip Of... 500$ & u her Father, richest man in the world Only Gave 5$...?Gates Smiled & Replied With Meaningful words:-She is daughter of the world's richest man, but 'i am the son of a wood cutter.'<br>( Never Forget Your Past. It's Your Best Teacher)";break;
     case 1 :
        story = '<b><u>Story of Edison:</u></b>One day <b>Thomas Edison</b> came home and gave a paper to his mother.He told her,“My teacher gave this paper to me.”His mother’s eyes were tearful and she read the letter out loud to her child:Your son is a genius. This school is too small for him and doesn’t have enough teachers for training him.Please teach him yourself.After many years,Edison’s mother died as well and he was now one of the greatest inventors of the century,one day he was looking through old family things.Suddenly he saw a folded paper in the corner of room. He took it.On the paper was written:Your son is addled[mentally ill].We won’t let him come to school any more.Edison cried for hours and then he wrote in his diary:“Thomas Alva Edison was an addled child that,by a hero mother, became the genius of the century". ';break;
    case 2 :

        story ="<b><u>Shakespeare</u></b> <br><br>Shakespeare's Mother Said to him: You are very weak in English if you fail this time.I will not let you continue your studies.Shakespeare did not pass M.A.English.But now no one can pass M.A.English without reading Shakespeare.'Dont try to achieve the higher degrees but always try to achieve higher knowledge'.";break;
	case 3 : 
	story = "<b><u>Drop down Ego</u></b> <br><br>Once there was an island where all the <b>feelings</b> lived together. One day there came a storm in the sea and the island was about to drown .Every feeling was scared but Love made a boat to escape. All the feelings jumped in the boat except for one feeling. Love got down to see who it was…it was Ego! Love tried & tried but Ego didn’t move. Everyone asked Love to leave Ego & come in the boat but Love was meant to Love. It remained with Ego. All other feelings were left alive but Love died because of Ego!Think over it. You’ll love it every time u read it.";

	break;
   
	
	 }
document.getElementById("storyi").innerHTML = story;
}
