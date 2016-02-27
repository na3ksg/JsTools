$().ready(function () {
    $('#form').submit(function () {
        $('#main').chirdren('a').fadeOut(function () {
            $('main').html('');
        });
        var query = $(this).children('input=["name"]').val();
        if (!query) return false;
        $('#main').text('loading...');
        $.ajax({
            url: '',// Twitter serch APIの使い方がわからない
            data: {
                q: query + 'instagr.am',
                lang: 'ja',
                rpp: '100',
                include_entities: 1
            },
            dataType: 'jsonp',
            succes: function (json) {
                var entries = json.results;
                if (!entries) return;
                $.each(entries, function () {
                    if (this.entities && this.entities.urls[0]) {
                        var url = this.entities.urls[0].expanded_url;
                        if (url.match(/instagr\.am\/p\/(\w+)/)) {
                            var id = RegExp.$1;
                            var a = $('&lt;a/&gt;').attr('href', 'http://instagr.am/p/' + id + '/');
                            a.attr('target', '_blank');
                            var img = $('&lt;img/&gt;').attr('src', 'http://instagr.am/p/' + id + '/media/?size=t');
                            img.bind('load', function () {
                                a.hide();
                                a.append(img);
                                $('#main').prepend(a);
                                a.fadeIn();
                            });
                        }
                    }
                });
            }
        });
        return false;
    });
});