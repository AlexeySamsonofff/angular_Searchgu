
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ScripturesearchComponent } from './pages/scripturesearch/scripturesearch.component';


import { GurugranthsahibintroductionComponent } from './pages/ggs/gurugranthsahibintroduction/gurugranthsahibintroduction.component';
import { GurugranthsahibangbyangComponent } from './pages/ggs/gurugranthsahibangbyang/gurugranthsahibangbyang.component';
import { GurugranthsahibindexchapterComponent } from './pages/ggs/gurugranthsahibindexchapter/gurugranthsahibindexchapter.component';
import { GurugranthsahibindexauthorComponent } from './pages/ggs/gurugranthsahibindexauthor/gurugranthsahibindexauthor.component';
import { GurugranthsahibsearchComponent } from './pages/ggs/gurugranthsahibsearch/gurugranthsahibsearch.component';


import { IntroductionComponent } from './pages/ak/introduction/introduction.component';
import { PagebypageComponent } from './pages/ak/pagebypage/pagebypage.component';
import { ChapterComponent } from './pages/ak/chapter/chapter.component';
import { EnglishComponent } from './pages/ak/english/english.component';
import { PunjabiComponent } from './pages/ak/punjabi/punjabi.component';
import { HindiComponent } from './pages/ak/hindi/hindi.component';
import { SearchComponent } from './pages/ak/search/search.component';
import { BGVIntroComponent } from './pages/bgv/bgvintro/bgvintro.component';
import { BGVpbpComponent } from './pages/bgv/bgvpbp/bgvpbp.component';
import { BGVviComponent } from './pages/bgv/bgvvi/bgvvi.component';
import { BGVsearchComponent } from './pages/bgv/bgvsearch/bgvsearch.component';

 import { DGSIntroComponent } from './pages/dgs/dgsintro/dgsintro.component';
 import { DGSEnglishComponent } from './pages/dgs/dgsenglish/dgsenglish.component';
 import { DGSpbpComponent } from './pages/dgs/dgspbp/dgspbp.component';
 import { DGSpunjabiComponent } from './pages/dgs/dgspunjabi/dgspunjabi.component';
 import { DGSsearchComponent } from './pages/dgs/dgssearch/dgssearch.component';

 import { KskbkComponent} from './pages/ks/kskbk/kskbk.component';
 import { KssksComponent} from './pages/ks/kssks/kssks.component';
 import { BnlganjnamaComponent} from './pages/bnl/bnlganjnama/bnlganjnama.component';
 import { BnlghazalComponent} from './pages/bnl/bnlghazal/bnlghazal.component';
 import { BnljbpersianComponent} from './pages/bnl/bnljbpersian/bnljbpersian.component';
 import { BnljotbikasComponent} from './pages/bnl/bnljotbikas/bnljotbikas.component';
 import { BnlquatrainsComponent} from './pages/bnl/bnlquatrains/bnlquatrains.component';
 import { BnlrahitnamaComponent} from './pages/bnl/bnlrahitnama/bnlrahitnama.component';
 import { BnlsearchComponent} from './pages/bnl/bnlsearch/bnlsearch.component';
 import { BnltankahnamaComponent} from './pages/bnl/bnltankahnama/bnltankahnama.component';
 import { BnlzindginamaComponent} from './pages/bnl/bnlzindginama/bnlzindginama.component';

 import { SgaartiComponent} from './pages/sg/sgaarti/sgaarti.component';
 import { SgakalUstatiComponent} from './pages/sg/sgakal-ustati/sgakal-ustati.component';
 import { SganandsahibComponent} from './pages/sg/sganandsahib/sganandsahib.component';
 import { SganandsahibbhogComponent} from './pages/sg/sganandsahibbhog/sganandsahibbhog.component';
 import { SgasakivaarComponent} from './pages/sg/sgasakivaar/sgasakivaar.component';
 import { SgbaarahMaahaComponent} from './pages/sg/sgbaarah-maaha/sgbaarah-maaha.component';
 import { SgbaavanAkhreeComponent} from './pages/sg/sgbaavan-akhree/sgbaavan-akhree.component';
 import { SgbachitarNatakComponent} from './pages/sg/sgbachitar-natak/sgbachitar-natak.component';
 import { SgchaubolayM5Component} from './pages/sg/sgchaubolay-m5/sgchaubolay-m5.component';
 import { SgchaupaisahibComponent} from './pages/sg/sgchaupaisahib/sgchaupaisahib.component';
 import { SgdhakaneeOankaarComponent} from './pages/sg/sgdhakanee-oankaar/sgdhakanee-oankaar.component';
 import { SgdukhBhanjaniSahibComponent} from './pages/sg/sgdukh-bhanjani-sahib/sgdukh-bhanjani-sahib.component';
 import { SggathaaComponent} from './pages/sg/sggathaa/sggathaa.component';
 import { SgjaapsahibComponent} from './pages/sg/sgjaapsahib/sgjaapsahib.component';
 import { SgjapjisahibComponent} from './pages/sg/sgjapjisahib/sgjapjisahib.component';
 import { SgkirtansohilaComponent} from './pages/sg/sgkirtansohila/sgkirtansohila.component';
 import { SglaavananandkarajComponent} from './pages/sg/sglaavananandkaraj/sglaavananandkaraj.component';
 import { SgphunhayM5Component} from './pages/sg/sgphunhay-m5/sgphunhay-m5.component';
 import { SgramkaliSadhComponent} from './pages/sg/sgramkali-sadh/sgramkali-sadh.component';
 import { SgrehraassahibComponent} from './pages/sg/sgrehraassahib/sgrehraassahib.component';
 import { SgsalokFaridJiComponent} from './pages/sg/sgsalok-farid-ji/sgsalok-farid-ji.component';
 import { SgsalokKabeerJiComponent} from './pages/sg/sgsalok-kabeer-ji/sgsalok-kabeer-ji.component';
 import { SgsalokM9Component} from './pages/sg/sgsalok-m9/sgsalok-m9.component';
 import { SgsalokSehskriteeComponent} from './pages/sg/sgsalok-sehskritee/sgsalok-sehskritee.component';
 import { SgsavaiyeM1Component} from './pages/sg/sgsavaiye-m1/sgsavaiye-m1.component';
 import { SgsavaiyeM2Component} from './pages/sg/sgsavaiye-m2/sgsavaiye-m2.component';
 import { SgsavaiyeM3Component} from './pages/sg/sgsavaiye-m3/sgsavaiye-m3.component';
 import { SgsavaiyeM4Component} from './pages/sg/sgsavaiye-m4/sgsavaiye-m4.component';
 import {SgsavaiyeM5Component} from './pages/sg/sgsavaiye-m5/sgsavaiye-m5.component';
 import { SgshabadHazareComponent} from './pages/sg/sgshabad-hazare/sgshabad-hazare.component';
 import { SgsidhGoshtComponent} from './pages/sg/sgsidh-gosht/sgsidh-gosht.component';
//  import { SgsukhmanaSahibComponent} from './pages/sg/sgsukhmana-sahib/sgsukhmana-sahib.component';
 import { SgsukhmaniSahibComponent} from './pages/sg/sgsukhmani-sahib/sgsukhmani-sahib.component';
 import { SgtvaiprasadhsavaiyeComponent} from './pages/sg/sgtvaiprasadhsavaiye/sgtvaiprasadhsavaiye.component';

 import { ResbhagatsComponent} from './pages/res/resbhagats/resbhagats.component';
 import { ResbhattsComponent} from './pages/res/resbhatts/resbhatts.component';
 import { ResfaridkotWalaTeekaComponent} from './pages/res/resfaridkot-wala-teeka/resfaridkot-wala-teeka.component';
 import { ResguruGranthKoshComponent} from './pages/res/resguru-granth-kosh/resguru-granth-kosh.component';
 import { ResgurusComponent} from './pages/res/resgurus/resgurus.component';
 import { ReshukumComponent} from './pages/res/reshukum/reshukum.component';
 import { ReshukumnamaComponent} from './pages/res/reshukumnama/reshukumnama.component';
 import { ReshukumnamacyberComponent} from './pages/res/reshukumnamacyber/reshukumnamacyber.component';
 import { ResmaansarovarComponent} from './pages/res/resmaansarovar/resmaansarovar.component';
 import { ResmahanKoshComponent} from './pages/res/resmahan-kosh/resmahan-kosh.component';
 import { ResraagsComponent} from './pages/res/resraags/resraags.component';
 import { RessgdvComponent} from './pages/res/ressgdv/ressgdv.component';
 import { RessgdvisgComponent} from './pages/res/ressgdvisg/ressgdvisg.component';
 import { RessriGurPratapSurajGranthComponent} from './pages/res/ressri-gur-pratap-suraj-granth/ressri-gur-pratap-suraj-granth.component';
 import { RessriGuruGranthDarpanComponent} from './pages/res/ressri-guru-granth-darpan/ressri-guru-granth-darpan.component';
 import { RessriNanakPrakashComponent} from './pages/res/ressri-nanak-prakash/ressri-nanak-prakash.component';
 import { ResunicodeComponent} from './pages/res/resunicode/resunicode.component';
