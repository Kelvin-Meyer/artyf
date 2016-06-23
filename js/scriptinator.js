//if found: please return to kelvin.click
$(document).ready(function() {
    jQuery('#searchInput').on('input', function() {
        searchAlbums($('#searchInput').val());
    });
});

searchAlbums = function (query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'album'
        },
        success: function (response) {
            //console.log(response);
            document.getElementById('booty').innerHTML = "";
            for (i = 0; i < response.albums.items.length; i++) {
                var albumArt = response.albums.items[i].images[0].url;
                $('#booty').append($("<a title='" + response.albums.items[i].name + "' href='" + albumArt + "' download><img src='" + albumArt + "'</a>"));
            }
        }
    });
};

