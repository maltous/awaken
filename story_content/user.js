function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5yj3gE1Jpnx":
        Script1();
        break;
      case "5herT4Zzey1":
        Script2();
        break;
      case "6btYB9IMMaK":
        Script3();
        break;
      case "6IjDZgzSBmK":
        Script4();
        break;
      case "5oA5rbVukZB":
        Script5();
        break;
      case "69iLvznAXYq":
        Script6();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script5()
{
  $("#tab-customlink").show();
}

function Script6()
{
  window.print();
}

