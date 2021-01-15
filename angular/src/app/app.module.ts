import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ClickOutsideModule } from 'ng-click-outside';
import { DataTableModule } from 'ng-angular8-datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { RecaptchaModule } from 'ng-recaptcha';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module  } from 'ng-recaptcha';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BackgroundComponent } from './components/background/background.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { BorderComponent } from './components/border/border.component';
import { MenuComponent } from './components/menu/menu.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
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
import { DGSpunjabiComponent } from './pages/dgs/dgspunjabi/dgspunjabi.component';
import { DGSpbpComponent } from './pages/dgs/dgspbp/dgspbp.component';
import { DGSsearchComponent } from './pages/dgs/dgssearch/dgssearch.component';

import { KskbkComponent } from './pages/ks/kskbk/kskbk.component';
import { KssksComponent } from './pages/ks/kssks/kssks.component';

import { BnlghazalComponent } from './pages/bnl/bnlghazal/bnlghazal.component';
import { BnlquatrainsComponent } from './pages/bnl/bnlquatrains/bnlquatrains.component';
import { BnlzindginamaComponent } from './pages/bnl/bnlzindginama/bnlzindginama.component';
import { BnlganjnamaComponent } from './pages/bnl/bnlganjnama/bnlganjnama.component';
import { BnljotbikasComponent } from './pages/bnl/bnljotbikas/bnljotbikas.component';
import { BnljbpersianComponent } from './pages/bnl/bnljbpersian/bnljbpersian.component';
import { BnlrahitnamaComponent } from './pages/bnl/bnlrahitnama/bnlrahitnama.component';
import { BnltankahnamaComponent } from './pages/bnl/bnltankahnama/bnltankahnama.component';
import { BnlsearchComponent } from './pages/bnl/bnlsearch/bnlsearch.component';

