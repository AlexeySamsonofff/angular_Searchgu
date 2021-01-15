<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ResController extends Controller
{
    /**
     * Get hukumnama titles
     */
    function get_hukumnama_titles($ang = 0, $type = 'pageno')
    {
        if($ang != 0)
        {
            $SQL = 'SELECT * FROM `HKM01` WHERE `'.$type.'`= ' . str_replace("_", ".", trim($ang));
        }
        else
        {
            $SQL = "SELECT * FROM `HKM01`";
        }
        return DB::select($SQL);
    }

    /**
     * Get hukumnama lines (paras)
     */
    function get_lines($ang, $type = 'pageno')
    {
        $SQL = '
			SELECT
				S01.ss_para,S01.ID AS id, S01.pageID AS pageno, S01.pagelineID AS pagelineno, S01.lineID AS lineno, S01.shabdID AS shabad_id, S01.shabdlineID AS shabadlineno, S01.attributes AS pattrib,S01.punjabi,S01.translit,S01.english
			FROM
				S01
			JOIN
				`HKM01`
				ON
					S01.lineID >= HKM01.line_start
					AND S01.lineID <= HKM01.line_end
			WHERE
				HKM01.' . $type . ' = ' . str_replace("_", ".", trim($ang));

        return DB::select($SQL);
    }

    function hukumnama()
    {
        $page['hukumnama_titles'] = $this->get_hukumnama_titles();

        // load the page
        $page['theme'] = 'theme_7';
        $page['meta_title'] = 'Hukumnama :- SearchGurbani.com';
        return $page;
    }

    function hukumnama_ang(Request $request)
    {
        $ang = $request->get('ang');
        $type = $request->get('type');
        $page['hukumnama_info'] = $this->get_hukumnama_titles($ang, $type);
        $page['lines'] = $this->get_lines($ang, $type);

        if ($page['hukumnama_info'] != false) {
            $page['hukumnama_info'] = $page['hukumnama_info'][0];
        }

        if ($type == 'pageno') {
            $pageno = str_replace(".", "_", $ang);
            $pageno = explode("_", $ang);
            $page['pageno'] = $pageno[0];
        } else {
            $pageno = str_replace(".", "_", $page['hukumnama_info']->pageno);
            $pageno = explode("_", $page['hukumnama_info']->pageno);
            $page['pageno'] = $pageno[0];
        }

        $page['theme'] = 'theme_7';
        $page['meta_title'] = 'Hukumnama -: Ang ' . $page['pageno'] . ' :- SearchGurbani.com';

        return $page;
    }


    function selectHukamnamaAmrit($dt)
    {
        if ($dt != "") {
            $selectHukam= DB::select("select * FROM HKMDS WHERE date_hukam='$dt' order by adddatetime desc limit 1");
        } else {
            $selectHukam = DB::select("select * FROM HKMDS  order by adddatetime desc limit 1");
        }
        return $selectHukam;
    }

    function get_all_hukumnama()
    {
        $response = DB::table('HKMDS')->select("*")->get();
        return $response;
    }

    // hukum page
    function hukum(Request $request) {
        $dt = $request->get('dt');
        if(!isset($dt)) {
            $dt = '';
        }
        $page = array();
        $page = $this->selectHukamnamaAmrit($dt);

//        $page['hukum_data'] = $this->get_all_hukumnama();
        $date = date('Y-m-d');
        if(isset($page[0])) {
            $date = $page[0]->date_hukam;
        }
        $page['meta_title'] = 'Today ' . date('D d F, Y', strtotime($date)) . ' Hukumnama Harmandir Sahib, Amritsar :SearchGurbani.com';

        if (isset($dt)) {
            $page['meta_title'] = date('D d F, Y', strtotime($date) ). ' Hukumnama Harmandir Sahib, Amritsar :SearchGurbani.com';
        }

        $page['meta_description'] = 'Daily Hukumnama Harmandir Sahib, Amritsar :SearchGurbani.com';
        $page['meta_keywords'] = 'Hukum, Hukumnama, Darbar sahib, Harmandir sahib, Amritsar ';
        $page['og_title'] = "Harmandir Sahib Hukumnama : " . date('D d F, Y', strtotime($date));
        $page['og_url'] = "https://www.searchgurbani.com/hukum/index/?dt=" . $date;

        $page['dt'] = $dt;
        if(!isset($page[0])){
            $page['hukum_message'] = "No hukum data on this Date";
        }
        else {
            $page['id'] = $page[0]->id;
            $page['date_hukam'] = $page[0]->date_hukam;
            $page['hukamdatetime'] = $page[0]->hukamdatetime;
            $page['titlePunjabi'] = $page[0]->titlePunjabi;
            $page['contentPunjabi'] = $page[0]->contentPunjabi;
            $page['viyakhyaPunjabi'] = $page[0]->viyakhyaPunjabi;
            $page['leftFooterPunjabi'] = $page[0]->leftFooterPunjabi;
            $page['rightFooterPunjabi'] = $page[0]->rightFooterPunjabi;
            $page['titleEnglish'] = $page[0]->titleEnglish;
            $page['contentEnglish'] = $page[0]->contentEnglish;
            $page['leftFooterEnglish'] = $page[0]->leftFooterEnglish;
            $page['rightFooterEnglish'] = $page[0]->rightFooterEnglish;
            $page['adddatetime'] = $page[0]->adddatetime;
            $page['js_arr'] = [
                'bootstrap-datepicker',
            ];
            $page['css_arr'] = [
                'bootstrap-datepicker',
            ];
            $page['hukum_url'] = url('/') . 'hukum';
            $page['og_description'] = $page[0]->contentEnglish;
        }
        return $page;
    }

    // hukum/rss

    public function hukum_rss() {
        $dataHukam = array();
        $dataHukam = $this->selectHukamnamaAmritRss();

        $data['feed_name'] = 'Searchgurbani.com';
        $data['encoding'] = 'utf-8';
        $data['feed_url'] = 'http://www.searchgurbani.com/hukam/rss';
        $data['page_description'] = 'Harmandar Sahib Hukmnama at SearchGurbani.com';
        $data['page_language'] = 'en-en';
        $data['posts'] = $dataHukam;
        header("Content-Type: application/rss+xml");
        return view('rss', $data);
    }

    function selectHukamnamaAmritRss() {
        $query = "select * FROM HKMDS  order by adddatetime desc limit 10";
        return DB::select($query);
    }

    /**
     * Get lines count
     */
    function get_kosh_lines_count($keyword, $table = '', $alpha = '')
    {
        if ($table == 'SK01') {
            $SQL = "
				SELECT count(*) as `cnt` from `SK01` where punjabi like '" . ($alpha == 'alpha' ? '' : '%') . trim($keyword) . "%'
			";
        } else {
            $SQL = "
				SELECT count(*) as `cnt` from `" . $table . "` where word like '" . ($alpha == 'alpha' ? '' : '%') . trim($keyword) . "%'
			";
        }
       return DB::select($SQL);
    }

    /**
     * Get lines
     */
    function get_kosh_lines($keyword, $table = '', $index = 0, $alpha = '')
    {
        if ($table == 'SK01') {
            $SQL = "
				SELECT
					ID as `id`,
					punjabi as `word`,
					roman as `roman`,
					Gurmukhi as `gurmukhi`,
					English as `english`,
					`mahankosh` as `mahankosh`
				from `" . $table . "` where punjabi like '" . ($alpha == 'alpha' ? '' : '%') . trim($keyword) . "%'
			LIMIT " . $index . ",25
			";
        } else {
            $SQL = "
				SELECT * from `" . $table . "` where word like '" . ($alpha == 'alpha' ? '' : '%') . trim($keyword) . "%'
				LIMIT " . $index . ",25
			";
        }
        return DB::select($SQL);
    }

    function mahan_kosh_view(Request $request)
    {
        $keyword = $request->get('keyword');
        $alpha = $request->get('alpha');
        $index = $request->get('page');
        $index = intval($index) * 25;
        $lines_count = $this->get_kosh_lines_count($keyword, 'MK01', $alpha);
        $page['lines_count'] = $lines_count[0]->cnt;
        $page['search_results_info'] = array("showing_from" => $index + 1,
            "showing_to" => ($index + 25 > $page['lines_count'] ? $page['lines_count'] : $index + 25),
            "total_results" => $page['lines_count']
        );
        $page['lines'] = $this->get_kosh_lines($keyword, 'MK01', $index, $alpha);
        // load the page
        $page['theme'] = 'theme_1';
        $page['meta_title'] = 'GurShabad Ratanakar Mahankosh Index: ' . $keyword . '
:- SearchGurbani.com';
        $page['meta_description'] = 'Gur Shabad Ratanakar Mahankosh by Kahan Singh Nabha, popularly known as Mahankosh is a not only the first dictionary of Sikh Scripture and books on Sikh Religion ';
        $page['meta_keywords'] = 'Sri Guru ,Granth ,Kosh , Mahan Kosh, Kahan Singh, Nabha';
        $page['base_url'] = 'mahan-kosh/view';
        return $page;
    }

    public function get_resources_allwords($searchVal){

        if($searchVal['table_name'] == 'GurShabad Ratanakar Mahankosh') {
            $SQL = "SELECT LTRIM(`word`) AS word, ID AS id FROM `MK01` WHERE `word` like '%" .
                trim($searchVal['keyword']) . "%' LIMIT 100";
        }
        elseif($searchVal['table_name'] == 'Sri Guru Granth Kosh') {
            $SQL = "SELECT LTRIM(`word`) AS word, id FROM `GK01` WHERE `word` like '%" .
                trim($searchVal['keyword']) . "%' LIMIT 100";
        }
        elseif($searchVal['table_name'] == 'Maansarovar') {
            $SQL = "SELECT LTRIM(`words`) AS word, id FROM `B-MAAN` WHERE `words` like '%" .
                trim($searchVal['keyword']) . "%' LIMIT 100";
        }
        elseif($searchVal['table_name'] == 'SGGS Kosh') {
            $SQL = "SELECT LTRIM(`punjabi`) AS word, ID FROM `SK01` WHERE `punjabi` like '%" .
                trim($searchVal['keyword']) . "%' LIMIT 100";
        }
        else{
            return $rs=array();
        }
        return DB::select($SQL);
    }

    function get_resources_words(Request $request){
        $search = array();
        $q = $request->get('q');
        $search['keyword'] = trim($q, "'");
        if(empty($search['keyword'])) {
            return ['status'=>false];
        }
        $search['table_name'] = $request->get('table_name');
        $results = $this->get_resources_allwords($search);
        return $results;
    }

    function mahan_kosh_search(Request $request) {

    }

    function guru_granth_kosh_view(Request $request) {
        $keyword = $request->get('keyword');
        $alpha = $request->get('alpha');
        $index = $request->get('page');
        $index = intval($index) * 25;
        $lines_count = $this->get_kosh_lines_count($keyword, 'GK01', $alpha);
        $page['lines_count'] = $lines_count[0]->cnt;
        $page['search_results_info'] = array("showing_from" => $index + 1,
            "showing_to" => ($index + 25 > $page['lines_count'] ? $page['lines_count'] : $index + 25),
            "total_results" => $page['lines_count']
        );

        $page['lines'] = $this->get_kosh_lines($keyword, 'GK01', $index, $alpha);
        // load the page
        $page['theme'] = 'theme_2';
        $page['base_url'] = 'guru-granth-kosh/view';
        $page['meta_title'] = 'Guru Granth Kosh-Index ' . $keyword . '-:ਗੁਰੂ ਗਰੰਥ ਕੋਸ਼ :- SearchGurbani.com';
        $page['meta_description'] = 'Sri Guru Granth Kosh by Dr Gurcharan Singh is a dictionary of Sikh Scriptures and books on Sikh Religion. ';
        $page['meta_keywords'] = 'Sri Guru ,Granth ,Kosh ';
        return $page;
    }

    /**
     * Get list of chapters in volume
     */
    function get_chapters($book_id = 1, $volume_id = 1)
    {
        $SQL = "SELECT * from BC01 WHERE book_id = " . trim($book_id) . " and volume_id = " . $volume_id;
        return DB::select($SQL);
    }

    function res_sri_nanak_prakash_chapters($chapterId) {
        $page['chapters'] = $this->get_chapters(1, $chapterId);
        $page['volume_id'] = $chapterId;
        // load the page
        $page['theme'] = 'theme_3';
        $page['meta_title'] = 'Sri Nanak Prakash Chapter Index-:-ਸ੍ਰੀ ਨਾਨਕ ਪ੍ਰਕਾਸ਼   :- SearchGurbani.com';
        $page['meta_description'] = 'Sri Nanak Prakash Chapter Index';
        $page['meta_keywords'] = 'Sri ,Nanak ,Prakash. Granth, Gur, Pratap , Suraj, Santokh, ';
        return $page;
    }

    /**
     * Get lines count
     */
    function get_lines_count($book_id = 1, $volume_id = 1, $page_no = 1, $table = '')
    {
        $SQL = "SELECT count(*) as `cnt` from `" . $table . "` WHERE volume_id = " . trim($volume_id);
        return DB::select($SQL);
    }

    /**
     * Get lines of chapter and volume
     */
    function res_get_lines($book_id = 1, $volume_id = 1, $page_no = 1, $table = '')
    {
        $SQL = "SELECT * from `" . $table . "` WHERE volume_id = " . trim($volume_id) . " and page_id = " . trim($page_no);
        return DB::select($SQL);
    }

    function res_sri_nanak_prakash_page(Request $request)
    {
        $page_no = $request->get('page_no');
        $label1 = $request->get('label');
        if(!isset($label1)) {
            $label1 = 'volume';
        }
        $volume_id = $request->get('volume_id');
        if(!$volume_id || $volume_id == 'undefined') {
            $volume_id = 1;
        }
        $lines_count = $this->get_lines_count(1, $volume_id, $page_no, 'B-SNP');
        $page['lines_count'] = $lines_count[0]->cnt;

        if ($page_no >= 1 and $page_no <= $page['lines_count']) {
            $lines = $this->res_get_lines(1, $volume_id, $page_no, 'B-SNP');

        } else {
            $page_no = 1;
            $lines = $this->res_get_lines(1, $volume_id, $page_no, 'B-SNP');

        }
        $page['highlight'] = true;
        $page['page_no'] = $page_no;
        $page['volume_id'] = $volume_id;
        $page['lines'] = $lines;
        // load the page
        $page['theme'] = 'theme_3';
        $page['base_url'] = 'sri-nanak-prakash/page';
        $page['meta_title'] = 'Sri Nanak Prakash -:-ਸ੍ਰੀ ਨਾਨਕ ਪ੍ਰਕਾਸ਼  page ' . $page_no . ' :- SearchGurbani.com';

        return $page;
    }

    function get_occurrences_count($keyword, $book_id)
    {
        $books = config('constants.books');
        $SQL = "SELECT count(*) as `cnt` FROM `" . $books[$book_id]['table'] . "`WHERE text like '%?%'";
        return DB::select($SQL, array(trim($keyword)));
    }

    function get_occurrences($keyword, $book_id, $index = 0)
    {
        // Global Variables
        $books = config('constants.books');
        $keyword = trim($keyword);
        $SQL = "
			SELECT
			*,
			(
				(
					CHAR_LENGTH(text) - (
											CHAR_LENGTH(
												REPLACE(text,'?','')
											)
										)
				)
				/
				CHAR_LENGTH('?')
			) as `weight`
			FROM `" . $books[$book_id]['table'] . "`
			WHERE
				text like '%?%'
			ORDER BY weight DESC
			LIMIT " . $index . ",25
		";
        return DB::select($SQL, array($keyword, $keyword, trim($keyword)));
    }

    function res_sri_nanak_prakash_search_preview(Request $request) {
        $index = $request->get('page');
        $index = intval($index) * 25;
        $keyword = $request->get('keyword');

        $occurrences_count = $this->get_occurrences_count($keyword, 1);
        $page['occurrences_count'] = $occurrences_count[0]->cnt;
        $page['occurrences'] = $this->get_occurrences($keyword, 1, $index);

        $page['search_results_info'] = array("showing_from" => $index + 1,
            "showing_to" => ($index + 25 > $page['occurrences_count'] ?
                $page['occurrences_count'] : $index + 25),
            "total_results" => $page['occurrences_count']
        );
        // load the page
        $page['base_url'] = 'sri-nanak-prakash/search-preview';

        $page['theme'] = 'theme_3';
        $page['meta_title'] = 'Sri Nanak Prakash Search Results -:-ਸ੍ਰੀ ਨਾਨਕ ਪ੍ਰਕਾਸ਼   :- SearchGurbani.com';
        $page['meta_description'] = 'Sri Gur Pratap Suraj Granth Search Results ';
        $page['meta_keywords'] = 'Sri ,Nanak ,Prakash. Granth, Gur, Pratap , Suraj, Santokh, ';

        return $page;
    }

    function sgpsg_search_preview(Request $request)
    {
        $index = $request->get('page');
        $index = intval($index) * 25;
        $keyword = $request->get('keyword');

        $occurrences_count = $this->get_occurrences_count($keyword, 2);
        $page['occurrences_count'] = $occurrences_count[0]->cnt;
        $page['occurrences'] = $this->get_occurrences($keyword, 2, $index);

        $page['search_results_info'] = array("showing_from" => $index + 1,
            "showing_to" => ($index + 25 > $page['occurrences_count'] ?
                $page['occurrences_count'] : $index + 25),
            "total_results" => $page['occurrences_count']
        );
        // load the page
        $page['base_url'] = 'sri-gur-pratap-suraj-granth/search-preview';
        $page['theme'] = 'theme_4';
        $page['meta_title'] = 'Sri Gur Pratap Suraj Granth Search results-:-ਸ੍ਰੀ ਗੁਰ ਪ੍ਰਤਾਪ ਸੂਰਜ ਗਰੰਥ   :- SearchGurbani.com';
        $page['meta_description'] = 'Sri Gur Pratap Suraj Granth Search Results ';
        $page['meta_keywords'] = 'Sri ,Nanak ,Prakash. Granth, Gur, Pratap , Suraj, Santokh, ';

        return $page;
    }

    /**
     * Get list of volumes
     */
    function get_volumes($book_id)
    {
        $SQL = "SELECT * from BV01 WHERE book_id = " . trim($book_id);
        return DB::select($SQL);
    }

    function sgpsg_volumes()
    {
        $page['volumes'] = $this->get_volumes(2);
        // load the page
        $page['theme'] = 'theme_4';
        $page['meta_title'] = 'Sri Gur Pratap Suraj Granth Volume Index-:-ਸ੍ਰੀ ਗੁਰ ਪ੍ਰਤਾਪ ਸੂਰਜ ਗਰੰਥ   :- SearchGurbani.com';
        $page['meta_description'] = 'Sri Gur Pratap Suraj Granth Volume Index';
        $page['meta_keywords'] = 'Sri ,Nanak ,Prakash. Granth, Gur, Pratap , Suraj, Santokh, ';
        return $page;
    }

    function sgpsg_chapters(Request $request) {
        $volume_id = $request->get('volume_id');

        $page['chapters'] = $this->get_chapters(2, $volume_id);
        $page['volume_id'] = $volume_id;
        // load the page
        $page['theme'] = 'theme_4';
        $page['meta_title'] = 'Sri Gur Pratap Suraj Granth Chapter Index-:-ਸ੍ਰੀ ਗੁਰ ਪ੍ਰਤਾਪ ਸੂਰਜ ਗਰੰਥ   :- SearchGurbani.com';
        $page['meta_description'] = 'Sri Gur Pratap Suraj Granth Chapter Index';
        $page['meta_keywords'] = 'Sri ,Nanak ,Prakash. Granth, Gur, Pratap , Suraj, Santokh, ';
        return $page;
    }


    function sgpsg_page(Request $request)
    {
        $page_no = $request->get('page_no');
        $label1 = 'volume';
        $volume_id = $request->get('volume_id');
        $lines_count = $this->get_lines_count(2, $volume_id, $page_no, 'B-SGPS');
        $page['lines_count'] = $lines_count[0]->cnt;

        if ($page_no >= 1 and $page_no <= $page['lines_count']) {
            $lines = $this->res_get_lines(2, $volume_id, $page_no, 'B-SGPS');
        } else {
            $page_no = 1;
            $lines = $this->res_get_lines(2, $volume_id, $page_no, 'B-SGPS');
        }
        $page['highlight'] = true;
        $page['page_no'] = $page_no;
        $page['volume_id'] = $volume_id;
        $page['lines'] = $lines;
        // load the page
        $page['theme'] = 'theme_4';
        $page['base_url'] = 'sri-gur-pratap-suraj-granth/page';
        $page['meta_title'] = 'Sri Gur Pratap Suraj Granth page-' . $page_no . '--Volume ' . $volume_id . '-:-ਸ੍ਰੀ ਗੁਰ ਪ੍ਰਤਾਪ ਸੂਰਜ ਗਰੰਥ   :- SearchGurbani.com';
        $page['meta_description'] = 'Explore Sri Gur Pratap Suraj Granth page ' . $page_no . '';
        $page['meta_keywords'] = 'Sri ,Nanak ,Prakash. Granth, Gur, Pratap , Suraj, Santokh, ';
        return $page;
    }

    function fwt_search_preview(Request $request)
    {
        $index = $request->get('page');
        $index = intval($index) * 25;
        $keyword = $request->get('keyword');
        $occurrences_count = $this->get_occurrences_count($keyword, 3);
        $page['occurrences_count'] = $occurrences_count[0]->cnt;
        $page['occurrences'] = $this->get_occurrences($keyword, 3, $index);

        $page['search_results_info'] = array("showing_from" => $index + 1,
            "showing_to" => ($index + 25 > $page['occurrences_count'] ?
                $page['occurrences_count'] : $index + 25),
            "total_results" => $page['occurrences_count']
        );
        // load the page
        $page['base_url'] = 'faridkot-wala-teeka/search-preview';
        $page['theme'] = 'theme_5';
        $page['meta_title'] = 'Faridkot Wala Teeka Search Results -:ਫਰੀਦਕੋਟ ਵਾਲਾ ਟੀਕਾ - SearchGurbani.com';
        $page['meta_description'] = 'Faridkot Wala Teeka is classical exegesis of Sri Guru Granth Sahib in Braj Bhasha by a team of scholars of Nirmala Sect.';
        $page['meta_keywords'] = 'Faridkot Wala, Teeka , Granth, Sahib, Nirmala, Guru Granth, Sikh, Gurbani ';
        return $page;
    }

    function fwt_page(Request $request)
    {
//        dd($request->all());

        $page_no = $request->get('page_no');
        $page_no = intval($page_no);
        $label1 = 'volume';
        $volume_id = $request->get('volume_id');
        $volume_id = intval($volume_id);
        $lines_count = $this->get_lines_count(3, $volume_id, $page_no, 'B-FWT');
        $page['lines_count'] = $lines_count[0]->cnt;

        if ($page_no >= 1 && $page_no <= $page['lines_count']) {
            $lines = $this->res_get_lines(3, $volume_id, $page_no, 'B-FWT');
        } else {
            $page_no = 1;
            $lines = $this->res_get_lines(3, $volume_id, $page_no, 'B-FWT');
        }
        $page['highlight'] = true;
        $page['page_no'] = $page_no;
        $page['volume_id'] = $volume_id;
        $page['lines'] = $lines;
        $page['base_url'] = 'faridkot-wala-teeka/page';

        // load the page
        $page['theme'] = 'theme_5';
        $page['meta_title'] = 'Faridkot Wala Teeka: Page ' . $page_no . ':ਫਰੀਦਕੋਟ ਵਾਲਾ ਟੀਕਾ - SearchGurbani.com';
        $page['meta_description'] = 'Faridkot Wala Teeka is classical exegesis of Sri Guru Granth Sahib in Braj Bhasha by a team of scholars of Nirmala Sect.';
        $page['meta_keywords'] = 'Faridkot Wala, Teeka , Granth, Sahib, Nirmala, Guru Granth, Sikh, Gurbani ';
        return $page;
    }

    function fwt_chapters(Request $request)
    {
        $volume_id = $request->get('volume_id');
        $volume_id = intval($volume_id);
        $page['chapters'] = $this->get_chapters(3, $volume_id);
        $page['volume_id'] = $volume_id;
        // load the page
        $page['theme'] = 'theme_5';
        $page['meta_title'] = 'Faridkot Wala Teeka Chapter Index:ਫਰੀਦਕੋਟ ਵਾਲਾ ਟੀਕਾ :- SearchGurbani.com';
        $page['meta_description'] = 'Faridkot Wala Teeka is classical exegesis of Sri Guru Granth Sahib in Braj Bhasha by a team of scholars of Nirmala Sect.';
        $page['meta_keywords'] = 'Faridkot Wala, Teeka , Granth, Sahib, Nirmala, Guru Granth, Sikh, Gurbani ';
        return $page;
    }

    function sggd_page(Request $request)
    {
        $page_no = $request->get('page_no');
        $label1 = 'volume';
        $volume_id = $request->get('volume_id');
        $lines_count = $this->get_lines_count(4, $volume_id, $page_no, 'B-GGD');
        $page['lines_count'] = $lines_count[0]->cnt;
        if ($page_no >= 1 and $page_no <= $page['lines_count']) {
            $lines = $this->res_get_lines(4, $volume_id, $page_no, 'B-GGD');
        } else {
            $page_no = 1;
            $lines = $this->res_get_lines(4, $volume_id, $page_no, 'B-GGD');
        }
        $page['highlight'] = true;
        $page['page_no'] = $page_no;
        $page['volume_id'] = $volume_id;
        $page['lines'] = $lines;
        $page['base_url'] = 'sri-guru-granth-darpan/page';
        // load the page
        $page['theme'] = 'theme_6';
        $page['meta_title'] = 'Sri Guru Granth Darpan Page : ' . $page_no . ' : ਸ੍ਰੀ ਗੁਰੂ ਗਰੰਥ ਦਰ੍ਪਣ:- SearchGurbani.com';
        $page['meta_description'] = 'Sri Guru Granth Darpan by Professor Sahib Singh Gurmukhi text to Punjabi (Gurmukhi) translation of all of Siri Guru Granth Sahib. ';
        $page['meta_keywords'] = 'Guru Granth Darpan,Guru Granth, sahib, Singh, exegesis';
        return $page;
    }

    /**
     * Get words from maansarovar
     */
    function get_maan_words($keyword = '', $index = 0, $alpha = '')
    {
        $SQL = "
			SELECT
				DISTINCT word as `word`
			from
				`B-MAAN`
			where
				`word` <> ''
				AND word like '" . ($alpha == 'alpha' ? '' : '%') . trim($keyword) . "%'
		";
        return DB::select($SQL);
    }

    function maansarovar_words(Request $request)
    {
//        $keyword = $this->session->userdata('maan_keyword');
//        $alpha = $this->session->userdata('maan_alpha');
        $keyword = $request->get('keyword');
        $alpha = $request->get('alpha');
        $index = 0;
        $page['keyword'] = $keyword;
        $page['words'] = $this->get_maan_words($keyword, $index, $alpha);
        // load the page
        $page['theme'] = 'theme_3';
        $page['meta_title'] = 'Maansarovar :- SearchGurbani.com';
        $page['meta_description'] = 'Maansarovar';
        $page['meta_keywords'] = 'Maansarovar';

        return $page;
    }

    /**
     * Get quotations from maansarovar
     */
    function get_maan_quotations($keyword = '')
    {
        $SQL = "
			SELECT
				*
			from
				`B-MAAN`
			where
				`words` = '" . trim($keyword) . "'
		";
        return DB::select($SQL);
    }

    function maansarovar_quotations($word)
    {
        $page['word'] = $word;
        $page['quotations'] = $this->get_maan_quotations($word);

        // load the page
        $page['theme'] = 'theme_3';
        $page['meta_title'] = 'Maanasarovar :- SearchGurbani.com';
        $page['meta_description'] = 'Maanasarovar';
        $page['meta_keywords'] = 'Maanasarovar';
        return $page;
    }

    function sggd_search_preview(Request $request)
    {
        $index = $request->get('page');
        $index = intval($index) * 25;
        $keyword = $request->get('keyword');

        $occurrences_count = $this->get_occurrences_count($keyword, 4);
        $page['occurrences_count'] = $occurrences_count[0]->cnt;
        $page['occurrences'] = $this->get_occurrences($keyword, 4, $index);

        $page['search_results_info'] = array("showing_from" => $index + 1,
            "showing_to" => ($index + 25 > $page['occurrences_count'] ?
                $page['occurrences_count'] : $index + 25),
            "total_results" => $page['occurrences_count']
        );

        // load the page
        $page['theme'] = 'theme_6';
        $page['base_url'] = 'sri-guru-granth-darpan/search-preview';
        $page['meta_title'] = 'Sri Guru Granth Darpan Search results: Prof Sahib Singh:- SearchGurbani.com';
        $page['meta_description'] = 'Siri Guru Granth Darpan by Professor Sahib Singh Gurmukhi text to Punjabi (Gurmukhi) translation of all of Siri Guru Granth Sahib. ';
        $page['meta_keywords'] = 'Guru Granth Darpan,Guru Granth, sahib, Singh, exegesis';

        return $page;
    }

    function compilation_page(Request $request) {
        $page_no = $request->get('page');
        $volume_id = $request->get('volume_id');
        $lang = $request->get('lang');
        $label1 = 'volume';
        $page['lines_count'] = $this->get_lines_count(7, $volume_id, $page_no, 'B-COMP');

        if ($page_no >= 1 and $page_no <= $page['lines_count']) {
            $lines = $this->res_get_lines(7, $volume_id, $page_no, 'B-COMP');
        } else {
            $page_no = 1;
            $lines = $this->res_get_lines(7, $volume_id, $page_no, 'B-COMP');
        }
        $page['highlight'] = ($lang == 'highlight' ? true : false);
        $page['page_no'] = $page_no;
        $page['volume_id'] = $volume_id;
        $page['lines'] = $lines;
        // load the page
        $page['theme'] = 'theme_3';
        $page['meta_title'] = 'Compilation of Sri Guru Granth Sahib -: Page ' . $page_no . ' :- SearchGurbani.com';

        return $page;
    }

    function music_page(Request $request) {
        $page_no = $request->get('page');
        $volume_id = $request->get('volume_id');
        $lang = $request->get('lang');
        $label1 = 'volume';
        $page['lines_count'] = $this->get_lines_count(6, $volume_id, $page_no, 'B-MUSIC');

        if ($page_no >= 1 and $page_no <= $page['lines_count']) {
            $lines = $this->res_get_lines(6, $volume_id, $page_no, 'B-MUSIC');
        } else {
            $page_no = 1;
            $lines = $this->res_get_lines(6, $volume_id, $page_no, 'B-MUSIC');
        }
        $page['highlight'] = ($lang == 'highlight' ? true : false);
        $page['page_no'] = $page_no;
        $page['volume_id'] = $volume_id;
        $page['lines'] = $lines;
        // load the page
        $page['theme'] = 'theme_3';
        $page['meta_title'] = 'Indian Classical Music and Sikh Kirtan -: Page ' . $page_no . ' :- SearchGurbani.com';

        return $page;
    }

    function sggs_kosh_view(Request $request)
    {
        $index = $request->get('page');
        $keyword = $request->get('keyword');
        $alpha = $request->get('alpha');
        $index = 25 * intval($index);

        $lines_count = $this->get_kosh_lines_count($keyword, 'SK01', $alpha);
        $page['lines_count'] = $lines_count[0]->cnt;
        $page['search_results_info'] = array("showing_from" => $index + 1,
            "showing_to" => ($index + 25 > $page['lines_count'] ? $page['lines_count'] : $index + 25),
            "total_results" => $page['lines_count']
        );

        $page['lines'] = $this->get_kosh_lines($keyword, 'SK01', $index, $alpha);
        // load the page
        $page['theme'] = 'theme_7';
        $page['meta_title'] = 'Search Gurbani Research Website :- SearchGurbani.com';
        $page['meta_description'] = 'Gur Shabad Ratanakar Mahankosh by Kahan Singh Nabha, popularly known as Mahankosh is a not only the first dictionary of Sikh Scripture and books on Sikh Religion ';
        $page['meta_keywords'] = 'Sri Guru ,Granth ,Kosh , Mahan Kosh, Kahan Singh, Nabha';
        $page['base_url'] = 'sggs-kosh/view';
        return $page;
    }

    function get_meta(Request $request) {
        $url = $request->get('url');
        $metas = DB::select("SELECT * FROM ME01");
        $i = 0;
        for ($i = 0; $i<count($metas); $i++) {
            if($metas[$i]->url == $url) {
                break;
            }
        }
        return ['data' => $metas[$i]];
    }
}
