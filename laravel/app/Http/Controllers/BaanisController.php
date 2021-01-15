<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BaanisController extends Controller
{

    //Japji Sahib

    function get_japji_sahib($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 1 and lineID <= 385
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";

      return DB::select($SQL);
    }

    // get_japji_sahib
    public function japji_sahib(Request $request)
    {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 385;
        $limit            = 25;
        $index = $page_no * 25 - 25;
        $total_page       = 16;
        $first_page_index = 0;
        $total_page_index = 375;
        $page['lines']            = $this->get_japji_sahib($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']         = 'baanis/japji-sahib';

        $page['baani_title']      = 'Japji Sahib';
        $page['audio']            = 'japji_sahib.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Japji Sahib with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';

        return $page;
    }

    /**
     * Get lines of jaap_sahib
     */

    function get_jaap_sahib($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno, pagelineID AS pagelineno, lineID AS lineno, attributes AS lattrib, punjabi, english, hindi, roman, urdu, teeka AS dgteeka, translit
		FROM
			D01
		WHERE
			lineID >= 1 and lineID <= 807
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";

        return DB::select($SQL);
    }


    // jaap_sahib
    function jaap_sahib(Request $request)
    {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count = 807;
        $limit = 25;
        $index = $page_no * 25 - 25;
        $current_page = ($index / 25) + 1;
        $total_page = 33;
        $first_page_index = 0;
        $total_page_index = 800;

        $page['lines']            = $this->get_jaap_sahib($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url'] = 'baanis/jaap-sahib';
        $page['baani_title']  = 'Jaap Sahib';
        $page['audio']        = 'jaap_sahib.mp3';
        $page['current_page'] = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Jaap Sahib with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    /**
     * Get lines of Tvai Prasadh Savaiye
     */
    function get_tvai_prasadh_savaiye($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno, pagelineID AS pagelineno, lineID AS lineno, attributes AS lattrib, punjabi, english, hindi, roman, urdu, teeka AS dgteeka, translit
		FROM
			D01
		WHERE
			lineID >= 900 and lineID <= 940
	    ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";

        return DB::select($SQL);
    }

    // tvai_prasadh_savaiye
    public function tvai_prasadh_savaiye(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 40;
        $limit            = 25;
        $index =  25 * $current_page - 25;
        $total_page       = 2;
        $first_page_index = 0;
        $total_page_index = 25;

        $page['lines']            = $this->get_tvai_prasadh_savaiye($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );

        $page['base_url'] = 'baanis/tvai-prasadh-savaiye';
        $page['baani_title']  = 'Tvai Prasadh Savaiye';
        $page['audio']        = 'tvai_prasadh_savaiye.mp3';
        $page['current_page'] = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Tvai Prasadh Savaiye with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';

        return $page;
    }

    function get_tvai_prasadh_savaiye_dheenan_kee($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno, pagelineID AS pagelineno, lineID AS lineno, attributes AS lattrib, punjabi, english, hindi, roman, urdu, teeka AS dgteeka, translit
		FROM
			D01
		WHERE
			lineID >= 1780 and lineID <= 1820
	    ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";

        return DB::select($SQL);
    }

    // tvai_prasadh_savaiye_dheenan_kee
    public function tvai_prasadh_savaiye_dheenan_kee(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 40;
        $limit            = 25;
        $index =  25 * $current_page - 25;
        $total_page       = 2;
        $first_page_index = 0;
        $total_page_index = 25;

        $page['lines']            = $this->get_tvai_prasadh_savaiye_dheenan_kee($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );

        $page['base_url'] = 'baanis/tvai-prasaadh-savaiye-dheenan-kee';
        $page['baani_title']  = 'Tvai Prasadh Savaiye ( Dheenan Kee)';
        $page['audio']        = '';
        $page['current_page'] = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Tvai Prasadh Savaiye ( Dheenan Kee) at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye ( Dheenan Kee), Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';

        return $page;
    }

    // shabad_hazare_paatishahi_10

    function get_shabad_hazare_paatishahi_10($index = 0, $limit = 25) {
        $SQL = "
		SELECT
			pageID AS pageno, pagelineID AS pagelineno, lineID AS lineno, attributes AS lattrib, punjabi, english, hindi, roman, urdu, teeka AS dgteeka, translit
		FROM
			D01
		WHERE
			lineID >= 31593 and lineID <= 31681
	    ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";

        return DB::select($SQL);
    }

    function shabad_hazare_paatishahi_10(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 88;
        $limit            = 25;
        $index =  25 * $current_page - 25;

        $page['lines']            = $this->get_shabad_hazare_paatishahi_10($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );

        $page['base_url'] = 'baanis/shabad-hazare-paatishahi-10';
        $page['baani_title']  = 'Shabad Hazare Paatishahi 10';
        $page['audio']        = '';
        $page['current_page'] = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Shabad Hazare Paatishahi 10 at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Shabad Hazare Paatishahi 10, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';

        return $page;
    }

    //Chaupai Sahib

    function get_chaupai_sahib($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno, pagelineID AS pagelineno, lineID AS lineno, attributes AS lattrib, punjabi, english, hindi, roman, urdu, teeka AS dgteeka, translit
		FROM
			D01
		WHERE
			lineID >= 65823 and lineID <= 65943
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";

        return DB::select($SQL);
    }

    // chaupai_sahib
    public  function chaupai_sahib(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 121;
        $limit            = 25;
        $index =  25 * $current_page - 25;
        $total_page       = 5;
        $first_page_index = 0;
        $total_page_index = 100;

        $page['lines']            = $this->get_chaupai_sahib($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']         = 'baanis/chaupai-sahib';

        $page['baani_title']      = 'Chaupai Sahib';
        $page['audio']            = 'chaupai_sahib.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Chaupai Sahib with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //Anand Sahib

    public function get_anand_sahib($index = 0, $limit = 25)
    {
        $SQL = "
				SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu

		FROM
			S01
		WHERE
			lineID >= 39320 and lineID <= 39529
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";

        return DB::select($SQL);
    }

    // anand_sahib
    public function anand_sahib(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 210;
        $limit            = 25;
        $index  = 25 * $current_page - 25;
        $total_page       = 9;
        $first_page_index = 0;
        $total_page_index = 200;

        $page['lines']            = $this->get_anand_sahib($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );

        $page['base_url']         = 'baanis/anand-sahib';

        $page['baani_title']      = 'Anand Sahib';
        $page['audio']            = 'anand_sahib.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Anand Sahib  with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    // rehraas_sahib

    //Rehraas Sahib

    function get_rehraas_sahib($index = 0, $limit = 25)
    {

        $SQL1 = "
        SELECT 
			lineID AS lineno, translit, punjabi, hindi, english
		FROM 
			S01
		WHERE 
			lineID >= 20475 and lineID <= 20478
		ORDER BY lineno ASC
		";

		
		$sql2 = "
        SELECT 
			lineID AS lineno,translit,punjabi,hindi,english
		FROM 
			S01
		WHERE 
			lineID>= 21213 and lineID <= 21220
		ORDER BY lineno ASC";

		$sql3 = "SELECT 
			lineID AS lineno,translit,punjabi,hindi,english
		FROM 
			S01
		WHERE 
			lineID >= 386 and lineID <= 533
        ORDER BY lineno ASC";
		
		$sql4 = "SELECT 
			lineID AS lineno,translit,punjabi,hindi,english
		FROM 
			D01
		WHERE 
			lineID >= 65823 and lineID <= 65943
		ORDER BY lineno ASC";


		$sql5 = "SELECT 
			lineID AS lineno,translit,punjabi,hindi,english
		FROM 
			D01
		WHERE 
			lineID >= 13116 and lineID <= 13122	
		ORDER BY lineno ASC";

		$sql6 = "SELECT 
			lineID AS lineno,translit,punjabi,hindi,english
		FROM 
			S01
		WHERE 
			lineID >= 39320 and lineID <= 39347
		ORDER BY lineno ASC";

		
		$sql7= "SELECT 
			lineID AS lineno,translit,punjabi,hindi,english
		FROM 
			S01
		WHERE 
			lineID >= 39524 and lineID <= 39529
		ORDER BY lineno ASC";

		
		$sql8 = "SELECT 
			lineID AS lineno,translit,punjabi,hindi,english
		FROM 
			S01
		WHERE 
			lineID >= 60557 and lineID <= 60567
		ORDER BY lineno ASC";

		
		$sql9 = "SELECT 
			lineID AS lineno,translit,punjabi,hindi,english
		FROM 
			S01
		WHERE 
			lineID >= 41301 and lineID <= 41309
		ORDER BY lineno ASC";

		
		$sql10 = "SELECT 
			lineID AS lineno,translit,punjabi,hindi,english
		FROM 
			S01
		WHERE 
			lineID >= 23134 and lineID <= 23149
		ORDER BY lineno ASC";
//		LIMIT
//			$index, $limit

        $res1 = DB::select($SQL1);
		$res2 = DB::select($sql2);
		$res3 = DB::select($sql3);
		$res4 = DB::select($sql4);
		$res5 = DB::select($sql5);
		$res6 = DB::select($sql6);
		$res7 = DB::select($sql7);
		$res8 = DB::select($sql8);
		$res9 = DB::select($sql9);
		$res10 = DB::select($sql10);

		$res = array_merge($res1, $res2, $res3, $res4, $res5, $res6, $res7, $res8, $res9, $res10);
		return array_slice($res, $index, $limit);
    }

    public function rehraas_sahib(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 357;
        $limit            = 25;
        $index            = 25 * $current_page - 25;
        $total_page       = 15;
        $first_page_index = 0;
        $total_page_index = 350;

        $page['lines']            = $this->get_rehraas_sahib($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']         = 'baanis/rehraas-sahib';
        $page['baani_title']      = 'Rehraas Sahib';
        $page['audio']            = 'rehraas_sahib.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Rehraas Sahib with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //Kirtan Sohila

    function get_kirtan_sohila($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 534 and lineID <= 589
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";

        return DB::select($SQL);
    }

    public function kirtan_sohila(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 56;
        $limit            = 25;
        $index            = 25 * $current_page - 25;
        $total_page       = 3;
        $first_page_index = 0;
        $total_page_index = 50;

        $page['lines']            = $this->get_kirtan_sohila($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']         = 'baanis/kirtan-sohila';
        $page['baani_title']      = 'Kirtan Sohila';
        $page['audio']            = 'kirtan_sohila.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Kirtan Sohila with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //Anand Sahib(Bhog)

    function get_anand_sahib_bhog($index = 0, $limit = 25)
    {
        $SQL = "
				SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
        FROM
			S01
		WHERE
			(lineID >= 39320 and lineID <= 39347) OR
			(lineID >= 39524 and lineID <= 39529)
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";
        return DB::select($SQL);
    }


    public function anand_sahib_bhog(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;

        $record_count     = 34;
        $limit            = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 2;
        $first_page_index = 0;
        $total_page_index = 25;

        $page['lines']            = $this->get_anand_sahib_bhog($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );

        $page['base_url']     = 'baanis/anand-sahib-bhog';

        $page['baani_title']  = 'Anand Sahib (Bhog)';
        $page['audio']        = 'anand_sahib_bhog.mp3';
        $page['current_page'] = $current_page;

        $page['theme'] = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Anand Sahib (Bhog) with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //Aarti

    function get_aarti($index = 0, $limit = 25)
    {

        $sql1 = "
        SELECT
			lineID AS lineno,translit,punjabi,hindi,english
		FROM
			S01
		WHERE
			lineID >= 554 and lineID <= 567
        ORDER BY lineno ASC";


		$sql2 = "SELECT
			lineID AS lineno,translit,punjabi,hindi,english
		FROM
			S01
		WHERE
			lineID >= 30046 and lineID <= 30055
        ORDER BY lineno ASC";


		$sql3 = "SELECT
			lineID AS lineno,translit,punjabi,hindi,english
		FROM
			S01
		WHERE
			lineID >= 30073 and lineID <= 30083
        ORDER BY lineno ASC";


		$sql4 = "SELECT
			lineID AS lineno,translit,punjabi,hindi,english
		FROM
			S01
		WHERE
			lineID >= 57731 and lineID <= 57738
        ORDER BY lineno ASC";


		$sql5 = "SELECT
			lineID AS lineno,translit,punjabi,hindi,english
		FROM
			S01
		WHERE
			lineID >= 30092 and lineID <= 30101
        ORDER BY lineno ASC";


		$sql6="SELECT
			lineID AS lineno,translit,punjabi,hindi,english
		FROM
			A01
		WHERE
			lineID >= 30883 and lineID <= 30900
        ORDER BY lineno ASC";

		$sql7 = "SELECT
			lineID AS lineno,translit,punjabi,hindi,english
		FROM
			D01
		WHERE
			lineID >= 14209 and lineID <= 14210
        ORDER BY lineno ASC";

		$sql8 = "SELECT
			lineID AS lineno,translit,punjabi,hindi,english
		FROM
			A01
		WHERE
			lineID >= 30901 and lineID <= 30914
		ORDER BY lineno ASC";
//        LIMIT
//			$index, $limit
        $res1 = DB::select($sql1);
        $res2 = DB::select($sql2);
        $res3 = DB::select($sql3);
        $res4 = DB::select($sql4);
        $res5 = DB::select($sql5);
        $res6 = DB::select($sql6);
        $res7 = DB::select($sql7);
        $res8 = DB::select($sql8);

        $res = array_merge($res1, $res2, $res3, $res4, $res5, $res6, $res7, $res8);
        return array_slice($res, $index, $limit);
    }

    // aarti
    public function aarti(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;

        $record_count = 87;
        $limit        = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 4;
        $first_page_index = 0;
        $total_page_index = 75;

        $page['lines']            = $this->get_aarti($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']         = 'baanis/aarti';

        $page['baani_title']      = 'Aartee';
        $page['audio']            = 'aarti.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Aarti with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Aarti, Gopal Thaera Aarta';
        return $page;
    }

    //Laavan( Anand Karaj)

    function get_laavan_anand_karaj($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 33104 and lineID <= 33128
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";

        return DB::select($SQL);
    }

    function get_sukhmana_sahib($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			(lineID >= 35509 and lineID <= 35623) OR
			(lineID >= 42040 and lineID <= 42154) OR
			(lineID >= 56083 and lineID <= 56197) OR
			(lineID >= 56608 and lineID <= 56722)
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";
        return DB::select($SQL);
    }


    public function laavan_anand_karaj(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 25;
        $limit            = 25;
        $index = $current_page * 25 -25;
        $total_page       = 1;
        $first_page_index = 0;
        $total_page_index = 0;

        $page['lines']            = $this->get_laavan_anand_karaj($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']     = 'baanis/laavan-anand-karaj';

        $page['baani_title']  = 'Laavan( Anand Karaj)';
        $page['audio']        = 'laavan_anand_karaj.mp3';
        $page['current_page'] = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Laavan( Anand Karaj) with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';

        return $page;
    }

    //Asa Ki Vaar
    function get_asa_ki_vaar($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			(lineID >= 20376 and lineID <= 20381) OR
			(lineID >= 20880 and lineID <= 21515)
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";

       return DB::select($SQL);
    }

    public function asa_ki_vaar(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;

        $record_count     = 642;
        $limit            = 25;
        $index = $current_page * 25 -25;
        $total_page       = 26;
        $first_page_index = 0;
        $total_page_index = 625;

        $page['lines']            = $this->get_asa_ki_vaar($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );

        $page['base_url']         = 'baanis/asa-ki-vaar';

        $page['baani_title']      = 'Asa Ki Vaar';
        $page['audio']            = 'asa_ki_vaar.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Asa Ki Vaar with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';

        return $page;
    }

    //Sukhmani Sahib

    function get_sukhmani_sahib($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 11588 and lineID <= 13614
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";

      return DB::select($SQL);
    }


    // sukhmani_sahib
    public function sukhmani_sahib(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;

        $record_count     = 2027;
        $limit            = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 82;
        $first_page_index = 0;
        $total_page_index = 2025;

        $page['lines']            = $this->get_sukhmani_sahib($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']         = 'baanis/sukhmani-sahib';
        $page['baani_title']      = 'Sukhmani Sahib';
        $page['audio']            = 'sukhmani_sahib.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Sukhmani Sahib with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //Sukhmana sahib
    function sukhmana_sahib(Request $request)
    {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;

        $record_count     = 2027;
        $limit            = 25;
        $index = $current_page * 25 - 25;

        $page['lines']            = $this->get_sukhmana_sahib($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );

        $page['base_url']         = 'baanis/sukhmana-sahib';

        $page['baani_title']      = 'Sukhmana sahib';
        $page['audio']            = 'sukhmana_sahib.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Sukhmana Sahib with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';

        return $page;
    }

    //Sidh Gosht
    function get_sidh_gosht($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 40184 and lineID <= 40589
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";

        return DB::select($SQL);
    }

    public function sidh_gosht(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 406;
        $limit            = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 17;
        $first_page_index = 0;
        $total_page_index = 400;

        $page['lines']            = $this->get_sidh_gosht($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']         = 'baanis/sidh-gosht';
        $page['baani_title']      = 'Sidh Gosht';

        $page['audio']            = 'sidh_gosht.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Sidh Gosht with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //Ramkali Sadh
    function get_ramkali_sadh($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 39530 and lineID <= 39567
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";

        return DB::select($SQL);
    }

    // ramkali_sadh
    public function ramkali_sadh(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;

        $record_count     = 38;
        $limit            = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 2;
        $first_page_index = 0;
        $total_page_index = 25;

        $page['lines']            = $this->get_ramkali_sadh($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );

        $page['base_url']         = 'baanis/ramkali-sadh';

        $page['baani_title']      = 'Ramkali Sadh';
        $page['audio']            = 'ramkali_sadh.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Ramkali Sadh with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //Dhakanee Oankaar
    function get_dhakanee_oankaar($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 39785 and lineID <= 40183
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";

        return DB::select($SQL);
    }

    public function dhakanee_oankaar(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;

        $record_count     = 399;
        $limit            = 25;
        $index = $current_page * 25 -25;
        $total_page       = 16;
        $first_page_index = 0;
        $total_page_index = 375;

        $page['lines']            = $this->get_dhakanee_oankaar($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );

        $page['base_url']         = 'baanis/dhakanee-oankaar';

        $page['baani_title']      = 'Dhakanee Oankaar';
        $page['audio']            = 'dhakanee_oankaar.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Dhakanee Oankaar with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //Baavan Akhree
    function get_baavan_akhree($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 10899 and lineID <= 11587
	    ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";
        return DB::select($SQL);
    }

    public function baavan_akhree (Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 689;
        $limit            = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 28;
        $first_page_index = 0;
        $total_page_index = 675;

        $page['lines']            = $this->get_baavan_akhree($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );

        $page['base_url']         = 'baanis/baavan-akhree';

        $page['baani_title']      = 'Baavan Akhree';
        $page['audio']            = 'baavan_akhree.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Baavan Akhree with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //shabad_hazare

    function get_shabad_hazare($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			(lineID >= 3845 and lineID <= 3861) OR
			(lineID >= 28687 and lineID <= 28703) OR
			(lineID >= 31051 and lineID <= 31084) OR
			(lineID >= 31403 and lineID <= 31413) OR
			(lineID >= 33956 and lineID <= 33979)
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";

       return DB::select($SQL);
    }

    // shabad_hazare
    public function shabad_hazare(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count = 103;
        $limit        = 25;
        $index = $current_page * 25 -25;
        $total_page       = 5;
        $first_page_index = 0;
        $total_page_index = 100;

        $page['lines']            = $this->get_shabad_hazare($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );

        $page['base_url']         = 'baanis/shabad-hazare';

        $page['baani_title']      = 'Shabad Hazare';
        $page['audio']            = 'shabad_hazare.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Shabad Hazare with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //Baarah Maaha
    function get_baarah_maaha($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 5450 and lineID <= 5578
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";
       return DB::select($SQL);
    }

    // baarah_maaha
    public function baarah_maaha(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 104;
        $limit            = 25;
        $index = $current_page * 25 -25;
        $total_page       = 5;
        $first_page_index = 0;
        $total_page_index = 100;

        $page['lines']            = $this->get_baarah_maaha($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']         = 'baanis/baarah-maaha';
        $page['baani_title']      = 'Baarah Maaha';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Baarah Maaha with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //Dukh Bhanjani Sahib

    function get_dukh_bhanjani_sahib($index = 0, $limit = 25)
    {
        $sql1 = "
        SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			(lineID >= 9403 and lineID <= 9413)
		ORDER BY lineno ASC";

		$sql2 = "SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			(lineID >= 8176 and lineID <= 8197) OR
			(lineID >= 8420 and lineID <= 8430) OR
			(lineID >= 8660 and lineID <= 8677) OR
			(lineID >= 8714 and lineID <= 8724) OR
			(lineID >= 8906 and lineID <= 8916) OR
			(lineID >= 34226 and lineID <= 34240) OR
			(lineID >= 34449 and lineID <= 34462) OR
			(lineID >= 34470 and lineID <= 34476) OR
			(lineID >= 34491 and lineID <= 34497) OR
			(lineID >= 34502 and lineID <= 34508) OR
			(lineID >= 34768 and lineID <= 34778) OR
			(lineID >= 34889 and lineID <= 34903) OR
			(lineID >= 34981 and lineID <= 34987) OR
			(lineID >= 34995 and lineID <= 35008) OR
			(lineID >= 35049 and lineID <= 35055) OR
			(lineID >= 35196 and lineID <= 35202)
		ORDER BY lineno ASC";

		$sql3 = "SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			(lineID >= 26623 and lineID <= 26633) OR
			(lineID >= 26899 and lineID <= 26905) OR
			(lineID >= 26913 and lineID <= 26926) OR
			(lineID >= 26934 and lineID <= 26947)
		ORDER BY lineno ASC";

		$sql4 = "SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			(lineID >= 26871 and lineID <= 26877) OR
			(lineID >= 26957 and lineID <= 26963) OR
			(lineID >= 26941 and lineID <= 26947) OR
			(lineID >= 26971 and lineID <= 26977) OR
			(lineID >= 27068 and lineID <= 27086) OR
			(lineID >= 35327 and lineID <= 35333)
		ORDER BY lineno ASC";

		$res1 = DB::select($sql1);
		$res2 = DB::select($sql2);
		$res3 = DB::select($sql3);
		$res4 = DB::select($sql4);

		$res = array_merge($res1, $res2, $res3, $res4);
		return array_slice($res, $index, $limit);

    }

    // dukh_bhanjani_sahib
    public function dukh_bhanjani_sahib(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 288;
        $limit            = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 12;
        $first_page_index = 0;
        $total_page_index = 275;

        $page['lines']            = $this->get_dukh_bhanjani_sahib($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );

        $page['base_url']         = 'baanis/dukh-bhanjani-sahib';

        $page['baani_title']      = 'Dukh Bhanjani Sahib';
        $page['audio']            = 'dukh_bhanjani_sahib.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Dukh Bhanjani Sahib with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //Salok Sehskritee
    function get_salok_sehskritee($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 57828 and lineID <= 58088
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";
        return DB::select($SQL);
    }


    public function salok_sehskritee(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count = 261;
        $limit        = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 11;
        $first_page_index = 0;
        $total_page_index = 250;

        $page['lines']            = $this->get_salok_sehskritee($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );

        $page['base_url']         = 'baanis/salok-sehskritee';

        $page['baani_title']      = 'Salok Sehskritee';
        $page['audio']            = 'salok_sehskritee.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Salok Sehskritee with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    ////Gathaa
    function get_gathaa($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 58089 and lineID <= 58149
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";
        return DB::select($SQL);
    }


    // gathaa
    public function gathaa(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 61;
        $limit            = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 3;
        $first_page_index = 0;
        $total_page_index = 50;

        $page['lines']            = $this->get_gathaa($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']         = 'baanis/gathaa';
        $page['baani_title']      = 'Gathaa';
        $page['audio']            = 'gathaa.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Gathaa with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //Phunhay M: 5
    function get_phunhay_m5($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 58150 and lineID <= 58243
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";
        return DB::select($SQL);
    }

    // phunhay_m5
    public function phunhay_m5(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 94;
        $limit            = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 4;
        $first_page_index = 0;
        $total_page_index = 75;

        $page['lines']            = $this->get_phunhay_m5($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']         = 'baanis/phunhay-m5';

        $page['baani_title']      = 'Phunhay M:5';
        $page['audio']            = 'phunhay_m5.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Phunhay M: 5 with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //Chaubolay M:5
    function get_chaubolay_m5($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 58244 and lineID <= 58267
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";

        return DB::select($SQL);
    }

    // chaubolay_m5
    public function chaubolay_m5(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count = 24;
        $limit        = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 1;
        $first_page_index = 0;
        $total_page_index = 0;
        $page['lines']            = $this->get_chaubolay_m5($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );

        $page['base_url']         = 'baanis/chaubolay-m5';

        $page['baani_title']      = 'Chaubolay M:5';
        $page['audio']            = 'chaubolay_m5.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Chaubolay M:5 with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //Salok Kabeer ji
    function get_salok_kabeer_ji($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 58268 and lineID <= 58761
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";

        return DB::select($SQL);
    }

    // salok_kabeer_ji
    public function salok_kabeer_ji(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 494;
        $limit            = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 20;
        $first_page_index = 0;
        $total_page_index = 475;

        $page['lines']            = $this->get_salok_kabeer_ji($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']         = 'baanis/salok-kabeer-ji';
        $page['baani_title']      = 'Salok Kabeer ji';
        $page['audio']            = 'salok_kabeer_ji.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Salok Kabeer ji with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //Salok Farid ji
    function get_salok_farid_ji($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 58762 and lineID <= 59058
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";
        return DB::select($SQL);
    }

    public function salok_farid_ji(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 297;
        $limit            = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 12;
        $first_page_index = 0;
        $total_page_index = 275;

        $page['lines']            = $this->get_salok_farid_ji($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']         = 'baanis/salok-farid-ji';
        $page['baani_title']      = 'Salok Farid ji';
        $page['audio']            = 'salok_farid_ji.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Salok Farid ji with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    public function savaiye_m1(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;

        $record_count     = 52;
        $limit            = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 3;
        $first_page_index = 0;
        $total_page_index = 50;

        $page['lines']            = $this->get_savaiye_m1($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );

        $page['base_url']         = 'baanis/savaiye-m1';

        $page['baani_title']      = 'Savaiye M:1';
        $page['audio']            = 'savaiye_m1.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Savaiye M: 1 with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';

        return $page;

    }

    //Savaiye M: 1
    function get_savaiye_m1($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 59184 and lineID <= 59235
	    ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";
        return DB::select($SQL);
    }

    //Savaiye M: 2
    function get_savaiye_m2($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 59236 and lineID <= 59287
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";
        return DB::select($SQL);
    }

    //Savaiye M: 3
    function get_savaiye_m3($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 59288 and lineID <= 59411
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";
        return DB::select($SQL);
    }

    //Savaiye M: 4
    function get_savaiye_m4($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 59412 and lineID <= 59733
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";
        return DB::select($SQL);
    }

    //Savaiye M: 5
    function get_savaiye_m5($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 59734 and lineID <= 59838
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";
        return DB::select($SQL);
    }

    // savaiye_m2
    public function savaiye_m2(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 52;
        $limit            = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 3;
        $first_page_index = 0;
        $total_page_index = 50;

        $page['lines']            = $this->get_savaiye_m2($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']         = 'baanis/savaiye-m2';
        $page['baani_title']      = 'Savaiye M:2';
        $page['audio']            = 'savaiye_m2.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Savaiye M: 2 with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    // savaiye_m2
    public function savaiye_m3(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 124;
        $limit            = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 5;
        $first_page_index = 0;
        $total_page_index = 100;

        $page['lines']            = $this->get_savaiye_m3($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']         = 'baanis/savaiye-m3';
        $page['baani_title']      = 'Savaiye M:3';
        $page['audio']            = 'savaiye_m3.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Savaiye M: 3 with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    // savaiye_m2
    public function savaiye_m4(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 322;
        $limit            = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 13;
        $first_page_index = 0;
        $total_page_index = 300;

        $page['lines']            = $this->get_savaiye_m4($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']         = 'baanis/savaiye-m4';
        $page['baani_title']      = 'Savaiye M:4';
        $page['audio']            = 'savaiye_m4.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Savaiye M: 4 with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    public function savaiye_m5(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 105;
        $limit            = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 5;
        $first_page_index = 0;
        $total_page_index = 100;

        $page['lines']            = $this->get_savaiye_m5($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']         = 'baanis/savaiye-m5';
        $page['baani_title']      = 'Savaiye M:5';
        $page['audio']            = 'savaiye_m5.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Savaiye M: 5 with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //Salok M: 9
    function get_salok_m9($index = 0, $limit = 25)
    {
        $SQL = "
		SELECT
			pageID AS pageno,pagelineID AS pagelineno,lineID AS lineno, shabdID AS shabad_id,shabdlineID AS shabadlineno, raag, author, punjabi, hindi, translit,roman, english, lareedar, urdu
		FROM
			S01
		WHERE
			lineID >= 60440 and lineID <= 60556
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";
        return DB::select($SQL);
    }

    public function salok_m9(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 117;
        $limit            = 25;
        $index = $current_page * 25 - 25;
        $total_page       = 5;
        $first_page_index = 0;
        $total_page_index = 100;

        $page['lines']            = $this->get_salok_m9($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );

        $page['base_url']         = 'baanis/salok-m9';

        $page['baani_title']      = 'Salok M: 9';
        $page['audio']            = 'salok_m9.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Salok M: 9 with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //Akal Ustati

    function get_akal_ustati($index = 0, $limit = 50)
    {
        $SQL = "
		SELECT
			pageID AS pageno, pagelineID AS pagelineno, lineID AS lineno, attributes AS lattrib, punjabi, english, hindi, roman, urdu, teeka AS dgteeka, translit
		FROM
			D01
		WHERE
			lineID >= 808 and lineID <= 1900
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";
        return DB::select($SQL);
    }

    public function akal_ustati(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 1092;
        $limit            = 50;
        $index = $current_page * 50 - 50;
        $total_page       = 22;
        $first_page_index = 0;
        $total_page_index = 1050;

        $page['lines']            = $this->get_akal_ustati($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']         = 'baanis/akal-ustati';
        $page['baani_title']      = 'Akal Ustati';
        $page['audio']            = 'akal_ustati.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Akal Ustati with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    //Bachitar Natak

    function get_bachitar_natak($index = 0, $limit = 50)
    {
        $SQL = "
		SELECT
			pageID AS pageno, pagelineID AS pagelineno, lineID AS lineno, attributes AS lattrib, punjabi, english, hindi, roman, urdu, teeka AS dgteeka, translit
		FROM
			D01
		WHERE
			lineID >= 1901 and lineID <= 3859
		ORDER BY lineID ASC
		LIMIT
			$index, $limit
		";
       return DB::select($SQL);
    }

    public function bachitar_natak(Request $request) {
        $page_no = intval($request->get('page'));
        $current_page = $page_no;
        $record_count     = 1958;
        $limit            = 50;
        $index = $current_page * 50 - 50;
        $total_page       = 40;
        $first_page_index = 0;
        $total_page_index = 1950;

        $page['lines']            = $this->get_bachitar_natak($index);
        $page['results_info']     = array(
            "showing_from"  => $index + 1,
            "showing_to"    => ($index + $limit > $record_count ? $record_count : $index + $limit),
            "total_results" => $record_count
        );
        $page['base_url']         = 'baanis/bachitar-natak';
        $page['baani_title']      = 'Bachitar Natak';
        $page['audio']            = 'bachitar_natak.mp3';
        $page['current_page']     = $current_page;

        $page['theme']            = 'theme_7';
        $page['meta_title']       = $page['baani_title'] . ' -: Page : ' . $current_page . ' :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, Relish Bachitar Natak with audio at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';
        return $page;
    }

    public function sundar_gutka(Request $request) {
        $page = array();
        $sql = "SELECT * FROM SG01 WHERE `p-cat` <> 0";
        $page['lines'] = DB::select($sql);

        $page['meta_title']       =  'Sundar gutka :- SearchGurbani.com';
        $page['meta_description'] = 'Explore, Learn, baanis  at  SearchGurbani.com';
        $page['meta_keywords']    = 'Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak';

        return $page;
    }
}
