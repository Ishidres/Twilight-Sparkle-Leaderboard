function fadeOut(el) {
  el.style.opacity = 1;

  (function fade() {
    let interval = setInterval(() => {
      if ((el.style.opacity -= 0.020) <= 0) {
        clearInterval(interval)
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    }, 50);
  })();
}

function fadeIn(el2) {
  el2.style.opacity = 0;
  el2.style.display = "block";

  (function fade2 () {
    let interval2 = setInterval(() => {
      el2.style.opacity = String(Number(el2.style.opacity) + 0.020);
      if ((el2.style.opacity) >= 1) {
        clearInterval(interval2);
      } else {
        requestAnimationFrame(fade2);
      }
    }, 50);
  })();
}

function show(elementId) {
  if (elementId !== "level-lb") fadeOut(document.getElementById("level-lb"));
  if (elementId !== "money-lb") fadeOut(document.getElementById("money-lb"));
  if (elementId !== "items-lb") fadeOut(document.getElementById("items-lb"));
  if (elementId !== "gems-lb") fadeOut(document.getElementById("gems-lb"));
  if (elementId !== "votes-lb") fadeOut(document.getElementById("votes-lb"));
  if (elementId !== "bonbons-lb") fadeOut(document.getElementById("bonbons-lb"));

  setTimeout(function () {
    fadeIn(document.getElementById(elementId));
  }, 350);
}

function select(elementId) {
  document.getElementById("btn1").style.background = "#EA428B";
  document.getElementById("btn2").style.background = "#EA428B";
  document.getElementById("btn3").style.background = "#EA428B";
  document.getElementById("btn4").style.background = "#EA428B";
  document.getElementById("btn5").style.background = "#EA428B";
  document.getElementById("btn6").style.background = "#EA428B";
  document.getElementById(elementId).style.background = "#9eff98";

  document.getElementById("btn1").style.color = "white";
  document.getElementById("btn2").style.color = "white";
  document.getElementById("btn3").style.color = "white";
  document.getElementById("btn4").style.color = "white";
  document.getElementById("btn5").style.color = "white";
  document.getElementById("btn6").style.color = "white";    
  document.getElementById(elementId).style.color = "black";
}

function setLeaderboard () {
  var lb_table_string = "";
  for (i=0; i<lbAPI.levels.length; i++) {
    var maxXP = (lbAPI.levels[i][3] * 100) + (lbAPI.levels[i][3] * 25);    
    lb_table_string = lb_table_string + "<tr>";
    lb_table_string = lb_table_string + "<td>#" + Number(i+1) + "</td>";    
    lb_table_string = lb_table_string + '<td>' + '<img src="' + lbAPI.levels[i][4] + '">';
    lb_table_string = lb_table_string + lbAPI.levels[i][0] + "<font size='3'>#" + lbAPI.levels[i][1] + "</font></td>";
    lb_table_string = lb_table_string + "<td><progress value='" + lbAPI.levels[i][2] + "' max='" + maxXP + "'></td>";
    lb_table_string = lb_table_string + "<td>" + lbAPI.levels[i][3] + "</td>"; 
    lb_table_string = lb_table_string + "</tr>"   
  }

  var money_table_string = "";
  for (i=0; i<lbAPI.money.length; i++) {
    money_table_string = money_table_string + "<tr>";
    money_table_string = money_table_string + "<td>#" + Number(i+1) + "</td>";    
    money_table_string = money_table_string + '<td>' + '<img src="' + lbAPI.money[i][3] + '">';
    money_table_string = money_table_string + lbAPI.money[i][0] + "<font size='3'>#" + lbAPI.money[i][1] + "</font></td>";
    money_table_string = money_table_string + "<td>$" + lbAPI.money[i][2] + "</td>"; 
    money_table_string = money_table_string + "</tr>"   
  }

  var items_table_string = "";
  for (i=0; i<lbAPI.items.length; i++) {
    items_table_string = items_table_string + "<tr>";
    items_table_string = items_table_string + "<td>#" + Number(i+1) + "</td>";    
    items_table_string = items_table_string + '<td>' + '<img src="' + lbAPI.items[i][3] + '">';
    items_table_string = items_table_string + lbAPI.items[i][0] + "<font size='3'>#" + lbAPI.items[i][1] + "</font></td>";
    items_table_string = items_table_string + "<td>" + lbAPI.items[i][2] + "p</td>"; 
    items_table_string = items_table_string + "</tr>"   
  }

  var gems_table_string = "";
  for (i=0; i<lbAPI.items.length; i++) {
    gems_table_string = gems_table_string + "<tr>";
    gems_table_string = gems_table_string + "<td>#" + Number(i+1) + "</td>";    
    gems_table_string = gems_table_string + '<td>' + '<img src="' + lbAPI.gems[i][3] + '">';
    gems_table_string = gems_table_string + lbAPI.gems[i][0] + "<font size='3'>#" + lbAPI.gems[i][1] + "</font></td>";
    gems_table_string = gems_table_string + "<td>" + lbAPI.gems[i][2] + " Gems</td>"; 
    gems_table_string = gems_table_string + "</tr>"   
  }

  var votes_table_string = "";
  for (i=0; i<lbAPI.items.length; i++) {
    votes_table_string = votes_table_string + "<tr>";
    votes_table_string = votes_table_string + "<td>#" + Number(i+1) + "</td>";    
    votes_table_string = votes_table_string + '<td>' + '<img src="' + lbAPI.votes[i][3] + '">';
    votes_table_string = votes_table_string + lbAPI.votes[i][0] + "<font size='3'>#" + lbAPI.votes[i][1] + "</font></td>";
    votes_table_string = votes_table_string + "<td>" + lbAPI.votes[i][2] + " Votes</td>"; 
    votes_table_string = votes_table_string + "</tr>"   
  }
  
  var bonbons_table_string = "";
  for (i=0; i<lbAPI.items.length; i++) {
    bonbons_table_string = bonbons_table_string + "<tr>";
    bonbons_table_string = bonbons_table_string + "<td>#" + Number(i+1) + "</td>";    
    bonbons_table_string = bonbons_table_string + '<td>' + '<img src="' + lbAPI.bonbons[i][3] + '">';
    bonbons_table_string = bonbons_table_string + lbAPI.bonbons[i][0] + "<font size='3'>#" + lbAPI.bonbons[i][1] + "</font></td>";
    bonbons_table_string = bonbons_table_string + "<td>" + lbAPI.bonbons[i][2] + " Bonbons</td>"; 
    bonbons_table_string = bonbons_table_string + "</tr>"   
  }

  document.getElementById("level-table").innerHTML = lb_table_string;
  document.getElementById("money-table").innerHTML = money_table_string;
  document.getElementById("item-table").innerHTML = items_table_string;
  document.getElementById("gems-table").innerHTML = gems_table_string;
  document.getElementById("votes-table").innerHTML = votes_table_string;
  document.getElementById("bonbons-table").innerHTML = bonbons_table_string;
}

function startTimer () {
  setInterval(function() {
    var now = new Date().getTime();
    var distance = new Date(lbAPI.nextRefresh) - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (minutes < 10) {minutes = "0" + minutes;}
    if (seconds < 10) {seconds = "0" + seconds;}            

    document.getElementById("timer").innerHTML = minutes + ":" + seconds;

    if (distance < 0) {
      document.getElementById("timer").innerHTML = "<small>Refreshing...</small>";
      document.title = "Twilight Leaderboard | Refreshing...";            
      location.reload();
    } else {
      document.title = "Twilight Leaderboard | " + minutes + ":" + seconds + " left";
    }
  }, 1000);
}

function finishLoading () {
  var el = document.querySelector('.se-pre-con');
  fadeOut(el);
  el = document.querySelector('.skip-loading-class');
  fadeOut(el);
  setLeaderboard();
  startTimer();
} 
