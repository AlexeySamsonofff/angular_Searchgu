<?php

namespace App\Http\Controllers;

use App\GgsL;
use App\GgsS;
use App\GgsTa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

// Guru_granth_sahib controller
class GgsController extends ApiBaseController
{
    /**
     * Get the List of Chapters
     */
    public function get_chapters()
    {
        $SQL = "SELECT *, chapterID AS chapter_id, pageID AS page_id, chapterE AS chapter_name from SC01 WHERE chapterID > 1 AND `table` = 'S01' ORDER BY chapterID ASC";
        $res = DB::select($SQL);
        return $res;
    }

    /**
     * Get the List of Authors
     */
    function get_authors()
    {
        //$SQL = "SELECT distinct author FROM S01 WHERE author <> '' ORDER BY author ASC";
        $SQL = "SELECT DISTINCT S01.author, AT01.ID, AT01.slug from `S01` inner join `AT01` on S01.author_id=AT01.ID WHERE S01.author !='' ORDER BY S01.author ASC";
        $res = DB::select($SQL);
        return $res;
    }

    /**
     * Get the List of Raags of an Author
     */
    function get_raags_of_author_by_at01($author_name)
    {
        $rs = DB::table("AT01")->select("AT01.*", "S01.raag", "S01.pageID AS pageno")
            ->where("AT01.slug", '=', $author_name)
            ->join("S01", "S01.author_id", "=", "AT01.ID")
            ->orderBy("raag", "asc")
            ->groupBy("raag", "pageID")
            ->get();
        return $rs;
    }

    function get_author(Request $request) {
        $author_name = $request->get('author_name');
        $page['author'] = $author_name;
        $page['raags'] = $this->get_raags_of_author_by_at01($author_name);
        // load the page
        $page['theme']            = 'theme_2';
        $page['meta_title']       = 'Sri Guru Granth Sahib Raags Index - Author: ' . ucwords(str_replace('-', " ", $author_name)) . ' - SearchGurbani.com';
        $page['meta_description'] = 'Sri Guru Granth Sahib Raags Index - Author: ' . ucwords(str_replace('-', " ", $author_name)) . ' - SearchGurbani.com';
        return $page;
    }

    function get_raags()
    {
        $SQL="SELECT id,name FROM R01 ORDER BY name";
        return DB::select($SQL);
    }

    function get_lines_in_shabad($shabad_id)
    {
        $SQL = "SELECT *,ID AS id, pageID AS pageno, pagelineID AS pagelineno, lineID AS lineno, shabdID AS shabad_id, shabdlineID AS shabadlineno, attributes AS pattrib FROM S01 WHERE shabdID = ". trim($shabad_id) ." ORDER BY lineID ASC";
        return DB::select($SQL);
    }

    public function shabad_line($shabad_id, $lineno) {
        $SG_ScriptureTypes = config('constants.SG_ScriptureTypes');
        $SG_Preferences = config('constants.SG_Preferences');
        $keywords = array();

        $lines = $this->get_lines_in_shabad($shabad_id);

        $keywords = $this->get_dictionary_words($lines);
        $page['lines']          = $lines;
        $page['shabad_info']    = $lines;
        $page['lines']          = $lines;
        $page['keywords']       = $keywords;
        $page['highlight_line'] = $lineno;
        $page['scripture'] = 'ggs';
        // load the page
        $page['remember_me_url'] = $SG_ScriptureTypes['ggs']['controller_name_dash'];
        $page['base_url'] = $SG_ScriptureTypes['ggs']['controller_name_dash'].'/shabad';
        $page['theme'] = 'theme_2';
//        "Shabad : Ikoankaar Sathnaam Karathaa Purakh Nirabho Niravair Akaal Moorath Ajoonee Saibhan Gurprasaadh|| -ੴ ਸਤਿਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰਪ੍ਰਸਾਦਿ ॥ : Sri Guru Granth Sahib : : ਅਮ੍ਰਿਤ ਕੀਰਤਨ ਗੁਟਕਾ"

        $page['meta_title'] = 'Shabad : ' . $page['shabad_info'][0]->translit . ' -' . $page['shabad_info'][0]->punjabi . ' : Sri Guru Granth Sahib : : ਅਮ੍ਰਿਤ ਕੀਰਤਨ ਗੁਟਕਾ';

        $page['meta_description'] = 'This shabad ' . $page['shabad_info'][0]->translit . ' is by ' . $page['shabad_info'][0]->author . ' in Raag ' . $page['shabad_info'][0]->raag . ' on Ang ' . $page['shabad_info'][0]->pageno . 'of Sri Guru Granth Sahib.';

        return $page;
    }

