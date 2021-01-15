<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/get_allwords', 'ApiController@get_allwords');
Route::post('/get_datatable_data', 'ApiController@get_datatable_data');

// Guru granth sahib routes
Route::get('/get_ang_by_ang', 'ApiAngController@get_ang_by_ang');
Route::get('/ggs/get_chapters', 'GgsController@get_chapters');
Route::get('/ggs/get_chapters', 'GgsController@get_chapters');
Route::get('/ggs/get_authors', 'GgsController@get_authors');
Route::get('/ggs/get_author', 'GgsController@get_author');
Route::get('/ggs/get_raags', 'GgsController@get_raags');
Route::get('/ggs/shabad/{shabad_id}/line/{lineno}', 'GgsController@shabad_line');
Route::get('/ggs/ang/{page_no}/line/{lineno}', 'GgsController@ang_line');
Route::get('/guru-granth-sahib/verse', 'GgsController@verse_page');
Route::get('/guru-granth-sahib/world/ang', 'GgsController@world_ang');
Route::get('/guru-granth-sahib/world/ang/count', 'GgsController@world_ang_count');
Route::get('/guru-granth-sahib/world/ang/transliterations', 'GgsController@world_transliteration');
Route::get('/guru-granth-sahib/world/ang/translations', 'GgsController@world_translation');
Route::get('/guru-granth-sahib/world/ang/languages', 'GgsController@world_language');


// Amrit Keertan routes
Route::get('/ak/page', 'AkController@page');
Route::get('/ak/index/chapter', 'AkController@chapter_index');
Route::get('/ak/index/english', 'AkController@english_index');
Route::get('/ak/index/punjabi', 'AkController@punjabi_index');
Route::get('/ak/index/hindi', 'AkController@hindi_index');
Route::get('/ak/shabad/{shabad_id}/line/{lineno}', 'AkController@shabad_line');
Route::get('/ak/chapter/{chapter_id}/{chapter_name}', 'AkController@chapter_id_name');


// Bgv routes
Route::get('/bgv/vaar', 'BgvController@vaar');
Route::get('/bgv/index/vaar', 'BgvController@vaar_index');
Route::get('/bgv/vaar/{vaar_no}/pauri/{pauri_no}/line/{line_no}', 'BgvController@vaar_pauri_line');


// Dgs routes
Route::get('/dasam-granth/page', 'DgsController@page');
Route::get('/dasam-granth/index/chapter', 'DgsController@chapter_index');
Route::get('/dasam-granth/shabad/{shabad_id}/line/{lineno}', 'DgsController@shabad_line');

Route::get('/dasam-granth/verse', 'DgsController@verse_page');

// Kabit Savaiye routes
Route::get('/kabit-savaiye/kabit', 'KsController@kabit');
Route::get('/kabit-savaiye/kabit/{kabit_id}/line/{lineno}', 'KsController@kabit_line');

// bhai-nand-lal routes
Route::get('/bhai-nand-lal/ghazal/page', 'BnlController@ghazal_page');
Route::get('/bhai-nand-lal/quatrains/page', 'BnlController@quatrains_page');
Route::get('/bhai-nand-lal/zindginama/page', 'BnlController@zindginama_page');
Route::get('/bhai-nand-lal/ganjnama/page', 'BnlController@ganjnama_page');
Route::get('/bhai-nand-lal/jot-bikas/page', 'BnlController@jotbikas_page');
Route::get('/bhai-nand-lal/jot-bikas-persian/page', 'BnlController@jotbikas_person_page');
Route::get('/bhai-nand-lal/rahitnama/page', 'BnlController@rahitnama_page');
Route::get('/bhai-nand-lal/tankahnama/page', 'BnlController@tankahnama_page');
Route::get('/bhai-nand-lal/{type}/shabad/{shabad_id}/line/{lineno}', 'BnlController@shabad_line');
Route::get('/bhai-nand-lal/get_all_category', 'BnlController@bnlSelect_name');
Route::get('/bhai-nand-lal/verse', 'BnlController@verse_page');

/**
 * baanis
 */
