var thingsAChampionSays=[
"He flashes and flashes hard",
"And that's it from the presentation party",
"If they have to win, they have to play well here",
"They will look to score some runs here, and the opposition will look to take wickets",
"I just get the feeling that this is going to be really close",
"He has this habit of taking wickets",
"He is a compulsive hooker",
"He loves that area",
"It's in the air.........and taken",
"This has rushed to the fence like a tracer bullet!",
"Just what the doctor ordered!",
"He has taken the aerial route",
"What they need is a wicket now",
"Edged, and taken!"
];

var championSays=function() {
  var index=Math.floor(Math.random()*thingsAChampionSays.length);
  var randomThingThatAChampionSays=thingsAChampionSays[index];
  $('.champion_says').text('"'+randomThingThatAChampionSays+'"');
}
window.onload=championSays;
