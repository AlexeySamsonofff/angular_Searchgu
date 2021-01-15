<?php

namespace App\Console\Commands;

use App\Hkmds;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Sunra\PhpSimple\HtmlDomParser;

class HukamCron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'hukam:daily';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the command.
     *
     * @return mixed
     */

    function stringSearch($strStart, $strEnd, $strSearchString, $showPos = false, $arrSubStr = array())
    {
        //print "Start String: ".$strStart."<br>";
        //print "End String: ".$strEnd."<hr>";

        $intStartLen = strlen($strStart);
        $intEndLen = strlen($strEnd);
        //==========================================
        $intStartPos = strpos($strSearchString, $strStart);

        if ($intStartPos === false)
            return $arrSubStr;

        $strRemainAfterStart = substr($strSearchString, $intStartPos + $intStartLen);

        $intEndPos = strpos($strRemainAfterStart, $strEnd);
        if ($intEndPos !== false)
            $intEndPos = $intEndPos + $intStartPos + $intStartLen;
        else
            return $arrSubStr;

        $intResultStartPos = $intStartPos + $intStartLen;
        $strResult = substr($strSearchString, $intResultStartPos, $intEndPos - $intResultStartPos);

        $strRemain = substr($strSearchString, $intEndPos + $intEndLen);
        $intNextStartPos = strpos($strRemain, $strStart);

        if ($showPos == true) {
            $arrList['S'] = $intStartPos;
            $arrList['E'] = $intEndPos;
            $arrList['L'] = $intEndPos - $intResultStartPos;
            $arrSubStr[] = $arrList;
        } else {
            $arrSubStr[] = $strResult;
        }

        if ($intNextStartPos !== false && $intStartPos !== false && $intEndPos !== false)
            return $this->stringSearch($strStart, $strEnd, $strRemain, $showPos, $arrSubStr);
        else
            return $arrSubStr;
    }

    function countHukamnamaAmrit($date)
    {
        $query = "select * FROM HKMDS WHERE date_hukam='$date'";
        return DB::select($query);
    }

    function countHukamnamaAmritInt($hukumtime)
    {
        $query = "select * FROM HKMDS WHERE hukamdatetime='$hukumtime'";
        return DB::select($query);
    }

    function insertHukamnamaAmrit($info)
    {
        return Hkmds::create($info);
    }

    public function handle()
    {
//        $url = 'http://old.sgpc.net/hukumnama/sgpconlinehukamnama.asp';
//        $content = file_get_contents($url);
//        $startDiv = '<font size="4" color="#000000" face="Georgia, Times New Roman, Times, serif">';
//        $strEnd = '</font>';
//        $dateStrs = $this->stringSearch($startDiv, $strEnd, $content);
//        if(!empty($dateStrs)) {
//            $arr = explode('[', $dateStrs[0]);
//            $arr1 = explode(']', $arr[1]);
//            $arr2 = explode(' ', $arr1[0]);
//
//            $month = $arr2[0];
//            $mnthh = date("m", strtotime($month));
//
//            $day = $arr2[1];
//            $dayFnl = str_replace(',', "", $day);
//
//            $year = $arr2[2];
//            $yearFnl = str_replace(',', "", $year);
//
//            $dateFnl = date("Y-m-d", mktime(0, 0, 0, $mnthh, $dayFnl, $yearFnl));
//            $today = date("Y-m-d");
//
//            $titlePunjabi = $this->stringSearch('<font color="#000000"><b>', '</b>', $content);
//
//        }

        $dateFnl = date("Y-m-d");
        $hukamNamaSelect = $this->countHukamnamaAmrit($dateFnl);
        if (empty($hukamNamaSelect)) {
            $urllink = "http://old.sgpc.net/hukumnama/sgpconlinehukamnama.asp";
            $doc = \PhpQuery::newDocumentFileHTML($urllink);

            $arr = array();
            if (pq("div font[face='Georgia, Times New Roman, Times, serif']")->text()) {
                $arr['hukamdatetime'] = addslashes(trim(pq("div font[face='Georgia, Times New Roman, Times, serif']")->text()));

                /***********************************************************************************/

                $arr['titlePunjabi'] = addslashes(trim(mb_convert_encoding(pq("center div font[color='#000000'] b")->text(),"UTF-8","UTF-8")));
                if ($arr['titlePunjabi'] == '')
                    $arr['titlePunjabi'] = addslashes(trim(mb_convert_encoding(pq("center div font[color='#000000'] b")->text(), 'UTF-8', 'ASCII')));
                if ($arr['titlePunjabi'] == '')
                    $arr['titlePunjabi'] = addslashes(trim(pq("center div font[color='#000000'] b")->text()));

                /***********************************************************************************/

                $arr['contentPunjabi'] = addslashes(trim(mb_convert_encoding(pq("center p[align='justify'] font[color='#000079'] strong font[color='#cc3333'] font[color='#000000']")->text(),"UTF-8","ASCII")));
                if ($arr['contentPunjabi'] == '')
                    $arr['contentPunjabi'] = addslashes(trim(mb_convert_encoding(pq("center p[align='justify'] font[color='#000079'] strong font[color='#cc3333'] font[color='#000000']")->text(), 'UTF-8', 'ASCII')));
                if ($arr['contentPunjabi'] == '')
                    $arr['contentPunjabi'] = addslashes(trim(pq("center:eq(0) p[align='justify'] font[color='#000079'] strong font[color='#cc3333'] font[color='#000000']")->text()));

                /***********************************************************************************/

                $arr['leftFooterPunjabi'] = addslashes(trim(mb_convert_encoding(pq("div[align='justify'] table tr td[width='75%'] font[color='black']")->text(),"UTF-8","ASCII")));
                if ($arr['leftFooterPunjabi'] == '')
                    $arr['leftFooterPunjabi'] = addslashes(trim(mb_convert_encoding(pq("div[align='justify'] table tr td[width='75%'] font[color='black']")->text(), 'UTF-8', 'ASCII')));
                if ($arr['leftFooterPunjabi'] == '')
                    $arr['leftFooterPunjabi'] = addslashes(trim(pq("div[align='justify'] table tr td[width='75%'] font[color='black']")->text()));

                /***********************************************************************************/

                $arr['rightFooterPunjabi'] = addslashes(trim(mb_convert_encoding(pq("div[align='justify'] table tr td[width='25%'] font[color='black']")->text(),"UTF-8","ASCII")));
                if ($arr['rightFooterPunjabi'] == '')
                    $arr['rightFooterPunjabi'] = addslashes(trim(mb_convert_encoding(pq("div[align='justify'] table tr td[width='25%'] font[color='black']")->text(), 'UTF-8', 'ASCII')));
                if ($arr['rightFooterPunjabi'] == '')
                    $arr['rightFooterPunjabi'] = addslashes(trim(pq("div[align='justify'] table tr td[width='25%'] font[color='black']")->text()));

                /***********************************************************************************/

                $arr['viyakhyaPunjabi'] = addslashes(trim(mb_convert_encoding(pq("center table tr td p[align='justify'] font[size='+1'][color='black'][face='WebAkharSlim']")->text(),"UTF-8","ASCII")));
                if ($arr['viyakhyaPunjabi'] == '')
                    $arr['viyakhyaPunjabi'] = addslashes(trim(mb_convert_encoding(pq("center table tr td p[align='justify'] font[size='+1'][color='black'][face='WebAkharSlim']")->text(), 'UTF-8', 'ASCII')));
                if ($arr['viyakhyaPunjabi'] == '')
                    $arr['viyakhyaPunjabi'] = addslashes(trim(pq("center table tr td p[align='justify'] font[size='+1'][color='black'][face='WebAkharSlim']")->text()));

                /***********************************************************************************/

                $arr['titleEnglish'] = addslashes(trim(mb_convert_encoding(pq("center table tr td[height='16'] div[align='center'] font")->text(),"UTF-8","ASCII")));
                if ($arr['titleEnglish'] == '')
                    $arr['titleEnglish'] = addslashes(trim(mb_convert_encoding(pq("center table tr td[height='16'] div[align='center'] font")->text(), 'UTF-8', 'ASCII')));
                if ($arr['titleEnglish'] == '')
                    $arr['titleEnglish'] = addslashes(trim(pq("center table tr td[height='16'] div[align='center'] font")->text()));

                /***********************************************************************************/

                $arr['contentEnglish'] = addslashes(trim(mb_convert_encoding(pq("center table tr td p[align='justify'] font[color='black'][size='3']")->text(),"UTF-8","ASCII")));
                if ($arr['contentEnglish'] == '')
                    $arr['contentEnglish'] = addslashes(trim(mb_convert_encoding(pq("center table tr td p[align='justify'] font[color='black'][size='3']")->text(), 'UTF-8', 'ASCII')));
                if ($arr['contentEnglish'] == '')
                    $arr['contentEnglish'] = addslashes(trim(pq("center table tr td p[align='justify'] font[color='black'][size='3']")->text()));

                /***********************************************************************************/


                $arr['leftFooterEnglish'] = addslashes(trim(pq(" table[align='center'] tr td[height='23'][width='77%'] font[color='black'][size='3']")->text()));
                $arr['rightFooterEnglish'] = addslashes(pq("table[align='center'] tr td[align='right'][height='23'][width='23%'] font[color='black'][size='3']")->text());


                $month = pq("font[size='1'] select[name='month'] option[selected]")->text();
                $day = pq("font[size='1'] select[name='date'] option[selected]")->text();
                $year = pq("font[size='1'] select[name='year'] option[selected]")->text();

                $date = $month . " " . $day . "," . $year;
                $arr['date_hukam'] = date("Y-m-d", strtotime($date));
                $hukamNamaSelect = $this->countHukamnamaAmritInt($arr['hukamdatetime']);

//                $hukum_cron_email = config('hukum_cron_email');

                if (empty($hukamNamaSelect)) {
                    $hukamNama = $this->insertHukamnamaAmrit($arr);

                    ob_start();
                    echo "added";
                    print_r($arr);
                    $out1 = ob_get_contents();
                    ob_end_clean();
//                    mail($hukum_cron_email, "sgpc cron running", $out1);
                }
            }
        }
    }
}
