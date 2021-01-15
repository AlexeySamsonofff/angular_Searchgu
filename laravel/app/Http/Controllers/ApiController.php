<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ApiController extends ApiBaseController
{
    // get all words for autocomplete search
    public function get_allwords(Request $request)
    {
        $searchVal = $request->all();

//        $query_str_FL = $this->escape_like_str($searchVal['keyword']);
        $query_str_FL = $searchVal['q'];
//        $query_str_FL = trim(str_replace(' ', '[a-z\@]* ', $query_str_FL));
//        $query_str_FL = trim(str_replace(' ', '[a-z\@]* ', $query_str_FL));
//
        $ALL_SELECT = '';
        $ALL_SELECT_PHRASE = '';
        if ($searchVal['ggs'] == 'true') {

            $ALL_SELECT .= " AND ( `table` = 'S01'";
            $ALL_SELECT_PHRASE .= " AND ( `source` = 'S01'";
        }

        if ($searchVal['ak'] == 'true') {
            if ($searchVal['ggs'] == 'false') {
                $ALL_SELECT .= " AND ( `table` = 'A01'";
                $ALL_SELECT_PHRASE .= " AND ( `source` = 'A01'";
            } else {
                $ALL_SELECT .= " OR `table` = 'A01'";
                $ALL_SELECT_PHRASE .= " OR `source` = 'A01'";
            }
        }

        if ($searchVal['bgv'] == 'true') {
            if ($searchVal['ggs'] == 'false' && $searchVal['ak'] == 'false') {
                $ALL_SELECT .= " AND ( `table` = 'B01'";
                $ALL_SELECT_PHRASE .= " AND ( `source` = 'B01'";
            } else {
                $ALL_SELECT .= " OR `table` = 'B01'";
                $ALL_SELECT_PHRASE .= " OR `source` = 'B01'";
            }
        }

        if ($searchVal['dg'] == 'true') {
            if ($searchVal['ggs'] == 'false' && $searchVal['ak'] == 'false' &&
                $searchVal['bgv'] == 'false'
            ) {
                $ALL_SELECT .= " AND ( `table` = 'D01'";
                $ALL_SELECT_PHRASE .= " AND ( `source` = 'D01'";
            } else {
                $ALL_SELECT .= " OR `table` = 'D01'";
                $ALL_SELECT_PHRASE .= " OR `source` = 'D01'";
            }
        }

        if ($searchVal['ks'] == 'true') {
            if ($searchVal['ggs'] == 'false' && $searchVal['ak'] == 'false' &&
                $searchVal['bgv'] == 'false' && $searchVal['dg'] == 'false'
            ) {
                $ALL_SELECT .= " AND ( `table` = 'K01'";
                $ALL_SELECT_PHRASE .= " AND ( `source` = 'K01'";
            } else {
                $ALL_SELECT .= " OR `table` = 'K01'";
                $ALL_SELECT_PHRASE .= " OR `source` = 'K01'";
            }
        }

        if ($searchVal['bnl'] == 'true') {
            if ($searchVal['ggs'] == 'false' && $searchVal['ak'] == 'false' &&
                $searchVal['bgv'] == 'false' && $searchVal['dg'] == 'false' &&
                $searchVal['ks'] == 'false'
            ) {
                $ALL_SELECT .= " AND ( `table` = 'N01'";
                $ALL_SELECT_PHRASE .= " AND ( `source` = 'N01'";
            } else {
                $ALL_SELECT .= " OR `table` = 'N01'";
                $ALL_SELECT_PHRASE .= " OR `source` = 'N01'";
            }
        }

        $ALL_SELECT .= ")";
        $ALL_SELECT_PHRASE .= ")";

        if ($searchVal['language'] == 'ROMAN') {

            if ($searchVal['searchtype'] == 'FL_begin') {
                $SQL = "SELECT walpha AS word, ID as id FROM SX01 WHERE walpha RLIKE '^" .
                    $query_str_FL . "'" . $ALL_SELECT . " LIMIT 100";
            } elseif ($searchVal['searchtype'] == 'FL_any') {
                $SQL = "SELECT walpha AS word, ID as id FROM SX01 WHERE walpha RLIKE '[[:<:]]" .
                    $query_str_FL . "'" . $ALL_SELECT . " LIMIT 100";
            } elseif ($searchVal['searchtype'] == 'PHRASE') {
                $SQL
                    = "SELECT `walpha` AS word, ID as id FROM SX01 WHERE `walpha` like '%" .
                    $query_str_FL . "%' LIMIT 100";
            }
        }

        if ($searchVal['language'] == 'PUNJABI-ASC') {

            if ($searchVal['searchtype'] == 'FL_begin') {
                $SQL
                    = "SELECT `wgamma-a` AS word, ID as id FROM SX01 WHERE `wgamma-a` RLIKE '^" .
                    $query_str_FL . "'" . $ALL_SELECT . " LIMIT 100";
            } elseif ($searchVal['searchtype'] == 'FL_any') {
                $SQL
                    = "SELECT `wgamma-a` AS word, ID as id FROM SX01 WHERE `wgamma-a` RLIKE '[[:<:]]" .
                    $query_str_FL . "'" . $ALL_SELECT . " LIMIT 100";
            } elseif ($searchVal['searchtype'] == 'PHRASE') {
                $SQL
                    = "SELECT `wgamma-a` AS word, ID as id FROM SX01 WHERE `wgamma-a` like '%" .
                    $query_str_FL . "%' LIMIT 100";
            }
        }

        if ($searchVal['language'] == 'PUNJABI') {
            if ($searchVal['searchtype'] == 'FL_begin') {
                $SQL = "SELECT `wgamma` AS word, ID as id FROM SX01 WHERE `wgamma` RLIKE '^" .
                    $query_str_FL . "'" . $ALL_SELECT . " LIMIT 100";
            } elseif ($searchVal['searchtype'] == 'FL_any') {
                $SQL = "SELECT `wgamma` AS word, ID as id FROM SX01 WHERE `wgamma` RLIKE '[[:<:]]" .
                    $query_str_FL . "'" . $ALL_SELECT . " LIMIT 100";
            } elseif ($searchVal['searchtype'] == 'PHRASE') {
                $SQL
                    = "SELECT LTRIM(`word`) AS word, ID AS id FROM `SXW01` WHERE `word` like '%" .
                    $query_str_FL . "%' $ALL_SELECT_PHRASE  LIMIT 100";
            }
        }

        try {
            $allwords = DB::select($SQL);
            return response()->json(['status' => 'success', 'allwords' => $allwords]);
        } catch (\Exception $exception) {
            return response()->json(['status' => 'fail', 'msg' => $exception->getMessage()]);
        }
    }



    public function escape_like_str($string, $like=false)
    {
        $string = str_replace("'", "''", remove_invisible_characters($string, FALSE));
        if($like) {
            $string = str_replace(
                array('!', '%', '_'),
                array('!!', '!%', '!_'),
                $string
            );
        }
//        $search = array('%', '_');
//        $replace = array('\%', '\_');
        return $string;
    }

    public function search_logic_count($search_text, $search_type, $search_tableID,
                                       $search_case_sensitive, $search_language,
                                       $search_scriptures,
                                       $search_author = '', $search_raag = '',
                                       $search_page_from = '', $search_page_to = '',
                                       $individual_search = '', $search_from = '')
    {
        // Global Variables
        $SG_ScriptureTypes = config('constants.SG_ScriptureTypes');

        // Set search parameters in Sessoin
        $search_parameters = array("search_text" => $search_text,
            "search_type" => $search_type,
            "search_tableID" => $search_tableID,
            "search_case_sensitive" => $search_case_sensitive,
            "search_language" => $search_language,
            "search_author" => $search_author,
            "search_raag" => $search_raag,
            "search_page_from" => $search_page_from,
            "search_page_to" => $search_page_to,
            "individual_search" => $individual_search
        );
//        $this->session->set_userdata('search_parameters', $search_parameters);
        $result_counts = array();// initializing result count array

//        $query_str_FL = $this->escape_like_str($search_text);
        $query_str_FL = $search_text;
        $query_str_FL = trim(str_replace(' ', '[a-zA-Zਁ-ੵ\@]* ', $query_str_FL));
        // $query_str_FL = trim(str_replace(' ', '[a-zA-Z\@]* ', $query_str_FL));
        foreach ($search_scriptures as $scripture) {

            /* Search for guru granth sahib*/

            if ($scripture == 'ggs') {

                $result_counts[$scripture]
                    = array("scripture_name" => $SG_ScriptureTypes[$scripture][1],
                    "result_count" => 0, "result_query" => '');

                $SQL_language_table = '';

                if ($search_language == 'ROMAN')
                    $SQL_language_table .= "SX01.walpha";

                if ($search_language == 'PUNJABI-ASC')
                    $SQL_language_table .= "BINARY SX01.`wgamma-a`";

                if ($search_language == 'PUNJABI')
                    $SQL_language_table .= "SX01.wgamma";

                $SQL_part = '';

                if ($search_author) {
                    $SQL_part .= " AND S01.author_id= " . $search_author . " ";
                }

                if ($search_raag) {

                    $SQL_part .= " AND S01.raag_id= " . $search_raag;
                }

                if ($search_page_from || $search_page_to) {
                    $SQL_part .= " AND S01.pageID BETWEEN " . $search_page_from . " AND " .
                        $search_page_to;
                }

                if ($search_type == 'FL_begin') {
                    if ($search_tableID == '') {
                        $SQL
                            = "SELECT  S01.*,S01.ID AS id, S01.pageID AS pageno, S01.pagelineID AS pagelineno, S01.lineID AS lineno, S01.shabdID AS shabad_id, S01.shabdlineID AS shabadlineno, S01.attributes AS pattrib,SX01.table,SX01.tableID," . $SQL_language_table . " FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' " .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '^" . $query_str_FL .
                            "' ORDER BY S01.pagelineID ASC";
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' " .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '^" . $query_str_FL .
                            "' GROUP BY SX01.id ORDER BY S01.pagelineID ASC";
                    } else {
                        $SQL
                            = "SELECT  S01.*,S01.ID AS id, S01.pageID AS pageno, S01.pagelineID AS pagelineno, S01.lineID AS lineno, S01.shabdID AS shabad_id, S01.shabdlineID AS shabadlineno, S01.attributes AS pattrib,SX01.table,SX01.tableID FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' AND SX01.tableID=" .
                            $search_tableID;
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' AND SX01.tableID=" . $search_tableID . " GROUP BY SX01.id";
                    }
                } elseif ($search_type == 'FL_any') {
                    if ($search_tableID == '') {
                        $SQL
                            = "SELECT  S01.*,S01.ID AS id, S01.pageID AS pageno, S01.pagelineID AS pagelineno, S01.lineID AS lineno, S01.shabdID AS shabad_id, S01.shabdlineID AS shabadlineno, S01.attributes AS pattrib,SX01.table,SX01.tableID," . $SQL_language_table . " FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' " .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '[[:<:]]" . $query_str_FL .
                            "' ORDER BY S01.pagelineID ASC";
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' " .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '[[:<:]]" . $query_str_FL .
                            "' GROUP BY SX01.id ORDER BY S01.pagelineID ASC";
                    } else {
                        $SQL
                            = "SELECT  S01.*,S01.ID AS id, S01.pageID AS pageno, S01.pagelineID AS pagelineno, S01.lineID AS lineno, S01.shabdID AS shabad_id, S01.shabdlineID AS shabadlineno, S01.attributes AS pattrib,SX01.table,SX01.tableID FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' AND SX01.tableID=" .
                            $search_tableID;
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' AND SX01.tableID=" .
                            $search_tableID . " GROUP BY SX01.id";
                    }
                } elseif ($search_type == 'PHRASE') {
                    // $SQL="SELECT *,ID AS id, pageID AS pageno, pagelineID AS pagelineno, lineID AS lineno, shabdID AS shabad_id, shabdlineID AS shabadlineno, attributes AS pattrib FROM `S01` WHERE punjabi LIKE '%".$this->escape_like_str($search_text)."%'".$SQL_part." ORDER BY pagelineID ASC";
                    $SQL = "SELECT  S01.*,S01.ID AS id, S01.pageID AS pageno, S01.pagelineID AS pagelineno, S01.lineID AS lineno, S01.shabdID AS shabad_id, S01.shabdlineID AS shabadlineno, S01.attributes AS pattrib,SX01.table,SX01.tableID," . $SQL_language_table . " FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' " .
                        $SQL_part . " AND " . $SQL_language_table . " LIKE '%" . $search_text . "%' ORDER BY S01.pagelineID ASC";
                    $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' " .
                        $SQL_part . " AND " . $SQL_language_table . " LIKE '%" . $this->escape_like_str($search_text) . "%' GROUP BY SX01.id ORDER BY S01.pagelineID ASC";
                }

//                $cnt = $this->query($cnt_sql)->result()[0]->cnt;
                $sql_res = DB::select($cnt_sql);
                $cnt = count($sql_res) > 0 ? $sql_res[0]->cnt : 0;

                $full_text_query = base64_encode($SQL);

                if ($cnt > 0) {
                    $result_counts[$scripture]['result_count'] = $cnt;
                    $result_counts[$scripture]['result_query'] = $full_text_query;
                }


            }

            /* search for amrit keertan */

            if ($scripture == 'ak') {

                $result_counts[$scripture]
                    = array("scripture_name" => $SG_ScriptureTypes[$scripture][1],
                    "result_count" => 0, "result_query" => '');

                $SQL_part = '';
                $SQL_language_table = '';

                if ($search_language == 'ROMAN') {
                    $SQL_language_table .= "SX01.walpha";
                }
                if ($search_language == 'PUNJABI-ASC') {
                    $SQL_language_table .= "BINARY SX01.`wgamma-a`";
                }
                if ($search_language == 'PUNJABI') {
                    $SQL_language_table .= "SX01.wgamma";
                }


                if ($search_author) {

                    $SQL_part .= " AND A01.author_id= " . $search_author . " ";
                }

                if ($search_raag) {

                    $SQL_part .= " AND A01.raag_id= " . $search_raag;
                }

                if ($search_page_from || $search_page_to) {
                    $SQL_part .= " AND A01.pageID BETWEEN " . $search_page_from . " AND " .
                        $search_page_to;
                }

                if ($search_type == 'FL_begin') {
                    if ($search_tableID == '') {
                        $SQL
                            = "SELECT  A01.*,A01.lineID AS lineno, A01.sectionID AS section_id, A01.pageID AS pageno, A01.pagelineID AS pagelineno, A01.shabadID AS shabad_id, A01.attributes AS lattrib,A01.raag, A01.punjabi, A01.translit, A01.author, A01.hindi, A01.roman,A01.english,SX01.shabadID,SX01.table,SX01.tableID,AS01.shabad_name,AS01.shabadID," . $SQL_language_table . " FROM A01 JOIN SX01 on A01.lineID = SX01.tableID JOIN AS01 on SX01.shabadID=AS01.shabadID WHERE SX01.table='A01' " .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '^" . $query_str_FL .
                            "' ORDER BY A01.pagelineID ASC";
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM A01 JOIN SX01 on A01.lineID = SX01.tableID JOIN AS01 on SX01.shabadID=AS01.shabadID WHERE SX01.table='A01' " .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '^" . $query_str_FL .
                            "' GROUP BY SX01.id ORDER BY A01.pagelineID ASC";
                    } else {
                        $SQL
                            = "SELECT  A01.*,A01.lineID AS lineno, A01.sectionID AS section_id, A01.pageID AS pageno, A01.pagelineID AS pagelineno, A01.shabadID AS shabad_id, A01.attributes AS lattrib,A01.raag, A01.punjabi, A01.translit, A01.author, A01.hindi, A01.roman,A01.urdu,A01.english,SX01.table,SX01.tableID,SX01.shabadID,AS01.shabad_name,AS01.shabadID FROM A01 JOIN SX01 on A01.lineID = SX01.tableID JOIN AS01 on A01.shabadID=AS01.shabadID WHERE SX01.table='A01' AND SX01.tableID=" .
                            $search_tableID;
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM A01 JOIN SX01 on A01.lineID = SX01.tableID JOIN AS01 on A01.shabadID=AS01.shabadID WHERE SX01.table='A01' AND SX01.tableID=" .
                            $search_tableID . " GROUP BY SX01.id";
                    }
                } elseif ($search_type == 'FL_any') {
                    if ($search_tableID == '') {
                        $SQL
                            = "SELECT  A01.*,A01.lineID AS lineno, A01.sectionID AS section_id, A01.pageID AS pageno, A01.pagelineID AS pagelineno, A01.shabadID AS shabad_id, A01.attributes AS lattrib,A01.raag, A01.punjabi, A01.translit, A01.author, A01.hindi, A01.roman,A01.english,SX01.shabadID,SX01.table,AS01.shabad_name,AS01.shabadID," . $SQL_language_table . " FROM A01 JOIN SX01 on A01.lineID = SX01.tableID JOIN AS01 on A01.shabadID=AS01.shabadID WHERE SX01.table='A01' " .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '[[:<:]]" . $query_str_FL .
                            "' ORDER BY A01.pagelineID ASC";
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM A01 JOIN SX01 on A01.lineID = SX01.tableID JOIN AS01 on A01.shabadID=AS01.shabadID WHERE SX01.table='A01' " .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '[[:<:]]" . $query_str_FL .
                            "' GROUP BY SX01.id ORDER BY A01.pagelineID ASC";
                    } else {
                        $SQL
                            = "SELECT  A01.*,A01.lineID AS lineno, A01.sectionID AS section_id, A01.pageID AS pageno, A01.pagelineID AS pagelineno, A01.shabadID AS shabad_id, A01.attributes AS lattrib,A01.raag, A01.punjabi, A01.translit, A01.author, A01.hindi, A01.roman,A01.urdu,A01.english,SX01.table,SX01.shabadID,AS01.shabad_name,AS01.shabadID FROM A01 JOIN SX01 on A01.lineID = SX01.tableID JOIN AS01 on A01.shabadID=AS01.shabadID WHERE SX01.table='A01' AND SX01.tableID=" .
                            $search_tableID;
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM A01 JOIN SX01 on A01.lineID = SX01.tableID JOIN AS01 on A01.shabadID=AS01.shabadID WHERE SX01.table='A01' AND SX01.tableID=" .
                            $search_tableID . " GROUP BY SX01.id";
                    }
                } elseif ($search_type == 'PHRASE') {
                    $SQL
                        = "SELECT  A01.*,A01.lineID AS lineno, A01.sectionID AS section_id, A01.pageID AS pageno, A01.pagelineID AS pagelineno, A01.shabadID AS shabad_id, A01.attributes AS lattrib,A01.raag, A01.punjabi, A01.translit, A01.author, A01.hindi, A01.roman,A01.english,SX01.shabadID,SX01.table,AS01.shabad_name,AS01.shabadID," . $SQL_language_table . " FROM A01 JOIN SX01 on A01.lineID = SX01.tableID JOIN AS01 on A01.shabadID=AS01.shabadID WHERE SX01.table='A01' " .
                        $SQL_part . " AND " . $SQL_language_table . " LIKE '%" . $this->escape_like_str($search_text) . "%' ORDER BY A01.pagelineID ASC";
                    $cnt_sql
                        = "SELECT COUNT(SX01.id) AS cnt FROM A01 JOIN SX01 on A01.lineID = SX01.tableID JOIN AS01 on A01.shabadID=AS01.shabadID WHERE SX01.table='A01' " .
                        $SQL_part . " AND " . $SQL_language_table . " LIKE '%" . $this->escape_like_str($search_text) . "%' GROUP BY SX01.id ORDER BY A01.pagelineID ASC";
                    // $SQL="SELECT  *, lineID AS lineno, sectionID AS section_id, pageID AS pageno, pagelineID AS pagelineno, shabadID AS shabad_id, attributes AS lattrib, raag, punjabi, translit, author, hindi, roman,english FROM A01 WHERE punjabi LIKE '%".$this->escape_like_str($search_text)."%'".$SQL_part." ORDER BY pagelineID ASC";
                }

                $sql_res = DB::select($cnt_sql);
                $cnt = count($sql_res) > 0 ? $sql_res[0]->cnt : 0;
                $full_text_query = base64_encode($SQL);

                if ($cnt > 0) {
                    $result_counts[$scripture]['result_count'] = $cnt;
                    $result_counts[$scripture]['result_query'] = $full_text_query;
                }
            }

            /* search for bhai gurdas vaaran*/

            if ($scripture == 'bgv') {

                $result_counts[$scripture]
                    = array("scripture_name" => $SG_ScriptureTypes[$scripture][1],
                    "result_count" => 0, "result_query" => '');

                $SQL_language_table = '';

                if ($search_language == 'ROMAN')
                    $SQL_language_table .= "SX01.walpha";

                if ($search_language == 'PUNJABI-ASC')
                    $SQL_language_table .= "BINARY SX01.`wgamma-a`";

                if ($search_language == 'PUNJABI')
                    $SQL_language_table .= "SX01.wgamma";

                $SQL_part = '';

                if ($search_page_from || $search_page_to) {
                    $SQL_part .= " AND B01.vaarID BETWEEN " . $search_page_from . " AND " .
                        $search_page_to;
                }

                if ($search_type == 'FL_begin') {
                    if ($search_tableID == '') {
                        $SQL
                            = "SELECT B01.*,B01.vaarID AS vaarno, B01.pauriID AS paurino, B01.pauri_lineID AS pauri_lineno, B01.attributes AS lattrib,SX01.table,SX01.tableID," . $SQL_language_table . " FROM B01 JOIN SX01 on B01.lineID = SX01.tableID WHERE SX01.table='B01' " .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '^" . $query_str_FL .
                            "' ORDER BY B01.pauri_lineID ASC";
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM B01 JOIN SX01 on B01.lineID = SX01.tableID WHERE SX01.table='B01' " .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '^" . $query_str_FL .
                            "' GROUP BY SX01.id ORDER BY B01.pauri_lineID ASC";
                    } else {
                        $SQL
                            = "SELECT B01.*,B01.vaarID AS vaarno, B01.pauriID AS paurino, B01.pauri_lineID AS pauri_lineno, B01.attributes AS lattrib,SX01.table,SX01.tableID,SX01.walpha FROM B01 JOIN SX01 on B01.lineID = SX01.tableID WHERE SX01.table='B01' AND SX01.tableID = " .
                            $search_tableID;
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM B01 JOIN SX01 on B01.lineID = SX01.tableID WHERE SX01.table='B01' AND SX01.tableID = " .
                            $search_tableID . " GROUP BY SX01.id";
                    }
                } elseif ($search_type == 'FL_any') {
                    if ($search_tableID == '') {
                        $SQL
                            = "SELECT B01.*,B01.vaarID AS vaarno, B01.pauriID AS paurino, B01.pauri_lineID AS pauri_lineno, B01.attributes AS lattrib,SX01.table,SX01.tableID," . $SQL_language_table . " FROM B01 JOIN SX01 on B01.lineID = SX01.tableID WHERE SX01.table='B01' " .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '[[:<:]]" . $query_str_FL .
                            "' ORDER BY B01.pauri_lineID ASC";
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM B01 JOIN SX01 on B01.lineID = SX01.tableID WHERE SX01.table='B01' " .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '[[:<:]]" . $query_str_FL .
                            "' GROUP BY SX01.id ORDER BY B01.pauri_lineID ASC";

                    } else {
                        $SQL
                            = "SELECT B01.*,B01.vaarID AS vaarno, B01.pauriID AS paurino, B01.pauri_lineID AS pauri_lineno, B01.attributes AS lattrib,SX01.table,SX01.tableID,SX01.walpha FROM B01 JOIN SX01 on B01.lineID = SX01.tableID WHERE SX01.table='B01' AND SX01.tableID = " .
                            $search_tableID;
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM B01 JOIN SX01 on B01.lineID = SX01.tableID WHERE SX01.table='B01' AND SX01.tableID = " .
                            $search_tableID . " GROUP BY SX01.id";
                    }

                } elseif ($search_type == 'PHRASE') {
                    $SQL
                        = "SELECT B01.*,B01.vaarID AS vaarno, B01.pauriID AS paurino, B01.pauri_lineID AS pauri_lineno, B01.attributes AS lattrib,SX01.table,SX01.tableID," . $SQL_language_table . " FROM B01 JOIN SX01 on B01.lineID = SX01.tableID WHERE SX01.table='B01' " .
                        $SQL_part . " AND " . $SQL_language_table . " LIKE '%" . $this->escape_like_str($search_text) . "%' ORDER BY B01.pauri_lineID ASC";
                    $cnt_sql
                        = "SELECT COUNT(SX01.id) AS cnt FROM B01 JOIN SX01 on B01.lineID = SX01.tableID WHERE SX01.table='B01' " .
                        $SQL_part . " AND " . $SQL_language_table . " LIKE '%" . $this->escape_like_str($search_text) . "%' GROUP BY SX01.id ORDER BY B01.pauri_lineID ASC";
                    // $SQL="SELECT *,B01.vaarID AS vaarno, pauriID AS paurino, pauri_lineID AS pauri_lineno, attributes AS lattrib FROM B01 WHERE punjabi LIKE '%".$this->escape_like_str($search_text)."%'".$SQL_part." ORDER BY pauri_lineID ASC";
                }

                $sql_res = DB::select($cnt_sql);
                $cnt = count($sql_res) > 0 ? $sql_res[0]->cnt : 0;
                $full_text_query = base64_encode($SQL);

                if ($cnt > 0) {
                    $result_counts[$scripture]['result_count'] = $cnt;
                    $result_counts[$scripture]['result_query'] = $full_text_query;
                }


            }

            /* search for dasam granth */


            if ($scripture == 'dg') {

                $result_counts[$scripture]
                    = array("scripture_name" => $SG_ScriptureTypes[$scripture][1],
                    "result_count" => 0, "result_query" => '');

                $SQL_language_table = '';

                if ($search_language == 'ROMAN')
                    $SQL_language_table .= "SX01.walpha";

                if ($search_language == 'PUNJABI-ASC')
                    $SQL_language_table .= "BINARY SX01.`wgamma-a`";

                if ($search_language == 'PUNJABI')
                    $SQL_language_table .= "SX01.wgamma";

                $SQL_part = '';

                if ($search_page_from || $search_page_to) {
                    $SQL_part .= " AND D01.pageID BETWEEN " . $search_page_from . " AND " .
                        $search_page_to;
                }

                if ($search_type == 'FL_begin') {
                    if ($search_tableID == '') {
                        $SQL
                            = "SELECT D01.*,D01.pageID AS pageno, D01.pagelineID AS pagelineno, D01.lineID AS lineno, D01.attributes AS lattrib, D01.punjabi, D01.english, D01.hindi, D01.roman, D01.urdu, D01.teeka AS dgteeka, D01.translit,SX01.table,SX01.tableID," . $SQL_language_table . " FROM D01 JOIN SX01 on D01.ID = SX01.tableID WHERE SX01.table='D01'" .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '^" . $query_str_FL .
                            "' ORDER BY D01.pagelineID ASC";
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM D01 JOIN SX01 on D01.ID = SX01.tableID WHERE SX01.table='D01'" .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '^" . $query_str_FL .
                            "' GROUP BY SX01.id ORDER BY D01.pagelineID ASC";
                    } else {
                        $SQL
                            = "SELECT D01.*,D01.pageID AS pageno, D01.pagelineID AS pagelineno, D01.lineID AS lineno, D01.attributes AS lattrib, D01.punjabi, D01.english, D01.hindi, D01.roman, D01.urdu, D01.teeka AS dgteeka, D01.translit,SX01.table,SX01.tableID FROM D01 JOIN SX01 on D01.ID = SX01.tableID WHERE SX01.table= 'D01' AND SX01.tableID = " .
                            $search_tableID;
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM D01 JOIN SX01 on D01.ID = SX01.tableID WHERE SX01.table= 'D01' AND SX01.tableID = " .
                            $search_tableID . " GROUP BY SX01.id";
                    }
                } elseif ($search_type == 'FL_any') {
                    if ($search_tableID == '') {
                        $SQL
                            = "SELECT D01.*,D01.pageID AS pageno, D01.pagelineID AS pagelineno, D01.lineID AS lineno, D01.attributes AS lattrib, D01.punjabi, D01.english, D01.hindi, D01.roman, D01.urdu, D01.teeka AS dgteeka, D01.translit,SX01.table,SX01.tableID," . $SQL_language_table . " FROM D01 JOIN SX01 on D01.ID = SX01.tableID WHERE SX01.table='D01'" .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '[[:<:]]" . $query_str_FL .
                            "' ORDER BY D01.pagelineID ASC";
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM D01 JOIN SX01 on D01.ID = SX01.tableID WHERE SX01.table='D01'" .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '[[:<:]]" . $query_str_FL .
                            "' GROUP BY SX01.id ORDER BY D01.pagelineID ASC";
                    } else {
                        $SQL
                            = "SELECT D01.*,D01.pageID AS pageno, D01.pagelineID AS pagelineno, D01.lineID AS lineno, D01.attributes AS lattrib, D01.punjabi, D01.english, D01.hindi, D01.roman, D01.urdu, D01.teeka AS dgteeka, D01.translit,SX01.table,SX01.tableID FROM D01 JOIN SX01 on D01.ID = SX01.tableID WHERE SX01.table= 'D01' AND SX01.tableID = " .
                            $search_tableID;
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM D01 JOIN SX01 on D01.ID = SX01.tableID WHERE SX01.table= 'D01' AND SX01.tableID = " .
                            $search_tableID . " GROUP BY SX01.id";
                    }
                } elseif ($search_type == 'PHRASE') {
                    $SQL
                        = "SELECT D01.*,D01.pageID AS pageno, D01.pagelineID AS pagelineno, D01.lineID AS lineno, D01.attributes AS lattrib, D01.punjabi, D01.english, D01.hindi, D01.roman, D01.urdu, D01.teeka AS dgteeka, D01.translit,SX01.table,SX01.tableID," . $SQL_language_table . " FROM D01 JOIN SX01 on D01.ID = SX01.tableID WHERE SX01.table='D01'" .
                        $SQL_part . " AND " . $SQL_language_table . " LIKE '%" . $this->escape_like_str($search_text) . "%' ORDER BY D01.pagelineID ASC";
                    $cnt_sql
                        = "SELECT COUNT(SX01.id) AS cnt FROM D01 JOIN SX01 on D01.ID = SX01.tableID WHERE SX01.table='D01'" .
                        $SQL_part . " AND " . $SQL_language_table . " LIKE '%" . $this->escape_like_str($search_text) . "%' GROUP BY SX01.id ORDER BY D01.pagelineID ASC";

                    // $SQL="SELECT *,pageID AS pageno, pagelineID AS pagelineno, lineID AS lineno, attributes AS lattrib, punjabi, english, hindi, roman, urdu, teeka AS dgteeka, translit FROM D01 WHERE punjabi LIKE '%".$this->escape_like_str($search_text)."%'".$SQL_part." ORDER BY pagelineID ASC";
                }

                $sql_res = DB::select($cnt_sql);
                $cnt = count($sql_res) > 0 ? $sql_res[0]->cnt : 0;

                $full_text_query = base64_encode($SQL);

                if ($cnt > 0) {
                    $result_counts[$scripture]['result_count'] = $cnt;
                    $result_counts[$scripture]['result_query'] = $full_text_query;
                }


            }

            /* search for kabit savaiye */

            if ($scripture == 'ks') {

                $result_counts[$scripture]
                    = array("scripture_name" => $SG_ScriptureTypes[$scripture][1],
                    "result_count" => 0, "result_query" => '');

                $SQL_language_table = '';

                if ($search_language == 'ROMAN')
                    $SQL_language_table .= "SX01.walpha";

                if ($search_language == 'PUNJABI-ASC')
                    $SQL_language_table .= "BINARY SX01.`wgamma-a`";

                if ($search_language == 'PUNJABI')
                    $SQL_language_table .= "SX01.wgamma";

                $SQL_part = '';

                if ($search_page_from || $search_page_to) {
                    $SQL_part .= " AND K01.kabitID BETWEEN " . $search_page_from . " AND " .
                        $search_page_to;
                }

                if ($search_type == 'FL_begin') {
                    if ($search_tableID == '') {
                        $SQL
                            = "SELECT K01.*,K01.lineID AS lineno, K01.kabitID AS kabit, K01.kabitlineID AS k_line, K01.attributes AS lattrib, K01.punjabi, K01.punctuation, K01.english, K01.translit, K01.hindi, K01.urdu, K01.roman,SX01.table,SX01.tableID," . $SQL_language_table . " FROM `K01`JOIN SX01 on K01.ID = SX01.tableID WHERE SX01.table='K01'" .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '^" . $query_str_FL .
                            "' ORDER BY K01.kabitID ASC";
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM `K01`JOIN SX01 on K01.ID = SX01.tableID WHERE SX01.table='K01'" .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '^" . $query_str_FL .
                            "' GROUP BY SX01.id ORDER BY K01.kabitID ASC";
                    } else {
                        $SQL
                            = "SELECT K01.*,K01.lineID AS lineno, K01.kabitID AS kabit, K01.kabitlineID AS k_line, K01.attributes AS lattrib, K01.punjabi, K01.punctuation, K01.english, K01.translit, K01.hindi, K01.urdu, K01.roman,SX01.table,SX01.tableID,SX01.walpha FROM `K01`JOIN SX01 on K01.ID = SX01.tableID WHERE SX01.table='K01' AND SX01.tableID = " .
                            $search_tableID;
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM `K01`JOIN SX01 on K01.ID = SX01.tableID WHERE SX01.table='K01' AND SX01.tableID = " .
                            $search_tableID . " GROUP BY SX01.id";
                    }
                } elseif ($search_type == 'FL_any') {
                    if ($search_tableID == '') {
                        $SQL
                            = "SELECT K01.*,K01.lineID AS lineno, K01.kabitID AS kabit, K01.kabitlineID AS k_line, K01.attributes AS lattrib, K01.punjabi, K01.punctuation, K01.english, K01.translit, K01.hindi, K01.urdu, K01.roman,SX01.table,SX01.tableID," . $SQL_language_table . " FROM `K01`JOIN SX01 on K01.ID = SX01.tableID WHERE SX01.table='K01'" .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '[[:<:]]" . $query_str_FL .
                            "' ORDER BY K01.kabitID ASC";
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM `K01` JOIN SX01 on K01.ID = SX01.tableID WHERE SX01.table='K01'" .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '[[:<:]]" . $query_str_FL .
                            "' GROUP BY SX01.id ORDER BY K01.kabitID ASC";
                    } else {
                        $SQL
                            = "SELECT K01.*,K01.lineID AS lineno, K01.kabitID AS kabit, K01.kabitlineID AS k_line, K01.attributes AS lattrib, K01.punjabi, K01.punctuation, K01.english, K01.translit, K01.hindi, K01.urdu, K01.roman,SX01.table,SX01.tableID,SX01.walpha FROM `K01`JOIN SX01 on K01.ID = SX01.tableID WHERE SX01.table='K01' AND SX01.tableID = " .
                            $search_tableID;
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM `K01`JOIN SX01 on K01.ID = SX01.tableID WHERE SX01.table='K01' AND SX01.tableID = " .
                            $search_tableID . "  GROUP BY SX01.id";
                    }
                } elseif ($search_type == 'PHRASE') {
                    $SQL
                        = "SELECT K01.*,K01.lineID AS lineno, K01.kabitID AS kabit, K01.kabitlineID AS k_line, K01.attributes AS lattrib, K01.punjabi, K01.punctuation, K01.english, K01.translit, K01.hindi, K01.urdu, K01.roman,SX01.table,SX01.tableID," . $SQL_language_table . " FROM `K01`JOIN SX01 on K01.ID = SX01.tableID WHERE SX01.table='K01'" .
                        $SQL_part . " AND " . $SQL_language_table . " LIKE '%" . $this->escape_like_str($search_text) . "%' ORDER BY K01.kabitID ASC";
                    $cnt_sql
                        = "SELECT COUNT(SX01.id) AS cnt FROM `K01`JOIN SX01 on K01.ID = SX01.tableID WHERE SX01.table='K01'" .
                        $SQL_part . " AND " . $SQL_language_table . " LIKE '%" . $this->escape_like_str($search_text) . "%' GROUP BY SX01.id ORDER BY K01.kabitID ASC";
                    // $SQL="SELECT *,lineID AS lineno, kabitID AS kabit, kabitlineID AS k_line, attributes AS lattrib, punjabi, punctuation, english, translit, hindi, urdu, roman FROM K01 WHERE punjabi LIKE '%".$this->escape_like_str($search_text)."%'".$SQL_part." ORDER BY kabitID ASC";
                }

                $sql_res = DB::select($cnt_sql);
                $cnt = count($sql_res) > 0 ? $sql_res[0]->cnt : 0;

                $full_text_query = base64_encode($SQL);

                if ($cnt > 0) {
                    $result_counts[$scripture]['result_count'] = $cnt;
                    $result_counts[$scripture]['result_query'] = $full_text_query;
                }
            }

            /* search for vai nand lal*/

            if ($scripture == 'bnl') {

                $result_counts[$scripture]
                    = array("scripture_name" => $SG_ScriptureTypes[$scripture][1],
                    "result_count" => 0, "result_query" => '');

                $SQL_language_table = '';

                if ($search_language == 'ROMAN')
                    $SQL_language_table .= "SX01.walpha";

                if ($search_language == 'PUNJABI-ASC')
                    $SQL_language_table .= "BINARY SX01.`wgamma-a`";

                if ($search_language == 'PUNJABI')
                    $SQL_language_table .= "SX01.wgamma";

                $SQL_part = '';

                if ($search_page_from || $search_page_to) {
                    $SQL_part .= " AND N01.pageID BETWEEN " . $search_page_from . " AND " .
                        $search_page_to;
                }

                if (!empty($search_from)) {
                    if ($search_from == 'Ghazal') {
                        $SQL_part .= " AND N01.name = 'Ghazal'";
                    } elseif ($search_from == 'Rubaaee') {
                        $SQL_part .= " AND N01.name = 'Rubaaee'";

                    } elseif ($search_from == 'Zindginama') {
                        $SQL_part .= " AND N01.name = 'Zindginama'";

                    } elseif ($search_from == 'Ganjnaama') {
                        $SQL_part .= " AND N01.name = 'Ganjnaama'";

                    } elseif ($search_from == 'Jot_Bigaas_Persian') {
                        $SQL_part .= " AND N01.name = 'Jot Bigaas Persian'";

                    } elseif ($search_from == 'Jot_Bigaas_Punjabi') {
                        $SQL_part .= " AND N01.name = 'Jot Bigaas Punjabi'";

                    } elseif ($search_from == 'Rahitnama') {
                        $SQL_part .= " AND N01.name = 'Rahitnama'";

                    } elseif ($search_from == 'Tankahnama') {
                        $SQL_part .= " AND N01.name = 'Tankahnama'";

                    }
                }

                if ($search_type == 'FL_begin') {
                    if ($search_tableID == '') {

                        $SQL
                            = "SELECT N01.*,N01.pagelineID AS `lineno`,N01.name, N01.pageID AS `no`, N01.attributes AS `attrib`, N01.punjabi, N01.translit, N01.english, N01.hindi,N01.roman, N01.urdu,SX01.table,SX01.tableID," . $SQL_language_table . " FROM N01 JOIN SX01 on N01.ID = SX01.tableID WHERE SX01.table='N01'" .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '^" . $query_str_FL .
                            "' ORDER BY N01.pagelineID ASC";

                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM N01 JOIN SX01 on N01.ID = SX01.tableID WHERE SX01.table='N01'" .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '^" . $query_str_FL .
                            "' GROUP BY SX01.id ORDER BY N01.pagelineID ASC";
                    } else {

                        $SQL
                            = "SELECT N01.*,N01.pagelineID AS `lineno`,N01.name N01.pageID AS `no`, N01.attributes AS `attrib`, N01.punjabi, N01.translit, N01.english, N01.hindi,N01.roman, N01.urdu,SX01.table,SX01.tableID,SX01.walpha FROM N01 JOIN SX01 on N01.ID = SX01.tableID WHERE SX01.table='N01' AND SX01.tableID = " .
                            $search_tableID;
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM N01 JOIN SX01 on N01.ID = SX01.tableID WHERE SX01.table='N01' AND SX01.tableID = " .
                            $search_tableID . " GROUP BY SX01.id";
                    }
                } elseif ($search_type == 'FL_any') {
                    if ($search_tableID == '') {
                        $SQL
                            = "SELECT N01.*,N01.pagelineID AS `lineno`,N01.name, N01.pageID AS `no`, N01.attributes AS `attrib`, N01.punjabi, N01.translit, N01.english, N01.hindi,N01.roman, N01.urdu,SX01.table,SX01.tableID," . $SQL_language_table . " FROM N01 JOIN SX01 on N01.ID = SX01.tableID WHERE SX01.table='N01'" .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '[[:<:]]" . $query_str_FL .
                            "' ORDER BY N01.pagelineID ASC";
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM N01 JOIN SX01 on N01.ID = SX01.tableID WHERE SX01.table='N01'" .
                            $SQL_part . " AND " . $SQL_language_table . " RLIKE '[[:<:]]" . $query_str_FL .
                            "' GROUP BY SX01.id ORDER BY N01.pagelineID ASC";
                    } else {
                        $SQL
                            = "SELECT N01.*,N01.pagelineID AS `lineno`,N01.name, N01.pageID AS `no`, N01.attributes AS `attrib`, N01.punjabi, N01.translit, N01.english, N01.hindi,N01.roman, N01.urdu,SX01.table,SX01.tableID FROM N01 JOIN SX01 on N01.ID = SX01.tableID WHERE SX01.table='N01' AND SX01.tableID = " .
                            $search_tableID;
                        $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM N01 JOIN SX01 on N01.ID = SX01.tableID WHERE SX01.table='N01' AND SX01.tableID = " .
                            $search_tableID . " GROUP BY SX01.id";
                    }
                } elseif ($search_type == 'PHRASE') {
                    $SQL
                        = "SELECT N01.*,N01.pagelineID AS `lineno`,N01.name, N01.pageID AS `no`, N01.attributes AS `attrib`, N01.punjabi, N01.translit, N01.english, N01.hindi,N01.roman, N01.urdu,SX01.table,SX01.tableID," . $SQL_language_table . " FROM N01 JOIN SX01 on N01.ID = SX01.tableID WHERE SX01.table='N01'" .
                        $SQL_part . " AND " . $SQL_language_table . " LIKE '%" . $this->escape_like_str($search_text) . "%' ORDER BY N01.pagelineID ASC";
                    $cnt_sql
                        = "SELECT COUNT(SX01.id) AS cnt FROM N01 JOIN SX01 on N01.ID = SX01.tableID WHERE SX01.table='N01'" .
                        $SQL_part . " AND " . $SQL_language_table . " LIKE '%" . $this->escape_like_str($search_text) . "%' GROUP BY SX01.id ORDER BY N01.pagelineID ASC";
                    // $SQL="SELECT *,pagelineID AS `lineno`,`name`, pageID AS `no`, attributes AS `attrib`, punjabi, translit, english, hindi, roman, urdu FROM N01 WHERE punjabi LIKE '%".$this->escape_like_str($search_text)."%'".$SQL_part." ORDER BY pagelineID ASC";
                }

                $sql_res = DB::select($cnt_sql);
                $cnt = count($sql_res) > 0 ? $sql_res[0]->cnt : 0;

                $full_text_query = base64_encode($SQL);

                if ($cnt > 0) {
                    $result_counts[$scripture]['result_count'] = $cnt;
                    $result_counts[$scripture]['result_query'] = $full_text_query;
                }

            }


        }
        return $result_counts;
    }

    // get all search result for datatable
    public function get_datatable_data(Request $request)
    {
        $postdata = $request->all();

        $start = isset($postdata['start']) ? $_POST['start'] : null;
        $length = isset($postdata['length']) ? $postdata['length'] : null;
        $search_text = isset($postdata['SearchData']) ? $postdata['SearchData'] : null;
        if ($search_text == null) {
            $ret = array(
                "draw" => isset($postdata['draw']) ? $postdata['draw'] : 0,
                "recordsTotal" => 0,
                "recordsFiltered" => 0,
                "data" => []
            );
//            echo json_encode($ret);
//            return;
            return $ret;
        }

        $search_type = $postdata['Searchtype'];

        $search_tableID = '';

        $search_case_sensitive = 'on';

        $search_language = isset($postdata['language']) ? $postdata['language'] : null;

        $scripture = isset($postdata['scripture']) ? $postdata['scripture'] : null;
        $search_scriptures = array($scripture);

        $search_author = isset($postdata['author']) ? $postdata['author'] : null;

        $search_raag = isset($postdata['raag']) ? $postdata['raag'] : null;

        $search_page_from = isset($postdata['page_from']) ? $postdata['page_from'] : null;

        $search_page_to = isset($postdata['page_to']) ? $postdata['page_to'] : null;

        $individual_search = 1;

        $search_from = isset($postdata['bnlSelect']) ? $postdata['bnlSelect'] : null;


//        $this->Mdl_search->search_logic_count($search_text, $search_type, $search_tableID, $search_case_sensitive, $search_language, $search_scriptures,
//            $search_author, $search_raag, $search_page_from, $search_page_to, $individual_search, $search_from);

        $result_counts = $this->search_logic_count($search_text, $search_type, $search_tableID, $search_case_sensitive, $search_language, $search_scriptures,
            $search_author, $search_raag, $search_page_from, $search_page_to, $individual_search, $search_from);


//        $result_counts = $this->session->userdata('search_results');
        $total_cnt = $result_counts[$scripture]['result_count'];
        if ($total_cnt == 0) {
            $data = array();
        } else {
            // $data = array();
            $query = base64_decode($result_counts[$scripture]['result_query']);
//            $query .= ' LIMIT ' . $start . ', ' . $length;
            $result = DB::select($query);
            $data = array();
            $i = $postdata['start'];
            $shabadLink = '';
            $pageLink = '';
            $link = '';
            foreach ($result as $row) {
                $temp = array();
                if ($scripture == 'ggs') {
//                    $shabadLink = '<a  href="' . url('guru-granth-sahib/shabad/' . $row->shabad_id . '/line/' . $row->shabadlineno) . '">'.$row->translit.'</a>';
                    $shabadLink = $row->translit;
                    $link = 'guru-granth-sahib/shabad/' . $row->shabad_id . '/line/' . $row->shabadlineno;
//                    $pageLink = '<a href="' . 'guru-granth-sahib/ang/' . $row->pageno . '/line/' . $row->lineno . '" style="font-size: 14px">Go to Page</a>';
                    $pageLink = 'guru-granth-sahib/ang/' . $row->pageno . '/line/' . $row->lineno;
                } else if ($scripture == 'ak') {
//                    $shabadLink = '<a href="' . url('amrit-keertan/shabad/' . $row->shabad_id . '/' . $url_shabad_name . '/line/' . $row->pagelineno) . '">'.$row->translit.'</a>';
                    $shabadLink = $row->translit;
                    // $link = url('amrit-keertan/shabad/' . $row->shabad_id . '/' . $url_shabad_name . '/line/' . $row->pagelineno);
                    $link = 'amrit-keertan/shabad/' . $row->shabad_id . '/line/' . $row->shabadlineID;
                    $pageLink = 'amrit-keertan/page/' . $row->pageno . '/line/' . $row->pagelineno;
                } else if ($scripture == 'bgv') {
//                    $shabadLink = '<a href="' . url('bhai-gurdas-vaaran/vaar/' . $row->vaarno . '/pauri/' . $row->paurino . '/line/' . $row->pauri_lineno) . '">'.$row->translit.'</a>';
                    $shabadLink = $row->translit;
                    $link = 'bhai-gurdas-vaaran/vaar/' . $row->vaarno . '/pauri/' . $row->paurino . '/line/' . $row->pauri_lineno;
                } else if ($scripture == 'dg') {
//                    $shabadLink = '<a href="' . url('dasam-granth/shabad/' . $row->shabdID . '/line/' . $row->shabdlineID) . '">'.$row->translit.'</a>';
                    $shabadLink = $row->translit;
                    $pageLink = 'dasam-granth/page/' . $row->pageno . '/line/' . $row->pagelineno;
                    $link = 'dasam-granth/shabad/' . $row->shabdID . '/line/' . $row->shabdlineID;
                } else if ($scripture == 'ks') {
//                    $shabadLink = '<a href="' . url('kabit-savaiye/kabit/' . $row->kabit . '/line/' . $row->lineno) . '">'.$row->translit.'</a>';
                    $shabadLink = $row->translit;
                    $link = 'kabit-savaiye/kabit/' . $row->kabit . '/line/' . $row->lineno;
                } else {
                    if ($row->name == 'Ghazal') {
                        $controller = 'ghazal';
//                        $shabadLink = '<a  href="' . url('bhai-nand-lal/'. $controller .'/shabad/' . $row->shabadID . '/line/' . $row->shabadlineID) . '">'.$row->translit.'</a>';
                        $shabadLink = $row->translit;
                        $link = 'bhai-nand-lal/' . $controller . '/shabad/' . $row->shabadID . '/line/' . $row->shabadlineID;
                    } elseif ($row->name == 'Rubaaee') {
                        //exit;
                        $controller = 'quatrains';

//                        $shabadLink = '<a  href="' . url('bhai-nand-lal/'. $controller .'/shabad/' . $row->shabadID . '/line/' . $row->shabadlineID) . '">'.$row->translit.'</a>';
                        $shabadLink = $row->translit;
                        $link = 'bhai-nand-lal/' . $controller . '/shabad/' . $row->shabadID . '/line/' . $row->shabadlineID;

                    } elseif ($row->name == 'Zindginama') {
                        $controller = 'zindginama';
//                        $shabadLink = '<a  href="' . url('bhai-nand-lal/'. $controller .'/shabad/' . $row->shabadID . '/line/' . $row->shabadlineID) . '">'.$row->translit.'</a>';
                        $shabadLink = $row->translit;
                        $link = 'bhai-nand-lal/' . $controller . '/shabad/' . $row->shabadID . '/line/' . $row->shabadlineID;

                    } elseif ($row->name == 'Ganjnaama') {

                        $controller = 'ganjnama';
//                        $shabadLink = '<a  href="' . url('bhai-nand-lal/'. $controller .'/shabad/' . $row->shabadID . '/line/' . $row->shabadlineID) . '">'.$row->translit.'</a>';
                        $shabadLink = $row->translit;
                        $link = 'bhai-nand-lal/' . $controller . '/shabad/' . $row->shabadID . '/line/' . $row->shabadlineID;

                    } elseif ($row->name == 'Jot Bigaas Persian') {
                        $controller = 'jot-bikas-persian';
//                        $shabadLink = '<a  href="' . url('bhai-nand-lal/'. $controller .'/shabad/' . $row->shabadID . '/line/' . $row->shabadlineID) . '">'.$row->translit.'</a>';
                        $shabadLink = $row->translit;
                        $link = 'bhai-nand-lal/' . $controller . '/shabad/' . $row->shabadID . '/line/' . $row->shabadlineID;
                    } elseif ($row->name == 'Jot Bigaas Punjabi') {
                        $controller = 'jot-bikas';
//                        $shabadLink = '<a  href="' . url('bhai-nand-lal/'. $controller .'/shabad/' . $row->shabadID . '/line/' . $row->shabadlineID) . '">'.$row->translit.'</a>';
                        $shabadLink = $row->translit;
                        $link = 'bhai-nand-lal/' . $controller . '/shabad/' . $row->shabadID . '/line/' . $row->shabadlineID;
                    } elseif ($row->name == 'Rahitnama') {
                        $controller = 'rahitnama';
//                        $shabadLink = '<a href="' . url('bhai-nand-lal/'. $controller .'/shabad/' . $row->shabadID . '/line/' . $row->shabadlineID) . '">'.$row->translit.'</a>';
                        $shabadLink = $row->translit;
                        $link = 'bhai-nand-lal/' . $controller . '/shabad/' . $row->shabadID . '/line/' . $row->shabadlineID;
                    } elseif ($row->name == 'Tankahnama') {
                        $controller = 'tankahnama';
//                        $shabadLink = '<a href="' . url('bhai-nand-lal/'. $controller .'/shabad/' . $row->shabadID . '/line/' . $row->shabadlineID) . '">'.$row->translit.'</a>';;
                        $shabadLink = $row->translit;
                        $link = 'bhai-nand-lal/' . $controller . '/shabad/' . $row->shabadID . '/line/' . $row->shabadlineID;
                    }
                }
                $temp['id'] = ++$i;
                $temp['punjabi'] = $row->punjabi;
                $temp['translit'] = $shabadLink;
                $temp['pageLink'] = $pageLink;
                $temp['shabadlink'] = $link;
//                $temp = array(++$i,'', $shabadLink, $row->punjabi, $pageLink);
//                $temp = array(++$i,'', $row->translit, $row->punjabi);
                $data[] = $temp;
            }
        }
        $search_parameters['search_text'] = $search_text;
        $search_parameters['search_type'] = $search_type;
        $search_parameters['search_language'] = $search_language;
//        $this->session->set_userdata('search_parameters', $search_parameters);
        $_SESSION['search_parameters'] = $search_parameters;

        $ret = array(
            "draw" => isset($postdata['draw']) ? $postdata['draw'] : 0,
            "recordsTotal" => $total_cnt,
            "recordsFiltered" => $total_cnt,
            "data" => $data,
            "sql" => base64_decode($result_counts[$scripture]['result_query'])
        );

        return $ret;
    }

    function guestbook(Request $request)
    {
        $pageno = $request->get('page');
        $index = 10 * $pageno;
        $page['comments_count'] = $this->get_guestbook_comments_count(array("status" => 1));

        $page['comments'] = $this->get_guestbook_comments(1, $index);


        // load the page
        $page['theme'] = 'theme_7';
        $page['meta_title'] = 'Guestbook:SearchGurbani.com';
        $page['meta_description'] = 'Guestbook -SearchGurbani.com';
        return $page;
    }

    function guestbook_post(Request $request) {
        $name = $request->name;
        $email = $request->email;
        $message = $request->message;
        $status = 1;
        $created = date("Y-m-d H:i:s");
        $updated = date("Y-m-d H:i:s");

        DB::table('GB')->insert([
           'name'=>$name,
           'email'=>$email,
           'message'=>$message,
           'created'=>$created,
           'updated'=>$updated,
           'status'=>$status
        ]);
        return ['status'=>'ok'];
    }

    // Feedback send
    function feedback_send(Request $request) {
        return ['status'=>'ok'];
    }

    // preference save
    function preference_save(Request $request) {
        return ['status'=>'ok'];
    }

    function search_results_preview(Request $request) {
        $SG_ScriptureTypes = config('constants.SG_ScriptureTypes');
        $search_text = $request->get('searchData');
        $scripture = $request->get('scripture');
        $search_language = $request->get('language');
        $search_author = $request->get('anchor');
        $search_raag = $request->get('raag');
        $search_page_from = $request->get('page_from');
        $search_page_to = $request->get('page_to');
        $search_type = $request->get('searchType');
        $search_tableID = $request->get('tableId');
        $search_case_sensitive = $request->get('case');

        $cur_page = $request->get('page');
        $index = intval($cur_page) * 25;

        $SQL = '';
        $cnt_sql = '';
        $query_str_FL = $this->escape_like_str($search_text);
        $query_str_FL = trim(str_replace(' ', '[a-zA-Zਁ-ੵ\@]* ', $query_str_FL));

        $page = [];


        if ($scripture == 'ggs') {

            $result_counts[$scripture]
                = array("scripture_name" =>  $SG_ScriptureTypes[$scripture][1],
                "result_count" => 0, "result_query" => '');

            $SQL_language_table = '';
            $SQL_language_table1 = '';

            if ($search_language == 'ROMAN')
                $SQL_language_table .= "SX01.walpha";

            if ($search_language == 'PUNJABI-ASC')
                $SQL_language_table .= "BINARY SX01.`wgamma-a`";

            if ($search_language == 'PUNJABI'){
                $SQL_language_table .= "SX01.wgamma";
                $SQL_language_table1 .= "SX01.gamma";
            }

            $SQL_part = '';

            if ($search_author) {
                $SQL_part .= " AND S01.author_id= " . $search_author . " ";
            }

            if ($search_raag) {

                $SQL_part .= " AND S01.raag_id= " . $search_raag;
            }

            if ($search_page_from || $search_page_to) {
                $SQL_part .= " AND S01.pageID BETWEEN " . $search_page_from . " AND " .
                    $search_page_to;
            }

            if ($search_type == 'FL_begin') {
                if ($search_tableID == '') {
                    $SQL
                        = "SELECT  S01.*,S01.ID AS id, S01.pageID AS pageno, S01.pagelineID AS pagelineno, S01.lineID AS lineno, S01.shabdID AS shabad_id, S01.shabdlineID AS shabadlineno, S01.attributes AS pattrib,SX01.table,SX01.tableID," . $SQL_language_table . " FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' " .
                        $SQL_part . " AND " . $SQL_language_table . " RLIKE '^" . $query_str_FL .
                        "' ORDER BY S01.pagelineID ASC LIMIT " . $index .",25";
                    $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' " .
                        $SQL_part . " AND " . $SQL_language_table . " RLIKE '^" . $query_str_FL .
                        "' ORDER BY S01.pagelineID ASC";
                } else {
                    $SQL
                        = "SELECT  S01.*,S01.ID AS id, S01.pageID AS pageno, S01.pagelineID AS pagelineno, S01.lineID AS lineno, S01.shabdID AS shabad_id, S01.shabdlineID AS shabadlineno, S01.attributes AS pattrib,SX01.table,SX01.tableID FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' AND SX01.tableID=" .
                        $search_tableID . " ORDER BY S01.pagelineID ASC LIMIT " . $index .",25";
                    $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' AND SX01.tableID=" . $search_tableID;
                }
            }

            elseif ($search_type == 'FL_any') {
                if ($search_tableID == '') {
                    $SQL
                        = "SELECT  S01.*,S01.ID AS id, S01.pageID AS pageno, S01.pagelineID AS pagelineno, S01.lineID AS lineno, S01.shabdID AS shabad_id, S01.shabdlineID AS shabadlineno, S01.attributes AS pattrib,SX01.table,SX01.tableID," . $SQL_language_table . " FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' " .
                        $SQL_part . " AND " . $SQL_language_table . " RLIKE '[[:<:]]" . $query_str_FL .
                        "' ORDER BY S01.pagelineID ASC LIMIT " . $index .",25";
                    $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' " .
                        $SQL_part . " AND " . $SQL_language_table . " RLIKE '[[:<:]]" . $query_str_FL .
                        "' ORDER BY S01.pagelineID ASC";
                } else {
                    $SQL
                        = "SELECT  S01.*,S01.ID AS id, S01.pageID AS pageno, S01.pagelineID AS pagelineno, S01.lineID AS lineno, S01.shabdID AS shabad_id, S01.shabdlineID AS shabadlineno, S01.attributes AS pattrib,SX01.table,SX01.tableID FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' AND SX01.tableID=" .
                        $search_tableID . " ORDER BY S01.pagelineID ASC LIMIT " . $index . ", 25";
                    $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' AND SX01.tableID=" .
                        $search_tableID;
                }
            }

            elseif($search_type == 'PHRASE')
            {
                // $SQL="SELECT *,ID AS id, pageID AS pageno, pagelineID AS pagelineno, lineID AS lineno, shabdID AS shabad_id, shabdlineID AS shabadlineno, attributes AS pattrib FROM `S01` WHERE punjabi LIKE '%".$this->escape_like_str($search_text)."%'".$SQL_part." ORDER BY pagelineID ASC";
//                $SQL = "SELECT  S01.*,S01.ID AS id, S01.pageID AS pageno, S01.pagelineID AS pagelineno, S01.lineID AS lineno, S01.shabdID AS shabad_id, S01.shabdlineID AS shabadlineno, S01.attributes AS pattrib,SX01.table,SX01.tableID," . $SQL_language_table . " FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' " .
//                    $SQL_part . " AND (" . $SQL_language_table . " LIKE '%" .$this->escape_like_str($search_text)."%' or ". $SQL_language_table1 . " LIKE '%" .$this->escape_like_str($search_text)."%') ORDER BY S01.pagelineID ASC LIMIT " . $index . ",25";
//                $cnt_sql = "SELECT COUNT(SX01.id) AS cnt FROM S01 JOIN SX01 on S01.ID = SX01.tableID WHERE SX01.table='S01' " .
//                    $SQL_part . " AND (" . $SQL_language_table . " LIKE '%" .$this->escape_like_str($search_text)."%' or ". $SQL_language_table1 . " LIKE '%" .$this->escape_like_str($search_text)."%') ORDER BY S01.pagelineID ASC";
                $count = 25;

                $SQL = "SELECT  S01.*,S01.ID AS id, S01.pageID AS pageno, S01.pagelineID AS pagelineno, S01.lineID AS lineno, S01.shabdID AS shabad_id, S01.shabdlineID AS shabadlineno, S01.attributes AS pattrib FROM S01 WHERE S01.pageID BETWEEN 1 AND 1430 AND S01.punjabi LIKE '%".$this->escape_like_str($search_text)."%' ORDER BY S01.pagelineID ASC LIMIT $index, $count";
                $cnt_sql = "SELECT COUNT(S01.id) AS cnt FROM S01 WHERE S01.pageID BETWEEN 1 AND 1430 AND S01.punjabi LIKE '%".$this->escape_like_str($search_text)."%' ORDER BY S01.pagelineID ASC";

            }

            $lines_count = DB::select($cnt_sql);
            $page['lines_count'] = $lines_count[0]->cnt;
            $page['search_results_info'] = array("showing_from" => $index + 1,
                "showing_to" => ($index + 25 > $page['lines_count'] ? $page['lines_count'] : $index + 25),
                "total_results" => $page['lines_count']
            );

            $page['lines'] = DB::select($SQL);
        }
        return $page;
    }
}
