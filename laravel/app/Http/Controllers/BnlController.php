<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class BnlController extends ApiBaseController
{
    public function get_ghazal_lines($page_no = 0, $limit = 10) // $page_no - Page No.
    {
        $SQL = "SELECT
					*,pagelineID AS lineno, pageID AS `no`, attributes AS attrib, punjabi, translit,english, hindi,roman, urdu,teeka
				from
					N01
				WHERE
					`name` = 'Ghazal'
				AND
					`pageID`= $page_no
				ORDER BY
					pageID ASC, pagelineID ASC";

        return DB::select($SQL);
    }

    // use for search
    function bnlSelect_name()
    {
        $SQL="SELECT  DISTINCT name FROM N01 ORDER  BY name ";
        return DB::select($SQL);
    }

    public function ghazal_page(Request $request)
    {
        $page_no = $request->get('page');
        $d = 'line';
        $line_no = 'NA';
        $SG_BNL = config('constants.SG_BNL');
        $SG_Preferences = config('constants.SG_Preferences');
        $keywords = array();

        if ($page_no >= $SG_BNL['ghazal']['page_from'] and $page_no <= $SG_BNL['ghazal']['page_to']) {
            $lines = $this->get_ghazal_lines($page_no);
        } else {
            $page_no = $SG_BNL['ghazal']['page_from'];
            $lines = $this->get_ghazal_lines($page_no);
        }

        $keywords = $this->get_dictionary_words($lines);

        $page['base_url'] = $SG_BNL['ghazal']['controller_name_dash'] . '/page';
        $page['remember_me_url'] = $SG_BNL['ghazal']['controller_name_dash'];
        $page['scripture'] = 'ghazal';
        $page['current_page'] = $page_no;
        $page['lines'] = $lines;
        $page['keywords'] = $keywords;
        $page['highlight_line'] = $line_no;
        $page['base_url']       = $SG_BNL['ghazal']['controller_name_dash'] . '/page';
        $page['remember_me_url'] = $SG_BNL['ghazal']['controller_name_dash'];
        // load the page
        $page['theme'] = 'theme_7';
        $page['meta_title'] = 'Bhai Nand Lal - Ghazals - SearchGurbani.com';
        $page['meta_description'] = 'Bhai Nand Lal - Ghazals - SearchGurbani.com';
        $page['meta_keywords'] = 'Bhai Nand Lal - Ghazals';

        return $page;
    }


    // Quotrains

    /**
     * Get lines using Page No.
     */
    function get_quatrains_lines($page_no = 0, $limit = 10) // $page_no - Page No.
    {

        $first_pageID = DB::table('N01')
            ->where('name', '=', 'Rubaaee')
            ->min('pageID');

        $first_pageID = intval($first_pageID) - 1;
        $page_no=$first_pageID+$page_no;

        $SQL = "SELECT
					*,pagelineID AS `lineno`, pageID AS `no`, attributes AS `attrib`, punjabi, translit, english, hindi,roman, urdu ,teeka
				from
					N01
				WHERE
					`name` = 'Rubaaee'
				AND
					`pageID`= $page_no
				ORDER BY
					pageID ASC, pagelineID ASC";

        return DB::select($SQL);
    }


    public function quatrains_page(Request $request)
    {
        $page_no = $request->get('page');
        $line_no = 'NA';
        $SG_BNL = config('constants.SG_BNL');
        $SG_Preferences = config('constants.SG_Preferences');
        $keywords = array();

        if ($page_no >= $SG_BNL['quatrains']['page_from'] and $page_no <= $SG_BNL['quatrains']['page_to']) {
            $lines = $this->get_quatrains_lines($page_no);
        } else {
            $page_no = $SG_BNL['quatrains']['page_from'];
            $lines = $this->get_quatrains_lines($page_no);
        }

        $keywords = $this->get_dictionary_words($lines);

        $page['scripture'] = 'quatrains';
        $page['current_page'] = $page_no;
        $page['lines'] = $lines;
        $page['keywords'] = $keywords;
        $page['highlight_line'] = $line_no;
        $page['base_url'] = $SG_BNL['quatrains']['controller_name_dash'] . '/page';
        $page['remember_me_url'] = $SG_BNL['quatrains']['controller_name_dash'];

        // load the page
        $page['theme'] = 'theme_7';
        $page['meta_title'] = 'Bhai Nand Lal - Quatrains - SearchGurbani.com';
        $page['meta_description'] = 'Bhai Nand Lal - Quatrains - SearchGurbani.com';
        $page['meta_keywords'] = 'Bhai Nand Lal - Quatrains';

        return $page;
    }

    /**
     * zindginama apis
     */

    /**
     * Get lines using Page No.
     */
    public function get_zindginama_lines($page_no = 0, $limit = 10) // $page_no - Page No.
    {

        $first_pageID = DB::table('N01')
            ->where('name', '=', 'Zindginama')
            ->min('pageID');

        $first_pageID = intval($first_pageID) - 1;

        $page_no=$first_pageID+$page_no;

        $SQL = "SELECT *,pagelineID AS lineno, pageID AS no, attributes AS attrib, punjabi, translit, english, roman, urdu, hindi,teeka from N01 WHERE `name` = 'Zindginama' AND `pageID`= $page_no ORDER BY pageID ASC, pagelineID ASC";
        return DB::select($SQL);
    }

    public function zindginama_page(Request $request) {
        $page_no = $request->get('page');
        $line_no = 'NA';
        $SG_BNL = config('constants.SG_BNL');
        $SG_Preferences = config('constants.SG_Preferences');
        $keywords = array();

        if ($page_no >= $SG_BNL['quatrains']['page_from'] and $page_no <= $SG_BNL['quatrains']['page_to']) {
            $lines = $this->get_zindginama_lines($page_no);
        } else {
            $page_no = $SG_BNL['quatrains']['page_from'];
            $lines = $this->get_zindginama_lines($page_no);
        }

        $keywords = $this->get_dictionary_words($lines);

        $page['base_url'] = $SG_BNL['zindginama']['controller_name_dash'] . '/page';
        $page['remember_me_url'] = $SG_BNL['zindginama']['controller_name_dash'];
        $page['scripture'] = 'zindginama';
        $page['current_page'] = 1;
        $page['lines'] = $lines;
        $page['keywords'] = $keywords;
        $page['highlight_line'] = $line_no;

        // load the page
        $page['theme'] = 'theme_7';
        $page['meta_title'] = 'Bhai Nand Lal - Zindginama - SearchGurbani.com';
        $page['meta_description'] = 'Bhai Nand Lal - Zindginama - SearchGurbani.com';
        $page['meta_keywords'] = 'Bhai Nand Lal - Zindginama';

        return $page;
    }

    // ganjnama_page

    /**
     * Get lines using Page No.
     */
    function get_ganjnama_lines($page_no = 0, $limit = 10) // $page_no - Page No.
    {
        $first_pageID = DB::table('N01')
            ->where('name', '=', 'Ganjnaama')
            ->min('pageID');

        $first_pageID = intval($first_pageID) - 1;

        $page_no=$first_pageID+$page_no;

        $SQL = "SELECT *,pagelineID AS lineno, pageID AS no, attributes AS attrib, punjabi, translit, english, hindi,roman, urdu,teeka from N01 WHERE `name` = 'Ganjnaama' AND `pageID`= $page_no ORDER BY pageID ASC, pagelineID ASC";
        return DB::select($SQL);
    }

    public function ganjnama_page(Request $request){
        $page_no = $request->get('page');
        $line_no = 'NA';
        $SG_BNL = config('constants.SG_BNL');
        $SG_Preferences = config('constants.SG_Preferences');
        $keywords = array();

        if ($page_no >= $SG_BNL['quatrains']['page_from'] and $page_no <= $SG_BNL['quatrains']['page_to']) {
            $lines = $this->get_ganjnama_lines($page_no);
        } else {
            $page_no = $SG_BNL['quatrains']['page_from'];
            $lines = $this->get_ganjnama_lines($page_no);
        }

        $keywords = $this->get_dictionary_words($lines);

        $page['base_url'] = $SG_BNL['ganjnama']['controller_name_dash'] . '/page';
        $page['remember_me_url'] = $SG_BNL['ganjnama']['controller_name_dash'];
        $page['scripture'] = 'ganjnama';
        $page['current_page'] = 1;
        $page['lines'] = $lines;
        $page['keywords'] = $keywords;
        $page['highlight_line'] = $line_no;

        // load the page
        $page['theme'] = 'theme_7';
        $page['meta_title'] = 'Bhai Nand Lal - Ganjnama - SearchGurbani.com';
        $page['meta_description'] = 'Bhai Nand Lal - Ganjnama - SearchGurbani.com';
        $page['meta_keywords'] = 'Bhai Nand Lal - Ganjnama';

        return $page;
    }

    //jot-bikas_page

    /**
     * Get lines using Page No.
     */
    public function get_jot_bikas_lines($page_no = 0, $limit = 10) // $page_no - Page No.
    {

        $first_pageID = DB::table('N01')
            ->where('name', '=', 'Jot Bigaas Punjabi')
            ->min('pageID');

        $first_pageID = intval($first_pageID) - 1;

        $page_no=$first_pageID+$page_no;
        $SQL = "SELECT *,pagelineID AS lineno, pageID AS no, attributes AS attrib, punjabi, translit, english, hindi, roman, urdu,teeka from N01 WHERE `name` = 'Jot Bigaas Punjabi' AND `pageID`= $page_no ORDER BY pageID ASC, pagelineID ASC";
        return DB::select($SQL);
    }

    public function jotbikas_page(Request $request) {
        $page_no = $request->get('page');
        $line_no = 'NA';
        $SG_BNL = config('constants.SG_BNL');
        $SG_Preferences = config('constants.SG_Preferences');
        $lines = $this->get_jot_bikas_lines($page_no);
        $keywords = array();

        $keywords = $this->get_dictionary_words($lines);

        $page['base_url'] = $SG_BNL['jot_bikas']['controller_name_dash'] . '/page';
        $page['remember_me_url'] = $SG_BNL['jot_bikas']['controller_name_dash'];
        $page['scripture'] = 'jot_bikas';
        $page['current_page'] = 1;
        $page['lines'] = $lines;
        $page['keywords'] = $keywords;
        $page['highlight_line'] = $line_no;

        // load the page
        $page['theme'] = 'theme_7';
        $page['meta_title'] = 'Bhai Nand Lal - Jot_Bikas - SearchGurbani.com';
        $page['meta_description'] = 'Bhai Nand Lal - Jot_Bikas - SearchGurbani.com';
        $page['meta_keywords'] = 'Bhai Nand Lal - Jot_Bikas';
        return $page;
    }

    // jotbikas_person_page

    /**
     * Get lines using Page No.
     */
    function get_jot_bikas_persian_lines($page_no = 0, $limit = 10) // $page_no - Page No.
    {
        $first_pageID = DB::table('N01')
            ->where('name', '=', 'Jot bigaas Persian')
            ->min('pageID');

        $first_pageID = intval($first_pageID) - 1;

        $page_no=$first_pageID+$page_no;
        $SQL = "SELECT *,pagelineID AS lineno, pageID AS no, attributes AS attrib, punjabi, translit,	hindi, english, roman, urdu,teeka from N01 WHERE `name` = 'Jot bigaas Persian' AND `pageID`= $page_no ORDER BY pageID ASC, pagelineID ASC";
        return DB::select($SQL);
    }


    public function jotbikas_person_page(Request $request) {
        $page_no = $request->get('page');
        $line_no = 'NA';
        $SG_BNL = config('constants.SG_BNL');
        $SG_Preferences = config('constants.SG_Preferences');

        $lines = $this->get_jot_bikas_persian_lines($page_no);
//        $results['pagination_links'] = $this->pagination->create_links();
        $keywords = array();

        $keywords = $this->get_dictionary_words($lines);

        $page['base_url'] = $SG_BNL['jot_bikas_persian']['controller_name_dash'] . '/page';
        $page['remember_me_url'] = $SG_BNL['jot_bikas_persian']['controller_name_dash'];
        $page['scripture'] = 'jot_bikas_persian';
        $page['current_page'] = $page_no;
        $page['lines'] = $lines;
        $page['keywords'] = $keywords;
        $page['highlight_line'] = $line_no;

        // load the page
        $page['theme'] = 'theme_7';
        $page['meta_title'] = 'Bhai Nand Lal - Jot_Bikas_Persian - SearchGurbani.com';
        $page['meta_description'] = 'Bhai Nand Lal - Jot_Bikas_Persian - SearchGurbani.com';
        $page['meta_keywords'] = 'Bhai Nand Lal - Jot_Bikas_Persian';

        return $page;
    }

    // rahitnama_page

    /**
     * Get lines using Page No.
     */
    function get_rahitnama_lines($page_no = 0, $limit = 10)// $page_no - Page No.
    {
        $rs1 = DB::table('N01')
            ->where('name', '=', 'Rahitnama')
            ->min('pageID');

//        if(count($rs1)>0) {
//            $first_pageID = $rs1[0]->pageId;
//            $first_pageID = intval($first_pageID) - 1;
//        }
        $first_pageID = intval($rs1) - 1;
        $page_no = $first_pageID + $page_no;
        $SQL = "SELECT *,pagelineID AS lineno, pageID AS no, attributes AS attrib, punjabi, translit, hindi, english, roman, urdu, teeka from N01 WHERE `name` = 'Rahitnama' AND `pageID`= $page_no ORDER BY pageID ASC, pagelineID ASC";
        return DB::select($SQL);
    }


    public function rahitnama_page(Request $request) {
        $SG_BNL = config('constants.SG_BNL');
        $SG_Preferences = config('constants.SG_Preferences');
        $page_no = $request->get('page');

        $line_no = 'NA';

        $lines = $this->get_rahitnama_lines($page_no);
        $keywords = array();

        $keywords = $this->get_dictionary_words($lines);

        $page['base_url'] = $SG_BNL['rahitnama']['controller_name_dash'] . '/page';
        $page['remember_me_url'] = $SG_BNL['rahitnama']['controller_name_dash'];
        $page['scripture'] = 'rahitnama';
        $page['current_page'] = $page_no;
        $page['lines'] = $lines;
        $page['keywords'] = $keywords;
        $page['highlight_line'] = $line_no;

        // load the page
        $page['theme'] = 'theme_7';
        $page['meta_title'] = 'Bhai Nand Lal - Rahit Nama - SearchGurbani.com';
        $page['meta_description'] = 'Bhai Nand Lal - Rahit Nama - SearchGurbani.com';
        $page['meta_keywords'] = 'Bhai Nand Lal - Rahit Nama';

        return $page;
    }

    // tankahnama_page

    /**
     * Get lines using Page No.
     */
    public function get_tankahnama_lines($page_no = 0, $limit = 10) // $page_no - Page No.
    {
        $first_pageID = DB::table('N01')
            ->where('name', '=', 'Tankahnama')
            ->min('pageID');
        $first_pageID = intval($first_pageID) - 1;
        $page_no=$first_pageID+$page_no;
        $SQL = "SELECT *,pagelineID AS lineno, pageID AS no, attributes AS attrib, punjabi, translit,hindi, english, roman, urdu,teeka from N01 WHERE `name` = 'Tankahnama' AND `pageID`= $page_no ORDER BY pageID ASC, pagelineID ASC";
        return DB::select($SQL);
    }

    public function tankahnama_page (Request $request) {
        $SG_BNL = config('constants.SG_BNL');
        $SG_Preferences = config('constants.SG_Preferences');
        $page_no = $request->get('page');

        $line_no = 'NA';
        $lines = $this->get_tankahnama_lines($page_no);
        $keywords = array();

        $keywords = $this->get_dictionary_words($lines);

        $page['base_url'] = $SG_BNL['tankahnama']['controller_name_dash'] . '/page';
        $page['remember_me_url'] = $SG_BNL['tankahnama']['controller_name_dash'];
        $page['base_url'] = $SG_BNL['tankahnama']['controller_name_dash'].'/shabad';
        $page['scripture'] = 'tankahnama';
        $page['current_page'] = $page_no;
        $page['lines'] = $lines;
        $page['keywords'] = $keywords;
        $page['highlight_line'] = $line_no;

        // load the page
        $page['theme'] = 'theme_7';
        $page['meta_title'] = 'Bhai Nand Lal - Tankahnama - SearchGurbani.com';
        $page['meta_description'] = 'Bhai Nand Lal - Tankahnama - SearchGurbani.com';
        $page['meta_keywords'] = 'Bhai Nand Lal - Tankahnama';

        return $page;
    }

    /**
     * Get lines using Page No.
     */

    function get_lines_in_shabad($shabad_id)
    {
        $SQL = "SELECT *,pagelineID AS lineno, pageID AS `no`,shabadlineID AS shabadlineno, shabadID AS shabad_id, attributes AS lattrib FROM N01 WHERE shabadID = " . trim($shabad_id) . " ORDER BY pagelineID ASC";
        return DB::select($SQL);
    }

    public function shabad_line($type, $shabad_id, $lineno) {

        $SG_BNL = config('constants.SG_BNL');
        $SG_Preferences = config('constants.SG_Preferences');
        $keywords = array();

        $lines = $this->get_lines_in_shabad($shabad_id);

        $keywords = $this->get_dictionary_words($lines);

        $page['meta_keywords']    = 'Bhai Nand Lal - Ghazals shabad , bnl-shabad,';
        $page['meta_title'] = 'Bhai Nand Lal - Ghazals - SearchGurbani.com';
        $page['meta_description'] = 'Bhai Nand Lal - Ghazals - SearchGurbani.com';

        $page['base_url'] = $SG_BNL[str_replace('-', '_', $type)]['controller_name_dash'] . '/shabad';
        $page['remember_me_url'] = $SG_BNL[str_replace('-', '_', $type)]['controller_name_dash'];

        $page['theme'] = 'theme_7';
        $page['lines']          = $lines;
        $page['shabad_info']    = $lines;
        $page['lines']          = $lines;
        $page['keywords']       = $keywords;
        $page['highlight_line'] = $lineno;

        return $page;
    }

    public function verse_page(Request $request) {
        $verse_id = $request->get('page_no');
        $scripture = $request->get('scripture');
        $remember_me_url = $request->get('base_url');

        $type = $request->get('type');
        $SG_BNL = config('constants.SG_BNL');
        $data = array(
            'table' => 'N01',
            'where' => array(
                "verseID" => $verse_id,
            )
        );
        $page['base_url'] = $SG_BNL[str_replace('-', '_', $type)]['controller_name_dash'] . '/verse';
        $page['lines'] = $this->get_line_verse($data);
        $page['data'] = $page['lines'];

        $page['start_page'] = $SG_BNL[str_replace('-', '_', $type)]['verse_start'];
        $page['end_page'] = $SG_BNL[str_replace('-', '_', $type)]['verse_end'];

        $page['current_page'] = $verse_id;
        $page['scripture'] = $type;
        $page['remember_me_url'] = $remember_me_url.'/'.$type;
        // load the page
        $page['theme'] = 'theme_7';
        $page['meta_title'] = 'Bhai Nand Lal - '.ucfirst($type).' Verse';
        $page['meta_description'] = 'This Verse ' . $page['data'][0]->punjabi . $page['data'][0]->english . $page['data'][0]->hindi;
        $page['meta_keywords'] = 'Gurbani Kirtan, Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan';
        return $page;
    }
}