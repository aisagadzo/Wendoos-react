import React, { Component } from 'react';

import ImgAd1 from './img/7.png';
import ImgAdLogo1 from './img/9.png';
import codeImg1 from './img/10.png';
import moreInfoImg1 from './img/7.png';
import moreInfoImg2 from './img/12.png';




export const ortOptions =[
    {key:'0', value:'0', text:'Alles'},
    {key:'1', value:'1', text:'Wien'},
    {key:'2', value:'2', text:'Burgenland'},
    {key:'3', value:'3', text:'Kärnten'},
    {key:'4', value:'4', text:'Nieder­österreich'},
    {key:'5', value:'5', text:'Ober­österreich'},
    {key:'6', value:'6', text:'Steiermark'},
    {key:'7', value:'7', text:'Salzburg'},
    {key:'8', value:'8', text:'Tirol'},
    {key:'9', value:'9', text:'Vorarlberg'},
]

export const bewOptions =[
    {key:'0', value:'0', text:'Alles'},
    {key:'1', value:'1', text:'1 sterne'},
    {key:'2', value:'2', text:'2 sterne'},
    {key:'3', value:'3', text:'3 sterne'},
    {key:'4', value:'4', text:'4 sterne'},
    {key:'5', value:'5', text:'5 sterne'},
]



export let segmentAds = [
    {
        title:'VIVACOLOR 1',
        imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'1',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '1',
    },
    {
        title:'VIVACOLOR 2',
        imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'2',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '2',
        bewertungen: localStorage.getItem('VIVACOLOR 2') ? JSON.parse(localStorage.getItem('VIVACOLOR 2')).bewertungen : 0
    },
    {
        title:'VIVACOLOR 3',
        imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'3',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '3',
        bewertungen: localStorage.getItem('VIVACOLOR 3') ? JSON.parse(localStorage.getItem('VIVACOLOR 3')).bewertungen : 0
    },
    {
        title:'VIVACOLOR 4',
        imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'3',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '4',
        bewertungen: localStorage.getItem('VIVACOLOR 4') ? JSON.parse(localStorage.getItem('VIVACOLOR 4')).bewertungen : 0
    },
    {
        title:'VIVACOLOR 5',
        imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'2',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '5',
        bewertungen: localStorage.getItem('VIVACOLOR 5') ? JSON.parse(localStorage.getItem('VIVACOLOR 5')).bewertungen : 0
    },
    {
        title:'VIVACOLOR 6',
        imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'5',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '6',
        bewertungen: localStorage.getItem('VIVACOLOR 6') ? JSON.parse(localStorage.getItem('VIVACOLOR 6')).bewertungen : 0
    },
    {
        title:'VIVACOLOR 7',
        imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'4',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '7',
        bewertungen: localStorage.getItem('VIVACOLOR 7') ? JSON.parse(localStorage.getItem('VIVACOLOR 7')).bewertungen : 0
    },
    {
        title:'VIVACOLOR 8',
        imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'5',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '8',
        bewertungen: localStorage.getItem('VIVACOLOR 8') ? JSON.parse(localStorage.getItem('VIVACOLOR 8')).bewertungen : 0
    },
    {
        title:'VIVACOLOR 9',
        imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'3',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '9',
        bewertungen: localStorage.getItem('VIVACOLOR 9') ? JSON.parse(localStorage.getItem('VIVACOLOR 9')).bewertungen : 0
    },
    {
        title:'VIVACOLOR 10',
        imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'1',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '10',
        bewertungen: localStorage.getItem('VIVACOLOR 10') ? JSON.parse(localStorage.getItem('VIVACOLOR 10')).bewertungen : 0
    },
    {
        title:'VIVACOLOR 11',
        imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'2',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '11',
        bewertungen: localStorage.getItem('VIVACOLOR 11') ? JSON.parse(localStorage.getItem('VIVACOLOR 11')).bewertungen : 0
    },
    {
        title:'VIVACOLOR 12',
        imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'6',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '12',
        bewertungen: localStorage.getItem('VIVACOLOR 12') ? JSON.parse(localStorage.getItem('VIVACOLOR 12')).bewertungen : 0
    },
    {
        title:'VIVACOLOR 13',
        imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'6',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '13',
        bewertungen: localStorage.getItem('VIVACOLOR 13') ? JSON.parse(localStorage.getItem('VIVACOLOR 13')).bewertungen : 0
    },
    {
        title:'VIVACOLOR 14',
        imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'4',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '14',
        bewertungen: localStorage.getItem('VIVACOLOR 14') ? JSON.parse(localStorage.getItem('VIVACOLOR 14')).bewertungen : 0
    },
    {
        title:'VIVACOLOR 15',
        imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'3',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '15',
        bewertungen: localStorage.getItem('VIVACOLOR 15') ? JSON.parse(localStorage.getItem('VIVACOLOR 15')).bewertungen : 0
    },
    {
        title:'VIVACOLOR 16', imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'6',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '16',
        bewertungen: localStorage.getItem('VIVACOLOR 16') ? JSON.parse(localStorage.getItem('VIVACOLOR 16')).bewertungen : 0
    },
    {
        title:'VIVACOLOR 17', imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'4',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '1',
        bewertungen: localStorage.getItem('VIVACOLOR 17') ? JSON.parse(localStorage.getItem('VIVACOLOR 17')).bewertungen : 0
    },
    {
        title:'VIVACOLOR 18', imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'1',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '2',
        bewertungen: localStorage.getItem('VIVACOLOR 18') ? JSON.parse(localStorage.getItem('VIVACOLOR 18')).bewertungen : 0
    },
    {
        title:'VIVACOLOR 19', imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'5',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '3',
        bewertungen: localStorage.getItem('VIVACOLOR 19') ? JSON.parse(localStorage.getItem('VIVACOLOR 19')).bewertungen : 0
    },
    {
        title:'VIVACOLOR 20', imgName:ImgAd1,
        imgLogoName:ImgAdLogo1, image:ImgAdLogo1,
        ortId:'2',
        address:'Margaretenstr. 109',
        phone:'+43 1 5442045',
        mail:'office@vivacolor.at',
        web:'vivacolor.at',
        descriptionText:'VIVACOLOR Farben & Autolacke ist ein Fachgeschäft für Farben, Putze, Lacke und Malerbedarf.',
        codeImg:codeImg1,
        moreInfoText:'Als Farbspezialist bieten wir Ihnen – ganz egal ob Profi oder Heimwerker – ein umfangreiches Sortiment für den Innen- und Außenbereich. Wir beraten Sie professionell und bieten Ihnen hochwertige Produkte zu fairen Preisen.',
        moreInfoImg1:moreInfoImg1,
        moreInfoImg2:moreInfoImg2,
        grupation: '4',
        bewertungen: localStorage.getItem('VIVACOLOR 20') ? JSON.parse(localStorage.getItem('VIVACOLOR 20')).bewertungen : 0
    },
]