import { SgjapjisahibComponent } from './pages/sg/sgjapjisahib/sgjapjisahib.component';
import { SgjaapsahibComponent } from './pages/sg/sgjaapsahib/sgjaapsahib.component';
import { SgtvaiprasadhsavaiyeComponent } from './pages/sg/sgtvaiprasadhsavaiye/sgtvaiprasadhsavaiye.component';
import { SgchaupaisahibComponent } from './pages/sg/sgchaupaisahib/sgchaupaisahib.component';
import { SganandsahibComponent } from './pages/sg/sganandsahib/sganandsahib.component';
import { SgrehraassahibComponent } from './pages/sg/sgrehraassahib/sgrehraassahib.component';
import { SgkirtansohilaComponent } from './pages/sg/sgkirtansohila/sgkirtansohila.component';
import { SganandsahibbhogComponent } from './pages/sg/sganandsahibbhog/sganandsahibbhog.component';
import { SgaartiComponent } from './pages/sg/sgaarti/sgaarti.component';
import { SglaavananandkarajComponent } from './pages/sg/sglaavananandkaraj/sglaavananandkaraj.component';
import { SgasakivaarComponent } from './pages/sg/sgasakivaar/sgasakivaar.component';
import { SgsukhmaniSahibComponent } from './pages/sg/sgsukhmani-sahib/sgsukhmani-sahib.component';
import { SgsidhGoshtComponent } from './pages/sg/sgsidh-gosht/sgsidh-gosht.component';
import { SgramkaliSadhComponent } from './pages/sg/sgramkali-sadh/sgramkali-sadh.component';
import { SgdhakaneeOankaarComponent } from './pages/sg/sgdhakanee-oankaar/sgdhakanee-oankaar.component';
import { SgbaavanAkhreeComponent } from './pages/sg/sgbaavan-akhree/sgbaavan-akhree.component';
import { SgshabadHazareComponent } from './pages/sg/sgshabad-hazare/sgshabad-hazare.component';
import { SgbaarahMaahaComponent } from './pages/sg/sgbaarah-maaha/sgbaarah-maaha.component';
import { SgsukhmanaSahibComponent } from './pages/sg/sgsukhmana-sahib/sgsukhmana-sahib.component';
import { SgdukhBhanjaniSahibComponent } from './pages/sg/sgdukh-bhanjani-sahib/sgdukh-bhanjani-sahib.component';
import { SgsalokSehskriteeComponent } from './pages/sg/sgsalok-sehskritee/sgsalok-sehskritee.component';
import { SggathaaComponent } from './pages/sg/sggathaa/sggathaa.component';
import { SgphunhayM5Component } from './pages/sg/sgphunhay-m5/sgphunhay-m5.component';
import { SgchaubolayM5Component } from './pages/sg/sgchaubolay-m5/sgchaubolay-m5.component';
import { SgsalokKabeerJiComponent } from './pages/sg/sgsalok-kabeer-ji/sgsalok-kabeer-ji.component';
import { SgsalokFaridJiComponent } from './pages/sg/sgsalok-farid-ji/sgsalok-farid-ji.component';
import { SgsavaiyeM1Component } from './pages/sg/sgsavaiye-m1/sgsavaiye-m1.component';
import { SgsavaiyeM2Component } from './pages/sg/sgsavaiye-m2/sgsavaiye-m2.component';
import { SgsavaiyeM3Component } from './pages/sg/sgsavaiye-m3/sgsavaiye-m3.component';
import { SgsavaiyeM4Component } from './pages/sg/sgsavaiye-m4/sgsavaiye-m4.component';
import { SgsavaiyeM5Component } from './pages/sg/sgsavaiye-m5/sgsavaiye-m5.component';
import { SgsalokM9Component } from './pages/sg/sgsalok-m9/sgsalok-m9.component';
import { SgakalUstatiComponent } from './pages/sg/sgakal-ustati/sgakal-ustati.component';
import { SgbachitarNatakComponent } from './pages/sg/sgbachitar-natak/sgbachitar-natak.component';
import { ReshukumnamaComponent } from './pages/res/reshukumnama/reshukumnama.component';
import { ReshukumComponent } from './pages/res/reshukum/reshukum.component';
import { ReshukumnamacyberComponent } from './pages/res/reshukumnamacyber/reshukumnamacyber.component';
import { RessgdvisgComponent } from './pages/res/ressgdvisg/ressgdvisg.component';
import { RessgdvComponent } from './pages/res/ressgdv/ressgdv.component';
import { ResmahanKoshComponent } from './pages/res/resmahan-kosh/resmahan-kosh.component';
import { ResguruGranthKoshComponent } from './pages/res/resguru-granth-kosh/resguru-granth-kosh.component';
import { RessriNanakPrakashComponent } from './pages/res/ressri-nanak-prakash/ressri-nanak-prakash.component';
import { RessriGurPratapSurajGranthComponent } from './pages/res/ressri-gur-pratap-suraj-granth/ressri-gur-pratap-suraj-granth.component';
import { ResfaridkotWalaTeekaComponent } from './pages/res/resfaridkot-wala-teeka/resfaridkot-wala-teeka.component';
import { RessriGuruGranthDarpanComponent } from './pages/res/ressri-guru-granth-darpan/ressri-guru-granth-darpan.component';
import { ResmaansarovarComponent } from './pages/res/resmaansarovar/resmaansarovar.component';
import { ResgurusComponent } from './pages/res/resgurus/resgurus.component';
import { ResbhagatsComponent } from './pages/res/resbhagats/resbhagats.component';
import { ResbhattsComponent } from './pages/res/resbhatts/resbhatts.component';
import { ResraagsComponent } from './pages/res/resraags/resraags.component';
import { ResunicodeComponent } from './pages/res/resunicode/resunicode.component';
import { NotfoundComponent } from './pages/errors/notfound/notfound.component';
import { SearchService } from './services/search.service';
import { PunjabiKeyboardComponent } from './components/punjabi-keyboard/punjabi-keyboard.component';
import { SearchSectionComponent } from './components/search/search-section.component';
import { CommonpagebypageComponent } from './components/commonpagebypage/commonpagebypage.component';
import { CommonNosocialPagebypageComponent } from './components/common-nosocial-pagebypage/common-nosocial-pagebypage.component';
import { AdvanceSearchComponent } from './components/advance-search/advance-search.component';
import { GgsshabadLineComponent } from './pages/ggs/shabad-line/shabad-line.component';
import { CommonshabadlineComponent } from './components/commonshabadline/commonshabadline.component';
import { AkShabadLineComponent } from './pages/ak/ak-shabad-line/ak-shabad-line.component';
import { BgvVaarPauriLineComponent } from './pages/bgv/bgv-vaar-pauri-line/bgv-vaar-pauri-line.component';
import { DgsShabadLineComponent } from './pages/dgs/dgs-shabad-line/dgs-shabad-line.component';
import { KsKabitLineComponent } from './pages/ks/ks-kabit-line/ks-kabit-line.component';
import { BnlShabadLineComponent } from './pages/bnl/bnl-shabad-line/bnl-shabad-line.component';
import { GgsAngLineComponent } from './pages/ggs/ggs-ang-line/ggs-ang-line.component';
import { DgsPageLineComponent } from './pages/dgs/dgs-page-line/dgs-page-line.component';
import { SocialshareComponent } from './components/socialshare/socialshare.component';
import { GgsAuthorNameComponent } from './pages/ggs/ggs-author-name/ggs-author-name.component';
import { AkChapterNameComponent } from './pages/ak/ak-chapter-name/ak-chapter-name.component';
import { AkShabadNameComponent } from './pages/ak/ak-shabad-name/ak-shabad-name.component';
import { ResHukumnamaAngComponent } from './pages/res/res-hukumnama-ang/res-hukumnama-ang.component';
import { FormatUrlPipe } from './pipes/format-url.pipe';
import { ResMahanKoshViewComponent } from './pages/res/res-mahan-kosh-view/res-mahan-kosh-view.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ResGuruGranthKoshViewComponent } from './pages/res/res-guru-granth-kosh-view/res-guru-granth-kosh-view.component';
import { ResSriNanakPrakashChaptersComponent } from './pages/res/res-sri-nanak-prakash-chapters/res-sri-nanak-prakash-chapters.component';
import { ResSriNanakPrakashPageComponent } from './pages/res/res-sri-nanak-prakash-page/res-sri-nanak-prakash-page.component';
import { AddNewLinePipe } from './pipes/add-new-line.pipe';
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
import { ExtraOptions } from '@angular/router';
import { ResbhattKalsharComponent } from './pages/res/resbhatt-kalshar/resbhatt-kalshar.component';
import { ResbhattSalhComponent } from './pages/res/resbhatt-salh/resbhatt-salh.component';
import { ResbhattMathuraComponent } from './pages/res/resbhatt-mathura/resbhatt-mathura.component';
import { ResbhattsSattaComponent } from './pages/res/resbhatts-satta/resbhatts-satta.component';
import { ResbhattJalapComponent } from './pages/res/resbhatt-jalap/resbhatt-jalap.component';
import { ResbhattBhalhComponent } from './pages/res/resbhatt-bhalh/resbhatt-bhalh.component';
import { ResbhattBalhComponent } from './pages/res/resbhatt-balh/resbhatt-balh.component';
import { ResbhattsMardanaComponent } from './pages/res/resbhatts-mardana/resbhatts-mardana.component';
import { ResbhattKiratComponent } from './pages/res/resbhatt-kirat/resbhatt-kirat.component';
import { ResbhattNalhComponent } from './pages/res/resbhatt-nalh/resbhatt-nalh.component';
import { ResbhattHaribansComponent } from './pages/res/resbhatt-haribans/resbhatt-haribans.component';
import { ResbhattBhikaComponent } from './pages/res/resbhatt-bhika/resbhatt-bhika.component';
import { ResbhattGyandComponent } from './pages/res/resbhatt-gyand/resbhatt-gyand.component';
import { ResbhattsSunderbabaComponent } from './pages/res/resbhatts-sunderbaba/resbhatts-sunderbaba.component';
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
import { ResraagBhairavComponent } from './pages/res/resraag-bhairav/resraag-bhairav.component';
import { ResraagKalyanComponent } from './pages/res/resraag-kalyan/resraag-kalyan.component';
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
import { CommonrespageComponent } from './components/commonrespage/commonrespage.component';
import { AkPagePreviewComponent } from './pages/ak/ak-page-preview/ak-page-preview.component';
import { CommonPrintPreviewComponent } from './components/common-print-preview/common-print-preview.component';
import { GgsPrintPreviewComponent } from './pages/ggs/ggs-print-preview/ggs-print-preview.component';
import { BgvPrintPreviewComponent } from './pages/bgv/bgv-print-preview/bgv-print-preview.component';
import { KsPrintPreviewComponent } from './pages/ks/ks-print-preview/ks-print-preview.component';
import { BnlPrintPreviewComponent } from './pages/bnl/bnl-print-preview/bnl-print-preview.component';
import { DgsPrintPreviewComponent } from './pages/dgs/dgs-print-preview/dgs-print-preview.component';
import { CommonShabadPrintPreviewComponent } from './components/common-shabad-print-preview/common-shabad-print-preview.component';
import { AkShabadPrintPreviewComponent } from './pages/ak/ak-shabad-print-preview/ak-shabad-print-preview.component';
import { BgvShabadPrintPreviewComponent } from './pages/bgv/bgv-shabad-print-preview/bgv-shabad-print-preview.component';
import { BnlShabadPrintPreviewComponent } from './pages/bnl/bnl-shabad-print-preview/bnl-shabad-print-preview.component';
import { DgsShabadPrintPreviewComponent } from './pages/dgs/dgs-shabad-print-preview/dgs-shabad-print-preview.component';
import { GgsShabadPrintPreviewComponent } from './pages/ggs/ggs-shabad-print-preview/ggs-shabad-print-preview.component';
import { KsShabadPrintPreviewComponent } from './pages/ks/ks-shabad-print-preview/ks-shabad-print-preview.component';
import { CommonBookPrintViewComponent } from './components/common-book-print-view/common-book-print-view.component';
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
import { CommonVerseComponent } from './components/common-verse/common-verse.component';
import { GgsVerseComponent } from './pages/ggs/ggs-verse/ggs-verse.component';
import { DgsVerseComponent } from './pages/dgs/dgs-verse/dgs-verse.component';
import { BnlVerseComponent } from './pages/bnl/bnl-verse/bnl-verse.component';
import { BnlVersePrintComponent } from './pages/bnl/bnl-verse-print/bnl-verse-print.component';
import { DgsVersePrintComponent } from './pages/dgs/dgs-verse-print/dgs-verse-print.component';
import { GgsVersePrintComponent } from './pages/ggs/ggs-verse-print/ggs-verse-print.component';
import { ShareButtonsModule } from '@ngx-share/buttons';
import '../icons';
import { Platform } from '@angular/cdk/platform';
import { GgsWorldAngComponent } from './pages/ggs/ggs-world-ang/ggs-world-ang.component';
import { GgsWorldAngPrintComponent } from './pages/ggs/ggs-world-ang-print/ggs-world-ang-print.component';
import { CommonSharePageComponent } from './components/common-share-page/common-share-page.component';
import { GgsShareComponent } from './pages/ggs/ggs-share/ggs-share.component';
import { GgsShareShabadComponent } from './pages/ggs/ggs-share-shabad/ggs-share-shabad.component';
import { AkSharePageComponent } from './pages/ak/ak-share-page/ak-share-page.component';
import { AkShareShabadComponent } from './pages/ak/ak-share-shabad/ak-share-shabad.component';
import { GgsShareVerseComponent } from './pages/ggs/ggs-share-verse/ggs-share-verse.component';
import { AkShareVerseComponent } from './pages/ak/ak-share-verse/ak-share-verse.component';
import { BgvSharePageComponent } from './pages/bgv/bgv-share-page/bgv-share-page.component';
import { DgSharePageComponent } from './pages/dg/dg-share-page/dg-share-page.component';
import { DgShareShabadComponent } from './pages/dg/dg-share-shabad/dg-share-shabad.component';
import { DgShareVerseComponent } from './pages/dg/dg-share-verse/dg-share-verse.component';
import { BnlSharePageComponent } from './pages/bnl/bnl-share-page/bnl-share-page.component';
import { BnlShareVerseComponent } from './pages/bnl/bnl-share-verse/bnl-share-verse.component';
import { BnlShareShabadComponent } from './pages/bnl/bnl-share-shabad/bnl-share-shabad.component';
import { KsSharePageComponent } from './pages/ks/ks-share-page/ks-share-page.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { CommonVersePrintComponent } from './components/common-verse-print/common-verse-print.component';
import { SggsKoshComponent } from './pages/sggs/sggs-kosh/sggs-kosh.component';
import { SggsKoshViewComponent } from './pages/sggs/sggs-kosh-view/sggs-kosh-view.component';
import { SggsKoshIndexComponent } from './pages/sggs/sggs-kosh-index/sggs-kosh-index.component';
import { SundarGutkaComponent } from './pages/sg/sundar-gutka/sundar-gutka.component';
import { ShabadHazarePaatishahiComponent } from './pages/sg/shabad-hazare-paatishahi/shabad-hazare-paatishahi.component';
import { TvaiPrasaadhSavaiyeDheenanKeeComponent } from './pages/sg/tvai-prasaadh-savaiye-dheenan-kee/tvai-prasaadh-savaiye-dheenan-kee.component';
import { ResraagTimeComponent } from './pages/res/resraag-time/resraag-time.component';
import { RestaalIndexComponent } from './pages/res/restaal-index/restaal-index.component';
import { ResraagsGlossaryComponent } from './pages/res/resraags-glossary/resraags-glossary.component';
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
import { ResSaajComponent } from './pages/res/res-saaj/res-saaj.component';
import { ResSaajStringedComponent } from './pages/res/res-saaj-stringed/res-saaj-stringed.component';
import { ResSaajWindComponent } from './pages/res/res-saaj-wind/res-saaj-wind.component';
import { ResSaajPercussionComponent } from './pages/res/res-saaj-percussion/res-saaj-percussion.component';
import { ResSaajTablaComponent } from './pages/res/res-saaj-tabla/res-saaj-tabla.component';
import { ResHukumRssComponent } from './pages/res/res-hukum-rss/res-hukum-rss.component';

