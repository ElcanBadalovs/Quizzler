const Questions = [
  {
    id: 1,
    Question: "1) Statistikanın predmetini nə təşkil edir?",
    answers: [
      {
        answer: "Kütləvi ictimai hadisələrin kəmiyyət tərəfi",
        type: "true",
      },
      {
        answer: "İctimai hadisələrin ayrı-ayrı elementləri və ya vahidəri",
        type: "false",
      },
      {
        answer:
          "İctimai hadisələrin rəqəm xarakteristikasını almaq üçün məcmu üsulları",
        type: "false",
      },
      {
        answer: "İqtisadi kateqoriyaların mahiyyətinin öyrənilməsi",
        type: "false",
      },
      {
        answer: "İctimai hadisələr arasındakı qarşılıqlı əlaqənin öyrənilməsi",
        type: "false",
      },
    ],
  },
  {
    id: 2,
    Question: "2) Statistik müşahidə nədir?",
    answers: [
      {
        answer: "İlk məlumatların  toplanması",
        type: "true",
      },
      {
        answer: "İctimai hədisələrin qarşalaqla əlaqələrinin öyrənilsməsi",
        type: "false",
      },
      {
        answer: "İlk məlumatların işlənməsi",
        type: "false",
      },
      {
        answer: "Statistik məlumatların təhlili",
        type: "false",
      },
      {
        answer: "Məlumatların sistemləşdirilməsi",
        type: "false",
      },
    ],
  },
  {
    id: 3,
    Question: "3) Statistik tədqiqatda ilk mərhələ hansıdır?",
    answers: [
      { answer: "Statistik müşahidə", type: "true" },
      { answer: "Yekunlaşdırma və qruplaşdırma", type: "false" },
      { answer: "Statistik məlumatlərın yoxlanılması", type: "false" },
      { answer: "Statistik cədvəllərin təhlili", type: "false" },
      { answer: "Ümumiləşdirici göstəricilərin hesablanması", type: "false" },
    ],
  },
  {
    id: 4,
    Question:
      "4) Əhalinin siyahıya alınması statistik müşahidənin hansı formasına aiddir?",
    answers: [
      { answer: "Bașdan-bașa müşahidə", type: "true" },
      { answer: "Xüsusi təşkil edilmiş müşahidə", type: "false" },
      { answer: "Hesabat", type: "false" },
      { answer: "Birdəfəlik", type: "false" },
      { answer: "Bașdan-bașa olmayan müşahidə", type: "false" },
    ],
  },
  {
    id: 5,
    Question:
      "5) VVADQ-da vaxta görə qeydə alma statistik müşahidənin hansı növünə aiddir?",
    answers: [
      { answer: "Fasiləsiz (cari)", type: "true" },
      { answer: "Vaxtaşırı", type: "false" },
      { answer: "Birdəfəlik", type: "false" },
      { answer: "Bașdan-bașa", type: "false" },
      { answer: "Fasiləli", type: "false" },
    ],
  },
  {
    id: 6,
    Question:
      "6) Əhalinin siyahıya alınması vahidlərin cəlb olunmasına görə statistik müşahidənin hansı növünə aiddir?",
    answers: [
      { answer: "Bașdan-bașa", type: "true" },
      { answer: "Vaxtașırı", type: "false" },
      { answer: "Bașdan-bașa olmayan", type: "false" },
      { answer: "Anket", type: "false" },
      { answer: "Fasiləsiz (cari)", type: "false" },
    ],
  },
  {
    id: 7,
    Question:
      "7) Daha dəqiq məlumatları statistik müşahidənin hansı üsulu verir?",
    answers: [
      { answer: "Bilavasitə müşahidə", type: "true" },
      { answer: "Sorğu", type: "false" },
      { answer: "Sənəd üsulu", type: "false" },
      { answer: "Özü qeydə alma", type: "false" },
      { answer: "Anket", type: "false" },
    ],
  },
  {
    id: 8,
    Question:
      "8) Vahid obyektin geniş xaraketrizası statistik müşahidənin hansı növünə aiddir?",
    answers: [
      { answer: "Monoqrafiya", type: "true" },
      { answer: "Bașdan-bașa", type: "false" },
      { answer: "Bașdan-bașa olmayan", type: "false" },
      { answer: "Vaxtașırı", type: "false" },
      { answer: "Anket", type: "false" },
    ],
  },
  {
    id: 9,
    Question:
      "9) Kütləvi hadisələrin statistik müşahidəsində hansı səhvlər daha az təhlükəlidir?",
    answers: [
      { answer: "Təsadüfi", type: "true" },
      { answer: "Billə-bilə", type: "false" },
      { answer: "Bilmədən (qəstən edilməyən)", type: "false" },
      { answer: "Müntəzəm", type: "false" },
      { answer: "Qeyri-müntəzəm", type: "false" },
    ],
  },
  {
    id: 10,
    Question:
      "10) Müəssisələrdə əmək sərfinin uçotu statistik müşahidənin hansı formasına aiddir?",
    answers: [
      { answer: "Hesabat", type: "true" },
      { answer: "Xüsusi təşkil edilmiş müşahidə", type: "false" },
      { answer: "Bașdan-bașa müşahidə", type: "false" },
      { answer: "Birdəfəlik", type: "false" },
      { answer: "Bilavasitə müşahidə", type: "false" },
    ],
  },
  {
    id: 11,
    Question: "11) Statistik tədqiqatın ikinci mərhələsi nədir?",
    answers: [
      { answer: "Yekunlaşdırma və qruplaşdırma", type: "true" },
      { answer: "Statistik müşahidə", type: "false" },
      { answer: "Statistik məlumatlara nəzarət", type: "false" },
      { answer: "Statistik məlumatların təhlili", type: "false" },
      {
        answer: "Məlumatların statistik qrafikdə əks etdirilməsi",
        type: "false",
      },
    ],
  },
  {
    id: 12,
    Question: "12) Yekunlaşdırma və qruplaşdırma nədir?",
    answers: [
      {
        answer: "İlk məlumatların işlənməsi və sistemləşdirilməsi",
        type: "true",
      },
      { answer: "İlk məlumatların toplanması", type: "false" },
      {
        answer: "İctimai hədisələrin qarşılıqlı əlaqəsinin öyrənilməsi",
        type: "false",
      },
      {
        answer: "Eyni tipli məcmunun quruluşunun müəyyən edilməsi",
        type: "false",
      },
      {
        answer: "Ümumiləşdirici göstəricilərin hesablanması və təhlili",
        type: "false",
      },
    ],
  },
  {
    id: 13,
    Question: "13) Analitik qruplaşdırma ilə hansı məsələlər həll olunur?",
    answers: [
      {
        answer:
          "İctimai hədisələr arasında əlaqə və asılılıqların aşkar edilməsi",
        type: "true",
      },
      {
        answer: "Eyni tipli məcmunun quruluşunun müəyyən edilməsi",
        type: "false",
      },
      { answer: "Sosial-iqtisadi tiplərin seçilməsi", type: "false" },
      { answer: "İlk məlumatların toplanması", type: "false" },
      { answer: "Statistik məcmunun eyni hissələrə ayrılması", type: "false" },
    ],
  },
  {
    id: 14,
    Question:
      "14) İctimai hadisələrin ayrı-ayrı amilləri arasında qarşılıqlı alaqə və asılılıqları aşkar etmək üçün qruplaşdırmanın hansı növündən istifadə edilir?",
    answers: [
      { answer: "Analitik", type: "true" },
      { answer: "Tipik", type: "false" },
      { answer: "Quruluş", type: "false" },
      { answer: "Kombinasiyalı", type: "false" },
      { answer: "Çoxamilli", type: "false" },
    ],
  },
  {
    id: 15,
    Question: "15) Kəmiyət əlamətinin həcmini göstərən rəqəm necə adlanır?",
    answers: [
      { answer: "Variantlar", type: "true" },
      { answer: "Tezliklər", type: "false" },
      { answer: "Nisbi tezliklər", type: "false" },
      { answer: "Sıranın həcmi", type: "false" },
      { answer: "Təkrarlar", type: "false" },
    ],
  },
  {
    id: 16,
    Question: "16) Statistik tədqiqatda hansı mərhələ birinci hesab edilir?",
    answers: [
      { answer: "Statistik müşahidə", type: "true" },
      { answer: "Yekunlaşdırma və qruplaşdırma", type: "false" },
      { answer: "Statistik məlumatlara nəzarət", type: "false" },
      { answer: "Statistik məlumatrarın təhlili", type: "false" },
      { answer: "Hazırlıq işlərinin aparılması", type: "false" },
    ],
  },
  {
    id: 17,
    Question:
      "17) Müəssisədə işçilər tərəfindən işlənmiş adam-günlərinin miqdarı və qruplar üzrə onların sayı haqqında məlumat vardır:\n- Qadınlar\n- Kişilər\nHər qrup daxilində isə:\n- Əmək qabiliyyətlilər\n- Əmək qabiliyyəti olmayanlar\nHəmin məlumatların statistik cədvəlin hansı növündə yerləşdirmək mümkün olduğunu göstərin.",
    answers: [
      { answer: "Quraşıq", type: "true" },
      { answer: "Sadə", type: "false" },
      { answer: "Qrup", type: "false" },
      { answer: "Kombinasyalı", type: "false" },
      { answer: "Qurmaq olmaz", type: "false" },
    ],
  },
  {
    id: 18,
    Question:
      "18) Əlamətin maksimum qiyməti 600, minimum qiyməti 200, fasilə isə 100 olduqda qrupların sayını müəyyən edin.",
    answers: [
      { answer: "4", type: "true" },
      { answer: "3", type: "false" },
      { answer: "8", type: "false" },
      { answer: "5", type: "false" },
      { answer: "Müəyyən etmək olmaz", type: "false" },
    ],
  },
  {
    id: 19,
    Question: "19) Moment dinamika sırasını nə xarakterizə edir?",
    answers: [
      {
        answer: "Müəyyən bir tarixə (ana) ictimai hadisənin vəziyyəti",
        type: "true",
      },
      { answer: "Hər hansı bir hadisənin yekunu", type: "false" },
      {
        answer: "Müəyyən dövrdə plan tapşırığının yerinə yetirilməsi",
        type: "false",
      },
      {
        answer: "Müəyyən bir dövrdə ictimai hadisənin vəziyyəti",
        type: "false",
      },
      { answer: "Müəyyən bir tarixə planın yerinə yetirilməsi", type: "false" },
    ],
  },
  {
    id: 20,
    Question:
      "20) Dinamika sırası hansı növə aiddir (ət istehsalı, sent)?\n2011\t2012\t2013\n135\t140\t147",
    answers: [
      { answer: "Fasilə", type: "true" },
      { answer: "Vaxtaşırı", type: "false" },
      { answer: "Moment", type: "false" },
      { answer: "Atributiv", type: "false" },
      { answer: "An", type: "false" },
    ],
  },
  {
    id: 21,
    Question:
      "21) Dinamika sırası hansı növə aiddir (dən istehsalı, sent)?\n2011\t2012\t2013\n1200\t1240\t1310",
    answers: [
      { answer: "Mütləq kəmiyətlər", type: "true" },
      { answer: "Moment", type: "false" },
      { answer: "Orta kəmiyətlər", type: "false" },
      { answer: "Nisbi kəmiyyətlər", type: "false" },
      { answer: "Atributiv", type: "false" },
    ],
  },
  {
    id: 22,
    Question:
      "22) Dinamika sırası hansı növə aiddir (qarğıdalının məhsuldarlığı, s/ha)?\n2011\t2012\t2013\n48,5\t52,0\t60,0",
    answers: [
      { answer: "Orta kəmiyyətlər", type: "true" },
      { answer: "Mütləq kəmiyyətlər", type: "false" },
      { answer: "Nisbi kəmiyyətlər", type: "false" },
      { answer: "Moment", type: "false" },
      { answer: "Vaxtaşırı", type: "false" },
    ],
  },
  {
    id: 23,
    Question: "23) Hansı göstərici dinamika üzrə nisbi kəmiyyət hesab edilir?",
    answers: [
      {
        answer:
          "Vaxt ərzində eyni tipli hadisənin səviyyəsinin dəyişməsini xarakterizə edən göstərici",
        type: "true",
      },
      {
        answer:
          "Müəyyən dövr ərzində plan tapşırığının yerinə yetirilməsini xarakterizə edən göstərici",
        type: "false",
      },
      {
        answer:
          "Müəyyən şəraitdə hadisənin inkişafı və ya yayılması səviyyəsini xarakterizə edən göstərici",
        type: "false",
      },
      {
        answer:
          "Eyni vaxtda, lakin müxtəlif obyektlərə və ya əraziyə aid edilən kəmiyyətlərin həcminin müqayisəsini xarakterizə edən göstərici",
        type: "false",
      },
      {
        answer:
          "Müəyyən şəraitdə hadisənin tərkibini və quruluşunu xarakterizə edən göstərici",
        type: "false",
      },
    ],
  },
  {
    id: 24,
    Question:
      "24) Hansı göstərici planın yerinə yetirilməsi üzrə nisbi kəmiyyət hesab edilir?",
    answers: [
      {
        answer:
          "Müəyyən dövr ərzində plan tapşırığının yerinə yetirilməsini xarakterizə edən göstərici",
        type: "true",
      },
      {
        answer:
          "Eyni vaxtda, lakin müxtəlif obyektlərə və ya əraziyə aid edilən kəmiyyətlərin həcminin müqayisəsini xarakterizə edən göstərici",
        type: "false",
      },
      {
        answer:
          "Vaxt ərzində eyni tipli hadisənin dəyişməsini xarakterizə edən göstərici",
        type: "false",
      },
      {
        answer:
          "Müəyyən şəraitdə hadisənin inkişafı və ya yayılması səviyyəsini xarakterizə edən göstərici",
        type: "false",
      },
      {
        answer:
          "Müəyyən şəraitdə hadisənin tərkibini və quruluşunu xarakterizə edən göstərici",
        type: "false",
      },
    ],
  },
  {
    id: 25,
    Question: "25) Hansı göstərici müqayisə üzrə nisbi kəmiyyət hesab edilir?",
    answers: [
      {
        answer:
          "Eyni vaxtda, lakin müxtəlif obyektlərə və ya əraziyə aid edilən kəmiyyətlərin həcminin müqayisəsini xarakterizə edən göstərici",
        type: "true",
      },
      {
        answer:
          "Müəyyən şəraitdə hadisənin inkişafı və yayılması səviyyəsini xarakterizə edən göstərici",
        type: "false",
      },
      {
        answer:
          "Vaxt ərzində eyni tipli hadisənin dəyişməsini xarakterizə edən göstərici",
        type: "false",
      },
      {
        answer:
          "Ümumi məcmuda ayrı-ayrı hissələrin xüsusi çəkisini (payını) xarakterizə edən göstərici",
        type: "false",
      },
      {
        answer:
          "Müəyyən dövrdə plan tapşırığının yerinə yetirilməsini xarakterizə edən göstərici",
        type: "false",
      },
    ],
  },
  {
    id: 26,
    Question: "26) Hansı göstərici quruluş üzrə nisbi kəmiyyət hesab edilir?",
    answers: [
      {
        answer: "Ümumi yekunda hissənin çəkisini xarakterizə edən göstərici",
        type: "true",
      },
      {
        answer:
          "Vaxt ərzində eyni tipli hadisənin səviyyəsini xarakterizə edən göstərici",
        type: "false",
      },
      {
        answer:
          "Eyni vaxtda, lakin müxtəlif obyektlərə və ya əraziyə aid edilən kəmiyyətlərin həcminin müqayisəsini xarakterizə edən göstərici",
        type: "false",
      },
      {
        answer:
          "Məcmunun ayrı-ayrı hissələrinin həmin hissələrdən əsas kimi götürülmüş bir hissəsinə nisbəti xarakterizə edən göstərici",
        type: "false",
      },
      {
        answer:
          "Müəyyən şəraitdə hadisənin inkişafını və yayılmasını səviyyəsini xarakterizə edən göstərici",
        type: "false",
      },
    ],
  },
  {
    id: 27,
    Question: "27) Dinamika nisbi kəmiyyət hansı düsturla hesablanır?",
    answers: [
      { answer: "\\( K = \\frac{Y_1}{Y_0} \\cdot 100 \\)", type: "true" },
      { answer: "\\( K = \\frac{Y_1}{Y_{pl}} \\cdot 100 \\)", type: "false" },
      { answer: "\\( K = \\frac{Y_{pl}}{Y_0} \\cdot 100 \\)", type: "false" },
      { answer: "\\( K = \\frac{Y_{pl}}{Y_1} \\cdot 100 \\)", type: "false" },
      { answer: "\\( K = \\frac{Y_0}{Y_{pl}} \\cdot 100 \\)", type: "false" },
    ],
  },
  {
    id: 28,
    Question:
      "28) Plan tapşırığı üzrə nisbi kəmiyyət hansı düsturla hesablanır?",
    answers: [
      { answer: "\\( K = \\frac{Y_{pl}}{Y_0} \\)", type: "true" },
      { answer: "\\( K = \\frac{Y_1}{Y_{pl}} \\)", type: "false" },
      { answer: "\\( K = \\frac{Y_1}{Y_0} \\)", type: "false" },
      { answer: "\\( K = \\frac{Y_0}{Y_1} \\)", type: "false" },
      { answer: "\\( K = \\frac{Y_{pl}}{Y_1} \\)", type: "false" },
    ],
  },
  {
    id: 29,
    Question:
      "29) Təsərrüfatın taxıl istehsalı üzrə müqavilə öhdəliyi nisbi kəmiyyəti 120%, əvvəlki dövrdə faktiki taxıl istehsalı isə 150 sent olmuşdur. Təsərrüfat nə qədər taxıl yığmalıdır?",
    answers: [
      { answer: "\\( \\frac{150 \\cdot 120}{100} \\)", type: "true" },
      { answer: "\\( \\frac{150}{120} \\cdot 100 \\)", type: "false" },
      { answer: "\\( \\frac{120}{150} \\cdot 100 \\)", type: "false" },
      { answer: "\\( \\frac{150 \\cdot 100}{120} \\)", type: "false" },
      { answer: "\\( \\frac{120 \\cdot 100}{150} \\)", type: "false" },
    ],
  },
  {
    id: 30,
    Question:
      "30) Planın yerinə yetirilməsi 96%, artım sürəti isə 112% olduqda, plan tapşırığının (%-lə) müəyyən edilməsinin düzgün yolunu göstərin",
    answers: [
      { answer: "\\( \\frac{112}{100} \\cdot 96 \\)", type: "true" },
      { answer: "\\( \\frac{96}{112} \\cdot 100 \\)", type: "false" },
      { answer: "\\( \\frac{112}{96} \\cdot 100 \\)", type: "false" },
      { answer: "\\( \\frac{96 \\cdot 100}{112} \\)", type: "false" },
      { answer: "\\( \\frac{96}{100} \\cdot 112 \\)", type: "false" },
    ],
  },
  {
    id: 31,
    Question:
      "31) Plan tapşırığı 120%, artım sürəti isə 126% olduqda, planın yerinə yetirilməsinin müəyyən edilməsinin düzgün yolunu göstərin.",
    answers: [
      { answer: "\\( \\frac{126}{120} \\cdot 100 \\)", type: "true" },
      { answer: "\\( \\frac{120}{126} \\cdot 100 \\)", type: "false" },
      { answer: "\\( \\frac{120}{100} \\cdot 126 \\)", type: "false" },
      { answer: "\\( \\frac{126}{100} \\cdot 120 \\)", type: "false" },
      { answer: "\\( \\frac{120 \\cdot 100}{126} \\)", type: "false" },
    ],
  },
  {
    id: 32,
    Question:
      "32) Əgər faktiki məhsul istehsalı 90 sent, faktiki artım sürəti 180% təşkil edirsə, əsas dövrdə məhsul istehsalının müəyyən edilməsinin düzgünlüyünü göstərin.",
    answers: [
      { answer: "\\( \\frac{90}{180} \\cdot 100 \\)", type: "true" },
      { answer: "\\( \\frac{180}{90} \\cdot 100 \\)", type: "false" },
      { answer: "\\( \\frac{180 \\cdot 100}{90} \\)", type: "false" },
      { answer: "\\( \\frac{90 \\cdot 180}{100} \\)", type: "false" },
      { answer: "\\( \\frac{100}{96} \\cdot 180 \\)", type: "false" },
    ],
  },
  {
    id: 33,
    Question:
      "33) Planın yerinə yetirilməsi 120%, faktiki səviyyə 60 ha olduqda taxılın əkin sahəsinin plan tapşırığının səviyyəsini müəyyən edin.",
    answers: [
      { answer: "\\( \\frac{60}{120} \\cdot 100 \\)", type: "true" },
      { answer: "\\( \\frac{60 \\cdot 120}{100} \\)", type: "false" },
      { answer: "\\( \\frac{100}{60} \\cdot 120 \\)", type: "false" },
      { answer: "\\( \\frac{120}{100} \\cdot 60 \\)", type: "false" },
      { answer: "\\( \\frac{120}{60} \\cdot 100 \\)", type: "false" },
    ],
  },
  {
    id: 34,
    Question:
      "34) Məhsul istehsalının əsas ildə səviyyəsi 500 sentner, faktiki artım sürəti 180% olduqda faktiki məhsul istehsalını müəyyən edin (sent).",
    answers: [
      { answer: "\\( \\frac{180}{100} \\cdot 500 \\)", type: "true" },
      { answer: "\\( \\frac{180 \\cdot 100}{500} \\)", type: "false" },
      { answer: "\\( \\frac{500 \\cdot 100}{180} \\)", type: "false" },
      { answer: "\\( \\frac{100}{500} \\cdot 180 \\)", type: "false" },
      { answer: "\\( \\frac{100}{120} \\cdot 500 \\)", type: "false" },
    ],
  },
  {
    id: 35,
    Question: "35) Orta kəmiyyət nədir?",
    answers: [
      {
        answer:
          "Konkret zaman və məkan şəraitində yekcins hadisəsinin vahidinə aid dəyişən əlamətin tipik səviyyəsini xarakterizə edən göstəricidir",
        type: "true",
      },
      {
        answer:
          "Eyni vaxtda, lakin müxtəlif obyektlərə aid edilən eyni tipli kəmiyyətlərin müqayisəsi həcmini xarakterizə edən göstəricidir",
        type: "false",
      },
      {
        answer:
          "Müəyyən şəraitdə hadisənin inkişafını və ya yayılması səviyyəsini xarakterizə edən göstəricidir",
        type: "false",
      },
      {
        answer:
          "Məcmunun ayrı-ayrı hissələrinin həmin hissələrindən əsas kimi götürülümüş birinə nisbətini xarakterizə edən göstəricidir",
        type: "false",
      },
      {
        answer:
          "Statistikada istifadə edilən ümumiləşdirici göstəricilərin ən mühüm növlərindən biridir",
        type: "false",
      },
    ],
  },
];

export default Questions;
