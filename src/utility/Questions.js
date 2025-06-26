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
  {
    id: 36,
    Question: "36. Çəkili hesabi orta kəmiyyət hansı düsturla müəyyən edilir?",
    answers: [
      { answer: "\\( \\bar{x} = \\frac{\\sum xf}{\\sum f} \\)", type: "true" },
      { answer: "\\( \\bar{x} = \\frac{\\sum x}{n} \\)", type: "false" },
      {
        answer: "\\( \\bar{x} = \\frac{\\sum M}{\\sum \\frac{M}{x}} \\)",
        type: "false",
      },
      {
        answer: "\\( \\bar{x} = \\sqrt[n]{\\frac{Y_n}{Y_0}} \\)",
        type: "false",
      },
      {
        answer: "\\( \\bar{x} = \\sqrt[n]{x_1 \\cdot x_2 \\cdots x_n} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 37,
    Question:
      "37. Müxtəlif məzmunun tərəddüd səviyyəsini müqayisə etdikdə hansı variasiya göstəricisindən istifadə edilir?",
    answers: [
      { answer: "Variasiya əmsalı", type: "true" },
      { answer: "Variasiya genişliyi", type: "false" },
      { answer: "Orta xətt meyl", type: "false" },
      { answer: "Orta kvadratik meyl", type: "false" },
      { answer: "Dispersiya", type: "false" },
    ],
  },
  {
    id: 38,
    Question: "38. Çəkili orta kvadratik meyl hansı düsturla hesablanır?",
    answers: [
      {
        answer: "\\( \\sqrt{ \\frac{\\sum (x - \\bar{x})^2 f}{\\sum f} } \\)",
        type: "true",
      },
      { answer: "\\( \\frac{\\sum xf}{\\sum f} \\)", type: "false" },
      {
        answer: "\\( \\frac{\\sum (x - \\bar{x}) f}{\\sum f} \\)",
        type: "false",
      },
      {
        answer: "\\( \\frac{\\sum (x - \\bar{x})^2 f}{\\sum f} \\)",
        type: "false",
      },
      {
        answer: "\\( \\frac{\\sum |x - \\bar{x}| f}{\\sum f} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 39,
    Question:
      "39. Əgər tezliklərin cəmi 400, meyllərin kvadratının çəkili cəmi 3600 olarsa, orta kvadratik meyli müəyyən edin.",
    answers: [
      { answer: "3", type: "true" },
      { answer: "5", type: "false" },
      { answer: "9", type: "false" },
      { answer: "20", type: "false" },
      { answer: "60", type: "false" },
    ],
  },
  {
    id: 40,
    Question:
      "40. Orta kəmiyyət 15, dispersiya isə 9-a bərabər olduqda variasiya əmsalını hesablayın.",
    answers: [
      { answer: "20", type: "true" },
      { answer: "2", type: "false" },
      { answer: "60", type: "false" },
      { answer: "135", type: "false" },
      { answer: "40", type: "false" },
    ],
  },
  {
    id: 41,
    Question: "41. Sadə harmonik orta kəmiyyət hansı düsturla hesablanır?",
    answers: [
      {
        answer: "\\( \\bar{x} = \\frac{n}{\\sum \\frac{1}{x}} \\)",
        type: "true",
      },
      { answer: "\\( \\bar{x} = \\frac{\\sum x}{n} \\)", type: "false" },
      { answer: "\\( \\bar{x} = \\frac{\\sum xf}{\\sum f} \\)", type: "false" },
      {
        answer: "\\( \\bar{x} = \\frac{\\sum M}{\\sum \\frac{M}{x}} \\)",
        type: "false",
      },
      { answer: "\\( \\bar{x} = n\\sqrt{\\frac{Y_n}{Y_1}} \\)", type: "false" },
    ],
  },
  {
    id: 42,
    Question:
      "42. Çəkilərin cəmi 100, meyllərin kvadratının cəmi (çəkili) 400 olduqda dispersiyanı müəyyən edin",
    answers: [
      { answer: "4", type: "true" },
      { answer: "20", type: "false" },
      { answer: "10", type: "false" },
      { answer: "2", type: "false" },
      { answer: "5", type: "false" },
    ],
  },
  {
    id: 43,
    Question:
      "43. Ümumi inkişaf meylinin aşkar edilməsinin ən sadə üsulu hansıdır?",
    answers: [
      { answer: "Dövrlərin iriləşdirilməsi", type: "true" },
      {
        answer: "Sürüşkən orta kəmiyyət yolu ilə hamarlaşdırma",
        type: "false",
      },
      { answer: "Analitik hamarlaşdırma", type: "false" },
      { answer: "Mövsümlük indeksinin hesablanması", type: "false" },
      {
        answer: "Dinamika sırasının təhlili göstəricilərinin hesablanması",
        type: "false",
      },
    ],
  },
  {
    id: 44,
    Question:
      "44. Hadisənin ümumi inkişaf meylinin aşkar edilməsində hansı üsul ən mükəmməl hesab edilir?",
    answers: [
      { answer: "Analitik hamarlaşdırma", type: "true" },
      {
        answer: "Sürüşkən orta kəmiyyətin köməyilə hamarlaşdırma",
        type: "false",
      },
      {
        answer: "Dinamika sırasının təhlili göstəricilərinin hesablanması",
        type: "false",
      },
      { answer: "Mövsümlük indeksi hesablanması", type: "false" },
      { answer: "Dövrlərin iriləşdirilməsi", type: "false" },
    ],
  },
  {
    id: 45,
    Question: "45. Əsas dövrə görə artım əmsalı hansı düsturla hesablanır?",
    answers: [
      { answer: "\\( \\frac{Y_i}{Y_1} \\)", type: "true" },
      { answer: "\\( Y_i - Y_{i-1} \\)", type: "false" },
      { answer: "\\( \\frac{Y_0}{Y_1} \\)", type: "false" },
      { answer: "\\( \\frac{Y_i}{Y_{i-1}} \\)", type: "false" },
      { answer: "\\( Y_i - Y_1 \\)", type: "false" },
    ],
  },
  {
    id: 46,
    Question: "46. Zəncirvari əlavə artım sürəti hansı düsturla hesablanır?",
    answers: [
      { answer: "\\( \\frac{Y_i}{Y_{i-1}} - 1 \\)", type: "true" },
      { answer: "\\( Y_i - Y_{i-1} \\)", type: "false" },
      { answer: "\\( \\frac{Y_i}{Y_1} - 1 \\)", type: "false" },
      { answer: "\\( \\frac{Y_i}{Y_{i-1}} \\)", type: "false" },
      { answer: "\\( \\frac{Y_i}{Y_1} \\)", type: "false" },
    ],
  },
  {
    id: 47,
    Question: "47) İndeks nəyə deyilir?",
    answers: [
      {
        answer:
          "Eyni adlı hadisələrin səviyyəsinin dəyişməsini xarakterizə edən göstərici",
        type: "true",
      },
      {
        answer:
          "Cəmlənə bilməyən elementlərdən ibarət mürəkkəb hadisənin dəyişməsini xarakterizə edən gösiərici",
        type: "false",
      },
      {
        answer:
          "Konkret zaman və məkan şəraitində yekcins hadisənin vahidinə aid dəyişən əlamətin tipik səviyyəni xarakterizə edən göstərici",
        type: "false",
      },
      {
        answer:
          "Müəyyən şəraitdə hadisənin inkişaf və ya yayılması səviyyəsini xarakterizə edən göstərici",
        type: "false",
      },
      {
        answer:
          "Mürəkkəb hadisənin tərkibini və quruluşunu xarakterizə edən göstərici",
        type: "false",
      },
    ],
  },
  {
    id: 48,
    Question:
      "48) \\( \\frac{\\sum q_1 p_0}{\\sum \\frac{q_1 p_0}{i_q}} \\) düsturu ilə hesablanan indeks fiziki həcm indeksinin hansı formasına aiddir?",
    answers: [
      { answer: "Harmonik orta", type: "true" },
      { answer: "Aqreqat", type: "false" },
      { answer: "Hesabi orta", type: "false" },
      { answer: "Fərdi", type: "false" },
      { answer: "Ümumi", type: "false" },
    ],
  },
  {
    id: 49,
    Question: "49) Fiziki həcm indeksi hansı düsturla hesablanır?",
    answers: [
      {
        answer: "\\( J = \\frac{\\sum q_1 P_0}{\\sum q_0 P_0} \\)",
        type: "true",
      },
      {
        answer: "\\( J = \\frac{\\sum q_1 P_1}{\\sum q_0 P_0} \\)",
        type: "false",
      },
      {
        answer: "\\( J = \\frac{\\sum q_1 P_1}{\\sum q_1 P_0} \\)",
        type: "false",
      },
      {
        answer: "\\( J = \\frac{\\sum q_1 Z_1}{\\sum q_1 Z_0} \\)",
        type: "false",
      },
      {
        answer: "\\( J = \\frac{\\sum q_1 P_1}{\\sum q_0 P_1} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 50,
    Question:
      "50) \\( J = \\frac{\\sum i_q q_0 P_0}{\\sum q_0 P_0} \\) düsturu ilə hesablanan indeks fiziki həcm indeksinin hansı formasına aiddir?",
    answers: [
      { answer: "Hesabi orta", type: "true" },
      { answer: "Aqreqat", type: "false" },
      { answer: "Fərdi", type: "false" },
      { answer: "Harmonik orta", type: "false" },
      { answer: "Ümumi", type: "false" },
    ],
  },
  {
    id: 51,
    Question:
      "51) Fiziki həcmi indeksi – 1,32, mal dövriyyəsi indeksi – 1,05 olduqda qiymət indeksini hesablayın (0,01 dəqiqliyilə)",
    answers: [
      { answer: "0,80", type: "true" },
      { answer: "2,37", type: "false" },
      { answer: "1,39", type: "false" },
      { answer: "1,26", type: "false" },
      { answer: "1,74", type: "false" },
    ],
  },
  {
    id: 52,
    Question:
      "52) Seçmə orta kəmiyyətin müəyyən edilməsində seçmənin orta xətası hansı düsturla hesablanır?",
    answers: [
      { answer: "\\( \\mu = \\sqrt{\\frac{\\sigma^2}{n}} \\)", type: "true" },
      { answer: "\\( \\mu^2 = \\frac{\\sigma^2}{n} \\)", type: "false" },
      { answer: "\\( \\mu = \\sqrt{\\frac{pq}{n}} \\)", type: "false" },
      { answer: "\\( \\mu = \\frac{pq}{n} \\)", type: "false" },
      { answer: "\\( \\mu = \\frac{\\sigma}{n} \\)", type: "false" },
    ],
  },
  {
    id: 53,
    Question:
      "53) Hissənin müəyyən edilməsində seçmənin orta xətası hansı düsturla hesablanır?",
    answers: [
      { answer: "\\( \\mu = \\sqrt{\\frac{pq}{n}} \\)", type: "true" },
      { answer: "\\( \\mu^2 = \\frac{\\sigma^2}{n} \\)", type: "false" },
      { answer: "\\( \\mu = \\sqrt{\\frac{\\sigma^2}{n}} \\)", type: "false" },
      { answer: "\\( \\mu^2 = \\frac{pq}{n} \\)", type: "false" },
      { answer: "\\( \\mu = \\frac{pq}{n} \\)", type: "false" },
    ],
  },
  {
    id: 54,
    Question:
      "54) Seçmənin orta xətasını iki dəfə azaltmaq üçün seçmənin həcmini necə dəyişmək lazımdır?",
    answers: [
      { answer: "4 dəfə artırmaq", type: "false" },
      { answer: "5 dəfə artırmaq", type: "false" },
      { answer: "3.2 dəfə artırmaq", type: "false" },
      { answer: "1 dəfə artırmaq", type: "false" },
      { answer: "3 dəfə artırmaq", type: "true" },
    ],
  },
  {
    id: 55,
    Question:
      "55) Seçmənin orta xətasını üç dəfə azaltmaq üçün seçmənin həcmini necə dəyişmək lazımdır?",
    answers: [
      { answer: "9 dəfə artırmaq", type: "true" },
      { answer: "4 dəfə azaltmaq", type: "false" },
      { answer: "3 dəfə azaltmaq", type: "false" },
      { answer: "2 dəfə azaltmaq", type: "false" },
      { answer: "6 dəfə azaltmaq", type: "false" },
    ],
  },
  {
    id: 56,
    Question:
      "56) Seçmə ortanın müəyyən edilməsində seçmənin limit xətası hansı düsturla hesablanır?",
    answers: [
      { answer: "\\( \\Delta = t \\mu_x \\)", type: "true" },
      { answer: "\\( \\mu^2 = \\frac{\\sigma^2}{n} \\)", type: "false" },
      { answer: "\\( \\mu = \\sqrt{\\frac{pq}{n}} \\)", type: "false" },
      { answer: "\\( \\mu^2 = \\frac{pq}{n} \\)", type: "false" },
      { answer: "\\( \\mu = \\frac{pq}{n} \\)", type: "false" },
    ],
  },
  {
    id: 57,
    Question:
      "57) Hissənin müəyyən edilməsində seçmənin limit xətası hansı düsturla hesablanır?",
    answers: [
      { answer: "\\( \\Delta = t \\sqrt{\\frac{pq}{n}} \\)", type: "true" },
      {
        answer: "\\( \\Delta = t \\sqrt{\\frac{\\sigma^2}{n}} \\)",
        type: "false",
      },
      { answer: "\\( \\Delta = t \\mu_x \\)", type: "false" },
      {
        answer: "\\( \\Delta = \\frac{t \\cdot \\sigma}{\\sqrt{n}} \\)",
        type: "false",
      },
      {
        answer: "\\( \\Delta = \\frac{t \\cdot \\sigma}{n} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 58,
    Question:
      "58) Əgər növbətçilərin müəyyən edilməsində hər bir tələbə əlifba siyahısı ilə seçilmişsə, seçmənin hansı üsulundan istifadə edilmişdir?",
    answers: [
      { answer: "Mexaniki", type: "true" },
      { answer: "Kombinələşdirilmiş", type: "false" },
      { answer: "An", type: "false" },
      { answer: "Tipik", type: "false" },
      { answer: "Seriyalı", type: "false" },
    ],
  },
  {
    id: 59,
    Question:
      "59) Əgər N=1000, t=3, σ² = 1.1, Δ = 0.2 olarsa, təkrar olmayan təsadüfi seçmədə seçmənin həcmi (n) neçəya bərabərdir?",
    answers: [
      { answer: "198", type: "true" },
      { answer: "214", type: "false" },
      { answer: "248", type: "false" },
      { answer: "Müəyyən etmək olmur", type: "false" },
      { answer: "220", type: "false" },
    ],
  },
  {
    id: 60,
    Question:
      "60) Əgər N=1000, t=2, σ² = 1.2, Δ = 0.1 olarsa, təkrar olmayan təsadüfi seçmədə seçmənin həcmi (n) neçəya bərabərdir?",
    answers: [
      { answer: "480", type: "true" },
      { answer: "576", type: "false" },
      { answer: "240", type: "false" },
      { answer: "Müəyyən etmək olmur", type: "false" },
      { answer: "300", type: "false" },
    ],
  },
  {
    id: 61,
    Question:
      "61) Aşağıdakı əməliyyatlardan hansıları statistik yekunlaşdırmaya aid deyil?",
    answers: [
      { answer: "Kütləvi məlumatların toplanması", type: "true" },
      { answer: "Statistik qruplaşdırma", type: "false" },
      { answer: "Sözün məhdud mənasında yekunlaşdırma", type: "false" },
      {
        answer: "Ümumiləşdirici statistik göstəricilərin hesablanması",
        type: "false",
      },
      {
        answer: "Statistik göstəricilərin cədvəl və qrafikdə əks etdirilməsi",
        type: "false",
      },
    ],
  },
  {
    id: 62,
    Question: "62) Hansı cədvəllər sadə statistik cədvəllərə aid deyil?",
    answers: [
      { answer: "Balans cədvəli", type: "true" },
      { answer: "Statistik paylanma sıraları", type: "false" },
      { answer: "Xronoloji cədvəllər (dinamika sıraları)", type: "false" },
      { answer: "Monoqrafik cədvəllər", type: "false" },
      { answer: "Siyahı cədvəllər", type: "false" },
    ],
  },
  {
    id: 63,
    Question:
      "63) Məhsul vahidinin qiyməti və satışının ümumi həcmi verildikdə, orta satış qiymətini müəyyən etmək üçün orta kəmiyyətin hansı formasını tətbiq etmək lazımdır?",
    answers: [
      { answer: "Harmonik", type: "true" },
      { answer: "Hesabi", type: "false" },
      { answer: "Həndəsi", type: "false" },
      { answer: "Xronoloji", type: "false" },
      { answer: "Kvadratik", type: "false" },
    ],
  },
  {
    id: 64,
    Question:
      "64) Əlamətin iki və ya daha artıq yığımdakı variasiyasını müqayisə etmək üçün hansı göstəricini hesablamaq lazımdır?",
    answers: [
      { answer: "Variasiya əmsalı", type: "true" },
      { answer: "Orta xətti meyl", type: "false" },
      { answer: "Dispersiya", type: "false" },
      { answer: "Orta kvadratik meyl", type: "false" },
      { answer: "Variasiya genişliyi", type: "false" },
    ],
  },
  {
    id: 65,
    Question:
      "65) Müəssisə üzrə istehsalın həcmi haqqında beş illik məlumatlar əsasında orta illik məhsul istehsalının həcmini müəyyən etmək üçün hansı orta kəmiyyətdən istifadə edilməlidir?",
    answers: [
      { answer: "Sadə hesabi", type: "true" },
      { answer: "Harmonik", type: "false" },
      { answer: "Çəkili hesabi", type: "false" },
      { answer: "Həndəsi", type: "false" },
      { answer: "Median", type: "false" },
    ],
  },
  {
    id: 66,
    Question:
      "66) Rayonun fərdi sahibkar təsərrüfatları üzvlərinin sayına görə tədqiq edilmiş və aşağıdakı paylanma sırası alınmışdır: 2,2,2,3,3,3,3,3,4,4,4,4,5,5,5,5,5,5,6,6. Verilmiş paylanmada əlamətin modal qiyməti hansıdır?",
    answers: [
      { answer: "5", type: "true" },
      { answer: "2", type: "false" },
      { answer: "3", type: "false" },
      { answer: "4", type: "false" },
      { answer: "6", type: "false" },
    ],
  },
  {
    id: 67,
    Question:
      "67) Elektrik enerjisinin istehsalının və istehlakının ölçü vahidi olan kilovatt-saat mütləq kəmiyyətlərin hansı ölçü vahidinə aiddir?",
    answers: [
      { answer: "Kombinə edilmiş", type: "true" },
      { answer: "Natural", type: "false" },
      { answer: "Şərti-natural", type: "false" },
      { answer: "Dəyər", type: "false" },
      { answer: "Əmək", type: "false" },
    ],
  },
  {
    id: 68,
    Question:
      "68) Əhalinin sıxlığı göstəricisi nisbi kəmiyyətlərin hansı növünə aiddir?",
    answers: [
      { answer: "İntensivlik", type: "true" },
      { answer: "Planın yerinə yetirilməsi", type: "false" },
      { answer: "Dinamika", type: "false" },
      { answer: "Quruluş", type: "false" },
      { answer: "Müqayisə", type: "false" },
    ],
  },
  {
    id: 69,
    Question:
      "69) Aşağıdakı indekslərdən hansı əmək məhsuldarlığının dəyər indeksidir?",
    answers: [
      {
        answer:
          "\\( J = \\frac{\\sum q_1 P}{\\sum T_1} : \\frac{\\sum q_0 P}{\\sum T_0} \\)",
        type: "true",
      },
      {
        answer: "\\( J = \\frac{\\sum p_1 q_1}{\\sum p_0 q_1} \\)",
        type: "false",
      },
      {
        answer: "\\( J = \\frac{\\sum q_1 p_0}{\\sum q_0 p_0} \\)",
        type: "false",
      },
      {
        answer: "\\( J = \\frac{\\sum t_0 q_1}{\\sum t_1 q_1} \\)",
        type: "false",
      },
      {
        answer: "\\( J = \\frac{\\sum Z_1 q_1}{\\sum Z_0 q_1} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 70,
    Question:
      "70) Bərabər fasilələr variasiya sırası üçün median aşağıdakı düsturla hesablanır: \\( M_e = X_{min} + i \\cdot \\frac{\\frac{\\sum f - S_{me-1}}{2}}{f_{me}}  \\) \nBu düsturda \\( f_{me} \\) ilə nə işarə edilmişdir?",
    answers: [
      { answer: "Median daxil olan intervalın tezliyi", type: "true" },
      { answer: "Median daxil olan intervalın aşağı sərhədi", type: "false" },
      { answer: "Tezliklərin cəmi", type: "false" },
      { answer: "Artan yekunla tezliklərin cəmi", type: "false" },
      { answer: "Fasilə kəmiyyəti", type: "false" },
    ],
  },
  {
    id: 71,
    Question:
      "71) Variasiya göstəricilərindən hansının hesablanmasında yalnız iki variantın qiymətini bilmək kifayətdir?",
    answers: [
      { answer: "Variasiya genişliyi", type: "true" },
      { answer: "Orta xətti meyil", type: "false" },
      { answer: "Dispersiya", type: "false" },
      { answer: "Orta kvadratik meyl", type: "false" },
      { answer: "Variasiya əmsalı", type: "false" },
    ],
  },
  {
    id: 72,
    Question: "72) \\( \\text{‰} \\) simvolu necə adlanır?",
    answers: [
      { answer: "Prodesimil", type: "true" },
      { answer: "Əmsal", type: "false" },
      { answer: "Faiz", type: "false" },
      { answer: "Dəfə", type: "false" },
      { answer: "Promil", type: "false" },
    ],
  },
  {
    id: 73,
    Question:
      "73) Seçmənin limit xətası düsturundakı \\( (\\Delta = t \\cdot \\frac{\\sigma}{\\sqrt{n}}) \\) t – simvolu ilə hansı kəmiyyət işarə edilmişdir?",
    answers: [
      { answer: "Etibarlılıq ədədi", type: "true" },
      { answer: "Dispersiya", type: "false" },
      { answer: "Seçmənin həcmi", type: "false" },
      { answer: "Seçmənin orta xətası", type: "false" },
      { answer: "Temperatur", type: "false" },
    ],
  },
  {
    id: 74,
    Question:
      "74) İki əlamət arasındakı xətti korrelyasiya əmsalının qiyməti r = 0,83 olarsa, həmin əlamətlər arasındakı əlaqənin sıxlığı haqqında nə demək olar?",
    answers: [
      { answer: "Güclüdür", type: "true" },
      { answer: "Zəifdir", type: "false" },
      { answer: "Cüzidir", type: "false" },
      { answer: "Ortadır", type: "false" },
      { answer: "Mülayimdir", type: "false" },
    ],
  },
  {
    id: 75,
    Question: "75) Aşağıdakı indekslərdən hansı fərdi qiymət indeksidir?",
    answers: [
      { answer: "\\( i = \\frac{p_1}{p_0} \\)", type: "true" },
      { answer: "\\( i = \\frac{Z_1}{Z_0} \\)", type: "false" },
      { answer: "\\( i = \\frac{t_0}{t_1} \\)", type: "false" },
      { answer: "\\( i = \\frac{q_1}{q_0} \\)", type: "false" },
      { answer: "\\( i = \\frac{q_1}{q_{pl}} \\)", type: "false" },
    ],
  },
  {
    id: 76,
    Question:
      "76) \\( \\text{‰} \\) simvolu nisbi kəmiyyətin hansı ifadə formasını göstərir?",
    answers: [
      { answer: "Promil", type: "true" },
      { answer: "Əmsal", type: "false" },
      { answer: "Faiz", type: "false" },
      { answer: "Dəfə", type: "false" },
      { answer: "Prodesimil", type: "false" },
    ],
  },
  {
    id: 77,
    Question:
      "77) Müqayisənin əsası hansı kəmiyyətə bərabər götürüldükdə nisbi kəmiyyətin promil ifadə forması alınır?",
    answers: [
      { answer: "1000", type: "true" },
      { answer: "1", type: "false" },
      { answer: "100", type: "false" },
      { answer: "10000", type: "false" },
      { answer: "100000", type: "false" },
    ],
  },
  {
    id: 78,
    Question:
      "78) Statistik təhlilin hansı metodu ayrı-ayrı amillərin öyrənilən hadisəyə miqdarca təsirini müəyyən etməyə imkan verir?",
    answers: [
      { answer: "Reqresiya", type: "true" },
      { answer: "İndeks", type: "false" },
      { answer: "Qruplaşdırma", type: "false" },
      { answer: "Qrafik", type: "false" },
      { answer: "Dispersiya", type: "false" },
    ],
  },
  {
    id: 79,
    Question:
      "79) Müəssisə işçilərinin əmək haqqı səviyyəsinə görə aşağıdakı paylanma sırasında median daxil olan interval hansıdır?",
    answers: [
      { answer: "180-210", type: "true" },
      { answer: "120-150", type: "false" },
      { answer: "150-180", type: "false" },
      { answer: "210-240", type: "false" },
      { answer: "240-270", type: "false" },
    ],
  },
  {
    id: 80,
    Question:
      "80) Fərdi sahibkar təsərrüfatlarının taxılın məhsuldarlıq səviyyəsinə görə aşağıdakı paylanma sırasında modal interval hansıdır?",
    answers: [
      { answer: "18-22", type: "true" },
      { answer: "10-14", type: "false" },
      { answer: "14-18", type: "false" },
      { answer: "22-26", type: "false" },
      { answer: "26-30", type: "false" },
    ],
  },
  {
    id: 81,
    Question:
      "81) Əmək intizamının pozulmasının sayına görə müəssisənin sexlərinin aşağıdakı paylanma sırası verilmişdir. Əlamətin modal qiyməti hansıdır?",
    answers: [
      { answer: "5.", type: "true" },
      { answer: "1.", type: "false" },
      { answer: "2.", type: "false" },
      { answer: "3.", type: "false" },
      { answer: "4.", type: "false" },
    ],
  },
  {
    id: 82,
    Question:
      "82) Bərabər fasiləli variasiya sırası üçün moda aşağıdakı düsturla hesablanır: \\( M_0 = X_{m0 min} + i \\cdot \\frac{f_{M_0}-f_{M_0-1}}{(f_{M_0} - f_{M_0-1}) + (f_{M_0} - f_{M_0+1})} \\). Bu düsturda \\(X_{M_0 min}\\) simvolu ilə nə işarə edilmişdir?",
    answers: [
      { answer: "Modal fasilənin aşağı sərhəddi", type: "true" },
      { answer: "Ranjire edilmiş sıranın minimum qiyməti", type: "false" },
      { answer: "Ranjire edilmiş sıranın orta qiyməti", type: "false" },
      { answer: "Median daxil olan fasilənin aşağı sərhəddi", type: "false" },
      { answer: "Öyrənilən əlamətin minimum qiyməti", type: "false" },
    ],
  },
  {
    id: 83,
    Question: "83) Alternativ əlamətin dispersiyası hansı düsturla hesablanır?",
    answers: [
      { answer: "\\( \\sigma^2 = pq \\)", type: "true" },
      {
        answer: "\\( \\sigma^2 = \\frac{\\sum (x - \\bar{x})^2}{n} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\sigma^2 = \\frac{\\sum (x - \\bar{x})^2 \\cdot f}{\\sum f} \\)",
        type: "false",
      },
      { answer: "\\( q = \\frac{N - M}{N} \\)", type: "false" },
      {
        answer: "\\( \\bar{d} = \\frac{\\sum |x - \\bar{x}|}{n} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 84,
    Question:
      "84) Alternativ əlamətin dispersiyasının maksimum qiyməti neçə ola bilər?",
    answers: [
      { answer: "0,25", type: "true" },
      { answer: "0,10", type: "false" },
      { answer: "0,20", type: "false" },
      { answer: "0,40", type: "false" },
      { answer: "0,50", type: "false" },
    ],
  },
  {
    id: 85,
    Question:
      "85) Alternativ əlamətin orta qiyməti hansı kəmiyyətə bərabərdir?",
    answers: [
      { answer: "p", type: "true" },
      { answer: "q", type: "false" },
      { answer: "pq", type: "false" },
      { answer: "\\( \\sqrt{p} \\)", type: "false" },
      { answer: "\\( \\sqrt{pq} \\)", type: "false" },
    ],
  },
  {
    id: 86,
    Question: "86) Çəkili harmonik orta kəmiyyət hansı düsturla hesablanır?",
    answers: [
      {
        answer: "\\( \\bar{x} = \\frac{\\sum M}{\\sum \\frac{M}{x}} \\)",
        type: "true",
      },
      {
        answer: "\\( \\bar{x} = \\frac{n}{\\sum \\frac{1}{x}} \\)",
        type: "false",
      },
      { answer: "\\( \\bar{x} = \\frac{\\sum xf}{\\sum f} \\)", type: "false" },
      { answer: "\\( \\bar{x} = \\frac{\\sum x}{n} \\)", type: "false" },
      { answer: "\\( \\bar{x} = n \\sqrt[\\bar{x}_1]{x_n} \\)", type: "false" },
    ],
  },
  {
    id: 87,
    Question: "87) İnterpolyasiya nədir?",
    answers: [
      {
        answer:
          "Dinamika sırasının daxilində naməlum səviyyənin müəyyən ekdilməsi",
        type: "true",
      },
      { answer: "Dövrlərin iriləşdirilməsidir", type: "false" },
      { answer: "Sürüşkən orta kəmiyyətlərin hesablanmasıdır", type: "false" },
      { answer: "Analitik üsulla hamarlaşdırılmalıdır", type: "false" },
      {
        answer:
          "Dinamika sırasının xaricində naməlum səviyyənin müəyyən edilməsidir",
        type: "false",
      },
    ],
  },
  {
    id: 88,
    Question: "88) Statistik məlumatların şərhinin ən əyani forması hansıdır?",
    answers: [
      { answer: "Cədvəl", type: "true" },
      { answer: "Şifahi", type: "false" },
      { answer: "Mətn", type: "false" },
      { answer: "Yazı", type: "false" },
      { answer: "Qrafik", type: "false" },
    ],
  },
  {
    id: 89,
    Question:
      "89) Aşağıdakı cədvəl növlərindən hansı statistik cədvəllərə aiddir?",
    answers: [
      { answer: "Quraşıq cədvəl", type: "true" },
      { answer: "Vurma cədvəli", type: "false" },
      { answer: "Loqarifm cədvəli", type: "false" },
      { answer: "Antiloqarifm cədvəli", type: "false" },
      { answer: "Triqonometrik funksiyalar cədvəli", type: "false" },
    ],
  },
  {
    id: 90,
    Question: "90) 1% əlavə artımın mütləq qiyməti hansı düsturla hesablanır?",
    answers: [
      { answer: "\\( A\\% = \\frac{\\Delta i}{\\Delta t_i} \\)", type: "true" },
      { answer: "\\( \\Delta = y_i - y_1 \\)", type: "false" },
      { answer: "\\( \\Delta_i = y_i - y_{i-1} \\)", type: "false" },
      { answer: "\\( k = \\frac{y_i}{y_1} \\)", type: "false" },
      { answer: "\\( k_i = \\frac{y_i}{y_{i-1}} \\)", type: "false" },
    ],
  },
  {
    id: 91,
    Question:
      "91) Sıranın səviyyələri mütləq kəmiyyətlə ifadə olunarsa sıranın orta artım sürətinin hansı düsturla hesablamaq olar?",
    answers: [
      { answer: "\\( \\bar{k} = n \\sqrt{\\frac{Y_n}{Y_1}} \\)", type: "true" },
      { answer: "\\( T = K \\cdot 100 \\)", type: "false" },
      { answer: "\\( T_i = K_i \\cdot 100 \\)", type: "false" },
      { answer: "\\( \\Delta_t = T - 100 \\)", type: "false" },
      { answer: "\\( \\Delta_t = T_i - 100 \\)", type: "false" },
    ],
  },
  {
    id: 92,
    Question:
      "92) Dinamika sırası silsiləvi artım sürəti ilə (əmsal şəklində) ifadə olunarsa, orta artım sürətini hansı düstur ilə hesablamaq olar?",
    answers: [
      {
        answer:
          "\\( \\bar{k} = \\sqrt[n]{k_1 \\cdot k_2 \\cdot \\ldots \\cdot k_n} \\)",
        type: "true",
      },
      { answer: "\\( k = \\frac{Y_n}{Y_1} \\)", type: "false" },
      { answer: "\\( T_i = k_i \\cdot 100 \\)", type: "false" },
      { answer: "\\( \\Delta_{t_i} = T_i - 100 \\)", type: "false" },
      {
        answer: "\\( \\bar{k} = n \\sqrt{\\frac{Y_n}{Y_1}} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 93,
    Question:
      "93) Yığımın quruluşunun təsviri üçün aşağıdakı qrafiklərdən hansını tətbiq etmək olar?",
    answers: [
      { answer: "Dairəvi", type: "true" },
      { answer: "Xətti", type: "false" },
      { answer: "Sütunlu", type: "false" },
      { answer: "Kvadrat", type: "false" },
      { answer: "Varzar işarələri", type: "false" },
    ],
  },
  {
    id: 94,
    Question:
      "94) Hadisələr arasındakı əlaqələrin öyrənilməsini xarakterizə etmək üçün hansı qrafik növündən istifadə etmək olar?",
    answers: [
      { answer: "Xətti", type: "true" },
      { answer: "Sütunlu", type: "false" },
      { answer: "Lentvari", type: "false" },
      { answer: "Kvadrat", type: "false" },
      { answer: "Dairəvi", type: "false" },
    ],
  },
  {
    id: 95,
    Question: "95) Orta mütləq artım hansı düsturla hesablanır?",
    answers: [
      { answer: "\\( \\Delta_y = \\frac{y_n - y_1}{n - 1} \\)", type: "true" },
      { answer: "\\( \\Delta = y_i - y_1 \\)", type: "false" },
      { answer: "\\( \\Delta_i = y_i - y_{i-1} \\)", type: "false" },
      { answer: "\\( k = \\frac{y_i}{y_1} \\)", type: "false" },
      { answer: "\\( \\Delta = T - 100 \\)", type: "false" },
    ],
  },
  {
    id: 96,
    Question: "96) Sadə orta xətti meyl hansı düsturla hesablanır?",
    answers: [
      {
        answer: "\\( \\bar{d} = \\frac{\\sum |x - \\bar{x}|}{n} \\)",
        type: "true",
      },
      { answer: "\\( R = x_{max} - x_{min} \\)", type: "false" },
      {
        answer:
          "\\( \\bar{d} = \\frac{\\sum |x - \\bar{x}| \\cdot f}{\\sum f} \\)",
        type: "false",
      },
      {
        answer: "\\( \\sigma^2 = \\frac{\\sum (x - \\bar{x})^2}{n} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\sigma = \\sqrt{\\frac{\\sum (x - \\bar{x})^2 f}{\\sum f}} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 97,
    Question: "97) Variasiya əmsalı hansı düsturla hesablanır?",
    answers: [
      {
        answer: "\\( v = \\frac{\\sigma}{\\bar{x}} \\cdot 100 \\)",
        type: "true",
      },
      {
        answer:
          "\\( \\bar{d} = \\frac{\\sum |x - \\bar{x}| \\cdot f}{\\sum f} \\)",
        type: "false",
      },
      {
        answer: "\\( \\sigma^2 = \\frac{\\sum (x - \\bar{x})^2 f}{\\sum f} \\)",
        type: "false",
      },
      {
        answer: "\\( \\sigma = \\sqrt{\\frac{\\sum (x - \\bar{x})^2}{n}} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\sigma = \\sqrt{\\frac{\\sum (x - \\bar{x})^2 f}{\\sum f}} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 98,
    Question:
      "98) Hansı variasiya göstəricisi nisbi (%) ifadə formasına malikdir?",
    answers: [
      { answer: "Variasiya əmsalı", type: "true" },
      { answer: "Variasiya genişliyi", type: "false" },
      { answer: "Orta xətti meyl", type: "false" },
      { answer: "Dispersiya", type: "false" },
      { answer: "Orta kvadratik meyl", type: "false" },
    ],
  },
  {
    id: 99,
    Question:
      "99) Planın yerinə yetirilməsi üzrə nisbi kəmiyyət hansı düsturla hesablanır?",
    answers: [
      { answer: "\\( k = \\frac{y_1}{y_{pl}} \\)", type: "true" },
      { answer: "\\( k = \\frac{y_{pl}}{y_1} \\)", type: "false" },
      { answer: "\\( k = \\frac{y_1}{y_0} \\)", type: "false" },
      { answer: "\\( k = \\frac{y_{pl}}{y_0} \\)", type: "false" },
      { answer: "\\( k = \\frac{y_0}{y_{pl}} \\)", type: "false" },
    ],
  },
  {
    id: 100,
    Question:
      "100) Taxılın məhsuldarlıq səviyyəsindən istifadə etməklə plan tapşırığı üzrə nisbi kəmiyyətin hesablanmasının düzgün yolunu göstərin:\n2011-ci il faktiki 30s\n2012-ci il plan 34s\n2013-cü il faktiki 32s",
    answers: [
      { answer: "\\( \\frac{34}{32} \\)", type: "true" },
      { answer: "\\( \\frac{33}{34} \\)", type: "false" },
      { answer: "\\( \\frac{34}{33} \\)", type: "false" },
      { answer: "\\( \\frac{32}{34} \\)", type: "false" },
      { answer: "\\( \\frac{32}{30} \\)", type: "false" },
    ],
  },
  {
    id: 101,
    Question: "101) Sosial-iqtisadi statistikanın obyekti nədir?",
    answers: [
      {
        answer:
          "Cəmiyyət və burada  baş verən kütləvi sosial-iqtisadi hadisə və proseslər",
        type: "true",
      },
      {
        answer: "Sosial-iqtisadi hadisələrin qanunauyğunluqları",
        type: "false",
      },
      {
        answer: "İnkişafımızda meydana çıxan nisbətlər və meyllər",
        type: "false",
      },
      { answer: "Cəmiyyətdə baş verən çoxsaylı hadisələr", type: "false" },
    ],
  },
  {
    id: 102,
    Question: "102) Sosial-iqtisadi statistikanın predmeti nədir?",
    answers: [
      {
        answer:
          "Maddi və mənəvi nemətlərin istehsalı, bölüşdürülməsi, istehlakı və onların dəyişməsi qanunauyğunluqları",
        type: "true",
      },
      {
        answer: "Sosial-iqtisadi hadisələrin kəmiyyət dəyişiklikləri",
        type: "false",
      },
      {
        answer: "Sosial-iqtisadi hadisələrin keyfiyyət dəyişiklikləri",
        type: "false",
      },
      {
        answer: "Kütləvi sosial-iqtisadi hadisələrin müxtəlif jəhətləri",
        type: "false",
      },
    ],
  },
  {
    id: 103,
    Question: "103) Statistik qanunauyğunluqlar nədir?",
    answers: [
      {
        answer: "Sosial-iqtisadi hadisə və proseslərin inkişaf meyli",
        type: "true",
      },
      {
        answer:
          "Müəyyən zaman və məkanda kütləvi sosial-iqtisadi hadisələrin statistika məlumatlarında təzahür edən inkişaf qanunauyğunluqları",
        type: "false",
      },
      {
        answer:
          "Sosial-iqtisadi hadisə və proseslərin inkişaf qanunauyğunluqları",
        type: "false",
      },
      {
        answer:
          "Sosial-iqtisadi hadisə və proseslər arasında olan qarşılıqlı əlaqə və asılılıqlar",
        type: "false",
      },
    ],
  },
  {
    id: 104,
    Question:
      "104) Sosial-iqtisadi statistikanın nəzəri əsasını nə təşkil edir?",
    answers: [
      { answer: "Sosial fəlsəfə və iqtisadi nəzəriyyə", type: "true" },
      { answer: "Ehtimal nəzəriyyəsi", type: "false" },
      { answer: "Riyazi statistika", type: "false" },
      { answer: "Ehtimal nəzəriyyəsi və riyazi statistika", type: "false" },
      { answer: "İqtisadi nəzəriyyə", type: "false" },
    ],
  },
  {
    id: 105,
    Question: "105) Sosial-iqtisadi statistikanın əsas vəzifəsi nədir?",
    answers: [
      {
        answer:
          "İdarəetmə strukturlarının öz funksiyalarını müvəffəqiyyətlə həyata keçirməsi üçün onların informasiyaya olan tələbatını ödəmək",
        type: "true",
      },
      {
        answer: "Baş verən hadisə və proseslər haqqında məlumat almaq",
        type: "false",
      },
      {
        answer: "Baş verən hadisə və proseslər haqqında məlumat vermək",
        type: "false",
      },
      {
        answer:
          "Baş verən hadisə və proseslər haqqında məlumat almaq və vermək",
        type: "false",
      },
    ],
  },
  {
    id: 106,
    Question:
      "106) Rəsmi statistikanın təkmilləşdirilməsinə dair III proqram nə vaxt qəbul olunmuşdur?",
    answers: [
      { answer: "2003-cü ildə", type: "true" },
      { answer: "2000-ci ildə", type: "false" },
      { answer: "2005-ci ildə", type: "false" },
      { answer: "2008-ci ildə", type: "false" },
      { answer: "2010-cu ildə", type: "false" },
    ],
  },
  {
    id: 107,
    Question:
      "107) «Azərbaycan Respublikasında beynəlxalq praktikada qəbul edilmiş uçot və statistika sisteminə keçilməsi haqqında» Prezident Fərmanı neçənci ildə verilmişdir?",
    answers: [
      { answer: "1992", type: "true" },
      { answer: "1993", type: "false" },
      { answer: "1998", type: "false" },
      { answer: "2000", type: "false" },
      { answer: "2003", type: "false" },
    ],
  },
  {
    id: 108,
    Question:
      "108) İqtisadi fəaliyyətin bütün növlərininin beynəlxalq standart sahə təsnifatı (BSST) neçə bölmədən ibarətdir?",
    answers: [
      { answer: "17", type: "true" },
      { answer: "12", type: "false" },
      { answer: "15", type: "false" },
      { answer: "22", type: "false" },
      { answer: "25", type: "false" },
    ],
  },
  {
    id: 109,
    Question: "109) İnstitusion vahid nədir?",
    answers: [
      { answer: "Təsnifatın xüsusi vahidi", type: "true" },
      { answer: "İnstitut (ali məktəb)", type: "false" },
      { answer: "İnstitutda (ali məktəbdə) bölmə", type: "false" },
      { answer: "Təşkilat forması", type: "false" },
    ],
  },
  {
    id: 110,
    Question:
      "110) Azərbaycanda kənd təsərrüfatında kiçik sahibkarlıq subyektinə hansı müəssisələr daxil edilir?",
    answers: [
      {
        answer:
          "işçilərinin sayı 15 nəfərdən və illik dövriyyəsi 100000 manatdan az olan müəssisələr",
        type: "true",
      },
      {
        answer:
          "işçilərinin sayı 20 nəfərdən və illik dövriyyəsi 100000 manatdan az olan müəssisələr",
        type: "false",
      },
      {
        answer:
          "işçilərinin sayı 15 nəfərdən və illik dövriyyəsi 200000 manatdan az olan müəssisələr",
        type: "false",
      },
      {
        answer:
          "işçilərinin sayı 30 nəfərdən və illik dövriyyəsi 200000 manatdan az olan müəssisələr",
        type: "false",
      },
      {
        answer:
          "işçilərinin sayı 20 nəfərdən və illik dövriyyəsi 150000 manatdan az olan müəssisələr",
        type: "false",
      },
    ],
  },
  {
    id: 111,
    Question:
      "111) Azərbaycanda sənayedə və tikintidə kiçik sahibkarlıq subyektinə hansı müəssisələr daxil edilir?",
    answers: [
      {
        answer:
          "işçilərinin sayı 40 nəfərdən və illik dövriyyəsi 200000 manatdan az olan müəssisələr",
        type: "true",
      },
      {
        answer:
          "işçilərinin sayı 30 nəfərdən və illik dövriyyəsi 200000 manatdan az olan müəssisələr",
        type: "false",
      },
      {
        answer:
          "işçilərinin sayı 40 nəfərdən və illik dövriyyəsi 300000 manatdan az olan müəssisələr",
        type: "false",
      },
      {
        answer:
          "işçilərinin sayı 30 nəfərdən və illik dövriyyəsi 150000 manatdan az olan müəssisələr",
        type: "false",
      },
      {
        answer:
          "işçilərinin sayı 40 nəfərdən və illik dövriyyəsi 250000 manatdan az olan müəssisələr",
        type: "false",
      },
    ],
  },
  {
    id: 112,
    Question: "112) Əhali haqqında əsas informasiya mənbəyi nədir?",
    answers: [
      { answer: "əhalinin siyahıya alınması", type: "true" },
      { answer: "əhalinin təbii və mexaniki hərəkətinin uçotu", type: "false" },
      { answer: "siyahılar", type: "false" },
      { answer: "reqistrlər", type: "false" },
      {
        answer: "birdəfəlik və seçmə müşahidələrinin materialları",
        type: "false",
      },
    ],
  },
  {
    id: 113,
    Question:
      "113) Əhalinin 2009-cu il siyahıya alınması zamanı hansı vaxt kritik an hesab edilirdi?",
    answers: [
      {
        answer:
          "aprel ayının 27-sindən 28-nə keçən gecə yerli vaxtla saat 1200",
        type: "true",
      },
      {
        answer: "aprel ayının 25-indən 26-na keçən gecə yerli vaxtla saat 1200",
        type: "false",
      },
      {
        answer:
          "aprel ayının 27-sindən 28-nə keçən gecə yerli vaxtla saat 1000",
        type: "false",
      },
      {
        answer:
          "aprel ayının 26-sından 27-nə keçən gecə yerli vaxtla saat 1200",
        type: "false",
      },
      {
        answer:
          "aprel ayının 26-sından 27-nə keçən gecə yerli vaxtla saat 1000",
        type: "false",
      },
    ],
  },
  {
    id: 114,
    Question:
      "114) Əhalinin sayına dair məlumat bərabər fasilə ilə müəyyən vaxt aralığına verilərsə, orta illik sayı orta kəmiyyətin hansı düsturu ilə hesablanmalıdır?",
    answers: [
      {
        answer:
          "\\( \\bar{S} = \\frac{\\frac{1}{2}S_1 + S_2 + S_3 + \\dots + \\frac{1}{2}S_n}{n - 1} \\)",
        type: "true",
      },
      { answer: "\\( \\bar{S} = \\frac{S_Я + S_a}{2} \\)", type: "false" },
      {
        answer: "\\( \\bar{S} = \\frac{\\sum S_i t_i}{\\sum t_i} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\bar{Я} = \\sqrt[n-1]{\\frac{S_n}{S_1}} , \\bar{Я} = \\sqrt[n]{Я_1 \\times Я_2 \\times \\dots \\times Я_n} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 115,
    Question:
      "115) Əhalinin sayına dair bərabər olmayan fasilələrlə məlumat verilərsə, ortalılıq sayı orta kəmiyyətin hansı düsturu ilə hesablanmalıdır?",
    answers: [
      {
        answer: "\\( \\bar{S} = \\frac{\\sum S_i t_i}{\\sum t_i} \\)",
        type: "true",
      },
      { answer: "\\( \\bar{S} = \\frac{S_Я + S_a}{2} \\)", type: "false" },
      {
        answer:
          "\\( \\bar{S} = \\frac{\\frac{1}{2}S_1 + S_2 + S_3 + \\dots + \\frac{1}{2}S_n}{n - 1} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\bar{Я} = \\sqrt[n-1]{\\frac{S_n}{S_1}} , \\bar{Я} = \\sqrt[n]{Я_1 \\times Я_2 \\times \\dots \\times Я_n} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 116,
    Question:
      "116) İlin əvvəlinə və axırına əhalinin sayına dair məlumat verilərsə, orta illik sayı orta kəmiyyətin hansı düstur ilə hesablanmalıdır?",
    answers: [
      { answer: "\\( \\bar{S} = \\frac{S_Я + S_a}{2} \\)", type: "true" },
      {
        answer:
          "\\( \\bar{S} = \\frac{\\frac{1}{2}S_1 + S_2 + S_3 + \\dots + \\frac{1}{2}S_n}{n - 1} \\)",
        type: "false",
      },
      {
        answer: "\\( \\bar{S} = \\frac{\\sum S_i t_i}{\\sum t_i} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\bar{Я} = \\sqrt[n-1]{\\frac{S_n}{S_1}} , \\bar{Я} = \\sqrt[n]{Я_1 \\times Я_2 \\times \\dots \\times Я_n} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 117,
    Question:
      "117) Əhalinin sayına dair məlumat bərabər fasilə ilə müəyyən vaxt anına verilərsə, orta illik sayı orta kəmiyyətin hansı düstur ilə hesablanmalıdır?",
    answers: [
      {
        answer:
          "\\( \\bar{S} = \\frac{\\frac{1}{2}S_1 + S_2 + S_3 + \\dots + \\frac{1}{2}S_n}{n - 1} \\)",
        type: "true",
      },
      { answer: "\\( \\bar{S} = \\frac{S_a + S_s}{2} \\)", type: "false" },
      {
        answer: "\\( \\bar{S} = \\frac{\\sum S_i t_i}{\\sum t_i} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\bar{Я} = \\sqrt[n-1]{\\frac{S_n}{S_1}} , \\bar{Я} = \\sqrt[n]{Я_1 \\times Я_2 \\times \\dots \\times Я_n} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 118,
    Question:
      "118) Uzun dövr ərzində əhalinin orta illik artım sürətini hesablamaq üçün orta kəmiyyətin hansı düsturundan istifadə olunmalıdır?",
    answers: [
      {
        answer:
          "\\( \\bar{Я} = \\sqrt[n-1]{\\frac{S_n}{S_1}} , \\bar{Я} = \\sqrt[n]{Я_1 \\times Я_2 \\times \\dots \\times Я_n} \\)",
        type: "true",
      },
      { answer: "\\( \\bar{S} = \\frac{S_a + S_s}{2} \\)", type: "false" },
      {
        answer: "\\( \\bar{S} = \\frac{\\sum S_i t_i}{\\sum t_i} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\bar{S} = \\frac{\\frac{1}{2}S_1 + S_2 + S_3 + \\dots + \\frac{1}{2}S_n}{n - 1} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 119,
    Question: "119) Əhalinin təbii artım əmsalı hansı düsturla hesablanır?",
    answers: [
      {
        answer: "\\( R_{t.a.} = \\frac{(M - N) \\cdot 1000}{\\bar{S}} \\)",
        type: "true",
      },
      {
        answer: "\\( R_d = \\frac{N \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
      {
        answer: "\\( R_ö = \\frac{M \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
      {
        answer: "\\( r_g = \\frac{G \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
      {
        answer: "\\( r_m = \\frac{(G - K.g.) \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 120,
    Question: "120) Əhalinin doğum əmsalı hansı düsturla hesablanır?",
    answers: [
      { answer: "\\( Я_d = \\frac{N \\cdot 1000}{\\bar{S}} \\)", type: "true" },
      {
        answer: "\\( Я_ö = \\frac{M \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
      {
        answer: "\\( я_g = \\frac{G \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
      {
        answer: "\\( Я_{t.a.} = \\frac{(M - N) \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
      {
        answer: "\\( я_m = \\frac{(G - K.g.) \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 121,
    Question: "121) Əhalinin ölüm əmsalı hansı düsturla hesablanır?",
    answers: [
      { answer: "\\( Я_ö = \\frac{M \\cdot 1000}{\\bar{S}} \\)", type: "true" },
      {
        answer: "\\( я_g = \\frac{G \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
      {
        answer: "\\( Я_{t.a.} = \\frac{(M - N) \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
      {
        answer: "\\( я_m = \\frac{(G - K.g.) \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
      {
        answer: "\\( Я_d = \\frac{N \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 122,
    Question: "122) Əhalinin Gəlmə əmsalı hansı düsturla hesablanır?",
    answers: [
      { answer: "\\( я_g = \\frac{G \\cdot 1000}{\\bar{S}} \\)", type: "true" },
      {
        answer: "\\( Я_ö = \\frac{M \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
      {
        answer: "\\( Я_{t.a.} = \\frac{(M - N) \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
      {
        answer: "\\( я_m = \\frac{(G - K.g.) \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
      {
        answer: "\\( Я_d = \\frac{N \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 123,
    Question: "123) Əhalinin Köçüb getmə əmsalı hansı düsturla hesablanır?",
    answers: [
      { answer: "Hesablamaq mümkün deyil", type: "true" },
      {
        answer: "\\( Я_ö = \\frac{M \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
      {
        answer: "\\( я_g = \\frac{G \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
      {
        answer: "\\( я_m = \\frac{(G - K.g.) \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
      {
        answer: "\\( Я_d = \\frac{N \\cdot 1000}{\\bar{S}} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 124,
    Question: "124) Əhalinin miqrasiya əmsalı hansı düsturla hesablanır?",
    answers: [
      {
        answer: "\\( y_m = \\frac{(G - K.g.) \\times 1000}{\\overline{S}} \\)",
        type: "true",
      },
      {
        answer:
          "\\( R_{l\\ddot{o}} = \\frac{M \\times 1000}{\\overline{S}} \\)",
        type: "false",
      },
      {
        answer: "\\( r_g = \\frac{G \\times 1000}{\\overline{S}} \\)",
        type: "false",
      },
      { answer: "Hesablamaq mümkün deyil", type: "false" },
      {
        answer: "\\( R_d = \\frac{N \\times 1000}{\\overline{S}} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 125,
    Question: "125) Kimlər işsiz hesab olunurlar?",
    answers: [
      {
        answer:
          "dövlət məşğulluq orqanlarında qeydə alınmış əmək qabiliyyətli vətəndaşlar",
        type: "true",
      },
      {
        answer:
          "əmək qabiliyyətli yaşda olan və istehsalatdan ayrılmaqla təhsil alan şəxslər",
        type: "false",
      },
      { answer: "hərbi xidmətçilər", type: "false" },
      {
        answer:
          "hamiləliyə görə körpəsinə qulluqla əlaqədar 3 ilə qədər məzuniyyətdə olan qadınlar",
        type: "false",
      },
    ],
  },
  {
    id: 126,
    Question:
      "126) Hansı göstərici işçi qüvvəsinin sayı və hərəkəti göstəricilərinə aid deyil?",
    answers: [
      { answer: "maksimum-mümkün iş vaxtı fondunun quruluşu", type: "true" },
      { answer: "işçilərin siyahı sayı", type: "false" },
      { answer: "işə qəbul üzrə dövriyyə əmsalı", type: "false" },
      { answer: "işdən çıxma üzrə dövriyyə əmsalı", type: "false" },
    ],
  },
  {
    id: 127,
    Question:
      "127) İşçi qüvvəsinin sayını səciyyələndirən əsas göstərici hansıdır?",
    answers: [
      { answer: "işçilərin siyahı sayı", type: "true" },
      { answer: "maksimum-mümkün iş vaxtı fondunun quruluşu", type: "false" },
      { answer: "işə qəbul üzrə dövriyyə əmsalı", type: "false" },
      { answer: "işdən çıxma üzrə dövriyyə əmsalı", type: "false" },
      { answer: "təqvim iş vaxtı fondunun quruluşu", type: "false" },
    ],
  },
  {
    id: 128,
    Question:
      "128) Hansı göstərici iş vaxtının istifadəsini səciyyələndirən göstəricilərə aid deyil?",
    answers: [
      { answer: "İşçilərin siyahı sayı", type: "true" },
      {
        answer: "İş vaxtının təqvim və maksimum-mümkün fondunun quruluşu",
        type: "false",
      },
      { answer: "İş ayının (həftənin) orta davametmə müddəti", type: "false" },
      { answer: "İş gününün orta davametmə müddəti", type: "false" },
    ],
  },
  {
    id: 129,
    Question:
      "129) Natural ifadədə əmək məhsuldarlığının müstəqim göstəricisi hansıdır?",
    answers: [
      { answer: "\\( W = \\frac{q}{T} \\)", type: "true" },
      { answer: "\\( W = \\frac{qp}{T} \\)", type: "false" },
      { answer: "\\( t = \\frac{T}{q} \\)", type: "false" },
      { answer: "\\( t = \\frac{T}{qp} \\)", type: "false" },
    ],
  },
  {
    id: 130,
    Question:
      "130) Natural ifadədə əmək məhsuldarlığının əks göstəricisi hansıdır?",
    answers: [
      { answer: "\\( t = \\frac{T}{q} \\)", type: "true" },
      { answer: "\\( W = \\frac{q}{T} \\)", type: "false" },
      { answer: "\\( W = \\frac{qp}{T} \\)", type: "false" },
      { answer: "\\( t = \\frac{T}{qp} \\)", type: "false" },
    ],
  },
  {
    id: 131,
    Question:
      "131) Dəyər ifadəsində əmək məhsuldarlığının müstəqim göstəricisi hansıdır?",
    answers: [
      { answer: "\\( W = \\frac{qp}{T} \\)", type: "true" },
      { answer: "\\( W = \\frac{q}{T} \\)", type: "false" },
      { answer: "\\( t = \\frac{T}{q} \\)", type: "false" },
      { answer: "\\( t = \\frac{T}{qp} \\)", type: "false" },
    ],
  },
  {
    id: 132,
    Question:
      "132) Dəyər ifadəsində əmək məhsuldarlığının əks göstəricisi hansıdır?",
    answers: [
      { answer: "\\( t = \\frac{T}{qp} \\)", type: "true" },
      { answer: "\\( W = \\frac{q}{T} \\)", type: "false" },
      { answer: "\\( W = \\frac{qp}{T} \\)", type: "false" },
      { answer: "\\( t = \\frac{T}{q} \\)", type: "false" },
    ],
  },
  {
    id: 133,
    Question:
      "133) Konkret məhsul növü üzrə əmək məhsuldarlığının dinamikasını hansı düstur ilə hesablamaq olar?",
    answers: [
      {
        answer:
          "\\( i_w = \\frac{T_o}{q_o} : \\frac{T_1}{q_1} = \\frac{t_o}{t_1}; \\quad W = \\frac{q}{T} \\)",
        type: "true",
      },
      { answer: "\\( W = \\frac{q}{T} \\)", type: "false" },
      { answer: "\\( W = \\frac{qp}{T} \\)", type: "false" },
      { answer: "\\( t = \\frac{T}{q} \\)", type: "false" },
      { answer: "\\( t = \\frac{T}{qp} \\)", type: "false" },
    ],
  },
  {
    id: 134,
    Question:
      "134) Konkret məhsul növü üzrə əmək məhsuldarlığının dinamikasını hansı düstur ilə hesablamaq olmaz?",
    answers: [
      { answer: "Heç biri ilə", type: "true" },
      { answer: "\\( W = \\frac{q}{T} \\)", type: "false" },
      { answer: "\\( W = \\frac{qp}{T} \\)", type: "false" },
      { answer: "\\( t = \\frac{T}{q} \\)", type: "false" },
      { answer: "\\( t = \\frac{T}{qp} \\)", type: "false" },
    ],
  },
  {
    id: 135,
    Question:
      "135) Konkret məhsul növü üzrə əmək məhsuldarlığının dinamikasını hansı düstur ilə hesablamaq olar?",
    answers: [
      {
        answer:
          "\\( i_w = \\frac{T_o}{q_o} : \\frac{T_1}{q_1} = \\frac{t_o}{t_1} \\)",
        type: "true",
      },
      { answer: "\\( W = \\frac{q}{T} \\)", type: "false" },
      { answer: "\\( W = \\frac{qp}{T} \\)", type: "false" },
      { answer: "\\( t = \\frac{T}{q} \\)", type: "false" },
      { answer: "\\( t = \\frac{T}{qp} \\)", type: "false" },
    ],
  },
  {
    id: 136,
    Question: "136) Əmək tutumu indeksi hansıdır?",
    answers: [
      {
        answer: "\\( J_t = \\frac{\\sum t_1 q_1}{\\sum t_0 q_1} \\)",
        type: "true",
      },
      { answer: "Heç biri", type: "false" },
      {
        answer: "\\( J_w = \\frac{\\sum t_0 q_1}{\\sum t_1 q_1} \\)",
        type: "false",
      },
      {
        answer:
          "\\( J_w = \\frac{\\sum q_0 P_0}{\\sum T_1}, \\quad \\frac{\\sum q_0 P_0}{\\sum T_0} \\)",
        type: "false",
      },
      {
        answer: "\\( J_w = \\frac{\\sum i_w T_1}{\\sum T_1} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 137,
    Question: "137) Əmək məhsuldarlığının dəyər indeksi hansıdır?",
    answers: [
      {
        answer:
          "\\( J_w = \\frac{\\sum q_0 P_0}{\\sum T_1}; \\quad \\frac{\\sum q_0 P_0}{\\sum T_0} \\)",
        type: "true",
      },
      { answer: "Heç biri", type: "false" },
      {
        answer: "\\( J_t = \\frac{\\sum t_1 q_1}{\\sum t_0 q_1} \\)",
        type: "false",
      },
      {
        answer: "\\( J_w = \\frac{\\sum t_0 q_1}{\\sum t_1 q_1} \\)",
        type: "false",
      },
      {
        answer: "\\( J_w = \\frac{\\sum i_w T_1}{\\sum T_1} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 138,
    Question: "138) Əmək məhsuldarlığının hesabı orta indeksi hansıdır?",
    answers: [
      {
        answer: "\\( J_w = \\frac{\\sum i_w T_1}{\\sum T_1} \\)",
        type: "true",
      },
      { answer: "Heç biri", type: "false" },
      {
        answer: "\\( J_t = \\frac{\\sum t_1 q_1}{\\sum t_0 q_1} \\)",
        type: "false",
      },
      {
        answer: "\\( J_w = \\frac{\\sum t_0 q_1}{\\sum t_1 q_1} \\)",
        type: "false",
      },
      {
        answer:
          "\\( J_w = \\frac{\\sum q_0 P_0}{\\sum T_1}, \\quad \\frac{\\sum q_0 P_0}{\\sum T_0} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 139,
    Question:
      "139) Orta əmək haqqı indeksini hansı düstur ilə hesablamaq olar?",
    answers: [
      {
        answer:
          "\\( \\frac{\\sum f_1 d_1}{\\sum f_0 d_0} = \\frac{\\sum f_1 d_1}{\\sum f_0 d_1} \\cdot \\frac{\\sum f_0 d_1}{\\sum f_0 d_0} \\)",
        type: "true",
      },
      {
        answer:
          "\\( J_w = \\frac{\\sum q_0 P_0}{\\sum T_1}, \\quad \\frac{\\sum q_0 P_0}{\\sum T_0} \\)",
        type: "false",
      },
      {
        answer: "\\( J_t = \\frac{\\sum t_1 q_1}{\\sum t_0 q_1} \\)",
        type: "false",
      },
      {
        answer: "\\( J_w = \\frac{\\sum t_0 q_1}{\\sum t_1 q_1} \\)",
        type: "false",
      },
      { answer: "Heç biri", type: "false" },
    ],
  },
  {
    id: 140,
    Question:
      "140) Orta əmək haqqı indeksini hansı düstur ilə hesablamaq olmaz?",
    answers: [
      { answer: "Heç biri ilə", type: "true" },
      {
        answer:
          "\\( J_w = \\frac{\\sum q_0 P_0}{\\sum T_1}, \\quad \\frac{\\sum q_0 P_0}{\\sum T_0} \\)",
        type: "false",
      },
      {
        answer: "\\( J_t = \\frac{\\sum t_1 q_1}{\\sum t_0 q_1} \\)",
        type: "false",
      },
      {
        answer: "\\( J_w = \\frac{\\sum t_0 q_1}{\\sum t_1 q_1} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 141,
    Question: "141. İqtisadi aktivlər nədir?",
    answers: [
      { answer: "balansın aktiv hissəsidir", type: "true" },
      { answer: "milli əmlakdır", type: "false" },
      {
        answer:
          "fərdi və ya kollektiv mülkiyyətdə olan obyektlər olmaqla, sahibinə istifadəsindən iqtisadi səmərə vəd edən əmlakdır (pul və ya maddi formada)",
        type: "false",
      },
      { answer: "milli sərvətdir", type: "false" },
      { answer: "təbii resurslardır", type: "false" },
    ],
  },
  {
    id: 142,
    Question: "142. Milli sərvət nədir?",
    answers: [
      {
        answer: "maddi, qeyri-maddi və maliyyə aktivlərinin məcmuyudur",
        type: "true",
      },
      { answer: "maddi aktivlərinin məcmuyudur", type: "false" },
      {
        answer: "qeyri-maddi və maliyyə aktivlərinin məcmuyudur",
        type: "false",
      },
      { answer: "maliyyə aktivlərinin məcmuyudur", type: "false" },
      { answer: "qeyri-maddi aktivlərinin məcmuyudur", type: "false" },
    ],
  },
  {
    id: 143,
    Question: "143. Milli əmlak nədir?",
    answers: [
      {
        answer:
          "insan əməyi ilə yaradılmış və toplanmış maddi nemətlər məcmuyudur",
        type: "true",
      },
      { answer: "milli sərvətdir", type: "false" },
      { answer: "təbii resurslardır", type: "false" },
      {
        answer: "maddi, qeyri-maddi və maliyyə aktivlərinin məcmuyudur",
        type: "false",
      },
    ],
  },
  {
    id: 144,
    Question: "144. Hansı göstərici təbii resurslara daxil deyil?",
    answers: [
      { answer: "əhali", type: "true" },
      { answer: "torpaq fondu", type: "false" },
      { answer: "meşə fondu", type: "false" },
      { answer: "hidroenerci resursları", type: "false" },
      { answer: "balıq sərvəti", type: "false" },
    ],
  },
  {
    id: 145,
    Question: "145. Əsas kapital (əsas fondlar) dedikdə nə nəzərdə tutulur?",
    answers: [
      {
        answer:
          "istehsal proseslərində dəfələrlə, dəyişilməz natural-maddi formada iştirak edən və öz dəyərini yaradılan məhsula və xidmətlərə tədrijən keçirən istehsal aktivlərinin məcmusu",
        type: "true",
      },
      {
        answer: "əmək cismlərinə bilavasitə təsir göstərən istehsal aktivləri",
        type: "false",
      },
      {
        answer: "xidmət müddəti bir ildən az olmayan obyektlər",
        type: "false",
      },
      {
        answer:
          "istehsal proseslərinin normal getməsi üçün şərait yaradan istehsal olunmuş aktivlərin məcmuyu",
        type: "false",
      },
    ],
  },
  {
    id: 146,
    Question:
      "146. Əsas kapitalın qiymətləndirmə metoduna aid olmayan bənd hansıdır?",
    answers: [
      { answer: "bazar dəyərilə", type: "true" },
      { answer: "tam ilk dəyərilə", type: "false" },
      { answer: "köhnəlməsini çıxmaqla ilk dəyəri ilə", type: "false" },
      { answer: "tam bərpa dəyərilə", type: "false" },
      { answer: "köhnəlməsini çıxmaqla bərpa dəyərilə", type: "false" },
    ],
  },
  {
    id: 147,
    Question:
      "147. Əsas kapitalın qiymətləndirmə metoduna aid olmayan bənd hansıdır?",
    answers: [
      { answer: "ləğv dəyərilə", type: "true" },
      { answer: "tam ilk dəyərilə", type: "false" },
      { answer: "köhnəlməsini çıxmaqla ilk dəyəri ilə", type: "false" },
      { answer: "tam bərpa dəyərilə", type: "false" },
      { answer: "köhnəlməsini çıxmaqla bərpa dəyərilə", type: "false" },
    ],
  },
  {
    id: 148,
    Question: "148. Köhnəlmə əmsalı hansı nisbətlə hesablanır?",
    answers: [
      {
        answer:
          "\\( \\frac{\\text{köhnəlmə məbləği}}{\\text{əsas kapitalın tam ilk (bərpa) dəyəri}} \\)",
        type: "true",
      },
      {
        answer:
          "\\( \\frac{\\text{ləğv olunan əsas kapitalın dəyəri}}{\\text{təzə işə salınan əsas kapitalın dəyəri}} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\frac{\\text{əsas kapitalın qalıq dəyəri}}{\\text{əsas kapitalın tam bərpa dəyəri}} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\frac{\\text{köhnəlmə məbləği}}{\\text{ilin axırına əsas kapitalın tam dəyəri}} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\frac{\\text{köhnəlmə məbləği}}{\\text{hesabat dövrünün axırına olan kapitalın dəyəri}} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 149,
    Question:
      "149. Əsas kapitalın yararlılıq dərəcəsini müəyyən etmək üçün yararlılıq əmsalı hansı nisbətlə hesablanır?",
    answers: [
      {
        answer:
          "\\( \\frac{\\text{əsas kapitalın qalıq dəyəri}}{\\text{əsas kapitalın tam bərpa dəyəri}} \\)",
        type: "true",
      },
      {
        answer:
          "\\( \\frac{\\text{ləğv olunan əsas kapitalın dəyəri}}{\\text{təzə işə salınan əsas kapitalın dəyəri}} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\frac{\\text{əsas kapitalın qalıq dəyəri}}{\\text{əsas kapitalın tam ilk (bərpa) dəyəri}} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\frac{\\text{il ərzində işə salınan təzə əsas kapital}}{\\text{ilin axırına əsas kapitalın tam dəyəri}} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\frac{\\text{hesabat ilində daxil olan kapitalın dəyəri}}{\\text{hesabat dövrünün axırına olan kapitalın dəyəri}} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 150,
    Question:
      "150) Əsas kapitalın təzələnməsinin intensivliyi hansı nisbətlə hesablanır?",
    answers: [
      {
        answer:
          "\\( \\frac{\\text{ləğv olunan əsas kapitalın dəyəri}}{\\text{təzə işə salınan əsas kapitalın dəyəri}} \\)",
        type: "true",
      },
      {
        answer:
          "\\( \\frac{\\text{əsas kapitalın qalıq dəyəri}}{\\text{əsas kapitalın tam ilk (bərpa) dəyəri}} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\frac{\\text{əsas kapitalın qalıq dəyəri}}{\\text{əsas kapitalın tam bərpa dəyəri}} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\frac{\\text{il ərzində işə salınan təzə əsas kapital}}{\\text{ilin axırına əsas kapitalın tam dəyəri}} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\frac{\\text{hesabat ilində daxil olan kapitalın dəyəri}}{\\text{hesabat dövrünün axırına olan kapitalın dəyəri}} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 151,
    Question: "151) Hansı hesab Azərbaycan Respublikasında MHS-nə daxil deyil?",
    answers: [
      { answer: "mənfəət hesabı", type: "true" },
      { answer: "əmtəə və xidmətlər hesabı", type: "false" },
      { answer: "istehsal hesabı", type: "false" },
      { answer: "gəlirlərin yaranması hesabı", type: "false" },
      { answer: "ilkin gəlirlərin bölüşdürülməsi hesabı", type: "false" },
    ],
  },
  {
    id: 152,
    Question:
      "152) Hansı hesab Azərbaycan Respublikasında MHS-nə daxil edilir?",
    answers: [
      { answer: "gəlirlərin təkrar bölüşdürülməsi hesabı", type: "true" },
      { answer: "mənfəət hesabı", type: "false" },
      { answer: "sərəncamda qalan gəlirin istifadəsi hesabı", type: "false" },
      { answer: "kapitalla əməliyyatlar hesabı", type: "false" },
      { answer: "maliyyə hesabı", type: "false" },
    ],
  },
  {
    id: 153,
    Question:
      "153) Hansı bənd ümumi daxili məhsulun hesablanma metodlarına aid deyil?",
    answers: [
      { answer: "istehlak", type: "true" },
      { answer: "istehsal", type: "false" },
      { answer: "bölgü", type: "false" },
      { answer: "son istifadə", type: "false" },
    ],
  },
  {
    id: 154,
    Question:
      "154) Hansı göstərici MHS-də əlavə edilmiş dəyərin tərkibinə daxildir?",
    answers: [
      { answer: "bank depozitləri", type: "true" },
      { answer: "amortizasiya ayırmaları", type: "false" },
      { answer: "əmək haqqı", type: "false" },
      { answer: "müəssisələrin mənfəəti", type: "false" },
      { answer: "ssuda kapitalı üçün faizlər", type: "false" },
    ],
  },
  {
    id: 155,
    Question:
      "155) Hansı məhsullar heyvandarlığın natural ifadədə məhsulu göstəricilərinə daxil deyil?",
    answers: [
      { answer: "hamısı daxildir", type: "true" },
      {
        answer:
          "kənd təsərrüfatı heyvanlarından gündəlik əldə olunan xam məhsullar (süd, yun, yumurta və s.)",
        type: "false",
      },
      {
        answer:
          "mal-qara və quşların böyüdülməsi məhsulları (bala alma, çəkidə artım)",
        type: "false",
      },
      { answer: "arıçılıq məhsulları (bal, mum və s.)", type: "false" },
      { answer: "balıqçılıq məhsulları", type: "false" },
    ],
  },
  {
    id: 156,
    Question:
      "156) Hansı göstərici mal dövriyyəsinin kateqoriyasına aid deyil?",
    answers: [
      { answer: "ticarət mərkəzlərində satış", type: "true" },
      { answer: "topdansatış", type: "false" },
      { answer: "pərakəndə satış", type: "false" },
      { answer: "ümumi dövriyyə", type: "false" },
      { answer: "xalis dövriyyə", type: "false" },
    ],
  },
  {
    id: 157,
    Question: "157) Hansı göstərici mal ehtiyatının növlərinə daxil deyil?",
    answers: [
      { answer: "Dövlətin ərzaq ehtiyatı fondu", type: "true" },
      {
        answer: "Ticarətin gündəlik tələbatını ödəyən cari mal ehtiyatı",
        type: "false",
      },
      {
        answer:
          "İlin mövsümlərinə uyğun ticarəti təşkil etmək üçün yaradılan mövsümi ehtiyatlar",
        type: "false",
      },
      {
        answer:
          "Çətin keçilən regionlar üçün yaradılmış təcili (sığorta) ehtiyatlar",
        type: "false",
      },
      { answer: "heç biri", type: "false" },
    ],
  },
  {
    id: 158,
    Question:
      "158) Müqavilədə nəzərdə tutulan bütün mallar üzrə öhdəliklərin yerinə yetirilməsinin ümumi indeksi hansıdır?",
    answers: [
      {
        answer: "\\( J_{qp} = \\frac{\\sum q_f P_f}{\\sum q_k P_k} \\)",
        type: "true",
      },
      { answer: "\\( n = \\frac{V}{C} \\)", type: "false" },
      { answer: "\\( t = \\frac{D}{n} \\)", type: "false" },
      { answer: "\\( i_q = \\frac{q_f}{q_k} \\)", type: "false" },
    ],
  },
  {
    id: 159,
    Question:
      "159) Yüklərin orta daşınma məsafəsini hansı düsturla hesablamaq olar?",
    answers: [
      { answer: "\\( \\bar{l} = \\frac{\\sum ql}{\\sum q} \\)", type: "true" },
      { answer: "∑ql", type: "false" },
      { answer: "\\( \\bar{q} = \\frac{\\sum ql}{\\sum l} \\)", type: "false" },
      { answer: "\\( \\bar{t} = \\frac{\\sum tq}{\\sum q} \\)", type: "false" },
      { answer: "\\( v = \\frac{\\sum lq}{\\sum tq} \\)", type: "false" },
    ],
  },
  {
    id: 160,
    Question:
      "160) Yüklərin orta daşınma müddətini hansı düsturla hesablamaq olar?",
    answers: [
      { answer: "\\( \\bar{t} = \\frac{\\sum tq}{\\sum q} \\)", type: "true" },
      { answer: "∑ql", type: "false" },
      { answer: "\\( \\bar{l} = \\frac{\\sum ql}{\\sum q} \\)", type: "false" },
      { answer: "\\( \\bar{q} = \\frac{\\sum ql}{\\sum l} \\)", type: "false" },
      { answer: "\\( v = \\frac{\\sum lq}{\\sum tq} \\)", type: "false" },
    ],
  },
  {
    id: 161,
    Question:
      "161) Yüklərin orta daşınma sürətini hansı düsturla hesablamaq olar?",
    answers: [
      { answer: "\\( v = \\frac{\\sum lq}{\\sum tq} \\)", type: "true" },
      { answer: "\\( \\bar{l} = \\frac{\\sum ql}{\\sum q} \\)", type: "false" },
      { answer: "\\( \\bar{q} = \\frac{\\sum ql}{\\sum l} \\)", type: "false" },
      { answer: "\\( \\bar{t} = \\frac{\\sum tq}{\\sum q} \\)", type: "false" },
      { answer: "∑ql", type: "false" },
    ],
  },
  {
    id: 162,
    Question: "162) Daşınmanın orta sıxlığını hansı düsturla hesablamaq olar?",
    answers: [
      { answer: "\\( \\bar{q} = \\frac{\\sum ql}{\\sum l} \\)", type: "true" },
      { answer: "∑ql", type: "false" },
      { answer: "\\( \\bar{l} = \\frac{\\sum ql}{\\sum q} \\)", type: "false" },
      { answer: "\\( \\bar{t} = \\frac{\\sum tq}{\\sum q} \\)", type: "false" },
      { answer: "\\( v = \\frac{\\sum lq}{\\sum tq} \\)", type: "false" },
    ],
  },
  {
    id: 163,
    Question:
      "163) Hansı qiymət MHS-də tətbiq edilən cari bazar qiymətlərinə aid deyil?",
    answers: [
      { answer: "pərakəndə satış qiyməti", type: "true" },
      { answer: "istehsalçının qiyməti", type: "false" },
      { answer: "alıcı qiyməti", type: "false" },
      { answer: "«fob» qiyməti", type: "false" },
      { answer: "«sif» qiyməti", type: "false" },
    ],
  },
  {
    id: 164,
    Question:
      "164) Hansı qiymətlər MHS-də tətbiq edilən cari bazar qiymətlərinə aid deyil?",
    answers: [
      { answer: "əsas qiymətlər", type: "true" },
      { answer: "istehsalçının qiyməti", type: "false" },
      { answer: "alıcı qiyməti", type: "false" },
      { answer: "«fob» qiyməti", type: "false" },
      { answer: "Topdan satış qiyməti", type: "false" },
    ],
  },
  {
    id: 165,
    Question:
      "165) İstehlak qiymətləri indekslərini hesablarkən hansı indeksdən istifadə edilir?",
    answers: [
      {
        answer: "\\( J^L_p = \\frac{\\sum P_1 q_0}{\\sum P_0 q_0} \\)",
        type: "true",
      },
      { answer: "\\( \\dot{I}_p = \\frac{P_1}{P_0} \\)", type: "false" },
      {
        answer: "\\( J^\\Pi_p = \\frac{\\sum P_1 q_1}{\\sum P_0 q_1} \\)",
        type: "false",
      },
      { answer: "Heç birindən", type: "false" },
    ],
  },
  {
    id: 166,
    Question:
      "166) Kənd təsərrüfatında satınalma qiymətinin dinamikasını öyrənərkən hansı indeksdən istifadə edilir?",
    answers: [
      {
        answer: "\\( J^\\Pi_p = \\frac{\\sum P_1 q_1}{\\sum P_0 q_1} \\)",
        type: "true",
      },
      { answer: "\\( \\dot{I}_p = \\frac{P_1}{P_0} \\)", type: "false" },
      {
        answer: "\\( J^L_p = \\frac{\\sum P_1 q_0}{\\sum P_0 q_0} \\)",
        type: "false",
      },
      { answer: "Heç birindən", type: "false" },
    ],
  },
  {
    id: 167,
    Question:
      "167) İnflyasiyanın dinamikasını hansı göstəricisi ilə müəyyən etmək olar?",
    answers: [
      {
        answer: "\\( N = \\frac{(J_t - J_{t-1}) \\cdot 100}{J_t} \\)",
        type: "true",
      },
      { answer: "\\( \\dot{I}_p = \\frac{P_1}{P_0} \\)", type: "false" },
      {
        answer: "\\( J^\\Pi_p = \\frac{\\sum P_1 q_1}{\\sum P_0 q_1} \\)",
        type: "false",
      },
      {
        answer: "\\( J^L_p = \\frac{\\sum P_1 q_0}{\\sum P_0 q_0} \\)",
        type: "false",
      },
      { answer: "Heç biri ilə", type: "false" },
    ],
  },
  {
    id: 168,
    Question: "168) Aşağıdakılardan hansı ümumdövlət maliyyəsinə daxil deyil?",
    answers: [
      {
        answer: "müxtəlif səviyyədə (respublika, bölgə və bələdiyyə) büdjələr",
        type: "true",
      },
      { answer: "bankların nizamnamə kapitalı", type: "false" },
      { answer: "dövlət kredit sistemi", type: "false" },
      { answer: "dövlət sığorta sistemi", type: "false" },
      { answer: "pensiya fondu", type: "false" },
    ],
  },
  {
    id: 169,
    Question:
      "169) Büdcə kəsiri neçə faizdən çox olmadıqda büdcə normal hesab olunur?",
    answers: [
      { answer: "3", type: "true" },
      { answer: "2", type: "false" },
      { answer: "4", type: "false" },
      { answer: "5", type: "false" },
      { answer: "10", type: "false" },
    ],
  },
  {
    id: 170,
    Question:
      "170) Hansı sığorta sahəsi sığorta bazarına aid deyil (mövcud deyil)?",
    answers: [
      { answer: "mədəniyyət sığortası", type: "true" },
      { answer: "əmlak sığortası", type: "false" },
      { answer: "şəxsi sığortası", type: "false" },
      { answer: "sosial sığorta", type: "false" },
      { answer: "məsuliyyət sığortası", type: "false" },
    ],
  },
  {
    id: 171,
    Question:
      "171) Aşağıdakı əmsallardan hansı müştərinin kredit qabiliyyətini və bankın kredit riskini təhlil etmək üçün istifadə edilən əmsallara aid deyil?",
    answers: [
      { answer: "Ötmə əmsalı", type: "true" },
      { answer: "Manevretmə əmsalı", type: "false" },
      { answer: "Örtmə əmsalı", type: "false" },
      { answer: "Borj əmsalı", type: "false" },
      { answer: "Maliyyə gərginliyi əmsalı", type: "false" },
    ],
  },
  {
    id: 172,
    Question:
      "172) Hansı göstərici krediti səciyyələndirən göstəricilər sisteminə daxil deyil?",
    answers: [
      { answer: "kreditin faizi", type: "true" },
      { answer: "verilən kreditin məbləği", type: "false" },
      { answer: "qaytarılan kreditin məbləği", type: "false" },
      { answer: "borcun qalığı", type: "false" },
      { answer: "kreditin orta müddəti", type: "false" },
    ],
  },
  {
    id: 173,
    Question: "173) Aşağıdakılardan hansı qiymətli kağız hesab edilmir?",
    answers: [
      { answer: "lotereya", type: "true" },
      { answer: "istiqraz", type: "false" },
      { answer: "səhm", type: "false" },
      { answer: "çek", type: "false" },
      { answer: "veksel", type: "false" },
    ],
  },
  {
    id: 174,
    Question: "174) Gömrük statistikası nə ilə məşğul olur?",
    answers: [
      {
        answer: "idxal və ixrac əməliyyatlarının uçotunu aparır",
        type: "true",
      },
      { answer: "xarici ölkələrlə əməkdaşlığı həyata keçirir", type: "false" },
      { answer: "xarici iqtisadi əlaqələri təşkil edir", type: "false" },
      { answer: "xarici ölkələrlə müqavilələr bağlayır", type: "false" },
    ],
  },
  {
    id: 175,
    Question:
      "175) İxracın dəyərinin qiymətləndirilməsi hansı qiymətlərlə aparılır?",
    answers: [
      { answer: "FOB qiymətləri ilə", type: "true" },
      { answer: "SİF qiymətləri ilə", type: "false" },
      {
        answer: "malı idxal edən ölkənin franko-sərhəd qiymətləri ilə",
        type: "false",
      },
      { answer: "bazar qiymətləri ilə", type: "false" },
    ],
  },
  {
    id: 176,
    Question:
      "176) İdxalın dəyərinin qiymətləndirilməsi hansı qiymətlərlə aparılır?",
    answers: [
      { answer: "SİF qiymətləri ilə", type: "true" },
      { answer: "FOB qiymətləri ilə", type: "false" },
      {
        answer: "malı idxal edən ölkənin franko-sərhəd qiymətləri ilə",
        type: "false",
      },
      { answer: "bazar qiymətləri ilə", type: "false" },
    ],
  },
  {
    id: 177,
    Question: "177) Gömrük statistikasında əsas sənəd hansıdır?",
    answers: [
      { answer: "gömrük bəyannaməsi", type: "true" },
      { answer: "çek", type: "false" },
      { answer: "qaimə", type: "false" },
      { answer: "sertifikat", type: "false" },
      { answer: "qəbz", type: "false" },
    ],
  },
  {
    id: 178,
    Question:
      "178) Xarici ticarət statistikasının əsas göstəricilərinə aid olmayan göstərici hansıdır?",
    answers: [
      { answer: "məhsulun maya dəyəri", type: "true" },
      { answer: "idxal", type: "false" },
      { answer: "ixrac", type: "false" },
      { answer: "ticarət saldosu", type: "false" },
      { answer: "Xarici ticarət şəraiti", type: "false" },
    ],
  },
  {
    id: 179,
    Question:
      "179) Tədiyə balansında xidmətlərin təsnifatına daxil olmayan xidmət növü hansıdır?",
    answers: [
      { answer: "baytarlıq xidməti", type: "true" },
      { answer: "nəqliyyat xidmətləri", type: "false" },
      { answer: "rabitə xidmətləri", type: "false" },
      { answer: "sığorta xidməti", type: "false" },
      { answer: "maliyyə xidmətləri", type: "false" },
    ],
  },
  {
    id: 180,
    Question:
      "180) Tədiyə balansını tərtib etmək üçün istifadə edilməyən məlumat mənbəyi hansıdır?",
    answers: [
      { answer: "əhalinin siyahıyaalınma məlumatları", type: "true" },
      { answer: "xarici ticarət statistikasının məlumatları", type: "false" },
      {
        answer: "beynəlxalq tədiyələr statistikası məlumatları",
        type: "false",
      },
      {
        answer:
          "kredit idarələrinin və qeyri-maliyyə təşkilatlarının pul vəsaitləri haqqında məlumatlar",
        type: "false",
      },
      { answer: "Mərkəzi Bankın daxili sənədləri", type: "false" },
    ],
  },
  {
    id: 181,
    Question:
      "181) Məhsulun (iş və xidmətlərin) maya dəyərini əmələ gətirən xərclər iqtisadi məzmununa görə verilmiş qruplaşdırılmasına hansı xərc ünsürü daxil deyil?",
    answers: [
      { answer: "ekoloji xərclər", type: "true" },
      {
        answer:
          "material xərcləri (qaytarılan tullantıların dəyəri çıxılmaqla)",
        type: "false",
      },
      { answer: "əmək haqqı xərcləri", type: "false" },
      { answer: "sosial ehtiyaclara ayırmalar", type: "false" },
      { answer: "əsas fondların amortizasiyası (köhnəlməsi)", type: "false" },
    ],
  },
  {
    id: 182,
    Question:
      "182) Kənd təsərrüfatında məhsul vahidinin maya dəyəri nə vaxt hesablanır?",
    answers: [
      { answer: "ildə bir dəfə və ancaq ilin axırında", type: "true" },
      { answer: "məhsul yığımı başa çatdıqdan sonra", type: "false" },
      { answer: "hər rübdə", type: "false" },
      { answer: "hər 6 aydan bir", type: "false" },
      { answer: "istehsal başa çatdıqdan sonra", type: "false" },
    ],
  },
  {
    id: 183,
    Question:
      "183) Hansı xərclər maddəsi yalnız kənd təsərrüfatı üçün səciyyəvidir?",
    answers: [
      { answer: "gübrə", type: "true" },
      { answer: "əmək haqqı xərcləri", type: "false" },
      { answer: "sosial ehtiyaclara ayırmalar", type: "false" },
      { answer: "əsas fondların amortizasiyası (köhnəlməsi)", type: "false" },
      { answer: "heç biri", type: "false" },
    ],
  },
  {
    id: 184,
    Question:
      "184) Hansı göstərici əhalinin həyat səviyyəsini öyrənmək üçün istifadə olunan sosial-iqtisadi indikatorlara aid deyil?",
    answers: [
      {
        answer: "əhalinin ailə vəziyyətini səciyyələndirən göstəricilər",
        type: "true",
      },
      {
        answer:
          "əhalinin həyat səviyyəsinin və sosial inkişafının ümumi (inteqral) indikatorları",
        type: "false",
      },
      {
        answer: "əhalinin şəxsi gəlirlərini səciyyələndirən göstəricilər",
        type: "false",
      },
      { answer: "əhalinin xərcləri və istehlakı göstəriciləri", type: "false" },
      {
        answer: "həyat səviyyəsinə görə əhalinin diferensiyası göstəriciləri",
        type: "false",
      },
    ],
  },
  {
    id: 185,
    Question:
      "185) Hansı göstərici Milli hesablar sistemi çərçivəsində hesablanan əhalinin həyat səviyyəsini səciyyələndirən makroiqtisadi indikatorlara aid deyil?",
    answers: [
      { answer: "əhalinin illik gəliri", type: "true" },
      {
        answer: "ev təsərrüfatlarının sərəncamında qalan gəliri",
        type: "false",
      },
      { answer: "düzəliş verilmiş sərəncamda qalan gəlir", type: "false" },
      { answer: "real sərəncamda qalan gəlir", type: "false" },
      { answer: "əhalinin faktiki son istehlakı", type: "false" },
    ],
  },
  {
    id: 186,
    Question:
      "186) Laspeyres İstehlak qiymətləri indeksi hansı düsturla hesablanır?",
    answers: [
      { answer: "Paaşe", type: "true" },
      { answer: "Sterjes", type: "false" },
      { answer: "Yul", type: "false" },
      { answer: "Kendel", type: "false" },
    ],
  },
  {
    id: 187,
    Question: "187) İstehlak səbəti nədir?",
    answers: [
      { answer: "mal və xidmətlərin sabit toplusu", type: "true" },
      { answer: "alış-veriş üçün istifadə edilən səbət", type: "false" },
      { answer: "alıcıların istifadə etdikləri çanta", type: "false" },
      {
        answer: "marketdə müştərilərə təqdim edilən “arabacıq”",
        type: "false",
      },
    ],
  },
  {
    id: 188,
    Question:
      "188) Verilmiş düstur necə adlanır?  \\(J_p = \\frac{\\sum P_1 q_o}{\\sum P_0 q_o} = \\frac{\\sum i_p x P_0 q_o}{\\sum P_0 q_o} \\)",
    answers: [
      {
        answer: "Laspeyres",
        type: "true",
      },
      { answer: "Paaşe", type: "false" },
      { answer: "Sterjes", type: "false" },
      { answer: "Yul", type: "false" },
      { answer: "Kendel", type: "false" },
    ],
  },
  {
    id: 189,
    Question: "189) Yaşayış minimumu dedikdə nə başa düşülür?",
    answers: [
      {
        answer:
          "ən mühüm nemət və xidmətlərin minimal səviyyədə istehlakını  təmin etmək üçün kifayət edən gəlirin məbləği",
        type: "true",
      },
      {
        answer: "minimum əmək haqqı məbləğinə düşən mal və xidmətlərin miqdarı",
        type: "false",
      },
      {
        answer: "ən qənaətcil şəxsin istehlak xərclərinin həcmi",
        type: "false",
      },
      {
        answer:
          "yoxsulluq səviyyəsində olan insanların istehlak xərclərinin həcmi",
        type: "false",
      },
    ],
  },
  {
    id: 190,
    Question:
      "190) Hansı göstərici əhalinin həyat səviyyəsinə görə diferensiasiyasını qiymətləndirmək üçün istifadə olunan göstəricilərə aid deyil?",
    answers: [
      { answer: "əhalinin mənzil şəraiti", type: "true" },
      {
        answer:
          "hər nəfərə düşən pul gəlirlərinin səviyyəsinə görə əhalinin bölgüsü",
        type: "false",
      },
      {
        answer: "əhalinin müxtəlif qrupları arasında pul gəlirlərinin bölgüsü",
        type: "false",
      },
      { answer: "gəlirlərin təmərküzləşməsi əmsalı", type: "false" },
      { answer: "kasıblıq əmsalı", type: "false" },
    ],
  },
  {
    id: 191,
    Question:
      "191) İnsanın inkişaf indeksi insanın inkişafını səciyyələndirən hansı üç əsas komponentin ümumiləşdirici göstəricisidir?",
    answers: [
      {
        answer:
          "ömür müddətinin, təhsil səviyyəsinin və adambaşına düşən ÜDM-un səviyyəsinin",
        type: "true",
      },
      {
        answer:
          "sağlamlıq səviyyəsinin, təhsil səviyyəsinin və adambaşına düşən ÜDM-un səviyyəsinin",
        type: "false",
      },
      {
        answer:
          "ömür müddətinin, sağlamlıq səviyyəsinin və adambaşına düşən ÜDM-un səviyyəsinin",
        type: "false",
      },
      {
        answer:
          "ömür müddətinin, təhsil səviyyəsinin və sağlamlıq səviyyəsinin",
        type: "false",
      },
    ],
  },
  {
    id: 192,
    Question:
      "192) Əhalinin həyat səviyyəsinə dair statistik informasiyanın əsas mənbələri aşağıdakılardır:",
    answers: [
      { answer: "xarici iqtisadi əlaqələr statistikası", type: "true" },
      { answer: "əhalinin pul gəlirləri və xərcləri balansı", type: "false" },
      { answer: "əhali statistikası", type: "false" },
      { answer: "əmtəə və xidmətlər bazarı statistikası", type: "false" },
      { answer: "ev təsərrüfatlarının büdcələri statistikası", type: "false" },
    ],
  },
  {
    id: 193,
    Question:
      "193) Aşağıdakılardan hansı mənzillərin abadlığını səciyyələndirən komunal xidmət növlərinə aid deyil?",
    answers: [
      { answer: "kabel telviziya xətti ilə təmin olunma", type: "true" },
      { answer: "elektrik işığı", type: "false" },
      { answer: "su xətti", type: "false" },
      { answer: "kanalizasiya", type: "false" },
      {
        answer: "mərkəzi istiliklə və qaynar su ilə təmin olunma",
        type: "false",
      },
    ],
  },
  {
    id: 194,
    Question: "194) Sənaye xarakterli olmayan iş və ya xidmət hansıdır?",
    answers: [
      { answer: "fotoqraflar", type: "true" },
      {
        answer: "ayaqqabı və paltarların fərdi tikişi və təmiri",
        type: "false",
      },
      { answer: "metal məmulatların təmiri", type: "false" },
      { answer: "mebelin təmiri", type: "false" },
      { answer: "trikotajın təmiri", type: "false" },
    ],
  },
  {
    id: 195,
    Question:
      "195) Hansı göstərici əhaliyə nəqliyyat xidməti statistikasına aid deyil?",
    answers: [
      { answer: "yük daşımalarının həcmi", type: "true" },
      { answer: "sərnişin dövriyyəsi", type: "false" },
      { answer: "əhalinin hərəkət etmə əmsalı", type: "false" },
      { answer: "sərnişinin orta hərəkət sürəti", type: "false" },
      { answer: "heç biri", type: "false" },
    ],
  },
  {
    id: 196,
    Question: "196) Əhalinin savadlılıq səviyyəsi göstəricisi necə hesablanır?",
    answers: [
      {
        answer:
          "savadlı əhalinin sayını 100-ə vurub, 9-49 yaşlı əhalinin sayına bölməklə",
        type: "true",
      },
      {
        answer:
          "savadlı əhalinin sayını 100-ə vurub, əhalinin orta illik sayına bölməklə",
        type: "false",
      },
      {
        answer:
          "savadlı əhalinin sayını 100-ə vurub, 8-18 yaşlı əhalinin sayına bölməklə",
        type: "false",
      },
      {
        answer:
          "savadlı əhalinin sayını 100-ə vurub, 9-60 yaşlı əhalinin sayına bölməklə",
        type: "false",
      },
      {
        answer:
          "savadlı əhalinin sayını 100-ə vurub, 9-35 yaşlı əhalinin sayına bölməklə",
        type: "false",
      },
    ],
  },
  {
    id: 197,
    Question: "197) Kimlər savadlı şəxs hesab olunur?",
    answers: [
      {
        answer:
          "müəyyən dildə yazıb-oxuya bilən və yaxud heç olmasa oxuya bilənlər",
        type: "true",
      },
      { answer: "orta məktəbi bitirənlər", type: "false" },
      { answer: "orta ixtisas məktəbini bitirənlər", type: "false" },
      { answer: "ali təhsili olanlar", type: "false" },
      { answer: "əlifbanı bilənlər", type: "false" },
    ],
  },
  {
    id: 198,
    Question: "198) Hansı göstərici maddi mədəniyyətə aiddir?",
    answers: [
      { answer: "adamların əmək vərdişləri", type: "true" },
      { answer: "elmin vəziyyəti", type: "false" },
      { answer: "maarifin vəziyyəti", type: "false" },
      { answer: "incəsənətin vəziyyəti", type: "false" },
      { answer: "ictimai təfəkkürün vəziyyəti", type: "false" },
    ],
  },
  {
    id: 199,
    Question: "199) Hansı göstərici mənəvi mədəniyyətə aiddir?",
    answers: [
      { answer: "elmin vəziyyəti", type: "true" },
      { answer: "məhsuldar qüvvələrin vəziyyəti", type: "false" },
      { answer: "adamların əmək vərdişləri", type: "false" },
      { answer: "heç biri", type: "false" },
    ],
  },
  {
    id: 200,
    Question: "200) Aşağıdakılardan hansı mədəniyyət idarəsi deyil?",
    answers: [
      { answer: "zoopark", type: "true" },
      { answer: "teatr", type: "false" },
      { answer: "kitabxana", type: "false" },
      { answer: "muzey", type: "false" },
      { answer: "klub", type: "false" },
    ],
  },
  {
    id: 201,
    Question:
      "201) “Statistika” termininin mahiyyətini düzgün ifadə edən variantı seçin Statistika:",
    answers: [
      {
        answer: "Müxtəlif ictimai hadisələr haqqında məlumatları toplayır",
        type: "true",
      },
      { answer: "Müxtəlif statistik məcmuələr deməkdir", type: "false" },
      { answer: "Elmin xüsusi sahəsidir", type: "false" },
      { answer: "Müxtəlif növ rəqəm məlumatları deməkdir", type: "false" },
      {
        answer: "Cədvəllərdə əks etdirilmiş rəqəmlər sırası deməkdir",
        type: "false",
      },
    ],
  },
  {
    id: 202,
    Question: "202) Statistika termini ilk dəfə kim tərəfindən işlədilmişdir?",
    answers: [
      { answer: "Q. Konrinq", type: "true" },
      { answer: "A. Şletser", type: "false" },
      { answer: "Q. Ahenval", type: "false" },
      { answer: "E. Qalley", type: "false" },
      { answer: "C. Qraunt", type: "false" },
    ],
  },
  {
    id: 203,
    Question:
      "203) XII əsrin ikinci yarısında Almaniyada meydana gəlmiş dövlətşünaslıq məktəbinin əsası kim tərəfindən qoyulmuşdur?",
    answers: [
      { answer: "Q. Konrinq", type: "true" },
      { answer: "Q. Ahenval", type: "false" },
      { answer: "A. Şletser", type: "false" },
      { answer: "E. Qalley", type: "false" },
      { answer: "U. Petti", type: "false" },
    ],
  },
  {
    id: 204,
    Question:
      "204) XVII əsrin ortalarında İngiltərədə meydana gəlmiş “Siyasi hesabdarlıq” məktəbinin əsasını kimlər qoymuşdur?",
    answers: [
      { answer: "C. Qraunt, U. Petti, E. Qalley", type: "true" },
      { answer: "F. Qalton, E. Qalley, K. Pirson", type: "false" },
      { answer: "K. Pirson, U. Petti, E. Qalley", type: "false" },
      { answer: "A. Ketler, C. Qraunt, F. Qalton", type: "false" },
      { answer: "C. Qraunt, K. Pirson, A. Ketler", type: "false" },
    ],
  },
  {
    id: 205,
    Question: "205) Statistika ilə  məşğul olan şəxslər necə adlandırılır?",
    answers: [
      { answer: "Statistik", type: "true" },
      { answer: "Statist", type: "false" },
      { answer: "Məlumatları toplayan", type: "false" },
      { answer: "Məlumatları ümumiləşdirən", type: "false" },
      { answer: "Siyahıya alan", type: "false" },
    ],
  },
  {
    id: 206,
    Question:
      "206) Statistikanın bir elm kimi nə vaxt meydana gəldiyini düzgün əks etdirən variantı tapın.",
    answers: [
      { answer: "XVII əsrdə", type: "true" },
      { answer: "XIX əsrdə", type: "false" },
      { answer: "VII əsrdə", type: "false" },
      { answer: "Eramızdan əvvəl", type: "false" },
      { answer: "XVI əsrdə", type: "false" },
    ],
  },
  {
    id: 207,
    Question:
      "207) Statistikanın predmetini düzgün əks etdirən variantı seçin:",
    answers: [
      {
        answer:
          "Dəyişən kütləvi ictimai hadisələrin kəmiyyət tərəfi və keyfiyyət müəyyənliyi",
        type: "true",
      },
      { answer: "Statistik göstəricilər", type: "false" },
      { answer: "Statistik müşahidə", type: "false" },
      { answer: "Qruplaşdırma və təsnifləşdirmə", type: "false" },
      { answer: "Statistikanın metodu", type: "false" },
    ],
  },
  {
    id: 208,
    Question: "208) Statistika hansı sözlərdən əmələ gəlmişdir?",
    answers: [
      { answer: "Status, statistik, stato", type: "true" },
      { answer: "Kunde-status", type: "false" },
      { answer: "Stato-kunde", type: "false" },
      { answer: "Statistika-kunde", type: "false" },
      { answer: "Kunde-statistik", type: "false" },
    ],
  },
  {
    id: 209,
    Question: "209) Statistika elminin hansı bölmələri vardır?",
    answers: [
      {
        answer:
          "Statistika nəzəriyyəsi, sosial-iqtisadi statistika, sahələr statistikası",
        type: "true",
      },
      {
        answer:
          "Ehtimal nəzəriyyəsi, statistika nəzəriyyəsi, sənaye statistikası",
        type: "false",
      },
      {
        answer:
          "Sahələr statistikası, əhali statistikası, statistika nəzəriyyəsi",
        type: "false",
      },
      {
        answer: "Riyazi statistika, sahələr statistikası, sosial statistika",
        type: "false",
      },
      {
        answer: "Riyazi statistika, ehtimal nəzəriyyəsi, əhali statistikası",
        type: "false",
      },
    ],
  },
  {
    id: 210,
    Question: "210) Aşağıdakı əlamətlərdən hansı dəyişəndir?",
    answers: [
      { answer: "Dolların məzənnəsi", type: "true" },
      { answer: "Suyun qaynama temperaturu", type: "false" },
      { answer: "Əmtəənin bir kiloqramının çəkisi", type: "false" },
      { answer: "Səhrada insanın hərəkətetmə sürəti", type: "false" },
      { answer: "Avtomobilin sürəti", type: "false" },
    ],
  },
  {
    id: 211,
    Question: "211) Variasiya:",
    answers: [
      { answer: "Əlamətin qiymətlərinin dəyişməsi deməkdir", type: "true" },
      {
        answer:
          "Məkan daxilində statistik toplunun strukturunun dəyişməsi deməkdir",
        type: "false",
      },
      {
        answer: "Zaman daxilində kütləvi hadisələrin dəyişməsi deməkdir",
        type: "false",
      },
      { answer: "Toplunun tərkibinin dəyişməsi deməkdir", type: "false" },
      { answer: "Toplunun kəmiyyətinin dəyişməsi deməkdir", type: "false" },
    ],
  },
  {
    id: 212,
    Question: "212) Statistikanın tədqiqat metodlarına aiddir:",
    answers: [
      {
        answer:
          "Statistik müşahidə, yekunlaşdırma və qruplaşdırma, ümumiləşdirici göstəricilər",
        type: "true",
      },
      {
        answer: "Statistik müşahidə, indekslər, orta kəmiyyətlər",
        type: "false",
      },
      {
        answer: "Yekunlaşdırma, qruplaşdırma, nisbi kəmiyyətlər",
        type: "false",
      },
      {
        answer: "Seçmə müşahidəsi, qruplaşdırma, indeks metodu",
        type: "false",
      },
      {
        answer: "Qruplaşdırma, sistemləşdirmə, orta kəmiyyətlər",
        type: "false",
      },
    ],
  },
  {
    id: 213,
    Question:
      "213) Azərbaycan Respublikasında statistika işləri hansı qanunla tənzimlənir:",
    answers: [
      { answer: "Rəsmi Statistika haqqında qanun", type: "true" },
      { answer: "Müəssisə haqqında qanun", type: "false" },
      { answer: "Mülki məcəllə", type: "false" },
      { answer: "İnformasiya əldə etmək haqqında qanun", type: "false" },
      { answer: "Səhmdar cəmiyyəti haqqında qanun", type: "false" },
    ],
  },
  {
    id: 214,
    Question:
      "214) Azərbaycan Respublikasının “Rəsmi statistika haqqında” qanunu nə vaxt qəbul edilmişdir?",
    answers: [
      { answer: "18 fevral 1994-cü il", type: "true" },
      { answer: "18 fevral 1993-cü il", type: "false" },
      { answer: "28 mart 1994-cü il", type: "false" },
      { answer: "18 fevral 1995-ci il", type: "false" },
      { answer: "18 fevral 1992-ci il", type: "false" },
    ],
  },
  {
    id: 215,
    Question:
      "215) Azərbaycan Respublikası Dövlət Statistika Komitəsinin sədri kim tərəfindən təyin edilir:",
    answers: [
      { answer: "Azərbaycan Respublikasının Prezidenti", type: "true" },
      { answer: "Azərbaycan Respublikası Maliyyə Naziri", type: "false" },
      { answer: "Azərbaycan Respublikasının Vergilər Naziri", type: "false" },
      { answer: "Azərbaycan Respublikasının Baş Naziri", type: "false" },
      {
        answer: "Azərbaycan Respublikası İqtisadi İnkişaf  Naziri",
        type: "false",
      },
    ],
  },
  {
    id: 216,
    Question:
      "216) “Azərbaycan Respublikası Dövlət Statistika Komitəsi haqqında əsasnamə” nə vaxt təsdiq edilmişdir?",
    answers: [
      { answer: "24 iyun 2009-cu il", type: "true" },
      { answer: "24 iyun 2008-ci il", type: "false" },
      { answer: "24 may 2009-cu il", type: "false" },
      { answer: "24 iyun 2010-cu il", type: "false" },
      { answer: "26 iyun 2009-cu il", type: "false" },
    ],
  },
  {
    id: 217,
    Question: "217) Uçotun hansı növləri vardır?",
    answers: [
      {
        answer: "Mühasibat (maliyyə), operativ-texniki və statistika",
        type: "true",
      },
      { answer: "Maliyyə, kommersiya və operativ-texniki", type: "false" },
      { answer: "Dövlət, maliyyə və mühasibat uçotu", type: "false" },
      { answer: "Statistika, kommersiya və operativ-texniki", type: "false" },
      { answer: "Maliyyə (mühasibat), kommersiya, statistika", type: "false" },
    ],
  },
  {
    id: 218,
    Question:
      "218) Statistik müşahidə müəllimin, yazıçının, rəssamın, şairin müşahidəsindən nə ilə fərqlənir?",
    answers: [
      {
        answer: "Müşahidənin elmi təşkili və plana uyğunluğuna görə",
        type: "true",
      },
      { answer: "Müşahidələrin vaxtına görə", type: "false" },
      { answer: "Müşahidənin obyektinə görə", type: "false" },
      { answer: "Müşahidənin məqsədinə görə", type: "false" },
      { answer: "Müşahidənin aparılması üsullarına görə", type: "false" },
    ],
  },
  {
    id: 219,
    Question: "219) Müşahidənin obyekti dedikdə nə nəzərdə tutulur:",
    answers: [
      { answer: "Toplu vahidi", type: "true" },
      { answer: "Müşahidə vahidi", type: "false" },
      { answer: "Statistik toplu vahidi", type: "false" },
      { answer: "Hesabat vahidi", type: "false" },
      { answer: "Müşahidənin proqramı", type: "false" },
    ],
  },
  {
    id: 220,
    Question: "220) Müşahidənin planı hansı hissələrdən ibarətdir:",
    answers: [
      { answer: "Proqram-metodoloji və təşkilati məsələlər", type: "true" },
      { answer: "Təşkilati məsələlər və təşkilati-proqram", type: "false" },
      { answer: "Proqnoz materialları və təşkilati məsələlər", type: "false" },
      { answer: "Təşkilati-proqram və proqnoz materialları", type: "false" },
      { answer: "Proqram-metodoloji və təşkilati məsələlər", type: "false" },
    ],
  },
  {
    id: 221,
    Question: "221) Göstəricilərin əks etdirildiyi sənəd necə adlanır:",
    answers: [
      { answer: "Formulyar", type: "true" },
      { answer: "Qaimə", type: "false" },
      { answer: "Anket", type: "false" },
      { answer: "Hesabat", type: "false" },
      { answer: "Təlimat", type: "false" },
    ],
  },
  {
    id: 222,
    Question:
      "222) Statistik müşahidənin formalarının düzgün əks etdirildiyi variantı müəyyən edin:",
    answers: [
      {
        answer: "Hesabat təqdim etmək və xüsusi təşkil olunmuş müşahidə",
        type: "true",
      },
      { answer: "Cari müşahidə və vaxtaşırı müşahidə", type: "false" },
      { answer: "Birdəfəlik və cari müşahidə", type: "false" },
      { answer: "Vaxtaşırı və birdəfəlik müşahidə", type: "false" },
      { answer: "Xüsusi təşkil olunmuş və cari müşahidə", type: "false" },
    ],
  },
  {
    id: 223,
    Question:
      "223) Topludakı vahidlərin əhatə olunmasına görə müşahidənin növlərini düzgün əks etdirən variantı seçin:",
    answers: [
      { answer: "Baştan-başa və başdan-başa olmayan müşahidə", type: "true" },
      { answer: "Cari və vaxtaşırı müşahidə", type: "false" },
      { answer: "Birdəfəlik və vaxtaşırı müşahidə", type: "false" },
      { answer: "Cari və birdəfəlik müşahidə", type: "false" },
      { answer: "Baştan-başa və birdəfəlik müşahidə", type: "false" },
    ],
  },
  {
    id: 224,
    Question:
      "224) Məlumatların qeydə alınması vaxtına görə müşahidənin növlərini düzgün əks etdirən variantı seçin:",
    answers: [
      { answer: "Cari, vaxtaşırı, birdəfəlik", type: "true" },
      { answer: "Cari, başdan-başa, birdəfəlik", type: "false" },
      { answer: "Cari, vaxtaşırı, başdan-başa", type: "false" },
      { answer: "Cari, vaxtaşırı, başdan-başa olmayan", type: "false" },
      { answer: "Cari, birdəfəlik, monoqrafiya", type: "false" },
    ],
  },
  {
    id: 225,
    Question: "225) Hər bir hesabatda hansı göstəricilər nəzərdə tutulur:",
    answers: [
      { answer: "Bütün variantlar doğrudur", type: "true" },
      {
        answer: "Hesabatın təsdiq olunduğu tarix və əmrin nömrəsi",
        type: "false",
      },
      {
        answer: "Hesabatı təqdim edən hüquqi şəxsin adı və ünvanı",
        type: "false",
      },
      { answer: "Hesabatın təqdim olunduğu ünvan", type: "false" },
      { answer: "Formanın adı və nömrəsi", type: "false" },
    ],
  },
  {
    id: 226,
    Question:
      "226) Azərbaycan Respublikasında əhalinin siyahıya alınması hansı illərdə aparılmışdır:",
    answers: [
      { answer: "1999, 2009", type: "true" },
      { answer: "1992, 2009", type: "false" },
      { answer: "1995, 2008", type: "false" },
      { answer: "1997, 2009", type: "false" },
      { answer: "1996, 2010", type: "false" },
    ],
  },
  {
    id: 227,
    Question:
      "227) Siyahıyaalma zamanı hansı əhali kateqoriyalarından istifadə olunur:",
    answers: [
      { answer: "Mövcud və daimi əhali", type: "true" },
      { answer: "Daimi və gəlmə əhali", type: "false" },
      { answer: "Daimi və əcnəbi vətəndaşlar", type: "false" },
      { answer: "Mövcud və gəlmə əhali", type: "false" },
      { answer: "Mövcud və əcnəbi vətəndaşlar", type: "false" },
    ],
  },
  {
    id: 228,
    Question:
      "228) Müşahidə zamanı buraxılan səhvləri aşkara çıxarmaq və aradan qaldırmaq üçün hansı nəzarətetmə formalarından istifadə edilir:",
    answers: [
      { answer: "Ədədi və məntiqi", type: "true" },
      { answer: "Ədədi və yoxlama", type: "false" },
      { answer: "Yoxlama və məntiqi", type: "false" },
      { answer: "Müqayisəetmə və məntiqi", type: "false" },
      { answer: "Ədədi və müqayisəetmə", type: "false" },
    ],
  },
  {
    id: 229,
    Question: "229) Statistik müşahidə dedikdə nə nəzərdə tutulur:",
    answers: [
      { answer: "Statistikanın metodlarından biri", type: "true" },
      { answer: "Yazılı qeydetmə", type: "false" },
      { answer: "Qruplaşdırma metodu", type: "false" },
      { answer: "Hesabatın bir növü", type: "false" },
      { answer: "Firmanın fəaliyyətinin yoxlanılması", type: "false" },
    ],
  },
  {
    id: 230,
    Question: "230) Statistik hesabat nə deməkdir:",
    answers: [
      { answer: "Müşahidənin formasıdır", type: "true" },
      { answer: "Müşahidə üsuludur", type: "false" },
      { answer: "Müşahidənin bir növüdür", type: "false" },
      { answer: "Müşahidənin qəti zamanıdır", type: "false" },
      { answer: "Kameral yoxlama üsuludur", type: "false" },
    ],
  },
  {
    id: 231,
    Question:
      "231) Müşahidənin formalarını daha düzgün ifadə edən variantı seçin:",
    answers: [
      {
        answer: "Hesabat təqdim etmək və xüsusi təşkil edilmiş müşahidə",
        type: "true",
      },
      { answer: "Vaxtaşırı və cari", type: "false" },
      { answer: "Birdəfəlik və seçmə", type: "false" },
      { answer: "Cari və birdəfəlik", type: "false" },
      { answer: "Monoqrafiya və vaxtaşırı", type: "false" },
    ],
  },
  {
    id: 232,
    Question:
      "232) Qruplaşdırmanın növlərini düzgün ifadə edən variantı seçin:",
    answers: [
      { answer: "Tipik, quruluş və analitik qruplaşdırma", type: "true" },
      { answer: "Tipik, sadələşdirilmiş, analitik", type: "false" },
      { answer: "Tipik, analitik, mürəkkəbləşdirilmiş", type: "false" },
      { answer: "Tipik, əlamət üzrə, analitik", type: "false" },
      { answer: "Tipik, sadələşdirilmiş, əlamət üzrə", type: "false" },
    ],
  },
  {
    id: 233,
    Question:
      "233) Bərabər intervallı qruplaşdırmanı apardıqda aşağıdakı düsturlardan hansından istifadə olunur?",
    answers: [
      { answer: "i = R : n", type: "true" },
      { answer: "i = (R : N) x q", type: "false" },
      { answer: "i = (R : n) x q", type: "false" },
      { answer: "i = R x n", type: "false" },
      { answer: "i = (R : n) x N", type: "false" },
    ],
  },
  {
    id: 234,
    Question:
      "234) Eynitipli (yekcins) toplunu müxtəlif hissələrə bölən qruplaşdırma necə adlanır?",
    answers: [
      { answer: "Struktur üzrə qruplaşdırma", type: "true" },
      { answer: "Analitik qruplaşdırma", type: "false" },
      { answer: "Quraşıq qruplaşdırma", type: "false" },
      { answer: "Mürəkkəb qruplaşdırma", type: "false" },
      { answer: "Tipik qruplaşdırma", type: "false" },
    ],
  },
  {
    id: 235,
    Question:
      "235) Aşağıdakı variantlardan hansında göstərilənlər qruplaşdırmanın əsası ola bilər?",
    answers: [
      { answer: "Kəmiyyət və keyfiyyət əlamətləri", type: "true" },
      { answer: "Dəyişən və kəmiyyət əlamətləri", type: "false" },
      { answer: "Sabit və dəyişən əlamətlər", type: "false" },
      { answer: "Sabit və keyfiyyət əlamətləri", type: "false" },
      { answer: "Sabit və kəmiyyət əlamətləri", type: "false" },
    ],
  },
  {
    id: 236,
    Question:
      "236) Variasiya sıraları düzəldilmə üsullarına görə 2 yerə bölünür. Aşağıdakı variantlardan düzgün olanını seçin:",
    answers: [
      { answer: "Diskret və interval", type: "true" },
      { answer: "Diskret və variasiya", type: "false" },
      { answer: "Diskret və toplu", type: "false" },
      { answer: "Diskret və qanunauyğunluq", type: "false" },
      { answer: "Diskret və əlamət", type: "false" },
    ],
  },
  {
    id: 237,
    Question:
      "237) Mübtədasını işlənib hazırlanmasından asılı olaraq statistika cədvəlinin növlərini düzgün ifadə edən variantı seçin:",
    answers: [
      { answer: "Bütün variantlar doğrudur", type: "true" },
      { answer: "Sadə, qrup üzrə quraşıq cədvəllər", type: "false" },
      { answer: "Sadə, siyahısı olan və mürəkkəb cədvəllər", type: "false" },
      { answer: "Sadə, quraşıq və mürəkkəb cədvəllər", type: "false" },
      { answer: "Sadə, qrup üzrə və mürəkkəb cədvəllər", type: "false" },
    ],
  },
  {
    id: 238,
    Question: "238) Statistika cədvəlləri hansı üstünlüklərə malikdir?",
    answers: [
      { answer: "Bütün variantlar doğrudur", type: "true" },
      { answer: "Aydındır", type: "false" },
      { answer: "Daha əyanidir", type: "false" },
      { answer: "Asanlıqla oxuna bilir", type: "false" },
      { answer: "Qısa və yığcamdır", type: "false" },
    ],
  },
  {
    id: 239,
    Question: "239) Statistika cədvəlləri hansı ünsürlərdən ibarətdir?",
    answers: [
      { answer: "Mübtəda və xəbər", type: "true" },
      { answer: "Xəbər və zərflik", type: "false" },
      { answer: "Mübtəda və təyin", type: "false" },
      { answer: "Xəbər və təyin", type: "false" },
      { answer: "Təyin və tamamlıq", type: "false" },
    ],
  },
  {
    id: 240,
    Question:
      "240) Qrafikin əsas ünsürləri aşağıda göstərilənlərdən hansı ola bilər?",
    answers: [
      { answer: "Bütün variantlarda göstərilənlər", type: "true" },
      { answer: "Həndəsi işarələr", type: "false" },
      { answer: "Miqyas, miqyas cədvəli və miqyas işarələri", type: "false" },
      { answer: "Şərholunma yeri", type: "false" },
      { answer: "Qrafikin sahəsi", type: "false" },
    ],
  },
  {
    id: 241,
    Question:
      "241) Statistik qrafiklər düzəldilmə üsuluna görə hansı qruplara bölünür?",
    answers: [
      { answer: "Diaqramlar və statistik xəritələr", type: "true" },
      { answer: "Kartoqram və kartodiaqramlar", type: "false" },
      { answer: "Diaqramlar və kartoqramlar", type: "false" },
      { answer: "Kartodiaqramlar və statistik xəritələr", type: "false" },
      { answer: "Bütün diaqramlar və statistik xəritələr", type: "false" },
    ],
  },
  {
    id: 242,
    Question:
      "242) Səbəb və nəticə əlamətləri arasındakı qarşılıqlı əlaqəni təsvir edərkən aşağıdakı diaqramlardan hansından istifadə olunması məqsədəuyğundur?",
    answers: [
      { answer: "Hamısından", type: "true" },
      { answer: "Xətti diaqramlardan", type: "false" },
      { answer: "Fiqur işarələrdən", type: "false" },
      { answer: "Dairəvi diaqramlardan", type: "false" },
      { answer: "Bütün diaqramlardan", type: "false" },
    ],
  },
  {
    id: 243,
    Question:
      "243) Həndəsi işarələr formasında diaqramın hansı növündən istifadə etmək olar?",
    answers: [
      { answer: "Heç birindən", type: "true" },
      { answer: "Müstəvi üzərində diaqramlar", type: "false" },
      { answer: "Həcmi ifadə edən diaqramlar", type: "false" },
      { answer: "Statistik xəritələr", type: "false" },
      { answer: "Xətti diaqramlar", type: "false" },
    ],
  },
  {
    id: 244,
    Question:
      "244) Elmi işçilərin elmin sahələri üzrə bölünməsini aşağıdakı qrafik növlərindən hansı daha düzgün əks etdirir?",
    answers: [
      { answer: "Sektor diaqram", type: "true" },
      { answer: "Kartodiaqram", type: "false" },
      { answer: "Sütun diaqram", type: "false" },
      { answer: "Kartoqram", type: "false" },
      { answer: "Xətti diaqram", type: "false" },
    ],
  },
  {
    id: 245,
    Question:
      "245) Mövsümi tərəddüdetməni təsvir etmək üçün aşağıdakı diaqramlardan hansından istifadə etmək daha yaxşıdır?",
    answers: [
      { answer: "Xətti diaqram", type: "true" },
      { answer: "Sütun diaqram", type: "false" },
      { answer: "Dinamika üzrə diaqram Struktur diaqram", type: "false" },
      { answer: "Struktur diaqram", type: "false" },
      { answer: "Spiralvari diaqram", type: "false" },
    ],
  },
  {
    id: 246,
    Question: "246) Mütləq kəmiyyət nə deməkdir?",
    answers: [
      {
        answer: "Hər hansı bir kütləvi hadisənin həcmini ifadə edir",
        type: "true",
      },
      { answer: "İşçilərin əmək haqqının həcmini ifadə edir", type: "false" },
      { answer: "Əsas kapitalın dəyərini ifadə edir", type: "false" },
      { answer: "İstehsal olunan məhsulun həcmi deməkdir", type: "false" },
      { answer: "Əhalinin sayı deməkdir", type: "false" },
    ],
  },
  {
    id: 247,
    Question:
      "247) Mütləq kəmiyyətlərin ölçü vahidlərini düzgün ifadə edən variantı seçin:",
    answers: [
      { answer: "Natural və şərti natural ölçü vahidləri", type: "true" },
      { answer: "Natural və faiz ölçü vahidləri", type: "false" },
      { answer: "Natural və promil ölçü vahidləri", type: "false" },
      { answer: "Natural və metrik ölçü vahidləri", type: "false" },
      { answer: "Bütün variantlar doğrudur", type: "false" },
    ],
  },
  {
    id: 248,
    Question: "248) Fərdi göstəricilər nəyi səciyyələndirir?",
    answers: [
      { answer: "Topludakı ayrıca bir vahidi", type: "true" },
      { answer: "Topludakı bütün vahidləri", type: "false" },
      { answer: "Topludakı vahidlərin bir hissəsini", type: "false" },
      { answer: "Topludakı vahidlərin çox hissəsini", type: "false" },
      { answer: "Topludakı vahidlərin az bir hissəsini", type: "false" },
    ],
  },
  {
    id: 249,
    Question: "249) Ümumi göstəricilər səciyyələndirir:",
    answers: [
      { answer: "Bütövlükdə statistik toplunu", type: "true" },
      { answer: "Topludakı vahidlərin yarıdan çoxunu", type: "false" },
      { answer: "Topludakı vahidlərin 60%-ni", type: "false" },
      { answer: "Topludakı vahidlərin 80%-ni", type: "false" },
      { answer: "Topludakı vahidlərin ən azı 90%-ni", type: "false" },
    ],
  },
  {
    id: 250,
    Question: "250) Nisbi kəmiyyət necə hesablanır?",
    answers: [
      { answer: "Bir ədədi başqa bir ədədə bölmək yolu ilə", type: "true" },
      { answer: "Bir ədədi başqa bir ədədə vurmaq üçün", type: "false" },
      { answer: "Bir ədədi başqa bir ədəddən çıxmaq yolu ilə", type: "false" },
      {
        answer: "Hər hansı bir ədəddən kvadrat kök almaq yolu ilə",
        type: "false",
      },
      {
        answer: "Bir ədədin üzərinə başqa bir ədədi əlavə etmək yolu ilə",
        type: "false",
      },
    ],
  },
  {
    id: 251,
    Question: "251) Aşağıdakılardan hansına nisbi kəmiyyətin növü deyilir",
    answers: [
      { answer: "Xronoloji nisbi kəmiyyət", type: "true" },
      { answer: "Dinamika üzrə nisbi kəmiyyət", type: "false" },
      { answer: "Struktur üzrə nisbi kəmiyyət", type: "false" },
      { answer: "Koordinasiya üzrə nisbi kəmiyyət", type: "false" },
      { answer: "Tapşırıq üzrə nisbi kəmiyyət", type: "false" },
    ],
  },
  {
    id: 252,
    Question:
      "252) Aşağıdakı variantlardan hansı nisbi kəmiyyətin ölçü vahidlərini düzgün əks etdirir?",
    answers: [
      { answer: "Faiz, promil və prodestimil", type: "true" },
      { answer: "Faiz, prodestimil", type: "false" },
      { answer: "Faiz, promil və natural ölçü vahidləri", type: "false" },
      { answer: "Faiz, şərti natural və dəyər ölçü vahidləri", type: "false" },
      { answer: "Faiz, dəfə və şərti ölçü vahidləri", type: "false" },
    ],
  },
  {
    id: 253,
    Question:
      "253) Orta kəmiyyətlər haqqında nəzəriyyənin inkişaf etdirilməsində kimlərin daha çox xidmətləri olmuşdur?",
    answers: [
      { answer: "A.Ketle, A.Boyarski, İ.Pasxaver", type: "true" },
      { answer: "F, Qalton, R.Fişer, A.Ketle", type: "false" },
      { answer: "C.Qraunt, E.Qalley, U.Petti", type: "false" },
      { answer: "A.Şletser, Q.Konrinq, Q.Ahenval", type: "false" },
      { answer: "F.Qalton, K.Pirson, Q.Ahenval", type: "false" },
    ],
  },
  {
    id: 254,
    Question:
      "254) Aşağıdakı düsturlardan hansı sadə hesabı orta kəmiyyətin düsturudur?",
    answers: [
      { answer: "\\( \\bar{x} = \\frac{\\sum x}{n} \\)", type: "true" },
      {
        answer: "\\( \\bar{x} = \\frac{\\sum M}{\\sum \\frac{1}{x}M} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\frac{\\bar{x} = \\frac{1}{2} x_1 + x_2 + ... + x_{n-1} + \\frac{1}{2} xn}{n-1} \\)",
        type: "false",
      },
      { answer: "\\( \\bar{x} = \\sqrt[n]{HƏ_i} \\)", type: "false" },
      {
        answer: "\\( \\bar{x} = \\frac{n}{\\sum \\frac{1}{x}} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 255,
    Question:
      "255) Aşağıdakılardan hansı çəkili hesabı orta kəmiyyətin düsturudur?",
    answers: [
      { answer: "\\( \\bar{x} = \\frac{\\sum x f}{\\sum f} \\)", type: "true" },
      { answer: "\\( \\bar{x} = \\sqrt[n]{HƏ_i} \\)", type: "false" },
      {
        answer: "\\( \\bar{x} = \\frac{n}{\\sum \\frac{1}{x}} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\frac{\\bar{x} = \\frac{1}{2} x_1 + x_2 + ... + x_{n-1} + \\frac{1}{2} xn}{n-1} \\)",
        type: "false",
      },
      {
        answer: "\\( \\bar{x} = \\frac{\\sum M}{\\sum \\frac{1}{x}M} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 256,
    Question:
      "256) Aşağıdakılardan hansı sadə harmonik orta kəmiyyətin düsturudur?",
    answers: [
      {
        answer: "\\( \\bar{x} = \\frac{n}{\\sum \\frac{1}{x}} \\)",
        type: "true",
      },
      {
        answer: "\\( \\bar{x} = \\frac{\\sum M}{\\sum \\frac{1}{x}M} \\)",
        type: "false",
      },
      { answer: "\\( \\bar{x} = \\sqrt[n]{HƏ_i} \\)", type: "false" },
      {
        answer:
          "\\( \\frac{\\bar{x} = \\frac{1}{2} x_1 + x_2 + ... + x_{n-1} + \\frac{1}{2} xn}{n-1} \\)",
        type: "false",
      },
      { answer: "\\( \\bar{x} = \\frac{\\sum x}{n} \\)", type: "false" },
    ],
  },
  {
    id: 257,
    Question:
      "257) Aşağıdakılardan hansı çəkili harmonik orta kəmiyyətin düsturudur?",
    answers: [
      {
        answer: "\\( \\bar{x} = \\frac{\\sum M}{\\sum \\frac{1}{x}M} \\)",
        type: "true",
      },
      {
        answer: "\\( \\bar{x} = \\frac{n}{\\sum \\frac{1}{x}} \\)",
        type: "false",
      },
      { answer: "\\( \\bar{x} = \\sqrt[n]{HƏ_i} \\)", type: "false" },
      {
        answer:
          "\\( \\frac{\\bar{x} = \\frac{1}{2} x_1 + x_2 + ... + x_{n-1} + \\frac{1}{2} xn}{n-1} \\)",
        type: "false",
      },
      { answer: "\\( \\bar{x} = \\frac{\\sum x}{n} \\)", type: "false" },
    ],
  },
  {
    id: 258,
    Question: "258) Aşağıdakılardan hansı həndəsi orta kəmiyyətin düsturudur?",
    answers: [
      { answer: "\\( \\bar{x} = \\sqrt[n]{HƏ_i} \\)", type: "true" },
      {
        answer:
          "\\( \\frac{\\bar{x} = \\frac{1}{2} x_1 + x_2 + ... + x_{n-1} + \\frac{1}{2} xn}{n-1} \\)",
        type: "false",
      },
      {
        answer: "\\( \\bar{x} = \\frac{\\sum M}{\\sum \\frac{1}{x}M} \\)",
        type: "false",
      },
      { answer: "\\( \\bar{x} = \\frac{\\sum x}{n} \\)", type: "false" },
      {
        answer: "\\( \\bar{x} = \\frac{\\sum x f}{\\sum f} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 259,
    Question:
      "259) Aşağıdakılardan hansı xronoloji orta kəmiyyətin düsturudur?",
    answers: [
      {
        answer:
          "\\( \\frac{\\bar{x} = \\frac{1}{2} x_1 + x_2 + ... + x_{n-1} + \\frac{1}{2} xn}{n-1} \\)",
        type: "true",
      },
      { answer: "\\( \\bar{x} = \\frac{\\sum x}{n} \\)", type: "false" },
      { answer: "\\( \\bar{x} = \\sqrt[n]{HƏ_i} \\)", type: "false" },
      {
        answer: "\\( \\bar{x} = \\frac{\\sum M}{\\sum \\frac{1}{x}M} \\)",
        type: "false",
      },
      {
        answer: "\\( \\bar{x} = \\frac{\\sum x f}{\\sum f} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 260,
    Question: "260) Variyasiyanı necə səciyyələndirmək olar, Variasiya:",
    answers: [
      {
        answer:
          "Məkan və zaman daxilində əlamətin qiymətlərinin dəyişməsi deməkdir",
        type: "true",
      },
      {
        answer:
          "Məkan şəraitində Statistik toplunun sturukturunun dəyişməsi deməkdir",
        type: "false",
      },
      {
        answer: "Zaman daxilində kütləvi hadisələrin dəyişməsi deməkdir",
        type: "false",
      },
      { answer: "Toplunun tərkibinin dəyişməsi deməkdir", type: "false" },
      { answer: "Toplunun sturukturunun dəyişməsi deməkdir", type: "false" },
    ],
  },
  {
    id: 261,
    Question: "261) Variasiya əmsalı nəyi səciyyələndirir;",
    answers: [
      { answer: "Əlamətin tərəddüdetmə hüdudlarını", type: "false" },
      { answer: "Əlamətin  variasiya dərəcəsini", type: "true" },
      { answer: "Əlamətin arasındakı sıxlıq əlaqələrini", type: "false" },
      { answer: "Əlamətin  variasiyanın diapozunun", type: "false" },
      { answer: "Əlamətin əsas dövrə nisbətən dəyişməsini", type: "false" },
    ],
  },
  {
    id: 262,
    Question:
      "262) Mediananı hesablamaq üçün aşağıdakı düsturlardan hansından istifadə etmək olar?",
    answers: [
      {
        answer:
          "\\( x_o + i \\cdot \\frac{\\frac{1}{2} \\sum f - S_{m-1}}{f_m} \\)",
        type: "true",
      },
      {
        answer: "\\( x_o + i \\cdot \\frac{\\sum M}{\\sum \\frac{1}{x} M} \\)",
        type: "false",
      },
      {
        answer: "\\( x_o + i \\cdot \\frac{\\sum x f}{\\sum f} \\)",
        type: "false",
      },
      {
        answer: "\\( x_o + i \\cdot \\frac{n}{\\sum \\frac{1}{x}} \\)",
        type: "false",
      },
      {
        answer: "\\( x_o + i \\cdot \\frac{\\sum x}{n} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 263,
    Question:
      "263. Aşağıdakı variantlardan hansı variasiya genişliyini əks etdirir?",
    answers: [
      { answer: "\\( R = X_{max} - X_{min} \\)", type: "true" },
      {
        answer: "\\( \\bar{d} = \\frac{\\sum |x - \\bar{x}|}{n} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\bar{d} = \\frac{\\sum |x - \\bar{x}| \\cdot f}{\\sum f} \\)",
        type: "false",
      },
      {
        answer: "\\( \\sigma^2 = \\frac{\\sum (x - \\bar{x})^2 f}{\\sum f} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\sigma = \\sqrt{\\frac{\\sum (x - \\bar{x})^2 f}{\\sum f}} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 264,
    Question:
      "264. Aşağıdakılardan hansı variant sadə orta xətti kənarlaşmanı ifadə edir?",
    answers: [
      {
        answer: "\\( \\bar{d} = \\frac{\\sum |x - \\bar{x}|}{n} \\)",
        type: "true",
      },
      {
        answer:
          "\\( \\bar{d} = \\frac{\\sum |x - \\bar{x}| \\cdot f}{\\sum f} \\)",
        type: "false",
      },
      { answer: "\\( R = X_{max} - X_{min} \\)", type: "false" },
      {
        answer: "\\( \\sigma^2 = \\frac{\\sum (x - \\bar{x})^2 f}{\\sum f} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\sigma = \\sqrt{\\frac{\\sum (x - \\bar{x})^2 f}{\\sum f}} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 265,
    Question:
      "265. Aşağıdakı variantlardan hansı çəkili orta xətti kənarlaşmanı ifadə edir?",
    answers: [
      {
        answer: "\\( \\bar{d} = \\frac{\\sum |x - \\bar{x}| f}{\\sum f} \\)",
        type: "true",
      },
      { answer: "\\( R = X_{max} - X_{min} \\)", type: "false" },
      {
        answer: "\\( \\bar{d} = \\frac{\\sum |x - \\bar{x}|}{n} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\sigma = \\sqrt{\\frac{\\sum (x - \\bar{x})^2 f}{\\sum f}} \\)",
        type: "false",
      },
      {
        answer: "\\( \\sigma^2 = \\frac{\\sum (x - \\bar{x})^2 f}{\\sum f} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 266,
    Question: "266. Aşağıdakı variantlardan hansı dispersiyanı ifadə edir?",
    answers: [
      {
        answer: "\\( \\sigma^2 = \\frac{\\sum (x - \\bar{x})^2 f}{\\sum f} \\)",
        type: "true",
      },
      {
        answer:
          "\\( \\sigma = \\sqrt{\\frac{\\sum (x - \\bar{x})^2 f}{\\sum f}} \\)",
        type: "false",
      },
      { answer: "\\( R = X_{max} - X_{min} \\)", type: "false" },
      {
        answer: "\\( \\bar{d} = \\frac{\\sum |x - \\bar{x}|}{n} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\bar{d} = \\frac{\\sum |x - \\bar{x}| \\cdot f}{\\sum f} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 267,
    Question:
      "267. Aşağıdakı variantlardan hansı orta kvadratik kənarlaşmanı ifadə edir?",
    answers: [
      {
        answer:
          "\\( \\sigma = \\sqrt{\\frac{\\sum (x - \\bar{x})^2 f}{\\sum f}} \\)",
        type: "true",
      },
      {
        answer: "\\( \\sigma^2 = \\frac{\\sum (x - \\bar{x})^2 f}{\\sum f} \\)",
        type: "false",
      },
      { answer: "\\( R = X_{max} - X_{min} \\)", type: "false" },
      {
        answer:
          "\\( \\bar{d} = \\frac{\\sum |x - \\bar{x}| \\cdot f}{\\sum f} \\)",
        type: "false",
      },
      {
        answer: "\\( \\bar{d} = \\frac{\\sum |x - \\bar{x}|}{n} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 268,
    Question:
      "268. Dinamika sıralarının ən çox istifadə edilən növlərini düzgün əks etdirən variantı seçin:",
    answers: [
      { answer: "Moment və interval dinamika sıraları", type: "true" },
      {
        answer:
          "Vaxt fərqinin bərabər və qeyri-bərabər olduğu dinamika sıraları",
        type: "false",
      },
      { answer: "Sabit və dəyişən dinamika sıraları", type: "false" },
      { answer: "Təkölçülü və çoxölçülü dinamika sıraları", type: "false" },
      {
        answer: "Orta və nisbi kəmiyyətlərdən düzəldilən dinamika sıraları",
        type: "false",
      },
    ],
  },
  {
    id: 269,
    Question:
      "269. Moment dinamika sıralarında orta səviyyə hansı düsturla hesablanır?",
    answers: [
      {
        answer:
          "\\( \\bar{x} = \\frac{\\frac{1}{2}(x_1 + x_2 + \\dots + x_{n-1}) + \\frac{1}{2}x_n}{n - 1} \\)",
        type: "true",
      },
      { answer: "\\( \\bar{x} = \\frac{\\sum x}{n} \\)", type: "false" },
      {
        answer: "\\( \\bar{x} = \\frac{n}{\\sum \\frac{1}{x}} \\)",
        type: "false",
      },
      {
        answer: "\\( \\bar{x} = \\frac{\\sum M}{\\sum \\frac{1}{x} M} \\)",
        type: "false",
      },
      { answer: "\\( \\bar{x} = \\sqrt[n]{HƏ_i} \\)", type: "false" },
    ],
  },
  {
    id: 270,
    Question: "270. Əlavə artım sürəti necə hesablanır?",
    answers: [
      { answer: "Artım sürətindən 100% çıxılır", type: "true" },
      { answer: "Artım sürətinin üzərinə 100% əlavə olunur", type: "false" },
      { answer: "Artım sürəti ilə mütləq artım toplanır", type: "false" },
      { answer: "Artım sürətindən orta artım sürəti çıxılır", type: "false" },
    ],
  },
  {
    id: 271,
    Question:
      "271. Orta artım sürətini hesablamaq üçün hansı orta kəmiyyətin düsturundan istifadə olunur?",
    answers: [
      { answer: "Həndəsi orta kəmiyyət", type: "true" },
      { answer: "Sadə hesabi orta kəmiyyət", type: "false" },
      { answer: "Çəkili hesabi orta kəmiyyət", type: "false" },
      { answer: "Harmonik orta kəmiyyət", type: "false" },
      { answer: "Xronoloji orta kəmiyyət", type: "false" },
    ],
  },
  {
    id: 272,
    Question:
      "272. Hadisələrin inkişaf meyllərinin öyrənilməsi üçün hansı metodlardan istifadə olunur?",
    answers: [
      {
        answer:
          "Dövrlərin iriləşdirilməsi; sürüşən orta kəmiyyət, ən kiçik kvadratlar metodu",
        type: "true",
      },
      {
        answer:
          "Sürüşən orta kəmiyyət, ən böyük kvadratlar metodu, orta kəmiyyət",
        type: "false",
      },
      {
        answer:
          "Dövrlərin kiçik hissələrə bölünməsi, ən kiçik kvadratlar metodu, sürüşən orta kəmiyyət",
        type: "false",
      },
      {
        answer:
          "Üçillik və ya beşillik dövrlərə bölünmüş, ən böyük ədədlər metodu",
        type: "false",
      },
      {
        answer:
          "Sürüşən orta kəmiyyət, ən kiçik kvadratlar metodu, dövrlərin kiçik hissələrə bölünməsi",
        type: "false",
      },
    ],
  },
  {
    id: 273,
    Question:
      "273. Aşağıdakı müşahidə növlərindən hansının əhatə dairəsi daha genişdir?",
    answers: [
      { answer: "Başdan-başa müşahidə", type: "true" },
      { answer: "Seçmə müşahidəsi", type: "false" },
      { answer: "Anket müşahidəsi", type: "false" },
      { answer: "Monoqrafiya müşahidəsi", type: "false" },
      { answer: "Əsas kütlənin öyrənilməsi", type: "false" },
    ],
  },
  {
    id: 274,
    Question:
      "274. Təmsiletmə xətasının tamamilə aradan qaldırılması mümkündürmü?",
    answers: [
      { answer: "Mümkün deyildir", type: "true" },
      { answer: "Tamamilə aradan qaldırmaq olar", type: "false" },
      { answer: "Qismən aradan qaldırmaq olar", type: "false" },
      { answer: "Bir qədər azaltmaq olar", type: "false" },
      { answer: "İşlərin təşkilindən asılıdır", type: "false" },
    ],
  },
  {
    id: 276,
    Question:
      "276. Təkrar seçmədə seçmənin orta kəmiyyəti müəyyən olunarkən onun xətasını hesablamaq üçün aşağıdakı düsturlardan hansından istifadə etmək olar?",
    answers: [
      {
        answer: "\\( \\mu = \\pm \\sqrt{\\frac{\\sigma_o^2}{n}} \\)",
        type: "true",
      },
      {
        answer: "\\( \\mu = \\pm \\frac{\\omega (1 - \\omega)}{n} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\mu = \\pm \\sqrt{\\frac{\\sigma^2_\\omega (1 - n)}{N}} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\mu = \\pm \\sqrt{\\frac{\\omega (1 - \\omega)(1 - n)}{nN}} \\)",
        type: "false",
      },
      { answer: "\\( \\Delta = t\\mu \\)", type: "false" },
    ],
  },
  {
    id: 277,
    Question:
      "277) Əmək məhsuldarlığının yüksəlməsinə təsir edən aşağıdakı amillərdən hansı həlledicidir?",
    answers: [
      { answer: "Elmi-texniki tərəqqi", type: "true" },
      { answer: "İşçinin şəxsi keyfiyyətləri", type: "false" },
      { answer: "İşçinin əmə vərdişləri", type: "false" },
      { answer: "İşçinin əmək intizamı", type: "false" },
      { answer: "İşçinin əlavə peşəyə yiyələnməsi", type: "false" },
    ],
  },
  {
    id: 279,
    Question:
      "279) Balans əlaqələrində son qalığın müəyyən edilməsinin hansı variantı düzgündür?",
    answers: [
      {
        answer: "İlk qalıq üstəgəl daxilolmalar çıxılsın xaricolmalar",
        type: "true",
      },
      {
        answer: "İlk qalıq üstəgəl xaricolmalar çıxılsın son qalıq",
        type: "false",
      },
      {
        answer: "İlk qalıq üstəgəl xaricolmalar çıxılsın daxilolmalar",
        type: "false",
      },
      {
        answer:
          "İlk qalıq üstəgəl xaricdən satınalmalar, çıxılsın xaricolmalar",
        type: "false",
      },
      {
        answer:
          "İlk qalıq üstəgəl daxil olunan mallar çıxılsın özünün istehsal etdiyi məhsullar",
        type: "false",
      },
    ],
  },
  {
    id: 280,
    Question: "280) Funksional əlaqə nə deməkdir? Düzgün variantı seçin:",
    answers: [
      {
        answer:
          "Bir səbəb əlamətinin qiymətinə bir nəticə əlamətinin qiymətinin uyğun gəlməsi deməkdir",
        type: "true",
      },
      {
        answer:
          "Bir-biri ilə qarşılıqlı əlaqədə olan üç əlamət arasındakı əlaqədir",
        type: "false",
      },
      {
        answer:
          "Səbəb əlamətinin nəticə əlamətinin bir neçə qiymətinə uyğun gəlməsi deməkdir",
        type: "false",
      },
      { answer: "İki əlamət arasındakı əlaqədir", type: "false" },
      {
        answer:
          "Bir səbəb əlaməti ilə üç-dörd nəticə arasındakı əlaqə deməkdir",
        type: "false",
      },
    ],
  },
  {
    id: 281,
    Question: "281) Elastiklik əmsalı dedikdə nə başa düşülür?",
    answers: [
      {
        answer:
          "Səbəb əlamətinin bir faiz dəyişməsi nəticə əlamətinin orta hesabla neçə faiz dəyişməsi deməkdir",
        type: "true",
      },
      {
        answer:
          "Səbəb əlamətinin bir faiz dəyişməsi nəticə əlamətinin orta hesabla bir faiz dəyişməsi deməkdir",
        type: "false",
      },
      {
        answer:
          "Səbəb əlamətinin bir faiz dəyişməsi nəticə əlamətinin orta hesabla iki-üç faiz dəyişməsi deməkdir",
        type: "false",
      },
      {
        answer:
          "Səbəb əlamətinin bir faiz dəyişməsi nəticə əlamətinin orta hesabla üç-dörd faiz dəyişməsi deməkdir",
        type: "false",
      },
      {
        answer:
          "Səbəb əlamətinin bir faiz dəyişməsi nəticə əlamətinin dəyişməsinə təsir etmir",
        type: "false",
      },
    ],
  },
  {
    id: 282,
    Question:
      "282) Sosial-iqtisadi hadisə və proseslər arasındakı birbaşa əlaqə dedikdə nə nəzərdə tutulur?",
    answers: [
      {
        answer:
          "Səbəb əlaməti artdıqda və ya azaldıqda nəticə əlaməti də artır və ya azalır",
        type: "true",
      },
      { answer: "Səbəb əlaməti artdıqda nəticə əlaməti azalır", type: "false" },
      { answer: "Səbəb əlaməti azaldıqda nəticə əlaməti artır", type: "false" },
      {
        answer: "Səbəb əlaməti artdıqda nəticə əlaməti dəyişmir",
        type: "false",
      },
      {
        answer: "Səbəb əlaməti azaldıqda nəticə əlaməti dəyişmir",
        type: "false",
      },
    ],
  },
  {
    id: 283,
    Question: "283) İndekslərdən hansı hallarda istifadə olunur?",
    answers: [
      {
        answer:
          "Bilavasitə cəmlənməsi mümkün olmayan ünsürlərin orta hesabla dəyişməsini müəyyən etdikdə",
        type: "true",
      },
      {
        answer:
          "Bilavasitə cəmlənməsi mümkün olan ünsürlərin orta hesabla dəyişməsinə xarakteristika vermək lazım gəldikdə",
        type: "false",
      },
      {
        answer:
          "Nisbi kəmiyyətlə ifadə olunmuş məlumatlara əsasən hesablama aparıldıqda",
        type: "false",
      },
      {
        answer:
          "Mütləq kəmiyyətlə ifadə olunmuş məlumatlara əsasən hesablama aparıldıqda",
        type: "false",
      },
      {
        answer:
          "Müxtəlif istehlak dəyərlərinə malik olan məhsullara xarakteristika vermək lazım gəldikdə",
        type: "false",
      },
    ],
  },
  {
    id: 284,
    Question:
      "284) Ümumi qiymət indeksini hesablamaq üçün aşağıdakı düsturlardan hansından istifadə etmək olar?",
    answers: [
      { answer: "\\( \\frac{\\sum p_1q_1}{\\sum p_0q_1} \\)", type: "true" },
      { answer: "\\( \\frac{\\sum p_1q_0}{\\sum p_0q_0} \\)", type: "false" },
      { answer: "\\( \\frac{\\sum p_1q_1}{\\sum p_0q_0} \\)", type: "false" },
      { answer: "\\( \\frac{\\sum q_1p_0}{\\sum q_0p_0} \\)", type: "false" },
      { answer: "\\( \\frac{\\sum q_1p_1}{\\sum q_0p_1} \\)", type: "false" },
    ],
  },
  {
    id: 285,
    Question:
      "285) Ümumi fiziki həcm indeksini hesablamaq üçün aşağıdakı düsturlardan hansından istifadə etmək olar?",
    answers: [
      { answer: "\\( \\frac{\\sum q_1p_0}{\\sum q_0p_0} \\)", type: "true" },
      { answer: "\\( \\frac{\\sum q_1p_1}{\\sum q_0p_1} \\)", type: "false" },
      { answer: "\\( \\frac{\\sum q_1p_1}{\\sum q_0p_0} \\)", type: "false" },
      { answer: "\\( \\frac{\\sum p_1q_1}{\\sum p_0q_1} \\)", type: "false" },
      { answer: "\\( \\frac{\\sum p_1q_1}{\\sum p_0q_0} \\)", type: "false" },
    ],
  },
  {
    id: 286,
    Question:
      "286) Aşağıdakılardan hansı hesabi orta qiymət indeksinin düsturudur?",
    answers: [
      {
        answer: "\\( \\frac{\\sum i \\cdot p_0q_1}{\\sum p_0q_1} \\)",
        type: "true",
      },
      { answer: "\\( \\frac{\\sum p_1q_1}{\\sum p_0q_1} \\)", type: "false" },
      { answer: "\\( \\frac{\\sum q_1p_0}{\\sum q_0p_0} \\)", type: "false" },
      {
        answer: "\\( \\frac{\\sum p_1q_1}{\\sum p_1q_{et}} \\)",
        type: "false",
      },
      { answer: "\\( \\frac{\\sum p_1q_0}{\\sum p_1q_1} \\)", type: "false" },
    ],
  },
  {
    id: 287,
    Question: "287) İqtisadi Statistikanın ən mühüm ünsürü:",
    answers: [
      { answer: "Göstəricilər sistemidir", type: "true" },
      { answer: "Mütləq göstəricilərdir", type: "false" },
      { answer: "Nisbi göstəricilərdir", type: "false" },
      { answer: "Orta göstəricilərdir", type: "false" },
      { answer: "Variasiya göstəricilərdir", type: "false" },
    ],
  },
  {
    id: 288,
    Question: "288) Statistika təsnifləşdirmə:",
    answers: [
      {
        answer: "Hadisə və proseslərin müəyyən qruplara bölünməsi deməkdir",
        type: "true",
      },
      {
        answer: "Hadisə və proseslərin tiplərə ayrılması deməkdir",
        type: "false",
      },
      {
        answer:
          "Hadisə və proseslərin kəmiyyət əlamətlərinə görə qruplara bölünməsi deməkdir",
        type: "false",
      },
      {
        answer:
          "Hadisə və proseslərin atrubutiv əlamətlərə görə tərkib hissələrinə ayrılması deməkdir",
        type: "false",
      },
      {
        answer:
          "Hadisə və proseslərin həcminə görə müxtəlif hissələrə bölünməsi deməkdir",
        type: "false",
      },
    ],
  },
  {
    id: 289,
    Question: "289) Nomenklatura:",
    answers: [
      { answer: "Obyektlərin standart siyahısı deməkdir", type: "true" },
      { answer: "Obyektlərin istənilən siyahısı deməkdir", type: "false" },
      {
        answer: "Obyektlərin siyahısının tərtib olunması deməkdir",
        type: "false",
      },
      {
        answer: "Obyektlərin Avropa standartlarına uyğunlaşdırılması deməkdir",
        type: "false",
      },
      { answer: "Bütün variantlar səhvdir", type: "false" },
    ],
  },
  {
    id: 290,
    Question:
      "290) Kiçik müəssisələrə sənayedə, tikintidə və nəqliyyatda işçilərinin sayı:",
    answers: [
      { answer: "100 nəfər olan müəssisələri", type: "true" },
      { answer: "90 nəfər olan müəssisələri", type: "false" },
      { answer: "120 nəfər olan müəssisələri", type: "false" },
      { answer: "150 nəfər olan müəssisələri", type: "false" },
      { answer: "80 nəfər olan müəssisələri aid etmək olar", type: "false" },
    ],
  },
  {
    id: 291,
    Question:
      "291) İqtisadi fəaliyyət sahələrinin beynəlxalq standartları kim tərəfindən hazırlanmış və neçənci ildə dərc olunmuşdur. Düzgün variantı seçin:",
    answers: [
      { answer: "BMT, 1990-cı il", type: "true" },
      { answer: "BVF, 1990-cı il", type: "false" },
      { answer: "BMT, 1992-ci il", type: "false" },
      { answer: "BVF, 1992-ci il", type: "false" },
      { answer: "Dünya Bankı, 1990-cı il", type: "false" },
    ],
  },
  {
    id: 292,
    Question: "292) Əhalinin təbii hərəkəti dedikdə nəzərdə tutulur:",
    answers: [
      {
        answer: "Doğum və ölüm nəticəsində əhalinin sayının dəyişməsi",
        type: "true",
      },
      {
        answer:
          "Başqa ölkələrdən gələnlərin hesabına əhalinin sayının dəyişməsi",
        type: "false",
      },
      {
        answer:
          "Ölkədən başqa ölkələrə gedənlərin hesabına əhalinin sayının dəyişməsi",
        type: "false",
      },
      {
        answer: "Əhalinin mexaniki hərəkəti nəticəsində sayının artıb-azalması",
        type: "false",
      },
      {
        answer: "Əhalinin miqrasiyası nəticəsində sayının artıb-azalması",
        type: "false",
      },
    ],
  },
  {
    id: 293,
    Question: "293) Doğum əmsalı hansı düsturla hesablanır:",
    answers: [
      { answer: "Θ = \\( \\frac{N}{S} \\times 1000 \\)", type: "true" },
      { answer: "Θ = \\( \\frac{M}{S} \\times 1000 \\)", type: "false" },
      { answer: "Θ = \\( \\frac{(N - M)}{S} \\times 1000 \\)", type: "false" },
      { answer: "Θ = \\( \\frac{(M - N)}{S} \\times 1000 \\)", type: "false" },
      { answer: "Θ = \\( \\frac{(N + M)}{S} \\times 1000 \\)", type: "false" },
    ],
  },
  {
    id: 294,
    Question: "294) Ölüm əmsalı hansı düsturla hesablanır:",
    answers: [
      { answer: "Θ = \\( \\frac{M}{S} \\times 1000 \\)", type: "true" },
      { answer: "Θ = \\( \\frac{N}{S} \\times 1000 \\)", type: "false" },
      { answer: "Θ = \\( \\frac{(N - M)}{S} \\times 1000 \\)", type: "false" },
      { answer: "Θ = \\( \\frac{(M + N)}{S} \\times 1000 \\)", type: "false" },
      { answer: "Θ = \\( \\frac{(N + M)}{S} \\times 1000 \\)", type: "false" },
    ],
  },
  {
    id: 295,
    Question: "295) Əhalinin təbii artım əmsalı hansı düsturla hesablanır:",
    answers: [
      { answer: "Θ = \\( \\frac{(N - M)}{S} \\times 1000 \\)", type: "true" },
      { answer: "Θ = \\( \\frac{N}{S} \\times 1000 \\)", type: "false" },
      { answer: "Θ = \\( \\frac{M}{S} \\times 1000 \\)", type: "false" },
      { answer: "Θ = \\( \\frac{(M - N)}{S} \\times 1000 \\)", type: "false" },
      { answer: "Θ = \\( \\frac{(N + M)}{S} \\times 1000 \\)", type: "false" },
    ],
  },
  {
    id: 296,
    Question: "296) Əhalinin mexaniki hərəkəti dedikdə nə nəzərdə tutulur:",
    answers: [
      { answer: "Əhalinin miqrasiyası", type: "true" },
      { answer: "Doğum və ölüm halları", type: "false" },
      { answer: "Evlənmə və boşanma halları", type: "false" },
      { answer: "Əhalinin ölkədən getməsi", type: "false" },
      { answer: "Əhalinin ölkəyə gəlməsi", type: "false" },
    ],
  },
  {
    id: 297,
    Question: "297) İqtisadi fəal əhali dedikdə nəzərdə tutulur:",
    answers: [
      {
        answer:
          "Əmtəə və xidmətlərin istehsalı üçün öz əməyini təklif edən əhali",
        type: "true",
      },
      { answer: "16-62 yaşda olan kişilər", type: "false" },
      { answer: "16-57 yaşda olan qadınlar", type: "false" },
      { answer: "16-60 yaşda olan qadınlar", type: "false" },
      { answer: "16-63 yaşda olan kişilər", type: "false" },
    ],
  },
  {
    id: 298,
    Question: "298) İqtisadi fəal əhali əmsalı hesablanır:",
    answers: [
      {
        answer: "İqtisadi fəal əhalinin sayını əhalinin ümumi sayına bölməklə",
        type: "true",
      },
      {
        answer:
          "İqtisadi fəal əhalinin sayını əhalinin ilin əvvəlinə olan sayına bölməklə",
        type: "false",
      },
      {
        answer:
          "İqtisadi fəal əhalinin sayını əhalinin ilin axırına olan 3 ayına bölməklə",
        type: "false",
      },
      {
        answer:
          "İqtisadi fəal əhalinin sayı ilə əmək qabiliyyətli qadınların sayını cəmləməklə",
        type: "false",
      },
      {
        answer:
          "İqtisadi fəal əhalinin sayından əmək qabiliyyətli kişilərin sayını cəmləməklə",
        type: "false",
      },
    ],
  },
  {
    id: 299,
    Question: "299) Məşğulluq əmsalı hesablanır:",
    answers: [
      {
        answer: "İşsizlərin sayını iqtisadi fəal əhalinin sayına bölməklə",
        type: "true",
      },
      {
        answer: "İşsizlərin sayını əhalinin ümumi sayına bölməklə",
        type: "false",
      },
      {
        answer: "İşsizlərin sayının əhalinin sayına nisbəti kimi",
        type: "false",
      },
      {
        answer: "İşsizlərin sayını əmək qabiliyyətli kişilərin sayına bölməklə",
        type: "false",
      },
      {
        answer:
          "İşsizlərin 3 ayını əmək qabiliyətli yaşda olan kişi və qadınların sayına bölməklə",
        type: "false",
      },
    ],
  },
  {
    id: 300,
    Question: "300) Əmək miqrasiyası dedikdə nəzərdə tutulur:",
    answers: [
      {
        answer:
          "İş yerinin dəyişməsi ilə əlaqədar məşğul olan əhalinin yerdəyişməsi",
        type: "true",
      },
      { answer: "Əhalinin yaşayış yerinin dəyişməsi", type: "false" },
      { answer: "Əhalinin bir ölkədən başqa ölkəyə getməsi", type: "false" },
      {
        answer: "Əhalinin bir iqtisadi rayondan başqasına getməsi",
        type: "false",
      },
      {
        answer:
          "Əmək ehtiyatlarının bir yaşayış məntəqəsindən başqasına getməsi",
        type: "false",
      },
    ],
  },
  {
    id: 301,
    Question: "301Statistik metodologiya nədir?",
    answers: [
      {
        answer:
          "Kütləvi ictimai hadisələrin öyrənilməsinin statistik metodlar məcmusudur",
        type: "true",
      },
      {
        answer: "Hadisələrin dinamikasının öyrənilməsi metodlarıdır",
        type: "false",
      },
      {
        answer: "Hadisələrin qarşılıqlı əlaqələrinin öyrənilməsi metodlarıdır",
        type: "false",
      },
      {
        answer: "Statistik məcmunun variasiyasının öyrənilməsi metodlarıdır",
        type: "false",
      },
      {
        answer:
          "Sosial-iqtisadi hadisələr haqqında məlumatların toplanılmasıdır",
        type: "false",
      },
    ],
  },
  {
    id: 302,
    Question:
      "302) Kütləvilik, keyfiyyət bircinsliyi, müəyyən tamlıq və variasiya xüsusiyyətlərinə malik olan elementlər çoxluğu necə adlanır?",
    answers: [
      { answer: "Statistika məcmusu", type: "true" },
      { answer: "Qruplaşdırma", type: "false" },
      { answer: "Statistika göstəriciləri sistemi", type: "false" },
      { answer: "Müşahidə obyekti", type: "false" },
      { answer: "Məlumatlar çoxluğu", type: "false" },
    ],
  },
  {
    id: 303,
    Question: "303) Statistikada əlamət nədir?",
    answers: [
      {
        answer: "Statistik məcmunun öyrənilən vahidlərinin xüsusiyyətidir",
        type: "true",
      },
      { answer: "Məcmunun dinamikası göstəricisidir", type: "false" },
      { answer: "Məcmunun quruluş göstəricisidir", type: "false" },
      { answer: "Statistik göstəricidir", type: "false" },
      { answer: "Məcmu əlamətinin ayrı-ayrı qiymətləridir", type: "false" },
    ],
  },
  {
    id: 304,
    Question: "304) Statistika göstəricisi dedikdə nə başa düşülür?",
    answers: [
      {
        answer:
          "Öyrənilən hadisənin konkret zaman və məkanda ümumiləşdirilmiş kəmiyyət xarakteristikası",
        type: "true",
      },
      {
        answer:
          "Kütləvi ictimai hadisənin keyfiyyətcə müəyyənləşdirilmiş xarakteristikası",
        type: "false",
      },
      { answer: "Hadisənin zamanda xarakteristikası", type: "false" },
      { answer: "Hadisənin səviyyəsi", type: "false" },
      { answer: "Məcmu əlamətinin ayrı-ayrı qiymətləri", type: "false" },
    ],
  },
  {
    id: 305,
    Question: "305) Statistika termini neçənci ildən elmə daxil edilmişdir?",
    answers: [
      { answer: "1743", type: "true" },
      { answer: "1849", type: "false" },
      { answer: "1759", type: "false" },
      { answer: "1760", type: "false" },
      { answer: "1746", type: "false" },
    ],
  },
  {
    id: 306,
    Question:
      "306) Verilənlərdən hansı qeyri-ümumi müşahidənin növlərinə aiddir?",
    answers: [
      { answer: "seçmə müşahidəsi", type: "true" },
      { answer: "analitik müşahidə", type: "false" },
      { answer: "ekperiment", type: "false" },
      { answer: "stoxastik müahidə", type: "false" },
      { answer: "birdəfəlik müşahidə", type: "false" },
    ],
  },
  {
    id: 307,
    Question:
      "307) Verilənlərdən hansı «Statistika» elminin əsas sahəsi hesab olunur?",
    answers: [
      { answer: "Statistikanın ümumi nəzəriyyəsi", type: "true" },
      { answer: "Ehtimal nəzəriyyəsi", type: "false" },
      { answer: "Sənaye statistikası", type: "false" },
      { answer: "Riyazi statistika", type: "false" },
      { answer: "Qiymət statistikası", type: "false" },
    ],
  },
  {
    id: 308,
    Question: "308) Sadalanan əlamətlərdən hansı variasiya edir?",
    answers: [
      { answer: "Dolların kursu", type: "true" },
      { answer: "Suyun qaynama temperaturu", type: "false" },
      { answer: "Yerin öz oxu ətrafında fırlanması surəti", type: "false" },
      { answer: "Boşluqda əşyanın düşmə sürəti", type: "false" },
      { answer: "Işığın sürəti", type: "false" },
    ],
  },
  {
    id: 309,
    Question:
      "309) Statistika müşahidəsi yazıçının və ya rəssamın müşahidəsindən nə ilə fərqlənir?",
    answers: [
      { answer: "Elmi təşkili və planlılığı ilə", type: "true" },
      { answer: "Müşahidə vaxtının müxtəlifliyi ilə", type: "false" },
      { answer: "Müşahidə obyektinin müxtəlifliyi ilə", type: "false" },
      { answer: "Müşahidə məqsədinin müxtəlifliyi ilə", type: "false" },
      { answer: "Müşahidə vahidlərinin sayı ilə", type: "false" },
    ],
  },
  {
    id: 310,
    Question: "310) Statistika müşahidəsinin obyekti:",
    answers: [
      { answer: "Statistika məjmusudur", type: "true" },
      { answer: "Müşahidə vahididir", type: "false" },
      { answer: "Statistikanın məjmusunun vahididir", type: "false" },
      { answer: "Hesabat vahididir", type: "false" },
      { answer: "Uçot vahididirdir", type: "false" },
    ],
  },
  {
    id: 311,
    Question:
      "311) Statistika məlumatlarının təhlili zamanı verilən metodlardan hansından istifadə olunmur?",
    answers: [
      { answer: "Statistika müşahidəsi", type: "true" },
      { answer: "Variasiya göstərijiləri", type: "false" },
      { answer: "Korrelyasiya-reqressiya", type: "false" },
      { answer: "Dinamika sralarının işlənilməsi", type: "false" },
      { answer: "Mütləq və nisbi kəmiyyətlər", type: "false" },
    ],
  },
  {
    id: 312,
    Question: "312) Statistik qanunauyğunluq müəyyən qaydasıdır",
    answers: [
      { answer: "hadisənin dəyişməsinin", type: "true" },
      { answer: "nisbətin", type: "false" },
      { answer: "quruluşun", type: "false" },
      { answer: "tərkibin", type: "false" },
      { answer: "vəziyyətin", type: "false" },
    ],
  },
  {
    id: 313,
    Question:
      "313) Statistika müşahidəsi zamanı məlumatları toplanılan subyektə nə ad verilir?",
    answers: [
      { answer: "Statistika məcmusunun vahidi", type: "true" },
      { answer: "Müşahidə vahidi", type: "false" },
      { answer: "Hesabat vahidi", type: "false" },
      { answer: "Uçot vahidi", type: "false" },
      { answer: "Məcmunun elementi", type: "false" },
    ],
  },
  {
    id: 314,
    Question: "314) Verilənlərdən hansı müşahidənin müddətidir?",
    answers: [
      {
        answer: "Statistika formulyarlarının doldurulma müddəti",
        type: "true",
      },
      {
        answer:
          "Tədqiq olunan məjmunun hər bir vahidi üzrə əlamətlərin qeydə alınma saatı, günü",
        type: "false",
      },
      { answer: "Müşahidənin təşkilindən başlanan müddəti", type: "false" },
      { answer: "Məlumatların işlənilmə müddəti", type: "false" },
      { answer: "Kritik an", type: "false" },
    ],
  },
  {
    id: 315,
    Question: "315) Statistika müşahidəsinin formasıdır:",
    answers: [
      { answer: "Hesabat", type: "true" },
      { answer: "Cari", type: "false" },
      { answer: "Seçmə müşahidəsi", type: "false" },
      {
        answer: "Bütün bu sadalananlar statistikanın müşahidəsinin formasıdır.",
        type: "false",
      },
      { answer: "Son müşahidə", type: "false" },
    ],
  },
  {
    id: 316,
    Question:
      "316) Müşahidə prosesində qeydə alınacaq əlamətlərin siyahısı adlanır",
    answers: [
      { answer: "Müşahidə proqramı", type: "true" },
      { answer: "Statistika formulyarı", type: "false" },
      { answer: "Müşahidə aləti", type: "false" },
      { answer: "Müşahidə təsnifatı", type: "false" },
      { answer: "Müşahidə vahidi", type: "false" },
    ],
  },
  {
    id: 317,
    Question: "317) Böyük ədədlər qanunu:",
    answers: [
      {
        answer:
          "Obyektiv qanundur, ona görə qanunauyğunluqlar yalnız çoxlu sayda müşahidələr nəticəsində aşkarlanır",
        type: "true",
      },
      {
        answer:
          "Obyektiv qanundur, hansına görə ki, böyük sayda təsadüfü amillərin eyni zamanda fəaliyyəti hadisədən asılı olmayaraq nəticə almağa imkan verir",
        type: "false",
      },
      {
        answer:
          "Obyektiv qanundur, hansına görə ki, çoxlu sayda təsadüfü amillərin təqsiri məcmuda qanunauyğunluğu aşkarlamağa imkan vermir",
        type: "false",
      },
      { answer: "Qarşılıqlı əlaqə və asılılıqları öyrənir", type: "false" },
      {
        answer: "Hadisələrın zamanda dəyişməsini xarakterizə edir",
        type: "false",
      },
    ],
  },
  {
    id: 318,
    Question: "318) Statsitika müşahidəsinin obyekti:",
    answers: [
      { answer: "Öyrənilən hadisə və proses", type: "true" },
      {
        answer: "Fərdi əlamətlərə malik ilkin müşahidə vahidləri",
        type: "false",
      },
      { answer: "Elementar vahidin yerləşdiyi mühit", type: "false" },
      { answer: "Hesabat vahidi", type: "false" },
      {
        answer: "Elementar vahidlər yığımı kimi statistik məcmu",
        type: "false",
      },
    ],
  },
  {
    id: 319,
    Question:
      "319) Statistika müşahidəsinin hansı formasının rolu müasir dövrdə daha da artır:",
    answers: [
      { answer: "seçmə", type: "true" },
      { answer: "hesabat", type: "false" },
      { answer: "monoqrafiya", type: "false" },
      { answer: "anket", type: "false" },
      { answer: "jari", type: "false" },
    ],
  },
  {
    id: 320,
    Question:
      "320) Sabit əhalinin sayı haqqında kritik ana məlumat toplanılması adlanır:",
    answers: [
      { answer: "birdəfəlik", type: "true" },
      { answer: "dövrü", type: "false" },
      { answer: "jari", type: "false" },
      { answer: "ümumi", type: "false" },
      { answer: "qeyri-ümumi", type: "false" },
    ],
  },
  {
    id: 321,
    Question:
      "321) Əhali siyahıyaalınmasının məqsədi sabit əhalinin sayının müəyyəndirməkdirsə, müşahidə vahidi ola bilər",
    answers: [
      { answer: "yaşından asılı olmadan ailənin hər bir üzvü", type: "true" },
      { answer: "ailə", type: "false" },
      { answer: "ev təsərrüfatı", type: "false" },
      { answer: "əhalı məcmusu", type: "false" },
      { answer: "qohumluq münasibətində olan şəxslər", type: "false" },
    ],
  },
  {
    id: 322,
    Question: "322) Statistika müşahidəsinin vaxtı - bu",
    answers: [
      {
        answer:
          "müəyyənləşdirilmiş forma üzrə vahidlərin qeydə alındığı vaxtdır",
        type: "true",
      },
      { answer: "toplanılan məlumatların  işləndiyi vaxtdır", type: "false" },
      {
        answer:
          "müşahidə nəticəsində toplanılmış məlumatların işləndiyi vaxtdır",
        type: "false",
      },
      { answer: "toplanılan məlumatların aid olduğu vaxtdır", type: "false" },
      {
        answer:
          "öyrənilən məcmu vahidinin əlamətlərinin ilin müəyyən gününə, saatını qeydə alınması vaxtı",
        type: "false",
      },
    ],
  },
  {
    id: 323,
    Question: "323) Statsitika formulyarları",
    answers: [
      {
        answer: "Müşahidə proqramının  suallarının yerləşdiyi blank",
        type: "true",
      },
      {
        answer:
          "Qeydə alınacaq əlamətlərin cavab toplanılacaq sualların siyahısı",
        type: "false",
      },
      { answer: "Uçota almaq üçün əsas olan elementlər", type: "false" },
      { answer: "Müşahidənin aparılma müddəti", type: "false" },
      {
        answer: "Statistika müşahidəsinin proqramının sənəd şəklində tərtibi",
        type: "false",
      },
    ],
  },
  {
    id: 324,
    Question: "324) Statistika hesabatı:",
    answers: [
      { answer: "Statistika müşahidəsinin formasıdır", type: "true" },
      { answer: "Statistika müşahidəsinin üsuludur", type: "false" },
      { answer: "Statistika müşahidəsinin növüdür", type: "false" },
      { answer: "Registr müşahidəsidir", type: "false" },
      { answer: "Birdəfəlik müşahidədir", type: "false" },
    ],
  },
  {
    id: 325,
    Question:
      "325) Verilənlərdən hansı qruplaşdırma əlaməti kimi götürülə bilər?",
    answers: [
      { answer: "Kəmiyyət və keyfiyyət əlaməti", type: "true" },
      { answer: "Kəmiyyət əlaməti", type: "false" },
      { answer: "Keyfiyyət əlaməti", type: "false" },
      { answer: "Fasilə", type: "false" },
      { answer: "Məkan", type: "false" },
    ],
  },
  {
    id: 326,
    Question:
      "326) Əlamətin qiymətlərinin vahidlərin sayından asılılığını öyrənmək üçün aparılan qruplaşdırma necə adlanır?",
    answers: [
      { answer: "Bölgü sıraları", type: "true" },
      { answer: "Quruluş", type: "false" },
      { answer: "Analitik", type: "false" },
      { answer: "Tipik", type: "false" },
      { answer: "Təkrar qruplaşdırma", type: "false" },
    ],
  },
  {
    id: 327,
    Question: "327) Əlamətin kəsilməz dəyişməsi (variasiyası) zamanı qurulur:",
    answers: [
      { answer: "Interval (fasiləli) variasiya sırası", type: "true" },
      { answer: "Diskret variasiya sırası", type: "false" },
      { answer: "Bölgü sırası", type: "false" },
      { answer: "Dinamika sırası", type: "false" },
      { answer: "Atributiv bölgü sırası", type: "false" },
    ],
  },
  {
    id: 328,
    Question:
      "328) Əgər iki qruplaşdırma bölünmüş qrupların sayına görə fərqlənirsə onları hansı qruplaşdırma əsasında müqayisəli şəklə gətirirlər?",
    answers: [
      { answer: "Təkrar qruplaşdırma", type: "true" },
      { answer: "Mürəkkəb qruplaşdırma", type: "false" },
      { answer: "Ekstrapolyasiya", type: "false" },
      { answer: "İnterpolyasiya", type: "false" },
      { answer: "Sadə qruplaşdırma", type: "false" },
    ],
  },
  {
    id: 329,
    Question:
      "329) Verilənlərdən hansı statistika qrafiklərinin əsas ünsürü deyil?",
    answers: [
      { answer: "Həndəsi işarələr", type: "true" },
      { answer: "Miqyas", type: "false" },
      { answer: "Qrafik sahəsi", type: "false" },
      { answer: "Ekstropolyasiya", type: "false" },
      { answer: "Qrafik obraz", type: "false" },
    ],
  },
  {
    id: 330,
    Question: "330) Statistik yekunlaşdırma özündə birləşdirir:",
    answers: [
      {
        answer:
          "Qruplaşdırmanı, yekunların hesablanılmasını və cədvəllərin tərtibini",
        type: "true",
      },
      { answer: "Yekunların hesablanılmasını", type: "false" },
      { answer: "Məlumatların işlənilməsini", type: "false" },
      { answer: "Qruplaşdırmanı", type: "false" },
      { answer: "Məlumatların toplanılması", type: "false" },
    ],
  },
  {
    id: 331,
    Question: "331. Qrupların sayı asılı deyil",
    answers: [
      { answer: "fasilə kəmiyyətindən", type: "true" },
      { answer: "qruplaşdırma əlamətindən;", type: "false" },
      { answer: "məjmunun həjmindn ;", type: "false" },
      {
        answer: "qruplaşdırma əlamətinin variasiya səviyyəsindən;",
        type: "false",
      },
      { answer: "tədqiqatın vəzifələrindən;", type: "false" },
    ],
  },
  {
    id: 332,
    Question: "332. Yekunlaşdırmanın təşkili ola bilər:",
    answers: [
      { answer: "Sadə və avtomatlaşdırılmış", type: "true" },
      { answer: "Mərkəzləşdirilmiş və mərkəzləşdirilməmiş;", type: "false" },
      { answer: "Analitik və tipoloji;", type: "false" },
      { answer: "Sadə və mürəkkəb;", type: "false" },
      { answer: "Mexanikləşdirilmiş və  əl;", type: "false" },
    ],
  },
  {
    id: 333,
    Question:
      "333. Hansı qruplaşdırmanın məqsədi keyfiyyətcə bircinsli qrupların  bölünməsidir?",
    answers: [
      { answer: "Tipoloji (tipik);", type: "true" },
      { answer: "Quruluş;", type: "false" },
      { answer: "Kombinasiyalı;", type: "false" },
      { answer: "Təkrar;", type: "false" },
      { answer: "Analitik", type: "false" },
    ],
  },
  {
    id: 334,
    Question:
      "334. Hansı qruplaşdırmada keyfiyyət əlamətləri qruplaşdırmanın əsasını təşkil edir:",
    answers: [
      { answer: "Tipik;", type: "true" },
      { answer: "Analitik;", type: "false" },
      { answer: "Quruluş;", type: "false" },
      { answer: "Quruluş və analitik;", type: "false" },
      { answer: "Quruluş və təkrar;", type: "false" },
    ],
  },
  {
    id: 335,
    Question:
      "335. Mübtədanın xarakterinə görə cədvəllərin aşağıdakı növlərini fərqləndirirlər:",
    answers: [
      { answer: "Sadə,  qruplu və  kombinasiyalı (quraşıq);", type: "true" },
      { answer: "Kombinasiyalı  və monoqrafik;", type: "false" },
      { answer: "Monoqrafik və qruplu;", type: "false" },
      { answer: "Qruplu, kombinasiyalı və monoqrafik;", type: "false" },
      { answer: "Sadə və monoqrafik", type: "false" },
    ],
  },
  {
    id: 336,
    Question: "336. Qrafik obraz (qrafikin əsası) bu:",
    answers: [
      {
        answer:
          "Statistik göstəricilər təsvir olunan nöqtə, xətt və  fiqurlar məcmusu;",
        type: "true",
      },
      { answer: "Koordinat şəbəkələr sistemi;", type: "false" },
      { answer: "Qrafik yerləşən müstəvi hissəsi;", type: "false" },
      {
        answer: "Ayrı-ayrı nöqtələri müəyyən ədədlər kimi oxunan xətt;",
        type: "false",
      },
      { answer: "Məkan xarakteristikaları", type: "false" },
    ],
  },
  {
    id: 337,
    Question: "337. Qrafikin məkan orientirləri aşağıdakı formada verilir",
    answers: [
      { answer: "Məkan xarakteristikaları", type: "true" },
      {
        answer:
          "Statistik göstəricilər təsvir olunan nöqtə, xətt və fiqurlar məcmusu;",
        type: "false",
      },
      { answer: "Qrafik yerləşən müstəvi hissəsi;", type: "false" },
      {
        answer: "Ayrı-ayrı nöqtələrin müəyyən ədədlər kimi oxunan xətt;",
        type: "false",
      },
      { answer: "Koordinat şəbəkələr sistemi;", type: "false" },
    ],
  },
  {
    id: 338,
    Question: "338. Statistik yekunlaşdırma özündə birləşdirir",
    answers: [
      {
        answer:
          "Məlumatların qruplaşdırılması, yekun və ümumiləşdirici göstəricilərin  hesablanması;",
        type: "true",
      },
      {
        answer: "Məlumatların qruplaşması və yekunların hesablanması;",
        type: "false",
      },
      { answer: "Məlumatların yekunlarının hesablanması;", type: "false" },
      {
        answer: "Ümumiləşdirici gəstəricilərin  hesablanılması;",
        type: "false",
      },
      { answer: "Məlumatın cədvəl və qrafiklərlə  verilməsi", type: "false" },
    ],
  },
  {
    id: 339,
    Question: "339. Fasilə kəmiyyəti müəyyənləşdirilir:",
    answers: [
      {
        answer: "Fasilənin genişliyinin qruplarının sayına nısbəti kimi;",
        type: "true",
      },
      {
        answer: "Fasilənin aşağı sərhəddinin qrupların sayına nısbəti kimi;",
        type: "false",
      },
      {
        answer: "Fasilənin yuxarı sərhəddinin qrupların sayına nisbəti kimi;",
        type: "false",
      },
      {
        answer: "Orta kvadratik uzaqlaşmanın orta  kəmiyyətə nısbəti kimi;",
        type: "false",
      },
      {
        answer: "Variasiya genişliyinin orta kəmiyyətə nısbəti kimi",
        type: "false",
      },
    ],
  },
  {
    id: 340,
    Question: "340. Variasiya sırası qurulmur:",
    answers: [
      { answer: "Kəmiyyət əlaməti üzrə;", type: "true" },
      { answer: "Keyfiyyət əlaməti üzrə;", type: "false" },
      { answer: "Alternativ əlamət üzrə;", type: "false" },
      { answer: "Atributiv əlamət üzrə", type: "false" },
      { answer: "Əsas əlamət üzrə", type: "false" },
    ],
  },
  {
    id: 341,
    Question: "341. Statistika cədvəlinin əsas elementi deyil:",
    answers: [
      { answer: "Miqyas", type: "true" },
      { answer: "Başlıq", type: "false" },
      { answer: "Mübtəda", type: "false" },
      { answer: "Xəbər", type: "false" },
      { answer: "Rəqəm məlumatları", type: "false" },
    ],
  },
  {
    id: 342,
    Question: "342. Cədvəlin  xəbəri nəyi xarakterizə edir?",
    answers: [
      {
        answer: "Öyrənilən obyekti xarakterizə edən göstəriciləri",
        type: "true",
      },
      { answer: "Hesablanılmış göstəriciləri", type: "false" },
      { answer: "Qruplaşdırmanı", type: "false" },
      { answer: "Statistika müşahidəsinin obyektini", type: "false" },
      { answer: "Mütləq kəmiyyətləri", type: "false" },
    ],
  },
  {
    id: 343,
    Question: "343. Statistika cədvəlinin növü nə ilə müəyyənləşdirilir?",
    answers: [
      { answer: "Cədvəlin mübtədası ilə", type: "true" },
      { answer: "Cədvəlin xəbəri ilə", type: "false" },
      { answer: "Göstəricilərin sayı ilə", type: "false" },
      { answer: "Cədvəlin məzmunu ilə", type: "false" },
      { answer: "Cədvəlin başlığı ilə", type: "false" },
    ],
  },
  {
    id: 344,
    Question:
      "344. Məcmunun quruluşunu xarakterizə  etmək üçün istifadə olunur:",
    answers: [
      { answer: "Sektor", type: "true" },
      { answer: "Kvadrat diaqramlar", type: "false" },
      { answer: "Fiqur", type: "false" },
      { answer: "Xətti diaqramlar", type: "false" },
      { answer: "Lentvari", type: "false" },
    ],
  },
  {
    id: 345,
    Question:
      "345. Öyrənilən hadisənin müəyyən ərazi üzrə yerləşməsini təsvir etmək üçün aşağıdakıların hansından istifadə olunur?",
    answers: [
      { answer: "Statistik xəritələrdən", type: "true" },
      { answer: "Xətti diaqramlardan", type: "false" },
      { answer: "Quruluş diaqramlarından", type: "false" },
      { answer: "Dairəvilərdən", type: "false" },
      { answer: "Fiqurdan", type: "false" },
    ],
  },
  {
    id: 346,
    Question: "346. Hər bir variantı 150 vahidə qədər azaltsaq, orta kəmiyyət:",
    answers: [
      { answer: "150 vahid azalacaq", type: "true" },
      { answer: "Dəyişməyəcək", type: "false" },
      { answer: "150 vahid artacaq", type: "false" },
      { answer: "15% azalacaq", type: "false" },
      { answer: "15% artacaq", type: "false" },
    ],
  },
  {
    id: 347,
    Question: "347. Hər variantı 10 dəfə artırsaq. Orta kəmiyyət:",
    answers: [
      { answer: "10 dəfə artacaq", type: "true" },
      { answer: "10 dəfə azalacaq", type: "false" },
      { answer: "Dəyişməyəcək", type: "false" },
      { answer: "100 vahid artacaq", type: "false" },
      { answer: "100 vahid azalacaq", type: "false" },
    ],
  },
  {
    id: 348,
    Question: "348. Sadalananlardan kəsilməz qruplaşdırma əlamətini göstərin:",
    answers: [
      { answer: "Əmək haqqı", type: "true" },
      { answer: "Fermer təsərrüfatlarının işçilərinin sayı", type: "false" },
      { answer: "Ailədə uşaqların sayı", type: "false" },
      { answer: "Kinoteatrda yerlərin sayı", type: "false" },
      { answer: "Fəhlələrin tarif dərəcəsi", type: "false" },
    ],
  },
  {
    id: 349,
    Question: "349. Bunlardan hansı statistik qrafikinin əsas elementi deyil:",
    answers: [
      { answer: "Qrafikin növü", type: "true" },
      { answer: "Həndəsi işarələr", type: "false" },
      { answer: "Sahə orientasiyası", type: "false" },
      { answer: "Qrafik sahəsi", type: "false" },
      { answer: "Qrafikin izahı", type: "false" },
    ],
  },
  {
    id: 350,
    Question: "350. Qrafikin miqyası-bu:",
    answers: [
      { answer: "Həndəsi fiqurların kəmiyyəti", type: "true" },
      { answer: "Müəyyən   işarələrin yerləşdiyi sahə", type: "false" },
      {
        answer: "Qrafik sahəsində həndəsi işarələrin yerləşməsi",
        type: "false",
      },
      { answer: "Statistika məlumatlarının ifadə forması", type: "false" },
      { answer: "Qrafikin məzmununun sözlə izahı", type: "false" },
    ],
  },
  {
    id: 351,
    Question:
      "351. Kəmiyyət əlaməti üzrə qruplaşdırmada qrupların sayı: asılıdır",
    answers: [
      {
        answer: "Qruplaşdırma əlamətinin variasiyası səviyyəsindən",
        type: "true",
      },
      { answer: "Tədqiqatın məqsədindən", type: "false" },
      { answer: "Məcmunun keyfiyyətindən", type: "false" },
      {
        answer: "Amil və nəticə əlamətləri arasındakı əlaqənin sıxlığından",
        type: "false",
      },
      { answer: "Heç birindən", type: "false" },
    ],
  },
  {
    id: 352,
    Question: "352. Əlamətin kəsilməz variasiyası zamanı qurulur:",
    answers: [
      { answer: "Fasiləli", type: "true" },
      { answer: "Diskret variasiya sırası", type: "false" },
      { answer: "Zaman sırası", type: "false" },
      { answer: "Otributiv sıra", type: "false" },
      { answer: "Ranjirləşdirilmiş sıra", type: "false" },
    ],
  },
  {
    id: 353,
    Question:
      "353. Verilən nisbi kəmiyyətlərdən hansı öyrənilən hadisənin yayılma dərəcəsini xarakterizə edir?",
    answers: [
      { answer: "İntensivlik", type: "true" },
      { answer: "Dinamika", type: "false" },
      { answer: "Quruluş", type: "false" },
      { answer: "Müqayisə", type: "false" },
      { answer: "Koordinasiya", type: "false" },
    ],
  },
  {
    id: 354,
    Question:
      "354. Dinamika nisbi kəmiyyəti hansı nisbi kəmiyyətlərin hasilidir?",
    answers: [
      { answer: "Plan-tapşırıq və planın  yerinə yetirilməsi", type: "true" },
      { answer: "İntensivlik və müqayisə", type: "false" },
      { answer: "Quruluş və intensivlik", type: "false" },
      { answer: "Müqayisə və quruluş", type: "false" },
      { answer: "Koordinasiya  və intensivlik", type: "false" },
    ],
  },
  {
    id: 355,
    Question:
      "355. Statsitikada hadisənin quruluşunda baş verən dəyişikliyi xarakterizə edən göstəriciyə nə ad verirlər?",
    answers: [
      { answer: "Quruluş nisbi kəmiyyəti", type: "true" },
      { answer: "Dinamika nisbi kəmiyyəti", type: "false" },
      { answer: "Müqayisə nisbi kəmiyyəti", type: "false" },
      { answer: "Koordinasiya nisbi kəmiyyəti", type: "false" },
      { answer: "Kənarlaşma əmsalı", type: "false" },
    ],
  },
  {
    id: 356,
    Question: "356. Statistikada mütləq göstəricilər dedikdə başa düşülür",
    answers: [
      {
        answer: "Həcmi, səviyyəni, sayı xarakterizə edən göstərici",
        type: "true",
      },
      {
        answer: "Hadisənin ümumi həcmi",
        type: "false",
      },
      {
        answer: "Əlamətin səviyyəsi",
        type: "false",
      },
      {
        answer: "Müsbət qiymətlər (modul)",
        type: "false",
      },
      {
        answer: "Kəmiyyət nisbətləri",
        type: "false",
      },
    ],
  },
  {
    id: 357,
    Question: "357. Nisbi göstərici dedikdə başa düşülür:",
    answers: [
      {
        answer:
          "Sosial-iqtisadi hadisəni xarakterizə edən iki göstərici arasındakı kəmiyyət nisbətlərini göstərən ümumiləşdirici göstərici",
        type: "true",
      },
      {
        answer:
          "Sosial-iqtisadi hadisəni xarakterizə edən bir neçə göstəricinin cəmindən ibarət olan ümumiləşdirici göstərici",
        type: "false",
      },
      {
        answer: "Müxtəlif gösəricilərin hasilini",
        type: "false",
      },
      {
        answer: "Müxtəlif göstəricilərin fərqini",
        type: "false",
      },
      {
        answer: "Əlamətin səviyyəsi",
        type: "false",
      },
    ],
  },
  {
    id: 358,
    Question:
      "358. Baş məcmuda hər hansı hadisənin xüsusi çəkisini xarəkterizə edən nisbi kəmiyyət:",
    answers: [
      {
        answer: "Quruluş",
        type: "true",
      },
      {
        answer: "İntensivlik",
        type: "false",
      },
      {
        answer: "Koordinasiya",
        type: "false",
      },
      {
        answer: "Müqayisə",
        type: "false",
      },
      {
        answer: "Dinamika",
        type: "false",
      },
    ],
  },
  {
    id: 359,
    Question:
      "359. Öyrənilən məcmunun hissələrinin bir-birinə nisbətini xarakterizə edən nisbi kəmiyyət:",
    answers: [
      {
        answer: "Koordinasiya",
        type: "true",
      },
      {
        answer: "İntensivlik",
        type: "false",
      },
      {
        answer: "Quruluş",
        type: "false",
      },
      {
        answer: "Müqayisə",
        type: "false",
      },
      {
        answer: "Dinamika",
        type: "false",
      },
    ],
  },
  {
    id: 360,
    Question:
      "360. Planın yerinə yetirilməsi və plan-tapşırıq nisbi kəmiyyətlərinin hasilinə bərabər olan nisbi kəmiyyət:",
    answers: [
      {
        answer: "Dinamika",
        type: "true",
      },
      {
        answer: "İntensivlik",
        type: "false",
      },
      {
        answer: "Quruluş",
        type: "false",
      },
      {
        answer: "Müqayisə",
        type: "false",
      },
      {
        answer: "Koordinasiya",
        type: "false",
      },
    ],
  },
  {
    id: 361,
    Question:
      "361. Moda olan variantda fasilənin aşağı sərhəddinin 110, fasilənin böyüklüyünün 10, moda olan variantdan əvvəlki variantın çəkisini 70, moda olan variantın çəkisinin 130, moda olan variantdan sonra gələn variantın çəkisinin 90 olduğunu bilərək modanı hesablayın?",
    answers: [
      {
        answer: "116%",
        type: "true",
      },
      {
        answer: "123%",
        type: "false",
      },
      {
        answer: "134%",
        type: "false",
      },
      {
        answer: "145%",
        type: "false",
      },
      {
        answer: "190%",
        type: "false",
      },
    ],
  },
  {
    id: 362,
    Question:
      "362. Mediana olan variantda fasilənin aşağı sərhəddinin 110, fasilənin böyüklüyünün 10,sıranın çəkilərinin cəminin 400, mediana olan variantdan əvvəl gələn variantların  artan yekunla çəkilərinin cəminin 73, mediana olan variantın çəkisinin 130 olduğunu bilərək mediananı hesablayın.",
    answers: [
      {
        answer: "119,7%",
        type: "true",
      },
      {
        answer: "127,5%",
        type: "false",
      },
      {
        answer: "134,8%",
        type: "false",
      },
      {
        answer: "145,6%",
        type: "false",
      },
      {
        answer: "144,3%",
        type: "false",
      },
    ],
  },
  {
    id: 363,
    Question:
      "363. Briqadanın işçilərinin iş stajına görə bölgüsü aşağıdakı məlumatlarla xarakterizə olunur: Fəhlənin tabel №-si: 1 2 3 4 5 6 İş stajı, il: 14 9 11 13 8 10. Bunlara əsasən orta iş stajını müəyyənləşdirin.",
    answers: [
      {
        answer: "10,8",
        type: "true",
      },
      {
        answer: "12,1",
        type: "false",
      },
      {
        answer: "13,2",
        type: "false",
      },
      {
        answer: "11,0",
        type: "false",
      },
      {
        answer: "10,5",
        type: "false",
      },
    ],
  },
  {
    id: 364,
    Question:
      "364. İş stajına görə fəhlələrin aşağıdakı bölgüsü verilmişdir. İş stacı, il: 5-ə qədər, 5-10, 10-15, 15-20. İşçilərin sayı: 2, 6, 15, 7. Bu məlumatlara əsasən işçilərin orta iş stacını hesablayın.",
    answers: [
      {
        answer: "12",
        type: "true",
      },
      {
        answer: "14",
        type: "false",
      },
      {
        answer: "10",
        type: "false",
      },
      {
        answer: "17",
        type: "false",
      },
      {
        answer: "11",
        type: "false",
      },
    ],
  },
  {
    id: 365,
    Question: "365. Orta kəmiyyət – bu:",
    answers: [
      {
        answer:
          "Keyfiyyətcə bircinsli məcmunun ümumiləşdirilmiş kəmiyyət xarakteristikası",
        type: "true",
      },
      {
        answer:
          "Bir neçə variasiya edən əlamət üzrə məcmunun ümumiləşdirilmiş kəmiyyət xarakteristikası",
        type: "false",
      },
      {
        answer: "Variasiya sırasının ən çox rast gəlinən xarakteristikası",
        type: "false",
      },
      {
        answer: "Ranjirləşdirilmiş sıranın ortasında yerləşən əlamətin qiyməti",
        type: "false",
      },
      {
        answer: "Ən çox rast gəlinən variant",
        type: "false",
      },
    ],
  },
  {
    id: 366,
    Question: "366. Xronoloji orta kəmiyyət hesablanır:",
    answers: [
      { answer: "Bərabər fasiləli an dinamika sıralarında", type: "true" },
      { answer: "Bərabər fasiləli olmayan dinamik sıralarında", type: "false" },
      {
        answer: "Bərabər fasiləli olmayan an dinamika sıralarında",
        type: "false",
      },
      { answer: "Bərabər fasiləli dinamika sıralarında", type: "false" },
      { answer: "Çəkilər məlum olmadıqda", type: "false" },
    ],
  },
  {
    id: 367,
    Question:
      "367. Əlamətin fərdi qiymətlərindən ondan kənarlaşmaları cəminin 0–ra bərabər olması xüsusiyyəti hansı göstəriciyə xasdır?",
    answers: [
      { answer: "Hesabi orta", type: "true" },
      { answer: "Moda", type: "false" },
      { answer: "Median", type: "false" },
      { answer: "Quruluş orta kəmiyyətlər", type: "false" },
      { answer: "Həndəsi orta", type: "false" },
    ],
  },
  {
    id: 368,
    Question:
      "368. Sıranın əlamətlərinin bütün qiymətlərini eyni bir kəmiyyət qədər artırsaq, onda hesabi orta kəmiyyət olacaq:",
    answers: [
      { answer: "Eyni kəmiyyət qədər artacaq", type: "true" },
      { answer: "Eyni dəfə artacaq", type: "false" },
      { answer: "Dəyişməyəcək", type: "false" },
      { answer: "Eyni dəfə azalacaq", type: "false" },
      { answer: "Eyni kəmiyyət qədər azalacaq", type: "false" },
    ],
  },
  {
    id: 369,
    Question:
      "369. Sıranın hər bir variantı 10 dəfə artırılmışdır. Bu halda orta kəmiyyət:",
    answers: [
      { answer: "10 dəfə artacaq", type: "true" },
      { answer: "100 artacaq", type: "false" },
      { answer: "dəyişməyəcək", type: "false" },
      { answer: "10 dəfə azalacaq", type: "false" },
      { answer: "10 artacaq", type: "false" },
    ],
  },
  {
    id: 370,
    Question:
      "370. Əlamətin bu qiymətləri üçün medianı tapın: 6, 8, 9, 10, 11, 14, 18, 20",
    answers: [
      { answer: "10,5-ə bərabərdir", type: "true" },
      { answer: "yoxdur", type: "false" },
      { answer: "12,5 bərabərdir", type: "false" },
      { answer: "10-a bərabərdir", type: "false" },
      { answer: "12,0-ə bərabərdir", type: "false" },
    ],
  },
  {
    id: 371,
    Question:
      "371. 2009-cu ilin yay sessiyasının nəticələri əsasında statistika fənni üzrə tələbələrin bilikləri aşağıdakı kimi qiymətləndirilmişdir: Qiymət balı: 2, 3, 4, 5 | Tələbələrin sayı: 3, 17, 6, 7, 33. Bu məlumatlara əsasən tələbələrin orta balı hansı düsturla hesablanılmalıdır:",
    answers: [
      { answer: "Hesabi ortanın çəkili  düsturu ilə", type: "true" },
      { answer: "Həndəsi orta  düsturu ilə", type: "false" },
      { answer: "Kvadratik ortanın  düsturu ilə", type: "false" },
      { answer: "Xronoloji ortanın sadə düsturu ilə", type: "false" },
      { answer: "Hesabi ortanın sadə düsturu ilə", type: "false" },
    ],
  },
  {
    id: 372,
    Question:
      "372. Əgər əlamətin hər bir qiymətinə bölgü sırasında bir dəfə rast gəlinsə onda orta kəmiyyət hansı düsturla hesablanır?",
    answers: [
      { answer: "Sadə hesabi orta", type: "true" },
      { answer: "Sadə harmonik orta", type: "false" },
      { answer: "Çəkili harmonik orta", type: "false" },
      { answer: "Çəkili hesabi orta", type: "false" },
      { answer: "Həndəsi orta", type: "false" },
    ],
  },
  {
    id: 373,
    Question:
      "373. Briqadada iş stajları uyğun olaraq 2,4,5,6,7,8,10 olan 7 nəfər vardır. Medianı müəyyən edin.",
    answers: [
      { answer: "6", type: "true" },
      { answer: "5", type: "false" },
      { answer: "7", type: "false" },
      { answer: "10", type: "false" },
      { answer: "8", type: "false" },
    ],
  },
  {
    id: 374,
    Question:
      "374. Ailə üzvlərinin hər bir üzvünə düşən məcmu gəlirlərin həcminə görə ailələrin aşağıdakı bölgüsü verilmişidr. Gəlir: 60, 80, 100, 120, 140, 160 | Ailələrin sayı (% ilə): 5, 12, 42, 19, 10, 12. Ailə üzvlərinin hər nəfərinə düşən gəlirin modasını müəyyən edin:",
    answers: [
      { answer: "100", type: "true" },
      { answer: "42", type: "false" },
      { answer: "160", type: "false" },
      { answer: "130", type: "false" },
      { answer: "90", type: "false" },
    ],
  },
  {
    id: 375,
    Question:
      "375. Əgər əlamətin bütün fərdi qiymətlərini 5 vahid artırsaq, onda orta kəmiyyət:",
    answers: [
      { answer: "5 vahid artar", type: "true" },
      { answer: "5 dəfə azalar", type: "false" },
      { answer: "5 dəfə artar", type: "false" },
      { answer: "Dəyişməz", type: "false" },
      {
        answer: "Orta kəmiyyətin dəyişməsi haqqında fikir söyləmək olmaz",
        type: "false",
      },
    ],
  },
  {
    id: 376,
    Question:
      "376. Fəhlələrin tarif dərəcəsinə görə aşağıdakı  bölgüsü verilmişdir: 1 2 3 4 5 6 - | Fəhlələrin sayı: 12 28 26 19 12 3 100. Orta tarif dərəcəsini tapın:",
    answers: [
      { answer: "Düzgün cavab yoxdur", type: "true" },
      { answer: "5,00", type: "false" },
      { answer: "4,76", type: "false" },
      { answer: "0", type: "false" },
      { answer: "3,5", type: "false" },
    ],
  },
  {
    id: 377,
    Question:
      "377. Aşağıdakı bölgü sırası verilmişdir: Fəhlələrin tarif dərəcəsi: 2 3 4 5 6 | Fəhlələrin sayı: 8 16 17 19 7. Bölgü sırasının növünü müəyyənləşdirin:",
    answers: [
      { answer: "Diskret", type: "true" },
      { answer: "Fasiləsiz", type: "false" },
      { answer: "Atributiv", type: "false" },
      { answer: "Ranjiləşdirilmiş", type: "false" },
      { answer: "An", type: "false" },
    ],
  },
  {
    id: 378,
    Question:
      "378. Aşağıdakı bölgü sırası verilmişdir: Fəhlələrin tarif dərəcəsi: 2 3 4 5 6 | Fəhlələrin sayı: 8 16 17 19 7. Bu məlumatlar əsasında fəhlələrin orta tarif dərəcəsini hesablayın:",
    answers: [
      { answer: "4,01", type: "true" },
      { answer: "4,2", type: "false" },
      { answer: "2,04", type: "false" },
      { answer: "5,07", type: "false" },
      { answer: "3,00", type: "false" },
    ],
  },
  {
    id: 379,
    Question:
      "379. Aşağıdakı bölgü sırası verilmişdir: Fəhlələrin tarif dərəcəsi: 2 3 4 5 6 | Fəhlələrin sayı: 8 16 17 19 7. Bu məlumatlar əsasında modanı hesablayın:",
    answers: [
      { answer: "5", type: "true" },
      { answer: "7", type: "false" },
      { answer: "4", type: "false" },
      { answer: "3", type: "false" },
      { answer: "1", type: "false" },
    ],
  },
  {
    id: 380,
    Question:
      "380. Aşağıdakı bölgü sırası verilmişdir: Fəhlələrin tarif dərəcəsi: 2 3 4 5 6 | Fəhlələrin sayı: 8 16 17 19 7. Bu məlumatlar əsasında medianı hesablayın:",
    answers: [
      { answer: "5", type: "true" },
      { answer: "4", type: "false" },
      { answer: "3", type: "false" },
      { answer: "7", type: "false" },
      { answer: "2", type: "false" },
    ],
  },
  {
    id: 381,
    Question:
      "381. Hər ayın əvvəlinə dövriyyə vəsaitlərinin qalığı haqqında aşağıdakı məlumatlar verilmişdir: 1.04 – 200, 1.05 – 220, 1.06 – 240, 1.07 – 260. Xronoloji orta kəmiyyəti müəyyən edin:",
    answers: [
      { answer: "230", type: "true" },
      { answer: "235", type: "false" },
      { answer: "232", type: "false" },
      { answer: "236", type: "false" },
      { answer: "231", type: "false" },
    ],
  },
  {
    id: 382,
    Question: "382. Variasiya əlaməti – bu əlamət:",
    answers: [
      {
        answer: "Qiymətlərin bir-birindən fərqlənməsini xarakterizə edir",
        type: "true",
      },
      {
        answer: "Məcmu vahidlərin mütləq sayını xarakterizə edir",
        type: "false",
      },
      {
        answer: "Məcmu vahidlərinin nisbi sayını xarakterizə edir",
        type: "false",
      },
      { answer: "Faizlə və ya əmsalla ifadə olunur", type: "false" },
      { answer: "Heç biri", type: "false" },
    ],
  },
  {
    id: 383,
    Question: "383. Atributiv variasiya – bu variasiyadır:",
    answers: [
      { answer: "Keyfiyyət əlaməti", type: "true" },
      { answer: "Fasiləsiz variasiya əlaməti", type: "false" },
      { answer: "Kəmiyyət  əlaməti", type: "false" },
      { answer: "Diskret əlamət", type: "false" },
      { answer: "Alternativ əlaməti", type: "false" },
    ],
  },
  {
    id: 384,
    Question: "384. Variasiyanın mütləq göstəriciləri – bu:",
    answers: [
      {
        answer:
          "Variasiya genişliyi , orta xətti uzaqlaşma, orta kvadrayik uzaqlaşma, dispersiya",
        type: "true",
      },
      {
        answer:
          "Variasiya genişliyi , orta xətti uzaqlaşma, dispersiya, variasiya əmsalı",
        type: "false",
      },
      {
        answer:
          "Variasiya genişliyi, dispersiya, orta kvadratik uzaqlaşma, variasiya əmsalı",
        type: "false",
      },
      {
        answer: "Variasiya  əmsalı, assilyasiya əmsalı, nisbi xətti kənarlaşma",
        type: "false",
      },
      { answer: "Variasiya əmsalı", type: "false" },
    ],
  },
  {
    id: 385,
    Question: "385. Variasiya əmsalı göstərir:",
    answers: [
      { answer: "Orta kəmiyyətdən hissə kimi dispersiyanı", type: "true" },
      {
        answer:
          "Amil əlamətinin tərəddüd səviyyəsindən asılı olaraq nəticə əlamətinin faizlə tərəddüd səviyyəsi",
        type: "false",
      },
      {
        answer:
          "Əlamətin sərhəd qiymətlərinin orta kəmiyyət ətrafında tərəddüd dərəcəsi",
        type: "false",
      },
      {
        answer: "Müxtəlif göstəricilərin orta tərəddüd dərəcəsi",
        type: "false",
      },
      { answer: "Hadisə və proseslərin qarşılıqlı əlaqələrini", type: "false" },
    ],
  },
  {
    id: 386,
    Question: "386. Ümumi dispersiya göstərir:",
    answers: [
      {
        answer:
          "Statsitika məcmusunda fəaliyyət göstərən bütün şərt və  səbəblər hesabına nəticə əlamətinin tərəddüdü",
        type: "true",
      },
      {
        answer: "Qrup əlaməti hesabına nəticə əlamətinin tərəddüdü",
        type: "false",
      },
      {
        answer:
          "Qrup daxilində fəaliyyət göstərən bütün şərt və səbəblər hesabına nəticə əlamətinin tərəddüdü",
        type: "false",
      },
      { answer: "Təsadüfi variasiyanı", type: "false" },
      {
        answer:
          "Qruplaşdırmanın əsasında duran amil əlamətinin təsiri nəticəsində əlamətin variasiyasını",
        type: "false",
      },
    ],
  },
  {
    id: 387,
    Question:
      "387. \\( \\mu = \\sqrt{\\mu^2} = \\sqrt{\\frac{\\delta^2}{\\sigma^2}} \\) düsturu ilə hesablanır:",
    answers: [
      { answer: "Empirik korrelyasiya nisbəti", type: "true" },
      { answer: "Determinasiya əmsalı", type: "false" },
      { answer: "Variasiya əmsalı", type: "false" },
      { answer: "Korrelyasiya əmsalı", type: "false" },
      { answer: "Ossilyasiya əmsalı", type: "false" },
    ],
  },
  {
    id: 388,
    Question:
      "Tələbələr arasında əlaçıların hissəsi 8%-dir. Əlaçıların hissəsinin dispersiyası və orta kvadratik uzaqlaşması nəyə bərabərdir?",
    answers: [
      { answer: "0,074; 0,271", type: "true" },
      { answer: "0,920; 0,959", type: "false" },
      { answer: "0,500; 0,707", type: "false" },
      { answer: "0,628; 0,932", type: "false" },
      { answer: "0,097; 0,052", type: "false" },
    ],
  },
  {
    id: 389,
    Question:
      "Qrup dispersiyaları 6,1; 6,5 və 7,2 min manat təşkil edir. Əlamətin çəkiləri uyğun olaraq 9,10 və 11-dir. Orta qrupdaxili dispersiyanı tapın:",
    answers: [
      { answer: "6,63", type: "true" },
      { answer: "6,60", type: "false" },
      { answer: "0,66", type: "false" },
      { answer: "0,76", type: "false" },
      { answer: "7,76", type: "false" },
    ],
  },
  {
    id: 390,
    Question:
      "390. Rayonun 10000 nəfərindən 4500-ni kişilər, 5500 isə qadınlar təşkil edir. Alternativ əlamətin dispersiyasını müəyyən edin:",
    answers: [
      { answer: "0,25", type: "true" },
      { answer: "0,02", type: "false" },
      { answer: "0,14", type: "false" },
      { answer: "0,27", type: "false" },
      { answer: "0,19", type: "false" },
    ],
  },
  {
    id: 391,
    Question:
      "391. Vergi müfəttişliyi tərəfindən 70 kommersiya köşkü yoxlanmış və onların 28-də maliyyə pozuntusu aşkar olunmuşdur. Maliyyə pozuntusu olan köşklərin bütün tədqiq olunan köşklər məcmusunda hissəsinin orta kvadratik uzaqlaşması nəyə bərabərdir?",
    answers: [
      { answer: "49%", type: "true" },
      { answer: "24%", type: "false" },
      { answer: "50%", type: "false" },
      { answer: "30%", type: "false" },
      { answer: "27%", type: "false" },
    ],
  },
  {
    id: 392,
    Question:
      "392. Məcmu əlamətinin iki qiyməti vardır: 10,20. Hesabi orta – 17-ə, orta kvadratik kənarlaşma – 4.1-ə bərabər olarsa variasiya əmsalını tapın:",
    answers: [
      { answer: "24,1%", type: "true" },
      { answer: "4,14", type: "false" },
      { answer: "4,17", type: "false" },
      { answer: "21,7", type: "false" },
      { answer: "4,90", type: "false" },
    ],
  },
  {
    id: 393,
    Question:
      "393. Müəssisənin üç sexində fəhlələrin bütün işçilərin tərkibində xüsusi çəkisi haqqında aşağıdakı məlumatlar verilmişdir: (1) 80% - 100 nəfər, (2) 75% - 200 nəfər, (3) 90% - 150 nəfər. Müəssisə üzrə bütövlükdə fəhlələrin hissəsinin ümumi dispersiyasını tapın:",
    answers: [
      { answer: "0,154", type: "true" },
      { answer: "0,119", type: "false" },
      { answer: "0,151", type: "false" },
      { answer: "0,123", type: "false" },
      { answer: "0,112", type: "false" },
    ],
  },
  {
    id: 394,
    Question:
      "394. Səkkiz saatlıq iş günü ərzində fəhlələr eyni detallar hazırlayırlar. I fəhlə bir detalın hazırlanmasına - 10, II fəhlə - 15, III fəhlə - 12, IV fəhlə - 14, V fəhlə - 16 dəqiqə sərf edir. Bir detala orta vaxt sərfini tapmaq üçün hansı düsturdan istifadə etmək olar:",
    answers: [
      {
        answer: "\\( \\bar{X} = \\frac{n}{\\sum \\frac{1}{x}} \\)",
        type: "true",
      },
      { answer: "\\( \\bar{X} = \\frac{\\sum xf}{\\sum f} \\)", type: "false" },
      { answer: "\\( \\bar{X} = \\frac{\\sum x}{n} \\)", type: "false" },
      {
        answer:
          "\\( \\bar{X} = \\frac{\\frac{1}{2}x_1 + x_2 + \\cdots + \\frac{1}{2}x_n}{n - 1} \\)",
        type: "false",
      },
      {
        answer: "\\( \\bar{X} = \\frac{\\sum M}{\\sum \\frac{M}{X}} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 395,
    Question:
      "395. Aşağıdakılardan hansı determinasiya əmsalının mahiyyətinə uyğun gəlir?",
    answers: [
      {
        answer:
          "Öyrənilən amilin təsiri altında nəticə əlamətinin variasiyasının çəkisini",
        type: "true",
      },
      {
        answer: "Bütün amillərin təsiri altında formalaşan variasiyanı",
        type: "false",
      },
      {
        answer: "Tədqiq olunan hadisələr arasında əlaqənin sıxlıq səviyyəsini",
        type: "false",
      },
      {
        answer:
          "Tədqiq olunan amildən başqa digər amillərin təsiri altında formalaşın variasiyanı",
        type: "false",
      },
      { answer: "Qruplararası variasiyanı", type: "false" },
    ],
  },
  {
    id: 396,
    Question:
      "396. Əlamətin variasiya əmsalı 25%-ə, orta kəmiyyəti isə – 20-yə bərabərdir. Əlamətin orta kvadratik uzaqlaşmasını tapın:",
    answers: [
      { answer: "5", type: "true" },
      { answer: "25", type: "false" },
      { answer: "1,56", type: "false" },
      { answer: "0,8", type: "false" },
      { answer: "12", type: "false" },
    ],
  },
  {
    id: 397,
    Question:
      "397. Əlamətin variasiya əmsalı 25%-ə, orta kəmiyyəti isə – 20-yə bərabərdir. Əlamətin dispersiyasını tapın:",
    answers: [
      { answer: "25", type: "true" },
      { answer: "625", type: "false" },
      { answer: "1,56", type: "false" },
      { answer: "0,64", type: "false" },
      { answer: "144", type: "false" },
    ],
  },
  {
    id: 398,
    Question:
      "398. Məlumdur ki, əlamətin dispersiyası 3600, əlamətin variasiya əmsalı isə 50%-dir. Əlamətin orta qiymətini tapın:",
    answers: [
      { answer: "120", type: "true" },
      { answer: "83", type: "false" },
      { answer: "72", type: "false" },
      { answer: "1,3", type: "false" },
      { answer: "1,9", type: "false" },
    ],
  },
  {
    id: 399,
    Question:
      "399. Fərdi qiymətlərin kvadratlarının ortası 78-ə, əlamətin dispersiyası isə 42-yə bərabərdir. Orta kəmiyyətin qiymətini tapın:",
    answers: [
      { answer: "36", type: "true" },
      { answer: "6", type: "false" },
      { answer: "120", type: "false" },
      { answer: "11", type: "false" },
      { answer: "17", type: "false" },
    ],
  },
  {
    id: 400,
    Question:
      "400. Əgər şərti məcmunu yaşları 20, 30, 40 olan şəxslər təşkil edərsə, əlamətin variasiyasını hansı göstərici ilə xaratkerizə etmək olar?",
    answers: [
      { answer: "Variasiya genişliyi", type: "true" },
      { answer: "Orta kvadratik kənarlaşma", type: "false" },
      { answer: "Orta xətti kənarlaşma", type: "false" },
      { answer: "Variasiya əmsalı", type: "false" },
      { answer: "Ossilyasiya əmsalı", type: "false" },
    ],
  },
  {
    id: 401,
    Question:
      "401. Qrupda tələbələrin 10%-i sessiyanın nəticələrinə görə kəsrə malikdirlər. Dispersiyanı hesablayın:",
    answers: [
      { answer: "0,1-ə qədər", type: "true" },
      { answer: "0,1-0,25", type: "false" },
      { answer: "0,25-0,50", type: "false" },
      { answer: "0,50 və çox", type: "false" },
      { answer: "Heç biri", type: "false" },
    ],
  },
  {
    id: 402,
    Question:
      "402. Nəticə əlamətinin variasiyası üzrə aşağıdakı məlumatlar var: Orta qrupdaxili dispersiya – 400, ümumi dispersiya – 1000. Empirik korrelyasiya nisbətini hesablayın:",
    answers: [
      { answer: "0,70-ə qədər", type: "false" },
      { answer: "0,70-0,75", type: "false" },
      { answer: "0,75-0,80", type: "true" },
      { answer: "0,80 və daha çox", type: "false" },
      { answer: "heç birində", type: "false" },
    ],
  },
  {
    id: 403,
    Question: "403. Verilən variantlardan düzgün olanını göstərin.",
    answers: [
      {
        answer: "Variasiya əlamətin qiymətinin zaman və məkan dəyişməsidir;",
        type: "true",
      },
      {
        answer:
          "Variasiya statistika məcmusunun quruluşunun məkanda dəyişməsidir;",
        type: "false",
      },
      {
        answer: "Variasiya kütləvi hadisələrin zamanda dəyişməsidir;",
        type: "false",
      },
      { answer: "Variasiya məcmunun tərkibinin dəyişməsidir;", type: "false" },
      {
        answer: "Variasiya məcmu vahidlərinin sayının dəyişməsidir.",
        type: "false",
      },
    ],
  },
  {
    id: 404,
    Question:
      "404. Sadalanan göstəricilərdən hansı nisbi variasiya göstəricisidir?",
    answers: [
      { answer: "Variasiya əmsalı;", type: "true" },
      { answer: "Variasiyanın genişliyi;", type: "false" },
      { answer: "Orta xətti uzaqlaşma;", type: "false" },
      { answer: "Dispersiya;", type: "false" },
      { answer: "Orta kvadratik uzaqlaşma.", type: "false" },
    ],
  },
  {
    id: 405,
    Question:
      "405. Verilənlərdən hansı dispersiyanın ixtisar üsulu ilə hesablanmasının düsturudur?",
    answers: [
      {
        answer:
          "\\( \\sigma^2 = \\frac{\\sum \\left(\\frac{x - \\overline{\\mathcal{ж}}}{d} \\right)^2 \\varphi}{\\sum \\varphi} \\cdot d^2 - (\\overline{x} - \\overline{\\mathcal{ж}})^2 \\)",
        type: "true",
      },
      {
        answer: "\\( \\sigma^2 = \\overline{X^2} - \\overline{X}^2 \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\sigma^2 = \\frac{\\sum (x - \\overline{x})^2 \\varphi}{\\sum \\varphi} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\sigma_3^2 = \\frac{\\sum (X_{ns} - \\overline{X_s})^2 \\varphi_{ns}}{\\sum \\varphi_{ns}} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\sigma_i^2 = \\frac{\\sum \\sigma_s^2 f_s}{\\sum f_s} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 406,
    Question:
      "406. Verilənlən göstəricilərdən hansı qruplaşdırma əlaməti ilə nəticə əlaməti arasındakı əlaqənin sıxlığını səciyyələndirir?",
    answers: [
      { answer: "Korrelyasiya nisbəti", type: "true" },
      { answer: "Variasiya genişliyi", type: "false" },
      { answer: "Elastiklik əmsalı", type: "false" },
      { answer: "Orta illik artım", type: "false" },
      { answer: "Nisbi dəyişmə", type: "false" },
    ],
  },
  {
    id: 407,
    Question: "407. Verilənlərdən hansı variasiyanın mahiyyətinə uyğun gəlir?",
    answers: [
      { answer: "Əlamətin qiymətlərinin dəyişilməsi", type: "true" },
      {
        answer: "Statistika məcmusunun quruluşunun məkanda dəyişilməsi",
        type: "false",
      },
      { answer: "Kütləvi hadisələrin zamanda dəyişilməsi", type: "false" },
      { answer: "Məcmunun tərkibinin dəyişilməsi", type: "false" },
      { answer: "Ümumi meylin müəyyənləşdirilməsidir", type: "false" },
    ],
  },
  {
    id: 408,
    Question:
      "408. Qruplar daxilində variantlar arasında fərq yoxdursa qruplararası dispersiya nəyə bərabərdir?",
    answers: [
      { answer: "Ümumi dispersiyaya", type: "false" },
      { answer: "Sıfra", type: "true" },
      { answer: "Sıfırla vahid arasında dəyişir", type: "false" },
      { answer: "Vahidə", type: "false" },
      { answer: "Qrup dispersiyalarının orta səviyyəsinə", type: "false" },
    ],
  },
  {
    id: 409,
    Question:
      "409. Qruplaşdırmanın əsasında duran amil əlamətinin təsiri nəticəsində nəticə əlamətinin variasiyasını hansı göstərici xarakterizə edir?",
    answers: [
      {
        answer:
          "\\( \\delta^2 = \\frac{\\sum (\\overline{X_s} - \\overline{X})^2 f_s}{\\sum f_s} \\)",
        type: "true",
      },
      {
        answer:
          "\\( \\sigma^2 = \\frac{\\sum (X - \\overline{X})^2 f}{\\sum f} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\overline{\\sigma^2} = \\frac{\\sum \\sigma_i^2 f_s}{\\sum f_s} \\)",
        type: "false",
      },
      {
        answer: "\\( \\sigma^2 = \\delta^2 (\\overline{d} - M_1^2) \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\sigma = \\sqrt{\\frac{\\sum (X - \\overline{X})^2 \\varphi}{\\sum \\varphi}} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 410,
    Question:
      "410. Aşağıdakılardan hansı determinasiya əmsalının mahiyyətinə uyğun gəlir?",
    answers: [
      {
        answer:
          "Öyrənilən amilin təsiri altında nəticə əlamətinin variasiyasının çəkisini",
        type: "true",
      },
      {
        answer: "Bütün amillərin təsiri altında formalaşan variasiyanı",
        type: "false",
      },
      {
        answer: "Tədqiq olunan hadisələr arasında əlaqənin sıxlıq səviyyəsini",
        type: "false",
      },
      {
        answer:
          "Tədqiq olunan amildən başqa digər amillərin təsiri altında formalaşın variasiyanı",
        type: "false",
      },
      { answer: "Qruplararası variasiyanı", type: "false" },
    ],
  },
  {
    id: 411,
    Question: "411) Seçmə metodunun fundamental prinsipi hansıdır:",
    answers: [
      {
        answer: "Baş məcmudan seçmə elementlərin seçlməsinin təsadüflüyü",
        type: "true",
      },
      { answer: "Seçməyə düşən bütün elementlərin öyrənilməsi", type: "false" },
      {
        answer: "Seçməyə düşən elementlərin bir hissəsinin öyrənilməsi",
        type: "false",
      },
      {
        answer:
          "Baş məcmudan seçməyə elementlərin seçilməsinin istiqamətləndirilməsi",
        type: "false",
      },
      { answer: "Baş məcmudan bütün vahidlərin öyrənilməsi", type: "false" },
    ],
  },
  {
    id: 412,
    Question:
      "412) Statistika tədqiqatlarında seçmə metodundan istifadə olunur:",
    answers: [
      {
        answer:
          "Statistika tədqiqatının aparılması vaxtına və məsrəflərinə qənaət etmək üçün",
        type: "true",
      },
      { answer: "Qarşılıqlı əlaqə amillərinin təhlili üçün", type: "false" },
      { answer: "Proqnozun dəqiqliyini artırmaq üçün", type: "false" },
      {
        answer: "Hadisənin inkişaf qanunauyğunluqlarını müəyyənləşdirmək üçün",
        type: "false",
      },
      {
        answer: "Hadisənin məkanda və zamanda dəyişılməsini öyrənmək üçün",
        type: "false",
      },
    ],
  },
  {
    id: 413,
    Question:
      "413) Seçmə xəatasının son həddi bu düsturlardan hansı ilə hesablanır:",
    answers: [
      { answer: "\\( \\Delta = t \\cdot \\mu \\)", type: "true" },
      { answer: "\\( \\Delta = \\frac{t}{\\mu} \\)", type: "false" },
      { answer: "\\( \\Delta = t + \\mu \\)", type: "false" },
      { answer: "\\( \\Delta = \\frac{t^2}{\\sqrt{n}} \\)", type: "false" },
      { answer: "\\( \\Lambda = t^2 \\cdot \\mu \\)", type: "false" },
    ],
  },
  {
    id: 414,
    Question:
      "414. Verilmiş qiymətlər halında seçmə xətasının son həddini tapın: \\( t = 2,\\ n = 100,\\ \\sigma = 5 \\)",
    answers: [
      { answer: "1", type: "false" },
      { answer: "2", type: "true" },
      { answer: "3,5", type: "false" },
      { answer: "10", type: "false" },
      { answer: "2,5", type: "false" },
    ],
  },
  {
    id: 415,
    Question:
      "415. \\( \\Delta_{\\bar{x}} = 2,\\ \\bar{x} = 10 \\) olduqda baş ortanın yerləşdiyi aralığı tapın:",
    answers: [
      { answer: "\\( 8 < \\bar{x} < 12\\)", type: "true" },
      { answer: "\\( 5 < \\bar{x} < 8\\)", type: "false" },
      { answer: "\\( 10 < \\bar{x} < 12\\)", type: "false" },
      { answer: "\\( 8 < \\bar{x} < 8\\)", type: "false" },
      { answer: "\\( 9 < \\bar{x} < 10\\)", type: "false" },
    ],
  },
  {
    id: 416,
    Question: "416) Kiçik seçmə – həcmi:",
    answers: [
      { answer: "30 vahiddən çox deyildir", type: "true" },
      { answer: "50 vahiddir", type: "false" },
      { answer: "100-ə qədərdir", type: "false" },
      { answer: "100-dən çoxdur", type: "false" },
      { answer: "30-dan çoxdur", type: "false" },
    ],
  },
  {
    id: 417,
    Question:
      "417) Seçmə müşahidəsində istifadə olunan əsas göstəricilər hansılardır:",
    answers: [
      { answer: "Seçmə xətası, ehtimal qiyməti", type: "true" },
      { answer: "Dispersiya, variasiya əmsalı", type: "false" },
      { answer: "Modus, median", type: "false" },
      { answer: "Korrelyasiya nisbəti, elastiklik", type: "false" },
      { answer: "Trend, xronoloji orta", type: "false" },
    ],
  },
  {
    id: 418,
    Question:
      "418) Seçmənin hansı növündə daha çox reprezentativlik təmin olunur:",
    answers: [
      { answer: "Tipik", type: "true" },
      { answer: "Seriyalı", type: "false" },
      { answer: "Təsadüfü", type: "false" },
      { answer: "Mexaniki", type: "false" },
      { answer: "Kombinasiyalı", type: "false" },
    ],
  },
  {
    id: 419,
    Question:
      "419) Seçmə müşahidəsinin məlumatlarına görə hər hansı orta kəmiyyət hesablanır. Əgər ehtimal yüksələrsə, xətanın son həddi hansı istiqamətdə dəyişər?",
    answers: [
      { answer: "Artar", type: "false" },
      { answer: "Azalar", type: "true" },
      { answer: "Dəyişməz", type: "false" },
      { answer: "0-ra bərabərləşər", type: "false" },
      { answer: "Heç biri", type: "false" },
    ],
  },
  {
    id: 420,
    Question:
      "420) Tipik seçmə zamanı seçmə xətasının qiyməti az olur. Çünki onu hesablayarkən istifadə olunur:",
    answers: [
      { answer: "Orta qrupdaxili dispersiyadan", type: "false" },
      { answer: "Qruplararası dispersiyadan", type: "false" },
      { answer: "Qrupdaxili dispersiyadan", type: "true" },
      { answer: "Əlamətin ümumi dispersiyadan", type: "false" },
      { answer: "Heç birindən", type: "false" },
    ],
  },
  {
    id: 421,
    Question: "421) Seçmə xətasının həcmi asılıdır:",
    answers: [
      { answer: "Seçmənin həcmindən", type: "true" },
      { answer: "Parametrin ölçülmə vahidlərindən", type: "false" },
      { answer: "Parametrin özünün həcmindən", type: "false" },
      { answer: "Vahidlərin ifadə formasından", type: "false" },
      { answer: "Heç birindən", type: "false" },
    ],
  },
  {
    id: 422,
    Question: "422) Ehtimal qiymətinin yüksəlməsi:",
    answers: [
      { answer: "Seçmə xətasını artırar", type: "false" },
      { answer: "Seçmə xətasını azaldar", type: "true" },
      { answer: "0-ra bərabər edər", type: "false" },
      { answer: "Dəyişdirməz", type: "false" },
      { answer: "Heç biri", type: "false" },
    ],
  },
  {
    id: 423,
    Question:
      "423) A əmtəəsinin yanvar ayında nisbi artımı 25% təşkil etmişdir. Fevralın sonunda qiymət yanvarın əvvəlindəki səviyyəyə qayıtmışsa, fevralda qiymətin nisbi dəyişməsini tapın.",
    answers: [
      { answer: "-20%", type: "true" },
      { answer: "25%", type: "false" },
      { answer: "-25%", type: "false" },
      { answer: "20%", type: "false" },
      { answer: "1%", type: "false" },
    ],
  },
  {
    id: 424,
    Question:
      "424. Verilənlərdən hansı təkrar qayda ilə tipik seçmədə seçilənlərin zəruri sayının hesablanması düsturudur?",
    answers: [
      {
        answer:
          "\\(H = \\frac{\\hat{m}^2 \\sigma_0^2}{\\Delta_{\\bar{x}}^2}\\)",
        type: "true",
      },
      {
        answer:
          "\\(H = \\frac{\\hat{m} \\sigma_0^2 H}{\\hat{m} \\sigma_0^2 + \\Delta_{\\bar{x}}^2 H}\\)",
        type: "false",
      },
      {
        answer: "\\(H = \\frac{\\hat{m} \\sigma^2}{\\Delta_{x}^2}\\)",
        type: "false",
      },
      {
        answer:
          "\\(n_p = \\frac{t^2 \\omega (1 - \\omega) N}{\\Delta_x^2 N + t^2 \\omega (1 - \\omega)}\\)",
        type: "false",
      },
      {
        answer: "\\(H_u = h \\frac{\\sigma_x H_u}{\\sum \\sigma_x H_u}\\)",
        type: "false",
      },
    ],
  },
  {
    id: 425,
    Question: "425. Verilənlərdən hansı seçməyə xas olan xətadır?",
    answers: [
      { answer: "Reprezentativ", type: "false" },
      { answer: "Təsadüfü", type: "false" },
      { answer: "Sistematik", type: "true" },
      { answer: "Qeyd", type: "false" },
      { answer: "Orta xəta", type: "false" },
    ],
  },
  {
    id: 426,
    Question:
      "426. Əlamətin orta qiyməti üçün xətanın son həddi necə müəyyənləşdirilir?",
    answers: [
      { answer: "\\( \\Delta_{x} = \\eta \\mu_x\\)", type: "true" },
      { answer: "\\( \\Delta_{n} = \\eta \\mu_p\\)", type: "false" },
      {
        answer: "\\( \\mu_{x} = \\sqrt{\\frac{\\sigma^2}{H}}\\)",
        type: "false",
      },
      {
        answer:
          "\\( \\mu_{x} = \\sqrt{\\frac{\\sigma^2}{H} (1 - \\frac{h}{H})}\\)",
        type: "false",
      },
      {
        answer: "\\( \\bar{X} = \\bar{\\tilde{x}} + \\Delta_{x}\\)",
        type: "false",
      },
    ],
  },
  {
    id: 427,
    Question:
      "427) Telefon danışığının orta müddətini müəyyənləşdirərkən reprezentativ xətanın 18 saniyədən çox olmaması ehtimalını tapın:",
    answers: [
      { answer: "p = 0,866", type: "true" },
      { answer: "p = 0,95", type: "false" },
      { answer: "p = 0,97", type: "false" },
      { answer: "p = 0,997", type: "false" },
      { answer: "p = 0,954", type: "false" },
    ],
  },
  {
    id: 428,
    Question:
      "428) 0,683 ehtimalla xəta 3 bilet olarsa, seçmənin zəruri sayını müəyyənləşdirin:",
    answers: [
      { answer: "25", type: "true" },
      { answer: "20", type: "false" },
      { answer: "30", type: "false" },
      { answer: "40", type: "false" },
      { answer: "38", type: "false" },
    ],
  },
  {
    id: 429,
    Question: "429) 0,954 ehtimalla briqadaların zəruri sayını hesablayın:",
    answers: [
      { answer: "30", type: "true" },
      { answer: "50", type: "false" },
      { answer: "45", type: "false" },
      { answer: "40", type: "false" },
      { answer: "25", type: "false" },
    ],
  },
  {
    id: 430,
    Question:
      "430) Əgər baş məcmudan seçməyə elementlər püşkatma yolu ilə seçilirsə, onda bu:",
    answers: [
      { answer: "Təsadüfü seçmə", type: "true" },
      { answer: "Mexaniki seçmə", type: "false" },
      { answer: "Tipik seçmə", type: "false" },
      { answer: "Seriyalı seçmə", type: "false" },
      { answer: "Kombinasiyalı seçmə", type: "false" },
    ],
  },
  {
    id: 431,
    Question:
      "431) W=0,5, t=1, n=100 olduqda baş hissənin yerləşdiyi aralığı tapın:",
    answers: [
      { answer: "0,495 0,5050", type: "true" },
      { answer: "0,250 0,500", type: "false" },
      { answer: "0,000 0,250", type: "false" },
      { answer: "400 0,425", type: "false" },
      { answer: "0,250 0,400", type: "false" },
    ],
  },
  {
    id: 432,
    Question:
      "432) Seçmənin xətasının son həddi 1%, orta kvadratik kənarlaşma – 5%-dir. 0,954 ehtimalla seçmənin zəruri həcmini müəyyən edin:",
    answers: [
      { answer: "100 vahid", type: "true" },
      { answer: "200 vahid", type: "false" },
      { answer: "80 vahid", type: "false" },
      { answer: "250 vahid", type: "false" },
      { answer: "170 vahid", type: "false" },
    ],
  },
  {
    id: 433,
    Question:
      "433) Seçmə xətasının 0,1-dən çox olmaması, dispersiyanın 1,44-ə bərabər olması halında seçilənlərin zəruri sayını tapın. (t=1)",
    answers: [
      { answer: "144", type: "true" },
      { answer: "123", type: "false" },
      { answer: "153", type: "false" },
      { answer: "198", type: "false" },
      { answer: "113", type: "false" },
    ],
  },
  {
    id: 434,
    Question:
      "434) Xətanın son həddinin 0,1-dən çox olmaması və dispersiyanın isə 2,25-ə bərabər olması halında seçilənlərin zəruri sayını tapın. (t=1)",
    answers: [
      { answer: "225", type: "true" },
      { answer: "253", type: "false" },
      { answer: "287", type: "false" },
      { answer: "213", type: "false" },
      { answer: "312", type: "false" },
    ],
  },
  {
    id: 435,
    Question:
      "435) Seçmənin xətasının son həddi – 2%, dispersiya -25-ə bərabərdir. 0,997 ehtimalla seçmənin zəruri həcmini müəyyən edin:",
    answers: [
      { answer: "56 vahid", type: "true" },
      { answer: "25 vahid", type: "false" },
      { answer: "112 vahid", type: "false" },
      { answer: "50 vahid", type: "false" },
      { answer: "33 vahid", type: "false" },
    ],
  },
  {
    id: 436,
    Question:
      "436. 0,954 ehtimalla 2% dəqiqliklə qeyri-standart məhsulun hissəsinin təkrar qayda ilə müayinəsi üçün neçə ədəd məhsul lazımdır. Sınaq müayinəsi zamanı qeyri-standart məhsulun hissəsi təqribən 10%-ə bərabərdir.",
    answers: [
      { answer: "900", type: "true" },
      { answer: "439", type: "false" },
      { answer: "81", type: "false" },
      { answer: "18", type: "false" },
      { answer: "400", type: "false" },
    ],
  },
  {
    id: 437,
    Question:
      "437. Şəhərətrafı qatarların 10000 sərnişininin seçmə müayinəsi məlumatları əsasında, səyyahətlərin orta uzunluğunun 32,4 km, orta kvadratik kənarlaşmaların isə – 15 km olması müəyyənləşmişdir. 0,954 ehtimalla gedilən yolun orta uzunluğunun sərhədlərini müəyyən edin:",
    answers: [
      { answer: "\\( 32,3 ≤ \\overline{X} ≤ 32,5\\)", type: "true" },
      { answer: "\\( 32,1 ≤ \\overline{X} ≤ 32,7\\)", type: "false" },
      { answer: "\\( 32,4 ≤ \\overline{X} ≤ 32,6\\)", type: "false" },
      { answer: "\\( 32,2 ≤ \\overline{X} ≤ 32,7\\)", type: "false" },
      { answer: "\\( 32,1 ≤ \\overline{X} ≤ 32,4\\)", type: "false" },
    ],
  },
  {
    id: 438,
    Question:
      "438. Şəhər telefon şəbəkəsində 100 müayinə nəticəsində telefon danışıqlarının orta müddətinin 4 dəq, orta kvadratik uzuqlaşmasının isə  2 dəq olması müəyyənləşdirilmişdir: 0,954 ehtimalla telefon danışıqlarının müddətini tapın:",
    answers: [
      { answer: "3.6-dan 4,4 dəqiqəyə qədər", type: "true" },
      { answer: "4,0-dən 4,4-ə", type: "false" },
      { answer: "0,4-dən 4,4-ə", type: "false" },
      { answer: "0,4-dən 3,6-ya", type: "false" },
      { answer: "3,6-dan 4,0-ə", type: "false" },
    ],
  },
  {
    id: 439,
    Question: "439. İstiqamətinə görə əlaqələr necə olur?",
    answers: [
      { answer: "Düz", type: "true" },
      { answer: "Mülayim", type: "false" },
      { answer: "Düz xətli", type: "false" },
      { answer: "Xətti", type: "false" },
      { answer: "Qeyri-xətti", type: "false" },
    ],
  },
  {
    id: 440,
    Question: "440. Analitik ifadəyə görə əlaqələr hansı əlaqələrə bölünür?",
    answers: [
      { answer: "Əyrixətli və düzxətli əlaqəyə", type: "true" },
      { answer: "Sıx əlaqəyə", type: "false" },
      { answer: "Əyrixətli əlaqəyə", type: "false" },
      { answer: "Düzxətli əlaqəyə", type: "false" },
      { answer: "Tərs əlaqəyə", type: "false" },
    ],
  },
  {
    id: 441,
    Question:
      "441. Aşağıdakılaran hansı funksional əlaqənin mahiyyətinə uyğun gəlir?",
    answers: [
      {
        answer:
          "Amil əlamətinin bir qiymətinə nətij əlamətinin bir qiyməti uyğun gəlir; İki əlamət arasında əlaqədir;",
        type: "true",
      },
      {
        answer:
          "Amil əlamətinin bir qiymətinə nətijə əlamətinin bir neçə qiyməti uğundur;",
        type: "false",
      },
      { answer: "İki əlamət arasında əlaqədir;", type: "false" },
      { answer: "Bir neçə əlamət arasında əlaqədir;", type: "false" },
      { answer: "Riyazi ifadəyə malik olan əlaqədir.", type: "false" },
    ],
  },
  {
    id: 442,
    Question:
      "442. Əlaqənin analitik ifadəsi verilən hansı təhlil metodu ilə müəyyənləşdirilir?",
    answers: [
      { answer: "Reqressiya", type: "true" },
      { answer: "Korrelyasiya", type: "false" },
      { answer: "Qruplaşdırma", type: "false" },
      { answer: "Yekunlaşdırma", type: "false" },
      { answer: "Dinamika", type: "false" },
    ],
  },
  {
    id: 443,
    Question:
      "443. İki əlamət arasındakı əlaqənin istiqamətini və sıxlığını hansı əmsal xarakterizə edir?",
    answers: [
      { answer: "Qoşa korrelyasiya əmsalı", type: "true" },
      { answer: "Xüsusi korrelyasiya əmsalı", type: "false" },
      { answer: "Çoxluq korrelyasiya əmsalı", type: "false" },
      { answer: "Konkordasiya əmsalı", type: "false" },
      { answer: "Ranq korrelyasiya əmsalı", type: "false" },
    ],
  },
  {
    id: 444,
    Question:
      "444. Bunlardan hansı əyrixətli asılılığı öyrənmək üçün tətbiq edilir?",
    answers: [
      {
        answer: "\\( \\eta = \\sqrt{ \\frac{\\delta^2}{\\sigma^2} } \\)",
        type: "true",
      },
      {
        answer: "\\( E = a_1 \\cdot \\frac{\\overline{X}}{\\overline{H}} \\)",
        type: "false",
      },
      {
        answer:
          "\\( p = \\frac{\\overline{x\\cdot u} - x \\cdot \\overline{u}}{\\sigma_x \\cdot \\sigma_{\\overline{u}}} \\)",
        type: "false",
      },
      { answer: "\\( y_x = a_0 + a_1 x \\)", type: "false" },
      { answer: "\\( W = \\frac{12c}{M^2(H^3 - H)} \\)", type: "false" },
    ],
  },
  {
    id: 445,
    Question:
      "445. Verilən metodlardan hansı hadisələr arasındakı əlaqənin mövcudluğu və istiqamətini müəyyənləşdirməyə imkan verir?",
    answers: [
      { answer: "Qruplaşdırma", type: "false" },
      { answer: "İndeks", type: "false" },
      { answer: "Orta kəmiyyətlər", type: "false" },
      { answer: "Reqressiya", type: "false" },
      { answer: "Korrelyasiya", type: "true" },
    ],
  },
  {
    id: 446,
    Question: "446. Statistik asılılıq:",
    answers: [
      {
        answer:
          "Əlamətin bir qiymətinə nəticə əlamətinin orta qiyməti uyğun gəlir",
        type: "true",
      },
      {
        answer:
          "Əlamətin bir qiymətinə digər əlamətin müəyyən qiymətləri uyğun gəlir",
        type: "false",
      },
      {
        answer:
          "Əlamətin bir qiymətinə digər əlamətin yalnız bir qiyməti uyğun gəlir",
        type: "false",
      },
      { answer: "Əlamətin bir qiymətinə 2 qiyməti uyğun gəlir", type: "false" },
      {
        answer: "Əlamətin qiyməti ilə nəticə əlaməti arasında asılılıq yoxdur",
        type: "false",
      },
    ],
  },
  {
    id: 447,
    Question: "447. Korrelyasiya əlaqəsi – bu:",
    answers: [
      {
        answer:
          "Nəticə əlamətinin orta qiymətinin amil əlamətinin dəyişməsindən asılılığıdır",
        type: "true",
      },
      {
        answer:
          "Nəticə əlamətinin bir neçə qiymətinə uyğun gələn səbəb asılılığıdır",
        type: "false",
      },
      {
        answer: "Nəticə əlamətinin qiyməti amil əlamətindən asılı deyil",
        type: "false",
      },
      {
        answer: "Müşahidələrin çoxluğu halında səbəb asılılığının növüdür",
        type: "false",
      },
      {
        answer: "Nəticə əlamətinin yalnız bir amil əlamətindən asılılığıdır",
        type: "false",
      },
    ],
  },
  {
    id: 448,
    Question:
      "448. Spirmen və Kendelin korrelyasiya əmsalları daha necə adlanır?",
    answers: [
      { answer: "Ranq korrelyasiya əmsalları", type: "true" },
      { answer: "Qarşılıqlı qovuşma əmsalları", type: "false" },
      { answer: "Assosiasiya əmsalları", type: "false" },
      { answer: "Variasiya əmsalları", type: "false" },
      { answer: "Xətti korellyasiya əmsalı", type: "false" },
    ],
  },
  {
    id: 449,
    Question:
      "449. Determinasiya əmsalı aşağıdakı intervalardan hansında qiymət alır?",
    answers: [
      { answer: "\\([0; +1]\\)", type: "true" },
      { answer: "\\([0; +\\infty)\\)", type: "false" },
      { answer: "\\([-1; +1]\\)", type: "false" },
      { answer: "\\([-1; 0]\\)", type: "false" },
      { answer: "\\([\\infty ; 1]\\)", type: "false" },
    ],
  },
  {
    id: 450,
    Question: "450. Əgər determinasiya əmsalı 1-ə bərabərdirsə, onda:",
    answers: [
      {
        answer:
          "Amil əlamətinin variasiyası nəticə əlamətinin variasiyasını tam ifadə edir",
        type: "true",
      },
      {
        answer:
          "Amil əlamətinin variasiyası nəticə əlamətinin variasiyasına təsir etmir",
        type: "false",
      },
      { answer: "Zəif təsir edir", type: "false" },
      { answer: "Güclü təsir edir", type: "false" },
      { answer: "Nəzərə çarpan dərəcədə təsir edir", type: "false" },
    ],
  },
  {
    id: 451,
    Question:
      "451. Verilmiş ərazidə yaşayan əhalinin bölgü sırasının milli mənsubiyyət əlamətinə görə qruplaşdırılması necə adlanır:",
    answers: [
      { answer: "Atributiv", type: "true" },
      { answer: "Variasiya sırası", type: "false" },
      { answer: "Alternativ", type: "false" },
      { answer: "Diskret", type: "false" },
      { answer: "Fasiləli", type: "false" },
    ],
  },
  {
    id: 452,
    Question: "452. Ümumi dispersiyanın həcmi xarakterizə edir:",
    answers: [
      {
        answer: "Bütün amillərin təsiri altında yaranan əlamətin variasiyasını",
        type: "true",
      },
      { answer: "Sistematik variasiyanı", type: "false" },
      { answer: "Təsadüfü variasiyanı", type: "false" },
      { answer: "Alternativ əlamətin variasiyasını", type: "false" },
      { answer: "Qrupdaxili variasiyanı", type: "false" },
    ],
  },
  {
    id: 453,
    Question:
      "453. Variasiyanı öyrənmək və ölçmək üçün aşağıdakı göstəricilərdən istifadə olunmur:",
    answers: [
      { answer: "Kontinğensiya əmsalı", type: "true" },
      { answer: "Variasiya genişliyi", type: "false" },
      { answer: "Orta kvadrtik uzaqlaşma", type: "false" },
      { answer: "Ossilyasiya əmsalı", type: "false" },
      { answer: "Variasiya əmsalı", type: "false" },
    ],
  },
  {
    id: 454,
    Question: "454. Emprik determinasiya əmsalı necə hesablanır?",
    answers: [
      {
        answer:
          "Qruplaşdırma əlamətinin variasiyası ilə müəyyən olunan öyrənilən əlamətin ümumi variasiyasının nisbətinin kökaltı ifadəsi kimi",
        type: "true",
      },
      {
        answer: "Qruplararası dispersiyanın ümumi dispersiyaya nisbəti kimi",
        type: "false",
      },
      {
        answer: "Qrupdaxili dispersiyanın ümumi dispersiyaya nisbəti kimi",
        type: "false",
      },
      {
        answer:
          "Qruplararası dispersiyanın orta qrupdaxili dispersiyaya nisbəti kimi",
        type: "false",
      },
      {
        answer: "Orta kəmiyyətin ümumi dispersiyaya nisbəti kimi",
        type: "false",
      },
    ],
  },
  {
    id: 455,
    Question: "455. Orta qrupdaxili dispersiya xarakterizə edir:",
    answers: [
      { answer: "Təsadüfi variasiyanı", type: "true" },
      {
        answer: "Bütün amillərin təsiri nəticəsində ümumi variasiyanı",
        type: "false",
      },
      { answer: "Nəticə əlamətinin variasiyasını", type: "false" },
      {
        answer:
          "Amil əlamətinin təsiri altında öyrənilən əlamətin kəmiyyətində yaranan fərqləri",
        type: "false",
      },
      { answer: "Qruplaşdırma əlamətinin variasiyasını", type: "false" },
    ],
  },
  {
    id: 456,
    Question: "456. Qruplararası dispersiya xarakterizə edir:",
    answers: [
      { answer: "Qruplaşdırma əlamətinin variasiyasını", type: "true" },
      { answer: "Təsadüfü variasiyanı", type: "false" },
      { answer: "Nəticə əlamətinin variasiyasını", type: "false" },
      {
        answer:
          "Amil əlamətinin təsiri altında öyrənilən əlamətin kəmiyyətində yaranan fərqləri",
        type: "false",
      },
      {
        answer: "Bütün amillərin təsiri nəticəsində ümumi variasiyanı",
        type: "false",
      },
    ],
  },
  {
    id: 457,
    Question:
      "457. Reqressiya tənliyini qurmaq üçün aşağıdakı şərt ödənilməlidir:",
    answers: [
      { answer: "Hər iki əlamət kəmiyyət əlaməti olmalıdır", type: "true" },
      {
        answer: "Yalnız nəticə əlaməti kəmiyyət əlaməti olmalıdır",
        type: "false",
      },
      {
        answer: "Yalnız amil əlaməti kəmiyyət əlaməti olmalıdır",
        type: "false",
      },
      { answer: "Hər iki əlamət keyfiyyət əlaməti olmalıdır", type: "false" },
      {
        answer: "Yalnız amil əlaməti keyfiyyət əlaməti olmalıdır",
        type: "false",
      },
    ],
  },
  {
    id: 458,
    Question: "458. Ən kiçik kvadratlar üsulu istifadə olunur:",
    answers: [
      {
        answer: "Reqressiya tənliyinin parametrlərinin qiymətləndirilməsi üçün",
        type: "true",
      },
      { answer: "Əlaqənin analitik ifadəsi üçün", type: "false" },
      {
        answer: "Əlaqə sıxlığının kəmiyyət qiymətləndirilməsi üçün",
        type: "false",
      },
      { answer: "Əlaqənin mövcudluğunu aşkarlamaq üçün", type: "false" },
      { answer: "Əlaqənin istiqamətini müəyyənləşdirmək üçün", type: "false" },
    ],
  },
  {
    id: 459,
    Question:
      "459. Əgər iki keyfiyyət əlamətləri arasında əlaqə sıxlığı ölçülürsə, onda bu göstəricilərin hansından istifadə olunmur?",
    answers: [
      { answer: "Xətti korrelyasiya əmsalı", type: "true" },
      { answer: "Çuprovun qarşılıqlı qovuşma əmsalı", type: "false" },
      { answer: "Assosiasiya əmsalı", type: "false" },
      { answer: "Kontingensiya əmsalı", type: "false" },
      { answer: "Ranq korrelyasiya əmsalı", type: "false" },
    ],
  },
  {
    id: 460,
    Question:
      "460. Amil əlamətinin bir faiz artması nəticəsində nəticə əlamətinin necə faiz müəyyənləşdirmək üçün zəruridir:",
    answers: [
      { answer: "Elastiklik əmsalını hesablamaq", type: "true" },
      { answer: "Analitik qruplaşdırma aparmaq", type: "false" },
      {
        answer: "Reqressiya tənliyinin parametrlərini hesablamaq",
        type: "false",
      },
      { answer: "Korrelyasiya əmsalını hesablamaq", type: "false" },
      { answer: "Determinasiya əmsalını hesablamaq", type: "false" },
    ],
  },
  {
    id: 461,
    Question:
      "461. Bu dispersiya növlərindən hansı biri amil əlamətinin nəticə əlamətinə təsirini xarakterizə edir?",
    answers: [
      { answer: "Qruplararası", type: "true" },
      { answer: "Qrupdaxili", type: "false" },
      { answer: "Orta qrupdaxili", type: "false" },
      { answer: "Ümumi", type: "false" },
      { answer: "Cəmləmə qaydası", type: "false" },
    ],
  },
  {
    id: 462,
    Question:
      "462. Qoşa korrelyasiyanın xətti əmsalı 0,68-ə bərabərdir. Determinasiya əmsalının səviyyəsini tapın:",
    answers: [
      { answer: "46,24%", type: "true" },
      { answer: "147,06%", type: "false" },
      { answer: "68,0%", type: "false" },
      { answer: "82,46%", type: "false" },
      { answer: "44,24 %", type: "false" },
    ],
  },
  {
    id: 463,
    Question:
      "463. Əlamətlər arasında əlaqənin determinasiya əmsalı 62%-dir. Korrelyasiya əmsalı nəyə bərabərdir?",
    answers: [
      { answer: "0,787", type: "true" },
      { answer: "0,384", type: "false" },
      { answer: "0,620", type: "false" },
      { answer: "0,615", type: "false" },
      { answer: "Cavab yoxdur.", type: "false" },
    ],
  },
  {
    id: 464,
    Question: "464. Əlaqəni öyrənmək üçün hansı metodlardan istifadə olunur?",
    answers: [
      { answer: "Hamısı", type: "true" },
      { answer: "Analitik qruplaşdırma", type: "false" },
      { answer: "Qrafik metodu", type: "false" },
      { answer: "Reqressiya-korrelyasiya", type: "false" },
      { answer: "Paralel sıraların gətirilməsi", type: "false" },
    ],
  },
  {
    id: 465,
    Question:
      "465. Reqressiya tənliyinin qurulması zamanı tənliyin parametrlərini tapmaq üçün statistikada hansı usuldan istifadə olunur?",
    answers: [
      { answer: "Ən kiçik kvadratlar üsulu", type: "true" },
      { answer: "İndeks üsulu", type: "false" },
      { answer: "Qrafik usulu", type: "false" },
      { answer: "Korrelyasiya üsulu", type: "false" },
      { answer: "Qruplaşdırma üsulu", type: "false" },
    ],
  },
  {
    id: 466,
    Question:
      "466. Qruplararası dispersiyanın ümumi dispersiyaya nisbətinin kvadrat köku hansı göstəricidir?",
    answers: [
      { answer: "Emprik korrelyasiya nisbəti", type: "true" },
      { answer: "Dispersiya", type: "false" },
      { answer: "Orta xətti uzaqlaşma", type: "false" },
      { answer: "Reqressiya", type: "false" },
      { answer: "Orta kvadratik uzaqlaşma", type: "false" },
    ],
  },
  {
    id: 467,
    Question:
      "467. Nəticə əlamətinin orta qiymətinin 87,5, amil əlamətinin orta qiymətinin 11,8, a1 parpametrinin 1,87 olduğunu bilərək elastiklik əmsalını hesablayın:",
    answers: [
      { answer: "0,25", type: "true" },
      { answer: "0,68", type: "false" },
      { answer: "0,35", type: "false" },
      { answer: "-0,16", type: "false" },
      { answer: "-0,38", type: "false" },
    ],
  },
  {
    id: 468,
    Question:
      "468. Verilənlərdən hansı dinamika sırasının mahiyyətinə uyğun gəlir?",
    answers: [
      {
        answer: "Zamanda məjmunun xarakteristikasının dəyişməsi",
        type: "true",
      },
      {
        answer: "Məkanda məjmunun xarakteristikasının dəyişməsi",
        type: "false",
      },
      { answer: "Hər hansı əlamət üzrə məcmunun quruluşu", type: "false" },
      { answer: "Əlamətin variasiyasının səviyyəsi", type: "false" },
      { answer: "Məcmunun tərkibinin dəyişməsini", type: "false" },
    ],
  },
  {
    id: 469,
    Question: "469. Dinamika sırasının səviyyəsi:",
    answers: [
      {
        answer: "Müəyyən tarixə və ya zaman anına göstəricinin qiymətidir",
        type: "true",
      },
      {
        answer: "Məcmuda variasiya edən əlamətin müəyyən qiymətidir",
        type: "false",
      },
      { answer: "Göstəricilərin nisbətidir", type: "false" },
      { answer: "Göstəricilərin siyahısıdır", type: "false" },
      { answer: "Göstəricinin orta səviyyəsidir", type: "false" },
    ],
  },
  {
    id: 470,
    Question:
      "470. Verilənlərdən hansı ilə fasiləli dinamika sırasının orta səviyyəsi müəyyənləşdirilir?",
    answers: [
      { answer: "Hesabi orta", type: "true" },
      { answer: "Harmonik orta", type: "false" },
      { answer: "Xronoloci orta", type: "false" },
      { answer: "Kvadratik orta", type: "false" },
      { answer: "Kub orta", type: "false" },
    ],
  },
  {
    id: 471,
    Question:
      "471. Hadisənin ümumi inkişaf meylini müəyyənləşdirmək üçün verilən metodlardan hansı tətbiq edilir?",
    answers: [
      { answer: "Bunların hamısı", type: "true" },
      { answer: "Sürüşkən orta kəmiyyətlər", type: "false" },
      { answer: "Analitik hamarlaşdırma metodu", type: "false" },
      { answer: "Furye sırası", type: "false" },
      { answer: "Fasilələrin iriləşdirilməsi metodu", type: "false" },
    ],
  },
  {
    id: 472,
    Question: "472. Bunlardan hansı orta mütləq artımın düsturudur?",
    answers: [
      {
        answer: "\\( \\Delta = \\frac{й_H - й_0}{H - 1} \\)",
        type: "true",
      },
      {
        answer: "\\( \\bar{й} = \\frac{\\sum йn}{\\sum m} \\)",
        type: "false",
      },
      {
        answer:
          "\\( \\bar{R}_N = \\sqrt[H]{R_1 \\cdot R_2 \\cdot R_3 \\cdots R_H} \\)",
        type: "false",
      },
      {
        answer: "\\( \\bar{T}_N = \\sqrt[H-1]{\\frac{й_H}{й_1}} \\)",
        type: "false",
      },
      {
        answer: "\\( \\Delta = й_u - й_{u-1} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 473,
    Question:
      "473. Mövsümülük indeksini hesablamaq üçün bu və ya digər ay üçün faktiki səviyyə:",
    answers: [
      { answer: "İl ərzində orta aylıq səviyyəyə bölünür;", type: "true" },
      { answer: "Özündən əvvəlki səviyyəyə bölünür;", type: "false" },
      {
        answer: "Həmin ay üçün hamarlaşdırılmış səviyyəyə bölünür;",
        type: "false",
      },
      { answer: "Əsas səviyyəyə bölünür;", type: "false" },
      { answer: "Müqayisəli səviyyəyə bölünür.", type: "false" },
    ],
  },
  {
    id: 474,
    Question:
      "474. Məhsulun maya dəyəri 14 % yüksələrsə, həjmi isə 6 % azalarsa, istehsal xərjlərini hesablayın.",
    answers: [
      { answer: "107", type: "true" },
      { answer: "120", type: "false" },
      { answer: "121", type: "false" },
      { answer: "125", type: "false" },
      { answer: "127", type: "false" },
    ],
  },
  {
    id: 475,
    Question:
      "475. Bərabər fasiləli an dinamika sırasında orta səviyyə hansı düsturun köməyi ilə hesablanır?",
    answers: [
      { answer: "Xronoloji orta kəmiyyətin düsturu ilə", type: "true" },
      { answer: "Hesabi orta kəmiyyətin çəkili düsturu ilə", type: "false" },
      { answer: "Elastiklik əmsalı ilə", type: "false" },
      { answer: "Orta illiki artım göstəricisi ilə", type: "false" },
      { answer: "Nisbi dəyişmə göstəricisi ilə", type: "false" },
    ],
  },
  {
    id: 476,
    Question:
      "476. Mütləq artımın müqayisə üçün əsas götürülmüş səviyyəyə nisbətindən alınan göstəriciyə nə ad verirlər?",
    answers: [
      { answer: "Nisbi artım", type: "true" },
      { answer: "Mütləq artım", type: "false" },
      { answer: "Korrelyasiya nisbəti", type: "false" },
      { answer: "Artım sürəti", type: "false" },
      { answer: "Koordinasiya əmsalı", type: "false" },
    ],
  },
  {
    id: 477,
    Question:
      "477. Verilənlərdən hansı bir faiz nisbi artımın mütləq göstəricisinin düsturudur?",
    answers: [
      { answer: "\\( \\Delta_{\\%} = 0.01 \\cdot y_{i-1} \\)", type: "true" },
      { answer: "\\( \\Delta_{\\%} = y_{i-1} \\)", type: "false" },
      {
        answer: "\\( \\Delta_{\\%} = \\frac{y_i}{p} \\cdot y_{i-1} \\)",
        type: "false",
      },
      {
        answer: "\\( \\Delta_{\\%} = 0.01 \\cdot \\frac{r}{p} \\)",
        type: "false",
      },
      { answer: "Bunların hamısı.", type: "false" },
    ],
  },
  {
    id: 478,
    Question:
      "478. Sosial-iqtisadi hadisələrin uzun dövr üçün inkişaf prosesini xarakterizə etmək üçün hansı göstəricilər hesablanır?",
    answers: [
      {
        answer: "Orta illik mütləq artım və orta illik artım sürəti",
        type: "true",
      },
      { answer: "Orta illik nisbi artım", type: "false" },
      { answer: "Cəlbetmə əmsalı", type: "false" },
      { answer: "Orta illik artım sürəti", type: "false" },
      { answer: "Koordinasiya əmsalı", type: "false" },
    ],
  },
  {
    id: 479,
    Question:
      "479. \\(\\sum y = 266.2,\\ n = 11,\\ \\sum yt = 158.2,\\ \\sum t^2 = 110\\) olduğunu bilərək trend modelini qurun.",
    answers: [
      { answer: "\\( y = 24.2 + 1.438t \\)", type: "true" },
      { answer: "\\( y = 4.2 + 1.438t \\)", type: "false" },
      { answer: "\\( y = 2 + 1.438t \\)", type: "false" },
      { answer: "\\( y = 24.2 + 11.438t \\)", type: "false" },
      { answer: "\\( y = 2 + 3.4t \\)", type: "false" },
    ],
  },
  {
    id: 480,
    Question: "480. Bunlardan hansı mövsümlülük indeksidir?",
    answers: [
      {
        answer:
          "\\( I_n = \\frac{\\sum \\frac{\\ddot{u}_u}{\\ddot{u}_{\\text{mu}}}} {n} \\)",
        type: "true",
      },
      {
        answer: "\\( I_{\\text{n.a.ə.}} = \\frac{1}{I_n} \\)",
        type: "false",
      },
      {
        answer: "\\( u_n = \\frac{n_1}{n_0} \\)",
        type: "false",
      },
      {
        answer: "\\( u_\\ell = \\frac{e_1}{e_0} \\)",
        type: "false",
      },
      {
        answer: "\\( I_{n2} = \\frac{\\sum n_2 c_1}{\\sum n_0 c_1} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 481,
    Question: "481. Dinamika sırasının səviyyəsi nədir?",
    answers: [
      {
        answer:
          "Müəyyən vaxt kəsiyinə və ya vaxt anına göstəricinin qiymətidir;",
        type: "true",
      },
      { answer: "Məcmuda variasiya edən əlamətin qiymətidir;", type: "false" },
      {
        answer:
          "Məcmuda öyrənilən əlamətin ümumiləşdirici xarakteristikasıdır;",
        type: "false",
      },
      {
        answer: "Müəyyən zaman kəsiyinə göstəricinin qiymətləri məcmusudur;",
        type: "false",
      },
      { answer: "Müəyyən məkanda  hadisənin dəyişməsidir;", type: "false" },
    ],
  },
  {
    id: 482,
    Question:
      "482. Fasiləli dinamika sırasının orta səviyyəsi hansı düsturla hesablınır:",
    answers: [
      { answer: "Hesabi orta kəmiyyət", type: "true" },
      { answer: "Harmonik orta kəmiyyət", type: "false" },
      { answer: "Həndəsi orta kəmiyyət", type: "false" },
      { answer: "Kvadratik orta kəmiyyət", type: "false" },
      { answer: "Xronoloji orta kəmiyyət", type: "false" },
    ],
  },
  {
    id: 483,
    Question: "483. Mütləq artım necə hesablanır:",
    answers: [
      { answer: "Sıranın səviyyələrinin fərqi kimi", type: "true" },
      { answer: "Sıranın səviyyələri cəmi kimi", type: "false" },
      { answer: "Sıranın səviyyələrinin nisbəti kimi", type: "false" },
      {
        answer: "Sıranın sonuncu və birinci səviyyəsinin fərqi kimi",
        type: "false",
      },
      {
        answer: "Sonuncu səviyyənin birinci səviyyəyə nisbəti kimi",
        type: "false",
      },
    ],
  },
  {
    id: 484,
    Question:
      "484. Trendi tapmaq üçün aşağıdakı metodlardan hansı tətbiq olunur:",
    answers: [
      { answer: "Sürüşkən orta kəmiyyətlərdən", type: "true" },
      { answer: "Nisbi artımın hesablanılması", type: "false" },
      { answer: "1% nisbi artımın mütləq qiyməti", type: "false" },
      { answer: "Sıranın səviyyələrinin cəmindən", type: "false" },
      { answer: "Artım sürətinin hesablanılması", type: "false" },
    ],
  },
  {
    id: 485,
    Question:
      "485. Rüblük artım əmsalları: 1,02, 1,015, 1,03,1,025-ə bərabər olarsa, illik artım əmsalına hesablayın:",
    answers: [
      { answer: "1,093", type: "true" },
      { answer: "1,023", type: "false" },
      { answer: "1,006", type: "false" },
      { answer: "1,011", type: "false" },
      { answer: "1,019", type: "false" },
    ],
  },
  {
    id: 486,
    Question:
      "486. Orta illik artım əmsalı 1,02-yə bərabərdir. Orta hesabla rüblük artım əmsalı nəyə bərabərdir?",
    answers: [
      { answer: "0,255", type: "true" },
      { answer: "0,117", type: "false" },
      { answer: "1,010", type: "false" },
      { answer: "1,005", type: "false" },
      { answer: "1,001", type: "false" },
    ],
  },
  {
    id: 487,
    Question:
      "487. Rüblük mütləq artımlar 10,8, 12,16-ya bərabər olarsa orta mütləq artımı müəyyən edin:",
    answers: [
      { answer: "11,5", type: "true" },
      { answer: "2,5", type: "false" },
      { answer: "1,5", type: "false" },
      { answer: "11,7", type: "false" },
      { answer: "1,9", type: "false" },
    ],
  },
  {
    id: 488,
    Question:
      "488. Tikinti məhsulunun ümumi buraxılışının dinamikası haqqında aşağıdakı məlumatlar verilmişdir: 2008-ci ilin I rübü 1040, 2009-cu ilin 1 rübü 1250. Tikintidə ümumi buraxılışın artım sürətini hesablayın:",
    answers: [
      { answer: "1,2", type: "true" },
      { answer: "4,2", type: "false" },
      { answer: "1,9", type: "false" },
      { answer: "0,9", type: "false" },
      { answer: "2,8", type: "false" },
    ],
  },
  {
    id: 489,
    Question:
      "489. Aşağıdakı sadalanan statistik indekslərin hansından keyfiyyət göstəricilərinin orta səviyyəsinin dinamikasını qiymətləndirmək üçün istifadə olunur:",
    answers: [
      { answer: "Dəyişən tərkibli indeks", type: "true" },
      { answer: "Indekslərin orta formaları", type: "false" },
      { answer: "Fərdi indekslər", type: "false" },
      { answer: "Ümumi indekslər", type: "false" },
      { answer: "Dəyişən çəkilərlə indeks", type: "false" },
    ],
  },
  {
    id: 490,
    Question:
      "490. Orta kəmiyyətlərin hansından fasiləli dinamika sıralarında orta səviyyəni müəyyənləşdirmək üçün istifadə olunur:",
    answers: [
      { answer: "Hesabi və xronoloji orta", type: "true" },
      { answer: "Həndəsi orta", type: "false" },
      { answer: "Harmonik orta", type: "false" },
      { answer: "Quruluş orta", type: "false" },
      { answer: "Kvadratik orta", type: "false" },
    ],
  },
  {
    id: 491,
    Question:
      "491. Dinamika sıralarında artım əmsallarını tapmaq üçün orta kəmiyyətin hansı növündən istifadə olunur:",
    answers: [
      { answer: "Həndəsi və kvadratik", type: "true" },
      { answer: "Quruluş orta kəmiyyətləri", type: "false" },
      { answer: "Hesabi", type: "false" },
      { answer: "Harmonik", type: "false" },
      { answer: "Xronoloji", type: "false" },
    ],
  },
  {
    id: 492,
    Question:
      "492. Trend tənliyi aşağıdakı kimidir: \\( \\overline{Y_t} = 32{,}5 - 4{,}6 \\cdot t \\) t=1 üçün orta hesabla əlamət nə qədər dəyişər:",
    answers: [
      { answer: "4,6 qədər azalar", type: "true" },
      { answer: "4,6 qədər artar", type: "false" },
      { answer: "32,5 qədər artar", type: "false" },
      { answer: "32,5 qədər azalar", type: "false" },
      { answer: "Dəyişməz", type: "false" },
    ],
  },
  {
    id: 493,
    Question: "493. Interpolyasiya nə deməkdir?",
    answers: [
      {
        answer: "Dinamika sırası daxilində çatışmayan məlumatların tapılması",
        type: "true",
      },
      { answer: "Proqnoz qiymətinin hesablanılması", type: "false" },
      { answer: "Dinamika sırasının əsas inkişaf meyli", type: "false" },
      {
        answer:
          "Olan məlumatlar əsasında dinamika sırasının əvvəlində çatışmayan qiymətlərin tapılması",
        type: "false",
      },
      { answer: "Əlaqənin sıxlığının ölçülməsi", type: "false" },
    ],
  },
  {
    id: 494,
    Question: "494. Ekstrapolyasiya nə deməkdir?",
    answers: [
      { answer: "Proqnoz qiymətinin hesablanılması", type: "true" },
      {
        answer:
          "Olan məlumatlar əsasında dinamika sırasının əvvəlində çatışmayan qiymətlərin tapılması",
        type: "false",
      },
      { answer: "Dinamika sırasının əsas inkişaf meyli", type: "false" },
      {
        answer: "Dinamika sırası daxilində çatışmayan məlumatların tapılması",
        type: "false",
      },
      { answer: "Əlaqənin sıxlığının ölçülməsi", type: "false" },
    ],
  },
  {
    id: 495,
    Question:
      "495. İnflyasiya nəticəsində birinci ildə əmtəənin qiyməti əvvəlki ilə nisbətən 2 dəfə, ikinci ildə isə eyni ilə nisbətən üç dəfə artmışdır. Məlumdur ki, iki il ərzində qiymət 6 dəfə artmışdır. Qiymətin orta artım sürətini hesablayın:",
    answers: [
      { answer: "2,45 dəfə", type: "true" },
      { answer: "2,3 dəfə", type: "false" },
      { answer: "3 dəfə", type: "false" },
      { answer: "2,5 dəfə", type: "false" },
      { answer: "2 dəfə", type: "false" },
    ],
  },
  {
    id: 496,
    Question:
      "496. Aşağıdakı məlumatlar əsasında orta mütləq artımı hesablayın və onun hansı aralıqda olmasını müəyyənləşdirin:\nAylar: 1 2 3 4 5\nDaşımalar (mln t): 84, 79, 89, 87, 91",
    answers: [
      { answer: "1,5-2,0", type: "true" },
      { answer: "1,5-ə qədər", type: "false" },
      { answer: "2,0 və daha çox", type: "false" },
      { answer: "2.0-3,0", type: "false" },
      { answer: "3,0-6,0", type: "false" },
    ],
  },
  {
    id: 497,
    Question:
      "497. Respublikada sərnişin daşımaları haqqında məlumatlar əsasında 2003-2009-cu illərdə onun dinamikasının \\( Y = 100 \\cdot 1{,}8^t \\) tənliyi ilə ifadə olunduğu müəyyənləşdirilmişdir. Bu tənliyin parametrlərindən istifadə edərək, 2004-cü il üçün sərnişin daşımalarının həcmini müəyyən edin:",
    answers: [
      { answer: "324", type: "true" },
      { answer: "216", type: "false" },
      { answer: "116,64", type: "false" },
      { answer: "125,97", type: "false" },
      { answer: "127,21", type: "false" },
    ],
  },
  {
    id: 498,
    Question:
      "498. 2008-2009-cu illər taxılın məhsuldarlığının artım meylini \\( y = 26{,}34 + 1{,}85t \\) trend tənliyi ilə təsvir etmək olar. Bu inkişaf meylini yayaraq, 2010-cu il üçün taxılın gözlənilən məhsuldarlığını müəyyən edin:",
    answers: [
      { answer: "30,04", type: "true" },
      { answer: "22,20", type: "false" },
      { answer: "48,54", type: "false" },
      { answer: "24,24", type: "false" },
      { answer: "44,84", type: "false" },
    ],
  },
  {
    id: 499,
    Question:
      "499. Dəyişən tərkibli indeks 118%-ə, quruluş dəyişikliyi indeksi 107%-ə bərabər olarsa, sabit tərkibli indeksi hesablayın:",
    answers: [
      { answer: "110", type: "true" },
      { answer: "115", type: "false" },
      { answer: "111", type: "false" },
      { answer: "117", type: "false" },
      { answer: "119", type: "false" },
    ],
  },
  {
    id: 500,
    Question:
      "500. Avtonəqliyyat müəssisəsi üzrə yüklərin daşınması haqqında aşağıdakı məlumatlar verilmişdir:\nYanvar: 35 mln man, Fevral: 40 mln man, Mart: 42 mln man, Aprel: 50 mln man. Bu məlumatlara əsasən yük daşımaların orta aylıq artım sürətlərini hesablayın:",
    answers: [
      { answer: "112,6 %", type: "true" },
      { answer: "127 %", type: "false" },
      { answer: "115 %", type: "false" },
      { answer: "117,5 %", type: "false" },
      { answer: "119 %", type: "false" },
    ],
  },
];

export default Questions;
