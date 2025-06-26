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
      { answer: "0,80", type: "false" },
      { answer: "2,37", type: "false" },
      { answer: "1,39", type: "false" },
      { answer: "1,26", type: "true" },
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
    question:
      "Seçmənin orta xətasını iki dəfə azaltmaq üçün seçmənin həcmini necə dəyişmək lazımdır?",
    options: [
      { text: "4 dəfə artırmaq", type: "false" },
      { text: "5 dəfə artırmaq", type: "false" },
      { text: "3.2 dəfə artırmaq", type: "false" },
      { text: "1 dəfə artırmaq", type: "false" },
      { text: "3 dəfə artırmaq", type: "true" },
    ],
  },
  {
    id: 55,
    question:
      "Seçmənin orta xətasını üç dəfə azaltmaq üçün seçmənin həcmini necə dəyişmək lazımdır?",
    options: [
      { text: "9 dəfə artırmaq", type: "true" },
      { text: "4 dəfə azaltmaq", type: "false" },
      { text: "3 dəfə azaltmaq", type: "false" },
      { text: "2 dəfə azaltmaq", type: "false" },
      { text: "6 dəfə azaltmaq", type: "false" },
    ],
  },
  {
    id: 56,
    question:
      "Seçmə ortanın müəyyən edilməsində seçmənin limit xətası hansı düsturla hesablanır?",
    options: [
      { text: "Δ = tμₓ", type: "true" },
      { text: "μ² = σ² / n", type: "false" },
      { text: "μ = √(pq / n)", type: "false" },
      { text: "μ² = pq / n", type: "false" },
      { text: "μ = pq / n", type: "false" },
    ],
  },
  {
    id: 57,
    question:
      "Hissənin müəyyən edilməsində seçmənin limit xətası hansı düsturla hesablanır?",
    options: [
      { text: "Δ = t√(pq / n)", type: "true" },
      { text: "Δ = t√(σ² / n)", type: "false" },
      { text: "Δ = tμₓ", type: "false" },
      { text: "Δ = (t·σ) / √n", type: "false" },
      { text: "Δ = t·σ / n", type: "false" },
    ],
  },
  {
    id: 58,
    question:
      "Əgər növbətçilərin müəyyən edilməsində hər bir tələbə əlifba siyahısı ilə seçilmişsə, seçmənin hansı üsulundan istifadə edilmişdir?",
    options: [
      { text: "Mexaniki", type: "true" },
      { text: "Kombinələşdirilmiş", type: "false" },
      { text: "An", type: "false" },
      { text: "Tipik", type: "false" },
      { text: "Seriyalı", type: "false" },
    ],
  },
  {
    id: 59,
    question:
      "Əgər N=1000, t=3, σ² = 1.1, Δ = 0.2 olarsa, təkrar olmayan təsadüfi seçmədə seçmənin həcmi (n) neçəya bərabərdir?",
    options: [
      { text: "198", type: "false" },
      { text: "214", type: "true" },
      { text: "248", type: "false" },
      { text: "Müəyyən etmək olmur", type: "false" },
      { text: "220", type: "false" },
    ],
  },
  {
    id: 60,
    question:
      "Əgər N=1000, t=2, σ² = 1.2, Δ = 0.1 olarsa, təkrar olmayan təsadüfi seçmədə seçmənin həcmi (n) neçəya bərabərdir?",
    options: [
      { text: "480", type: "false" },
      { text: "576", type: "true" },
      { text: "240", type: "false" },
      { text: "Müəyyən etmək olmur", type: "false" },
      { text: "300", type: "false" },
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
      "70) Bərabər fasilələr variasiya sırası üçün median aşağıdakı düsturla hesablanır: \\( M_e = X_{min} + i \\cdot \\frac{\\frac{\\sum f}{2} - S_{me-1}}{f_{me}} \\) \nBu düsturda \\( f_{me} \\) ilə nə işarə edilmişdir?",
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
      "73) Seçmənin limit xətası düsturundakı \\( \\Delta = t \\cdot \\frac{\\sigma}{\\sqrt{n}} \\) t – simvolu ilə hansı kəmiyyət işarə edilmişdir?",
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
      "82) Bərabər fasiləli variasiya sırası üçün moda aşağıdakı düsturla hesablanır: \\( M_0 = X_{min} + i \\cdot \\frac{f_{M_0}-f_{M_0-1}}{(f_{M_0} - f_{M_0-1}) + (f_{M_0} - f_{M_0+1})} \\). Bu düsturda \\(X_{M_0 min}\\) simvolu ilə nə işarə edilmişdir?",
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
    "id": 114,
    "Question": "Əhalinin sayına dair məlumat bərabər fasilə ilə müəyyən vaxt anına verilərsə, orta illik sayı orta kəmiyyətin hansı düstur ilə hesablanmalıdır?",
    "answers": [
      { "answer": "\\( \\bar{S} = \\frac{1}{2}S_1 + S_2 + S_3 + \\dots + \\frac{1}{2}S_n \\)", "type": "true" },
      { "answer": "\\( \\bar{S} = \\frac{S_a + S_s}{2} \\)", "type": "false" },
      { "answer": "\\( \\bar{S} = \\frac{\\sum S_i t_i}{\\sum t_i} \\)", "type": "false" },
      { "answer": "\\( \\bar{R} = \\sqrt[n-1]{\\frac{S_n}{S_1}} \\)", "type": "false" }
    ]
  },
  {
    "id": 115,
    "Question": "Əhalinin sayına dair bərabər olmayan fasilələrlə məlumat verilərsə, ortalilik sayı orta kəmiyyətin hansı düstur ilə hesablanmalıdır?",
    "answers": [
      { "answer": "\\( \\bar{S} = \\frac{\\sum S_i t_i}{\\sum t_i} \\)", "type": "true" },
      { "answer": "\\( \\bar{S} = \\frac{S_a + S_s}{2} \\)", "type": "false" },
      { "answer": "\\( \\bar{S} = \\frac{1}{2}S_1 + S_2 + S_3 + \\dots + \\frac{1}{2}S_n \\)", "type": "false" },
      { "answer": "\\( \\bar{R} = \\sqrt[n-1]{\\frac{S_n}{S_1}} \\)", "type": "false" }
    ]
  },
  {
    "id": 116,
    "Question": "İlin əvvəlinə və axırına əhalinin sayına dair məlumat verilərsə, orta illik sayı orta kəmiyyətin hansı düstur ilə hesablanmalıdır?",
    "answers": [
      { "answer": "\\( \\bar{S} = \\frac{S_a + S_s}{2} \\)", "type": "true" },
      { "answer": "\\( \\bar{S} = \\frac{1}{2}S_1 + S_2 + \\dots + \\frac{1}{2}S_n \\)", "type": "false" },
      { "answer": "\\( \\bar{S} = \\frac{\\sum S_i t_i}{\\sum t_i} \\)", "type": "false" },
      { "answer": "\\( \\bar{R} = \\sqrt[n-1]{\\frac{S_n}{S_1}} \\)", "type": "false" }
    ]
  },
  {
    "id": 117,
    "Question": "Əhalinin sayına dair məlumat bərabər fasilə ilə müəyyən vaxt anına verilərsə, orta illik sayı orta kəmiyyətin hansı düstur ilə hesablanmalıdır?",
    "answers": [
      { "answer": "\\( \\bar{S} = \\frac{1}{2}S_1 + S_2 + S_3 + \\dots + \\frac{1}{2}S_n \\)", "type": "true" },
      { "answer": "\\( \\bar{S} = \\frac{S_a + S_s}{2} \\)", "type": "false" },
      { "answer": "\\( \\bar{S} = \\frac{\\sum S_i t_i}{\\sum t_i} \\)", "type": "false" },
      { "answer": "\\( \\bar{R} = \\sqrt[n-1]{\\frac{S_n}{S_1}} \\)", "type": "false" }
    ]
  },
  {
    "id": 118,
    "Question": "Uzun dövr ərzində əhalinin orta illik artım sürətini hesablamaq üçün orta kəmiyyətin hansı düsturundan istifadə olunmalıdır?",
    "answers": [
      { "answer": "\\( \\bar{R} = \\sqrt[n-1]{\\frac{S_n}{S_1}} \\)", "type": "true" },
      { "answer": "\\( \\bar{S} = \\frac{S_a + S_s}{2} \\)", "type": "false" },
      { "answer": "\\( \\bar{S} = \\frac{\\sum S_i t_i}{\\sum t_i} \\)", "type": "false" },
      { "answer": "\\( \\bar{S} = \\frac{1}{2}S_1 + S_2 + S_3 + \\dots + \\frac{1}{2}S_n \\)", "type": "false" }
    ]
  },
  {
    "id": 119,
    "Question": "Əhalinin təbii artım əmsalı hansı düsturla hesablanır?",
    "answers": [
      { "answer": "\\( R_{t.a.} = \\frac{(M - N) \\cdot 1000}{\\bar{S}} \\)", "type": "true" },
      { "answer": "\\( R_d = \\frac{N \\cdot 1000}{\\bar{S}} \\)", "type": "false" },
      { "answer": "\\( R_ö = \\frac{M \\cdot 1000}{\\bar{S}} \\)", "type": "false" },
      { "answer": "\\( r_g = \\frac{G \\cdot 1000}{\\bar{S}} \\)", "type": "false" },
      { "answer": "\\( r_m = \\frac{(G - K.g.) \\cdot 1000}{\\bar{S}} \\)", "type": "false" }
    ]
  },
  {
    "id": 120,
    "Question": "Əhalinin doğum əmsalı hansı düsturla hesablanır?",
    "answers": [
      { "answer": "\\( R_d = \\frac{N \\cdot 1000}{\\bar{S}} \\)", "type": "true" },
      { "answer": "\\( R_ö = \\frac{M \\cdot 1000}{\\bar{S}} \\)", "type": "false" },
      { "answer": "\\( r_g = \\frac{G \\cdot 1000}{\\bar{S}} \\)", "type": "false" },
      { "answer": "\\( R_{t.a.} = \\frac{(M - N) \\cdot 1000}{\\bar{S}} \\)", "type": "false" },
      { "answer": "\\( r_m = \\frac{(G - K.g.) \\cdot 1000}{\\bar{S}} \\)", "type": "false" }
    ]
  },
  {
    "id": 121,
    "Question": "Əhalinin ölüm əmsalı hansı düsturla hesablanır?",
    "answers": [
      { "answer": "\\( R_ö = \\frac{M \\cdot 1000}{\\bar{S}} \\)", "type": "true" },
      { "answer": "\\( r_g = \\frac{G \\cdot 1000}{\\bar{S}} \\)", "type": "false" },
      { "answer": "\\( R_{t.a.} = \\frac{(M - N) \\cdot 1000}{\\bar{S}} \\)", "type": "false" },
      { "answer": "\\( r_m = \\frac{(G - K.g.) \\cdot 1000}{\\bar{S}} \\)", "type": "false" },
      { "answer": "\\( R_d = \\frac{N \\cdot 1000}{\\bar{S}} \\)", "type": "false" }
    ]
  },
  {
    "id": 122,
    "Question": "Əhalinin Gəlmə əmsalı hansı düsturla hesablanır?",
    "answers": [
      { "answer": "\\( r_g = \\frac{G \\cdot 1000}{\\bar{S}} \\)", "type": "true" },
      { "answer": "\\( R_ö = \\frac{M \\cdot 1000}{\\bar{S}} \\)", "type": "false" },
      { "answer": "\\( R_{t.a.} = \\frac{(M - N) \\cdot 1000}{\\bar{S}} \\)", "type": "false" },
      { "answer": "\\( r_m = \\frac{(G - K.g.) \\cdot 1000}{\\bar{S}} \\)", "type": "false" },
      { "answer": "\\( R_d = \\frac{N \\cdot 1000}{\\bar{S}} \\)", "type": "false" }
    ]
  },
  {
    "id": 123,
    "Question": "Əhalinin Köçüb getmə əmsalı hansı düsturla hesablanır?",
    "answers": [
      { "answer": "Hesablamaq mümkün deyil", "type": "true" },
      { "answer": "\\( R_ö = \\frac{M \\cdot 1000}{\\bar{S}} \\)", "type": "false" },
      { "answer": "\\( r_g = \\frac{G \\cdot 1000}{\\bar{S}} \\)", "type": "false" },
      { "answer": "\\( r_m = \\frac{(G - K.g.) \\cdot 1000}{\\bar{S}} \\)", "type": "false" },
      { "answer": "\\( R_d = \\frac{N \\cdot 1000}{\\bar{S}} \\)", "type": "false" }
    ]
  },
  {
  id: 124,
  Question: "124) Əhalinin miqrasiya əmsalı hansı düsturla hesablanır?",
  answers: [
    { answer: "\\( y_m = \\frac{(G - K.g.) \\times 1000}{\\overline{S}} \\)", type: "true" },
    { answer: "\\( R_{l\\ddot{o}} = \\frac{M \\times 1000}{\\overline{S}} \\)", type: "false" },
    { answer: "\\( r_g = \\frac{G \\times 1000}{\\overline{S}} \\)", type: "false" },
    { answer: "Hesablamaq mümkün deyil", type: "false" },
    { answer: "\\( R_d = \\frac{N \\times 1000}{\\overline{S}} \\)", type: "false" }
  ]
},
{
  id: 125,
  Question: "125) Kimlər işsiz hesab olunurlar?",
  answers: [
    { answer: "dövlət məşğulluq orqanlarında qeydə alınmış əmək qabiliyyətli vətəndaşlar", type: "true" },
    { answer: "əmək qabiliyyətli yaşda olan və istehsalatdan ayrılmaqla təhsil alan şəxslər", type: "false" },
    { answer: "hərbi xidmətçilər", type: "false" },
    { answer: "hamiləliyə görə körpəsinə qulluqla əlaqədar 3 ilə qədər məzuniyyətdə olan qadınlar", type: "false" }
  ]
},
{
  id: 126,
  Question: "126) Hansı göstərici işçi qüvvəsinin sayı və hərəkəti göstəricilərinə aid deyil?",
  answers: [
    { answer: "maksimum-mümkün iş vaxtı fondunun quruluşu", type: "true" },
    { answer: "işçilərin siyahı sayı", type: "false" },
    { answer: "işə qəbul üzrə dövriyyə əmsalı", type: "false" },
    { answer: "işdən çıxma üzrə dövriyyə əmsalı", type: "false" }
  ]
},
{
  id: 127,
  Question: "127) İşçi qüvvəsinin sayını səciyyələndirən əsas göstərici hansıdır?",
  answers: [
    { answer: "işçilərin siyahı sayı", type: "true" },
    { answer: "maksimum-mümkün iş vaxtı fondunun quruluşu", type: "false" },
    { answer: "işə qəbul üzrə dövriyyə əmsalı", type: "false" },
    { answer: "işdən çıxma üzrə dövriyyə əmsalı", type: "false" },
    { answer: "təqvim iş vaxtı fondunun quruluşu", type: "false" }
  ]
},
{
  id: 128,
  Question: "128) Hansı göstərici iş vaxtının istifadəsini səciyyələndirən göstəricilərə aid deyil?",
  answers: [
    { answer: "İşçilərin siyahı sayı", type: "true" },
    { answer: "İş vaxtının təqvim və maksimum-mümkün fondunun quruluşu", type: "false" },
    { answer: "İş ayının (həftənin) orta davametmə müddəti", type: "false" },
    { answer: "İş gününün orta davametmə müddəti", type: "false" }
  ]
},
{
  id: 129,
  Question: "129) Natural ifadədə əmək məhsuldarlığının müstəqim göstəricisi hansıdır?",
  answers: [
    { answer: "\\( W = \\frac{q}{T} \\)", type: "true" },
    { answer: "\\( W = \\frac{qp}{T} \\)", type: "false" },
    { answer: "\\( t = \\frac{T}{q} \\)", type: "false" },
    { answer: "\\( t = \\frac{T}{qp} \\)", type: "false" }
  ]
},
{
  id: 130,
  Question: "130) Natural ifadədə əmək məhsuldarlığının əks göstəricisi hansıdır?",
  answers: [
    { answer: "\\( t = \\frac{T}{q} \\)", type: "true" },
    { answer: "\\( W = \\frac{q}{T} \\)", type: "false" },
    { answer: "\\( W = \\frac{qp}{T} \\)", type: "false" },
    { answer: "\\( t = \\frac{T}{qp} \\)", type: "false" }
  ]
},
{
  id: 131,
  Question: "131) Dəyər ifadəsində əmək məhsuldarlığının müstəqim göstəricisi hansıdır?",
  answers: [
    { answer: "\\( W = \\frac{qp}{T} \\)", type: "true" },
    { answer: "\\( W = \\frac{q}{T} \\)", type: "false" },
    { answer: "\\( t = \\frac{T}{q} \\)", type: "false" },
    { answer: "\\( t = \\frac{T}{qp} \\)", type: "false" }
  ]
},
{
  id: 132,
  Question: "132) Dəyər ifadəsində əmək məhsuldarlığının əks göstəricisi hansıdır?",
  answers: [
    { answer: "\\( t = \\frac{T}{qp} \\)", type: "true" },
    { answer: "\\( W = \\frac{q}{T} \\)", type: "false" },
    { answer: "\\( W = \\frac{qp}{T} \\)", type: "false" },
    { answer: "\\( t = \\frac{T}{q} \\)", type: "false" }
  ]
},
{
  id: 133,
  Question: "133) Konkret məhsul növü üzrə əmək məhsuldarlığının dinamikasını hansı düstur ilə hesablamaq olar?",
  answers: [
    { answer: "\\( i_w = \\frac{T_o}{q_o} \\cdot \\frac{T_1}{q_1} = \\frac{t_o}{t_1}; \\quad W = \\frac{q}{T} \\)", type: "true" },
    { answer: "\\( W = \\frac{q}{T} \\)", type: "false" },
    { answer: "\\( W = \\frac{qp}{T} \\)", type: "false" },
    { answer: "\\( t = \\frac{T}{q} \\)", type: "false" },
    { answer: "\\( t = \\frac{T}{qp} \\)", type: "false" }
  ]
},
{
  id: 134,
  Question: "134) Konkret məhsul növü üzrə əmək məhsuldarlığının dinamikasını hansı düstur ilə hesablamaq olmaz?",
  answers: [
    { answer: "Heç biri ilə", type: "true" },
    { answer: "\\( W = \\frac{q}{T} \\)", type: "false" },
    { answer: "\\( W = \\frac{qp}{T} \\)", type: "false" },
    { answer: "\\( t = \\frac{T}{q} \\)", type: "false" },
    { answer: "\\( t = \\frac{T}{qp} \\)", type: "false" }
  ]
},
{
  id: 135,
  Question: "135) Konkret məhsul növü üzrə əmək məhsuldarlığının dinamikasını hansı düstur ilə hesablamaq olar?",
  answers: [
    { answer: "\\( i_w = \\frac{T_o}{q_o} \\cdot \\frac{T_1}{q_1} = \\frac{t_o}{t_1} \\)", type: "true" },
    { answer: "\\( W = \\frac{q}{T} \\)", type: "false" },
    { answer: "\\( W = \\frac{qp}{T} \\)", type: "false" },
    { answer: "\\( t = \\frac{T}{q} \\)", type: "false" },
    { answer: "\\( t = \\frac{T}{qp} \\)", type: "false" }
  ]
},
{
    "id": 136,
    "question": "136. Əmək tutumu indeksi hansıdır?",
    "answers": [
      { "answer": "Jₜ = Σt₁q₁ / Σt₀q₁", "type": "false" },
      { "answer": "Heç biri", "type": "false" },
      { "answer": "Jw = Σt₀q₁ / Σt₁q₁", "type": "true" },
      { "answer": "Jw = (Σq₀P₀ / ΣT₁) : (Σq₀P₀ / ΣT₀)", "type": "false" },
      { "answer": "Jw = ΣiwT₁ / ΣT₁", "type": "false" }
    ]
  },
  {
    "id": 137,
    "question": "137. Əmək məhsuldarlığının dəyər indeksi hansıdır?",
    "answers": [
      { "answer": "Jw = (Σq₀P₀ / ΣT₁) : (Σq₀P₀ / ΣT₀)", "type": "true" },
      { "answer": "Heç biri", "type": "false" },
      { "answer": "Jₜ = Σt₁q₁ / Σt₀q₁", "type": "false" },
      { "answer": "Jw = Σt₀q₁ / Σt₁q₁", "type": "false" },
      { "answer": "Jw = ΣiwT₁ / ΣT₁", "type": "false" }
    ]
  },
  {
    "id": 138,
    "question": "138. Əmək məhsuldarlığının hesabı orta indeksi hansıdır?",
    "answers": [
      { "answer": "Jw = ΣiwT₁ / ΣT₁", "type": "true" },
      { "answer": "Heç biri", "type": "false" },
      { "answer": "Jₜ = Σt₁q₁ / Σt₀q₁", "type": "false" },
      { "answer": "Jw = Σt₀q₁ / Σt₁q₁", "type": "false" },
      { "answer": "Jw = (Σq₀P₀ / ΣT₁) : (Σq₀P₀ / ΣT₀)", "type": "false" }
    ]
  },
  {
    "id": 139,
    "question": "139. Orta əmək haqqı indeksini hansı düstur ilə hesablamaq olar?",
    "answers": [
      { "answer": "Σf₁d₁ / Σf₀d₀ = Σf₁d₁ / Σf₀d₁ , Σf₀d₁ / Σf₀d₀", "type": "true" },
      { "answer": "Jw = (Σq₀P₀ / ΣT₁) : (Σq₀P₀ / ΣT₀)", "type": "false" },
      { "answer": "Jₜ = Σt₁q₁ / Σt₀q₁", "type": "false" },
      { "answer": "Jw = Σt₀q₁ / Σt₁q₁", "type": "false" },
      { "answer": "Heç biri", "type": "false" }
    ]
  },
  {
    "id": 140,
    "question": "140. Orta əmək haqqı indeksini hansı düstur ilə hesablamaq olmaz?",
    "answers": [
      { "answer": "Heç biri ilə", "type": "false" },
      { "answer": "Jw = (Σq₀P₀ / ΣT₁) : (Σq₀P₀ / ΣT₀)", "type": "true" },
      { "answer": "Jₜ = Σt₁q₁ / Σt₀q₁", "type": "false" },
      { "answer": "Jw = Σt₀q₁ / Σt₁q₁", "type": "false" }
    ]
  },
  {
  id: 141,
  Question: "141. İqtisadi aktivlər nədir?",
  answers: [
    { answer: "balansın aktiv hissəsidir", type: "true" },
    { answer: "milli əmlakdır", type: "false" },
    { answer: "fərdi və ya kollektiv mülkiyyətdə olan obyektlər olmaqla, sahibinə istifadəsindən iqtisadi səmərə vəd edən əmlakdır (pul və ya maddi formada)", type: "false" },
    { answer: "milli sərvətdir", type: "false" },
    { answer: "təbii resurslardır", type: "false" }
  ]
},
{
  id: 142,
  Question: "142. Milli sərvət nədir?",
  answers: [
    { answer: "maddi, qeyri-maddi və maliyyə aktivlərinin məcmuyudur", type: "true" },
    { answer: "maddi aktivlərinin məcmuyudur", type: "false" },
    { answer: "qeyri-maddi və maliyyə aktivlərinin məcmuyudur", type: "false" },
    { answer: "maliyyə aktivlərinin məcmuyudur", type: "false" },
    { answer: "qeyri-maddi aktivlərinin məcmuyudur", type: "false" }
  ]
},
{
  id: 143,
  Question: "143. Milli əmlak nədir?",
  answers: [
    { answer: "insan əməyi ilə yaradılmış və toplanmış maddi nemətlər məcmuyudur", type: "true" },
    { answer: "milli sərvətdir", type: "false" },
    { answer: "təbii resurslardır", type: "false" },
    { answer: "maddi, qeyri-maddi və maliyyə aktivlərinin məcmuyudur", type: "false" }
  ]
},
{
  id: 144,
  Question: "144. Hansı göstərici təbii resurslara daxil deyil?",
  answers: [
    { answer: "əhali", type: "true" },
    { answer: "torpaq fondu", type: "false" },
    { answer: "meşə fondu", type: "false" },
    { answer: "hidroenerci resursları", type: "false" },
    { answer: "balıq sərvəti", type: "false" }
  ]
},
{
  id: 145,
  Question: "145. Əsas kapital (əsas fondlar) dedikdə nə nəzərdə tutulur?",
  answers: [
    { answer: "istehsal proseslərində dəfələrlə, dəyişilməz natural-maddi formada iştirak edən və öz dəyərini yaradılan məhsula və xidmətlərə tədrijən keçirən istehsal aktivlərinin məcmusu", type: "true" },
    { answer: "əmək cismlərinə bilavasitə təsir göstərən istehsal aktivləri", type: "false" },
    { answer: "xidmət müddəti bir ildən az olmayan obyektlər", type: "false" },
    { answer: "istehsal proseslərinin normal getməsi üçün şərait yaradan istehsal olunmuş aktivlərin məcmuyu", type: "false" }
  ]
},
{
  id: 146,
  Question: "146. Əsas kapitalın qiymətləndirmə metoduna aid olmayan bənd hansıdır?",
  answers: [
    { answer: "bazar dəyərilə", type: "true" },
    { answer: "tam ilk dəyərilə", type: "false" },
    { answer: "köhnəlməsini çıxmaqla ilk dəyəri ilə", type: "false" },
    { answer: "tam bərpa dəyərilə", type: "false" },
    { answer: "köhnəlməsini çıxmaqla bərpa dəyərilə", type: "false" }
  ]
},
{
  id: 147,
  Question: "147. Əsas kapitalın qiymətləndirmə metoduna aid olmayan bənd hansıdır?",
  answers: [
    { answer: "ləğv dəyərilə", type: "true" },
    { answer: "tam ilk dəyərilə", type: "false" },
    { answer: "köhnəlməsini çıxmaqla ilk dəyəri ilə", type: "false" },
    { answer: "tam bərpa dəyərilə", type: "false" },
    { answer: "köhnəlməsini çıxmaqla bərpa dəyərilə", type: "false" }
  ]
},
{
  id: 148,
  Question: "148. Köhnəlmə əmsalı hansı nisbətlə hesablanır?",
  answers: [
    { answer: "köhnəlmə məbləği / əsas kapitalın tam ilk (bərpa) dəyəri", type: "true" },
    { answer: "ləğv olunan əsas kapitalın dəyəri / təzə işə salınan əsas kapitalın dəyəri", type: "false" },
    { answer: "əsas kapitalın qalıq dəyəri / əsas kapitalın tam bərpa dəyəri", type: "false" },
    { answer: "köhnəlmə məbləği / ilin axırına əsas kapitalın tam dəyəri", type: "false" },
    { answer: "köhnəlmə məbləği / hesabət dövrünün axırına olan kapitalın dəyəri", type: "false" }
  ]
},
{
  id: 149,
  Question: "149. Əsas kapitalın yararlılıq dərəcəsini müəyyən etmək üçün yararlılıq əmsalı hansı nisbətlə hesablanır?",
  answers: [
    { answer: "əsas kapitalın qalıq dəyəri / əsas kapitalın tam bərpa dəyəri", type: "true" },
    { answer: "ləğv olunan əsas kapitalın dəyəri / təzə işə salınan əsas kapitalın dəyəri", type: "false" },
    { answer: "əsas kapitalın qalıq dəyəri / əsas kapitalın tam ilk (bərpa) dəyəri", type: "false" },
    { answer: "il ərzində işə salınan təzə əsas kapital / ilin axırına əsas kapitalın tam dəyəri", type: "false" },
    { answer: "hesabat ilində daxil olan kapitalın dəyəri / hesabat dövrünün axırına olan kapitalın dəyəri", type: "false" }
  ]
}
];

export default Questions;
