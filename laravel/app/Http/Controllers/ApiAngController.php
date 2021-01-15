<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiAngController extends ApiBaseController
{
    public function get_lines($page_no) // $page_no - Ang No.
    {
        $SQL = "SELECT *, ID AS id, pageID AS pageno, pagelineID AS pagelineno, lineID AS lineno, shabdID AS shabad_id, shabdlineID AS shabadlineno, attributes AS pattrib from S01 WHERE pageID = " . trim($page_no). " ORDER BY pagelineID ASC";
//        $rs = $this->db->query($SQL);
        $rs = DB::select($SQL);
        if (count($rs)> 0) {
            return $rs;
        } else {
            return false;
        }
    }


    public function get_ang_by_ang(Request $request)
    {
        $d = 'line';
        $line_no = $request->get('line_no');
        if(!isset($line_no)) {
            $line_no = 'NA';
        }
        $page_no = $request->get('page');
//        global $SG_SearchTypes, $SG_ScriptureTypes, $SG_SearchLanguage, $SG_Preferences;
        $SG_SearchTypes = config('constants.SG_SearchTypes');
        $SG_ScriptureTypes = config('constants.SG_ScriptureTypes');
        $SG_SearchLanguage = config('constants.SG_SearchLanguage');
        $SG_Preferences = config('constants.SG_Preferences');
        $keywords = array();
//        $this->load->model('dao/sri_guru_granth_sahib_dao');
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
        $page['highlight_line'] = $line_no;
        // load the page
        $page['theme']            = 'theme_2';
        $page['meta_title']       = 'Sri Guru Granth Sahib Ji -: Ang :  '.$page_no.' -: ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ :- SearchGurbani.com';
        $page['meta_description'] = 'Explore,Share and Listen to Audio of Ang  -' . $page_no . ' - of Sri Guru Granth Sahib ji at SearchGurbani.com .';
        $page['meta_keywords']    = 'guru granth sahib, granth,  sikh scripture, sikhism + + +';

//        if ($d == 'ajax')
//        {
//            echo json_encode([
//                'content' => $this->load->viewPartial('forms/page-by-page/guru-granth-sahib', $page),
//                'title' => $page['meta_title'],
//                'description' => $page['meta_description'],
//                'keywords' => $page['meta_keywords'],
//            ]);
//        }
//        else
//        {
//            $this->load->view('forms/page-by-page/guru-granth-sahib', $page);
//        }

        return $page;

    }
}
