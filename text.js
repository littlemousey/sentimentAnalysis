var sentimentAnalysis = require('sentiment-analysis'),
	$ = require('jquery');

console.log("Love: ", sentimentAnalysis('Mice are the most beautiful creatures I have ever met! They are so compasionate and loving. I would like to have one for my own.')); 
console.log("Hate: ", sentimentAnalysis('I hate hyenas. They are disgusting and revolting. I am ashamed to know these animals.')); 

var analysis = function () {
	var sentence = $("#sentence").val();
	var result = sentimentAnalysis(sentence);
	console.log("sentence: ", sentence);
	console.log("result: ", result);
	$("#result").text(result);	
}

$(document).ready(function() {

	$('#button').click(analysis);
});