// japji-sahib routes
Route::get('/baanis/japji-sahib', 'BaanisController@japji_sahib');

// jaap-sahib routes
Route::get('/baanis/jaap-sahib', 'BaanisController@jaap_sahib');
// tvai-prasadh-savaiye
Route::get('/baanis/tvai-prasadh-savaiye', 'BaanisController@tvai_prasadh_savaiye');
// baanis/chaupai-sahib
Route::get('/baanis/chaupai-sahib', 'BaanisController@chaupai_sahib');

// baanis/anand-sahib
Route::get('/baanis/anand-sahib', 'BaanisController@anand_sahib');

// baanis/rehraas-sahib
Route::get('/baanis/rehraas-sahib', 'BaanisController@rehraas_sahib');

// baanis/kirtan-sohila
Route::get('/baanis/kirtan-sohila', 'BaanisController@kirtan_sohila');

// anand_sahib_bhog
Route::get('/baanis/anand-sahib-bhog', 'BaanisController@anand_sahib_bhog');

// baanis/aarti
Route::get('/baanis/aarti', 'BaanisController@aarti');

// baanis/laavan-anand-karaj
Route::get('/baanis/laavan-anand-karaj', 'BaanisController@laavan_anand_karaj');

// baanis/asa-ki-vaar
Route::get('/baanis/asa-ki-vaar', 'BaanisController@asa_ki_vaar');

// baanis/sukhmani-sahib
Route::get('/baanis/sukhmani-sahib', 'BaanisController@sukhmani_sahib');

// baanis/sukhmana-sahib

Route::get('/baanis/sukhmana-sahib', 'BaanisController@sukhmana_sahib');




// baanis/sidh-gosht
Route::get('/baanis/sidh-gosht', 'BaanisController@sidh_gosht');

// baanis/ramkali-sadh
Route::get('/baanis/ramkali-sadh', 'BaanisController@ramkali_sadh');

// baanis/dhakanee-oankaar
Route::get('/baanis/dhakanee-oankaar', 'BaanisController@dhakanee_oankaar');

// baanis/baavan-akhree
Route::get('/baanis/baavan-akhree', 'BaanisController@baavan_akhree');

// baanis/shabad-hazare
Route::get('/baanis/shabad-hazare', 'BaanisController@shabad_hazare');

// baanis/baarah-maaha
Route::get('/baanis/baarah-maaha', 'BaanisController@baarah_maaha');

// baanis/dukh-bhanjani-sahib
Route::get('/baanis/dukh-bhanjani-sahib', 'BaanisController@dukh_bhanjani_sahib');

// baanis/salok-sehskritee
Route::get('/baanis/salok-sehskritee', 'BaanisController@salok_sehskritee');

// baanis/gathaa
Route::get('/baanis/gathaa', 'BaanisController@gathaa');

// baanis/phunhay-m5
Route::get('/baanis/phunhay-m5', 'BaanisController@phunhay_m5');

// baanis/chaubolay-m5
Route::get('/baanis/chaubolay-m5', 'BaanisController@chaubolay_m5');

// baanis/salok-kabeer-ji
Route::get('/baanis/salok-kabeer-ji', 'BaanisController@salok_kabeer_ji');

// baanis/salok-farid-ji
Route::get('/baanis/salok-farid-ji', 'BaanisController@salok_farid_ji');

// baanis/savaiye-m1
Route::get('/baanis/savaiye-m1', 'BaanisController@savaiye_m1');




// baanis/savaiye-m2
Route::get('/baanis/savaiye-m2', 'BaanisController@savaiye_m2');

// baanis/savaiye-m3
Route::get('/baanis/savaiye-m3', 'BaanisController@savaiye_m3');

// baanis/savaiye-m4
Route::get('/baanis/savaiye-m4', 'BaanisController@savaiye_m4');
Route::get('/baanis/savaiye-m5', 'BaanisController@savaiye_m5');
Route::get('/baanis/salok-m9', 'BaanisController@salok_m9');
Route::get('/baanis/akal-ustati', 'BaanisController@akal_ustati');
Route::get('/baanis/bachitar-natak', 'BaanisController@bachitar_natak');

