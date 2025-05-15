$(document).ready(function() {
     $("#search").keyup(function() {
        var albums=$ (".album");
        $(albums).show();

        var searchTerm=$(this).val().toLocalelowerCase();

        albums.each(function() 
    

    });