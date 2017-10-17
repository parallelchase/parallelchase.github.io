$( window ).ready(function() {
  
// ID of the Google Spreadsheet
 var spreadsheetID = "1ujpKdEL1rWU_IMixHmZE2EL_dJJa94kuHh4nMT-qkbw";
 
 // Make sure it is public or set to Anyone with link can view 
 var url = "https://spreadsheets.google.com/feeds/list/1ujpKdEL1rWU_IMixHmZE2EL_dJJa94kuHh4nMT-qkbw/od6/public/values?alt=json";
 
 $.getJSON(url, function(data) {
 
  var entry = data.feed.entry;
 
  $(entry).each(function(){
    // Column names are name, age, etc.
    $('.results').prepend('<div class="col-md-4"><a href="'+this.gsx$url.$t+'"><div class="panel panel-default"><div class="panel-heading"><img src="'+this.gsx$logo.$t+'"></div><img src="'+this.gsx$img.$t+'"><div class="heading">'+this.gsx$title.$t+'</div><p class="lead">'+this.gsx$desc.$t+'</p><div class="read-more"><a href="'+this.gsx$url.$t+'">'+this.gsx$static.$t+'</a></div></div></a></div>');
  });
 
 });

});