export const sidebarGrupations = [
    {
        title: "Administration / Sachbearbeitung",
        count: segmentAds.filter(el=>el.grupation === '1').length,
        grupation: "1"
    },
    {
        title: "Bildung / Training / Erziehung ",
        count: segmentAds.filter(el=>el.grupation === '2').length,
        grupation: "2"
    },
    {
        title: "Consulting",
        count: segmentAds.filter(el=>el.grupation === '3').length,
        grupation: "3"
    },
    {
        title: "Einkauf / Logistik / Transport",
        count: segmentAds.filter(el=>el.grupation === '4').length,
        grupation: "4"
    },
    {
        title: "Finanzwesen / Controlling ",
        count: segmentAds.filter(el=>el.grupation === '5').length,
        grupation: "5"
    },
    {
        title: "Gastronomie / Hotel / Tourismus",
        count: segmentAds.filter(el=>el.grupation === '6').length,
        grupation: "6"
    },
    {
        title: "Handwerk / Produktion ",
        count: segmentAds.filter(el=>el.grupation === '7').length,
        grupation: "7"
    },
    {
        title: "IT / Telekommunikation ",
        count: segmentAds.filter(el=>el.grupation === '8').length,
        grupation: "8"
    },
    {
        title: "Instandhaltung / Facility Management ",
        count: segmentAds.filter(el=>el.grupation === '9').length,
        grupation: "9"
    },
    {
        title: "Landwirtschaft / Forstwirtschaft / Umwelt ",
        count: segmentAds.filter(el=>el.grupation === '10').length,
        grupation: "10"
    },
    {
        title: "Marketing/PR",
        count: segmentAds.filter(el=>el.grupation === '11').length,
        grupation: "11"
    },
    {
        title: "Medien / Verlagswesen / Kultur",
        count: segmentAds.filter(el=>el.grupation === '12').length,
        grupation: "12"
    },
    {
        title: "Personalwesen ",
        count: segmentAds.filter(el=>el.grupation === '13').length,
        grupation: "13"
    },
    {
        title: "Rechtswesen ",
        count: segmentAds.filter(el=>el.grupation === '14').length,
        grupation: "14"
    },
    {
        title: "Technik / Ingenieurwesen ",
        count: segmentAds.filter(el=>el.grupation === '15').length,
        grupation: "15"
    },
    {
        title:"Vertrieb / Handel ",
        count: segmentAds.filter(el=>el.grupation === '16').length,
        grupation: "16"
    }

]