const shareProp = {
  facebook: {
    icon: ['fab', 'facebook-square']
  }
};
export function getDatepickerConfig(): BsDatepickerConfig {
  return Object.assign(new BsDatepickerConfig(), {
    containerClass: 'theme-blue',
    dateInputFormat: 'YYYY-MM-DD'
  });
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BackgroundComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    BorderComponent,
    MenuComponent,
    CopyrightComponent,
    ScripturesearchComponent,
    GurugranthsahibintroductionComponent,
    GurugranthsahibangbyangComponent,
    GurugranthsahibindexchapterComponent,
    GurugranthsahibindexauthorComponent,
    GurugranthsahibsearchComponent,
    IntroductionComponent,
    PagebypageComponent,
    ChapterComponent,
    EnglishComponent,
    PunjabiComponent,
    HindiComponent,
    SearchComponent,
    BGVIntroComponent,
    BGVpbpComponent,
    BGVviComponent,
    BGVsearchComponent,
    DGSIntroComponent,
    DGSEnglishComponent,
    DGSpunjabiComponent,
    DGSpbpComponent,
    DGSsearchComponent,
    KskbkComponent,
    KssksComponent,
    BnlghazalComponent,
    BnlquatrainsComponent,
    BnlzindginamaComponent,
    BnlganjnamaComponent,
    BnljotbikasComponent,
    BnljbpersianComponent,
    BnlrahitnamaComponent,
    BnltankahnamaComponent,
    BnlsearchComponent,
    SgjapjisahibComponent,
    SgjaapsahibComponent,
    SgtvaiprasadhsavaiyeComponent,
    SgchaupaisahibComponent,
    SganandsahibComponent,
    SgrehraassahibComponent,
    SgkirtansohilaComponent,
    SganandsahibbhogComponent,
    SgaartiComponent,
    SglaavananandkarajComponent,
    SgasakivaarComponent,
    SgsukhmaniSahibComponent,
    SgsidhGoshtComponent,
    SgramkaliSadhComponent,
    SgdhakaneeOankaarComponent,
    SgbaavanAkhreeComponent,
    SgshabadHazareComponent,
    SgbaarahMaahaComponent,
    SgsukhmanaSahibComponent,
    SgdukhBhanjaniSahibComponent,
    SgsalokSehskriteeComponent,
    SggathaaComponent,
    SgphunhayM5Component,
    SgchaubolayM5Component,
    SgsalokKabeerJiComponent,
    SgsalokFaridJiComponent,
    SgsavaiyeM1Component,
    SgsavaiyeM2Component,
    SgsavaiyeM3Component,
    SgsavaiyeM4Component,
    SgsavaiyeM5Component,
    SgsalokM9Component,
    SgakalUstatiComponent,
    SgbachitarNatakComponent,
    ReshukumnamaComponent,
    ReshukumComponent,
    ReshukumnamacyberComponent,
    RessgdvisgComponent,
    RessgdvComponent,
    ResmahanKoshComponent,
    ResguruGranthKoshComponent,
    RessriNanakPrakashComponent,
    RessriGurPratapSurajGranthComponent,
    ResfaridkotWalaTeekaComponent,
    RessriGuruGranthDarpanComponent,
    ResmaansarovarComponent,
    ResgurusComponent,
    ResbhagatsComponent,
    ResbhattsComponent,
    ResraagsComponent,
    ResunicodeComponent,
    NotfoundComponent,
    PunjabiKeyboardComponent,
    SearchSectionComponent,

    CommonpagebypageComponent,

    CommonNosocialPagebypageComponent,

    AdvanceSearchComponent,
    GgsshabadLineComponent,
    CommonshabadlineComponent,
    AkShabadLineComponent,
    BgvVaarPauriLineComponent,
    DgsShabadLineComponent,
    KsKabitLineComponent,
    BnlShabadLineComponent,
    GgsAngLineComponent,
    DgsPageLineComponent,
    SocialshareComponent,
    GgsAuthorNameComponent,
    AkChapterNameComponent,
    AkShabadNameComponent,
    ResHukumnamaAngComponent,
    FormatUrlPipe,
    ResMahanKoshViewComponent,
    ResGuruGranthKoshViewComponent,
    ResSriNanakPrakashChaptersComponent,
    ResSriNanakPrakashPageComponent,
    AddNewLinePipe,
    ResSriGurPratapSurajGranthVolumesComponent,
    ResSriGurPratapSurajGranthPageComponent,
    ResSggsgSearchPreviewComponent,
    ResSggsgChaptersComponent,
    ResSggsgPageComponent,
    ResFaridkotWalaTeekaVolumesComponent,
    ResFwtSearchPreviewComponent,
    ResFwtChaptersComponent,
    ResFwtPageComponent,
    ResSriGuruGranthDarpanPageComponent,
    ResmaansarovarwordComponent,
    ResmaansarovarQuotationsComponent,
    ResbhagatsBabafaridComponent,
    ResbhagatsBhagatkabirComponent,
    ResbhagatsBhagatravidasComponent,
    ResbhagatsBhagatbeniComponent,
    ResbhagatsBhagatnamdevComponent,
    ResbhagatsBhagatsadhnaComponent,
    ResbhagatsBhagatbhikanComponent,
    ResbhagatsBhagatparmanandComponent,
    ResbhagatsBhagatsainComponent,
    ResbhagatsBhagatdhannaComponent,
    ResbhagatsBhagatpipaComponent,
    ResbhagatsBhagatsurdasComponent,
    ResbhagatsBhagatjaidevComponent,
    ResbhagatsBhagatramanandComponent,
    ResbhagatsBhagattrilochanComponent,
    ResgurusGurunanakComponent,
    ResgurusGuruangadComponent,
    ResgurusGuruamarComponent,
    ResgurusGururamdasComponent,
    ResgurusGuruarjunComponent,
    ResgurusGuruhargobindiComponent,
    ResgurusGuruharraiComponent,
    ResgurusGuruharkrishanComponent,
    ResgurusGuruteghbhadurComponent,
    ResgurusGurugobindComponent,
    ResgurusGurugranthComponent,
    ResgurusGurunanak2Component,
    ResgurusGurunanak3Component,
    ResgurusGurunanak4Component,
    ResgurusGurunanak5Component,
    ResgurusGurunanak6Component,
    ResgurusGurunanak7Component,
    ResgurusGurunanak8Component,
    ResgurusGurunanak9Component,
    ResgurusGurunanak10Component,
    ResgurusGuruangad2Component,
    ResgurusGuruangad3Component,
    ResgurusGuruamar2Component,
    ResgurusGuruarjun2Component,
    ResgurusGuruarjun3Component,
    ResgurusGuruarjun4Component,
    ResgurusGuruhargobindi2Component,
    ResgurusGuruhargobindi3Component,
    ResgurusGuruhargobindi4Component,
    ResgurusGuruteghbhadur1Component,
    ResgurusGurugobind2Component,
    ResgurusGurugobind3Component,
    ResgurusGurugobind4Component,
    ResgurusGurugobind5Component,
    ResgurusGurugobind6Component,
    ResgurusGurugobind7Component,
    ResgurusGurugobind8Component,
    ResgurusGurugobind9Component,
    ResbhattKalsharComponent,
    ResbhattSalhComponent,
    ResbhattMathuraComponent,
    ResbhattsSattaComponent,
    ResbhattJalapComponent,
    ResbhattBhalhComponent,
    ResbhattBalhComponent,
    ResbhattsMardanaComponent,
    ResbhattKiratComponent,
    ResbhattNalhComponent,
    ResbhattHaribansComponent,
    ResbhattBhikaComponent,
    ResbhattGyandComponent,
    ResbhattsSunderbabaComponent,
    ResraagSiriComponent,
    ResraagDevgandhariComponent,
    ResraagJaitsriComponent,
    ResraagBilavalComponent,
    ResraagMaruComponent,
    ResraagSarangComponent,
    ResraagMajhComponent,
    ResraagBihagaraComponent,
    ResraagTodiComponent,
    ResraagGondComponent,
    ResraagTukhariComponent,
    ResraagMalarComponent,
    ResraagGauriComponent,
    ResraagVadahansComponent,
    ResraagBairariComponent,
    ResraagRamkaliComponent,
    ResraagKedaraComponent,
    ResraagKanaraComponent,
    ResraagAsaComponent,
    ResraagSorathiComponent,
    ResraagTilangComponent,
    ResraagNutnarainComponent,
    ResraagBhairavComponent,
    ResraagKalyanComponent,
    ResraagGujriComponent,
    ResraagDhanasriComponent,
    ResraagSuhiComponent,
    ResraagMaligauraComponent,
    ResraagBasantComponent,
    ResraagPrabhatiComponent,
    ResraagJaijaiwantiComponent,
    ResraagThaatKalyanComponent,
    ResraagThaatBilavalComponent,
    ResraagThaatKhamajComponent,
    ResraagThaatBhairavComponent,
    ResraagThaatBhairaviComponent,
    ResraagThaatAsavariComponent,
    ResraagThaatTodiComponent,
    ResraagThaatPoorviComponent,
    ResraagThaatMarwaComponent,
    ResraagThaatKafiComponent,
    RessriGuruGranthDarpanSearchPreviewComponent,
    PreferencesComponent,
    GuestbookComponent,
    FeedbackComponent,
    SitemapComponent,
    GuestbookPostComponent,
    RessriNanakPrakashSearchPreviewComponent,
    CommonrespageComponent,
    AkPagePreviewComponent,
    CommonPrintPreviewComponent,
    GgsPrintPreviewComponent,
    BgvPrintPreviewComponent,
    KsPrintPreviewComponent,
    BnlPrintPreviewComponent,
    DgsPrintPreviewComponent,
    CommonShabadPrintPreviewComponent,
    AkShabadPrintPreviewComponent,
    BgvShabadPrintPreviewComponent,
    BnlShabadPrintPreviewComponent,
    DgsShabadPrintPreviewComponent,
    GgsShabadPrintPreviewComponent,
    KsShabadPrintPreviewComponent,
    CommonBookPrintViewComponent,
    ResSriNanakPrintComponent,
    ResSggsgPrintComponent,
    ResFwtPrintComponent,
    ResSriGuruGranthDarpanPrintComponent,
    ResCompilationComponent,
    ResMusicComponent,
    GgsSearchResultComponent,
    ResMusicPrintComponent,
    ResCompilationPrintComponent,
    BnlPageComponent,
    CommonVerseComponent,
    GgsVerseComponent,
    DgsVerseComponent,
    BnlVerseComponent,
    BnlVersePrintComponent,
    DgsVersePrintComponent,
    GgsVersePrintComponent,
    GgsWorldAngComponent,
    GgsWorldAngPrintComponent,
    CommonSharePageComponent,
    GgsShareComponent,
    GgsShareShabadComponent,
    AkSharePageComponent,
    AkShareShabadComponent,
    GgsShareVerseComponent,
    AkShareVerseComponent,
    BgvSharePageComponent,
    DgSharePageComponent,
    DgShareShabadComponent,
    DgShareVerseComponent,
    BnlSharePageComponent,
    BnlShareVerseComponent,
    BnlShareShabadComponent,
    KsSharePageComponent,
    SafeHtmlPipe,
    CommonVersePrintComponent,
    SggsKoshComponent,
    SggsKoshViewComponent,
    SggsKoshIndexComponent,
    SundarGutkaComponent,
    ShabadHazarePaatishahiComponent,
    TvaiPrasaadhSavaiyeDheenanKeeComponent,
    ResraagTimeComponent,
    RestaalIndexComponent,
    ResraagsGlossaryComponent,
    RestaalTaliComponent,
    RestaalKhaliComponent,
    RestaalVibhagComponent,
    RestaalMatraComponent,
    RestaalBolComponent,
    RestaalThekaComponent,
    RestaalLayComponent,
    RestaalSamComponent,
    RestaalAvartanComponent,
    RestaalTaalDadraComponent,
    RestaalTaalRupakComponent,
    RestaalTaalTeenComponent,
    ResSaajComponent,
    ResSaajStringedComponent,
    ResSaajWindComponent,
    ResSaajPercussionComponent,
    ResSaajTablaComponent,
    ResHukumRssComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'searchFront'}),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ClickOutsideModule,
    DataTableModule,
    BrowserAnimationsModule,
    RecaptchaModule,
    RecaptchaV3Module,
    ShareButtonsModule.withConfig({ prop: shareProp }),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    Platform,
    SearchService,
    {provide: BsDatepickerConfig, useFactory: getDatepickerConfig },
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LevStwUAAAAAE2pq5l1bDFof98KIkBZmgUdphG-' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
