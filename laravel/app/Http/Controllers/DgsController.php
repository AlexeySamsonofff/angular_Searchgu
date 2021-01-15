<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DgsController extends ApiBaseController
{

    /**
     * Get lines using Page No.
     */
    public function get_lines($page_no) // $page_no - Page No.
    {
        $SQL = "SELECT *,pageID AS pageno, pagelineID AS pagelineno, lineID AS lineno, attributes AS lattrib, punjabi, english, hindi, roman, urdu, teeka AS dgteeka, translit from D01 WHERE pageID = " . trim($page_no) . " ORDER BY pagelineID ASC";
        return DB::select($SQL);
    }



    public function page(Request $request)
    {
        $line_no = $request->get('line_no');
        if(!isset($line_no)){
            $line_no = 'NA';
        }
        $page_no = $request->get('page');
        $SG_ScriptureTypes = config('constants.SG_ScriptureTypes');
        $SG_Preferences = config('constants.SG_Preferences');
        $keywords = array();

//        $this->load->model('dao/dasam_granth_dao');
//        $this->load->model('dao/common_dao');


        if ($page_no >= $SG_ScriptureTypes['dg']['page_from'] and $page_no <= $SG_ScriptureTypes['dg']['page_to']) {
            $lines = $this->get_lines($page_no);
        } else {
            $page_no = $SG_ScriptureTypes['dg']['page_from'];
            $lines = $this->get_lines($page_no);
        }

        $keywords = $this->get_dictionary_words($lines);

        $page['heading'] = $SG_ScriptureTypes['dg'][1];
        $page['base_url'] = $SG_ScriptureTypes['dg']['controller_name_dash'] . '/page';

        $page['scripture'] = 'dg';
        $page['current_page'] = $page_no;
        $page['lines'] = $lines;
        $page['keywords'] = $keywords;
        $page['highlight_line'] = $line_no;
        $page['remember_me_url'] = $SG_ScriptureTypes['dg']['controller_name_dash'];
        // load the page
        $page['theme'] = 'theme_5';
        $page['meta_title'] = 'Sri Dasam Granth Sahib : - Page : ' . $page_no . ' -: ਸ੍ਰੀ ਦਸਮ ਗ੍ਰੰਥ ਸਾਹਿਬ :- SearchGurbani.com';
        $page['meta_description'] = 'Explore Page :' . $page_no . '  of Sri Dasam Granth Sahib : ਸ੍ਰੀ ਦਸਮ ਗ੍ਰੰਥ ਸਾਹਿਬ at SearchGurbani.com';

        return $page;
    }

    /**
     * Get the List of Chapters
     */
    function get_chapters($lang_type)
    {
        if ($lang_type == 'en'):
            $SQL = "SELECT parentID, chapterID AS chapter_id, chapterE AS chapter_name, pageID AS page_id,lineID,endID from SC01 WHERE chapterID > 1 AND `table` = 'D01' ORDER BY chapterID ASC";
        else:
            $SQL = "SELECT parentID, chapterID AS chapter_id, chapterP AS chapter_name, pageID AS page_id,lineID,endID from SC01 WHERE chapterID > 1 AND `table` = 'D01' ORDER BY chapterID ASC";
        endif;
        return DB::select($SQL);
    }

    public function chapter_index(Request $request)
    {
        $lang_type = $request->get('lang');

        $page['chapters'] = $this->get_chapters($lang_type);

        // load the page
        $page['theme'] = 'theme_5';
        $page['meta_title'] = 'Sri Dasam Granth Sahib Chapter Index : &#2616;&#2637;&#2608;&#2624; &#2598;&#2616;&#2606; &#2583;&#2637;&#2608;&#2672;&#2597; &#2616;&#2622;&#2617;&#2623;&#2604; :- SearchGurbani.com';
        $page['meta_description'] = 'Explore Sri Dasam Granth Sahib Chapter Index : &#2616;&#2637;&#2608;&#2624; &#2598;&#2616;&#2606; &#2583;&#2637;&#2608;&#2672;&#2597; &#2616;&#2622;&#2617;&#2623;&#2604; at SearchGurbani.com';
        return $page;
    }

    function get_lines_in_shabad($shabad_id)
    {
        $SQL = "SELECT *,ID AS id, pageID AS pageno, pagelineID AS pagelineno, lineID AS lineno, shabdID AS shabad_id, shabdlineID AS shabadlineno, attributes AS pattrib FROM D01 WHERE shabdID = ". trim($shabad_id) ." ORDER BY lineID ASC";
        return DB::select($SQL);
    }

    function shabad_line($shabad_id = 0, $lineno = 0)
    {
        $SG_ScriptureTypes = config('constants.SG_ScriptureTypes');
        $SG_Preferences = config('constants.SG_Preferences');
        $keywords = array();
        $lines = $this->get_lines_in_shabad($shabad_id);

        $keywords = $this->get_dictionary_words($lines);

        $page['lines'] = $lines;
        $page['shabad_info'] = $lines;
        $page['lines'] = $lines;
        $page['keywords'] = $keywords;
        $page['highlight_line'] = $lineno;
        $page['scripture'] = 'dg';
        $page['remember_me_url'] = $SG_ScriptureTypes['dg']['controller_name_dash'];
        $page['base_url'] = $SG_ScriptureTypes['dg']['controller_name_dash'].'/shabad';
        // load the page
        $page['theme'] = 'theme_3';
        $page['meta_title'] = 'Shabad : ' . $page['shabad_info'][0]->translit . ' -' . $page['shabad_info'][0]->punjabi . ' : Sri Guru Granth Sahib : : ਅਮ੍ਰਿਤ ਕੀਰਤਨ ਗੁਟਕਾ';
        $page['meta_description'] = 'This shabad ' . $page['shabad_info'][0]->translit . ' on Ang ' . $page['shabad_info'][0]->pageID . 'of Sri Guru Granth Sahib.';
        return $page;
    }

    function verse_page(Request $request) {
        $verse_id = $request->get('page_no');
        $scripture = $request->get('scripture');
        $remember_me_url = $request->get('base_url');

        $SG_ScriptureTypes = config('constants.SG_ScriptureTypes');

        $data = array(
            'table' => 'D01',
            'where' => array(
                "verseID" => $verse_id,
            )
        );

        $page['lines'] = $this->get_line_verse($data);
        $page['data'] = $page['lines'];
        $page['current_page'] = $verse_id;
        $page['start_page'] = 1;
        $page['end_page'] = 17178;
        $page['base_url'] = $SG_ScriptureTypes['dg']['controller_name_dash'] . '/verse';
        $page['scripture'] = $scripture;
        $page['remember_me_url'] = $remember_me_url;

        // load the page
        $page['theme'] = 'theme_3';
        $page['meta_title'] = 'Sri Dasam Granth Sahib Verse';
        $page['meta_description'] = 'This Verse ' . $page['data'][0]->punjabi . $page['data'][0]->english . $page['data'][0]->hindi;
        $page['meta_keywords'] = 'Gurbani Kirtan, Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan';

        return $page;
    }
}
