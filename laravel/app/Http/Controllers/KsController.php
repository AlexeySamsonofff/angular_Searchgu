<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class KsController extends ApiBaseController
{
    /**
     * Get lines using Page No.
     */
    function get_lines($page_no) // $page_no - Page No.
    {
        $SQL = "SELECT 	lineID AS lineno, kabitID AS kabit, kabitlineID AS k_line, attributes AS lattrib, punjabi, punctuation, english, translit, hindi, urdu, roman, teeka_punjabi, teeka_hindi, teeka_roman from `K01` WHERE kabitID = " . trim($page_no) . " AND kabitlineID != 0 ORDER BY lineID ASC";
        return DB::select($SQL);
    }

    public function kabit(Request $request)
    {
        $line_no = $request->get('lineno');
        if(!isset($line_no)){
            $line_no = 'NA';
        }
        $page_no = $request->get('page');
        $SG_ScriptureTypes = config('constants.SG_ScriptureTypes');
        $SG_Preferences = config('constants.SG_Preferences');
        $keywords = array();

        if ($page_no >= $SG_ScriptureTypes['ks']['page_from'] and $page_no <= $SG_ScriptureTypes['ks']['page_to']) {
            $lines = $this->get_lines($page_no);
        } else {
            $page_no = $SG_ScriptureTypes['ks']['page_from'];
            $lines = $this->get_lines($page_no);
        }

        $keywords = $this->get_dictionary_words($lines);

        $page['base_url']       = $SG_ScriptureTypes['ks']['controller_name_dash'] . '/kabit';
        $page['remember_me_url'] = $SG_ScriptureTypes['ks']['controller_name_dash'];
        $page['scripture'] = 'ks';
        $page['current_page'] = $page_no;
        $page['lines'] = $lines;
        $page['keywords'] = $keywords;
        $page['highlight_line'] = $line_no;

        // load the page
        $page['theme'] = 'theme_6';
        $page['meta_title'] = 'Kabit Bhai Gurdas : Kabit ' . $page_no . ' : ਕਬਿਤ ਭਾਈ  ਗੁਰਦਾਸ  :- SearchGurbani.com';
        $page['meta_description'] = 'A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas vaaran, Sri Dasam Granth Sahib, Bhai Nand Lal Baani,Mahan Kosh, Hukumnamas, Nitnem Baanis, exegesis , Gurbani, Gurbanee vichaar..';

        return $page;
    }

    function kabit_line($kabit_id, $lineno)
    {
        $SG_ScriptureTypes = config('constants.SG_ScriptureTypes');
        $SG_Preferences = config('constants.SG_Preferences');
        $keywords = array();

        if ($kabit_id >= $SG_ScriptureTypes['ks']['page_from'] and $kabit_id <= $SG_ScriptureTypes['ks']['page_to']) {
            $lines = $this->get_lines($kabit_id);
        } else {
            $kabit_id = $SG_ScriptureTypes['ks']['page_from'];
            $lines = $this->get_lines($kabit_id);
        }

        $keywords = $this->get_dictionary_words($lines);

        $page['base_url']       = $SG_ScriptureTypes['ks']['controller_name_dash'] . '/kabit';
        $page['remember_me_url'] = $SG_ScriptureTypes['ks']['controller_name_dash'];
        $page['scripture'] = 'ks';
        $page['current_page'] = $kabit_id;
        $page['lines'] = $lines;
        $page['keywords'] = $keywords;
        $page['highlight_line'] = $lineno;

        // load the page
        $page['theme'] = 'theme_6';
        $page['meta_title'] = 'Kabit Bhai Gurdas : Kabit ' . $kabit_id . ' : &#2581;&#2604;&#2623;&#2596; &#2605;&#2622;&#2568;  &#2583;&#2625;&#2608;&#2598;&#2622;&#2616;  :- SearchGurbani.com';
        return $page;
    }

}
