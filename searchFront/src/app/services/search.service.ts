import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //   })
  // };
  SERVER_URL = environment.apiServer; // for local work
  // SERVER_URL = "api/"; // for hosting

  constructor(private http: HttpClient) { }

  get_allwords(data: any): Observable<any> {
    let formData = new FormData();
    Object.keys(data).map((key)=>{
      formData.append(key, data[key]);
    });
    return this.http.post<any>(this.SERVER_URL + "get_allwords", formData);
  }

  get_datatable_data(data: any): Observable<any> {
    let formData = new FormData();
    Object.keys(data).map((key)=>{
      formData.append(key, data[key]);
    });
    return this.http.post<any>(this.SERVER_URL + "get_datatable_data", formData);
  }

  /**
   *
   * Guru granth sahib apis
  */
  get_ang_by_ang(page: any, lineno: any): Observable<any> {

    return this.http.get<any>(this.SERVER_URL + `get_ang_by_ang?page=${page}&line_no=${lineno}`);
  }

  get_chapters(): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `ggs/get_chapters`);
  }

  get_authors(): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `ggs/get_authors`);
  }

  get_author_byname(author_name: any): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `ggs/get_author?author_name=${author_name}`);
  }

  get_raags(): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `ggs/get_raags`);
  }

  // ggs/shabad/{shabad_id}/line/{lineno}
  ggs_shabad_line(shabad_id, lineno): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `ggs/shabad/${shabad_id}/line/${lineno}`);
  }

  // ggs/ang/{page_no}/line/{lineno}
  ggs_ang_line(page_no, lineno): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `ggs/ang/${page_no}/line/${lineno}`);
  }

  get_verse(page_no, baseurl, scripture, type='') : Observable<any>{
    return this.http.get<any>(this.SERVER_URL + `${baseurl}/verse?page_no=${page_no}&scripture=${scripture}&type=${type}&base_url=${baseurl}`);
  }

  ggs_world_ang(page_no: number): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `guru-granth-sahib/world/ang?page_no=${page_no}`);
  }

  ggs_world_total(): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `guru-granth-sahib/world/ang/count`);
  }

  ggs_world_languages(): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `guru-granth-sahib/world/ang/languages`);
  }

  ggs_world_transliteration(): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `guru-granth-sahib/world/ang/transliterations`);
  }

  ggs_world_translation(): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `guru-granth-sahib/world/ang/translations`);
  }

  /**
   * Amrit Keertan apis
   */
  get_page_by_page(page: any, line_no: any): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `ak/page?page=${page}&line_no=${line_no}`);
  }

  ak_chapter_index(): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `ak/index/chapter`);
  }

  ak_chapter_name(chapter_id, chapter_name): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `ak/chapter/${chapter_id}/${chapter_name}`);
  }

  //ak/index/english
  ak_english_index(alpha): Observable<any> {
    if(!alpha) {
      alpha = 'A';
    }
    return this.http.get<any>(this.SERVER_URL + `ak/index/english?alpha=${alpha}`);
  }

  //ak/index/punjabi
  ak_punjabi_index(alpha): Observable<any> {
    if(!alpha) {
      alpha = 'ਕ';
    }
    return this.http.get<any>(this.SERVER_URL + `ak/index/punjabi?alpha=${alpha}`);
  }

  //ak/index/hindi
  ak_hindi_index(alpha): Observable<any> {
    if(!alpha) {
      alpha = 'क';
    }
    return this.http.get<any>(this.SERVER_URL + `ak/index/hindi?alpha=${alpha}`);
  }

  // ak/shabad/{shabad_id}/line/{lineno}
  ak_shabad_line (shabad_id, lineno) {
    return this.http.get<any>(this.SERVER_URL + `ak/shabad/${shabad_id}/line/${lineno}`);
  }

  /**
   * Bgv apis
   *
   */
  vaar(vaar_no, pauri_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `bgv/vaar?vaar_no=${vaar_no}&pauri_no=${pauri_no}`);
  }

  // bhai-gurdas-vaaran/index/vaar
  bgv_vaar_index(vaar_no): Observable<any> {
    if(!vaar_no) {
      vaar_no = 1;
    }
    return this.http.get<any>(this.SERVER_URL + `bgv/index/vaar?vaar_no=${vaar_no}`);
  }

  // bgv/vaar/{vaar_no}/pauri/{pauri_no}/line/{line_no}
  bgv_vaar_pauri_line(vaar_no, pauri_no, line_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `bgv/vaar/${vaar_no}/pauri/${pauri_no}/line/${line_no}`);
  }

  /**
   * Dgs apis
   */
  dgs_page_by_page(page_no, lineno): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `dasam-granth/page?page=${page_no}&line_no=${lineno}`);
  }

    // dasam-granth/index/chapter
  dgs_chapter_index(lang): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `dasam-granth/index/chapter?lang=${lang}`);
  }

    // dasam-granth/shabad/{:shabad_id}/line/{lineno}
  dgs_shabad_line(shabad_id, lineno) {
    return this.http.get<any>(this.SERVER_URL + `dasam-granth/shabad/${shabad_id}/line/${lineno}`);
  }

  /**
   * Kabit Savaiye apis
   */
  ks_kabit_by_kabit(page_no, lineno): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `kabit-savaiye/kabit?page=${page_no}&lineno=${lineno}`);
  }
  // kabit-savaiye/kabit/{kabit_id}/line/{lineno}
  ks_kabit_line(kabit_id, lineno): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `kabit-savaiye/kabit/${kabit_id}/line/${lineno}`);
  }

  /**
   * Bnl routes
   */
  bnl_page(type, page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `bhai-nand-lal/${type}/page?page=${page_no}`);
  }
  // bhai-nand-lal/ghazal/page
  bnl_ghazal_page(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `bhai-nand-lal/ghazal/page?page=${page_no}`);
  }

  // bhai-nand-lal/quatrains/page
  bnl_quatrains_page(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `bhai-nand-lal/quatrains/page?page=${page_no}`);
  }

  // bhai-nand-lal/quatrains/page
  bnl_zindginama_page(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `bhai-nand-lal/zindginama/page?page=${page_no}`);
  }

  // bhai-nand-lal/quatrains/page
  bnl_ganjnama_page(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `bhai-nand-lal/ganjnama/page?page=${page_no}`);
  }

  // bhai-nand-lal/jot-bikas/page
  bnl_jb_page(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `bhai-nand-lal/jot-bikas/page?page=${page_no}`);
  }

  // bhai-nand-lal/jot-bikas-persian/page
  bnl_jb_person_page(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `bhai-nand-lal/jot-bikas-persian/page?page=${page_no}`);
  }

  // bhai-nand-lal/rahitnama/page
  bnl_rahitnama_page(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `bhai-nand-lal/rahitnama/page?page=${page_no}`);
  }

  // bhai-nand-lal/tankahnama/page
  bnl_tankahnama_page(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `bhai-nand-lal/tankahnama/page?page=${page_no}`);
  }

  // bhai-nand-lal/zindginama/shabad/14123/line/3
  bnl_shabad_line(shabad_id, lineno, type): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `bhai-nand-lal/${type}/shabad/${shabad_id}/line/${lineno}`);
  }

  // bhai-nand-lal/get_all_category
  bnl_get_all_category(): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `bhai-nand-lal/get_all_category`);
  }

  /**
   *  baanis apis
   */

   // baanis/japji-sahib
   japji_sahib(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/japji-sahib?page=${page_no}`);
   }

   jaap_sahib(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/jaap-sahib?page=${page_no}`);
   }

   // tvai-prasadh-savaiye
   tvai_prasadh_savaiye(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/tvai-prasadh-savaiye?page=${page_no}`);
   }
   // tvai-prasadh-savaiye-dheenan-kee
   tvai_prasadh_savaiye_dheenan_kee(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/tvai-prasadh-savaiye-dheenan-kee?page=${page_no}`);
   }

   // shabad-hazare-paatishahi-10
   shabad_hazare_paatishahi_10(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/shabad-hazare-paatishahi-10?page=${page_no}`);
   }

   // baanis/chaupai-sahib
   chaupai_sahib(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/chaupai-sahib?page=${page_no}`);
   }

   // baanis/anand-sahib
   anand_sahib(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/anand-sahib?page=${page_no}`);
   }

   // baanis/rehraas-sahib
   rehraas_sahib(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/rehraas-sahib?page=${page_no}`);
   }

   // baanis/kirtan-sohila
   kirtan_sohila(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/kirtan-sohila?page=${page_no}`);
   }
   // baanis/anand-sahib-bhog
   anand_sahib_bhog(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/anand-sahib-bhog?page=${page_no}`);
   }

   // baanis/aarti
   aarti(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/aarti?page=${page_no}`);
   }

   // baanis/laavan-anand-karaj
   laavan_anand_karaj(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/laavan-anand-karaj?page=${page_no}`);
   }

   // baanis/asa-ki-vaar
   asa_ki_vaar(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/asa-ki-vaar?page=${page_no}`);
   }

   // baanis/sukhmani-sahib
   sukhmani_sahib(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/sukhmani-sahib?page=${page_no}`);
   }

   // baanis/sukhmana-sahib
   sukhmana_sahib(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/sukhmana-sahib?page=${page_no}`);
   }

   // baanis/sidh-gosht
   sidh_gosht(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/sidh-gosht?page=${page_no}`);
   }

   // baanis/ramkali-sadh
   ramkali_sadh(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/ramkali-sadh?page=${page_no}`);
   }

   // baanis/dhakanee-oankaar
   dhakanee_oankaar(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/dhakanee-oankaar?page=${page_no}`);
   }

   // baanis/baavan-akhree
   baavan_akhree(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/baavan-akhree?page=${page_no}`);
   }

   // baanis/shabad-hazare
   shabad_hazare(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/shabad-hazare?page=${page_no}`);
   }

   // baanis/baarah-maaha
   baarah_maaha(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/baarah-maaha?page=${page_no}`);
   }

   // baanis/dukh-bhanjani-sahib
   dukh_bhanjani_sahib(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/dukh-bhanjani-sahib?page=${page_no}`);
   }

   // baanis/salok-sehskritee
   salok_sehskritee(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/salok-sehskritee?page=${page_no}`);
   }

   // baanis/gathaa
   gathaa(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/gathaa?page=${page_no}`);
   }

   // baanis/phunhay-m5
   phunhay_m5(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/phunhay-m5?page=${page_no}`);
   }

   // baanis/chaubolay-m5
   chaubolay_m5(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/chaubolay-m5?page=${page_no}`);
   }


   // baanis/chaubolay-m5
   salok_kabeer_ji(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/salok-kabeer-ji?page=${page_no}`);
   }

   // baanis/salok-farid-ji
   salok_farid_ji(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/salok-farid-ji?page=${page_no}`);
   }

   // baanis/savaiye-m1
   savaiye_m1(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/savaiye-m1?page=${page_no}`);
   }

  // baanis/savaiye-m2
   savaiye_m2(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/savaiye-m2?page=${page_no}`);
   }

   // baanis/savaiye-m3
   savaiye_m3(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/savaiye-m3?page=${page_no}`);
   }

   savaiye_m4(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/savaiye-m4?page=${page_no}`);
   }

   savaiye_m5(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/savaiye-m5?page=${page_no}`);
   }

   salok_m9(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/salok-m9?page=${page_no}`);
   }

   akal_ustati(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/akal-ustati?page=${page_no}`);
   }

   bachitar_natak(page_no): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `baanis/bachitar-natak?page=${page_no}`);
   }


   /**
    *  Resources apis
    */
   // res/hukumnama
   hukumnama(): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `res/hukumnama`);
   }

   // res/hukumnama/ang/{ang}
   hukumnama_ang(ang: any, type: string): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `res/hukumnama/ang?ang=${ang}&type=${type}`);
   }

   // res/hukum
   hukum(date: string): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + `res/hukum?dt=${date}`);
   }

   // hukum/rss
   getHukumRss(): Observable<any> {
     return this.http.get<any>(this.SERVER_URL + 'res/hukum/rss');
   }

   // res/mahan-kosh/view
   mahan_kosh_view(keyword: string, alpha: string, page: number) {
    return this.http.get<any>(this.SERVER_URL + `res/mahan-kosh/view?keyword=${keyword}&alpha=${alpha}&page=${page}`);
   }

   // get_resources_words
   get_resources_words(q: string, table_name: string) {
    return this.http.get<any>(this.SERVER_URL + `res/get_resources_words?q=${q}&table_name=${table_name}`);
   }

   // mahan-kosh/do-search
   mohan_kosh_do_search(q: string, table_name: string) {
    return this.http.get<any>(this.SERVER_URL + `res/mahan-kosh/do-search?q=${q}&table_name=${table_name}`);
   }

   // sggs-kosh
   sggs_kosh_view(keyword: string, alpha: string, page: number) {
     return this.http.get<any>(this.SERVER_URL + `res/sggs-kosh/view?keyword=${keyword}&alpha=${alpha}&page=${page}`);
   }

   // guru_granth_kosh_view
   guru_granth_kosh_view(keyword: string, alpha: string, page: number) {
    return this.http.get<any>(this.SERVER_URL + `res/guru-granth-kosh/view?keyword=${keyword}&alpha=${alpha}&page=${page}`);
   }

   // res/sri-nanak-prakash/chapters/{chapterId}
   sri_nanak_prakash_chapters(chapterId: number) {
    return this.http.get<any>(this.SERVER_URL + `res/sri-nanak-prakash/chapters/${chapterId}`);
   }

   // res/sri-nanak-prakash/page
   sri_nanak_prakash_page(page_no: number, label: string, volume_id: number) {
     return this.http.get<any>(this.SERVER_URL + `res/sri-nanak-prakash/page?page_no=${page_no}&label=${label}&volume_id=${volume_id}`);
   }

   // res/sri-gur-pratap-suraj-granth/search-preview
   sri_nanak_prakash_search_preview(page: number, keyword: string) {
    return this.http.get<any>(this.SERVER_URL + `res/sri-nanak-prakash/search-preview?page=${page}&keyword=${keyword}`);
   }

   // res/sri-gur-pratap-suraj-granth/search-preview
   sgpsg_search_preview(page: number, keyword: string) {
    return this.http.get<any>(this.SERVER_URL + `res/sri-gur-pratap-suraj-granth/search-preview?page=${page}&keyword=${keyword}`);
   }

   // res/sri-gur-pratap-suraj-granth/volumes
   sgpsg_volumes(){
    return this.http.get<any>(this.SERVER_URL + `res/sri-gur-pratap-suraj-granth/volumes`);
   }

   // sri-gur-pratap-suraj-granth/chapters
   sgpsg_chapters(volume_id: number){
    return this.http.get<any>(this.SERVER_URL + `res/sri-gur-pratap-suraj-granth/chapters?volume_id=${volume_id}`);
   }

   // res/sri-gur-pratap-suraj-granth/page
   sgpsg_page(page_no: number, volume_id: number) {
    return this.http.get<any>(this.SERVER_URL + `res/sri-gur-pratap-suraj-granth/page?volume_id=${volume_id}&page_no=${page_no}`);
   }

   // res/faridkot-wala-teeka/search-preview
   fwt_search_preview(page: number, keyword: string) {
    return this.http.get<any>(this.SERVER_URL + `res/faridkot-wala-teeka/search-preview?page=${page}&keyword=${keyword}`);
   }

   // res/fwt_page
   fwt_page(page_no: number, volume_id: number) {
    return this.http.get<any>(this.SERVER_URL + `res/fwt_page?volume_id=${volume_id}&page_no=${page_no}`);
   }

   // res/faridkot-wala-teeka/chapters
   fwt_chapters(volume_id: number) {
    return this.http.get<any>(this.SERVER_URL + `res/faridkot-wala-teeka/chapters?volume_id=${volume_id}`);
   }

   // res/sri-guru-granth-darpan/page
   sggd_search_preview(page: number, keyword: string) {
    return this.http.get<any>(this.SERVER_URL + `res/sri-guru-granth-darpan/search-preview?page=${page}&keyword=${keyword}`);
   }

   // res/sri-guru-granth-darpan/page
   sggd_page(page_no: number, volume_id: number) {
    return this.http.get<any>(this.SERVER_URL + `res/sri-guru-granth-darpan-page?volume_id=${volume_id}&page_no=${page_no}`);
   }

   // res/maansarovar/word
   maansarovar_word(keyword: string, alpha: string) {
    return this.http.get<any>(this.SERVER_URL + `res/maansarovar/word?keyword=${keyword}&alpha=${alpha}`);
   }

   // res/maansarovar/quotations/{word}
   maansarovar_quotations(word: string) {
    return this.http.get<any>(this.SERVER_URL + `res/maansarovar/quotations/${word}`);
   }

   // guestbook
   guestbook(pageno: number) : Observable<any>{
    return this.http.get<any>(this.SERVER_URL + `guestbook?page=${pageno}`);
   }

   // save_guestbook
   save_guestbook(name: string, email: string, message: string) {
     let formData = new FormData();
     formData.append('name', name);
     formData.append('email', email);
     formData.append('message', message);
     return this.http.post<any>(this.SERVER_URL + 'guestbook/post', formData);
   }

   // send feedback
   send_feedback(name: string, emailid: string, message: string, subject: string, send_copy: string) {
    let formData = new FormData();
    formData.append('name', name);
    formData.append('emailid', emailid);
    formData.append('message', message);
    formData.append('subject', subject);
    formData.append('send_copy', send_copy);
    return this.http.post<any>(this.SERVER_URL + 'feedback/send', formData);
   }

   // Save preferences info
   save_preference(param: any) {
     let formData = new FormData();
     Object.keys(param).map((key)=>{
       formData.append(key, param[key]);
     });
     return this.http.post<any>(this.SERVER_URL + 'preference/save', formData);
   }

   get_search_result(param: any) {
    let formData = new FormData();
    Object.keys(param).map((key)=>{
      formData.append(key, param[key]);
    });
    return this.http.post<any>(this.SERVER_URL + 'scriptures/search-results-preview', formData);
   }

   // compilation/page
   compilation(page: number, volume_id: number, lang: string) {
    return this.http.get<any>(this.SERVER_URL + `compilation/page?page=${page}&volume_id=${volume_id}&lang=${lang}`);
   }

   // music/page
   music(page: number, volume_id: number, lang: string) {
    return this.http.get<any>(this.SERVER_URL + `music/page?page=${page}&volume_id=${volume_id}&lang=${lang}`);
   }

   // shared/ggs/page
   get_shared_ggs(label1: string, page: number, line: number) {
     return this.http.get<any>(this.SERVER_URL + `shared/ggs/page?label1=${label1}&page=${page}&line=${line}`);
   }
   // shared/ak/page
   get_shared_ak_page(page: number, line: number) {
    return this.http.get<any>(this.SERVER_URL + `shared/ak/page?page=${page}&line=${line}`);
   }

   // shared/ak/shabad
   get_shared_ak_shabad(shabad: number, line: number) {
    return this.http.get<any>(this.SERVER_URL + `shared/ak/shabad?shabad=${shabad}&line=${line}`);
   }

   // shared/bgv/page
   get_shared_bgv(vaar: number, pauri: number, line: number) {
    return this.http.get<any>(this.SERVER_URL + `shared/bgv/page?vaar=${vaar}&line=${line}&pauri=${pauri}`);
   }

   // shared/dg/page
   get_shared_dg(label1: string, page: number, line: number) {
    return this.http.get<any>(this.SERVER_URL + `shared/dg/page?label1=${label1}&line=${line}&page=${page}`);
   }

   // shared/ks/page
   get_shared_ks(page: number, line: number) {
    return this.http.get<any>(this.SERVER_URL + `shared/ks/page?line=${line}&page=${page}`);
   }

   // shared/bnl/page
   get_shared_bnl_page(type: string, title1: string, page: number, line: number) {
    return this.http.get<any>(this.SERVER_URL + `shared/bnl/page?line=${line}&page=${page}&type=${type}&title1=${title1}`);
   }

   // shared/bnl/shabad
   get_shared_bnl_shabad(type: string, title1: string, page: number, line: number) {
    return this.http.get<any>(this.SERVER_URL + `shared/bnl/shabad?line=${line}&page=${page}&type=${type}`);
   }

   // download audio
   downloadAudio(path: string) {
     return this.http.get<any>(this.SERVER_URL + `audio/download?path=${path}`);
   }

   // sundar/gutka
   sundar_gutka() {
    return this.http.get<any>(this.SERVER_URL + `sundar/gutka`);
   }

   // getMeta
   getMeta(path) {
     return this.http.get<any>(this.SERVER_URL + `meta?url=${path}`);
   }
}
