
function change_keypad(language) {
    switch (language) {
        case 'hindi':
            document.getElementById('key_pad_punjabi').style.display = 'none';
            document.getElementById('key_pad_hindi').style.display = 'block';
            document.getElementById("SearchData").value = "";
            break;
        case 'PUNJABI':
            document.getElementById('key_pad_punjabi').style.display = 'block';
            document.getElementById('key_pad_hindi').style.display = 'none';
            document.getElementById("SearchData").value = "";
            break;
        default:
            document.getElementById('key_pad_punjabi').style.display = 'none';
            document.getElementById('key_pad_hindi').style.display = 'none';
            document.getElementById("SearchData").value = "";
            break;
    }
}

function pad(char) {
    var prevVal = $(':visible[name="SearchData"]').val();
    $(':visible[name="SearchData"]').eq(0).val(prevVal + char).trigger("input");
    $(':visible[name="SearchData"]').focus();
}


$(document).ready(function () {

    $("#searchPageID").val('');

    var searchAuto = new Bloodhound({
        datumTokenizer: function (d) {
            var tokens = [];
            //the available string is 'name' in your datum
            var stringSize = d.word.length;
            //multiple combinations for every available size
            //(eg. dog = d, o, g, do, og, dog)
            for (var size = 1; size <= stringSize; size++) {
                for (var i = 0; i + size <= stringSize; i++) {
                    tokens.push(d.word.substr(i, size));
                }
            }
            return tokens;
        },
        // datumTokenizer: Bloodhound.tokenizers.obj.whitespace('word'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
            url: base_url + 'public/ajax/get_allwords',
            prepare: function (q, rq) {

                $(".typeahead-loader").show();

                rq.data = {
                    q: $(":visible[name='SearchData']").val(),
                    // source: 'S01',
                    searchtype: $("#Searchtype").val(),
                    language: $("#language").val(),
                    ggs: 'true',
                    ak: 'true',
                    bgv: 'true',
                    dg: 'true',
                    ks: 'true',
                    bnl: 'true',
                    individual_search: $("#individual_search").val(),

                };
                return rq;
            },
            transport: function (obj, onS, onE) {

                $.ajax(obj).done(done).fail(fail).always(always);

                function done(data, textStatus, request) {
                    // Don't forget to fire the callback for Bloodhound
                    onS(data);
                }

                function fail(request, textStatus, errorThrown) {
                    // Don't forget the error callback for Bloodhound
                    onE(errorThrown);
                }

                function always() {
                    $(".typeahead-loader").hide();
                }
            }
        }
    });

    searchAuto.initialize();

    $(':visible[name="SearchData"]').keyup(function (e) {
        $("#searchPageID").val('');
        // $("#searchTableID").val('');
    });

    $("#language").change(function (e) {
        var $self = $(this);
        $('#outText').val('');
        $('#outText_ascii').val('');
        if($('#language').val() === 'ROMAN'){
            $('#key_pad_punjabi').hide();
            $('#outText_ascii').css('font-family', '');
            $('#outText_ascii').parent('.twitter-typeahead').show();
            $('#outText_ascii').show();
            $('#outText').parent('.twitter-typeahead').hide();
            $('#outText').hide();
        }
        else if($('#language').val() === 'PUNJABI'){
            $('#key_pad_punjabi').show();
            $('#outText').parent('.twitter-typeahead').show();
            $('#outText').show();
            $('#outText_ascii').parent('.twitter-typeahead').hide();
            $('#outText_ascii').hide();
        }
        else{
            $('#key_pad_punjabi').hide();
            $('#outText_ascii').css('font-family', 'WebAkharThick');
            $('#outText_ascii').parent('.twitter-typeahead').show();
            $('#outText_ascii').show();
            $('#outText').parent('.twitter-typeahead').hide();
            $('#outText').hide();
        }
        getSearchDataCallback();
    });


    $('#reset_search').click(function () {
        $('#outText').val('');
        $('#outText_ascii').val('');
        $('#Searchtype').val('FL_begin');
        $('#language').val('ROMAN');
        $('#outText_ascii').css('font-family', '');
        $('#key_pad_punjabi').hide();
        $('#result_div').hide();
        $('#outText_ascii').parent('.twitter-typeahead').show();
        $('#outText_ascii').show();
        $('#outText').parent('.twitter-typeahead').hide();
        $('#outText').hide();
        getSearchDataCallback();
    });

    $("#Searchtype").change(function (e) {
        var $self = $(this);
        $(':visible[name="SearchData"]').val('');
        getSearchDataCallback();

        if($self.val() == 'PHRASE') {
            // $("#language option[value='ROMAN']").prop('disabled', true);
            // $("#language option[value='PUNJABI-ASC']").prop('disabled', true);

            $("#author").prop('disabled', true);
            $("#raag").prop('disabled', true);
            $("#page_from").prop('disabled', true);
            $("#page_to").prop('disabled', true);
        } else {
            // $("#language option[value='ROMAN']").prop('disabled', false);
            // $("#language option[value='PUNJABI-ASC']").prop('disabled', false);

            $("#author").prop('disabled', false);
            $("#raag").prop('disabled', false);
            $("#page_from").prop('disabled', false);
            $("#page_to").prop('disabled', false);
        }
    });

    getSearchDataCallback();

    function getSearchDataCallback() {
        if($('#autocomplete').is(':checked')){
            $(':visible[name="SearchData"]').typeahead('destroy');

            $(':visible[name="SearchData"]').typeahead(null, {
                hint: true,
                highlight: true,
                displayKey: 'word',
                limit: 99999,
                source: searchAuto.ttAdapter(),
                templates: {
                    suggestion: function (data) {

                        var querystr = $(':visible[name="SearchData"]').val();
                        var result = data.word.trim();

                        if ($("#Searchtype").val() == 'FL_begin') {

                            querystr = querystr.replace(/\s+/g, "[a-z@]* ");
                            // querystr = querystr.replace(/~+$/, "");
                            var reg = new RegExp('^' + querystr, 'gim');

                        } else if ($("#Searchtype").val() == 'FL_any') {

                            querystr = querystr.replace(/\s+/g, "[a-z@]* ");
                            // querystr = querystr.replace(/~+$/, "");
                            var reg = new RegExp('(?:\\s|^)' + querystr, 'gim');

                        } else if ($("#Searchtype").val() == 'PHRASE') {

                            querystr = querystr.replace(/\s+/g, "[a-z]* ");
                            // querystr = querystr.replace(/~+$/, "");
                            var reg = new RegExp(querystr, 'gim');

                        }

                        var final_str = result.replace(reg, function (str) {
                            return '<b>' + str + '</b>'
                        });

                        if($("#language").val() == 'PUNJABI-ASC') {
                            return '<div class="tt-suggestion tt-selectable punjabi_fonts">' + final_str + '</div>';

                        } else {
                            return '<div class="tt-suggestion tt-selectable">' + final_str + '</div>';
                        }
                    }
                }
            }).on("typeahead:selected", function ($e, datum) {

                $("#searchPageID").val(datum.id);

                // $("#searchTableID").val(datum.id);
            });
        }
        if($('#language').val() === 'ROMAN'){
            $(':visible[name="SearchData"]').css('font-family', '');
        }
        else if($('#language').val() === 'PUNJABI-ASC'){
            $(':visible[name="SearchData"]').css('font-family', 'WebAkharThick');
        }
    }

    $('#autocomplete').click(function(e){
        if(!$('#autocomplete').is(':checked')){
            $(':visible[name="SearchData"]').typeahead('destroy');
            if($('#language').val() === 'ROMAN'){
                $(':visible[name="SearchData"]').css('font-family', '');
            }
            else if($('#language').val() === 'PUNJABI-ASC'){
                $(':visible[name="SearchData"]').css('font-family', 'WebAkharThick');
            }
        }
        else{
            $(':visible[name="SearchData"]').typeahead(null, {
                hint: true,
                highlight: true,
                displayKey: 'word',
                limit: 99999,
                source: searchAuto.ttAdapter(),
                templates: {
                    suggestion: function (data) {

                        var querystr = $(':visible[name="SearchData"]').val();
                        var result = data.word.trim();

                        if ($("#Searchtype").val() == 'FL_begin') {

                            querystr = querystr.replace(/\s+/g, "[a-z@]* ");
                            // querystr = querystr.replace(/~+$/, "");
                            var reg = new RegExp('^' + querystr, 'gim');

                        } else if ($("#Searchtype").val() == 'FL_any') {

                            querystr = querystr.replace(/\s+/g, "[a-z@]* ");
                            // querystr = querystr.replace(/~+$/, "");
                            var reg = new RegExp('(?:\\s|^)' + querystr, 'gim');

                        } else if ($("#Searchtype").val() == 'PHRASE') {

                            querystr = querystr.replace(/\s+/g, "[a-z]* ");
                            // querystr = querystr.replace(/~+$/, "");
                            var reg = new RegExp(querystr, 'gim');

                        }

                        var final_str = result.replace(reg, function (str) {
                            return '<b>' + str + '</b>'
                        });

                        if($("#language").val() == 'PUNJABI-ASC') {
                            return '<div class="tt-suggestion tt-selectable punjabi_fonts">' + final_str + '</div>';

                        } else {
                            return '<div class="tt-suggestion tt-selectable">' + final_str + '</div>';
                        }
                    }
                }
            }).on("typeahead:selected", function ($e, datum) {

                $("#searchPageID").val(datum.id);

                // $("#searchTableID").val(datum.id);
            });
        }
    });
});

