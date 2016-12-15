$(document).ready(function(){
    $('#test').on('click', function(){
        $('dl').removeClass('hidden');
        //$('dl').show();
        var countLength = 0;
        var uniqueWords = 0; 
        var averageLength = 0;
        var numberWords = 0;
        var sentenceLength = 0;
        var avSenLen = 0;
        var numberWords = 0; 

        var toAnalyzeText = $('#typedInText').val();
        var sentenceArr = toAnalyzeText.split('\n'); //splitted in array by sentence
        var textArr = toAnalyzeText.replace('\n',' ').split(' '); //splitted in array by words
        numberWords = textArr.length; //
        for (var a = 0; a < numberWords ; a++) {
            countLength += textArr[a].length;
        }
        
        for (var b = 0; b < sentenceArr.length; b++ ) {
            sentenceLength += sentenceArr[b].length;
            //alert(sentenceLength);
        }
        
        
        avSenLen = sentenceLength / sentenceArr.length;
        //alert(avSenLen);
        averageLength = countLength / numberWords;
        //alert(uniqueWords);
        uniqueWords = jQuery.unique(textArr).length;
        //alert(uniqueWords);
        $('#words').text(numberWords);
        $('#uniquewords').text(uniqueWords);
        $('#averagewordlength').text(averageLength);
        $('#averagesentencelength').text(avSenLen);
    });
});