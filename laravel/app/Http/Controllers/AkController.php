<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AkController extends ApiBaseController
{
    /**
     * Get lines using Page No.
     */
    public function get_lines($page_no) // $page_no - Page No.
    {
        $res = DB::table('A01')
            ->join('AS01', 'AS01.shabadID','=', 'A01.shabadID')
            ->select(
                'A01.lineID AS lineno',
                'A01.sectionID AS section_id',
                'A01.pageID AS pageno',
                'A01.pagelineID AS pagelineno',
                'A01.shabadID AS shabdID',
                'A01.shabadlineID AS shabdlineID',
                'A01.attributes AS lattrib',
                'A01.raag',
                'A01.punjabi',
                'A01.translit',
                'A01.author',
                'A01.hindi',
                'A01.roman',
                'A01.translit-old',
                'A01.urdu',
                'AS01.shabad_name',
                'A01.english')
            ->where('A01.pageID', '=', trim($page_no))
            ->orderBy('A01.pagelineID', 'ASC')
            ->get();
        return $res;
    }



    public function page(Request $request)
    {
        $d = 'line';
        $line_no =  $request->get('line_no');
        if(!isset($line_no)) {
            $line_no = 'NA';
        }
        $page_no = $request->get('page');
        $SG_ScriptureTypes = config('constants.SG_ScriptureTypes');
        $SG_Preferences = config('constants.SG_Preferences');

//        $this->load->model('dao/amrit_keertan_dao');
//        $this->load->model('dao/common_dao');


        if ($page_no >= $SG_ScriptureTypes['ak']['page_from'] and $page_no <= $SG_ScriptureTypes['ak']['page_to']) {
            $lines = $this->get_lines($page_no);
        } else {
            $page_no = $SG_ScriptureTypes['ak']['page_from'];
            $lines = $this->get_lines($page_no);
        }
        $keywords = $this->get_dictionary_words($lines);

        $page['scripture'] = 'ak';
        $page['heading'] = $SG_ScriptureTypes['ak'][1];

        $page['current_page'] = $page_no;
        $page['lines'] = $lines;
        $page['keywords'] = $keywords;

        $page['highlight_line'] = $line_no;
        $page['base_url'] = $SG_ScriptureTypes['ak']['controller_name_dash'] . '/page';
        $page['remember_me_url'] = $SG_ScriptureTypes['ak']['controller_name_dash'];
        // load the page
        $page['theme'] = 'theme_3';
        $page['meta_title'] = 'Sri Guru Granth Sahib Ji -: Ang :  '.$page_no.' -: ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ :- SearchGurbani.com';
        $page['meta_description'] = 'Explore&nbsp; Page ' . $page_no . ' of Amrit    Kirtan Gutka ( &#2565;&#2606;&#2637;&#2608;&#2623;&#2596; &#2581;&#2624;&#2608;&#2596;&#2600; &#2583;&#2625;&#2591;&#2581;&#2622; ) at SearchGurbani.com&nbsp;';

       return $page;
    }

    /**
     * Get the List of Chapters
     */
    function get_chapters()
    {
        $SQL = "SELECT sectionID AS section_id,section,pageID AS pageno from AC01 ORDER BY sectionID ASC";
        return DB::select($SQL);
    }

    /**
     * Chapter Index
     */
    public function chapter_index()
    {
        $page['chapters'] = $this->get_chapters();
        // load the page
        $page['theme'] = 'theme_3';
        $page['meta_title'] = 'Amrit Keertan Gutka Chapter Index  :- SearchGurbani.com';
        $page['meta_description'] = 'Explore Amrit Keertan Gutka Chapter Index  at  SearchGurbani.com';
        $page['meta_keywords'] = 'Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan';
        return $page;
    }


    /**
     * Get the List of Shabads in a chapter
     */
    function get_shabads_by_alphabet($alpha, $language)
    {
        $SQL = "SELECT ID AS id, shabadID AS shabad_id, shabad_name, shabad_punjabi, shabad_hindi, pagelineID AS pagelineno , pageID AS pageno ,lineID AS lineno FROM AS01 WHERE $language LIKE '" . trim($alpha) . "%' ORDER BY $language ASC";
        return DB::select($SQL);
    }

    public function english_index(Request $request) {
        $alpha = $request->get('alpha');
        if(!isset($alpha) || $alpha == '') {
            $alpha = 'A';
        }
        $page['current_alphabet'] = $alpha;
        $page['alphabets'] = array(
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z'
        );
        $page['current_index'] = "index/english";
        $page['shabad_field'] = "shabad_name";
        $page['shabads'] = $this->get_shabads_by_alphabet($alpha, 'shabad_name');

        // load the page
        $page['theme'] = 'theme_3';
        $page['meta_title'] = 'Amrit Keertan Gutka Alphabetical Shabad Index in English  :- SearchGurbani.com';
        $page['meta_description'] = 'Explore Amrit Keertan Gutka Alphabetical Shabad Index in English at SearchGurbani.com';
        $page['meta_keywords'] = 'Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan';
        return $page;
    }

    /**
     * Shabads in Punjabi (punjabi alphabets)
     */
    public function punjabi_index(Request $request)
    {
        $alpha = $request->get('alpha');
        if(!isset($alpha) || $alpha == '') {
            $alpha = 'ਕ';
        }
        $alpha = urldecode($alpha);
        $page['current_alphabet'] = $alpha;
        $page['alphabets'] = array(
            '&#2581;',
            '&#2582;',
            '&#2583;',
            '&#2584;',
            '&#2585;',
            '&#2586;',
            '&#2587;',
            '&#2588;',
            '&#2589;',
            '&#2590;',
            '&#2591;',
            '&#2592;',
            '&#2593;',
            '&#2594;',
            '&#2595;',
            '&#2596;',
            '&#2597;',
            '&#2598;',
            '&#2599;',
            '&#2600;',
            '&#2602;',
            '&#2603;',
            '&#2604;',
            '&#2605;',
            '&#2606;',
            '&#2607;',
            '&#2608;',
            '&#2610;',
            '&#2613;',
            '&#2616;',
            '&#2617;',
            '&#2649;'
        );

        $page['current_index'] = "punjabi";
        $page['shabad_field'] = "shabad_punjabi";
        $page['shabads'] = $this->get_shabads_by_alphabet($alpha, 'shabad_punjabi');

        // load the page
        $page['theme'] = 'theme_3';
        $page['meta_title'] = 'Amrit Keertan Gutka Alphabetical Shabad Index in Punjabi  :- SearchGurbani.com';
        $page['meta_description'] = 'Explore Amrit Keertan Gutka Alphabetical Shabad Index in Punjabi  at SearchGurbani.com';
        $page['meta_keywords'] = 'Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan';

        return $page;
    }

    /**
     * Shabads in Hindi (hindi alphabets)
     */
    function hindi_index(Request $request)
    {
        $alpha = $request->get('alpha');
        if(!isset($alpha) || $alpha == '') {
            $alpha = 'क';
        }
        $alpha = urldecode($alpha);

        $page['current_alphabet'] = $alpha;
        $page['alphabets'] = array(
            '&#2325;',
            '&#2326;',
            '&#2327;',
            '&#2328;',
            '&#2329;',
            '&#2330;',
            '&#2331;',
            '&#2332;',
            '&#2333;',
            '&#2334;',
            '&#2335;',
            '&#2336;',
            '&#2337;',
            '&#2338;',
            '&#2339;',
            '&#2340;',
            '&#2341;',
            '&#2342;',
            '&#2343;',
            '&#2344;',
            '&#2345;',
            '&#2346;',
            '&#2347;',
            '&#2348;',
            '&#2349;',
            '&#2350;',
            '&#2351;',
            '&#2354;',
            '&#2357;',
            '&#2358;',
            '&#2359;',
            '&#2360;',
            '&#2361;'
        );

        $page['current_index'] = "index/hindi";
        $page['shabad_field'] = "shabad_hindi";
        $page['shabads'] = $this->get_shabads_by_alphabet($alpha, 'shabad_hindi');


        // load the page
        $page['theme'] = 'theme_3';
        $page['meta_title'] = 'Amrit Keertan Gutka Alphabetical Shabad Index in Hindi  :- SearchGurbani.com';
        $page['meta_description'] = 'Explore Amrit Keertan Gutka Alphabetical Shabad Index in Hindi at SearchGurbani.com';
        $page['meta_keywords'] = 'Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan';

        return $page;
    }


    /**
     * Get the lines of a shabad
     */


    function get_lines_in_shabad($shabad_id)
    {
        $SQL = "SELECT lineID AS lineno, sectionID AS section_id,shabadlineID AS shabadlineno, pageID, pagelineID, shabadID AS shabad_id, attributes AS lattrib,raag,hindi,urdu,roman,punjabi,translit,author,english FROM A01 WHERE shabadID = " . trim($shabad_id) . " ORDER BY lineID ASC";
        return DB::select($SQL);
    }

    function get_youtubeid_for_shabad($shabad_id)
    {
        $result = DB::table('ASC01')->select('youtubeID', 'ID')->where('shabadID', '=', $shabad_id)->get();
        return $result;
    }

    /**
     * Get the shabad info
     */
    function get_shabad_info($shabad_id)
    {
        $rs = DB::select('SELECT AS01.shabad_name, AC01.section AS section_name, AC01.sectionID, AS01.shabadID AS shabad_id, AS01.shabad_punjabi, A01.sectionID, A01.author, A01.raag, AS01.pageID AS pageno, A01.lineID AS lineno FROM AS01 INNER JOIN (A01 INNER JOIN AC01 ON AC01.sectionID=A01.sectionID) ON A01.shabadID=AS01.shabadID WHERE AS01.shabadID=' . trim($shabad_id) . ' LIMIT 1');
        if ( count($rs) > 0) {
            return $rs[0];
        } else {
            return false;
        }
    }

    public function shabad_line($shabad_id, $lineno) {
        $SG_ScriptureTypes = config('constants.SG_ScriptureTypes');
        $SG_Preferences = config('constants.SG_Preferences');
        $keywords = array();

        if ($shabad_id == 0) {
            redirect('amrit-keertan/index/chapter');
        }
        $lines = $this->get_lines_in_shabad($shabad_id);

        $keywords = $this->get_dictionary_words($lines);

        $lines_result = $lines;

        if (!empty($lines_result)) {
            $youtube = $this->get_youtubeid_for_shabad($shabad_id);
            if(count($youtube) > 0) {
                $page['youtubeID'] = $youtube[0]->youtubeID;
            }else{
                $page['youtubeID'] = "";
            }
        }

        $page['shabad_name'] = '';
        $page['shabad_id'] = $shabad_id;
        $page['shabad_info'] = $this->get_shabad_info($shabad_id);
        $page['lines'] = $lines_result;
        $page['keywords'] = $keywords;
        $page['scripture'] = 'ak';
        $page['highlight_line'] = $lineno;
        $page['remember_me_url'] = $SG_ScriptureTypes['ak']['controller_name_dash'];
        $page['base_url'] = $SG_ScriptureTypes['ak']['controller_name_dash'].'/shabad';
        $page['theme'] = 'theme_3';
//        "Shabad : Dundouth Bundhun Anik Baar Surub Kulaa Sumuruth -ਡੰਡਉਤਿ ਬੰਦਨ ਅਨਿਕ ਬਾਰ ਸਰਬ ਕਲਾ ਸਮਰਥ ॥ : Amrit Keertan Gutka : : ਅਮ੍ਰਿਤ ਕੀਰਤਨ ਗੁਟਕਾ"
        $page['meta_title'] = 'Shabad : ' . $page['shabad_info']->shabad_name . ' -' . $page['shabad_info']->shabad_punjabi . ' : Amrit Keertan Gutka : : ਅਮ੍ਰਿਤ ਕੀਰਤਨ ਗੁਟਕਾ';
        $page['meta_description'] = 'This shabad ' . $page['shabad_info']->shabad_name . ' is by ' . $page['shabad_info']->author . ' in Raag ' . $page['shabad_info']->raag . ' on Page ' . $page['shabad_info']->pageno . '  in Section ' . $page['shabad_info']->section_name . ' of Amrit Keertan Gutka.';
        $page['meta_keywords'] = 'Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan, shabad, shabd, Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan';

        return $page;
    }

    /**
     * Get the chapter name
     */
    function get_chapter_name($chapter_id)
    {
        $SQL = "SELECT section FROM AC01 WHERE sectionID = " . trim($chapter_id);
        return DB::select($SQL);
    }

    /**
     * Get the List of Shabads in a chapter
     */
    function get_shabads_in_chapter($chapter_id)
    {
        $SQL = "SELECT shabadID AS shabad_id,shabad_name, pageID AS pageno FROM ASC01 WHERE sectionID = " . trim($chapter_id) . " ORDER BY pageID ASC";
        return DB::select($SQL);
    }

    /**
     * Shabads in a Chapter
     */
    function chapter_id_name($chapter_id, $chapter_name = '')
    {
        $page['chapter_name'] = $this->get_chapter_name($chapter_id);
        $page['shabads'] = $this->get_shabads_in_chapter($chapter_id);

        // load the page
        $page['theme'] = 'theme_3';
        $page['meta_title'] = 'Amrit Keertan Gutka Shabad Index  :- SearchGurbani.com';
        $page['meta_description'] = 'Explore Amrit Keertan Gutka Shabads Chapter Index  at  SearchGurbani.com';
        $page['meta_keywords'] = 'Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan';

        return $page;
    }
}