// baanis/tvai-prasadh-savaiye-dheenan-kee
Route::get('/baanis/tvai-prasadh-savaiye-dheenan-kee', 'BaanisController@tvai_prasadh_savaiye_dheenan_kee');

// baanis/shabad-hazare-paatishahi-10
Route::get('/baanis/shabad-hazare-paatishahi-10', 'BaanisController@shabad_hazare_paatishahi_10');


// Resources routes
Route::get('/res/hukumnama', 'ResController@hukumnama');
Route::get('/res/hukumnama/ang', 'ResController@hukumnama_ang');

Route::get('/res/hukum', 'ResController@hukum');
Route::get('/res/hukum/rss', 'ResController@hukum_rss');

Route::get('/res/mahan-kosh/view', 'ResController@mahan_kosh_view');

Route::get('/res/guru-granth-kosh/view', 'ResController@guru_granth_kosh_view');
Route::get('/res/get_resources_words', 'ResController@get_resources_words');
Route::get('/res/mahan-kosh/do-search', 'ResController@mahan_kosh_search');

Route::get('/res/sri-nanak-prakash/chapters/{chapterId}', 'ResController@res_sri_nanak_prakash_chapters');
Route::get('/res/sri-nanak-prakash/page', 'ResController@res_sri_nanak_prakash_page');
Route::get('/res/sri-nanak-prakash/search-preview', 'ResController@res_sri_nanak_prakash_search_preview');

Route::get('/res/sri-gur-pratap-suraj-granth/search-preview', 'ResController@sgpsg_search_preview');
Route::get('/res/sri-gur-pratap-suraj-granth/volumes', 'ResController@sgpsg_volumes');
Route::get('/res/sri-gur-pratap-suraj-granth/chapters', 'ResController@sgpsg_chapters');
Route::get('/res/sri-gur-pratap-suraj-granth/page', 'ResController@sgpsg_page');


Route::get('/res/faridkot-wala-teeka/search-preview', 'ResController@fwt_search_preview');
Route::get('/res/fwt_page', 'ResController@fwt_page');
Route::get('/res/faridkot-wala-teeka/chapters', 'ResController@fwt_chapters');

Route::get('/res/sri-guru-granth-darpan-page', 'ResController@sggd_page');
Route::get('/res/sri-guru-granth-darpan/search-preview', 'ResController@sggd_search_preview');

Route::get('/res/maansarovar/word', 'ResController@maansarovar_words');
Route::get('/res/maansarovar/quotations/{word}', 'ResController@maansarovar_quotations');
Route::get('/compilation/page', 'ResController@compilation_page');
Route::get('/music/page', 'ResController@music_page');


// guestbook
Route::get('/guestbook', 'ApiController@guestbook');
// guestbook/post
Route::post('/guestbook/post', 'ApiController@guestbook_post');

// feedback/send
Route::post('/feedback/send', 'ApiController@feedback_send');

// preference/save
Route::post('/preference/save', 'ApiController@preference_save');

// scriptures/search-results-preview
Route::post('/scriptures/search-results-preview', 'ApiController@search_results_preview');

// shared url
Route::get('/shared/ggs/page', 'SharedController@guru_granth_sahib');
Route::get('/shared/ak/page', 'SharedController@amrit_keertan');
Route::get('/shared/ak/shabad', 'SharedController@amrit_keertan_shabad');
Route::get('/shared/bgv/page', 'SharedController@bhai_gurdas_vaaran');
Route::get('/shared/dg/page', 'SharedController@dasam_granth');
Route::get('/shared/ks/page', 'SharedController@kabit_savaiye');
Route::get('/shared/bnl/page', 'SharedController@bhai_nand_lal');
Route::get('/shared/bnl/shabad', 'SharedController@bhai_nand_lal_shabad');

Route::get('/audio/download', 'AudioController@download');

Route::get('/res/sggs-kosh/view', 'ResController@sggs_kosh_view');

Route::get('/sundar/gutka', 'BaanisController@sundar_gutka');

Route::get('/meta', 'ResController@get_meta');
