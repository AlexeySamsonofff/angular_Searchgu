<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ApiBaseController extends Controller
{
    /**
     * Get keywords and meanings
     * @lines - Array
     */
    public function get_dictionary_words($lines) // $page_no - Ang No.
    {
        $keywords = array();
        foreach ($lines as $line) {
            $SQL = "
			SELECT punjabi, concat(`roman`,' - ',`English`) as `meaning`
			FROM `SK01`
			WHERE '" . $line->punjabi . "' LIKE concat( '% ', `punjabi` , ' %' )
			OR '" . $line->punjabi . "' LIKE concat( `punjabi` , ' %' ) ";
//            $rs = $this->db->query($SQL);
//            if ($rs->num_rows() > 0) {
//                foreach ($rs->result() as $row) {
//                    $keywords[$row->punjabi] = $row->meaning;
//                }
//            }
            $rs = DB::select($SQL);
            if (count($rs) > 0) {
                foreach ($rs as $row) {
                    $keywords[$row->punjabi] = $row->meaning;
                }
            }
        }
        return array_unique($keywords);
    }

    /**
     * Get guestbook comments
     * @comments - Array
     */
    function get_guestbook_comments_count($where = array()) // $page_no - Ang No.
    {
        $SQL = "SELECT count(*) as cnt FROM `GB` order by created desc";
        $res = DB::select($SQL);
        if (count($res) > 0) {
            return $res[0]->cnt;
        } else {
            return false;
        }
    }

    /**
     * Get guestbook comments
     * @comments - Array
     */
    function get_guestbook_comments($status, $index = 0) // $page_no - Ang No.
    {
//        $this->db->order_by('created', 'desc');
//        $rs = $this->db->get_where('GB', $where, 10, $index);//$this->db->query($SQL,$where);
//        if ($rs->num_rows() > 0) {
//            return $rs->result();
//        } else {
//            return false;
//        }

        $SQL = "SELECT * from `GB` WHERE status=$status ORDER BY created DESC LIMIT $index, 10";
        return DB::select($SQL);
    }

    function escape($string) {
        return trim($string);
    }

    /**
     * Get lines
     */
    function get_line($data = array())
    {

        $SQL = "
			SELECT
				*
			FROM
				`" . $data['table'] . "`
			WHERE
				1 
		";

        foreach ($data['where'] as $field => $value) {
            if(is_numeric($value)){
                $SQL .= ' and ' . $field . ' = ' . $this->escape($value);
            }
            if(is_string($value)){
                $SQL .= ' and ' . $field . " = '" . $this->escape($value) . "'";
            }
        }

        return DB::select($SQL);
    }

    function get_line_verse($data = array())
    {
        $SQL = "
			SELECT
				*
			FROM
				`" . $data['table'] . "`
			WHERE
				1 
		";
        foreach ($data['where'] as $field => $value) {
            if(is_numeric($value)){
                $SQL .= ' and ' . $field . ' = ' . $this->escape($value);
            }
            if(is_string($value)){
                $SQL .= ' and ' . $field . " = '" . $this->escape($value) . "'";
            }
        }
        return DB::select($SQL);
    }

}