import { NotfoundComponent } from './pages/errors/notfound/notfound.component';
import { GgsshabadLineComponent } from './pages/ggs/shabad-line/shabad-line.component';
import { AkShabadLineComponent } from './pages/ak/ak-shabad-line/ak-shabad-line.component';
import { BgvVaarPauriLineComponent } from './pages/bgv/bgv-vaar-pauri-line/bgv-vaar-pauri-line.component';
import { DgsShabadLineComponent } from './pages/dgs/dgs-shabad-line/dgs-shabad-line.component';
import { KsKabitLineComponent } from './pages/ks/ks-kabit-line/ks-kabit-line.component';
import { BnlShabadLineComponent } from './pages/bnl/bnl-shabad-line/bnl-shabad-line.component';
import { GgsAngLineComponent } from './pages/ggs/ggs-ang-line/ggs-ang-line.component';
import { GgsAuthorNameComponent } from './pages/ggs/ggs-author-name/ggs-author-name.component';
import { AkChapterNameComponent } from './pages/ak/ak-chapter-name/ak-chapter-name.component';
import { AkShabadNameComponent } from './pages/ak/ak-shabad-name/ak-shabad-name.component';
import { ResHukumnamaAngComponent } from './pages/res/res-hukumnama-ang/res-hukumnama-ang.component';
import { ResMahanKoshViewComponent } from './pages/res/res-mahan-kosh-view/res-mahan-kosh-view.component';
import { ResGuruGranthKoshViewComponent } from './pages/res/res-guru-granth-kosh-view/res-guru-granth-kosh-view.component';
import { ResSriNanakPrakashChaptersComponent } from './pages/res/res-sri-nanak-prakash-chapters/res-sri-nanak-prakash-chapters.component';
import { ResSriNanakPrakashPageComponent } from './pages/res/res-sri-nanak-prakash-page/res-sri-nanak-prakash-page.component';
import { ResSriGurPratapSurajGranthVolumesComponent } from './pages/res/res-sri-gur-pratap-suraj-granth-volumes/res-sri-gur-pratap-suraj-granth-volumes.component';
import { ResSriGurPratapSurajGranthPageComponent } from './pages/res/res-sri-gur-pratap-suraj-granth-page/res-sri-gur-pratap-suraj-granth-page.component';
import { ResSggsgSearchPreviewComponent } from './pages/res/res-sggsg-search-preview/res-sggsg-search-preview.component';
import { ResSggsgChaptersComponent } from './pages/res/res-sggsg-chapters/res-sggsg-chapters.component';
import { ResSggsgPageComponent } from './pages/res/res-sggsg-page/res-sggsg-page.component';
import { ResFaridkotWalaTeekaVolumesComponent } from './pages/res/res-faridkot-wala-teeka-volumes/res-faridkot-wala-teeka-volumes.component';
import { ResFwtSearchPreviewComponent } from './pages/res/res-fwt-search-preview/res-fwt-search-preview.component';
import { ResFwtChaptersComponent } from './pages/res/res-fwt-chapters/res-fwt-chapters.component';
import { ResFwtPageComponent } from './pages/res/res-fwt-page/res-fwt-page.component';
import { ResSriGuruGranthDarpanPageComponent } from './pages/res/res-sri-guru-granth-darpan-page/res-sri-guru-granth-darpan-page.component';
import { ResmaansarovarwordComponent } from './pages/res/resmaansarovarword/resmaansarovarword.component';
import { ResmaansarovarQuotationsComponent } from './pages/res/resmaansarovar-quotations/resmaansarovar-quotations.component';
import { ResbhagatsBabafaridComponent } from './pages/res/resbhagats-babafarid/resbhagats-babafarid.component';
import { ResbhagatsBhagatkabirComponent } from './pages/res/resbhagats-bhagatkabir/resbhagats-bhagatkabir.component';
import { ResbhagatsBhagatravidasComponent } from './pages/res/resbhagats-bhagatravidas/resbhagats-bhagatravidas.component';
import { ResbhagatsBhagatbeniComponent } from './pages/res/resbhagats-bhagatbeni/resbhagats-bhagatbeni.component';
import { ResbhagatsBhagatnamdevComponent } from './pages/res/resbhagats-bhagatnamdev/resbhagats-bhagatnamdev.component';
import { ResbhagatsBhagatsadhnaComponent } from './pages/res/resbhagats-bhagatsadhna/resbhagats-bhagatsadhna.component';
import { ResbhagatsBhagatbhikanComponent } from './pages/res/resbhagats-bhagatbhikan/resbhagats-bhagatbhikan.component';
import { ResbhagatsBhagatparmanandComponent } from './pages/res/resbhagats-bhagatparmanand/resbhagats-bhagatparmanand.component';
import { ResbhagatsBhagatsainComponent } from './pages/res/resbhagats-bhagatsain/resbhagats-bhagatsain.component';
import { ResbhagatsBhagatdhannaComponent } from './pages/res/resbhagats-bhagatdhanna/resbhagats-bhagatdhanna.component';
import { ResbhagatsBhagatpipaComponent } from './pages/res/resbhagats-bhagatpipa/resbhagats-bhagatpipa.component';
import { ResbhagatsBhagatsurdasComponent } from './pages/res/resbhagats-bhagatsurdas/resbhagats-bhagatsurdas.component';
import { ResbhagatsBhagatjaidevComponent } from './pages/res/resbhagats-bhagatjaidev/resbhagats-bhagatjaidev.component';
import { ResbhagatsBhagatramanandComponent } from './pages/res/resbhagats-bhagatramanand/resbhagats-bhagatramanand.component';
import { ResbhagatsBhagattrilochanComponent } from './pages/res/resbhagats-bhagattrilochan/resbhagats-bhagattrilochan.component';
import { ResgurusGurunanakComponent } from './pages/res/resgurus-gurunanak/resgurus-gurunanak.component';
import { ResgurusGuruangadComponent } from './pages/res/resgurus-guruangad/resgurus-guruangad.component';
import { ResgurusGuruamarComponent } from './pages/res/resgurus-guruamar/resgurus-guruamar.component';
import { ResgurusGururamdasComponent } from './pages/res/resgurus-gururamdas/resgurus-gururamdas.component';
import { ResgurusGuruarjunComponent } from './pages/res/resgurus-guruarjun/resgurus-guruarjun.component';
import { ResgurusGuruhargobindiComponent } from './pages/res/resgurus-guruhargobindi/resgurus-guruhargobindi.component';
import { ResgurusGuruharraiComponent } from './pages/res/resgurus-guruharrai/resgurus-guruharrai.component';
import { ResgurusGuruharkrishanComponent } from './pages/res/resgurus-guruharkrishan/resgurus-guruharkrishan.component';
import { ResgurusGuruteghbhadurComponent } from './pages/res/resgurus-guruteghbhadur/resgurus-guruteghbhadur.component';
import { ResgurusGurugobindComponent } from './pages/res/resgurus-gurugobind/resgurus-gurugobind.component';
import { ResgurusGurugranthComponent } from './pages/res/resgurus-gurugranth/resgurus-gurugranth.component';
import { ResgurusGurunanak2Component } from './pages/res/resgurus-gurunanak2/resgurus-gurunanak2.component';
import { ResgurusGurunanak3Component } from './pages/res/resgurus-gurunanak3/resgurus-gurunanak3.component';
import { ResgurusGurunanak4Component } from './pages/res/resgurus-gurunanak4/resgurus-gurunanak4.component';
import { ResgurusGurunanak5Component } from './pages/res/resgurus-gurunanak5/resgurus-gurunanak5.component';
import { ResgurusGurunanak6Component } from './pages/res/resgurus-gurunanak6/resgurus-gurunanak6.component';
import { ResgurusGurunanak7Component } from './pages/res/resgurus-gurunanak7/resgurus-gurunanak7.component';
import { ResgurusGurunanak8Component } from './pages/res/resgurus-gurunanak8/resgurus-gurunanak8.component';
import { ResgurusGurunanak9Component } from './pages/res/resgurus-gurunanak9/resgurus-gurunanak9.component';
import { ResgurusGurunanak10Component } from './pages/res/resgurus-gurunanak10/resgurus-gurunanak10.component';
import { ResgurusGuruangad2Component } from './pages/res/resgurus-guruangad2/resgurus-guruangad2.component';
import { ResgurusGuruangad3Component } from './pages/res/resgurus-guruangad3/resgurus-guruangad3.component';
import { ResgurusGuruamar2Component } from './pages/res/resgurus-guruamar2/resgurus-guruamar2.component';
import { ResgurusGuruarjun2Component } from './pages/res/resgurus-guruarjun2/resgurus-guruarjun2.component';
import { ResgurusGuruarjun3Component } from './pages/res/resgurus-guruarjun3/resgurus-guruarjun3.component';
import { ResgurusGuruarjun4Component } from './pages/res/resgurus-guruarjun4/resgurus-guruarjun4.component';
import { ResgurusGuruhargobindi2Component } from './pages/res/resgurus-guruhargobindi2/resgurus-guruhargobindi2.component';
import { ResgurusGuruhargobindi3Component } from './pages/res/resgurus-guruhargobindi3/resgurus-guruhargobindi3.component';
import { ResgurusGuruhargobindi4Component } from './pages/res/resgurus-guruhargobindi4/resgurus-guruhargobindi4.component';
import { ResgurusGuruteghbhadur1Component } from './pages/res/resgurus-guruteghbhadur1/resgurus-guruteghbhadur1.component';
import { ResgurusGurugobind2Component } from './pages/res/resgurus-gurugobind2/resgurus-gurugobind2.component';
import { ResgurusGurugobind3Component } from './pages/res/resgurus-gurugobind3/resgurus-gurugobind3.component';
import { ResgurusGurugobind4Component } from './pages/res/resgurus-gurugobind4/resgurus-gurugobind4.component';
import { ResgurusGurugobind5Component } from './pages/res/resgurus-gurugobind5/resgurus-gurugobind5.component';
import { ResgurusGurugobind6Component } from './pages/res/resgurus-gurugobind6/resgurus-gurugobind6.component';
import { ResgurusGurugobind7Component } from './pages/res/resgurus-gurugobind7/resgurus-gurugobind7.component';
import { ResgurusGurugobind8Component } from './pages/res/resgurus-gurugobind8/resgurus-gurugobind8.component';
import { ResgurusGurugobind9Component } from './pages/res/resgurus-gurugobind9/resgurus-gurugobind9.component';
import { ResbhattsSattaComponent } from './pages/res/resbhatts-satta/resbhatts-satta.component';
import { ResbhattsMardanaComponent } from './pages/res/resbhatts-mardana/resbhatts-mardana.component';
import { ResbhattsSunderbabaComponent } from './pages/res/resbhatts-sunderbaba/resbhatts-sunderbaba.component';
import { ResbhattKalsharComponent } from './pages/res/resbhatt-kalshar/resbhatt-kalshar.component';
import { ResbhattSalhComponent } from './pages/res/resbhatt-salh/resbhatt-salh.component';
import { ResbhattMathuraComponent } from './pages/res/resbhatt-mathura/resbhatt-mathura.component';
import { ResbhattJalapComponent } from './pages/res/resbhatt-jalap/resbhatt-jalap.component';
import { ResbhattBhalhComponent } from './pages/res/resbhatt-bhalh/resbhatt-bhalh.component';
import { ResbhattBalhComponent } from './pages/res/resbhatt-balh/resbhatt-balh.component';
import { ResbhattKiratComponent } from './pages/res/resbhatt-kirat/resbhatt-kirat.component';
import { ResbhattNalhComponent } from './pages/res/resbhatt-nalh/resbhatt-nalh.component';
import { ResbhattHaribansComponent } from './pages/res/resbhatt-haribans/resbhatt-haribans.component';
import { ResbhattBhikaComponent } from './pages/res/resbhatt-bhika/resbhatt-bhika.component';
import { ResbhattGyandComponent } from './pages/res/resbhatt-gyand/resbhatt-gyand.component';
import { ResraagSiriComponent } from './pages/res/resraag-siri/resraag-siri.component';
import { ResraagDevgandhariComponent } from './pages/res/resraag-devgandhari/resraag-devgandhari.component';
import { ResraagJaitsriComponent } from './pages/res/resraag-jaitsri/resraag-jaitsri.component';
import { ResraagBilavalComponent } from './pages/res/resraag-bilaval/resraag-bilaval.component';
import { ResraagMaruComponent } from './pages/res/resraag-maru/resraag-maru.component';
import { ResraagSarangComponent } from './pages/res/resraag-sarang/resraag-sarang.component';
import { ResraagMajhComponent } from './pages/res/resraag-majh/resraag-majh.component';
import { ResraagBihagaraComponent } from './pages/res/resraag-bihagara/resraag-bihagara.component';
import { ResraagTodiComponent } from './pages/res/resraag-todi/resraag-todi.component';
import { ResraagGondComponent } from './pages/res/resraag-gond/resraag-gond.component';
import { ResraagTukhariComponent } from './pages/res/resraag-tukhari/resraag-tukhari.component';
import { ResraagMalarComponent } from './pages/res/resraag-malar/resraag-malar.component';
import { ResraagGauriComponent } from './pages/res/resraag-gauri/resraag-gauri.component';
import { ResraagVadahansComponent } from './pages/res/resraag-vadahans/resraag-vadahans.component';
import { ResraagBairariComponent } from './pages/res/resraag-bairari/resraag-bairari.component';
import { ResraagRamkaliComponent } from './pages/res/resraag-ramkali/resraag-ramkali.component';
import { ResraagKedaraComponent } from './pages/res/resraag-kedara/resraag-kedara.component';
import { ResraagKanaraComponent } from './pages/res/resraag-kanara/resraag-kanara.component';
import { ResraagAsaComponent } from './pages/res/resraag-asa/resraag-asa.component';
import { ResraagSorathiComponent } from './pages/res/resraag-sorathi/resraag-sorathi.component';
import { ResraagTilangComponent } from './pages/res/resraag-tilang/resraag-tilang.component';
import { ResraagNutnarainComponent } from './pages/res/resraag-nutnarain/resraag-nutnarain.component';
import { ResraagKalyanComponent } from './pages/res/resraag-kalyan/resraag-kalyan.component';
import { ResraagBhairavComponent } from './pages/res/resraag-bhairav/resraag-bhairav.component';
import { ResraagGujriComponent } from './pages/res/resraag-gujri/resraag-gujri.component';
import { ResraagDhanasriComponent } from './pages/res/resraag-dhanasri/resraag-dhanasri.component';
import { ResraagSuhiComponent } from './pages/res/resraag-suhi/resraag-suhi.component';
import { ResraagMaligauraComponent } from './pages/res/resraag-maligaura/resraag-maligaura.component';
import { ResraagBasantComponent } from './pages/res/resraag-basant/resraag-basant.component';
import { ResraagPrabhatiComponent } from './pages/res/resraag-prabhati/resraag-prabhati.component';
import { ResraagJaijaiwantiComponent } from './pages/res/resraag-jaijaiwanti/resraag-jaijaiwanti.component';
import { ResraagThaatKalyanComponent } from './pages/res/resraag-thaat-kalyan/resraag-thaat-kalyan.component';
import { ResraagThaatBilavalComponent } from './pages/res/resraag-thaat-bilaval/resraag-thaat-bilaval.component';
import { ResraagThaatKhamajComponent } from './pages/res/resraag-thaat-khamaj/resraag-thaat-khamaj.component';
import { ResraagThaatBhairavComponent } from './pages/res/resraag-thaat-bhairav/resraag-thaat-bhairav.component';
import { ResraagThaatBhairaviComponent } from './pages/res/resraag-thaat-bhairavi/resraag-thaat-bhairavi.component';
import { ResraagThaatAsavariComponent } from './pages/res/resraag-thaat-asavari/resraag-thaat-asavari.component';
import { ResraagThaatTodiComponent } from './pages/res/resraag-thaat-todi/resraag-thaat-todi.component';
import { ResraagThaatPoorviComponent } from './pages/res/resraag-thaat-poorvi/resraag-thaat-poorvi.component';
import { ResraagThaatMarwaComponent } from './pages/res/resraag-thaat-marwa/resraag-thaat-marwa.component';
import { ResraagThaatKafiComponent } from './pages/res/resraag-thaat-kafi/resraag-thaat-kafi.component';
import { RessriGuruGranthDarpanSearchPreviewComponent } from './pages/res/ressri-guru-granth-darpan-search-preview/ressri-guru-granth-darpan-search-preview.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { GuestbookComponent } from './pages/guestbook/guestbook.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { SitemapComponent } from './pages/sitemap/sitemap.component';
import { GuestbookPostComponent } from './pages/guestbook-post/guestbook-post.component';
import { RessriNanakPrakashSearchPreviewComponent } from './pages/res/ressri-nanak-prakash-search-preview/ressri-nanak-prakash-search-preview.component';
import { AkPagePreviewComponent } from './pages/ak/ak-page-preview/ak-page-preview.component';
import { BgvPrintPreviewComponent } from './pages/bgv/bgv-print-preview/bgv-print-preview.component';
import { KsPrintPreviewComponent } from './pages/ks/ks-print-preview/ks-print-preview.component';
import { BnlPrintPreviewComponent } from './pages/bnl/bnl-print-preview/bnl-print-preview.component';
import { GgsPrintPreviewComponent } from './pages/ggs/ggs-print-preview/ggs-print-preview.component';
import { DgsPrintPreviewComponent } from './pages/dgs/dgs-print-preview/dgs-print-preview.component';
import { GgsShabadPrintPreviewComponent } from './pages/ggs/ggs-shabad-print-preview/ggs-shabad-print-preview.component';
import { AkShabadPrintPreviewComponent } from './pages/ak/ak-shabad-print-preview/ak-shabad-print-preview.component';
import { BnlShabadPrintPreviewComponent } from './pages/bnl/bnl-shabad-print-preview/bnl-shabad-print-preview.component';
import { DgsShabadPrintPreviewComponent } from './pages/dgs/dgs-shabad-print-preview/dgs-shabad-print-preview.component';
import { ResSriNanakPrintComponent } from './pages/res/res-sri-nanak-print/res-sri-nanak-print.component';
import { ResSggsgPrintComponent } from './pages/res/res-sggsg-print/res-sggsg-print.component';
import { ResFwtPrintComponent } from './pages/res/res-fwt-print/res-fwt-print.component';
import { ResSriGuruGranthDarpanPrintComponent } from './pages/res/res-sri-guru-granth-darpan-print/res-sri-guru-granth-darpan-print.component';
import { ResCompilationComponent } from './pages/res/res-compilation/res-compilation.component';
import { ResMusicComponent } from './pages/res/res-music/res-music.component';
import { GgsSearchResultComponent } from './pages/ggs/ggs-search-result/ggs-search-result.component';
import { ResMusicPrintComponent } from './pages/res/res-music-print/res-music-print.component';
import { ResCompilationPrintComponent } from './pages/res/res-compilation-print/res-compilation-print.component';
import { BnlPageComponent } from './pages/bnl/bnl-page/bnl-page.component';
import { GgsVerseComponent } from './pages/ggs/ggs-verse/ggs-verse.component';
import { GgsVersePrintComponent } from './pages/ggs/ggs-verse-print/ggs-verse-print.component';
import { DgsVerseComponent } from './pages/dgs/dgs-verse/dgs-verse.component';
import { DgsVersePrintComponent } from './pages/dgs/dgs-verse-print/dgs-verse-print.component';
import { BnlVerseComponent } from './pages/bnl/bnl-verse/bnl-verse.component';
import { BnlVersePrintComponent } from './pages/bnl/bnl-verse-print/bnl-verse-print.component';
import { GgsWorldAngComponent } from './pages/ggs/ggs-world-ang/ggs-world-ang.component';
import { GgsWorldAngPrintComponent } from './pages/ggs/ggs-world-ang-print/ggs-world-ang-print.component';
import { GgsShareComponent } from './pages/ggs/ggs-share/ggs-share.component';
import { GgsShareShabadComponent } from './pages/ggs/ggs-share-shabad/ggs-share-shabad.component';
import { AkShareShabadComponent } from './pages/ak/ak-share-shabad/ak-share-shabad.component';
import { AkSharePageComponent } from './pages/ak/ak-share-page/ak-share-page.component';
import { BgvSharePageComponent } from './pages/bgv/bgv-share-page/bgv-share-page.component';
import { DgShareShabadComponent } from './pages/dg/dg-share-shabad/dg-share-shabad.component';
import { DgSharePageComponent } from './pages/dg/dg-share-page/dg-share-page.component';
import { DgShareVerseComponent } from './pages/dg/dg-share-verse/dg-share-verse.component';
import { BnlShareShabadComponent } from './pages/bnl/bnl-share-shabad/bnl-share-shabad.component';
import { BnlSharePageComponent } from './pages/bnl/bnl-share-page/bnl-share-page.component';
import { BnlShareVerseComponent } from './pages/bnl/bnl-share-verse/bnl-share-verse.component';
import { GgsShareVerseComponent } from './pages/ggs/ggs-share-verse/ggs-share-verse.component';
import { KsSharePageComponent } from './pages/ks/ks-share-page/ks-share-page.component';
import { SggsKoshComponent } from './pages/sggs/sggs-kosh/sggs-kosh.component';
import { SggsKoshViewComponent } from './pages/sggs/sggs-kosh-view/sggs-kosh-view.component';
import { SgsukhmanaSahibComponent } from './pages/sg/sgsukhmana-sahib/sgsukhmana-sahib.component';
import { SggsKoshIndexComponent } from './pages/sggs/sggs-kosh-index/sggs-kosh-index.component';
import { SundarGutkaComponent } from './pages/sg/sundar-gutka/sundar-gutka.component';
import { ShabadHazarePaatishahiComponent } from './pages/sg/shabad-hazare-paatishahi/shabad-hazare-paatishahi.component';
import { TvaiPrasaadhSavaiyeDheenanKeeComponent } from './pages/sg/tvai-prasaadh-savaiye-dheenan-kee/tvai-prasaadh-savaiye-dheenan-kee.component';
import { ResraagTimeComponent } from './pages/res/resraag-time/resraag-time.component';
import { RestaalIndexComponent } from './pages/res/restaal-index/restaal-index.component';
import { RestaalTaliComponent } from './pages/res/restaal-tali/restaal-tali.component';
import { RestaalKhaliComponent } from './pages/res/restaal-khali/restaal-khali.component';
import { RestaalVibhagComponent } from './pages/res/restaal-vibhag/restaal-vibhag.component';
import { RestaalMatraComponent } from './pages/res/restaal-matra/restaal-matra.component';
import { RestaalBolComponent } from './pages/res/restaal-bol/restaal-bol.component';
import { RestaalThekaComponent } from './pages/res/restaal-theka/restaal-theka.component';
import { RestaalLayComponent } from './pages/res/restaal-lay/restaal-lay.component';
import { RestaalSamComponent } from './pages/res/restaal-sam/restaal-sam.component';
import { RestaalAvartanComponent } from './pages/res/restaal-avartan/restaal-avartan.component';
import { RestaalTaalDadraComponent } from './pages/res/restaal-taal-dadra/restaal-taal-dadra.component';
import { RestaalTaalRupakComponent } from './pages/res/restaal-taal-rupak/restaal-taal-rupak.component';
import { RestaalTaalTeenComponent } from './pages/res/restaal-taal-teen/restaal-taal-teen.component';
import { ResraagsGlossaryComponent } from './pages/res/resraags-glossary/resraags-glossary.component';
import { ResSaajComponent } from './pages/res/res-saaj/res-saaj.component';
import { ResSaajStringedComponent } from './pages/res/res-saaj-stringed/res-saaj-stringed.component';
import { ResSaajWindComponent } from './pages/res/res-saaj-wind/res-saaj-wind.component';
import { ResSaajPercussionComponent } from './pages/res/res-saaj-percussion/res-saaj-percussion.component';
import { ResSaajTablaComponent } from './pages/res/res-saaj-tabla/res-saaj-tabla.component';
import { ResHukumRssComponent } from './pages/res/res-hukum-rss/res-hukum-rss.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: HomeComponent},
  { path: 'scriptures/search', component: ScripturesearchComponent},

  // guru-granth-sahib routes
  { path: 'guru-granth-sahib/introduction', component: GurugranthsahibintroductionComponent},
  { path: 'guru-granth-sahib/ang-by-ang', component: GurugranthsahibangbyangComponent},
  { path: 'guru-granth-sahib/index/chapter', component: GurugranthsahibindexchapterComponent},
  { path: 'guru-granth-sahib/index/author', component: GurugranthsahibindexauthorComponent},
  { path: 'guru-granth-sahib/search', component: GurugranthsahibsearchComponent},
  { path: 'guru-granth-sahib/shabad/:shabad_id/line/:lineno', component: GgsshabadLineComponent},
  { path: 'shared/guru-granth-sahib/shabad/:shabad_id/line/:lineno', component: GgsShareShabadComponent},
  { path: 'guru-granth-sahib/shabad/:shabad_id/line/:lineno/print-view', component: GgsShabadPrintPreviewComponent},
  { path: 'guru-granth-sahib/shabad/:shabad_id', component: GgsshabadLineComponent},
  { path: 'guru-granth-sahib/ang/:page_no/line/:line_no', component: GgsAngLineComponent},
  { path: 'shared/guru-granth-sahib/ang/:page_no/line/:line_no', component: GgsShareComponent},
  { path: 'guru-granth-sahib/ang/:page_no', component: GgsAngLineComponent},
  { path: 'guru-granth-sahib/ang/:page_no/print-view', component: GgsPrintPreviewComponent},

  { path: 'guru-granth-sahib/verse/:page_no/line/:line_no', component: GgsVerseComponent},
  { path: 'shared/guru-granth-sahib/verse/:page_no/line/:line_no', component: GgsShareVerseComponent},
  { path: 'guru-granth-sahib/verse/:page_no', component: GgsVerseComponent},
  { path: 'guru-granth-sahib/verse/:page_no/print-view', component: GgsVersePrintComponent},
  { path: 'guru-granth-sahib/author/:author_name', component: GgsAuthorNameComponent},
  { path: 'guru-granth-sahib/search-results', component: GgsSearchResultComponent},
  { path: 'guru-granth-sahib/world/ang', component: GgsWorldAngComponent},
  { path: 'guru-granth-sahib/world/ang/:page_no', component: GgsWorldAngComponent},
  { path: 'guru-granth-sahib/world/ang/:page_no/line/line_no', component: GgsWorldAngComponent},
  { path: 'guru-granth-sahib/world/ang/:page_no/print-view', component: GgsWorldAngPrintComponent},

  // amrit-keertan routes
  { path: 'amrit-keertan/introduction', component: IntroductionComponent},
  { path: 'amrit-keertan/page-by-page', component: PagebypageComponent},
  { path: 'amrit-keertan/page/:page_no', component: PagebypageComponent},
  { path: 'amrit-keertan/index/chapter', component: ChapterComponent},
  { path: 'amrit-keertan/index/english', component: EnglishComponent},
  { path: 'amrit-keertan/index/punjabi', component: PunjabiComponent},
  { path: 'amrit-keertan/index/hindi', component: HindiComponent},
  { path: 'amrit-keertan/search', component: SearchComponent},
  { path: 'amrit-keertan/shabad/:shabad_id/line/:lineno', component: AkShabadLineComponent},
  { path: 'shared/amrit-keertan/shabad/:shabad_id/line/:lineno', component: AkShareShabadComponent},
  { path: 'amrit-keertan/shabad/:shabad_id/line/:lineno/print-view', component: AkShabadPrintPreviewComponent},
  { path: 'amrit-keertan/shabad/:shabad_id', component: AkShabadLineComponent},
  { path: 'amrit-keertan/page/:page_no/line/:line_no', component: PagebypageComponent},
  { path: 'shared/amrit-keertan/page/:page_no/line/:line_no', component: AkSharePageComponent},
  { path: 'amrit-keertan/page/:page_no', component: PagebypageComponent},
  { path: 'amrit-keertan/page/:page_no/print-view', component: AkPagePreviewComponent},
  { path: 'amrit-keertan/chapter/:chapter_no/:chapter_name', component: AkChapterNameComponent},
  { path: 'amrit-keertan/shabad/:shabad_id/:_shabad_name', component: AkShabadNameComponent},
  { path: 'amrit-keertan/shabad/:shabad_id/:shabad_name/line/:line_no', component: AkShabadNameComponent},

  // bhai-gurdas-vaaran routes
  { path: 'bhai-gurdas-vaaran/introduction', component: BGVIntroComponent},
  { path: 'bhai-gurdas-vaaran/pauri-by-pauri', component: BGVpbpComponent},
  { path: 'bhai-gurdas-vaaran/index/vaar', component: BGVviComponent},
  { path: 'bhai-gurdas-vaaran/index/vaar/:vaar_no', component: BGVviComponent},
  { path: 'bhai-gurdas-vaaran/vaar-index/:vaar_no', component: BGVviComponent},
  { path: 'bhai-gurdas-vaaran/search', component: BGVsearchComponent},
  { path: 'bhai-gurdas-vaaran/vaar/:vaar_no/pauri/:pauri_no/line/:line_no', component: BgvVaarPauriLineComponent},
  { path: 'shared/bhai-gurdas-vaaran/vaar/:vaar_no/pauri/:pauri_no/line/:line_no', component: BgvSharePageComponent},
  { path: 'bhai-gurdas-vaaran/vaar/:vaar_no/pauri/:pauri_no', component: BgvVaarPauriLineComponent},
  { path: 'bhai-gurdas-vaaran/vaar/:vaar_no/pauri/:pauri_no/print-view', component: BgvPrintPreviewComponent},

  // dasam-granth sahib routes
  { path: 'dasam-granth/introduction', component: DGSIntroComponent},
  { path: 'dasam-granth/index/chapter/en', component: DGSEnglishComponent},
  { path: 'dasam-granth/index/chapter/pb', component: DGSpunjabiComponent},
  { path: 'dasam-granth/page-by-page', component: DGSpbpComponent},
  { path: 'dasam-granth/search', component: DGSsearchComponent},
  { path: 'dasam-granth/shabad/:shabad_id/line/:lineno', component: DgsShabadLineComponent},
  { path: 'shared/dasam-granth/shabad/:shabad_id/line/:lineno', component: DgShareShabadComponent},
  { path: 'dasam-granth/shabad/:shabad_id/line/:lineno/print-view', component: DgsShabadPrintPreviewComponent},
  { path: 'dasam-granth/shabad/:shabad_id', component: DgsShabadLineComponent},
  { path: 'dasam-granth/page/:page_no/line/:line_no', component: DGSpbpComponent},
  { path: 'shared/dasam-granth/page/:page_no/line/:line_no', component: DgSharePageComponent},
  { path: 'dasam-granth/page/:page_no', component: DGSpbpComponent},
  { path: 'dasam-granth/page/:page_no/print-view', component: DgsPrintPreviewComponent},

  { path: 'dasam-granth/verse/:page_no/line/:line_no', component: DgsVerseComponent},
  { path: 'shared/dasam-granth/verse/:page_no/line/:line_no', component: DgShareVerseComponent},
  { path: 'dasam-granth/verse/:page_no', component: DgsVerseComponent},
  { path: 'dasam-granth/verse/:page_no/print-view', component: DgsVersePrintComponent},

  // kabit-savaiye routes
  { path: 'kabit-savaiye/kabit-by-kabit', component: KskbkComponent},
  { path: 'kabit-savaiye/search', component: KssksComponent},
  { path: 'kabit-savaiye/kabit/:page_no/line/:line_no', component: KskbkComponent},
  { path: 'kabit-savaiye/kabit/:page_no', component: KskbkComponent},
  { path: 'shared/kabit-savaiye/kabit/:page_no/line/:line_no', component: KsSharePageComponent},
  // bhai-nand-lal routes
  { path: 'bhai-nand-lal/ghazal', component: BnlghazalComponent},
  { path: 'bhai-nand-lal/quatrains', component: BnlquatrainsComponent},
  { path: 'bhai-nand-lal/zindginama', component: BnlzindginamaComponent},

  { path: 'bhai-nand-lal/ganjnama', component: BnlganjnamaComponent},
  { path: 'bhai-nand-lal/jot-bikas', component: BnljotbikasComponent},
  { path: 'bhai-nand-lal/jot-bikas-persian', component: BnljbpersianComponent},
  { path: 'bhai-nand-lal/rahitnama', component: BnlrahitnamaComponent},
  { path: 'bhai-nand-lal/tankahnama', component: BnltankahnamaComponent},
  { path: 'bhai-nand-lal/search', component: BnlsearchComponent},

  { path: 'bhai-nand-lal/:type/shabad/:shabad_id/line/:lineno', component: BnlShabadLineComponent},
  { path: 'shared/bhai-nand-lal/:type/shabad/:shabad_id/line/:lineno', component: BnlShareShabadComponent},
  { path: 'bhai-nand-lal/:type/shabad/:shabad_id/line/:lineno/print-view', component: BnlShabadPrintPreviewComponent},
  { path: 'bhai-nand-lal/:type/shabad/:shabad_id', component: BnlShabadLineComponent},
  { path: 'bhai-nand-lal/:type/page/:page_no/print-view', component: BnlPrintPreviewComponent},

  { path: 'bhai-nand-lal/:type/page', component: BnlPageComponent},
  { path: 'bhai-nand-lal/:type/page/:page_no', component: BnlPageComponent},
  { path: 'bhai-nand-lal/:type/page/:page_no/line/:lineno', component: BnlPageComponent},
  { path: 'shared/bhai-nand-lal/:type/page/:page_no/line/:lineno', component: BnlSharePageComponent},

  { path: 'bhai-nand-lal/:type/verse/:page_no', component: BnlVerseComponent},
  { path: 'bhai-nand-lal/:type/verse/:page_no/line/:lineno', component: BnlVerseComponent},
  { path: 'shared/bhai-nand-lal/:type/verse/:page_no/line/:lineno', component: BnlShareVerseComponent},
  { path: 'bhai-nand-lal/:type/verse/:page_no/print-view', component: BnlVersePrintComponent},

 // Sundar Gutka routes
  { path: 'baanis/japji-sahib', component: SgjapjisahibComponent},
  { path: 'baanis/jaap-sahib', component: SgjaapsahibComponent},
  { path: 'baanis/tvai-prasadh-savaiye', component: SgtvaiprasadhsavaiyeComponent},
  { path: 'baanis/chaupai-sahib', component: SgchaupaisahibComponent},
  { path: 'baanis/anand-sahib', component: SganandsahibComponent},
  { path: 'baanis/rehraas-sahib', component: SgrehraassahibComponent},
  { path: 'baanis/kirtan-sohila', component: SgkirtansohilaComponent},
  { path: 'baanis/anand-sahib-bhog', component: SganandsahibbhogComponent},
  { path: 'baanis/aarti', component: SgaartiComponent},
  { path: 'baanis/laavan-anand-karaj', component: SglaavananandkarajComponent},
  { path: 'baanis/asa-ki-vaar', component: SgasakivaarComponent},
  { path: 'baanis/sukhmani-sahib', component: SgsukhmaniSahibComponent},
  { path: 'baanis/sidh-gosht', component: SgsidhGoshtComponent},
  { path: 'baanis/ramkali-sadh', component: SgramkaliSadhComponent},
  { path: 'baanis/dhakanee-oankaar', component: SgdhakaneeOankaarComponent},
  { path: 'baanis/baavan-akhree', component: SgbaavanAkhreeComponent},
  { path: 'baanis/shabad-hazare', component: SgshabadHazareComponent},
  { path: 'baanis/baarah-maaha', component: SgbaarahMaahaComponent},
  { path: 'baanis/sukhmana-sahib', component: SgsukhmanaSahibComponent},
  { path: 'baanis/dukh-bhanjani-sahib', component: SgdukhBhanjaniSahibComponent},
  { path: 'baanis/salok-sehskritee', component: SgsalokSehskriteeComponent},
  { path: 'baanis/gathaa', component: SggathaaComponent},
  { path: 'baanis/phunhay-m5', component: SgphunhayM5Component},
  { path: 'baanis/chaubolay-m5', component: SgchaubolayM5Component},
  { path: 'baanis/salok-kabeer-ji', component: SgsalokKabeerJiComponent},
  { path: 'baanis/salok-farid-ji', component: SgsalokFaridJiComponent},
  { path: 'baanis/savaiye-m1', component: SgsavaiyeM1Component},
  { path: 'baanis/savaiye-m2', component: SgsavaiyeM2Component},
  { path: 'baanis/savaiye-m3', component: SgsavaiyeM3Component},
  { path: 'baanis/savaiye-m4', component: SgsavaiyeM4Component},
  { path: 'baanis/savaiye-m5', component: SgsavaiyeM5Component},
  { path: 'baanis/salok-m9', component: SgsalokM9Component},
  { path: 'baanis/akal-ustati', component: SgakalUstatiComponent},
  { path: 'baanis/bachitar-natak', component: SgbachitarNatakComponent},
  { path: 'baanis/shabad-hazare-paatishahi-10', component: ShabadHazarePaatishahiComponent},
  { path: 'baanis/tvai-prasaadh-savaiye-dheenan-kee', component: TvaiPrasaadhSavaiyeDheenanKeeComponent},
  { path: 'sundar-gutka', component: SundarGutkaComponent},

  // Resources routes
  { path: 'hukumnama', component: ReshukumnamaComponent},
  { path: 'hukumnama/ang/:ang', component: ResHukumnamaAngComponent},
  { path: 'hukum', component: ReshukumComponent},
  { path: 'hukum/index', redirectTo: 'hukum'},
  // { path: 'hukum/rss', component: ResHukumRssComponent},
  { path: 'hukumnama/cyber', component: ReshukumnamacyberComponent},
  { path: 'sgdv/isg', component: RessgdvisgComponent},
  { path: 'sgdv', component: RessgdvComponent},
  { path: 'mahan-kosh', component: ResmahanKoshComponent},
  { path: 'mahan-kosh/view', component: ResMahanKoshViewComponent},
  { path: 'guru-granth-kosh', component: ResguruGranthKoshComponent},
  { path: 'guru-granth-kosh/view', component: ResGuruGranthKoshViewComponent},

  { path: 'sri-nanak-prakash', component: RessriNanakPrakashComponent},
  { path: 'sri-nanak-prakash/search-preview', component: RessriNanakPrakashSearchPreviewComponent},
  { path: 'sri-nanak-prakash/page', component: ResSriNanakPrakashPageComponent},
  { path: 'sri-nanak-prakash/page/:pageno', component: ResSriNanakPrakashPageComponent},
  { path: 'sri-nanak-prakash/page/:pageno/print-view', component: ResSriNanakPrintComponent},
  { path: 'sri-nanak-prakash/page/:pageno/volume/:volumeno', component: ResSriNanakPrakashPageComponent},
  { path: 'sri-nanak-prakash/page/:pageno/volume/:volumeno/print-view', component: ResSriNanakPrintComponent},
  { path: 'sri-nanak-prakash/page/:pageno/:lang', component: ResSriNanakPrakashPageComponent},
  { path: 'sri-nanak-prakash/page/:pageno/:lang/print-view', component: ResSriNanakPrintComponent},
  { path: 'sri-nanak-prakash/page/:pageno/volume/:volumeno/:lang', component: ResSriNanakPrakashPageComponent},
  { path: 'sri-nanak-prakash/page/:pageno/volume/:volumeno/:lang/print-view', component: ResSriNanakPrintComponent},
  { path: 'sri-nanak-prakash/chapters/:chapterId', component: ResSriNanakPrakashChaptersComponent},

  { path: 'sri-gur-pratap-suraj-granth', component: RessriGurPratapSurajGranthComponent},
  { path: 'sri-gur-pratap-suraj-granth/volumes', component: ResSriGurPratapSurajGranthVolumesComponent},
  { path: 'sri-gur-pratap-suraj-granth/search-preview', component: ResSggsgSearchPreviewComponent},
  { path: 'sri-gur-pratap-suraj-granth/chapters/:volume_id/:volume_name', component: ResSggsgChaptersComponent},
  { path: 'sri-gur-pratap-suraj-granth/chapters/:volume_id', component: ResSggsgChaptersComponent},
  { path: 'sri-gur-pratap-suraj-granth/page', component: ResSggsgPageComponent},
  { path: 'sri-gur-pratap-suraj-granth/page/:pageno', component: ResSggsgPageComponent},
  { path: 'sri-gur-pratap-suraj-granth/page/:pageno/print-view', component: ResSggsgPrintComponent},
  { path: 'sri-gur-pratap-suraj-granth/page/:pageno/volume/:volumeno', component: ResSggsgPageComponent},
  { path: 'sri-gur-pratap-suraj-granth/page/:pageno/volume/:volumeno/print-view', component: ResSggsgPrintComponent},
  { path: 'sri-gur-pratap-suraj-granth/page/:pageno/volume/:volumeno/:lang', component: ResSggsgPageComponent},
  { path: 'sri-gur-pratap-suraj-granth/page/:pageno/volume/:volumeno/:lang/print-view', component: ResSggsgPrintComponent},
  { path: 'sri-gur-pratap-suraj-granth/page/:pageno/:lang', component: ResSggsgPageComponent},
  { path: 'sri-gur-pratap-suraj-granth/page/:pageno/:lang/print-view', component: ResSggsgPrintComponent},

  { path: 'faridkot-wala-teeka', component: ResfaridkotWalaTeekaComponent},
  { path: 'faridkot-wala-teeka/search-preview', component: ResFwtSearchPreviewComponent},
  { path: 'faridkot-wala-teeka/chapters', component: ResFwtChaptersComponent},
  { path: 'faridkot-wala-teeka/chapters/:chapterno', component: ResFwtChaptersComponent},
  { path: 'faridkot-wala-teeka/page', component: ResFwtPageComponent},
  { path: 'faridkot-wala-teeka/page/:pageno', component: ResFwtPageComponent},
  { path: 'faridkot-wala-teeka/page/:pageno/print-view', component: ResFwtPrintComponent},
  { path: 'faridkot-wala-teeka/page/:pageno/volume/:volumeno', component: ResFwtPageComponent},
  { path: 'faridkot-wala-teeka/page/:pageno/volume/:volumeno/:lang', component: ResFwtPageComponent},
  { path: 'faridkot-wala-teeka/page/:pageno/volume/:volumeno/print-view', component: ResFwtPrintComponent},
  { path: 'faridkot-wala-teeka/page/:pageno/volume/:volumeno/:lang/print-view', component: ResFwtPrintComponent},
  { path: 'faridkot-wala-teeka/page/:pageno/:lang', component: ResFwtPageComponent},
  { path: 'faridkot-wala-teeka/page/:pageno/:lang/print-view', component: ResFwtPrintComponent},

  { path: 'sri-guru-granth-darpan', component: RessriGuruGranthDarpanComponent},
  { path: 'sri-guru-granth-darpan/search-preview', component: RessriGuruGranthDarpanSearchPreviewComponent},
  { path: 'sri-guru-granth-darpan/page', component: ResSriGuruGranthDarpanPageComponent},
  { path: 'sri-guru-granth-darpan/page/:pageno', component: ResSriGuruGranthDarpanPageComponent},
  { path: 'sri-guru-granth-darpan/page/:pageno/print-view', component: ResSriGuruGranthDarpanPrintComponent},
  { path: 'sri-guru-granth-darpan/page/:pageno/:lang', component: ResSriGuruGranthDarpanPageComponent},
  { path: 'sri-guru-granth-darpan/page/:pageno/:lang/print-view', component: ResSriGuruGranthDarpanPrintComponent},

  { path: 'maansarovar', component: ResmaansarovarComponent},
  { path: 'maansarovar/words', component: ResmaansarovarwordComponent},
  { path: 'maansarovar/quotations/:word', component: ResmaansarovarQuotationsComponent},

  { path: 'gurus', component: ResgurusComponent},
  { path: 'gurus/gurunanak', component: ResgurusGurunanakComponent},
  { path: 'gurus/gurunanak2', component: ResgurusGurunanak2Component},
  { path: 'gurus/gurunanak3', component: ResgurusGurunanak3Component},
  { path: 'gurus/gurunanak4', component: ResgurusGurunanak4Component},
  { path: 'gurus/gurunanak5', component: ResgurusGurunanak5Component},
  { path: 'gurus/gurunanak6', component: ResgurusGurunanak6Component},
  { path: 'gurus/gurunanak7', component: ResgurusGurunanak7Component},
  { path: 'gurus/gurunanak8', component: ResgurusGurunanak8Component},
  { path: 'gurus/gurunanak9', component: ResgurusGurunanak9Component},
  { path: 'gurus/gurunanak10', component: ResgurusGurunanak10Component},

  { path: 'gurus/guruangad', component: ResgurusGuruangadComponent},
  { path: 'gurus/guruangad2', component: ResgurusGuruangad2Component},
  { path: 'gurus/guruangad3', component: ResgurusGuruangad3Component},

  { path: 'gurus/guruamar', component: ResgurusGuruamarComponent},
  { path: 'gurus/guruamar2', component: ResgurusGuruamar2Component},
  { path: 'gurus/gururamdas', component: ResgurusGururamdasComponent},

  { path: 'gurus/guruarjun', component: ResgurusGuruarjunComponent},
  { path: 'gurus/guruarjun2', component: ResgurusGuruarjun2Component},
  { path: 'gurus/guruarjun3', component: ResgurusGuruarjun3Component},
  { path: 'gurus/guruarjun4', component: ResgurusGuruarjun4Component},

  { path: 'gurus/guruhargobindi', component: ResgurusGuruhargobindiComponent},
  { path: 'gurus/guruhargobindi2', component: ResgurusGuruhargobindi2Component},
  { path: 'gurus/guruhargobindi3', component: ResgurusGuruhargobindi3Component},
  { path: 'gurus/guruhargobindi4', component: ResgurusGuruhargobindi4Component},

  { path: 'gurus/guruharrai', component: ResgurusGuruharraiComponent},
  { path: 'gurus/guruharkrishan', component: ResgurusGuruharkrishanComponent},
  { path: 'gurus/guruteghbhadur', component: ResgurusGuruteghbhadurComponent},
  { path: 'gurus/guruteghbhadur1', component: ResgurusGuruteghbhadur1Component},

  { path: 'gurus/gurugobind', component: ResgurusGurugobindComponent},
  { path: 'gurus/gurugobind2', component: ResgurusGurugobind2Component},
  { path: 'gurus/gurugobind3', component: ResgurusGurugobind3Component},
  { path: 'gurus/gurugobind4', component: ResgurusGurugobind4Component},
  { path: 'gurus/gurugobind5', component: ResgurusGurugobind5Component},
  { path: 'gurus/gurugobind6', component: ResgurusGurugobind6Component},
  { path: 'gurus/gurugobind7', component: ResgurusGurugobind7Component},
  { path: 'gurus/gurugobind8', component: ResgurusGurugobind8Component},
  { path: 'gurus/gurugobind9', component: ResgurusGurugobind9Component},
  // { path: 'gurus/gurugranth', component: ResgurusGurugranthComponent},

  { path: 'bhagats', component: ResbhagatsComponent},
  { path: 'bhagats/baba-farid', component: ResbhagatsBabafaridComponent},
  { path: 'bhagats/bhagat-kabir', component: ResbhagatsBhagatkabirComponent},
  { path: 'bhagats/bhagat-ravidas', component: ResbhagatsBhagatravidasComponent},
  { path: 'bhagats/bhagat-beni', component: ResbhagatsBhagatbeniComponent},
  { path: 'bhagats/bhagat-namdev', component: ResbhagatsBhagatnamdevComponent},
  { path: 'bhagats/bhagat-sadhna', component: ResbhagatsBhagatsadhnaComponent},
  { path: 'bhagats/bhagat-bhikan', component: ResbhagatsBhagatbhikanComponent},
  { path: 'bhagats/bhagat-parmanand', component: ResbhagatsBhagatparmanandComponent},
  { path: 'bhagats/bhagat-sain', component: ResbhagatsBhagatsainComponent},
  { path: 'bhagats/bhagat-dhanna', component: ResbhagatsBhagatdhannaComponent},
  { path: 'bhagats/bhagat-pipa', component: ResbhagatsBhagatpipaComponent},
  { path: 'bhagats/bhagat-surdas', component: ResbhagatsBhagatsurdasComponent},
  { path: 'bhagats/bhagat-jaidev', component: ResbhagatsBhagatjaidevComponent},
  { path: 'bhagats/bhagat-ramanand', component: ResbhagatsBhagatramanandComponent},
  { path: 'bhagats/bhagat-trilochan', component: ResbhagatsBhagattrilochanComponent},

  { path: 'bhatts', component: ResbhattsComponent},
  { path: 'bhatts/satta', component: ResbhattsSattaComponent},
  { path: 'bhatts/mardana', component: ResbhattsMardanaComponent},
  { path: 'bhatts/sunderbaba', component: ResbhattsSunderbabaComponent},
  { path: 'bhatts/bhatt-kalshar', component: ResbhattKalsharComponent},
  { path: 'bhatts/bhatt-salh', component: ResbhattSalhComponent},
  { path: 'bhatts/bhatt-mathura', component: ResbhattMathuraComponent},
  { path: 'bhatts/bhatt-jalap', component: ResbhattJalapComponent},
  { path: 'bhatts/bhatt-bhalh', component: ResbhattBhalhComponent},
  { path: 'bhatts/bhatt-balh', component: ResbhattBalhComponent},
  { path: 'bhatts/bhatt-kirat', component: ResbhattKiratComponent},
  { path: 'bhatts/bhatt-nalh', component: ResbhattNalhComponent},
  { path: 'bhatts/bhatt-haribans', component: ResbhattHaribansComponent},
  { path: 'bhatts/bhatt-bhika', component: ResbhattBhikaComponent},
  { path: 'bhatts/bhatt-gyand', component: ResbhattGyandComponent},

  { path: 'raags', component: ResraagsComponent},
  { path: 'raags/raag-siri', component: ResraagSiriComponent},
  { path: 'raags/raag-devgandhari', component: ResraagDevgandhariComponent},
  { path: 'raags/raag-jaitsri', component: ResraagJaitsriComponent},
  { path: 'raags/raag-bilaval', component: ResraagBilavalComponent},
  { path: 'raags/raag-maru', component: ResraagMaruComponent},
  { path: 'raags/raag-sarang', component: ResraagSarangComponent},
  { path: 'raags/raag-majh', component: ResraagMajhComponent},
  { path: 'raags/raag-bihagara', component: ResraagBihagaraComponent},
  { path: 'raags/raag-todi', component: ResraagTodiComponent},
  { path: 'raags/raag-gond', component: ResraagGondComponent},
  { path: 'raags/raag-tukhari', component: ResraagTukhariComponent},
  { path: 'raags/raag-malar', component: ResraagMalarComponent},
  { path: 'raags/raag-gauri', component: ResraagGauriComponent},
  { path: 'raags/raag-vadahans', component: ResraagVadahansComponent},
  { path: 'raags/raag-bairari', component: ResraagBairariComponent},
  { path: 'raags/raag-ramkali', component: ResraagRamkaliComponent},
  { path: 'raags/raag-kedara', component: ResraagKedaraComponent},
  { path: 'raags/raag-kanara', component: ResraagKanaraComponent},
  { path: 'raags/raag-asa', component: ResraagAsaComponent},
  { path: 'raags/raag-sorathi', component: ResraagSorathiComponent},
  { path: 'raags/raag-tilang', component: ResraagTilangComponent},
  { path: 'raags/raag-nutnarain', component: ResraagNutnarainComponent},
  { path: 'raags/raag-bhairav', component: ResraagBhairavComponent},
  { path: 'raags/raag-kalyan', component: ResraagKalyanComponent},
  { path: 'raags/raag-gujri', component: ResraagGujriComponent},
  { path: 'raags/raag-dhanasri', component: ResraagDhanasriComponent},
  { path: 'raags/raag-suhi', component: ResraagSuhiComponent},
  { path: 'raags/raag-maligaura', component: ResraagMaligauraComponent},
  { path: 'raags/raag-basant', component: ResraagBasantComponent},
  { path: 'raags/raag-prabhati', component: ResraagPrabhatiComponent},
  { path: 'raags/raag-jaijaiwanti', component: ResraagJaijaiwantiComponent},

  { path: 'raags/thaat-kalyan', component: ResraagThaatKalyanComponent},
  { path: 'raags/thaat-bilaval', component: ResraagThaatBilavalComponent},
  { path: 'raags/thaat-khamaj', component: ResraagThaatKhamajComponent},
  { path: 'raags/thaat-bhairav', component: ResraagThaatBhairavComponent},
  { path: 'raags/thaat-bhairavi', component: ResraagThaatBhairaviComponent},
  { path: 'raags/thaat-asavari', component: ResraagThaatAsavariComponent},
  { path: 'raags/thaat-todi', component: ResraagThaatTodiComponent},
  { path: 'raags/thaat-poorvi', component: ResraagThaatPoorviComponent},
  { path: 'raags/thaat-marwa', component: ResraagThaatMarwaComponent},
  { path: 'raags/thaat-kafi', component: ResraagThaatKafiComponent},

  { path: 'raags/raags_time', component: ResraagTimeComponent},
  { path: 'taal/index', redirectTo: 'taal'},
  { path: 'taal', component: RestaalIndexComponent},
  { path: 'taal/tali', component: RestaalTaliComponent},
  { path: 'taal/khali', component: RestaalKhaliComponent},
  { path: 'taal/vibhag', component: RestaalVibhagComponent},
  { path: 'taal/matra', component: RestaalMatraComponent},
  { path: 'taal/bol', component: RestaalBolComponent},
  { path: 'taal/theka', component: RestaalThekaComponent},
  { path: 'taal/lay', component: RestaalLayComponent},
  { path: 'taal/sam', component: RestaalSamComponent},
  { path: 'taal/avartan', component: RestaalAvartanComponent},
  { path: 'taal/taal_dadra', component: RestaalTaalDadraComponent},
  { path: 'taal/taal_rupak', component: RestaalTaalRupakComponent},
  { path: 'taal/taal_teen', component: RestaalTaalTeenComponent},
  { path: 'raags/glossary', component: ResraagsGlossaryComponent},
  { path: 'saaj', component: ResSaajComponent},
  { path: 'saaj/stringed', component: ResSaajStringedComponent},
  { path: 'saaj/wind', component: ResSaajWindComponent},
  { path: 'saaj/percussion', component: ResSaajPercussionComponent},
  { path: 'saaj/tabla', component: ResSaajTablaComponent},


  { path: 'unicode', component: ResunicodeComponent},

  { path: 'preferences', component: PreferencesComponent},
  { path: 'guestbook', component: GuestbookComponent},
  { path: 'guestbook/post', component: GuestbookPostComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'sitemap', component: SitemapComponent},

  { path: 'compilation/page', component: ResCompilationComponent},
  { path: 'compilation/page/:pageno', component: ResCompilationComponent},
  { path: 'compilation/page/:pageno/print_view', component: ResCompilationPrintComponent},

  { path: 'music/page', component: ResMusicComponent},
  { path: 'music/page/:pageno', component: ResMusicComponent},
  { path: 'music/page/:pageno/print_view', component: ResMusicPrintComponent},

  { path: 'sggs-kosh/do-search/:word', component: SggsKoshComponent},
  { path: 'sggs-kosh/view', component: SggsKoshViewComponent},
  { path: 'sggs-kosh', component: SggsKoshIndexComponent},

  { path: '**', component: NotfoundComponent }
];


const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
