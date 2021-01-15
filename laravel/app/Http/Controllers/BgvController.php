<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BgvController extends ApiBaseController
{

    /**
     * Get pauri lines using vaar no. and pauri no.
     */
    public function get_pauri_lines($vaar_no, $pauri_no)
    {
        $SQL = "
        SELECT *, pauriID as paurino, pauri_lineID as pauri_lineno, attributes as lattrib from `B01` WHERE vaarID = " . trim($vaar_no) . " AND pauriID = " . trim($pauri_no) . " AND pauri_lineID != 0  ORDER BY pauri_lineID ASC";
        $rs = DB::select($SQL);
        return $rs;
    }


    /**
     * Get pauri name by vaar_no and pauri_no
     */
    public function get_pauri_name($vaar_no, $pauri_no)
    {
        $SQL = "
        SELECT
            DISTINCT pauriID as paurino, pauri_name_punjabi, pauri_name_roman
        FROM
            `B01`
        WHERE
            `vaarID` = " . trim($vaar_no) . "
            and `pauriID` = " . trim($pauri_no) . "
            AND (
                pauri_name_punjabi <> ''
                OR pauri_name_roman <> ''
            )
        ";
        $rs = DB::select($SQL);
        return $rs;
    }

    /**
     * Get count of pauries in a vaar
     */
    public function get_pauri_count($vaar_no)
    {
        $SQL = "
        SELECT count(distinct pauriID) as `pauri_count` from `B01` WHERE vaarID = " . trim($vaar_no);
        $rs = DB::select($SQL);
        // if ( count($rs) > 0) {
        //     return 0 + $row[0]->pauri_count;
        // } else {
        //     return 0;
        // }
        if (count($rs) > 0) {
            return 0 + $rs[0]->pauri_count;
        } else {
            return 0;
        }
    }


    public function vaar(Request $request)
    {
        $SG_ScriptureTypes = config('constants.SG_ScriptureTypes');
        $SG_Preferences = config('constants.SG_Preferences');

        $keywords = array();

        //$this->load->model('dao/bhai_gurdas_vaaran_dao');

        //$this->load->model('dao/common_dao');
        $vaar_no = $request->get('vaar_no');
        $pauri = 'pauri';
        $pauri_no = $request->get('pauri_no');
        $line_no = 'NA';

        $pauri_count = $this->get_pauri_count($vaar_no);

        if ($pauri_no > $pauri_count) {
            $pauri_no = 1;
        }

        if ($vaar_no <= 0 or $pauri_no <= 0) {
            $vaar_no = 1;
            $pauri_no = 1;
        }

        $lines = $this->get_pauri_lines($vaar_no, $pauri_no);

        $keywords = $this->get_dictionary_words($lines);

        $page['scripture'] = 'bgv';
        $page['current_vaar'] = $vaar_no;
        $page['current_pauri'] = $pauri_no;
        $page['pauri_info'] = $this->get_pauri_name($vaar_no, $pauri_no);
        $page['pauri_count'] = $pauri_count;
        $page['lines'] = $lines;
        $page['keywords'] = $keywords;
        $page['highlight_line'] = $line_no;
        $page['remember_me_url'] = $SG_ScriptureTypes['bgv']['controller_name_dash'];

        $page['base_url'] = $SG_ScriptureTypes['bgv']['controller_name_dash'] . '/vaar';

        // load the page
        $page['theme'] = 'theme_4';
        $page['meta_title'] = 'Vaaran Bhai Gurdas:- Vaar' . $vaar_no . '-Pauri' . $page['pauri_info'][0]->paurino . '-' . $page['pauri_info'][0]->pauri_name_punjabi . '-' . $page['pauri_info'][0]->pauri_name_roman . 'ਵਾਰਾਂ ਭਾਈ ਗੁਰਦਾਸ; :-SearchGurbani.com';
        $page['meta_description'] = 'Vaaran Bhai Gurdas:- Vaar' . $vaar_no . '-Pauri' . $page['pauri_info'][0]->paurino . '-' . $page['pauri_info'][0]->pauri_name_punjabi . '-' . $page['pauri_info'][0]->pauri_name_roman . 'ਵਾਰਾਂ ਭਾਈ ਗੁਰਦਾਸ; :-SearchGurbani.com';

        return $page;
    }

    public function vaar_pauri_line($vaar_no, $pauri_no, $line_no)
    {
        $SG_ScriptureTypes = config('constants.SG_ScriptureTypes');
        $SG_Preferences = config('constants.SG_Preferences');
        $keywords = array();
        $pauri = 'pauri';
        $pauri_count = $this->get_pauri_count($vaar_no);
        if ($pauri_no > $pauri_count) {
            $pauri_no = 1;
        }

        if ($vaar_no <= 0 or $pauri_no <= 0) {
            $vaar_no = 1;
            $pauri_no = 1;
        }

        $lines = $this->get_pauri_lines($vaar_no, $pauri_no);

        $keywords = $this->get_dictionary_words($lines);
        $page['scripture'] = 'bgv';
        $page['current_vaar'] = $vaar_no;
        $page['current_pauri'] = $pauri_no;
        $page['pauri_info'] = $this->get_pauri_name($vaar_no, $pauri_no);
        $page['pauri_count'] = $pauri_count;
        $page['lines'] = $lines;
        $page['keywords'] = $keywords;
        $page['highlight_line'] = $line_no;
        $page['remember_me_url'] = $SG_ScriptureTypes['bgv']['controller_name_dash'];

        $page['base_url'] = $SG_ScriptureTypes['bgv']['controller_name_dash'] . '/vaar';

        // load the page
        $page['theme'] = 'theme_4';
        $page['meta_title'] = 'Vaaran Bhai Gurdas:- Vaar' . $vaar_no . '-Pauri' . $page['pauri_info'][0]->paurino . '-' . $page['pauri_info'][0]->pauri_name_punjabi . '-' . $page['pauri_info'][0]->pauri_name_roman . 'ਵਾਰਾਂ ਭਾਈ ਗੁਰਦਾਸ; :-SearchGurbani.com';
        $page['meta_description'] = 'Vaaran Bhai Gurdas:- Vaar' . $vaar_no . '-Pauri' . $page['pauri_info'][0]->paurino . '-' . $page['pauri_info'][0]->pauri_name_punjabi . '-' . $page['pauri_info'][0]->pauri_name_roman . 'ਵਾਰਾਂ ਭਾਈ ਗੁਰਦਾਸ; :-SearchGurbani.com';

        return $page;
    }

    /**
     * Get count of pauries in a vaar
     */
    function get_pauries($vaar_no)
    {
        $SQL = "
		SELECT
			DISTINCT pauriID as paurino, pauri_name_punjabi, pauri_name_roman,lineID,pauri_lineID
		FROM
			`B01`
		WHERE
			`vaarID` = " . trim($vaar_no) . "
			AND (
				pauri_name_punjabi <> ''
				OR pauri_name_roman <> ''
			)
		";
        return DB::select($SQL);
    }

    function vaar_index(Request $request)
    {
        $vaar_no = $request->get('vaar_no');
        if ($vaar_no < 1 or $vaar_no > 40) {
            $vaar_no = 1;
        }

        $page['vaar_no'] = $vaar_no;
        $page['pauries'] = $this->get_pauries($vaar_no);

        // load the page
        $page['theme'] = 'theme_4';
        $page['meta_title'] = 'Bhai Gurdas Vaaran - Vaar Index -&#2613;&#2622;&#2608;&#2622;&#2562; &#2605;&#2622;&#2568; &#2583;&#2625;&#2608;&#2598;&#2622;&#2616; :- SearchGurbani.com';
        $page['meta_description'] = 'Bhai Gurdas Vaaran - Vaar Index  :- SearchGurbani.com';

        return $page;
    }


}
