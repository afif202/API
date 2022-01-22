$("getQuote").on('click',function(){

    $.ajaxSetup ({cache:false});

    $.getJSON("https://goquotes-api.herokuapp.com/api/v1/all/quotes",function(quotes){

        $(".message").html(quotes[0].text + "_" + quotes[0].author)
    });
});