    /**
     * Get lines using Ang No.
     */
    function get_lines($page_no) // $page_no - Ang No.
    {
        $SQL = "SELECT *, ID AS id, pageID AS pageno, pagelineID AS pagelineno, lineID AS lineno, shabdID AS shabad_id, shabdlineID AS shabadlineno, attributes AS pattrib from S01 WHERE pageID = " . trim($page_no) . " ORDER BY pagelineID ASC";
        return DB::select($SQL);
    }

    function ang_line($page_no, $lineno)
    {
        $SG_SearchTypes = config('constants.SG_SearchTypes');
        $SG_ScriptureTypes = config('constants.SG_ScriptureTypes');
        $SG_Preferences = config('constants.SG_Preferences');
        $keywords = array();

        if ($page_no >= $SG_ScriptureTypes['ggs']['page_from'] and $page_no <= $SG_ScriptureTypes['ggs']['page_to'])
        {
            $lines = $this->get_lines($page_no);
        }
        else
        {
            $page_no = $SG_ScriptureTypes['ggs']['page_from'];
            $lines   = $this->get_lines($page_no);
        }

        $keywords = $this->get_dictionary_words($lines);

        $page['heading']       = $SG_ScriptureTypes['ggs'][1];
        $page['base_url']      = $SG_ScriptureTypes['ggs']['controller_name_dash'] . '/ang';
        $page['remember_me_url'] = $SG_ScriptureTypes['ggs']['controller_name_dash'];

        $page['scripture']      = 'ggs';
        $page['current_page']   = $page_no;
        $page['lines']          = $lines;
        $page['keywords']       = $keywords;
        $page['highlight_line'] = $lineno;
        // load the page
        $page['theme']            = 'theme_2';
        $page['meta_title']       = 'Sri Guru Granth Sahib Ji -: Ang :  ' . $page_no . ' -: ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ :- SearchGurbani.com';
        $page['meta_description'] = 'Explore,Share and Listen to Audio of Ang  -' . $page_no . ' - of Sri Guru Granth Sahib ji at SearchGurbani.com .';
        $page['meta_keywords']    = 'guru granth sahib, granth,  sikh scripture, sikhism + + +';

        return $page;
    }

    function verse_page(Request $request) {
        $verse_id = $request->get('page_no');
        $scripture = $request->get('scripture');
        $remember_me_url = $request->get('base_url');

        $SG_ScriptureTypes = config('constants.SG_ScriptureTypes');

        $data = array(
            'table' => 'S01',
            'where' => array(
                "verseID" => $verse_id,
            )
        );

        $page['base_url'] = $SG_ScriptureTypes['ggs']['controller_name_dash'] . '/verse';
        $page['start_page'] = 1;
        $page['end_page'] = 20234;
        $page['current_page'] = $verse_id;
        $page['lines'] = $this->get_line_verse($data);
        $page['data'] = $page['lines'];
        $page['scripture'] = $scripture;
        $page['remember_me_url'] = $remember_me_url;

        // load the page
        $page['theme'] = 'theme_2';
        $page['meta_title'] = 'Sri Guru Granth Sahib Verse';
        $page['meta_description'] = 'This Verse '. $page['data'][0]->punjabi . $page['data'][0]->english . $page['data'][0]->hindi;
        $page['meta_keywords'] = 'Gurbani Kirtan, Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan';
        return $page;
    }

    function world_ang(Request $request) {
        $page = $request->get('page_no');
//        $perpage = $request->get('perpage');
//        $from = ($page - 1) * $perpage + 1;
        $total = $this->world_ang_count();
//        $to = $page * $perpage > $total ? $total: $page * $perpage;
//        $sggs = GgsS::skip($from - 1)->take($perpage)->get();
        $sggs = GgsS::where('page', $page)->get();
        foreach ($sggs as $sgg){
            $sgg->ta = $sgg->translation;
            $sgg->ti = $sgg->transliteration;
        }
        $lines = $sggs;
        $meta_title       = 'Sri Guru Granth Sahib World -: Ang :  ' . $page . ' -: ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ :- SearchGurbani.com';
        $meta_description = 'Explore,Share of World Ang  -' . $page . ' - of Sri Guru Granth Sahib ji at SearchGurbani.com .';
        $meta_keywords    = 'guru granth sahib, granth,  sikh scripture, sikhism + + +';
        return compact('lines', 'meta_description', 'meta_keywords', 'meta_title');
    }

    function world_ang_count() {
//        return GgsS::groupBy('page')->count();
        return 1430;
    }

    function world_transliteration(){
        return GgsL::where('id', '>=', 55)->get();
    }

    function world_translation(){
        return GgsL::where('id', '<', 54)->get();
    }

    function world_language(){
        return GgsL::all();
    }
}
