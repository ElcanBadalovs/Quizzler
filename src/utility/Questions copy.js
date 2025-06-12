const Questions = [
  {
    id: 1,
    Question:
      "1. Ölkədə daimi yaşamayan insanların ölkə ərazisində turizm məqsədi ilə səyahəti necə adlanır?",
    answers: [
      { answer: "gəlmə turizm", type: "true" },
      { answer: "getmə turizm", type: "false" },
      { answer: "yerli turizm", type: "false" },
      { answer: "ölkə daxili turizm", type: "false" },
      { answer: "daimi turizm", type: "false" },
    ],
  },
  {
    id: 2,
    Question:
      "2. Ölkədə daimi yaşayan insanların ölkə xaricində turizm məqsədi ilə səyahəti necə adlanır?",
    answers: [
      { answer: "getmə turizm", type: "true" },
      { answer: "gəlmə turizm", type: "false" },
      { answer: "xarici turizm", type: "false" },
      { answer: "ölkə xarici turizm", type: "false" },
      { answer: "müvəqqəti turizm", type: "false" },
    ],
  },
  {
    id: 3,
    Question:
      "3. Ölkəmizdə keçmiş sovetlər ittifaqının vaxtında Nazirlər Sovetinin Azərbaycanda 2000-ci ilə qədər turizmin inkişaf sxemi haqqında 381 saylı qərarı neçənci ildə qəbul olunmuşdur?",
    answers: [
      { answer: "12 oktyabr 1984-cü ildə", type: "true" },
      { answer: "16 iyul 1982-ci ildə", type: "false" },
      { answer: "18 avqust 1981-ci ildə", type: "false" },
      { answer: "12 noyabr 1989-cu ildə", type: "false" },
      { answer: "22 dekabr 1987-ci ildə", type: "false" },
    ],
  },
  {
    id: 4,
    Question:
      "4. Xəzərin Azərbaycan sahillərində ümumittifaq əhəmiyyətli istirahət zonasının yaradılması barədə SSRİ Nazirlər Sovetinin 375 saylı Qətnaməsi neçənci ildə qəbul edilmişdir?",
    answers: [
      { answer: "28 aprel 1983-cü ildə", type: "true" },
      { answer: "12 aprel 1982-ci ildə", type: "false" },
      { answer: "12 mart 1978-ci ildə", type: "false" },
      { answer: "16 iyun 1988-ci ildə", type: "false" },
      { answer: "2 iyul 1985-ci ildə", type: "false" },
    ],
  },
  {
    id: 5,
    Question:
      "5. Turoperator və nəqliyyat təşkilatları arasındakı münasibətlər hansı qanunla nizamlanır?",
    answers: [
      { answer: "nəqliyyat hüququ ilə", type: "true" },
      { answer: "turizm haqqında qanunla", type: "false" },
      { answer: "turoperatorun fəaliyyət proqramı ilə", type: "false" },
      { answer: "nəqliyyatın hərəkət qrafiki ilə", type: "false" },
      {
        answer: "turizm sahəsində olan normativ texniki sənədlərlə",
        type: "false",
      },
    ],
  },
  {
    id: 6,
    Question:
      "6 .Turist sərnişinlərinə təqdin olunan xidmətlər aşağıdak sıraların hansında göstərilmişdir \n1. Məxsusi nəqliyyat xidmətlərinin göstərilməsi \n2. Maşınqayırma sənayesinin inkişaf etdirilməsi \n3. Yolda turistlərə təqdim olunan xidmətlər  \n4. Turistlərin nəqliyyatın təmirinə cəlb olunması \n5. Vağzallarda  turistlərə yaradılan xidmətlər\n6. Nəqliyyat vasitələrinə texniki baxışın həyata keçirilməsi ",
    answers: [
      { answer: "1; 3; 5", type: "true" },
      { answer: "1; 4; 5", type: "false" },
      { answer: "2; 3; 6", type: "false" },
      { answer: "2; 4; 5", type: "false" },
      { answer: "1; 3; 6", type: "false" },
    ],
  },
  {
    id: 7,
    Question:
      "7. Turizm sahəsində əvvəlcədən ehtimal olunmuş (nəzərdə tutulmuş) və ya müəyyən edilmiş hərəkət etmə yolu, istiqaməti və yol qaydaları  necə adlanır?",
    answers: [
      { answer: "turistlərərin marşrutu", type: "true" },
      { answer: "turistlərərin  hərəkət istiqaməti", type: "false" },
      { answer: "turistlərərin hərəkət qrafiki", type: "false" },
      { answer: "turistlərərin məkanı", type: "false" },
      { answer: "turistlərərin hərəkət qaydaları", type: "false" },
    ],
  },
  {
    id: 8,
    Question:
      "8. Turistlərərin marşrutunu layihələndirən və tur iştirakçılarının səyahətdə olma  (destinasiyada) proqramını işləyib hazırlayan mütəxəssis necə adlanır?",
    answers: [
      { answer: "turoperator", type: "true" },
      { answer: "mühəndis", type: "false" },
      { answer: "texnaloq", type: "false" },
      { answer: "turist bələdçisi", type: "false" },
      { answer: "turist", type: "false" },
    ],
  },
  {
    id: 9,
    Question:
      "9. Qısamüddətli istirahətə dayanan avtoturistlərə xidmət göstərən müəssisə necə adlanır?",
    answers: [
      { answer: "mehmanxana", type: "true" },
      { answer: "yeməkxana", type: "false" },
      { answer: "istirahət mərkəzi", type: "false" },
      { answer: "çayxana", type: "false" },
      { answer: "bağ evi", type: "false" },
    ],
  },
  {
    id: 10,
    Question:
      "10. Mehmanxanaların layihələndirilməsi zamanı normativ sənədlərin tələblərinə uyğun olaraq iki nəfərlik otağın ümumi sahəsi neçə metr kvadratına bərabər olmalıdır?",
    answers: [
      { answer: "23...28 \\( m^2 \\)", type: "true" },
      { answer: "21...24 \\( m^2 \\)", type: "false" },
      { answer: "18...22 \\( m^2 \\)", type: "false" },
      { answer: "25...30 \\( m^2 \\)", type: "false" },
      { answer: "26...32 \\( m^2 \\)", type: "false" },
    ],
  },
  {
    id: 11,
    Question:
      "11. Avtomobilin yanacaq sistemindəki tənzimləmələrin pozulması neçə faizdən çox dəm qazını artıra bilər?",
    answers: [
      { answer: "70% - dən", type: "true" },
      { answer: "40% - dən", type: "false" },
      { answer: "90% - dən", type: "false" },
      { answer: "35% - dən", type: "false" },
      { answer: "100% - dən", type: "false" },
    ],
  },
  {
    id: 12,
    Question:
      "12. Xətti yanacaq sərfi turistlərin (sərnişinlərin) daşınmasında görülən səmərəli işə nisbəti necə adlanır?",
    answers: [
      { answer: "xüsusi yanacaq sərfi", type: "true" },
      { answer: "nəzarət yanacaq sərfi", type: "false" },
      { answer: "dövri hərəkətdə yanacaq xarakteristikası", type: "false" },
      { answer: "maksimum yanacaq sərfi", type: "false" },
      { answer: "minimum yanacaq sərfi", type: "false" },
    ],
  },
  {
    id: 13,
    Question:
      "13. Nəqliyyatın texniki vəziyyətinə dair ilkin məlumatların alınmasını təmin edən texnoloji proses necə adlanır?",
    answers: [
      { answer: "diaqnostika", type: "true" },
      { answer: "təmir", type: "false" },
      { answer: "yoxlama", type: "false" },
      { answer: "sınaq", type: "false" },
      { answer: "cari təmir", type: "false" },
    ],
  },
  {
    id: 14,
    Question:
      "14. Avtomobil nəqliyyatının yol verilən sürtgü materiallarının sərfi, hansı göstəriciyə görə müəyyən olunur?",
    answers: [
      { answer: "işlətdiyi yanacağın miqdarına görə", type: "true" },
      { answer: "avtomobilin sürətinə görə", type: "false" },
      { answer: "təkərlərin sayına görə", type: "false" },
      { answer: "daşıdığı yükün miqdarına görə", type: "false" },
      { answer: "sürətlər qutusunun pillələrinin sayına görə", type: "false" },
    ],
  },
  {
    id: 15,
    Question:
      "15. Benzinlə işləyən avtomobil mühərrikləri üçün 100 litr yanacağa görə neçə litr yağ sərf edə bilər?",
    answers: [
      { answer: "3,5 litr", type: "true" },
      { answer: "1.5 litr", type: "false" },
      { answer: "1.2 litr", type: "false" },
      { answer: "4.5 litr", type: "false" },
      { answer: "5,2 litr", type: "false" },
    ],
  },
  {
    id: 16,
    Question:
      "16. Turistlərə nəqliyyat xidmətlərinin keyfiyyətini qiymətləndirmə üsullarına aid tələbləri əks etdirən sənəd necə adlanır?",
    answers: [
      { answer: "normativ sənəd", type: "true" },
      { answer: "atesttat", type: "false" },
      { answer: "sertifikat", type: "false" },
      { answer: "lisenziya", type: "false" },
      { answer: "keyfiyyət ilgəyi", type: "false" },
    ],
  },
  {
    id: 17,
    Question:
      "17. Dizellə işləyən avtomobil mühərrikləri üçün 100 litr yanacağa görə neçə litr yağ sərf edə bilər?",
    answers: [
      { answer: "5 litr", type: "true" },
      { answer: "2 litr", type: "false" },
      { answer: "2,5 litr", type: "false" },
      { answer: "6 litr", type: "false" },
      { answer: "7,5 litr", type: "false" },
    ],
  },
  {
    id: 18,
    Question: "18. Paravozun ixtira edilməsi nəyə səbəb oldu?",
    answers: [
      { answer: "dəmir yolu şəbəkəsinin yaranmasına", type: "true" },
      { answer: "su nəqliyyatından geniş istifadə olunmasına", type: "false" },
      {
        answer: "avtomobil nəqliyyatından geniş istifadə olunmasına",
        type: "false",
      },
      {
        answer: "hava yolları nəqliyyatından geniş istifadə olunmasına",
        type: "false",
      },
      { answer: "yükün keyfiyyətinin artırılmasına", type: "false" },
    ],
  },
  {
    id: 19,
    Question:
      "19. Yol nəqliyyat iştirakçılarının beynəlxalq ittifaqı və beynəlxalq mehmanxana asossiasiyası arasında 1994-cü ildə bağlanmış müqavilə neçə maddədən ibarətdir?",
    answers: [
      { answer: "4 maddədən", type: "true" },
      { answer: "2 maddədən", type: "false" },
      { answer: "3 maddədən", type: "false" },
      { answer: "5 maddədən", type: "false" },
      { answer: "7 maddədən", type: "false" },
    ],
  },
  {
    id: 20,
    Question:
      "20. Yol nəqliyyat iştirakçılarının beynəlxalq ittifaqı və beynəlxalq mehmanxana asossiasiyası arasında neçənci ildə müqavilə bağlanmışdır?",
    answers: [
      { answer: "1994-cü ildə", type: "true" },
      { answer: "1992-ci ildə", type: "false" },
      { answer: "1987-ci ildə", type: "false" },
      { answer: "1996-cı ildə", type: "false" },
      { answer: "1998-ci ildə", type: "false" },
    ],
  },
  {
    id: 21,
    Question:
      "21. Nəqliyyat xidmətlərinə ödəniş qabiliyyətli tələbatın formalaşdırılması nöqteyi-nəzərindən sərnişinləri neçə kateqoriyaya ayırmaq olar?",
    answers: [
      { answer: "dörd kateqoriyaya", type: "true" },
      { answer: "beş kateqoriyaya", type: "false" },
      { answer: "iki kateqoriyaya", type: "false" },
      { answer: "üç kateqoriyaya", type: "false" },
      { answer: "altı kateqoriyaya", type: "false" },
    ],
  },
  {
    id: 22,
    Question:
      "22. Nəqliyyat xidmətlərinə ödəniş qabiliyyətli tələbatın formalaşdırılması nöqteyi-nəzərindən doğru olmayan variant hansıdır?",
    answers: [
      {
        answer: "pulsuz gediş hüququ olan bütün xarici ölkə vətandaşları",
        type: "true",
      },
      {
        answer:
          "öz şəxsi vəsaitləri hesabına gediş biletini əldə edən sərnişinlər",
        type: "false",
      },
      {
        answer:
          "öz şəxsi vəsaiti hesabına və güzəştli şərtlərlə gediş biletini əldə edən sərnişinlər",
        type: "false",
      },
      {
        answer: "müəssisənin vəsaiti hesabına ezamiyyətdə olan şəxslər",
        type: "false",
      },
      {
        answer:
          "pulsuz gediş hüququ olan nəqliyyat işçiləri, müharibə veteranları və onlara ailələri",
        type: "false",
      },
    ],
  },
  {
    id: 23,
    Question:
      "23. Magistral yolayrıclarında, iri şəhərlər arasında yerləşən mehmanxanalar neçə nəfər sərnişin tutumuna malik olurlar?",
    answers: [
      { answer: "150...400 nəfər", type: "true" },
      { answer: "100...150 nəfər", type: "false" },
      { answer: "500...600 nəfər", type: "false" },
      { answer: "50...60 nəfər", type: "false" },
      { answer: "1000...1200 nəfər", type: "false" },
    ],
  },
  {
    id: 24,
    Question: "24. Reklamın başlıca məqsəd və vəzifəsi nədən ibarətdir?",
    answers: [
      {
        answer: "turistlərə realizə edilən xidmətlərinə diqqəti yönəltməkdən",
        type: "true",
      },
      {
        answer: "istirahət mərkəzində çalışan işçiləri tanıtmaqdan",
        type: "false",
      },
      {
        answer:
          "turistlərə istirahət mərkəzində görülən abadlaşdırma işlərini çatdırmaqdan",
        type: "false",
      },
      {
        answer: "turistlərə istirahət mərkəzinin rəhbərini tanıtmaqdan",
        type: "false",
      },
      {
        answer:
          "istirahət mərkəzindəki xidmətlərin qiymətini əvvəlcədən bildirməkdən",
        type: "false",
      },
    ],
  },
  {
    id: 25,
    Question:
      "25. Aşağıdakı sıraların hansında nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəriciləri göstərilmişdir?      \n1. nəqliyyat vasitəsinin hərəkət təhlükəsizliyi\n2. nəqliyyat vasitəsinin rəngi\n3. nəqliyyat vasitəsinin dəyanətliliyi\n4. nəqliyyat vasitəsinin uzunluğu\n5. nəqliyyat vasitəsinin imtinasızlığı və təmirə yararlılığı\n6. nəqliyyat vasitələrinin estetik görnüşü",
    answers: [
      { answer: "1; 3; 5", type: "true" },
      { answer: "2; 4; 5", type: "false" },
      { answer: "1; 2; 6", type: "false" },
      { answer: "2; 4; 6", type: "false" },
      { answer: "3; 4; 6", type: "false" },
    ],
  },
  {
    id: 26,
    Question:
      "26. Turistlərin səyahətinin təşkili zamanı onların həyatının və fəaliyyətinin təhlükəsizliyi təmin edilməsi nəqliyyatın hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "təhlükəsizlik", type: "true" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "dayanıqlılıq", type: "false" },
      { answer: "nəqletməyə yararlılıq", type: "false" },
      { answer: "istismar", type: "false" },
    ],
  },
  {
    id: 27,
    Question:
      "27. Ümumi təyinatlı daşınmalar hansı təşkilatlar tərəfindən həyata keçirilir?",
    answers: [
      { answer: "komersiya təşkilatları tərəfindən", type: "true" },
      { answer: "istehsal sahəsi tərəfindən", type: "false" },
      { answer: "akkreditləşdirmə üzrə orqan tərəfindən", type: "false" },
      { answer: "sertifinatlaşdırma üzrə orqan tərəfindən", type: "false" },
      { answer: "standartlaşdırma üzrə orqan tərəfindən", type: "false" },
    ],
  },
  {
    id: 28,
    Question:
      "28. Nəqliyyat vasitəsindən istifadə prosesində qarşıya çıxan və onun istismar imkanlarını müəyyən edən texniki göstərici hansı variantda verilmişdir?",
    answers: [
      { answer: "istismar xüsusiyyətləri", type: "true" },
      { answer: "texniki qulluq", type: "false" },
      { answer: "avtomobilin istismarı", type: "false" },
      { answer: "nəqliyyatın növü", type: "false" },
      { answer: "işləmə qabiliyyəti", type: "false" },
    ],
  },
  {
    id: 29,
    Question:
      "29. Nəqliyyat vasitəsinin öz funksiyalarını texniki sənədlərin tələbləri ilə müəyyən olunmuş parametrlərlə yerinə yetirməsi nəyi xarakterizə edir?",
    answers: [
      { answer: "işləmə qabiliyyətini", type: "true" },
      { answer: "nəqliyyatın sürətini", type: "false" },
      { answer: "nəqliyyatın dəyanətliliyini", type: "false" },
      { answer: "nəqliyyatın yanacaq qənaətliliyini", type: "false" },
      { answer: "tormoz xüsusiyyətlərini", type: "false" },
    ],
  },
  {
    id: 30,
    Question:
      "30. Avtonəqliyyat vasitəsinin bütün parametrlərinin baxılan zaman anında normativ texniki sənədlərdə verilmiş tələblərə uyğunluğu onun hansı vəziyyətini xarakterizə edir?",
    answers: [
      { answer: "işçi vəziyyətdə olmasını", type: "true" },
      { answer: "nasaz olmasını", type: "false" },
      { answer: "yüklü olmasını", type: "false" },
      { answer: "yüksüz olmasını", type: "false" },
      { answer: "tormoz xüsusiyyətini", type: "false" },
    ],
  },
  {
    id: 31,
    Question:
      "31. Nəqliyyatın əsas funksiyalarını yerinə yetirilməsi xassəsini təyin edən və tətbiqolunma sahəsini müəyyənləşdirilməsi onun hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "təyinat", type: "true" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "iqtisadi", type: "false" },
      { answer: "erqonomik", type: "false" },
      { answer: "unifikasiya", type: "false" },
    ],
  },
  {
    id: 32,
    Question:
      "32. Nəqliyyatın formasının rasionallığını və bədii ifadəliliyinin xarakterizə edilməsi hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "estetik", type: "true" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "erqonomik", type: "false" },
      { answer: "təyinat", type: "false" },
      { answer: "iqtisadi", type: "false" },
    ],
  },
  {
    id: 33,
    Question:
      "33. Aşağıdakı variantların hansında nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəricisi göstərilmişdir?",
    answers: [
      { answer: "nəqliyyat vasitəsinin sərnişin tutumu", type: "true" },
      { answer: "nəqliyyat vasitələrinin estetik görnüşü", type: "false" },
      { answer: "nəqliyyat vasitəsinin minimum sürəti", type: "false" },
      { answer: "nəqliyyat vasitəsinin uzunluğu", type: "false" },
      { answer: "nəqliyyat vasitəsinin hündürlüyü", type: "false" },
    ],
  },
  {
    id: 34,
    Question:
      "34. Turistlərə xidmət zamanı nəqliyyatın işçi personalınin təhlükəsizliyini təmin edən xüsusiyyətinin xarakterizə edilməsi hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "təhlükəsizlik", type: "true" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "ekaloji", type: "false" },
      { answer: "nəqletməyə yararlılıq", type: "false" },
      { answer: "istismar", type: "false" },
    ],
  },
  {
    id: 35,
    Question:
      "35. Avtonəqliyyat vasitəsinə baxılan zaman anında normativ texniki sənədlərdə verilmiş tələblərin birinə və yaxud bir neçəsinə uyğunsuzluğu onun hansı vəziyyətini xarakterizə edir?",
    answers: [
      { answer: "nasaz olmasını", type: "true" },
      { answer: "saz olmasını", type: "false" },
      { answer: "dəyanətliliyini", type: "false" },
      { answer: "yüklü olmasını", type: "false" },
      { answer: "yüksüz olmasını", type: "false" },
    ],
  },
  {
    id: 36,
    Question:
      "36. Aşağıdakı sıraların hansında nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəriciləri göstərilmişdir? \n1. nəqliyyat vasitəsinin hərəkət təhlükəsizliyi\n2. nəqliyyat vasitəsinin rəngi\n3. nəqliyyat vasitəsinin dəyanətliliyi\n4. nəqliyyat vasitəsinin uzunluğu\n5. nəqliyyat vasitəsinin imtinasızlığı və təmirə yararlılığı\n6. nəqliyyat vasitələrinin estetik görnüşü",
    answers: [
      { answer: "1; 3; 5", type: "true" },
      { answer: "2; 4; 5", type: "false" },
      { answer: "1; 2; 6", type: "false" },
      { answer: "2; 4; 6", type: "false" },
      { answer: "3; 4; 6", type: "false" },
    ],
  },
  {
    id: 37,
    Question:
      "37. Aşağıdakı sıraların hansında nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəriciləri göstərilmişdir? \n1. nəqliyyat vasitəsinin yanacaq qənaətliliyi\n2. nəqliyyat vasitəsinin hündürlüyü\n3. nəqliyyat vasitəsinin dəyanətliliyi\n4. nəqliyyat vasitəsinin eni\n5. nəqliyyat vasitəsinin etibarlığı və uzunömürlülüyü\n6. nəqliyyat vasitələrinin estetik görnüşü",
    answers: [
      { answer: "1; 3; 5", type: "true" },
      { answer: "2; 4; 5", type: "false" },
      { answer: "1; 2; 6", type: "false" },
      { answer: "2; 4; 6", type: "false" },
      { answer: "3; 4; 6", type: "false" },
    ],
  },
  {
    id: 38,
    Question:
      "38. Hansı variantda nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəricisi göstərilmişdir?",
    answers: [
      { answer: "nəqliyyat vasitəsinin yanacaq qənaətliliyi", type: "true" },
      { answer: "nəqliyyat vasitəsinin rəngi", type: "false" },
      { answer: "nəqliyyat vasitəsinin eni", type: "false" },
      { answer: "nəqliyyat vasitələrinin estetik görünüşü", type: "false" },
      { answer: "nəqliyyat vasitəsinin uzunluğu", type: "false" },
    ],
  },
  {
    id: 39,
    Question:
      "39. Hansı keyfiyyət göstəricisinin təyin olunması zamanı nəqliyyatın əsas funksiyalarının yerinə yetirilməsi xassəsini təyin edən və onun tətbiqolunma sahəsinin müəyyənləşdirilməsi yerinə yetirilir?",
    answers: [
      { answer: "təyinat", type: "true" },
      { answer: "iqtisadi", type: "false" },
      { answer: "estetik", type: "false" },
      { answer: "unifikasiya", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
    ],
  },
  {
    id: 40,
    Question: "40.Dəmir yolu nəqliyyatı hansı nəqliyyat növünə aiddir?",
    answers: [
      { answer: "texniki nəqliyyat", type: "true" },
      { answer: "avtomobil nəqliyyatı", type: "false" },
      { answer: "hava nəqliyyatı", type: "false" },
      { answer: "kənd təsərrüfatı nəqliyyatı", type: "false" },
      { answer: "dəniz nəqliyyatı", type: "false" },
    ],
  },
  {
    id: 41,
    Question:
      "41. Kruiz gəmilərində kayutların təsnifatına aid olmayan hansı variantıdır?",
    answers: [
      { answer: "xəzər", type: "true" },
      { answer: "superior suit", type: "false" },
      { answer: "delüks", type: "false" },
      { answer: "ailə kayutu", type: "false" },
      { answer: "şahzadə apartamentləri", type: "false" },
    ],
  },
  {
    id: 42,
    Question:
      "42. Kruiz gəmilərində kayutların təsnifatına aid olan hansı variantda verilmişdir?",
    answers: [
      { answer: "delüks", type: "true" },
      { answer: "kür", type: "false" },
      { answer: "xəzər", type: "false" },
      { answer: "beynəlxalq kayut", type: "false" },
      { answer: "məkan kayut", type: "false" },
    ],
  },
  {
    id: 43,
    Question:
      "43. Kruiz gəmilərində kayutların təsnifatına aid olmayan variantı müəyyən edin?",
    answers: [
      { answer: "beynəlxalq kayut", type: "true" },
      { answer: "ailə kayutu", type: "false" },
      { answer: "oyners suit", type: "false" },
      { answer: "qrand suit", type: "false" },
      { answer: "royal faemili suit", type: "false" },
    ],
  },
  {
    id: 44,
    Question:
      "44. Kruiz gəmilərində kayutların təsnifatına aid olan hansı variantda verilmişdir?",
    answers: [
      { answer: "ailə kayutu", type: "true" },
      { answer: "beynəlxalq kayut", type: "false" },
      { answer: "məkan kayut", type: "false" },
      { answer: "bəy kayut", type: "false" },
      { answer: "lider kayut", type: "false" },
    ],
  },
  {
    id: 45,
    Question:
      "45. Hansı nəqliyyat vasitələri XIX əsrin sonu XX əsrin əvvəllərində meydana gəlmişdir?",
    answers: [
      { answer: "avtomobillər və təyyarələr", type: "true" },
      { answer: "dəmir yolu nəqliyyatı", type: "false" },
      { answer: "su yolu nəqliyyatı", type: "false" },
      { answer: "gəmilər və borular", type: "false" },
      { answer: "gəmilər və paravoz", type: "false" },
    ],
  },
  {
    id: 46,
    Question: "46. Avtomobil nəqliyyatı hansı nəqliyyat növünə aiddir?",
    answers: [
      { answer: "texniki nəqliyyat", type: "true" },
      { answer: "hava nəqliyyatı", type: "false" },
      { answer: "kənd təsərrüfatı nəqliyyatı", type: "false" },
      { answer: "dəmiryolu nəqliyyatı", type: "false" },
      { answer: "tibbi nəqliyyat", type: "false" },
    ],
  },
  {
    id: 47,
    Question:
      "47. Nəqliyyat vasitəsinin istismarı prosesində dəyişən, baxılan zaman anında ölçülmüş və kəmiyyətcə qiymətləndirilmiş istismar xüsusiyyətlərinin toplusu ilə təyin olunması onun hansı xüsusiyyətini xarakterizə edir?",
    answers: [
      { answer: "texniki vəziyyətini", type: "true" },
      { answer: "təmir olmasını", type: "false" },
      { answer: "işçi vəziyyətini", type: "false" },
      { answer: "nasaz olmasını", type: "false" },
      { answer: "dəyanətliliyini", type: "false" },
    ],
  },
  {
    id: 48,
    Question: "48. Mürəkkəb maşınlar hansı xüsusiyyətlərə malikdir?",
    answers: [
      { answer: "funksional və etibarlıq", type: "true" },
      { answer: "etibarlıq, estetik, təhlükəsizlik", type: "false" },
      { answer: "funksional, təhlükəsizlik, təyinat", type: "false" },
      { answer: "etibarlıq, erqonomik", type: "false" },
      { answer: "funksional, erqonomik", type: "false" },
    ],
  },
  {
    id: 49,
    Question:
      "49. Aşağıdakılardan hansı mürəkkəb maşınların xüsusiyyətlər qrupuna aiddir?",
    answers: [
      { answer: "etibarlıq", type: "true" },
      { answer: "aqreqatlaşdırma", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "simplifikatlaşdırma", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
    ],
  },
  {
    id: 50,
    Question:
      "50. Avtomobilin işləmə qabiliyyətini saxlamaq imkanını xarakterizə edən xüsusiyyəti necə adlanır?",
    answers: [
      { answer: "etibarlıq xüsusiyyəti", type: "true" },
      { answer: "funksional xüsusiyyəti", type: "false" },
      { answer: "tormoz xüsusiyyəti", type: "false" },
      { answer: "idarəolunma xüsusiyyəti", type: "false" },
      { answer: "təhlükəsizlik xüsusiyyəti", type: "false" },
    ],
  },
  {
    id: 51,
    Question:
      "51. Aşağıdakılardan hansı avtomobilin istismar xüsusiyyətləri qrupuna aid deyil?",
    answers: [
      { answer: "qabarit ölçüləri", type: "true" },
      { answer: "tormoz", type: "false" },
      { answer: "yanacaq qənaətliliyi", type: "false" },
      { answer: "idarəolunma", type: "false" },
      { answer: "dəyanəklik", type: "false" },
    ],
  },
  {
    id: 52,
    Question:
      "52. Aşağıdakı variantların hansında nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəricisi göstərilmişdir?",
    answers: [
      { answer: "nəqliyyat vasitəsinin dinamikliyi", type: "true" },
      { answer: "nəqliyyat vasitəsinin uzunluğu", type: "false" },
      { answer: "nəqliyyat vasitəsinin eni", type: "false" },
      { answer: "nəqliyyat vasitəsinin rəngi", type: "false" },
      { answer: "nəqliyyat vasitələrinin estetik görünüşü", type: "false" },
    ],
  },
  {
    id: 53,
    Question:
      "53. Məmulatın formasının rasionallığının, kompazisiyasının bütövlülüyünün, bədii ifadəliliyinin xarakterizə edilməsi hansı keyfiyyət göstəricisi aiddir?",
    answers: [
      { answer: "estetik", type: "true" },
      { answer: "erqonomik", type: "false" },
      { answer: "təyinat", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
    ],
  },
  {
    id: 54,
    Question:
      "54. Obyektin müəyyən edilmiş və nəzərdə tutulan tələbatları ödəmə qabiliyyətinə aid xarakteristikalarının məcmusu necə adlanır?",
    answers: [
      { answer: "keyfiyyət", type: "true" },
      { answer: "sertifikat", type: "false" },
      { answer: "standart", type: "false" },
      { answer: "ekspeditor", type: "false" },
      { answer: "ölçmə", type: "false" },
    ],
  },
  {
    id: 55,
    Question:
      "55. Aşağıdakı sıraların hansında nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəriciləri göstərilmişdir? \n1. nəqliyyat vasitəsinin dinamikliyi\n2. nəqliyyat vasitəsinin hündürlüyü\n3. nəqliyyat vasitəsinin dəyanətliliyi\n4. nəqliyyat vasitəsinin uzunluğu\n5. nəqliyyat vasitəsinin keçiciliyi\n6. nəqliyyat vasitələrinin estetik görnüşü",
    answers: [
      { answer: "1; 3; 5", type: "true" },
      { answer: "2; 4; 5", type: "false" },
      { answer: "1; 2; 6", type: "false" },
      { answer: "2; 4; 6", type: "false" },
      { answer: "3; 4; 6", type: "false" },
    ],
  },
  {
    id: 56,
    Question:
      "56. Xidmətlərin keyfiyyətini qiymətləndirmə üsullarına aid tələbləri əks etdirən sənəd necə adlanır?",
    answers: [
      { answer: "normativ sənəd", type: "true" },
      { answer: "keyfiyyət ilgəyi", type: "false" },
      { answer: "protokol", type: "false" },
      { answer: "sertifikat", type: "false" },
      { answer: "qaimə", type: "false" },
    ],
  },
  {
    id: 57,
    Question:
      "57. Hansı keyfiyyət göstəricisinə nəqliyyatın istifadəsi zamanı onun işçi personalının təhlükəsizliyini təmin edən xüsusiyyətinin xarakterizə edilməsi aiddir?",
    answers: [
      { answer: "təhlükəsizlik", type: "true" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "nəqletməyə yararlılıq", type: "false" },
      { answer: "istismar", type: "false" },
    ],
  },
  {
    id: 58,
    Question:
      "58. Hansı sənəddə məhsula və xidmətə, həmçinin onların keyfiyyətini qiymətləndirmə üsullarına aid tələblər verilir?",
    answers: [
      { answer: "normativ sənəd", type: "true" },
      { answer: "protokol", type: "false" },
      { answer: "sertifikat", type: "false" },
      { answer: "lisenziya", type: "false" },
      { answer: "qaimə", type: "false" },
    ],
  },
  {
    id: 59,
    Question:
      "59. Mühərrikin xüsusi yanacaq sərfi onun iş prosesi zamanı neçə saatlıq sərf etdiyi yanacağın kütləsinin effektiv gücünə nisbəti ilə müəyyən olunur?",
    answers: [
      { answer: "bir saatlıq", type: "true" },
      { answer: "iki saatlıq", type: "false" },
      { answer: "beş saatlıq", type: "false" },
      { answer: "on saatlıq", type: "false" },
      { answer: "on iki saatlıq", type: "false" },
    ],
  },
  {
    id: 60,
    Question:
      "60. Turistlərə xidmətin yerinə yetirilmə üsuluna görə nəqliyyat vasitələri neçə yerə bölünür?",
    answers: [
      { answer: "2", type: "true" },
      { answer: "3", type: "false" },
      { answer: "8", type: "false" },
      { answer: "6", type: "false" },
      { answer: "4", type: "false" },
    ],
  },
  {
    id: 61,
    Question:
      "61. Aşağıdakı variantların hansında nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəricisi göstərilmişdir?",
    answers: [
      { answer: "nəqliyyat vasitəsinin hərəkət təhlükəsizliyi", type: "true" },
      { answer: "nəqliyyat vasitəsinin minimum sürəti", type: "false" },
      {
        answer: "nəqliyyat vasitəsinin minimum yük götürmə qabliyyəti",
        type: "false",
      },
      { answer: "nəqliyyat vasitəsinin rəngi", type: "false" },
      { answer: "nəqliyyat vasitələrinin estetik görnüşü", type: "false" },
    ],
  },
  {
    id: 62,
    Question:
      "62. Nəqliyyat vasitəsinin öz işləmə qabiliyyətini tam və ya qismən itirməsi necə adlanır?",
    answers: [
      { answer: "imtina", type: "true" },
      { answer: "qəza", type: "false" },
      { answer: "təmirə yararlı", type: "false" },
      { answer: "təmirə yararsız", type: "false" },
      { answer: "dəyanətlilik", type: "false" },
    ],
  },
  {
    id: 63,
    Question:
      "63. Aşağıdakı variantların hansında nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəricisi göstərilmişdir?",
    answers: [
      { answer: "nəqliyyat vasitəsinin dəyanətliliyi", type: "true" },
      { answer: "nəqliyyat vasitəsinin minimum sürəti", type: "false" },
      {
        answer: "nəqliyyat vasitəsinin minimum yük götürmə qabliyyəti",
        type: "false",
      },
      { answer: "nəqliyyat vasitəsinin hündürlüyü", type: "false" },
      { answer: "nəqliyyat vasitələrinin estetik görnüşü", type: "false" },
    ],
  },
  {
    id: 64,
    Question:
      "64. Aşağıdakı variantların hansında nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəricisi göstərilmişdir?",
    answers: [
      { answer: "nəqliyyat vasitəsinin keçiciliyi", type: "true" },
      { answer: "nəqliyyat vasitəsinin minimum sürəti", type: "false" },
      { answer: "nəqliyyat vasitəsinin eni və uzunluğu", type: "false" },
      { answer: "nəqliyyat vasitəsinin hündürlüyü", type: "false" },
      { answer: "nəqliyyat vasitələrinin estetik görnüşü", type: "false" },
    ],
  },
  {
    id: 65,
    Question: "65. Kruiz gəmilərində dərəcələr hansı göstəricilərdən asılıdır?",
    answers: [
      {
        answer: "illüminator, pəncərə və eyvanların və s. olmasından",
        type: "true",
      },
      { answer: "kuriz gəmisinin limana çatma vaxtından", type: "false" },
      { answer: "kuriz gəmisinin sürətindən", type: "false" },
      { answer: "gəminin ay ərzindəki gəlirindən", type: "false" },
      { answer: "gəminin il ərzindəki gəlirindən", type: "false" },
    ],
  },
  {
    id: 66,
    Question:
      "66. Son beş ildə hava nəqliyyatı ilə turistlərin 1000...3000 km diapazonlarında hərəkətliliyi neçə faizdən çox artmışdır?",
    answers: [
      { answer: "100%-dən çox", type: "true" },
      { answer: "60%-dən çox", type: "false" },
      { answer: "40%-dən çox", type: "false" },
      { answer: "50%-dən çox", type: "false" },
      { answer: "200%-dən çox", type: "false" },
    ],
  },
  {
    id: 67,
    Question:
      "67. Hava nəqliyyatında daşıma haqqına edilən endirim kimlərə tətbiq edilir?",
    answers: [
      { answer: "xidməti ezamiyyətə gedənlərə", type: "true" },
      { answer: "18 yaşı tamam olmayan uşaqlara", type: "false" },
      { answer: "yaşı 60-dan çox olan insanlara", type: "false" },
      {
        answer: "dəmir yol nəqliyyatında çalışan bütün işçilərə",
        type: "false",
      },
      { answer: "istirahət mərkəzinin bütün işçilərinə", type: "false" },
    ],
  },
  {
    id: 68,
    Question:
      "68. Hava nəqliyyatında daşıma haqqına edilən endirim hansı halda tətbiq edilir?",
    answers: [
      {
        answer:
          "tədris prosesi ilə bağlı olan, istehsalatdan ayrılmaqla oxuyan şəxslər uçuşdan istifadə etdikdə",
        type: "true",
      },
      {
        answer:
          "18 yaşı tamam olmayan uşaqlar hava nəqliyyatında uçuşdan istifadə etdikdə",
        type: "false",
      },
      {
        answer:
          "yaşı 60-dan çox olan insanlar hava nəqliyyatında uçuşdan istifadə etdikdə",
        type: "false",
      },
      {
        answer:
          "il ərzində hava nəqliyyatında 10 dəfədən çox uçuşdan istifadə edən insanlar",
        type: "false",
      },
      {
        answer:
          "ilk dəfə hava nəqliyyatında uçuşdan istifadə edən bütün insanlar",
        type: "false",
      },
    ],
  },
  {
    id: 69,
    Question:
      "69. Turistlərə nəqliyyat xidməti zamanı hər 15 nəfərdən ibarət qrupda kimlərə sərnişinlərə göstərilən eyni xidmətlərdən və bərabər səviyyəli yemək və mehmanxana xidmətləri pulsuz göstərilməlidir?",
    answers: [
      { answer: "bir sürücüyə və bir ödənişsiz bələdçiyə", type: "true" },
      { answer: "istirahət mərkəzinin xidmətçilərinə", type: "false" },
      { answer: "mehmanxana xidmətçilərinə", type: "false" },
      { answer: "yeməkxana xidmətçilərinə", type: "false" },
      { answer: "qrupda olan bir yaşlı qadına və bir kişiyə", type: "false" },
    ],
  },
  {
    id: 70,
    Question:
      "70. Neçə nəfərdən ibarət qrupda bir sürücüyə və bir ödənişsiz bələdçiyə sərnişinlərə göstərilən eyni xidmətlərdən və bərabər səviyyəli yemək və mehmanxana xidmətləri pulsuz göstərilməlidir?",
    answers: [
      { answer: "15 nəfərdən", type: "true" },
      { answer: "12 nəfərdən", type: "false" },
      { answer: "25 nəfərdən", type: "false" },
      { answer: "10 nəfərdən", type: "false" },
      { answer: "20 nəfərdən", type: "false" },
    ],
  },
  {
    id: 71,
    Question:
      "71. Sərnişin daşimalarının həcmi və strukturunu müəyyən edən əsas amillər aid olmayan variantı müəyyən edin.",
    answers: [
      { answer: "kənd təsərrüfatının inkişafı", type: "true" },
      { answer: "ölkə əhalisinin siyahısı və onun artımı", type: "false" },
      { answer: "şəhər əhalisinin artımı", type: "false" },
      {
        answer: "əhalinin həyatının maddi-mədəni səviyyəsinin yüksəldilməsi",
        type: "false",
      },
      {
        answer:
          "sərnişin nəqliyyatının müxtəlif növlərinin inkişafı və daşıma tariflərinin səviyyəsi",
        type: "false",
      },
    ],
  },
  {
    id: 72,
    Question:
      "72. Nəqliyyatın istismara başladığı andan son həddinə (silinənə) qədər işləmə müddətinə (yürüşünə) nə deyilir?",
    answers: [
      { answer: "resurs", type: "true" },
      { answer: "dəyanətlilik", type: "false" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "sürətlənmə", type: "false" },
      { answer: "uzunömürlülük", type: "false" },
    ],
  },
  {
    id: 73,
    Question:
      "73. Aşağıdakı variantların hansında nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəricisi göstərilmişdir?",
    answers: [
      {
        answer: "nəqliyyat vasitəsinin etibarlığı və uzunömürlülüyü",
        type: "true",
      },
      { answer: "nəqliyyat vasitəsinin minimum sürəti", type: "false" },
      { answer: "nəqliyyat vasitəsinin uzunluğu", type: "false" },
      { answer: "nəqliyyat vasitəsinin eni", type: "false" },
      { answer: "nəqliyyat vasitələrinin estetik görnüşü", type: "false" },
    ],
  },
  {
    id: 74,
    Question:
      "74. Nasazlıqların yaranmasının qarşısını almaqla və hissələrin yeyilməsini azaltmaqla avtomobilin uzun müddət texniki saz və işləməyə hazır vəziyyətdə saxlamaq məqsədilə yerinə yetirilən profilaktik əməliyyatların məcmusu necə adlanır?",
    answers: [
      { answer: "texniki qulluq", type: "true" },
      { answer: "bərpa etmə", type: "false" },
      { answer: "nəzarət etmə", type: "false" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "dəyanətlilik", type: "false" },
    ],
  },
  {
    id: 75,
    Question: "75. Serviz xidmətləri neçə yerə bölünür?",
    answers: [
      { answer: "6", type: "true" },
      { answer: "8", type: "false" },
      { answer: "9", type: "false" },
      { answer: "12", type: "false" },
      { answer: "16", type: "false" },
    ],
  },
  {
    id: 76,
    Question:
      "76. Azərbaycan Dəmiryolu nəqliyyatında neçə əsas konvensiya mövcuddur?",
    answers: [
      { answer: "3", type: "true" },
      { answer: "6", type: "false" },
      { answer: "8", type: "false" },
      { answer: "9", type: "false" },
      { answer: "4", type: "false" },
    ],
  },
  {
    id: 77,
    Question:
      "77. Aşağdakı müqavilələrdən (konvensiyasından) hansı dəmiryolu nəqliyyatında hazırda qüvvədədir?",
    answers: [
      {
        answer:
          "beynəlxalaq dəmir yolu daşınmaları haqqında 1980-ci il müqaviləsi",
        type: "true",
      },
      {
        answer:
          "beynəlxalaq dəmir yolu yükləmələri haqqında 1987-ci il müqaviləsi",
        type: "false",
      },
      {
        answer:
          "beynəlxalaq dəmir yolu daşınmaları haqqında 1985-ci il müqaviləsi",
        type: "false",
      },
      {
        answer: "müstəqil dəmir yolu sahəsində 1975-ci il müqaviləsi",
        type: "false",
      },
      {
        answer:
          "Azərbaycan Respublikası Dəmir yolu haqqında 1957-ci il müqaviləsi",
        type: "false",
      },
    ],
  },
  {
    id: 78,
    Question:
      "78. İşləmə qabiliyyətini itirmiş avtomobilin texniki vəziyyətinin bərpasına yönəlmiş texniki təsirlərin məcmusu necə adlanır?",
    answers: [
      { answer: "təmir", type: "true" },
      { answer: "nasazlıq", type: "false" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "dəyanətlilik", type: "false" },
      { answer: "resurs", type: "false" },
    ],
  },
  {
    id: 79,
    Question:
      "79. Nasazlıqların yaranmasının qarşısını almaqla və hissələrin yeyilməsini azaltmaqla avtomobilin uzun müddət texniki saz və işləməyə hazır vəziyyətdə saxlamaq məqsədilə yerinə yetirilən profilaktik əməliyyatların məcmusu necə adlanır?",
    answers: [
      { answer: "texniki qulluq", type: "true" },
      { answer: "bərpa etmə", type: "false" },
      { answer: "nəzarət etmə", type: "false" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "dəyanətlilik", type: "false" },
    ],
  },
  {
    id: 80,
    Question:
      "80. Kruiz gəmilərində kayutların təsnifatına aid olan variantı müəyyən edin?",
    answers: [
      { answer: "şahzadə apartamentləri", type: "true" },
      { answer: "beynəlxalq kayut", type: "false" },
      { answer: "səma kayut", type: "false" },
      { answer: "bəy apartamentləri", type: "false" },
      { answer: "paris kayut", type: "false" },
    ],
  },
  {
    id: 81,
    Question:
      "81. Kruiz gəmilərində kayutların təsnifatına aid olmayan variantı müəyyən edin?",
    answers: [
      { answer: "lider kayut", type: "true" },
      { answer: "oyners suit", type: "false" },
      { answer: "royal faemili suit", type: "false" },
      { answer: "superior suit", type: "false" },
      { answer: "adi kayut", type: "false" },
    ],
  },
  {
    id: 82,
    Question:
      "82. Avtomobilin dinamik keyfiyyətini xarakterizə edən əmsal necə adlanır?",
    answers: [
      { answer: "momentə görə uyğunlaşma əmsalı", type: "true" },
      { answer: "fırlanma tezliyinə görə uyğunlaşma əmsalı", type: "false" },
      { answer: "ilişmə əmsalı", type: "false" },
      { answer: "uzununa qüvvə əmsalı", type: "false" },
      { answer: "diyirlənmədə müqavimət əmsalı", type: "false" },
    ],
  },
  {
    id: 83,
    Question:
      "83. Avtomobil nəqliyyatının istismarı prosesində baş verən imtina və nasazlıqların aradan qaldırılması necə adlanır?",
    answers: [
      { answer: "cari təmir", type: "true" },
      { answer: "dövrü təmir", type: "false" },
      { answer: "nasazlıq", type: "false" },
      { answer: "daimi təmir", type: "false" },
      { answer: "nəzarət", type: "false" },
    ],
  },
  {
    id: 84,
    Question:
      "84. Aşağıdakı variantların hansında nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəricisi göstərilmişdir?",
    answers: [
      {
        answer: "nəqliyyat vasitəsinin imtinasızlığı və rahatlığı",
        type: "true",
      },
      { answer: "nəqliyyat vasitəsinin rəngi", type: "false" },
      { answer: "nəqliyyat vasitəsinin uzunluğu", type: "false" },
      { answer: "nəqliyyat vasitəsinin hündürlüyü", type: "false" },
      { answer: "nəqliyyat vasitələrinin eni", type: "false" },
    ],
  },
  {
    id: 85,
    Question:
      "85. Avtomobilin yanacaq qənaətliliyi xarakteristikası bir çox faktorlardan asılıdır. Bu faktorlar hansı variantda düzgün göstərilmişdir?\n1. mühərrikin və transmissiyanın parametrlərindən\n2. avtomobilin etibarlıq xüsusiyyətindən\n3. avtomobilin çəki və tərtibat parametrləri\n4. avtomobilin keçicilik xüsusiyyətindən\n5. şinlərin xarakteristikaları\n6. avtomobilin dəyanətlilik xüsusiyyətindən\n7. istismar şəraiti.",
    answers: [
      { answer: "1; 3; 5; 7", type: "true" },
      { answer: "2; 3; 5; 6", type: "false" },
      { answer: "2; 4; 6; 7", type: "false" },
      { answer: "2; 4; 5; 6", type: "false" },
      { answer: "1; 2; 4; 7", type: "false" },
    ],
  },
  {
    id: 86,
    Question:
      "86. Avtomobilin sürәtlәnmәsinin təyini sınağı neçə metrlik yol sahәsindә aparılır?",
    answers: [
      { answer: "2000 m-lik", type: "true" },
      { answer: "3000 m-lik", type: "false" },
      { answer: "2500 m-lik", type: "false" },
      { answer: "1500 m-lik", type: "false" },
      { answer: "500 m-lik", type: "false" },
    ],
  },
  {
    id: 87,
    Question:
      "87. Nəqliyyat vasitəsinin istismarı prosesində dəyişən, baxılan zaman anında ölçülmüş və kəmiyyətcə qiymətləndirilmiş istismar xüsusiyyətlərinin toplusu ilə təyin olunması onun hansı xüsusiyyətini xarakterizə edir?",
    answers: [
      { answer: "texniki vəziyyətini", type: "true" },
      { answer: "təmir olmasını", type: "false" },
      { answer: "işçi vəziyyətini", type: "false" },
      { answer: "nasaz olmasını", type: "false" },
      { answer: "dəyanətliliyini", type: "false" },
    ],
  },
  {
    id: 88,
    Question:
      "88. Avtomobilin yanacaq qənaətliliyini qiymətləndirmək üçün istifadə edilən göstəricilər hansı variantda düzgün göstərilib?\n1. qərarlaşmış hərəkətdə yanacaq xarakteristikası\n2. yüksək temperatur şəraitində yanacaq xarakteristikası\n3. nəzarət yanacaq sərfi\n4. minimum sürətdə yanacaq xarakteristikası\n5. magistral-təpəli yollarda yanacaq-sürət xarakteristikası\n6. maksimum sürətdə yanacaq xarakteristikası\n7. dövri hərəkətdə yanacaq xarakteristikası",
    answers: [
      { answer: "1; 3; 5; 7", type: "true" },
      { answer: "2; 4; 6; 7", type: "false" },
      { answer: "1; 4; 6; 7", type: "false" },
      { answer: "2; 3; 4; 5", type: "false" },
      { answer: "1; 3; 5; 6", type: "false" },
    ],
  },
  {
    id: 89,
    Question: "89. Sərnişin avtobusu hansı oxa nəzərən simmetrikdir?",
    answers: [
      { answer: "uzununa", type: "true" },
      { answer: "eninə", type: "false" },
      { answer: "üfüqi", type: "false" },
      { answer: "şaquli", type: "false" },
      { answer: "koordinat", type: "false" },
    ],
  },
  {
    id: 90,
    Question:
      "90. Aşağıdakı müqavilələrdən (konvensiyasından) hansı avtomobil nəqliyyatında hazırda qüvvədədir?",
    answers: [
      {
        answer:
          "beynəlxalaq avtomobil magistralı haqqında 1975-ci il avropa müqaviləsi",
        type: "true",
      },
      {
        answer:
          "Azərbaycan Respublikası Dəmir yolu haqqında 1957-ci il müqaviləsi",
        type: "false",
      },
      {
        answer:
          "təhlükəsiz yüklərin beynəlxalq daşınması haqqında 1960-cı il Avropa müqaviləsi",
        type: "false",
      },
      {
        answer: "beynəlxalaq sərnişin daşınmaları haqqında müqaviləsi",
        type: "false",
      },
      {
        answer: "beynəlxalaq yük daşınmaları haqqında müqavilə",
        type: "false",
      },
    ],
  },
  {
    id: 91,
    Question:
      "91. Yanacaq sərfinin hesablaması zamanı benzinin sıxlığını hansı variantdakı ədədi qəbul etmək olar?",
    answers: [
      { answer: "0,73 kq/litr", type: "true" },
      { answer: "0,83 kq/litr", type: "false" },
      { answer: "0,75 kq/litr", type: "false" },
      { answer: "0,71 kq/litr", type: "false" },
      { answer: "0,68 kq/litr", type: "false" },
    ],
  },
  {
    id: 92,
    Question:
      "92. Nəqliyyat vasitəsi ilə turistlərə göstərilən xidmətə həmçinin onun keyfiyyətinin qiymətləndirmə üsullarına aid tələbləri əks etdirən sənəd necə adlanır?",
    answers: [
      { answer: "normativ sənəd", type: "true" },
      { answer: "müqavilə", type: "false" },
      { answer: "standart", type: "false" },
      { answer: "lisenziya", type: "false" },
      { answer: "qaimə", type: "false" },
    ],
  },
  {
    id: 93,
    Question:
      "93. Turistlərə xidmət zamanı avtomobilin xüsusi yanacaq sərfi xətti yanacaq sərfinin hansı göstəricisinə nisbəti ilə təyin edilir?",
    answers: [
      {
        answer: "turistlərin (sərnişinlərin) daşınmasında görülən səmərəli işə",
        type: "true",
      },
      { answer: "avtomobilin dövri hərəkətdə yanacaq sərfinə", type: "false" },
      { answer: "düzxətli yolda avtomobilin orta sürətinə", type: "false" },
      { answer: "avtomobilin maksimum yanacaq sərfinə", type: "false" },
      { answer: "avtomobilin minimum yanacaq sərfinə", type: "false" },
    ],
  },
  {
    id: 94,
    Question:
      "94. Qaimə hansı nəqliyyat növü üçün əsas daşıma sənədi hesab edilir?",
    answers: [
      { answer: "dəmir yolu nəqliyyatında", type: "true" },
      { answer: "neft nəql edən boru-kəmər nəqliyyatında", type: "false" },
      { answer: "su nəql edən boru-kəmər nəqliyyatında", type: "false" },
      { answer: "hava yolu nəqliyyatında", type: "false" },
      { answer: "hərbi təyyarələrlə", type: "false" },
    ],
  },
  {
    id: 95,
    Question:
      "95. Beynəlxalq avtomobil nəqliyyatı ittifaqı nə vaxt yaradılmışdır?",
    answers: [
      { answer: "1948-ci ilin mart ayında", type: "true" },
      { answer: "1972-ci ilin mart ayında", type: "false" },
      { answer: "1981-ci ilin may ayında", type: "false" },
      { answer: "1944-ci ilin dekabr ayında", type: "false" },
      { answer: "1945-ci ilin mart ayında", type: "false" },
    ],
  },
  {
    id: 96,
    Question: "96. Hava nəqliyyatında əsas beynəlxalq təşkilat hansıdır?",
    answers: [
      { answer: "beynəlxalq mülki aviasiya təşkilatı", type: "true" },
      { answer: "avropa hava nəqliyyatı assosasiyası", type: "false" },
      { answer: "ölkə daxili mülki aviasiya təşkilatı", type: "false" },
      { answer: "şəhərlər arası mülki aviasiya təşkilatı", type: "false" },
      { answer: "asiya hava nəqliyyatı assosasiyası", type: "false" },
    ],
  },
  {
    id: 97,
    Question:
      "97. Beynəlxalq mülki aviasiya təşkilatı neçənci ildə yaranmışdır?",
    answers: [
      { answer: "1947-ci ildə", type: "true" },
      { answer: "1934-cü ildə", type: "false" },
      { answer: "1971-ci ildə", type: "false" },
      { answer: "1957-ci ildə", type: "false" },
      { answer: "1942-ci ildə", type: "false" },
    ],
  },
  {
    id: 98,
    Question:
      "98. Beynəlxalq mülki aviasiya təşkilatından sonra digər beynəlxalq təşkilat hansı hesab edilir?",
    answers: [
      { answer: "beynəlxalq hava nəqliyyatı assosasiyası", type: "true" },
      { answer: "avropa hava nəqliyyatı assosasiyası", type: "false" },
      { answer: "asiya hava nəqliyyatı assosasiyası", type: "false" },
      { answer: "ölkə daxili mülki aviasiya təşkilatı", type: "false" },
      { answer: "afrika hava nəqliyyatı assosasiyası", type: "false" },
    ],
  },
  {
    id: 99,
    Question: "99. Nəqliyyatın növü neçə əsas alt sistemdən ibarətdir?",
    answers: [
      { answer: "3", type: "true" },
      { answer: "4", type: "false" },
      { answer: "2", type: "false" },
      { answer: "1", type: "false" },
      { answer: "5", type: "false" },
    ],
  },
  {
    id: 100,
    Question: "100. Beynəlxalq hava nəqliyyatı assosasiyası necə təşkilatdır?",
    answers: [
      { answer: "qeyri-dövlət təşkilatı", type: "true" },
      { answer: "dövlət təşkilatı", type: "false" },
      {
        answer: "həmkarlar ittifaqının nəzdində dövlət təşkilatı",
        type: "false",
      },
      {
        answer: "nəqliyyat nazirliyinin nəzdində dövlət təşkilatı",
        type: "false",
      },
      {
        answer: "akkreditləşdirmə üzrə orqanın nəzdində dövlət təşkilatı",
        type: "false",
      },
    ],
  },
  {
    id: 101,
    Question:
      "101. Aşağıdakı müqavilələrdən (konvensiyasından) hansı su nəqliyyatında hazırda qüvvədədir?",
    answers: [
      {
        answer: "dəniz yük daşımaları haqqında BMT-nin 1978-ci il müqaviləsi",
        type: "true",
      },
      {
        answer:
          "beynəlxalaq sərnişin daşınmaları haqqında 1967-cu il müqaviləsi",
        type: "false",
      },
      {
        answer: "beynəlxalaq yük daşınmaları haqqında 1987-ci il müqaviləsi",
        type: "false",
      },
      {
        answer: "beynəlxalaq yük daşınmaları haqqında 1998-ci il müqaviləsi",
        type: "false",
      },
      {
        answer:
          "beynəlxalaq sərnişin daşınmaları haqqında 19974-ci il müqaviləsi",
        type: "false",
      },
    ],
  },
  {
    id: 102,
    Question: "102. Su nəqliyyatında əsas beynəlxalq təşkilat hansıdır?",
    answers: [
      { answer: "beynəlxalq su nəqliyyatı təşkilatı", type: "true" },
      { answer: "avropa su nəqliyyatı təşkilatı", type: "false" },
      { answer: "afrika su nəqliyyatı təşkilatı", type: "false" },
      { answer: "asiya su nəqliyyatı təşkilatı", type: "false" },
      { answer: "amerika su nəqliyyatı təşkilatı", type: "false" },
    ],
  },
  {
    id: 103,
    Question: "103. Beynəlxalq dəniz təşkilatı neçənci ildə yaradılmışdır?",
    answers: [
      { answer: "1958-ci ildə", type: "true" },
      { answer: "1981-ci ildə", type: "false" },
      { answer: "1972-ci ildə", type: "false" },
      { answer: "1952-ci ildə", type: "false" },
      { answer: "1948-ci ildə", type: "false" },
    ],
  },
  {
    id: 104,
    Question: "104. Beynəlxalq dəniz təşkilatı harada yerləşir?",
    answers: [
      { answer: "Londonda", type: "true" },
      { answer: "Parisdə", type: "false" },
      { answer: "Romada", type: "false" },
      { answer: "Bakıda", type: "false" },
      { answer: "Berlində", type: "false" },
    ],
  },
  {
    id: 105,
    Question:
      "105. Azərbaycan beynəlxalq dəniz təşkilatının neçənci ildən üzvüdür?",
    answers: [
      { answer: "1995-ci ildən", type: "true" },
      { answer: "1997-ci ildən", type: "false" },
      { answer: "2001-ci ildən", type: "false" },
      { answer: "1991-ci ildən", type: "false" },
      { answer: "1994-cü ildən", type: "false" },
    ],
  },
  {
    id: 106,
    Question:
      "106. Aşağıdakı müqavilələrdən və yaxud konvensiyasından hansı su nəqliyyatında hazırda qüvvədədir?",
    answers: [
      {
        answer: "dəniz hüquq üzrə BMT-nin 1982-ci il konvensiyası",
        type: "true",
      },
      {
        answer:
          "beynəlxalaq sərnişin daşınmaları haqqında 1967-ci il konvensiyası",
        type: "false",
      },
      {
        answer: "beynəlxalaq yük daşınmaları haqqında 1978-ci il konvensiyası",
        type: "false",
      },
      {
        answer: "beynəlxalaq yük daşınmaları haqqında 1989 konvensiyası",
        type: "false",
      },
      {
        answer:
          "beynəlxalaq sərnişin daşınmaları haqqında 2002-ci il konvensiyası",
        type: "false",
      },
    ],
  },
  {
    id: 107,
    Question:
      "107. Nəqliyyat müqavilələri əsasında yaranan mülki hüquqi münasibətlər necə adlanır?",
    answers: [
      { answer: "nəqliyyat öhdəlikləri", type: "true" },
      { answer: "nəqliyyatın növünün seçilməsi", type: "false" },
      { answer: "nəqliyyatın hüququ", type: "false" },
      { answer: "mülki münasibət", type: "false" },
      { answer: "hüquqi münasibətlər", type: "false" },
    ],
  },
  {
    id: 108,
    Question:
      "108. Aşağıdakı müqavilələrdən (konvensiyasından) hansı avtomobil nəqliyyatında hazırda qüvvədədir?",
    answers: [
      {
        answer:
          "təhlükəli yüklərin beynəlxalq daşınması haqqında 1957-ci il Avropa müqaviləsi",
        type: "true",
      },
      {
        answer:
          "təhlükəsiz yüklərin beynəlxalq daşınması haqqında 1956-cı il Avropa müqaviləsi",
        type: "false",
      },
      {
        answer:
          "Azərbaycan Respublikası Dəmir yolu haqqında 1947-ci il müqaviləsi",
        type: "false",
      },
      {
        answer:
          "beynəlxalaq sərnişin daşınmaları haqqında 1971-ci il müqaviləsi",
        type: "false",
      },
      {
        answer: "beynəlxalq avtoyollar haqqında 1997-ci il Asiya müqaviləsi",
        type: "false",
      },
    ],
  },
  {
    id: 109,
    Question:
      "109. Qaimə hansı nəqliyyat növü ilə əsas daşıma sənədi hesab edilir?",
    answers: [
      { answer: "avtomobil nəqliyyatında", type: "true" },
      { answer: "neft nəql edən boru-kəmər nəqliyyatında", type: "false" },
      { answer: "su nəql edən boru-kəmər nəqliyyatında", type: "false" },
      { answer: "hava yolu nəqliyyatında", type: "false" },
      { answer: "hərbi vertalyotla", type: "false" },
    ],
  },
  {
    id: 110,
    Question:
      "110. İnter Rail sisteminə üzv olan ölkələrin dəmiryolu idarələri neçə coğrafi zona üzrə qruplaşdırılır?",
    answers: [
      { answer: "8", type: "true" },
      { answer: "3", type: "false" },
      { answer: "5", type: "false" },
      { answer: "12", type: "false" },
      { answer: "9", type: "false" },
    ],
  },
  {
    id: 111,
    Question:
      "111. Nəqliyyat müqaviləsinin bağlanmasında neçə tərəf iştirak edir?",
    answers: [
      { answer: "2", type: "true" },
      { answer: "3", type: "false" },
      { answer: "7", type: "false" },
      { answer: "4", type: "false" },
      { answer: "5", type: "false" },
    ],
  },
  {
    id: 112,
    Question:
      "112. Nəqliyyat müqaviləsinə görə daşıyıcı funksiyasını kimlər icra edə bilərlər?",
    answers: [
      { answer: "hüquqi şəxslər və fərdi sahibkar", type: "true" },
      { answer: "istehsal müəssisəsinin baş mühəndisi", type: "false" },
      { answer: "istehsal müəssisəsinin texnoloqu", type: "false" },
      {
        answer: "istehsal müəssisəsinin texniki nəzarət şöbəsi",
        type: "false",
      },
      { answer: "yük göndərən və yük alan", type: "false" },
    ],
  },
  {
    id: 113,
    Question:
      "113. Aşağıdakı sıraların hansında nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəriciləri göstərilmişdir?\n1. nəqliyyat vasitələrinin təmirə yararlığı\n2. nəqliyyat vasitələrinin rəngi\n3. nəqliyyat vasitələrinin etibarlığı və uzunömürlülüyü\n4. nəqliyyat vasitələrinin uzunluğu\n5. nəqliyyat vasitələrinin imtinasızlığı və təmirə yararlılığı\n6. nəqliyyat vasitələrinin estetik görünüşü",
    answers: [
      { answer: "1; 3; 5", type: "true" },
      { answer: "2; 4; 5", type: "false" },
      { answer: "1; 2; 6", type: "false" },
      { answer: "2; 4; 6", type: "false" },
      { answer: "3; 4; 6", type: "false" },
    ],
  },
  {
    id: 114,
    Question:
      "114. Azərbaycan Respublikasının hava nəqliyyatı haqqında qanunda xüsusi müqavilənin bağlanması üçün neçə şərt göstərilmişdir?",
    answers: [
      { answer: "2", type: "true" },
      { answer: "4", type: "false" },
      { answer: "3", type: "false" },
      { answer: "5", type: "false" },
      { answer: "7", type: "false" },
    ],
  },
  {
    id: 115,
    Question:
      "115. Avtomobilin dinamikliyi əsasən hansı göstəricilərlə qiymətləndirilir?",
    answers: [
      { answer: "avtomobilin texniki və istismar sürətləri ilə", type: "true" },
      { answer: "avtomobilin dəyanətlilik xüsusiyyəti ilə", type: "false" },
      { answer: "avtomobilin etibarlılıq xüsusiyyəti ilə", type: "false" },
      { answer: "avtomobilin keçicilik xüsusiyyəti ilə", type: "false" },
      { answer: "işləmə qabiliyyəti ilə", type: "false" },
    ],
  },
  {
    id: 116,
    Question:
      "116. Yanacaq sərfinin hesablaması zamanı benzinin sıxlığını hansı variantdakı ədədi qəbul etmək olar?",
    answers: [
      { answer: "0,73 kq/litr", type: "true" },
      { answer: "0,86 kq/litr", type: "false" },
      { answer: "0,72 kq/litr", type: "false" },
      { answer: "0,92 kq/litr", type: "false" },
      { answer: "0,68 kq/litr", type: "false" },
    ],
  },
  {
    id: 117,
    Question:
      "117. Xarici qüvvələrin təsiri altında olan avtomobilin sürücünün iştirakı olmadan hərəkət istiqamətini saxlaya bilmək xüsusiyyəti necə adlanır?",
    answers: [
      { answer: "dəyanətlik", type: "true" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "sərbəst hərəkət", type: "false" },
      { answer: "düzxətli hərəkət", type: "false" },
      { answer: "dövrü hərəkət", type: "false" },
    ],
  },
  {
    id: 118,
    Question:
      "118. Avtomobilin maksimal sürəti yolun üfüqi hamar sahəsində neçə metr uzunluqlu ölçü sahəsini keçmə vaxtını ölçməklə əldə edilir?",
    answers: [
      { answer: "1000 m uzunluqlu ölçü sahəsini", type: "true" },
      { answer: "3000 m uzunluqlu ölçü sahəsini", type: "false" },
      { answer: "1500 m uzunluqlu ölçü sahəsini", type: "false" },
      { answer: "100 m uzunluqlu ölçü sahəsini", type: "false" },
      { answer: "750 m uzunluqlu ölçü sahəsini", type: "false" },
    ],
  },
  {
    id: 119,
    Question:
      "119. Aşağıdakı variantların hansında nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəricisi göstərilmişdir?",
    answers: [
      { answer: "nəqliyyat vasitəsinin yanacaq qənaətliliyi", type: "true" },
      { answer: "nəqliyyat vasitəsinin minimum sürəti", type: "false" },
      {
        answer: "nəqliyyat vasitəsinin minimum yük götürmə qabiliyyəti",
        type: "false",
      },
      { answer: "nəqliyyat vasitəsinin eni və uzunluğu", type: "false" },
      { answer: "nəqliyyat vasitələrinin estetik görünüşü", type: "false" },
    ],
  },
  {
    id: 120,
    Question:
      "120. Sərnişin avtobuslarının alçaq rəqs tezliyi hansı aralıqda dəyişir?",
    answers: [
      { answer: "1,5...2,5 Hz", type: "true" },
      { answer: "2...3,5 Hz", type: "false" },
      { answer: "1,2...2 Hz", type: "false" },
      { answer: "0,5...1,5 Hz", type: "false" },
      { answer: "2,5...4,5 Hz", type: "false" },
    ],
  },
  {
    id: 121,
    Question:
      "121. Avtomobilin təyinatına görə müəyyən edilmiş funksiyaları yerinə yetirmək imkanı hansı xüsusiyyəti adlanır?",
    answers: [
      { answer: "funksional xüsusiyyəti", type: "true" },
      { answer: "etibarlıq xüsusiyyəti", type: "false" },
      { answer: "aqreqatlaşdırma xüsusiyyəti", type: "false" },
      { answer: "unifikasiya xüsusiyyəti", type: "false" },
      { answer: "təhlükəsizlik xüsusiyyəti", type: "false" },
    ],
  },
  {
    id: 122,
    Question:
      "122. Nəqliyyat vasitəsindən ətraf mühitə atılan zərərli qarışığın miqdarının təyin olunması hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "ekoloji", type: "true" },
      { answer: "erqonomik", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "sertifikatlaşdırma", type: "false" },
    ],
  },
  {
    id: 123,
    Question:
      "123. Aşağıdakı variantların hansında nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəricisi göstərilmişdir?",
    answers: [
      { answer: "nəqliyyat vasitəsinin təmirə yararlığı", type: "true" },
      { answer: "nəqliyyat vasitəsinin rəngi", type: "false" },
      { answer: "nəqliyyat vasitəsinin uzunluğu", type: "false" },
      { answer: "nəqliyyat vasitəsinin eni", type: "false" },
      { answer: "nəqliyyat vasitələrinin estetik görünüşü", type: "false" },
    ],
  },
  {
    id: 124,
    Question:
      "124. Rusyalı mütəxəssis V.Kasatkin aviaçarter daşımalarının realizə edilməsinin neçə əsas formasını qeyd edir?",
    answers: [
      { answer: "üç", type: "true" },
      { answer: "iki", type: "false" },
      { answer: "beş", type: "false" },
      { answer: "bir", type: "false" },
      { answer: "yeddi", type: "false" },
    ],
  },
  {
    id: 125,
    Question:
      "125. Təyyarənin icarə xarakterinə görə aviaçarter daşımalarının neçə növü mövcuddur?",
    answers: [
      { answer: "iki", type: "true" },
      { answer: "üç", type: "false" },
      { answer: "beş", type: "false" },
      { answer: "dörd", type: "false" },
      { answer: "doqquz", type: "false" },
    ],
  },
  {
    id: 126,
    Question:
      "126. Birbaşa-geriyə istiqamətlərdə inklüziv-turu almış şəxslərin daşınması üçün bir və ya bir sıra turist şirkətləri təyyarənin təmamilə icarəyə götürülməsi necə adlanır?",
    answers: [
      { answer: "inkilüziv-tur-çarter", type: "true" },
      { answer: "çarter", type: "false" },
      { answer: "qaimə", type: "false" },
      { answer: "rent-a-car", type: "false" },
      { answer: "inkilüziv-tur", type: "false" },
    ],
  },
  {
    id: 127,
    Question:
      "127. Nəqliyyat vasitəsindən zərərli hissəciklərin, qazların və şüalanmanın ətraf mühitə normadan artıq qatılıqda atılmasının müəyyənləşdirilməsi hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "ekoloji", type: "true" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "sertifikatlaşdırma", type: "false" },
    ],
  },
  {
    id: 128,
    Question:
      "128. Avtomobilin öz funksiyasını minimum yanacaq sərfi ilə yerinə yetirmə qabiliyyəti necə adlanır?",
    answers: [
      { answer: "yanacaq qənaətliliyi", type: "true" },
      { answer: "maksimum yanacaq sərfiyyatı", type: "false" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "nəqletməyə yararlılıq", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
    ],
  },
  {
    id: 129,
    Question:
      "129. Inter Rail sisteminə üzv olan ölkələrin dəmiryolu idarələri coğrafi zona üzrə qruplaşdırılır. Zona A qrupuna hansı ölkələr daxildir?\nİngiltərə, Cənubi İrlandiya və Şimali İrlandiya\nİspaniya, Portuqaliya və Hollandiya\nMərakeş, Macarıstan və Xorvatiya\nNorveç, Finlandiya və Macarıstan\nSlovakiya, İspaniya və Şimali İrlandiya",
    answers: [
      {
        answer: "İngiltərə, Cənubi İrlandiya və Şimali İrlandiya",
        type: "true",
      },
      { answer: "İspaniya, Portuqaliya və Hollandiya", type: "false" },
      { answer: "Mərakeş, Macarıstan və Xorvatiya", type: "false" },
      { answer: "Norveç, Finlandiya və Macarıstan", type: "false" },
      { answer: "Slovakiya, İspaniya və Şimali İrlandiya", type: "false" },
    ],
  },
  {
    id: 130,
    Question:
      "130. Inter Rail sisteminə üzv olan ölkələrin dəmiryolu idarələri coğrafi zona üzrə qruplaşdırılır. Zona B qrupuna hansı ölkələr daxildir?\nİsveç, Norveç və Finlandiya\nCənubi İrlandiya, Macarıstan və Xorvatiya\nPolşa, Slovakiya və Macarıstan\nİspaniya, Portuqaliya və Mərakeş\nXorvatiya, İspaniya və Polşa",
    answers: [
      { answer: "İsveç, Norveç və Finlandiya", type: "true" },
      { answer: "Cənubi İrlandiya, Macarıstan və Xorvatiya", type: "false" },
      { answer: "Polşa, Slovakiya və Macarıstan", type: "false" },
      { answer: "İspaniya, Portuqaliya və Mərakeş", type: "false" },
      { answer: "Xorvatiya, İspaniya və Polşa", type: "false" },
    ],
  },
  {
    id: 131,
    Question:
      "131. İnter Rail sisteminə üzv olan ölkələrin dəmiryolu idarələri coğrafi zona üzrə qruplaşdırılır. Zona C qrupuna hansı ölkələr daxildir?",
    answers: [
      { answer: "Danimarka, Almaniya, İsveçrə və Avstriya", type: "true" },
      { answer: "Cənubi İrlandiya, Macarıstan və Polşa", type: "false" },
      { answer: "Xorvatiya, Yuqaslaviya və Bolqarıstan", type: "false" },
      { answer: "Rumıniya, Yuqoslaviya və Avstriya", type: "false" },
      { answer: "Bolqarıstan, Polşa, Rumıniya və İtaliya", type: "false" },
    ],
  },
  {
    id: 132,
    Question:
      "132. İnter Rail sisteminə üzv olan ölkələrin dəmiryolu idarələri coğrafi zona üzrə qruplaşdırılır. Zona F qrupuna hansı ölkələr daxildir?",
    answers: [
      { answer: "İspaniya, Portuqaliya və Mərakeş", type: "true" },
      { answer: "Bolqarıstan, Rumıniya və Fransa", type: "false" },
      { answer: "Macarıstan, Xorvatiya və Avstriya", type: "false" },
      { answer: "Bolqarıstan, İtaliya və Sloveniya", type: "false" },
      { answer: "Rumıniya, Avstriya və Çexiya", type: "false" },
    ],
  },
  {
    id: 133,
    Question:
      "133. İnter Rail sisteminə üzv olan ölkələrin dəmiryolu idarələri coğrafi zona üzrə qruplaşdırılır. Zona D qrupuna hansı ölkələr daxildir?",
    answers: [
      {
        answer: "Polşa, Çexiya, Slovakiya, Macarıstan və Xorvatiya",
        type: "true",
      },
      { answer: "İspaniya, Avstriya, Portuqaliya və Mərakeş", type: "false" },
      { answer: "Danimarka, Almaniya, İsveçrə və Avstriya", type: "false" },
      { answer: "İtaliya, Sloveniya, Yunanıstan və Türkiyə", type: "false" },
      { answer: "Fransa, Belçika, Hollandiya və İtaliya", type: "false" },
    ],
  },
  {
    id: 134,
    Question:
      "134. İnter Rail sisteminə üzv olan ölkələrin dəmiryolu idarələri coğrafi zona üzrə qruplaşdırılır. Zona E qrupuna hansı ölkələr daxildir?",
    answers: [
      { answer: "Fransa, Belçika, Hollandiya və Lüksemburq", type: "true" },
      { answer: "İspaniya, İtaliya, Portuqaliya və Mərakeş", type: "false" },
      { answer: "Rumıniya, Polşa, Türkiyə və Çexiya", type: "false" },
      { answer: "Bolqarıstan, İtaliya və Yuqoslaviya", type: "false" },
      { answer: "Sloveniya, Yunanıstan və Türkiyə", type: "false" },
    ],
  },
  {
    id: 135,
    Question:
      "135. İnter Rail sisteminə üzv olan ölkələrin dəmiryolu idarələri coğrafi zona üzrə qruplaşdırılır. Zona G qrupuna hansı ölkələr daxildir?",
    answers: [
      { answer: "İtaliya, Sloveniya, Yunanıstan və Türkiyə", type: "true" },
      { answer: "Bolqarıstan, Polşa, Rumıniya və İtaliya", type: "false" },
      { answer: "Slovakiya, İspaniya və Şimali İrlandiya", type: "false" },
      { answer: "Rumıniya, Yuqoslaviya və Avstriya", type: "false" },
      { answer: "İspaniya, Portuqaliya və Hollandiya", type: "false" },
    ],
  },
  {
    id: 136,
    Question:
      "136. İnter Rail sisteminə üzv olan ölkələrin dəmiryolu idarələri coğrafi zona üzrə qruplaşdırılır. Zona H qrupuna hansı ölkələr daxildir?",
    answers: [
      {
        answer: "Bolqarıstan, Rumıniya, Yuqoslaviya və Makedoniya",
        type: "true",
      },
      { answer: "İtaliya, Sloveniya, Yunanıstan və Türkiyə", type: "false" },
      { answer: "Fransa, Belçika, Hollandiya və İtaliya", type: "false" },
      { answer: "Rumıniya, Polşa, Türkiyə və Çexiya", type: "false" },
      { answer: "Sloveniya, Almaniya, Yunanıstan və Türkiyə", type: "false" },
    ],
  },
  {
    id: 137,
    Question:
      "137. Aşağıdakı variantların hansında nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəricisi göstərilmişdir?",
    answers: [
      {
        answer: "nəqliyyat vasitəsinin yük götürmə qabiliyyəti və tutumu",
        type: "true",
      },
      { answer: "nəqliyyat vasitəsinin minimum sürəti", type: "false" },
      { answer: "nəqliyyat vasitəsinin uzunluğu", type: "false" },
      { answer: "nəqliyyat vasitəsinin hündürlüyü", type: "false" },
      { answer: "nəqliyyat vasitələrinin estetik görünüşü", type: "false" },
    ],
  },
  {
    id: 138,
    Question:
      "138. Avtomobilin yanacaq qənaətliliyi hansı göstərici ilə qiymətləndirilir?",
    answers: [
      { answer: "xüsusi yanacaq sərfi ilə", type: "true" },
      { answer: "yanacağın keyfiyyəti ilə", type: "false" },
      { answer: "yanacağın növü ilə", type: "false" },
      { answer: "yanacağın maksimum miqdarı ilə", type: "false" },
      { answer: "nəqliyyatın növü ilə", type: "false" },
    ],
  },
  {
    id: 139,
    Question:
      "139. Avtobusun sərnişin daşımalarında minimum vaxtda yerinə yetirə bilmə qabiliyyəti necə adlanır?",
    answers: [
      { answer: "dinamiklik", type: "true" },
      { answer: "dəyanətlilik", type: "false" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "keçicilik", type: "false" },
      { answer: "işləmə qabiliyyəti", type: "false" },
    ],
  },
  {
    id: 140,
    Question:
      "140. Ölkə daxili su nəqliyyatı vasitəsi ilə daşımanın təşkili haqqında bağlanmış müqavilə necə adlanır?",
    answers: [
      { answer: "naviqasiya müqaviləsi", type: "true" },
      { answer: "su nəqliyyatı müqaviləsi", type: "false" },
      { answer: "lisenziya müqaviləsi", type: "false" },
      { answer: "gömrük müqaviləsi", type: "false" },
      { answer: "ticarət müqaviləsi", type: "false" },
    ],
  },
  {
    id: 141,
    Question:
      "141. Hava nəqliyyatı sahəsində daşımaların təşkili haqqında müqavilə hansı müqavilə kimi qəbul olunur?",
    answers: [
      { answer: "təşkilati müqavilə", type: "true" },
      { answer: "məcburi müqavilə", type: "false" },
      { answer: "könüllü müqavilə", type: "false" },
      { answer: "ümumi müqavilə", type: "false" },
      { answer: "qarışıq müqavilə", type: "false" },
    ],
  },
  {
    id: 142,
    Question:
      "142. Hansı hadisə dünyanın bir sıra ölkələrində dəmir yolu şəbəkəsinin yaranmasına səbəb oldu?",
    answers: [
      { answer: "paravozun ixtira edilməsi", type: "true" },
      { answer: "ekspeditorların fəaliyyətinin genişlənməsi", type: "false" },
      {
        answer: "dünyanın bir sıra ölkələrində dəniz nəqliyyatının yaranması",
        type: "false",
      },
      { answer: "ölkələr arası ticarətin genişlənməsi", type: "false" },
      {
        answer:
          "dəmir yolu ilə daşınması nəzərdə tutulan yüklərin həcminin artması",
        type: "false",
      },
    ],
  },
  {
    id: 143,
    Question:
      "143. Nəqliyyat vasitəsinin yanacaq qənaətliliyi hansı göstərici ilə qiymətləndirilir?",
    answers: [
      { answer: "xüsusi yanacaq sərfi ilə", type: "true" },
      { answer: "yanacağın keyfiyyəti ilə", type: "false" },
      { answer: "nəqliyyatın sürəti ilə", type: "false" },
      { answer: "yanacağın növü ilə", type: "false" },
      { answer: "nəqliyyatın növü ilə", type: "false" },
    ],
  },
  {
    id: 144,
    Question: "144. Təyyarələr hansı oxa nəzərən simmetrikdir?",
    answers: [
      { answer: "uzununa", type: "true" },
      { answer: "eninə", type: "false" },
      { answer: "maili", type: "false" },
      { answer: "üfüqi", type: "false" },
      { answer: "şaquli", type: "false" },
    ],
  },
  {
    id: 145,
    Question:
      "145. Sərnişin nəqliyyatının öz funksiyasını minimum yanacaq sərfi ilə yerinə yetirmə qabiliyyəti necə adlanır?",
    answers: [
      { answer: "yanacaq qənaətliliyi", type: "true" },
      { answer: "maksimum yanacaq sərfiyyatı", type: "false" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "nəqletməyə yararlılıq", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
    ],
  },
  {
    id: 146,
    Question:
      "146. Turizm sahəsində bağlanmış daşıma müqaviləsi öz hüquqi təbiətinə görə hansı müqavilə növünə aiddir?",
    answers: [
      { answer: "əsas müqavilə", type: "true" },
      { answer: "ilkin müqavilə", type: "false" },
      { answer: "əlavə müqavilə", type: "false" },
      { answer: "şərti müqavilə", type: "false" },
      { answer: "nəqliyyat müqaviləsi", type: "false" },
    ],
  },
  {
    id: 147,
    Question:
      "147. Turizmdə əsas nəqliyyat müqaviləsi münasibətdə əlavə müqavilə kimi bağlanan müqavilə dedikdə nə başa düşülür?",
    answers: [
      { answer: "yardımçı müqavilə", type: "true" },
      { answer: "yük müqaviləsi", type: "false" },
      { answer: "nəqliyyat müqaviləsi", type: "false" },
      { answer: "daimi müqavilə", type: "false" },
      { answer: "dövrü müqavilə", type: "false" },
    ],
  },
  {
    id: 148,
    Question:
      "148. Nəqliyyat müqaviləsinin bağlanmasında neçə nəfər iştirak edir?",
    answers: [
      { answer: "2", type: "true" },
      { answer: "3", type: "false" },
      { answer: "4", type: "false" },
      { answer: "5", type: "false" },
      { answer: "7", type: "false" },
    ],
  },
  {
    id: 149,
    Question:
      "149. Turizmdə daha çox hansı nəqliyyat növündən istifadə olunur?",
    answers: [
      { answer: "avtomobil nəqliyyatından", type: "true" },
      { answer: "dəniz nəqliyyatından", type: "false" },
      { answer: "çay nəqliyyatından", type: "false" },
      { answer: "təyyarədən", type: "false" },
      { answer: "vertaliyotdan", type: "false" },
    ],
  },
  {
    id: 150,
    Question:
      "150. Tərəflərin qarşısındakı daşımanın təşkili ilə bağlı hüquq vəzifələrin toplusu dedikdə nə başa düşülür?",
    answers: [
      { answer: "müqavilənin məzmunu", type: "true" },
      { answer: "müqavilənin hazırlanması", type: "false" },
      { answer: "müqavilənin həcmi", type: "false" },
      { answer: "müqavilənin miqdarı", type: "false" },
      { answer: "müqavilənin ölçüsü", type: "false" },
    ],
  },
  {
    id: 151,
    Question:
      "151. Turistlərə nəqliyyat xidmətinin göstərilməsi haqqında müqavilə nəqliyyatın hansı növünə görə bağlana bilər?",
    answers: [
      { answer: "bütün nəqliyyat növlərinə", type: "true" },
      { answer: "yalnız çay nəqliyyatına", type: "false" },
      { answer: "yalnız avtomobil nəqliyyatına", type: "false" },
      { answer: "yalnız dəniz nəqliyyatına", type: "false" },
      { answer: "yalnız hava nəqliyyatına", type: "false" },
    ],
  },
  {
    id: 152,
    Question:
      "152. Turistlərə hava nəqliyyatı xidmətinin təşkili haqqında müqavilə təşkilati müqavilə kimi qəbul olunur və necə adlanır?",
    answers: [
      { answer: "xüsusi müqavilə", type: "true" },
      { answer: "ümumi müqavilə", type: "false" },
      { answer: "qarışıq müqavilə", type: "false" },
      { answer: "könüllü müqavilə", type: "false" },
      { answer: "məcburi müqavilə", type: "false" },
    ],
  },
  {
    id: 153,
    Question:
      "153. Nəqliyyatın hansı keyfiyyət göstəricisi onun istehsalı, bərpası və təmiri zamanı yüksək əmək məhsuldarlığını təmin etmək üçün konstruktiv - texnoloji işlərin effektivliyini xarakterizə edir?",
    answers: [
      { answer: "texnolojilik", type: "true" },
      { answer: "erqonomik", type: "false" },
      { answer: "unifikasiya", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
    ],
  },
  {
    id: 154,
    Question:
      "154. Hansı göstərici avtomobilin dinamik xüsusiyyətlərinə aiddir?",
    answers: [
      { answer: "dartıcı-sürət və tormoz", type: "true" },
      { answer: "dəyanətlik və idarəolunma", type: "false" },
      { answer: "keçicilik və yanacaq qənaətliliyi", type: "false" },
      { answer: "idarəolunma və hərəkət səlisliyi", type: "false" },
      { answer: "hərəkət səlisliyi və keçicilik", type: "false" },
    ],
  },
  {
    id: 155,
    Question:
      "155. Nəqliyyat vasitəsinin öz funksiyalarını texniki sənədlərin tələbləri ilə müəyyən olunmuş parametrlərlə yerinə yetirməsi nəyi xarakterizə edir?",
    answers: [
      { answer: "işləmə qabiliyyətini", type: "true" },
      { answer: "nəqliyyatın sürətini", type: "false" },
      { answer: "nəqliyyatın dəyanətliliyini", type: "false" },
      { answer: "nəqliyyatın yanacaq qənaətliliyini", type: "false" },
      { answer: "tormoz xüsusiyyətlərini", type: "false" },
    ],
  },
  {
    id: 156,
    Question:
      "156. Avtonəqliyyat vasitəsinin bütün parametrlərinin baxılan zaman anında normativ texniki sənədlərdə verilmiş tələblərə uyğunluğu onun hansı vəziyyətini xarakterizə edir?",
    answers: [
      { answer: "yararlı olmasını", type: "true" },
      { answer: "nasaz olmasını", type: "false" },
      { answer: "yüklü olmasını", type: "false" },
      { answer: "yüksüz olmasını", type: "false" },
      { answer: "tormoz xüsusiyyətini", type: "false" },
    ],
  },
  {
    id: 157,
    Question: "157. Hava yolları nəqliyyatı hansı nəqliyyat növünə aiddir?",
    answers: [
      { answer: "texniki nəqliyyat", type: "true" },
      { answer: "tibbi nəqliyyat", type: "false" },
      { answer: "hərbi nəqliyyat", type: "false" },
      { answer: "dəniz nəqliyyatı", type: "false" },
      { answer: "çay nəqliyyatı", type: "false" },
    ],
  },
  {
    id: 158,
    Question:
      "158. Ümumi təyinatlı daşınma xidmətləri hansı təşkilatlar tərəfindən həyata keçirilir?",
    answers: [
      { answer: "komersiya təşkilatları tərəfindən", type: "true" },
      { answer: "istirahət mərkəzləri tərəfindən", type: "false" },
      { answer: "akkreditləşdirmə üzrə orqan tərəfindən", type: "false" },
      { answer: "sertifikatlaşdırma üzrə orqan tərəfindən", type: "false" },
      { answer: "standartlaşdırma üzrə orqan tərəfindən", type: "false" },
    ],
  },
  {
    id: 159,
    Question:
      "159. Nəqliyyatın əsas funksiyalarının yerinə yetirilməsi xassəsini təyin edən və onun tətbiqolunma sahəsinin müəyyənləşdirilməsi hansı keyfiyyət göstəricisinin təyin olunması zamanı yerinə yetirilir?",
    answers: [
      { answer: "təyinat", type: "true" },
      { answer: "estetik", type: "false" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "texnolojilik", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
    ],
  },
  {
    id: 160,
    Question:
      "160. Nəqliyyatın istismarı zamanı onun ətraf mühitə ziyanlı təsirinin səviyyəsinin xarakterizə edilməsi hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "ekoloji", type: "true" },
      { answer: "estetik", type: "false" },
      { answer: "erqonomik", type: "false" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
    ],
  },
  {
    id: 161,
    Question:
      "161. Nəqliyyat vasitəsindən istifadə prosesində qarşıya çıxan və onun istismar imkanlarını müəyyən edən texniki göstərici hansı variantda verilmişdir?",
    answers: [
      { answer: "istismar xüsusiyyətləri", type: "true" },
      { answer: "texniki qulluq", type: "false" },
      { answer: "avtomobilin istismarı", type: "false" },
      { answer: "nəqliyyatın növü", type: "false" },
      { answer: "işləmə qabiliyyəti", type: "false" },
    ],
  },
  {
    id: 162,
    Question:
      "162. Avtonəqliyyat vasitəsinə baxılan zaman anında normativ texniki sənədlərdə verilmiş tələblərin birinə və yaxud bir neçəsinə uyğunsuzluğu onun hansı vəziyyətini xarakterizə edir?",
    answers: [
      { answer: "nasaz olmasını", type: "true" },
      { answer: "saz olmasını", type: "false" },
      { answer: "dəyanətliliyini", type: "false" },
      { answer: "yüklü olmasını", type: "false" },
      { answer: "yüksüz olmasını", type: "false" },
    ],
  },
  {
    id: 163,
    Question:
      "163. Aşağıdakı variantların hansında nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəricisi göstərilmişdir?",
    answers: [
      { answer: "nəqliyyat vasitəsinin təmirə yararlığı", type: "true" },
      { answer: "nəqliyyat vasitəsinin rəngi", type: "false" },
      { answer: "nəqliyyat vasitəsinin uzunluğu", type: "false" },
      { answer: "nəqliyyat vasitəsinin eni", type: "false" },
      { answer: "nəqliyyat vasitələrinin estetik görünüşü", type: "false" },
    ],
  },
  {
    id: 164,
    Question:
      "164. İşləmə qabiliyyətini itirmiş avtomobilin texniki vəziyyətinin bərpasına yönəlmiş texniki təsirlərin məcmusu necə adlanır?",
    answers: [
      { answer: "təmir", type: "true" },
      { answer: "nasazlıq", type: "false" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "dəyanətlilik", type: "false" },
      { answer: "resurs", type: "false" },
    ],
  },
  {
    id: 165,
    Question:
      "165. Nəqliyyatın istehsalı və təmiri zamanı yüksək əmək məhsuldarlığını təmin etmək üçün konstruktiv - texnoloji işlərin effektivliyinin xarakterizə edilməsi onun hansı keyfiyyət göstəricisidir?",
    answers: [
      { answer: "texnolojilik", type: "true" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "təyinat", type: "false" },
      { answer: "unifikasiya", type: "false" },
    ],
  },
  {
    id: 166,
    Question:
      "166. Aşağıdakılardan hansı avtomobilin istismar xüsusiyyətləri qrupuna aid deyil?",
    answers: [
      { answer: "unifikasiya", type: "true" },
      { answer: "idarəolunma", type: "false" },
      { answer: "dəyanətlik", type: "false" },
      { answer: "keçicilik", type: "false" },
      { answer: "hərəkət səlisliyi", type: "false" },
    ],
  },
  {
    id: 167,
    Question:
      "167. Avtomobilin bir yerdən başqa yerə bütün növ texniki nəqliyyat vasitələri ilə nəqledilməsinin mümkünlüyünün və asanlığının xarakterizə edilməsi onun hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "nəqletməyə yararlılıq", type: "true" },
      { answer: "patent - hüquq", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "təyinat", type: "false" },
    ],
  },
  {
    id: 168,
    Question:
      "168. Sərnişin avtobusunun imtinasız işləməsi, uzunömürlülüyü, təmirə yararlılığı və saxlanması xassələrinin xarakterizə edilməsi onun hansı keyfiyyət göstəricisi adlanır?",
    answers: [
      { answer: "etibarlılıq", type: "true" },
      { answer: "təyinat", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "estetik", type: "false" },
    ],
  },
  {
    id: 169,
    Question:
      "169. Hansı göstəricidə nəqliyyat vasitəsində istifadə olunmuş texniki həllərin yenilik dərəcəsi, onların patent müdafiəsi, həmçinin onun ölkədə və xaricdə maneəsiz realizə olunmasının mümkünlüyü xarakterizə edilir?",
    answers: [
      { answer: "patent - hüquq", type: "true" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "təyinat", type: "false" },
      { answer: "erqonomik", type: "false" },
    ],
  },
  {
    id: 170,
    Question:
      "170. Hansı keyfiyyət göstəricisi nəqliyyatın təyinatına görə formasının, rənginin rasionallığının, kompazisiyasının bütövlülüyünün xarakterizə edilməsinə aiddir?",
    answers: [
      { answer: "estetik", type: "true" },
      { answer: "erqonomik", type: "false" },
      { answer: "iqtisadi", type: "false" },
      { answer: "təyinat", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
    ],
  },
  {
    id: 171,
    Question:
      "171. Sərnişin vaqonlarının təyinatına uyğun olaraq əsas funksiyalarının yerinə yetirilməyə etibarlı olmasını təyin edən və onun tətbiq olunma sahəsini müəyyənləşdirilməsi hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "təyinat", type: "true" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "iqtisadi", type: "false" },
      { answer: "erqonomik", type: "false" },
      { answer: "unifikasiya", type: "false" },
    ],
  },
  {
    id: 172,
    Question:
      "172. Karbohidrogen yanacağı ilə işləyən hansı qurğu avtomobilin mexaniki enerji mənbəyidir?",
    answers: [
      { answer: "daxiliyanma mühərriki", type: "true" },
      { answer: "sükan trapessiyası", type: "false" },
      { answer: "sürətlər qutusu", type: "false" },
      { answer: "baş ötürücü", type: "false" },
      { answer: "mufta", type: "false" },
    ],
  },
  {
    id: 173,
    Question:
      "173. Avtomobilin təyinatına görə markasına uyğun olaraq formasının rasionallığının və bədii ifadəliliyinin xarakterizə edilməsi onun hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "estetik", type: "true" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "erqonomik", type: "false" },
      { answer: "təyinat", type: "false" },
      { answer: "iqtisadi", type: "false" },
    ],
  },
  {
    id: 174,
    Question:
      "174. Hansı keyfiyyət göstəricisinin təyin olunması zamanı nəqliyyat vasitəsinin təyinatına uyğun olaraq verilmiş funksiyalarının yerinə yetirilməyə etibarlı olmasını təyin edir və onun tətbiqolunma sahəsini müəyyənləşdirir?",
    answers: [
      { answer: "təyinat", type: "true" },
      { answer: "iqtisadi", type: "false" },
      { answer: "estetik", type: "false" },
      { answer: "unifikasiya", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
    ],
  },
  {
    id: 175,
    Question:
      "175. Beynəlxalq avtokirayə şirkətləri kirayə xidmətləri üçün neçə əsas tarif təklif edirlər?",
    answers: [
      { answer: "üç", type: "true" },
      { answer: "altı", type: "false" },
      { answer: "dörd", type: "false" },
      { answer: "beş", type: "false" },
      { answer: "iki", type: "false" },
    ],
  },
  {
    id: 176,
    Question:
      "176. Beynəlxalq avtokirayə şirkətlərinin kirayə xidmətləri üçün təklif etdikləri əsas tariflərdən biri hansı variantda göstərilmişdir?",
    answers: [
      {
        answer: "avtokirayə şirkətinin standart qəbul etdiyi tarifə görə",
        type: "true",
      },
      {
        answer: "avtomobilin markasına uyğun olaraq dəyərinə görə",
        type: "false",
      },
      { answer: "avtomobilin maksimum sürətinə görə", type: "false" },
      { answer: "avtomobilin istehsal olunduğu ilinə görə", type: "false" },
      { answer: "avtomobilin sərnişin tutumuna görə", type: "false" },
    ],
  },
  {
    id: 177,
    Question:
      "177. Nəqliyyat vasitəsinin növünə uyğun olaraq təyinatına görə formasının rasionallığının və kompazisiyasının bütövlülüyünün xarakterizə edilməsi onun hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "estetik", type: "true" },
      { answer: "texnoloji", type: "false" },
      { answer: "erqonomik", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "unifikasiya", type: "false" },
    ],
  },
  {
    id: 178,
    Question:
      "178. Nəqliyyat vasitəsinin hansı keyfiyyət göstəricisi onun istehsalı və təmiri zamanı yüksək əmək məhsuldarlığını təmin etmək üçün konstruktiv - texnoloji işlərin effektivliyini xarakterizə edir?",
    answers: [
      { answer: "texnolojilik", type: "true" },
      { answer: "erqonomik", type: "false" },
      { answer: "unifikasiya", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
    ],
  },
  {
    id: 179,
    Question:
      "179. Hansı keyfiyyət göstəricisi sərnişin avtobuslarının bir yerdən başqa yerə bütün növ nəqliyyat vasitələri ilə nəqledilməsinin mümkünlüyünü və asanlığını xarakterizə edir?",
    answers: [
      { answer: "nəqletməyə yararlılıq", type: "true" },
      { answer: "unifikasiya", type: "false" },
      { answer: "patent - hüquq", type: "false" },
      { answer: "sertifikatlaşdırma", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
    ],
  },
  {
    id: 180,
    Question:
      "180. Nəqliyyat vasitəsində istifadə olunmuş texniki həllərin yenilik dərəcəsini və onların patent müdafiəsinin xarakterizə edilməsi onun hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "patent - hüquq", type: "true" },
      { answer: "unifikasiya", type: "false" },
      { answer: "erqonomik", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "nəqletməyə yararlılıq", type: "false" },
    ],
  },
  {
    id: 181,
    Question:
      "181. Hansı keyfiyyət göstəricisinə nəqliyyat vasitəsinin istehsalı və istismarı zamanı onun ətraf mühitə ziyanlı təsirinin səviyyəsinin xarakterizə edilməsi aiddir?",
    answers: [
      { answer: "ekoloji", type: "true" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "unifikasiya", type: "false" },
      { answer: "estetik", type: "false" },
      { answer: "erqonomik", type: "false" },
    ],
  },
  {
    id: 182,
    Question:
      "182. Turuzm nəqliyyat xidməti zamanı turistlərin qarşılamb-yola salınması prosesi necə adlanır?",
    answers: [
      { answer: "transfer", type: "true" },
      { answer: "nəqliyyat prosesi", type: "false" },
      { answer: "nəqliyyat təminatı", type: "false" },
      { answer: "nəqliyyat xidməti", type: "false" },
      { answer: "turistlərin qəbul edilməsi", type: "false" },
    ],
  },
  {
    id: 183,
    Question:
      "183. Nəqliyyat xidməti zamanı turistlərin daimi yaşayış yerindən istirahət yerinə və əks istiqamətdə yerdəyişməsi necə adlanır?",
    answers: [
      { answer: "turizm daşımaları", type: "true" },
      { answer: "nəqliyyat marşurutu", type: "false" },
      { answer: "turizm nəqliyyat yolu", type: "false" },
      { answer: "turistlərin nəqliyyat təminatı", type: "false" },
      { answer: "turistlərin müvəqqəti yerdəyişmələri", type: "false" },
    ],
  },
  {
    id: 184,
    Question:
      "184. Turizm sahəsində əvvəlcədən ehtimal olunmuş (nəzərdə tutulmuş) və ya müəyyən edilmiş hərəkət etmə yolu, istiqaməti və yol qaydaları necə adlanır?",
    answers: [
      { answer: "turun marşrutu", type: "true" },
      { answer: "nəqliyyat yolu", type: "false" },
      { answer: "turizm nəqliyyatı", type: "false" },
      { answer: "turizm yol qaydaları", type: "false" },
      { answer: "normativ sənəd", type: "false" },
    ],
  },
  {
    id: 185,
    Question:
      "185. Nəqliyyat vasitəsinin hansı keyfiyyət göstəricisinə ətraf mühitə atılan zərərli qazlarım miqdarının təyin olunması aiddir?",
    answers: [
      { answer: "ekoloji", type: "true" },
      { answer: "estetik", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "patent - hüquq", type: "false" },
      { answer: "erqonomik", type: "false" },
    ],
  },
  {
    id: 186,
    Question:
      "186. Nəqliyyat vasitəsin hansı keyfiyyət göstəricisinə zərərli tüstü qarışığının və qazların miqdarının normadan artıq qatılıqda ətraf mühitə atılmasının müəyyənləşdirilməsi aiddir?",
    answers: [
      { answer: "ekoloji", type: "true" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "estetik", type: "false" },
      { answer: "təyinat", type: "false" },
    ],
  },
  {
    id: 187,
    Question:
      "187. Hansı keyfiyyət göstəricisi sərnişin nəqliyyatının istismarı zamanı insanların həyatının və fəaliyyətinin təhlükəsizliyini təmin edən xüsusiyyətlər qrupunu xarakterizə edir?",
    answers: [
      { answer: "təhlükəsizlik", type: "true" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "nəqletməyə yararlılıq", type: "false" },
      { answer: "istismar", type: "false" },
    ],
  },
  {
    id: 188,
    Question:
      "188. Avtomobildə istifadə olunmuş texniki həllərin yenilik dərəcəsini, həmçinin onun ölkədə və xaricdə maneəsiz realizə olunmasının mümkünlüyü hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "patent - hüquq", type: "true" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "nəqletməyə yararlılıq", type: "false" },
    ],
  },
  {
    id: 189,
    Question:
      "189. Sərnişin avtobuslarında yanacaq sistemindəki tənzimləmələrin pozulması neçə faizdən çox dəm qazını artıra bilər?",
    answers: [
      { answer: "70% - dən", type: "true" },
      { answer: "50% - dən", type: "false" },
      { answer: "95% - dən", type: "false" },
      { answer: "45% - dən", type: "false" },
      { answer: "90% - dən", type: "false" },
    ],
  },
  {
    id: 190,
    Question:
      "190. Nəqliyatın texniki vəziyyətinə dair ilkin məlumatların alınmasını təmin edən texnoloji proses necə adlanır?",
    answers: [
      { answer: "diaqnostika", type: "true" },
      { answer: "nəqliyyatın sınağı", type: "false" },
      { answer: "nəqliyyatın təmiri", type: "false" },
      { answer: "nəqliyyatın nasazlığı haqqında xəbərdarlıq", type: "false" },
      { answer: "nəqliyyat prosesinə texniki hazırlıq", type: "false" },
    ],
  },
  {
    id: 191,
    Question:
      "191. Turuzm nəqliyyat təminatına aid olan bəndləri müəyyən edin?\n1. turistlərin daimi yaşayış yerindən istirahət yerinə və əks istiqamətdə yerdəyişməsi\n2. turistlərin nəqliyyat vasitələrinin təmir edilməsi\n3. turistlərin qarşılamb-yola salınmasında nəqliyyat vasitələrindən istifadə olunması\n4. yerləşdirilmiş ərazi ətrafında gəzinti, ekskursiya və marşrut üzrə daşınmalar\n5. turistlərə yeni nəqliyyat vasitələri hədiyə edilməsi\n6. turistlərin avtomobilinin yuyulması və rənglənməsi",
    answers: [
      { answer: "1; 3; 4", type: "true" },
      { answer: "1; 2; 6", type: "false" },
      { answer: "2; 5; 6", type: "false" },
      { answer: "3; 4; 6", type: "false" },
      { answer: "2; 4; 5", type: "false" },
    ],
  },
  {
    id: 192,
    Question:
      "192. Kruiz gəmilərində dərəcələr hansı göstəricilərdən asılıdır?",
    answers: [
      {
        answer: "kuriz gəmisinin interyer sahəsindən və xidmət dəstindən",
        type: "true",
      },
      { answer: "kuriz gəmisinin qabarit ölçüsündən", type: "false" },
      { answer: "kuriz gəmisinin sərnişin tutumundan", type: "false" },
      { answer: "kuriz gəmisinin hərəkət sürətindən", type: "false" },
      { answer: "kuriz gəmisinin suya batma dərinliyindən", type: "false" },
    ],
  },
  {
    id: 193,
    Question:
      "193. Hansı göstəriciyə görə avtomobil nəqliyyatının yol verilən sürtgü materiallarının sərfi müəyyən olunur?",
    answers: [
      { answer: "işlətdiyi yanacağın miqdarına görə", type: "true" },
      { answer: "avtomobilin maksimum sürətinə görə", type: "false" },
      {
        answer: "sürətlər qutusundakı dişli çarxların növünə görə",
        type: "false",
      },
      { answer: "avtomobilin yük götürmə qabiliyyətinə görə", type: "false" },
      { answer: "sürətlər qutusunun pillələrinin sayına görə", type: "false" },
    ],
  },
  {
    id: 194,
    Question:
      "194. Benzinlə işləyən avtomobil mühərrikləri üçün 100 litr yanacağa görə neçə litr yağ sərf edə bilər?",
    answers: [
      { answer: "3,5 litr", type: "true" },
      { answer: "1,8 litr", type: "false" },
      { answer: "2,5 litr", type: "false" },
      { answer: "4.8 litr", type: "false" },
      { answer: "4,5 litr", type: "false" },
    ],
  },
  {
    id: 195,
    Question:
      "195. Sərnişin nəqliyyatının patent müdafiəsini, həmçinin onun ölkədə və xaricdə maneəsiz realizə olunmasının mümkünlüyünün xarakterizə edilməsi hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "patent - hüquq", type: "true" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "nəqletməyə yararlılıq", type: "false" },
      { answer: "sertifikatlaşdırma", type: "false" },
      { answer: "erqonomik", type: "false" },
    ],
  },
  {
    id: 196,
    Question:
      "196. Sərnişin nəqliyyatının istismarı zamanı zərərli qazların ətraf mühitə normadan artıq qatılıqda atılmasının müəyyənləşdirilməsi onun hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "ekoloji", type: "true" },
      { answer: "sertifikatlaşdırma", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "təyinat", type: "false" },
    ],
  },
  {
    id: 197,
    Question:
      "197. Nəqliyyat vasitəsinin istifadənin səmərəliyini xarakterizə edən ümumiləşmiş göstəricisini onun hansı keyfiyyət göstəricisinə aid etmək olar?",
    answers: [
      { answer: "iqtisadi", type: "true" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "istismar", type: "false" },
      { answer: "nəqletməyə yararlılıq", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
    ],
  },
  {
    id: 198,
    Question:
      "198. Nəqliyyat vasitəsin verilmiş funksiyalarının yerinə yetirməyə etibarlı olmasının təyin edilməsi və onun tətbiqolunma sahəsinin müəyyənləşdirilməsi hansı keyfiyyət göstəricisinin təyin olunması zamanı yerinə yetirilir?",
    answers: [
      { answer: "təyinat", type: "true" },
      { answer: "estetik", type: "false" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "texnolojililik", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
    ],
  },
  {
    id: 199,
    Question:
      "199. Avtomobilin təyinatına görə markasına uyğun olaraq formasının, rənginin rasionallığını və kompazisiyasının bütövlülüyünün xarakterizə edilməsi onun hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "estetik", type: "true" },
      { answer: "erqonomik", type: "false" },
      { answer: "təyinat", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
    ],
  },
  {
    id: 200,
    Question:
      "200. Avtomobildə istifadə olunmuş texniki həllərin yenilik dərəcəsini, onların patent müdafiəsini, həmçinin ölkədə və xaricdə maneəsiz realizə olunmasının mümkünlüyünün xarakterizə edilməsi onun hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "patent - hüquq", type: "true" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "estetik", type: "false" },
      { answer: "erqonomik", type: "false" },
      { answer: "etibarlılıq", type: "false" },
    ],
  },
  {
    id: 201,
    Question:
      "201. Dizellə işləyən avtomobil mühərrikləri üçün 100 litr yanacağa görə neçə litr yağ sərf edə bilər?",
    answers: [
      { answer: "5 litr", type: "true" },
      { answer: "3 litr", type: "false" },
      { answer: "7 litr", type: "false" },
      { answer: "2.5 litr", type: "false" },
      { answer: "6,5 litr", type: "false" },
    ],
  },
  {
    id: 202,
    Question:
      "202. Dənizlə sərnişinlərin və baqajın daşınması zamanı bəzi qaydaların unffikasiyası haqqında Beynəlxalq konvensiya neçənci ildə qəbul edilib?",
    answers: [
      { answer: "1967-ci ildə", type: "true" },
      { answer: "1978-ci ildə", type: "false" },
      { answer: "1965-ci ildə", type: "false" },
      { answer: "1997-ci ildə", type: "false" },
      { answer: "1962-ci ildə", type: "false" },
    ],
  },
  {
    id: 203,
    Question:
      "203. Kruiz gəmilərində dərəcələr hansı göstəricilərdən asılıdır?",
    answers: [
      {
        answer:
          "yataq yerlərinin ölçüsündən, miqdarından və onların yerləşməsindən",
        type: "true",
      },
      {
        answer: "kuriz gəmisinin sürətindən və qabarit ölçüsündən",
        type: "false",
      },
      {
        answer: "gəminin ay ərzində daşıdığı sərnişinlərin sayından",
        type: "false",
      },
      {
        answer: "gəminin il ərzində daşıdığı sərnişinlərin sayından",
        type: "false",
      },
      {
        answer: "kuriz gəmisinin suya batma dərinliyindən və sürətindən",
        type: "false",
      },
    ],
  },
  {
    id: 204,
    Question:
      "204. Avtomobilin istehsalı və istismarı zamanı onun ətraf mühitə ziyanlı təsirinin səviyyəsinin xarakterizə edilməsi hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "ekoloji", type: "true" },
      { answer: "estetik", type: "false" },
      { answer: "erqonomik", type: "false" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
    ],
  },
  {
    id: 205,
    Question:
      "205. Avtomobilin istismarı zamanı insanların həyatının və fəaliyyətinin təhlükəsizliyini təmin edən xüsusiyyətlər qrupunun xarakterizə edilməsi onun hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "təhlükəsizlik", type: "true" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "təyinat", type: "false" },
      { answer: "nəqletməyə yararlılıq", type: "false" },
      { answer: "istismar", type: "false" },
    ],
  },
  {
    id: 206,
    Question:
      "206. Nəqliyyat prosesinə texniki hazırlıq zamanı nəqliyatın texniki vəziyyətinə dair ilkin məlumatların alınmasını təmin edən texnoloji proses necə adlanır?",
    answers: [
      { answer: "diaqnostika", type: "true" },
      { answer: "srandartlaşdırma", type: "false" },
      { answer: "nəqliyyatın sınağı", type: "false" },
      { answer: "təmirin strukturu", type: "false" },
      { answer: "nəqliyyatın nasazlığı", type: "false" },
    ],
  },
  {
    id: 207,
    Question:
      "207. Sürtgü materiallarının sərfi hansı göstəriciyə görə avtomobil nəqliyyatı üçün müəyyən olunur?",
    answers: [
      { answer: "işlətdiyi yanacağın miqdarına görə", type: "true" },
      { answer: "avtomobilin kütləsinə görə", type: "false" },
      {
        answer: "sürətlər qutusunun çıxış valının dövürlər sayına görə",
        type: "false",
      },
      { answer: "avtomobilin sürətinə görə", type: "false" },
      { answer: "sürətlər qutusunun qabarit ölçüsünə görə", type: "false" },
    ],
  },
  {
    id: 208,
    Question:
      "208. Ətraf mühitə atılan zərərli tüstü qarışığının miqdarının təyin olunması sərnişin avtobuslarının hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "ekoloji", type: "true" },
      { answer: "erqonomik", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "unifikasiya", type: "false" },
      { answer: "istismar", type: "false" },
    ],
  },
  {
    id: 209,
    Question:
      "209. Avtomobilin imtinasız işləməsi, uzunömürlülüyü, təmirə yararlılığı və saxlanması xassələrinin xarakterizə edilməsi onun hansı keyfiyyət göstəricisi adlanır?",
    answers: [
      { answer: "etibarlılıq", type: "true" },
      { answer: "təyinat", type: "false" },
      { answer: "təhlükəsizlilik", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "estetik", type: "false" },
    ],
  },
  {
    id: 210,
    Question:
      "210. Avtomobilin hərəkəti zamanı təkərə düşən normal yükün təsirindən şində hansı proses baş verir?",
    answers: [
      { answer: "deformasiya edir", type: "true" },
      { answer: "şin qısalır", type: "false" },
      { answer: "şində havanın təzyiqi aşağı düşür", type: "false" },
      { answer: "şində havanın təzyiqi normallaşır", type: "false" },
      { answer: "şin hərəkət edir", type: "false" },
    ],
  },
  {
    id: 211,
    Question:
      "211. Avtobusun hərəkətsiz vəziyyətində tərpənməz şininin yol səthi ilə təmas sahəsi təxmini olaraq hansı formada olur?",
    answers: [
      { answer: "elleps", type: "true" },
      { answer: "kvadrat", type: "false" },
      { answer: "trapesiya", type: "false" },
      { answer: "üçbucaq", type: "false" },
      { answer: "düz xətt", type: "false" },
    ],
  },
  {
    id: 212,
    Question:
      "212. Yanacaq sərfiyyatına görə sürət xarakteristikası neçə yerə bölünür?",
    answers: [
      { answer: "2", type: "true" },
      { answer: "3", type: "false" },
      { answer: "8", type: "false" },
      { answer: "6", type: "false" },
      { answer: "4", type: "false" },
    ],
  },
  {
    id: 213,
    Question: "213. Kruiz gəmilərində dərəcələr hansı göstəricidən asılıdır?",
    answers: [
      { answer: "palubanın hündürlüyündən", type: "true" },
      { answer: "gəminin sürətindən", type: "false" },
      { answer: "gəminin qabarit ölçüsündən", type: "false" },
      { answer: "gəmisinin suya batma dərinliyindən", type: "false" },
      { answer: "limanda dayanma vaxtından", type: "false" },
    ],
  },
  {
    id: 214,
    Question:
      "214. Avtomobilin mühərrikinin tam yanacaq sərfində alınan sürət xarakteristikası necə adlanır?",
    answers: [
      { answer: "xarici sürət xarakteristikası", type: "true" },
      { answer: "daxili sürət xarakteristikası", type: "false" },
      { answer: "yük daşıma sürət xarakteristikası", type: "false" },
      { answer: "sərnişin daşıma sürət xarakteristikası", type: "false" },
      { answer: "natamam sürət xarakteristikası", type: "false" },
    ],
  },
  {
    id: 215,
    Question:
      "215. Avtomobilin mühərrikinin tam olmayan yanacaq sərfində alınan sürət xarakteristikası necə adlanır?",
    answers: [
      { answer: "natamam sürət xarakteristikası", type: "true" },
      { answer: "xarici sürət xarakteristikası", type: "false" },
      { answer: "daxili sürət xarakteristikası", type: "false" },
      { answer: "dəyişən sürət xarakteristikası", type: "false" },
      { answer: "daimi sürət xarakteristikası", type: "false" },
    ],
  },
  {
    id: 216,
    Question:
      "216. Avtobusların mühərrikinin sürət xarakteristikalarının sınağı harada aparılır?",
    answers: [
      { answer: "xüsusi tormoz stendlərində", type: "true" },
      { answer: "asfaltbeton yolda", type: "false" },
      { answer: "torpaq yolda", type: "false" },
      { answer: "çay daşı döşənmiş üfiqi yolda", type: "false" },
      { answer: "enişli - yooxuşlu yolda", type: "false" },
    ],
  },
  {
    id: 217,
    Question:
      "217. Avtobusların növündən asılı olaraq mühərrikin dirsəkli valının dövürlər sayı benzinlə işləyən mühərriklər üçün hansı intervalda olur?",
    answers: [
      { answer: "3200 dəq.-1 –dən 6000 dəq.-1", type: "true" },
      { answer: "1200 dəq.-1 –dən 2400 dəq.-1", type: "false" },
      { answer: "600 dəq.-1 –dən 1800 dəq.-1", type: "false" },
      { answer: "6200 dəq.-1 –dən 6500 dəq.-1", type: "false" },
      { answer: "6500 dəq.-1 –dən 7500 dəq.-1", type: "false" },
    ],
  },
  {
    id: 218,
    Question:
      "218. Avtobusların növündən asılı olaraq mühərrikin dirsəkli valının dövürlər sayı dizel mühərriklər üçün hansı intervalda olur?",
    answers: [
      { answer: "2000 dəq.-1 –dən 4400 dəq.-1", type: "true" },
      { answer: "1200 dəq.-1 –dən 1800 dəq.-1", type: "false" },
      { answer: "750 dəq.-1 –dən 1600 dəq.-1", type: "false" },
      { answer: "5200 dəq.-1 –dən 5800 dəq.-1", type: "false" },
      { answer: "5500 dəq.-1 –dən 7500 dəq.-1", type: "false" },
    ],
  },
  {
    id: 219,
    Question:
      "219. Benzinlə işləyən sərnişin avtobuslarının mühərrikləri üçün dövürlər sayına görə uyğunlaşma əmsalının qiyməti hansı intervalda qəbul edilir?",
    answers: [
      { answer: "1,5 ... 2,5", type: "true" },
      { answer: "0,5 ...1,2", type: "false" },
      { answer: "0,2 ... 1", type: "false" },
      { answer: "2,6 ... 3,2", type: "false" },
      { answer: "2,8 ... 4,5", type: "false" },
    ],
  },
  {
    id: 220,
    Question:
      "220. Dizel mühərrikli sərnişin avtobusları üçün dövürlər sayına görə uyğunlaşma əmsalının qiyməti hansı intervalda qəbul edilir?",
    answers: [
      { answer: "1,45 ... 2", type: "true" },
      { answer: "0,8 ...1,4", type: "false" },
      { answer: "0,5 ... 1,2", type: "false" },
      { answer: "2,5 ... 3", type: "false" },
      { answer: "2,8 ... 3,5", type: "false" },
    ],
  },
  {
    id: 221,
    Question:
      "221. Nəqliyyat vasitəsinin istehsalı və təmiri zamanı yüksək əmək məhsuldarlığını təmin etmək üçün konstruktiv - texnoloji işlərin effektivliyinin xarakterizə edilməsi onun hansı keyfiyyət göstəricisidir?",
    answers: [
      { answer: "texnolojilik", type: "true" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "təyinat", type: "false" },
      { answer: "unifikasiya", type: "false" },
    ],
  },
  {
    id: 222,
    Question:
      "222. Nəqliyyat vasitəsinin bir yerdən başqa yerə bütün növ texniki nəqliyyat vasitələri ilə nəql edilməsinin münkünlüyünün və asanlığının xarakterizə edilməsi onun hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "nəqletməyə yararlılıq", type: "true" },
      { answer: "patent - hüquq", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "təyinat", type: "false" },
    ],
  },
  {
    id: 223,
    Question:
      "223. Avtomobilin imtinasız işləməsi, uzunömürlülüyü, təmirə yararlılığı və saxlanması xassələrinin xarakterizə edilməsi onun hansı keyfiyyət göstəricisi adlanır?",
    answers: [
      { answer: "etibarlılıq", type: "true" },
      { answer: "təyinat", type: "false" },
      { answer: "təhlükəsizlilik", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "estetik", type: "false" },
    ],
  },
  {
    id: 224,
    Question:
      "224. Hansı göstəricidə nəqliyyat vasitəsinin istifadə olunmuş texniki həllərin yenilik dərəcəsi, onların patent müdafiəsi, həmçinin onun ölkədə və xaricdə maneəsiz realizə olunmasının mümkünlüyü xarakterizə edilir?",
    answers: [
      { answer: "patent - hüquq", type: "true" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "təyinat", type: "false" },
      { answer: "erqonomik", type: "false" },
    ],
  },
  {
    id: 225,
    Question:
      "225. Hansı keyfiyyət göstəricisi sərnişin avtobusunun təyinatına görə markasına uyğun olaraq formasının, rənginin rasionallığının, kompazisiyasının bütövlülüyünün xarakterizə edilməsinə aiddir?",
    answers: [
      { answer: "estetik", type: "true" },
      { answer: "erqonomik", type: "false" },
      { answer: "iqtisadi", type: "false" },
      { answer: "təyinat", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
    ],
  },
  {
    id: 226,
    Question:
      "226. Kruiz gəmilərində dərəcələr hansı göstəricilərdən asılıdır?",
    answers: [
      {
        answer: "gəminin uzunluğu boyunca yerlərin yerləşməsindən",
        type: "true",
      },
      { answer: "gəminin sürətindən və qabarit ölçüsündən", type: "false" },
      {
        answer: "kuriz gəmisinin ay ərzində reyslərinin sayından",
        type: "false",
      },
      {
        answer: "kuriz gəmisinin il ərzində reyslərinin sayından",
        type: "false",
      },
      { answer: "gəminin suya batma dərinliyindən", type: "false" },
    ],
  },
  {
    id: 227,
    Question:
      "227. Sərnişin avtobusunun təyinatına uyğun olaraq əsas funksiyalarının yerinə yetirilməyə etibarlı olmasını təyin edir və onun tətbiq olunma sahəsinin müəyyənləşdirilməsi hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "təyinat", type: "true" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "iqtisadi", type: "false" },
      { answer: "erqonomik", type: "false" },
      { answer: "unifikasiya", type: "false" },
    ],
  },
  {
    id: 228,
    Question:
      "228. Karbohidrogen yanacağı ilə işləyən hansı qurğu avtomobilin mexaniki enerji mənbəyidir?",
    answers: [
      { answer: "daxiliyanma mühərriki", type: "true" },
      { answer: "sükan trapessiyası", type: "false" },
      { answer: "sürətlər qutüsu", type: "false" },
      { answer: "baş ötürücü", type: "false" },
      { answer: "mufta", type: "false" },
    ],
  },
  {
    id: 229,
    Question:
      "229. Nəqliyyat vasitəsinin təyinatına görə markasına uyğun olaraq formasının rasionallığının və bədii ifadəliliyinin xarakterizə edilməsi onun hansı keyfiyyət göstəricisinə aiddir?",
    answers: [
      { answer: "estetik", type: "true" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "erqonomik", type: "false" },
      { answer: "təyinat", type: "false" },
      { answer: "iqtisadi", type: "false" },
    ],
  },
  {
    id: 230,
    Question:
      "230. Hansı keyfiyyət göstəricisinin təyin olunması zamanı təyinatına uyğun olaraq nəqliyyat vasitəsinin verilmiş funksiyalarının yerinə yetirilməyə etibarlı olmasını təyin edir və onun tətbiqolunma sahəsini müəyyənləşdirir?",
    answers: [
      { answer: "təyinat", type: "true" },
      { answer: "iqtisadi", type: "false" },
      { answer: "estetik", type: "false" },
      { answer: "unifikasiya", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
    ],
  },
  {
    id: 231,
    Question:
      "231. Nəqliyyat vasitələri üçün serviz xidmətlərini neçə yerə bölmək olar?",
    answers: [
      { answer: "6", type: "true" },
      { answer: "7", type: "false" },
      { answer: "9", type: "false" },
      { answer: "3", type: "false" },
      { answer: "5", type: "false" },
    ],
  },
  {
    id: 232,
    Question:
      "232. Coğrafi zona üzrə İnter Rail sisteminə üzv olan ölkələrin dəmiryolu idarələri neçə qrupa bölünür?",
    answers: [
      { answer: "8", type: "true" },
      { answer: "2", type: "false" },
      { answer: "6", type: "false" },
      { answer: "10", type: "false" },
      { answer: "9", type: "false" },
    ],
  },
  {
    id: 233,
    Question:
      "233. Neçə əsas konvensiya Azərbaycan dəmir yolu nəqliyyatında mövcuddur?",
    answers: [
      { answer: "3", type: "true" },
      { answer: "2", type: "false" },
      { answer: "1", type: "false" },
      { answer: "5", type: "false" },
      { answer: "4", type: "false" },
    ],
  },
  {
    id: 234,
    Question:
      "234. Aşağıdakı müqavilələrdən (konvensiyasından) hansı dəmiryolu nəqliyyatında hazırda qüvvədədir?",
    answers: [
      {
        answer:
          "beynəlxalaq dəmir yolu daşınmaları haqqında 1980-ci il müqaviləsi",
        type: "true",
      },
      {
        answer:
          "beynəlxalaq dəmir yolu yükləmələri haqqında 1987-ci il müqaviləsi",
        type: "false",
      },
      {
        answer:
          "beynəlxalaq dəmir yolu daşınmaları haqqında 1985-ci il müqaviləai",
        type: "false",
      },
      {
        answer: "müstəqil dəmir yolu sahəsində 1975-ci il müqaviləsi",
        type: "false",
      },
      {
        answer:
          "Azərbaycan Respublikası Dəmir yolu haqqında 1957-ci il müqaviləsi",
        type: "false",
      },
    ],
  },
  {
    id: 235,
    Question:
      "235. Avtobuslarda tormozlanma intensivliyinә görә hansı tormozlama mövcuddur?",
    answers: [
      { answer: "qәza və xidmәti", type: "true" },
      { answer: "əsas və əlavə", type: "false" },
      { answer: "dəqiq və kobud", type: "false" },
      { answer: "nisbi və xətti", type: "false" },
      { answer: "sadə və mürəkkəb", type: "false" },
    ],
  },
  {
    id: 236,
    Question: "236. Nəqliyyat vasitələri hansı xüsusiyyətlərə malikdir?",
    answers: [
      { answer: "funksional və etibarlıq", type: "true" },
      { answer: "etibarlıq, estetik, təhlükəsizlik", type: "false" },
      { answer: "funksional, təhlükəsizlik, təyinat", type: "false" },
      { answer: "etibarlıq, erqonomik", type: "false" },
      { answer: "funksional, erqonomik", type: "false" },
    ],
  },
  {
    id: 237,
    Question:
      "237. Aşağıdakılardan hansı nəqliyyat vasitələrinin xüsusiyyətlər qrupuna aiddir?",
    answers: [
      { answer: "funksional", type: "true" },
      { answer: "standartlaşdırma", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "erqonomik", type: "false" },
      { answer: "təyinat", type: "false" },
    ],
  },
  {
    id: 238,
    Question:
      "238. Hazırda qəbul olunmuş standartlara görə işçi tormoz mexanizmlərinin effektivliyinin təyin olunma sınaqları neçə növə bölünür?",
    answers: [
      { answer: "3", type: "true" },
      { answer: "6", type: "false" },
      { answer: "4", type: "false" },
      { answer: "5", type: "false" },
      { answer: "8", type: "false" },
    ],
  },
  {
    id: 239,
    Question:
      "239. Aşağıdakılardan hansı nəqliyyat vasitələrinin xüsusiyyətlər qrupuna aiddir?",
    answers: [
      { answer: "etibarlıq", type: "true" },
      { answer: "aqreqatlaşdırma", type: "false" },
      { answer: "təhlükəsizlik", type: "false" },
      { answer: "simplifikatlaşdırma", type: "false" },
      { answer: "standartlaşdırma", type: "false" },
    ],
  },
  {
    id: 240,
    Question:
      "240. Avtobusların dartıcı-sürət xüsusiyyətlərinin qiymətləndirilməsi zamanı sınaq üçün seçilmiş yolun mailliyi neçə faizdən çox olmamalıdır?",
    answers: [
      { answer: "0,5%-dən", type: "true" },
      { answer: "0,3%-dən", type: "false" },
      { answer: "1,8%-dən", type: "false" },
      { answer: "0,2%-dən", type: "false" },
      { answer: "1,2%-dən", type: "false" },
    ],
  },
  {
    id: 241,
    Question:
      "241. Avtobusların təyinatına görə müəyyən edilmiş funksiyaları yerinə yetirmək imkanı hansı xüsusiyyəti adlanır?",
    answers: [
      { answer: "funksional xüsusiyyəti", type: "true" },
      { answer: "etibarlıq xüsusiyyəti", type: "false" },
      { answer: "aqreqatlaşdırma xüsusiyyəti", type: "false" },
      { answer: "unifikasiya xüsusiyyəti", type: "false" },
      { answer: "təhlükəsizlik xüsusiyyəti", type: "false" },
    ],
  },
  {
    id: 242,
    Question:
      "242. Avtobusların işləmə qabiliyyətini saxlamaq imkanını xarakterizə edən xüsusiyyəti necə adlanır?",
    answers: [
      { answer: "etibarlıq xüsusiyyəti", type: "true" },
      { answer: "funksional xüsusiyyəti", type: "false" },
      { answer: "tormoz xüsusiyyəti", type: "false" },
      { answer: "idarəolunma xüsusiyyəti", type: "false" },
      { answer: "təhlükəsizlik xüsusiyyəti", type: "false" },
    ],
  },
  {
    id: 243,
    Question:
      "243. Aşağıdakılardan hansı avtobuslarının istismar xüsusiyyətləri qrupuna aid deyil?",
    answers: [
      { answer: "təhlükəsizlik", type: "true" },
      { answer: "tormoz", type: "false" },
      { answer: "yanacaq qənaətliliyi", type: "false" },
      { answer: "idarəolunma", type: "false" },
      { answer: "dəyanətlik", type: "false" },
    ],
  },
  {
    id: 244,
    Question:
      "244. Müasir avtobuslarda əsasən daxiliyanma mühərriklərindən istifadə edilir. Bu avtobusların güc xüsusiyyətləri hansı xarakteristikaları ilə qiymətləndirilir?",
    answers: [
      { answer: "sürət", type: "true" },
      { answer: "yanacaq qənaətliliyi", type: "false" },
      { answer: "tormoz", type: "false" },
      { answer: "yüklə daşıma", type: "false" },
      { answer: "dönmə", type: "false" },
    ],
  },
  {
    id: 245,
    Question:
      "245. Avtobusların yanacaq sərfinin hesablaması zamanı dizel yanacağının sıxlığını hansı variantdakı ədəd qəbul etmək olar?",
    answers: [
      { answer: "0,83 kq/1itr", type: "true" },
      { answer: "0,63 kq/1itr", type: "false" },
      { answer: "0,56 kq/1itr", type: "false" },
      { answer: "0,98 kq/1itr", type: "false" },
      { answer: "0,92 kq/1itr", type: "false" },
    ],
  },
  {
    id: 246,
    Question:
      "246. Avtobusların yanacaq qənaətliliyini qiymətləndirmək üçün istifadə olunan göstəricilərdən biri hansı variantda göstərilmişdir?",
    answers: [
      {
        answer: "qərarlaşmış hərəkətdə yanacaq xarakteristikası",
        type: "true",
      },
      { answer: "quru torpaq yolda yanacaq xarakteristikası", type: "false" },
      {
        answer: "hamarlanmış qarlı yolda yanacaq xarakteristikası",
        type: "false",
      },
      { answer: "əyrixətli yolda yanacaq xarakteristikası", type: "false" },
      {
        answer: "yüksək temperatur və sürət rejimində yanacaq xarakteristikası",
        type: "false",
      },
    ],
  },
  {
    id: 247,
    Question:
      "247. Sərnişin avtobusları üçün minimal yanacaq sərfi xüsusi gücün hansı qiymətində alınır?",
    answers: [
      { answer: "8,5 kVt", type: "true" },
      { answer: "6,5 kVt", type: "false" },
      { answer: "9,8 kVt", type: "false" },
      { answer: "5,9 kVt", type: "false" },
      { answer: "9,5 kVt", type: "false" },
    ],
  },
  {
    id: 248,
    Question:
      "248. Avtobusların mühərrikinin yanacaq xarakteristikasının yaxşılaşdırılması və transmissiyanın faydalı iş əmsalının artırılması hansı göstəriciyə təsir edir?",
    answers: [
      { answer: "xətti yanacaq sərfinin azaldılmasına", type: "true" },
      { answer: "xətti yanacaq sərfinin artırılmasına", type: "false" },
      { answer: "mühərrikin sürətinin artırılmasına", type: "false" },
      { answer: "hərəkət səlistliliyinin təmin olunmasına", type: "false" },
      { answer: "mühərrikin tormozlanma xüsusiyyətinə", type: "false" },
    ],
  },
  {
    id: 249,
    Question:
      "249. Yüksək sürətlə hərəkət edən avtobusların dönmə qabiliyyəti hansı göstəriciyə görə qiymətləndirilir?",
    answers: [
      { answer: "statik trayektoriya dəyanətliliyinə görə", type: "true" },
      { answer: "avtomobilin sürətinə görə", type: "false" },
      { answer: "avtomobilin tormozlanma xüsusiyyətinə görə", type: "false" },
      { answer: "yolun dönmə bucağına görə", type: "false" },
      { answer: "təkərin yolla ilişmə əmsalına görə", type: "false" },
    ],
  },
  {
    id: 250,
    Question:
      "250. Avtobusların dayandırılması intensivliyinə görə neçə cür dayandırma mövcuddur?",
    answers: [
      { answer: "2", type: "true" },
      { answer: "3", type: "false" },
      { answer: "4", type: "false" },
      { answer: "8", type: "false" },
      { answer: "6", type: "false" },
    ],
  },
  {
    id: 251,
    Question:
      "251. Avtobusların yanacaq qənaətliliyini qiymətləndirmək üçün istifadə edilən göstəricilər hansı variantda düzgün göstərilib?",
    answers: [
      { answer: "1; 3; 5; 7", type: "true" },
      { answer: "2; 4; 5; 6", type: "false" },
      { answer: "1; 4; 6; 7", type: "false" },
      { answer: "2; 3; 4; 7", type: "false" },
      { answer: "1; 4; 5; 6", type: "false" },
    ],
  },
  {
    id: 252,
    Question:
      "252. Turuzm nəqliyyat təminatına aid olanları seçib, düzgün variantı müəyyən edin?",
    answers: [
      { answer: "1; 2; 3; 5", type: "true" },
      { answer: "1; 2; 3; 6", type: "false" },
      { answer: "2; 3; 4; 5", type: "false" },
      { answer: "2; 4; 5; 6", type: "false" },
      { answer: "1; 4; 5; 6", type: "false" },
    ],
  },
  {
    id: 253,
    Question:
      "253. Sərnişinlərə təqdim olunan nəqliyyat xidmətlərinə aid olanları seçib düzgün variantı müəyyən edin?",
    answers: [
      { answer: "1; 3; 6", type: "true" },
      { answer: "1; 2; 6", type: "false" },
      { answer: "2; 3; 4", type: "false" },
      { answer: "2; 5; 6", type: "false" },
      { answer: "3; 4; 5", type: "false" },
    ],
  },
  {
    id: 254,
    Question:
      "254. Turizm sahəsində istifadə olunan təkərli nəqliyyat vasitələrinin dönmə üsullarından biri hansı variantda göstərilmişdir?",
    answers: [
      {
        answer: "bir bortun idarə olunmayan təkərlərinin tormozlanması",
        type: "true",
      },
      { answer: "idarə olunmayan təkərlərin döndərilməsi", type: "false" },
      {
        answer: "idarə olunan və idarə olunmayan təkərlərin birgə döndərilməsi",
        type: "false",
      },
      { answer: "avtomobilin çərçivəsinin döndərilməsi", type: "false" },
      {
        answer: "dönmə istiqamətindəki təkərlərin döndərilməsi",
        type: "false",
      },
    ],
  },
  {
    id: 255,
    Question:
      "255. Avtobusun sürətinin səlist azaldılması və ya verilmiş yerdə saxlanılması üçün istifadə edilən dayandırma necə adlanır?",
    answers: [
      { answer: "xidmət dayandırma", type: "true" },
      { answer: "sadə dayandırma", type: "false" },
      { answer: "mürəkkəb dayandırma", type: "false" },
      { answer: "dəqiq dayandırma", type: "false" },
      { answer: "nisbi dayandırma", type: "false" },
    ],
  },
  {
    id: 256,
    Question:
      "256. Avtobusun məhdud sahədə, istiqaməti kəskin dəyişən böyük əyrilikli trayektoriya üzrə hərəkəti ilə vəziyyətinin tələb olunan qaydada dəyişilmə imkanını xarakterizə edən xüsusiyyətlər qrupu necə adlanır?",
    answers: [
      { answer: "manevrlilik", type: "true" },
      { answer: "dəyanətlilik", type: "false" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "əyrixəttli hərəkət", type: "false" },
      { answer: "dairəvi hərəkət", type: "false" },
    ],
  },
  {
    id: 257,
    Question:
      "257. Avtobuslarının istismarı zamanı verilmiş şərait üçün maksimal intensivliklə həyata keçirilən dayandırılması necə adlanır?",
    answers: [
      { answer: "qəza dayandırılması", type: "true" },
      { answer: "xidmət dayandırma", type: "false" },
      { answer: "mürəkkəb dayandırma", type: "false" },
      { answer: "nisbi dayandırma", type: "false" },
      { answer: "sadə dayandırma", type: "false" },
    ],
  },
  {
    id: 258,
    Question:
      "258. Şinin növündən asılı olan şaquli deformasiya əmsalı - (λ), sərnişin avtobuslarının normal profilli şinləri üçün hansı intervalda qəbul edilir?",
    answers: [
      { answer: "0.85...0.87", type: "true" },
      { answer: "0,65...0,78", type: "false" },
      { answer: "0,76....0,84", type: "false" },
      { answer: "0,92...0,98", type: "false" },
      { answer: "0,9...0,96", type: "false" },
    ],
  },
  {
    id: 259,
    Question:
      "Avtobusların dartıcı-sürət xüsusiyyətlərinin qiymətləndirilməsi zamanı havanın temperaturu neçə dərəcə olmalıdır?",
    answers: [
      {
        answer: "$-5^{\\circ} C$ —dən $+25^{\\circ} C$ aralığında",
        type: "true",
      },
      {
        answer: "$-8^{\\circ} C$ —dən $+10^{\\circ} C$ aralığında",
        type: "false",
      },
      {
        answer: "$-6^{\\circ} C$ —dən $+15^{\\circ} C$ aralığında",
        type: "false",
      },
      {
        answer: "$-3^{\\circ} C$ —dən $+30^{\\circ} C$ aralığında",
        type: "false",
      },
      {
        answer: "$-2^{\\circ} C$ —dən $+35^{\\circ} C$ aralığında",
        type: "false",
      },
    ],
  },
  {
    id: 260,
    Question:
      "260. Şinin növündən asılı olan şaquli deformasiya əmsalı - (λ), sərnişin avtobuslarının təzyiqi nizamlanan şinləri üçün hansı intervalda qəbul edilir?",
    answers: [
      { answer: "0,8...0,85", type: "true" },
      { answer: "0,58...0,72", type: "false" },
      { answer: "0,52....0,68", type: "false" },
      { answer: "0,86...0,92", type: "false" },
      { answer: "0,87...0,96", type: "false" },
    ],
  },
  {
    id: 261,
    Question:
      "Avtomobil nəqliyyat vasitələrinin yalnız itələyici qüvvənin təsiri ilə diyirlənən təkəri necə adlanır?",
    answers: [
      { answer: "aparılan təkər", type: "true" },
      { answer: "aparan təkər", type: "false" },
      { answer: "diyirlənən təkər", type: "false" },
      { answer: "elastiki təkər", type: "false" },
      { answer: "ehtiyat təkəri", type: "false" },
    ],
  },
  {
    id: 262,
    Question:
      "Avtomobillərin tərpənməz şininin kontakt sahəsi hansı formaya uyğundur?",
    answers: [
      { answer: "ellips formasına", type: "true" },
      { answer: "üçbucaq formasına", type: "false" },
      { answer: "düzbucaqlı formasına", type: "false" },
      { answer: "əyri xətt formasına", type: "false" },
      { answer: "kvadrat formasına", type: "false" },
    ],
  },
  {
    id: 263,
    Question: "Nəqliyyat vasitəsi hansı oxa nəzərən simmetrikdir?",
    answers: [
      { answer: "uzununa", type: "true" },
      { answer: "eninə", type: "false" },
      { answer: "üfüqi", type: "false" },
      { answer: "şaquli", type: "false" },
      { answer: "kordinat", type: "false" },
    ],
  },
  {
    id: 264,
    Question:
      "Avtomobil nəqliyyat vasitələrinin asqısı ilə ötürülən maksimal yükün statik yükə nisbəti necə adlanır?",
    answers: [
      { answer: "asqının dinamiklik əmsalı", type: "true" },
      { answer: "parsial rəqs sistemi", type: "false" },
      { answer: "asqının statik əyilməsi", type: "false" },
      { answer: "asqının deformasiyası", type: "false" },
      { answer: "asqının etibarlığı", type: "false" },
    ],
  },
  {
    id: 265,
    Question:
      "Ağırlıq qüvvəsinin təsiri ilə avtobusların asqısının elastiki elementinin deformasiyası nəticəsində təkərlərin yük kuzasına nəzərən yerdəyişməsi necə adlanır?",
    answers: [
      { answer: "statik əyilmə", type: "true" },
      { answer: "deformasiya", type: "false" },
      { answer: "etibarlıq", type: "false" },
      { answer: "sürüşmə", type: "false" },
      { answer: "diyirlənmə", type: "false" },
    ],
  },
  {
    id: 266,
    Question: "Hansı aralıqda avtobuslarda alçaq rəqs tezliyi dəyişir?",
    answers: [
      { answer: "1,5...2,5 Hs", type: "true" },
      { answer: "0,15...0,25 Hs", type: "false" },
      { answer: "0,5...0,8 Hs", type: "false" },
      { answer: "2,6...3 Hs", type: "false" },
      { answer: "2,8...3,2 Hs", type: "false" },
    ],
  },
  {
    id: 267,
    Question:
      "Sərnişin avtobuslarının istismarı zamanı onun tam yanacaq sərfində alınan sürət xarakteristikası necə adlanır?",
    answers: [
      { answer: "xarici sürət xarakteristikası", type: "true" },
      { answer: "daxili sürət xarakteristikası", type: "false" },
      { answer: "tormoz xarakteristikası", type: "false" },
      { answer: "natamam sürət xarakteristikası", type: "false" },
      { answer: "yanacaq qənaətliliyi xarakteristikası", type: "false" },
    ],
  },
  {
    id: 268,
    Question:
      "Avtobusların asqısının statik əyilməsi artarsa məxsusi rəqs tezliyi necə dəyişər?",
    answers: [
      { answer: "məxsusi rəqs tezliyi azalacaq", type: "true" },
      { answer: "məxsusi rəqs tezliyi artacaq", type: "false" },
      { answer: "məxsusi rəqs tezliyi maksimum qiymət alar", type: "false" },
      { answer: "məxsusi rəqs tezliyi minimum qiymət alar", type: "false" },
      { answer: "məxsusi rəqs tezliyi sönər", type: "false" },
    ],
  },
  {
    id: 269,
    Question:
      "Avtobusların sərnişin salonu və onun oxu neçə sərbəstlik dərəcəsinə malikdir?",
    answers: [
      { answer: "6", type: "true" },
      { answer: "3", type: "false" },
      { answer: "2", type: "false" },
      { answer: "8", type: "false" },
      { answer: "10", type: "false" },
    ],
  },
  {
    id: 270,
    Question:
      "Avtobusun sürətini tam dayanma halına qədər tez azaltmaq və dayandırmaq, enişdə hərəkət etdikdə verilmiş hərəkət sürətini saxlamaq, təsadüfi qüvvələrin təsir etdikdə isə avtobusu yerində tərpənməz saxlamaq onun hansı xüsusiyyətinə aiddir?",
    answers: [
      { answer: "əylənc xüsusiyyətinə", type: "true" },
      { answer: "etibarlıq xüsusiyyəti", type: "false" },
      { answer: "funksional xüsusiyyəti", type: "false" },
      { answer: "idarəolunma xüsusiyyətinə", type: "false" },
      { answer: "keçicilik xüsusiyyətinə", type: "false" },
    ],
  },
  {
    id: 271,
    Question:
      "Avtobusun qeyri-ressoraltı kütlələri ressoraltı kütlələrinin neçə faizini təşkil edir?",
    answers: [
      { answer: "15...20%-ə qədərini", type: "true" },
      { answer: "10...12%-ə qədərini", type: "false" },
      { answer: "5...10%-ə qədərini", type: "false" },
      { answer: "20...25%-ə qədərini", type: "false" },
      { answer: "28...32%-ə qədərini", type: "false" },
    ],
  },
  {
    id: 272,
    Question:
      "Avtobusun salonunun rəqsləri neçə mürəkkəb harmonik rəqsdən ibarətdir?",
    answers: [
      { answer: "2", type: "true" },
      { answer: "3", type: "false" },
      { answer: "4", type: "false" },
      { answer: "5", type: "false" },
      { answer: "7", type: "false" },
    ],
  },
  {
    id: 273,
    Question:
      "Avtomobilin təkəri uzununa qüvvənin təsiri ilə diyirlənir, təkərin çevrəvi qüvvəsi hərəkət istiqamətinin əksinə yönəlir. Belə diyirlənmə rejimi necə adlanır?",
    answers: [
      { answer: "əylənc rejimi", type: "true" },
      { answer: "aparılan rejim", type: "false" },
      { answer: "neytral hərəkət rejimi", type: "false" },
      { answer: "sərbəst rejim", type: "false" },
      { answer: "sürətlənmə rejimi", type: "false" },
    ],
  },
  {
    id: 274,
    Question:
      "Avtomobilin mühərrikindən aparan təkərlərə ötürülən güc hərəkətə müqaviməti dəf etməyə kifayət edərsə bu hansı rejim adlanar?",
    answers: [
      { answer: "aparan rejim", type: "true" },
      { answer: "dəyanətlik rejimi", type: "false" },
      { answer: "əylənc rejimi", type: "false" },
      { answer: "aparılan rejim", type: "false" },
      { answer: "idarəolunan rejim", type: "false" },
    ],
  },
  {
    id: 275,
    Question:
      "Avtobusun yolun üfüqi hamar sahəsində 1000 m uzunluqlu ölçü sahəsini keçmə vaxtını ölçməklə əldə edilən sürəti necə adlanır?",
    answers: [
      { answer: "maksimal sürət", type: "true" },
      { answer: "şərti maksimal sürət", type: "false" },
      { answer: "minimal sürət", type: "false" },
      { answer: "normal sürət", type: "false" },
      { answer: "sınaq sürəti", type: "false" },
    ],
  },
  {
    id: 276,
    Question:
      "Avtobusun malik olduğu məxsusi rəqs tezliyindən neçəsi salonun yaylar (ressorlar) üzərində rəqs tezliyinə aiddir?",
    answers: [
      { answer: "2", type: "true" },
      { answer: "3", type: "false" },
      { answer: "5", type: "false" },
      { answer: "8", type: "false" },
      { answer: "6", type: "false" },
    ],
  },
  {
    id: 277,
    Question:
      "Avtobusların dartıcı-sürət xüsusiyyətlərinin qiymətləndirilməsi zamanı sınaq üçün seçilmiş yolun maili sahəsinin uzunluğu neçə metrədən çox olmamalıdır?",
    answers: [
      { answer: "50 m-dən", type: "true" },
      { answer: "30 m-dən", type: "false" },
      { answer: "40 m-dən", type: "false" },
      { answer: "60 m-dən", type: "false" },
      { answer: "80 m-dən", type: "false" },
    ],
  },
  {
    id: 278,
    Question:
      "Müxtəlif istismar şəraitlərində işləyən avtobusun nəqliyyat işinə sərf etdiyi yanacaq sərfini müəyyən edən xüsusiyyətlər qrupu necə adlanır?",
    answers: [
      { answer: "yanacaq qənaətliliyi", type: "true" },
      { answer: "yanacağın növü", type: "false" },
      { answer: "iqtisadi səmərə", type: "false" },
      { answer: "mənfət", type: "false" },
      { answer: "sərfiyyat", type: "false" },
    ],
  },
  {
    id: 279,
    Question:
      "Hərəkət istiqamətini dəyişməyə çalışan xarici qüvvələrin təsiri altında olan avtobusun sürücünün iştirakı olmadan hərəkət istiqamətini saxlaya bilmək xüsusiyyəti necə adlanır?",
    answers: [
      { answer: "dəyanətlik", type: "true" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "sərbəst hərəkət", type: "false" },
      { answer: "maksimum düzxətli hərəkət", type: "false" },
      { answer: "minimum düzxətli hərəkət", type: "false" },
    ],
  },
  {
    id: 280,
    Question:
      "Nəqliyyat vasitəsinin ən aşağı nöqtəsi ilə dayaq müstəvisi arasındakı məsafə necə adlanır?",
    answers: [
      { answer: "işıqlıq məsafəsi", type: "true" },
      { answer: "minimum məsafə", type: "false" },
      { answer: "maksimum məsafə", type: "false" },
      { answer: "hündürlük", type: "false" },
      { answer: "üfiqi müstəvi", type: "false" },
    ],
  },
  {
    id: 281,
    Question:
      "Avtobusun yerindən intensiv sürətləmlə 2000 m uzunluqlu sahənin sonuncu 400 m-ni orta keçmə sürəti necə adlanır?",
    answers: [
      { answer: "şərti maksimal sürət", type: "true" },
      { answer: "şərti minimal sürət", type: "false" },
      { answer: "bərabər sürətli hərəkət", type: "false" },
      { answer: "təcilli hərəkət", type: "false" },
      { answer: "sürətlənmə", type: "false" },
    ],
  },
  {
    id: 282,
    Question:
      "Avtobusların istismarı zamanı xətti yanacaq sərfinin sərnişin və onun yükünün daşınmasında görülən səmərəli işə nisbəti necə adlanır?",
    answers: [
      { answer: "xüsusi yanacaq sərfi", type: "true" },
      { answer: "nəzarət yanacaq sərfi", type: "false" },
      { answer: "dövri hərəkətdə yanacaq xarakteristikası", type: "false" },
      { answer: "maksimum yanacaq sərfi", type: "false" },
      { answer: "minimum yanacaq sərfi", type: "false" },
    ],
  },
  {
    id: 283,
    Question:
      "Avtobusun mühərrikinin xarici sürət xarakteristikasının xarakterik parametrlərinə aid olmayanı hansı variantda göstərilmişdir?",
    answers: [
      { answer: "maksimal dönmə radiusu", type: "true" },
      {
        answer: "mühərrikin dirsəkli valının maksimal fırlanma tezliyi",
        type: "false",
      },
      { answer: "maksimal burucu momenti", type: "false" },
      { answer: "maksimal effektiv gücü", type: "false" },
      { answer: "maksimal gücə uyğun momenti", type: "false" },
    ],
  },
  {
    id: 284,
    Question:
      "Kirayə xidmətləri üçün beynəlxalq avtokirayə şirkətləri neçə əsas tarif təklif edirlər?",
    answers: [
      { answer: "üç", type: "true" },
      { answer: "yeddi", type: "false" },
      { answer: "dörd", type: "false" },
      { answer: "bir", type: "false" },
      { answer: "iki", type: "false" },
    ],
  },
  {
    id: 285,
    Question:
      "Kirayə xidmətləri üçün beynəlxalq avtokirayə şirkətləri təklif etdikləri əsas tariflərdən biri hansı variantda göstərilmişdir?",
    answers: [
      {
        answer: "avtokirayə şirkətinin standart qəbul etdiyi tarifə görə",
        type: "true",
      },
      { answer: "avtomobilin ilinə uyğun olaraq dəyərinə görə", type: "false" },
      { answer: "avtomobilin maksimum sürətinə görə", type: "false" },
      {
        answer: "avtomobilin istehsal olunduğu ilinə və markasına görə",
        type: "false",
      },
      { answer: "avtomobilin sərnişin tutumuna görə", type: "false" },
    ],
  },
  {
    id: 286,
    Question:
      "Tormozlama zamanı avtobusun fırlanan kütlələrinin təsirini nəzərə alan əmsal hansı qiymətlər həddində qəbul edilir?",
    answers: [
      { answer: "1,03...1,05", type: "true" },
      { answer: "1,0...1,02", type: "false" },
      { answer: "0,8...1,0", type: "false" },
      { answer: "1,2...1,5", type: "false" },
      { answer: "1,6...2,1", type: "false" },
    ],
  },
  {
    id: 287,
    Question:
      "Nəqliyyatın tormozlanması zamanı son sürəti sıfıra bərabər olarsa o hansı tormozlama adlanır?",
    answers: [
      { answer: "tam tormozlama", type: "true" },
      { answer: "natamam tormozlama", type: "false" },
      { answer: "nümunəvi tormozlama", type: "false" },
      { answer: "mexaniki tormozlama", type: "false" },
      { answer: "dəqiq tormozlama", type: "false" },
    ],
  },
  {
    id: 288,
    Question:
      "Avtobus alçaq pilləyə keçmədən yolun müqavimətini dəf etmək qabiliyyəti onun hansı keyfiyyətini xarakterizə edir?",
    answers: [
      { answer: "dinamik", type: "true" },
      { answer: "dayandırma", type: "false" },
      { answer: "manevrlilik", type: "false" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "yanacaq qənaətliliyi", type: "false" },
    ],
  },
  {
    id: 289,
    Question:
      "Nəqliyyatın istismarı zamanı mühərrikin bir saatlıq işə sərf etdiyi yanacağın kütləsinin onun effektiv gücünə nisbəti ilə müəyyən olunan göstərici necə adlanır?",
    answers: [
      { answer: "mühərrikin xüsusi yanacaq sərfi", type: "true" },
      { answer: "nəzarət yanacaq sərfi", type: "false" },
      { answer: "dövri hərəkətdə yanacaq sərfi", type: "false" },
      { answer: "qərarlaşmış hərəkətdə yanacaq sərfi", type: "false" },
      { answer: "minimum sürətdə yanacaq sərfi", type: "false" },
    ],
  },
  {
    id: 290,
    Question:
      "Avtobusa təsir edən bütün qüvvə faktorlarını neçə qrupa bölmək olar?",
    answers: [
      { answer: "3", type: "true" },
      { answer: "8", type: "false" },
      { answer: "6", type: "false" },
      { answer: "5", type: "false" },
      { answer: "4", type: "false" },
    ],
  },
  {
    id: 291,
    Question:
      "Avtobusun dayanma yolunun əsəs hissəsində yavaşıma təcili təxminən bərabər olur. Bu təcil necə adlanır?",
    answers: [
      { answer: "qərarlaşmış yavaşıma təcili", type: "true" },
      { answer: "maksimal yavaşıma təcil", type: "false" },
      { answer: "minimal yavaşıma təcil", type: "false" },
      { answer: "mərkəzdənqaçma təcili", type: "false" },
      { answer: "nisbi yavaşıma təcili", type: "false" },
    ],
  },
  {
    id: 292,
    Question:
      "Dartıcı-sürət və tormoz xüsusiyyətləri avtomobilin hansı xüsusiyyətləri adlanır?",
    answers: [
      { answer: "dinamik xüsusiyyətləri", type: "true" },
      { answer: "yanacaq qənaətliliyi xüsusiyyətləri", type: "false" },
      { answer: "idarəolunma xüsusiyyətləri", type: "false" },
      { answer: "dəyanəlik xüsusiyyətləri", type: "false" },
      { answer: "hərəkət səlisliyi xüsusiyyətləri", type: "false" },
    ],
  },
  {
    id: 293,
    Question:
      "Avtobusun yanacaq qənaətliliyi xarakteristikası bir çox faktorlardan asılıdır. Bu faktorlar hansı variantda düzgün göstərilmişdir?",
    answers: [
      { answer: "1; 3; 5; 7", type: "true" },
      { answer: "2; 3; 5; 6", type: "false" },
      { answer: "2; 4; 6; 7", type: "false" },
      { answer: "1; 4; 5; 6", type: "false" },
      { answer: "1; 2; 4; 7", type: "false" },
    ],
  },
  {
    id: 294,
    Question:
      "Avtobusların hər təkərinə düşən yükü dəqiq hesablamaq mümkün olmadığı üçün hansı qiymətindən istifadə edilir?",
    answers: [
      { answer: "orta qiymətindən", type: "true" },
      { answer: "maksimum qiymətindən", type: "false" },
      { answer: "minimum qiymətindən", type: "false" },
      {
        answer: "sürətlənmədə müqavimət qüvvələrinin qiymətindən",
        type: "false",
      },
      { answer: "radial və ətalət qüvvələrinin qiymətindən", type: "false" },
    ],
  },
  {
    id: 295,
    Question:
      "Sərnişin avtobusunun çərçivəsinə təkərdən ötürülən qüvvə necə adlanır?",
    answers: [
      { answer: "dartıcı qüvvə", type: "true" },
      { answer: "mərkəzdən qaçma qüvvəsi", type: "false" },
      { answer: "çevrəvi qüvvə", type: "false" },
      { answer: "elastiki qüvvə", type: "false" },
      { answer: "radial qüvvə", type: "false" },
    ],
  },
  {
    id: 296,
    Question:
      "Hans variantda avtobusun yanacaq qənaətliliyini qiymətləndirmək üçün istifadə olunan göstəricilərdən biri göstərilmişdir?",
    answers: [
      { answer: "dövri hərəkətdə yanacaq xarakteristikası", type: "true" },
      {
        answer: "enişli-yoxuşlu yolda yanacaq xarakteristikası",
        type: "false",
      },
      { answer: "minimum sürətdə yanacaq xarakteristikası", type: "false" },
      { answer: "maksimum sürətdə yanacaq xarakteristikası", type: "false" },
      {
        answer: "əyri xətli trayektoriya üzrə yanacaq qənaətliliyi",
        type: "false",
      },
    ],
  },
  {
    id: 297,
    Question:
      "Avtomobilin dayandırılmasının başlanğıcından tam dayanana qədər onun keçdiyi yol necə adlanır?",
    answers: [
      { answer: "dayanma yolu", type: "true" },
      { answer: "sürüşmə yolu", type: "false" },
      { answer: "xidməti yol", type: "false" },
      { answer: "elementar yol", type: "false" },
      { answer: "təhlükəli yol", type: "false" },
    ],
  },
  {
    id: 298,
    Question:
      "Avtobusun sürətlənmə sınağı neçə metrlik yol sahəsində aparılır?",
    answers: [
      { answer: "2000 m-lik", type: "true" },
      { answer: "2500 m-lik", type: "false" },
      { answer: "3200 m-lik", type: "false" },
      { answer: "1500 m-lik", type: "false" },
      { answer: "300 m-lik", type: "false" },
    ],
  },
  {
    id: 299,
    Question:
      "Hans variantdakı ədədi avtobusun yanacaq sərfinin hesablaması zamanı benzinin sıxlığı qəbul etmək olar?",
    answers: [
      { answer: "0,73 kq/litr", type: "true" },
      { answer: "0,56 kq/litr", type: "false" },
      { answer: "0,65 kq/litr", type: "false" },
      { answer: "0,82 kq/litr", type: "false" },
      { answer: "0,96 kq/litr", type: "false" },
    ],
  },
  {
    id: 300,
    Question:
      "Hans variantda avtobusun yanacaq qənaətliliyini qiymətləndirmək üçün istifadə olunan göstəricilərdən biri göstərilmişdir?",
    answers: [
      { answer: "nəzarət yanacaq sərfi", type: "true" },
      { answer: "quru torpaq yolda yanacaq sərfi", type: "false" },
      { answer: "əyrixətli yolda yanacaq sərfi", type: "false" },
      { answer: "yüksək temperatur şəraitində yanacaq sərfi", type: "false" },
      { answer: "yüksək sürət rejimində yanacaq sərfi", type: "false" },
    ],
  },
  {
    id: 301,
    Question:
      "Nəqliyyat vasitəsinin texniki vəziyyətinin bərpasına yönəlmiş texniki təsirlərin məcmusu necə adlanır?",
    answers: [
      { answer: "təmir", type: "true" },
      { answer: "nasazlıq", type: "false" },
      { answer: "etibarlılıq", type: "false" },
      { answer: "dəyanətlilik", type: "false" },
      { answer: "resurs", type: "false" },
    ],
  },
  {
    id: 302,
    Question:
      "İstismarı prosesində sərnişin avtobusunda baş verən imtina və nasazlıqların aradan qaldırılması necə adlanır?",
    answers: [
      { answer: "cari təmir", type: "true" },
      { answer: "dövrü təmir", type: "false" },
      { answer: "nasazlıq", type: "false" },
      { answer: "daimi təmir", type: "false" },
      { answer: "nəzarət", type: "false" },
    ],
  },
  {
    id: 303,
    Question:
      "Nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəricisi aşağıdakı variantların hansında göstərilmişdir?",
    answers: [
      {
        answer: "nəqliyyat vasitəsinin imtinasızlığı və rahatlığı",
        type: "true",
      },
      { answer: "nəqliyyat vasitəsinin rəngi", type: "false" },
      { answer: "nəqliyyat vasitəsinin uzunluğu", type: "false" },
      { answer: "nəqliyyat vasitəsinin hündürlüyü", type: "false" },
      { answer: "nəqliyyat vasitələrinin eni", type: "false" },
    ],
  },
  {
    id: 304,
    Question:
      "Avtobusun yanacaq qənaətliliyi xarakteristikası bir çox faktorlardan asılıdır. Hansı variantda bu faktorlar düzgün göstərilmişdir?",
    answers: [
      { answer: "1; 3; 5; 7", type: "true" },
      { answer: "2; 3; 6; 7", type: "false" },
      { answer: "2; 4; 6; 7", type: "false" },
      { answer: "1; 3; 4; 5", type: "false" },
      { answer: "1; 2; 4; 6", type: "false" },
    ],
  },
  {
    id: 305,
    Question:
      "Neçə metrlik yol sahəsində sərnişin avtobuslarının sürətlənməsinin təyini sınağı aparılır?",
    answers: [
      { answer: "2000 m-lik", type: "true" },
      { answer: "3000 m-lik", type: "false" },
      { answer: "2500 m-lik", type: "false" },
      { answer: "1200 m-lik", type: "false" },
      { answer: "500 m-lik", type: "false" },
    ],
  },
  {
    id: 306,
    Question:
      "İstismarı prosesində sərnişin nəqliyyat vasitəsinin dəyişən, baxılan zaman anında ölçülmüş və kəmiyyətcə qiymətləndirilmiş istismar xüsusiyyətlərinin toplusu ilə təyin olunması onun hansı xüsusiyyətini xarakterizə edir?",
    answers: [
      { answer: "texniki vəziyyətini", type: "true" },
      { answer: "təmir olmasını", type: "false" },
      { answer: "işçi vəziyyətini", type: "false" },
      { answer: "nasaz olmasını", type: "false" },
      { answer: "dayanıqlılığını", type: "false" },
    ],
  },
  {
    id: 307,
    Question:
      "Hans variantda sərnişin avtobusunun yanacaq qənaətliliyini qiymətləndirmək üçün istifadə edilən göstəricilər düzgün göstərilib?",
    answers: [
      { answer: "1; 3; 5; 7", type: "true" },
      { answer: "2; 4; 6", type: "false" },
      { answer: "1; 4; 6; 7", type: "false" },
      { answer: "2; 3; 4; 6", type: "false" },
      { answer: "4; 5; 6", type: "false" },
    ],
  },
  {
    id: 308,
    Question: "Təyyarələr hansı oxa nəzərən simmetrikdir?",
    answers: [
      { answer: "uzununa", type: "true" },
      { answer: "eninə", type: "false" },
      { answer: "üfüqi", type: "false" },
      { answer: "şaquli", type: "false" },
      { answer: "kordinat", type: "false" },
    ],
  },
  {
    id: 309,
    Question:
      "Benzinin sıxlığını avtobusların yanacaq sərfinin hesablaması zamanı hansı variantdakı ədədi qəbul etmək olar?",
    answers: [
      { answer: "0,73 kq/litr", type: "true" },
      { answer: "0,86 kq/litr", type: "false" },
      { answer: "0,72 kq/litr", type: "false" },
      { answer: "0,68 kq/litr", type: "false" },
      { answer: "0,92 kq/litr", type: "false" },
    ],
  },
  {
    id: 310,
    Question:
      "Avtobusun dayandırılması zamanı son sürəti sıfıradan fərqli olarsa belə dayandırma necə adlanar?",
    answers: [
      { answer: "natamam dayandırma", type: "true" },
      { answer: "tam dayandırma", type: "false" },
      { answer: "mexaniki dayandırma", type: "false" },
      { answer: "ilkin dayandırma", type: "false" },
      { answer: "nümunəvi dayandırma", type: "false" },
    ],
  },
  {
    id: 311,
    Question:
      "Avtomobilin tormoz yolunun əsas hissəsində yavaşıma təcili təxmini olaraq bərabər olur. Bu təcil necə adlanır?",
    answers: [
      { answer: "qərarlaşmış yavaşıma təcili", type: "true" },
      { answer: "maksimal yavaşıma təcil", type: "false" },
      { answer: "minimal yavaşıma təcil", type: "false" },
      { answer: "mərkəzdənqaçma təcili", type: "false" },
      { answer: "nisbi yavaşıma təcili", type: "false" },
    ],
  },
  {
    id: 312,
    Question:
      "Avtobusun sınağı zamanı yerindən intensiv sürətlə 2000 m uzunluqlu sahənin sonuncu neçə metrini orta keçmə sürəti, şərti maksimal sürət adlanır?",
    answers: [
      { answer: "400 m-ni", type: "true" },
      { answer: "300 m-ni", type: "false" },
      { answer: "200 m-ni", type: "false" },
      { answer: "800 m-ni", type: "false" },
      { answer: "1200 m-ni", type: "false" },
    ],
  },
  {
    id: 313,
    Question:
      "Hesablama zamanı avtobusun xüsusi yanacaq sərfi xətti yanacaq sərfinin hansı göstəricisinə nisbəti ilə təyin edilir?",
    answers: [
      {
        answer:
          "avtobusun yük və ya sərnişin daşınmasında görülən səmərəli işə",
        type: "true",
      },
      { answer: "avtobusun dövri hərəkətdə yanacaq sərfinə", type: "false" },
      { answer: "düzxətli yolda avtobusun orta sürətinə", type: "false" },
      { answer: "avtobusun maksimum yanacaq sərfinə", type: "false" },
      { answer: "avtobusun minimum yanacaq sərfinə", type: "false" },
    ],
  },
  {
    id: 314,
    Question:
      "Avtobusun dayandırılmasının başlanğıcından onun tam dayanana qədər keçdiyi yol necə adlanır?",
    answers: [
      { answer: "dayanma yolu", type: "true" },
      { answer: "sürüşmə yolu", type: "false" },
      { answer: "xidməti yol", type: "false" },
      { answer: "elementar yol", type: "false" },
      { answer: "təhlükəli yol", type: "false" },
    ],
  },
  {
    id: 315,
    Question:
      "Hansı variantda təkərli nəqliyyat vasitələrinin dönmə üsullarından biri göstərilmişdir?",
    answers: [
      { answer: "idarə olunan təkərlərin döndərilməsi", type: "true" },
      { answer: "idarə olunmayan təkərlərin döndərilməsi", type: "false" },
      {
        answer: "avtomobili dayandıraraq sükan trapesiyasının döndərilməsi",
        type: "false",
      },
      { answer: "qabq və arxa təkərlərin oxunun döndərilməsi", type: "false" },
      {
        answer: "dönmə istiqamətindəki təkərlərin döndərilməsi",
        type: "false",
      },
    ],
  },
  {
    id: 316,
    Question:
      "Avtobusun mühərrikinin xüsusi yanacaq sərfi onun iş prosesi zamanı neçə saatlıq sərf etdiyi yanacağın kütləsinin effektiv gücünə nisbəti ilə müəyyən olunur?",
    answers: [
      { answer: "bir saatlıq", type: "true" },
      { answer: "iki saatlıq", type: "false" },
      { answer: "beş saatlıq", type: "false" },
      { answer: "on saatlıq", type: "false" },
      { answer: "on iki saatlıq", type: "false" },
    ],
  },
  {
    id: 317,
    Question:
      "Sərnişin avtobusunun dinamik keyfiyyəti onun hansı funksiyası ilə xarakterizə edilir?",
    answers: [
      {
        answer:
          "alçaq pilləyə keçmədən avtobusun yolun müqavimətini dəf etmək qabiliyyəti",
        type: "true",
      },
      {
        answer: "avtobusun yüksək tormozlanma qabiliyyətinə malik olması ilə",
        type: "false",
      },
      { answer: "avtobusun yüksək sürətlə hərəkət etməsi ilə", type: "false" },
      {
        answer: "avtobusun yüksək etibarlılıq xüsusiyyətinə malik olması ilə",
        type: "false",
      },
      {
        answer: "avtobusun yanacaq qənaətliliyi xüsusiyyəti ilə",
        type: "false",
      },
    ],
  },
  {
    id: 318,
    Question:
      "Dayandırma zamanı avtobusun son sürəti sıfıra bərabər olarsa o hansı dayandırma adlanar?",
    answers: [
      { answer: "tam dayandırma", type: "true" },
      { answer: "natamam dayandırma", type: "false" },
      { answer: "mexaniki dayandırma", type: "false" },
      { answer: "nümunəvi dayandırma", type: "false" },
      { answer: "etibarlı dayandırma", type: "false" },
    ],
  },
  {
    id: 319,
    Question:
      "Sərnişin avtobuslarında uzununa keçicilik radiusu hansı qiymətlər intervalında qəbul edilir?",
    answers: [
      { answer: "2,5...6 m", type: "true" },
      { answer: "2...2,5 m", type: "false" },
      { answer: "0.25...0.4 m", type: "false" },
      { answer: "6...6,5 m", type: "false" },
      { answer: "6,2...7 m", type: "false" },
    ],
  },
  {
    id: 320,
    Question:
      "Hansı variantda sərnişin avtobusunun idarə olunan təkərlərinin maksimal dönmə bucağı göstərilmişdir?",
    answers: [
      { answer: "35 ... 45°- ə", type: "true" },
      { answer: "50...75° - ə", type: "false" },
      { answer: "60...80° - ə", type: "false" },
      { answer: "28...34° - ə", type: "false" },
      { answer: "25...30° - ə", type: "false" },
    ],
  },
  {
    id: 321,
    Question:
      "Avtobuslarda uzununa keçicilik radiusu hansı qiymətlər intervalında qəbul edilir?",
    answers: [
      { answer: "4....9 m", type: "true" },
      { answer: "3...3,8 m", type: "false" },
      { answer: "2...3,4 m", type: "false" },
      { answer: "9,1...9,5 m", type: "false" },
      { answer: "9,4...10 m", type: "false" },
    ],
  },
  {
    id: 322,
    Question:
      "Avtobusun əylənc pedalı basıldıqdan sonra müəyyən vaxt ərzində dayandırma qüvvəsi pedaldan əylənc mexanizmlərinə ötürülür. Bu kiçik zaman vaxtı necə adlanır?",
    answers: [
      { answer: "əylənc intiqalının gecikmə vaxtı", type: "true" },
      { answer: "təcili dayandırma", type: "false" },
      { answer: "dayandırma müddəti", type: "false" },
      { answer: "pedalın gecikmə vaxtı", type: "false" },
      { answer: "sürətli dayandırma", type: "false" },
    ],
  },
  {
    id: 323,
    Question:
      "Avtobusun nəzarət yanacaq sərfinin müəyyən olunması hansı məqsəd üçün həyata keçirilir?",
    answers: [
      { answer: "yanacaq qənaətliliyini qiymətləndirmək üçün", type: "true" },
      {
        answer: "avtobusun dəyanətliliyinin təyin olunması üçün",
        type: "false",
      },
      { answer: "avtobusun sürətinin müəyyən olunması üçün", type: "false" },
      { answer: "yanacağın qiymətinin müəyyən edilməsi üçün", type: "false" },
      {
        answer: "avtobusun işlətdiyi yanacağın növünü müəyyən etmək üçün",
        type: "false",
      },
    ],
  },
  {
    id: 324,
    Question:
      "Turoperator və nəqliyyat təşkilatları arasındakı münasibətlər necə nizamlanır?",
    answers: [
      { answer: "nəqliyyat hüququ ilə nizamlanır", type: "true" },
      {
        answer: "nəqliyyat sahibinin tələbləri əsasında nizamlanır",
        type: "false",
      },
      {
        answer:
          "nəqliyyat müəssisəsinin fəaliyyəti haqqında nizamnamə ilə nizamlanır",
        type: "false",
      },
      {
        answer: "istirahət mərkəzinin fəaliyyəti haqqında sənədlə nizamlanır",
        type: "false",
      },
      {
        answer: "nəqliyyat şirkətinin tələbləri əsasında nizamlanır",
        type: "false",
      },
    ],
  },
  {
    id: 325,
    Question: "Avtobusun natamam dayandırması nəyə deyilir?",
    answers: [
      {
        answer:
          "dayandırma zamanı avtobusun son sürətinin sıfırdan fərqli olmasına",
        type: "true",
      },
      { answer: "avtobusun tam dayanmasına", type: "false" },
      { answer: "mexaniki üsulla avtobusun dayandırılmasına", type: "false" },
      {
        answer:
          "dayandırma anından bir neçə saniyə sonra avtobusun dayanmasına",
        type: "false",
      },
      {
        answer: "dayandırma zamanı avtobusun tədricən dayanmasına",
        type: "false",
      },
    ],
  },
  {
    id: 326,
    Question:
      "Sərnişin avtobuslarının yanacaq sərfinin hesablaması zamanı benzinin sıxlığını hansı ədədi qəbul etmək olar?",
    answers: [
      { answer: "0,73 kq/litr", type: "true" },
      { answer: "0,70 kq/litr", type: "false" },
      { answer: "0,68 kq/litr", type: "false" },
      { answer: "0,76 kq/litr", type: "false" },
      { answer: "0,96 kq/litr", type: "false" },
    ],
  },
  {
    id: 327,
    Question:
      "Dinamik xüsusiyyətlər avtobusun hansı xüsusiyyətlər qrupuna aiddir?",
    answers: [
      {
        answer: "avtobusun dartıcı-sürət və əylənc xüsusiyyətləri",
        type: "true",
      },
      { answer: "avtobusun idarəolunma xüsusiyyətləri", type: "false" },
      { answer: "avtobusun dəyanətlik xüsusiyyətləri", type: "false" },
      {
        answer: "avtobusun yanacaq qənaətliliyi xüsusiyyətləri",
        type: "false",
      },
      { answer: "avtobusun hərəkət səlistliyi xüsusiyyətləri", type: "false" },
    ],
  },
  {
    id: 328,
    Question:
      "Sınaq zamanı avtobusun magistral - təpəli yollarda yanacaq - sürət xarakteristikasının müəyyənləşdirilməsi hansı məqsəd üçün həyata keçirilir?",
    answers: [
      {
        answer: "avtobusun yanacaq qənaətliliyini qiymətləndirmək üçün",
        type: "true",
      },
      {
        answer: "avtobusun dəyanətliliyinin təyin olunması üçün",
        type: "false",
      },
      { answer: "avtobusun sürətinin müəyyən olunması üçün", type: "false" },
      {
        answer: "avtobusun tormozlanma xüsusiyyətinin təyin olunması üçün",
        type: "false",
      },
      {
        answer: "avtobusun işlətdiyi yanacağın növünü müəyyən etmək üçün",
        type: "false",
      },
    ],
  },
  {
    id: 329,
    Question:
      "Avtobusun əylənc intiqalının gecikmə vaxtı hansı göstəricidən asılıdır?",
    answers: [
      {
        answer:
          "avtobusun əylənc intiqalının növündən və onun konstruktiv xüsusiyyətlərindən",
        type: "true",
      },
      { answer: "avtobusun istifadə etdiyi yanacağın növündən", type: "false" },
      { answer: "avtobusun sərf etdiyi yanacağın miqdarından", type: "false" },
      { answer: "avtobusun təkərinin növü və vəziyyətindən", type: "false" },
      {
        answer:
          "avtobusun əylənc pedalının quruluşundan və materialının elastikliliyindən",
        type: "false",
      },
    ],
  },
  {
    id: 330,
    Question:
      "Sərnişin avtobusları üçün havanın müqavimət əmsalının qiyməti hansı intervalda qəbul edilir?",
    answers: [
      { answer: "0,25...0,4", type: "true" },
      { answer: "0,47...0,54", type: "false" },
      { answer: "0,14...0,23", type: "false" },
      { answer: "0,1...0,2", type: "false" },
      { answer: "0,53...0,58", type: "false" },
    ],
  },
  {
    "id": 330,
    "Question": "Sərnişin avtobusları üçün havanın müqavimət əmsalının qiyməti hansı intervalda qəbul edilir?",
    "answers": [
      { "answer": "0,25...0,4", "type": "true" },
      { "answer": "0,47...0,54", "type": "false" },
      { "answer": "0,14...0,23", "type": "false" },
      { "answer": "0,1...0,2", "type": "false" },
      { "answer": "0,53...0,58", "type": "false" }
    ]
  },
  {
    "id": 331,
    "Question": "Dizel mühərrikli avtobuslarda mühərrikin dövürlər sayına görə uyğunlaşma əmsalı hansı intervalda qəbul edilir?",
    "answers": [
      { "answer": "1,4...2", "type": "true" },
      { "answer": "0,6...1,2", "type": "false" },
      { "answer": "0,1...0,9", "type": "false" },
      { "answer": "2...2,8", "type": "false" },
      { "answer": "2,4...3,2", "type": "false" }
    ]
  },
  {
    "id": 332,
    "Question": "Normal reaksiyaların hansı əmsalı yolun normal reaksiyalarının hərəkət edən avtobusun oxlarına düşən çəkiyə nisbəti ilə təyin edilir?",
    "answers": [
      { "answer": "dinamik paylanma əmsalı", "type": "true" },
      { "answer": "momenta görə uyğunlaşma əmsalı", "type": "false" },
      { "answer": "diyirlənmədə müqavimət əmsalı", "type": "false" },
      { "answer": "uzununa qüvvə əmsalı", "type": "false" },
      { "answer": "fırlanma tezliyinə görə uyğunlaşma əmsalı", "type": "false" }
    ]
  },
  {
    "id": 333,
    "Question": "Hansı göstərici avtobusun dinamik xüsusiyyətlərinə aid edilir?",
    "answers": [
      { "answer": "dartıcı-sürət və tormoz", "type": "true" },
      { "answer": "dəyanətlik və idarəolunma", "type": "false" },
      { "answer": "keçicilik və yanacaq qənaətliliyi", "type": "false" },
      { "answer": "idarəolunma və hərəkət səlistliyi", "type": "false" },
      { "answer": "hərəkət səlistliyi və keçicilik", "type": "false" }
    ]
  },
  {
    "id": 334,
    "Question": "Nəqliyyat vasitələrinin sistemlərində yaranan hansı məxsusi rəqs tezliyi parsial tezlik adlanır?",
    "answers": [
      { "answer": "parsial rəqs", "type": "true" },
      { "answer": "dinamiki rəqs", "type": "false" },
      { "answer": "dövri rəqs", "type": "false" },
      { "answer": "mikro rəqs", "type": "false" },
      { "answer": "ilkin rəqs", "type": "false" }
    ]
  },
  {
    "id": 335,
    "Question": "İşıqlıq məsafəsi avtobusun ən aşağı nöqtəsi ilə hansı hissəsinə qədər olan məsafə adlanır?",
    "answers": [
      { "answer": "dayaq müstəvisi arasındakı", "type": "true" },
      { "answer": "sürətlər qutusu arasındakı", "type": "false" },
      { "answer": "təkərlərin oxlarına qədər olan məsafə", "type": "false" },
      { "answer": "avtobusun çərçivəsinə qədər olan məsafə", "type": "false" },
      { "answer": "qabaq və arxa işıqlandırıcılar arasındakı məsafə", "type": "false" }
    ]
  },
  {
    "id": 336,
    "Question": "İnter Rail sisteminə üzv ölkələrin dəmiryolu idarələri coğrafi zona üzrə qruplaşdırılır. İngiltərə zona üzrə hansı qrupa daxildir?",
    "answers": [
      { "answer": "zona üzrə A qrupuna", "type": "true" },
      { "answer": "zona üzrə C qrupuna", "type": "false" },
      { "answer": "zona üzrə D qrupuna", "type": "false" },
      { "answer": "zona üzrə F qrupuna", "type": "false" },
      { "answer": "zona üzrə E qrupuna", "type": "false" }
    ]
  },
  {
    "id": 337,
    "Question": "İnter Rail sisteminə üzv ölkələrin dəmiryolu idarələri coğrafi zona üzrə qruplaşdırılır. İspaniya zona üzrə hansı qrupa daxildir?",
    "answers": [
      { "answer": "zona üzrə F qrupuna", "type": "true" },
      { "answer": "zona üzrə B qrupuna", "type": "false" },
      { "answer": "zona üzrə D qrupuna", "type": "false" },
      { "answer": "zona üzrə H qrupuna", "type": "false" },
      { "answer": "zona üzrə G qrupuna", "type": "false" }
    ]
  },
  {
    "id": 338,
    "Question": "İnter Rail sisteminə üzv ölkələrin dəmiryolu idarələri coğrafi zona üzrə qruplaşdırılır. İsveç zona üzrə hansı qrupa daxildir?",
    "answers": [
      { "answer": "zona üzrə B qrupuna", "type": "true" },
      { "answer": "zona üzrə C qrupuna", "type": "false" },
      { "answer": "zona üzrə E qrupuna", "type": "false" },
      { "answer": "zona üzrə D qrupuna", "type": "false" },
      { "answer": "zona üzrə H qrupuna", "type": "false" }
    ]
  },
  {
    "id": 339,
    "Question": "İnter Rail sisteminə üzv ölkələrin dəmiryolu idarələri coğrafi zona üzrə qruplaşdırılır. Polşa zona üzrə hansı qrupa daxildir?",
    "answers": [
      { "answer": "zona üzrə D qrupuna", "type": "true" },
      { "answer": "zona üzrə B qrupuna", "type": "false" },
      { "answer": "zona üzrə A qrupuna", "type": "false" },
      { "answer": "zona üzrə H qrupuna", "type": "false" },
      { "answer": "zona üzrə E qrupuna", "type": "false" }
    ]
  },
  {
    "id": 340,
    "Question": "İnter Rail sisteminə üzv ölkələrin dəmiryolu idarələri coğrafi zona üzrə qruplaşdırılır. İtaliya zona üzrə hansı qrupa daxildir?",
    "answers": [
      { "answer": "zona üzrə G qrupuna", "type": "true" },
      { "answer": "zona üzrə H qrupuna", "type": "false" },
      { "answer": "zona üzrə D qrupuna", "type": "false" },
      { "answer": "zona üzrə A qrupuna", "type": "false" },
      { "answer": "zona üzrə E qrupuna", "type": "false" }
    ]
  },
  {
    "id": 341,
    "Question": "İnter Rail sisteminə üzv ölkələrin dəmiryolu idarələri coğrafi zona üzrə qruplaşdırılır. Fransa zona üzrə hansı qrupa daxildir?",
    "answers": [
      { "answer": "zona üzrə E qrupuna", "type": "true" },
      { "answer": "zona üzrə A qrupuna", "type": "false" },
      { "answer": "zona üzrə D qrupuna", "type": "false" },
      { "answer": "zona üzrə C qrupuna", "type": "false" },
      { "answer": "zona üzrə B qrupuna", "type": "false" }
    ]
  },
  {
    "id": 342,
    "Question": "İnter Rail sisteminə üzv ölkələrin dəmiryolu idarələri coğrafi zona üzrə qruplaşdırılır. Türkiyə zona üzrə hansı qrupa daxildir?",
    "answers": [
      { "answer": "zona üzrə G qrupuna", "type": "true" },
      { "answer": "zona üzrə B qrupuna", "type": "false" },
      { "answer": "zona üzrə H qrupuna", "type": "false" },
      { "answer": "zona üzrə A qrupuna", "type": "false" },
      { "answer": "zona üzrə E qrupuna", "type": "false" }
    ]
  },
  {
    "id": 343,
    "Question": "İnter Rail sisteminə üzv ölkələrin dəmiryolu idarələri coğrafi zona üzrə qruplaşdırılır. Almaniya zona üzrə hansı qrupa daxildir?",
    "answers": [
      { "answer": "zona üzrə C qrupuna", "type": "true" },
      { "answer": "zona üzrə B qrupuna", "type": "false" },
      { "answer": "zona üzrə D qrupuna", "type": "false" },
      { "answer": "zona üzrə H qrupuna", "type": "false" },
      { "answer": "zona üzrə A qrupuna", "type": "false" }
    ]
  },
  {
    "id": 344,
    "Question": "İnter Rail sisteminə üzv ölkələrin dəmiryolu idarələri coğrafi zona üzrə qruplaşdırılır. Portuqaliya zona üzrə hansı qrupa daxildir?",
    "answers": [
      { "answer": "zona üzrə F qrupuna", "type": "true" },
      { "answer": "zona üzrə A qrupuna", "type": "false" },
      { "answer": "zona üzrə C qrupuna", "type": "false" },
      { "answer": "zona üzrə B qrupuna", "type": "false" },
      { "answer": "zona üzrə E qrupuna", "type": "false" }
    ]
  },
  {
    "id": 345,
    "Question": "İnter Rail sisteminə üzv ölkələrin dəmiryolu idarələri coğrafi zona üzrə qruplaşdırılır. Avstriya zona üzrə hansı qrupa daxildir?",
    "answers": [
      { "answer": "zona üzrə C qrupuna", "type": "true" },
      { "answer": "zona üzrə B qrupuna", "type": "false" },
      { "answer": "zona üzrə D qrupuna", "type": "false" },
      { "answer": "zona üzrə F qrupuna", "type": "false" },
      { "answer": "zona üzrə H qrupuna", "type": "false" }
    ]
  },
  {
    "id": 346,
    "Question": "Sürücünün iştirakı olmadan xarici qüvvələrin təsiri altında olan avtobusun hərəkət istiqamətini saxlaya bilmək xüsusiyyəti necə adlanır?",
    "answers": [
      { "answer": "dəyanətlik", "type": "true" },
      { "answer": "etibarlılıq", "type": "false" },
      { "answer": "sərbəst hərəkət", "type": "false" },
      { "answer": "düzxətli hərəkət", "type": "false" },
      { "answer": "dövrüi hərəkət", "type": "false" }
    ]
  },
  {
    "id": 347,
    "Question": "Sınaq zamanı avtobusun hansı xüsusiyyətini qiymətləndirən zaman seçilmiş yolun maili sahəsinin uzunluğu 50 metrədən çox olmamalıdır?",
    "answers": [
      { "answer": "dartıcı-sürət xüsusiyyətlərini", "type": "true" },
      { "answer": "keçicilik xüsusiyyətlərini", "type": "false" },
      { "answer": "idarəolunma xüsusiyyətlərini", "type": "false" },
      { "answer": "dəyanətlik xüsusiyyətlərini", "type": "false" },
      { "answer": "hərəkət səlistliyi xüsusiyyətlərini", "type": "false" }
    ]
  },
  {
    "id": 348,
    "Question": "Sərnişin avtobusunun şininin deformasiyaya məruz qalması hansı təsirdən baş verir?",
    "answers": [
      { "answer": "təkərə düşən normal yükün təsirindən", "type": "true" },
      { "answer": "avtobusun yüksək sürətindən", "type": "false" },
      { "answer": "çevrəvi qüvvənin təsirindən", "type": "false" },
      { "answer": "avtobusun tormozlanmasından", "type": "false" },
      { "answer": "yol örtüyünün asfaltbeton olmasından", "type": "false" }
    ]
  },
  {
    "id": 349,
    "Question": "Avtobusun idarə olunan təkərlərin maksimal döndərilmə halında qabaq xarici təkərin izinə uyğun çevrənin radiusu necə adlanır?",
    "answers": [
      { "answer": "avtobusun minimal dönmə radiusu", "type": "true" },
      { "answer": "avtobusun maksimal dönmə radiusu", "type": "false" },
      { "answer": "avtobusun radial dönmə radiusu", "type": "false" },
      { "answer": "avtobusun mərkəzi dönmə radiusu", "type": "false" },
      { "answer": "avtobusun nisbi dönmə radiusu", "type": "false" }
    ]
  },
  {
    "id": 350,
    "Question": "Avtobusa təsir edən bütün qüvvələrin dayaq səthinə paralel müstəvi üzrə proyeksiyalarının cəmi hansı qüvvəyə bərabərdir?",
    "answers": [
      { "answer": "avtobusun ətalət qüvvəsinə", "type": "true" },
      { "answer": "avtobusun radial qüvvəyə", "type": "false" },
      { "answer": "avtobusun çevrəvi qüvvəyə", "type": "false" },
      { "answer": "avtobusun mərkəzdənqaçma qüvvəsinə", "type": "false" },
      { "answer": "havanın müqavimət qüvvəsi", "type": "false" }
    ]
  },
  {
  id: 351,
  Question: "351. Hansı variantda avtobusun yanacaq qənaətliliyini qiymətləndirmək üçün istifadə olunan göstəricilərdən biri göstərilmişdir?",
  answers: [
    { answer: "dövri hərəkətdə yanacaq xarakteristikası", type: "true" },
    { answer: "minimum sürətdə yanacaq xarakteristikası", type: "false" },
    { answer: "maksimum sürətdə yanacaq xarakteristikası", type: "false" },
    { answer: "10 km məsafəyə yanacaq sərfi", type: "false" },
    { answer: "20 km məsafəyə yanacaq sərfi", type: "false" },
  ],
},
{
  id: 352,
  Question: "352. Avtobusun təkərindən onun çərçivəsinə ötürülən qüvvə necə adlanır?",
  answers: [
    { answer: "dartıcı qüvvə", type: "true" },
    { answer: "ətalət qüvvəsi", type: "false" },
    { answer: "çevrəvi qüvvə", type: "false" },
    { answer: "normal qüvvə", type: "false" },
    { answer: "radial qüvvə", type: "false" },
  ],
},
{
  id: 353,
  Question: "353. Hansı qiymətlər intervalında dizel mühərrikləri üçün momentə görə uyğunlaşma əmsalı qəbul edilir?",
  answers: [
    { answer: "1,1...1,3", type: "true" },
    { answer: "0,1...0,14", type: "false" },
    { answer: "0,08...1", type: "false" },
    { answer: "2,4...2,8", type: "false" },
    { answer: "2,9...3,4", type: "false" },
  ],
},
{
  id: 354,
  Question: "354. Avtobusun maksimal sürəti yolun üfüqi hamar sahəsində neçə metr uzunluqlu ölçü sahəsini keçmə vaxtını ölçməklə əldə edilir?",
  answers: [
    { answer: "1000 m uzunluqlu ölçü sahəsini", type: "true" },
    { answer: "1200 m uzunluqlu ölçü sahəsini", type: "false" },
    { answer: "500 m uzunluqlu ölçü sahəsini", type: "false" },
    { answer: "300 m uzunluqlu ölçü sahəsini", type: "false" },
    { answer: "1800 m uzunluqlu ölçü sahəsini", type: "false" },
  ],
},
{
  id: 355,
  Question: "355. Avtobusun uzununa qüvvənin təsiri ilə diyirlənən təkərinə hərəkət istiqamətinin əksinə çevrəvi qüvvə təsir edərsə belə diyirlənmə rejimi necə adlanır?",
  answers: [
    { answer: "əylənc rejimi", type: "true" },
    { answer: "sürətlənmə rejimi", type: "false" },
    { answer: "dövrü hərəkət rejimi", type: "false" },
    { answer: "neytral hərəkət rejimi", type: "false" },
    { answer: "sərbəst rejim", type: "false" },
  ],
},
{
  id: 356,
  Question: "356. Sınaq zamanı avtobusun yanacaq qənaətliliyini qiymətləndirmək üçün istifadə olunan göstəricilərdən biri hansı variantda göstərilmişdir?",
  answers: [
    { answer: "dövri hərəkətdə yanacaq xarakteristikası", type: "true" },
    { answer: "yüksək temperatur şəraitində yanacaq xarakteristikası", type: "false" },
    { answer: "minimum sürətdə yanacaq xarakteristikası", type: "false" },
    { answer: "maksimum sürətdə yanacaq xarakteristikası", type: "false" },
    { answer: "quru torpaq yolda yanacaq xarakteristikası", type: "false" },
  ],
},
{
  id: 357,
  Question: "357. Sərnişin avtobuslarının mühərrikinin qərarlaşmış iş rejimində yanacağın yanması zamanı ayrılan ümumi enerjinin neçə faizi itir?",
  answers: [
    { answer: "50...55%-i", type: "true" },
    { answer: "40...45%-i", type: "false" },
    { answer: "30...35%-i", type: "false" },
    { answer: "60...75%-i", type: "false" },
    { answer: "70...90%-i", type: "false" },
  ],
},
{
  id: 358,
  Question: "358. Hər bir avtobus müxtəlif funksiyalı bir neçə tormoz sisteminə malik olur. Avtobusun malik olduğu müxtəlif funksiyalı tormoz sistemi hansı variantda düzgün göstərilib?\n1. işçi\n2. əsas\n3. dayanacaq\n4. əlavə\n5. ehtiyat\n6. sadə\n7. köməkçi\n8. mürəkkəb",
  answers: [
    { answer: "1; 3; 5; 7", type: "true" },
    { answer: "2; 4; 6; 8", type: "false" },
    { answer: "2; 3; 6; 7", type: "false" },
    { answer: "2; 4; 5; 8", type: "false" },
    { answer: "1; 4; 5; 8", type: "false" },
  ],
},
{
  id: 359,
  Question: "359. Avtobusun təkərinə düşən normal yükün təsirindən onun şini nə edir?",
  answers: [
    { answer: "deformasiya edir", type: "true" },
    { answer: "əyilir", type: "false" },
    { answer: "burulur", type: "false" },
    { answer: "irəliyə hərəkət edir", type: "false" },
    { answer: "diyirlənir", type: "false" },
  ],
},
{
  id: 360,
  Question: "360. Avtobusun istismarı prosesində yanacağın yanması zamanı ayrılan enerjinin neçə faizi köməkçi aqreqatların intiqalına, giriş-çıxış borularında və kapotaltı sahələrdə itkilərə sərf olunur?",
  answers: [
    { answer: "7...9%-i", type: "true" },
    { answer: "2,8....3,6%-i", type: "false" },
    { answer: "3...4,5%-i", type: "false" },
    { answer: "9,2...9,6%-i", type: "false" },
    { answer: "9,4...9,8%-i", type: "false" },
  ],
},
{
  id: 361,
  Question: "361. Sınaq zamanı avtobusun dartıcı-sürət və yanacaq qənaətliliyi xarakteristikaları əsas etibarı ilə hansı göstəricilərlə müəyyən olunur?",
  answers: [
    { answer: "mühərrikin növü və gücü ilə", type: "true" },
    { answer: "sürətlər qutusu ilə", type: "false" },
    { answer: "sukan trapesiyası ilə", type: "false" },
    { answer: "daxiliyanma mühərrikləri ilə", type: "false" },
    { answer: "dirsəkli valdakı burucu momentlə", type: "false" },
  ],
},
{
  id: 362,
  Question: "362. Avtobusun asqısı ilə ötürülən maksimal yükün statik yükə nisbəti necə adlanır?",
  answers: [
    { answer: "asqının dinamiklik əmsalı", type: "true" },
    { answer: "parsial rəqs sistemi", type: "false" },
    { answer: "asqının statik əyilməsi", type: "false" },
    { answer: "asqının deformasiyası", type: "false" },
    { answer: "asqının etibarlığı", type: "false" },
  ],
},
{
  id: 363,
  Question: "363. Avtobuslarında alçaq rəqs tezliyi hansı aralıqda dəyişir?",
  answers: [
    { answer: "1,5...2,5 Hs", type: "true" },
    { answer: "0,12...0,21 Hs", type: "false" },
    { answer: "0,5...0,9 Hs", type: "false" },
    { answer: "3,2...3,8 Hs", type: "false" },
    { answer: "2,6...2,9 Hs", type: "false" },
  ],
},
{
  id: 364,
  Question: "364. Müasir avtobuslarda əsasən daxiliyanma mühərriklərindən istifadə edilir. Bu avtobusun güc xüsusiyyətləri necə qiymətləndirilir?",
  answers: [
    { answer: "onun sürət xarakteristikaları ilə", type: "true" },
    { answer: "onun yanacaq qənaətliliyi xarakteristikaları ilə", type: "false" },
    { answer: "dirsəkli valdakı burucu momentin qiyməti ilə", type: "false" },
    { answer: "onun əylənc xüsusiyyəti ilə", type: "false" },
    { answer: "onun sukan trapesiyası ilə", type: "false" },
  ],
},
{
  id: 365,
  Question: "365. Avtobusların əylənc intiqalının işə düşmə vaxtı standartlarla reqlamentləşdirilir. Bu vaxt neçə saniyədən çox olmamalıdır?",
  answers: [
    { answer: "0,6 san-dən", type: "true" },
    { answer: "0,4 san-dən", type: "false" },
    { answer: "7 san-dən", type: "false" },
    { answer: "0,5 san-dən", type: "false" },
    { answer: "8 san-dən", type: "false" },
  ],
},
{
  id: 366,
  Question: "366. Mühərrikin maksimal effektiv stend gücünün avtobusun kütləsinə nisbəti necə adlanır?",
  answers: [
    { answer: "xüsusi güc", type: "true" },
    { answer: "maksimal güc", type: "false" },
    { answer: "minimal güc", type: "false" },
    { answer: "aktiv güc", type: "false" },
    { answer: "passiv güc", type: "false" },
  ],
},
{
  id: 367,
  Question: "367. Nisbi sönmə əmsalı \\( \\varphi_a = 1 \\) olarsa, avtobusun məxsusi rəqsləri hansı qiymətə bərabər olar?",
  answers: [
    { answer: "sıfıra", type: "true" },
    { answer: "yeddiyə", type: "false" },
    { answer: "ikiyə", type: "false" },
    { answer: "üçə", type: "false" },
    { answer: "birə", type: "false" },
  ],
},
{
  id: 368,
  Question: "368. Avtobus enişdə hərəkət etdikdə verilmiş hərəkət sürətini saxlamaq onun hansı xüsusiyyətinə aiddir?",
  answers: [
    { answer: "əylənc xüsusiyyətinə", type: "true" },
    { answer: "dartıcı-sürət xüsusiyyətinə", type: "false" },
    { answer: "etibarlıq xüsusiyyətinə", type: "false" },
    { answer: "funksional xüsusiyyəti", type: "false" },
    { answer: "idarəolunma xüsusiyyətinə", type: "false" },
  ],
},
{
  id: 369,
  Question: "369. Yüksək dağlıq şəraitdə işləyən avtobusda, havanın sıxlığının və uyğun olaraq mühərrikin doldurma əmsalının azalması avtobusun yanacaq sərfinə necə təsir edir?",
  answers: [
    { answer: "10...15% artır", type: "true" },
    { answer: "3...7% artır", type: "false" },
    { answer: "5...8% azalır", type: "false" },
    { answer: "21...26% azalır", type: "false" },
    { answer: "19...24% artır", type: "false" },
  ],
},
{
  id: 370,
  Question: "370. Avtobusun məxsusi rəqsləri sıfıra bərabər olan halda onun nisbi sönmə əmsalı hansı qiymətə bərabər olar?",
  answers: [
    { answer: "1", type: "true" },
    { answer: "0,8", type: "false" },
    { answer: "3,4", type: "false" },
    { answer: "2", type: "false" },
    { answer: "0,92", type: "false" },
  ],
},
{
  id: 371,
  Question: "371. Avtobusun hansı göstəricidən əylənc intiqalının gecikmə vaxtı asılıdır?",
  answers: [
    { answer: "əylənc mexanizmlərinin sayından", type: "true" },
    { answer: "avtomobilin təkərinin növü və vəziyyətindən", type: "false" },
    { answer: "dirsəkli valdakı burucu momentin qiymətindən", type: "false" },
    { answer: "daxiliyanma mühərriklərinin növündən", type: "false" },
    { answer: "sukan trapesiyasının vəziyyətindən", type: "false" },
  ],
},
{
  id: 372,
  Question: "372. Ağırlıq qüvvəsinin təsiri ilə avtobusun asqısının elastiki elementinin deformasiyası nəticəsində təkərlərin onun kuzasına (salonuna) nəzərən yerdəyişməsi necə adlanır?",
  answers: [
    { answer: "statik əyilmə", type: "true" },
    { answer: "deformasiya", type: "false" },
    { answer: "etibarlıq", type: "false" },
    { answer: "sürüşmə", type: "false" },
    { answer: "diyirlənmə", type: "false" },
  ],
},
{
  id: 373,
  Question: "373. Avtobusun hansı xüsusiyyətinə onun sürətini tam dayanma halına qədər tez azaltmaq və dayandırmaq aid edilir?",
  answers: [
    { answer: "əylənc xüsusiyyətinə", type: "true" },
    { answer: "etibarlıq xüsusiyyətinə", type: "false" },
    { answer: "dəyanətlilik xüsusiyyətinə", type: "false" },
    { answer: "funksional xüsusiyyətinə", type: "false" },
    { answer: "idarəolunma xüsusiyyətinə", type: "false" },
  ],
},
{
  id: 374,
  Question: "374. Rəqslər öz xarakterinə görə hansı növlərə bölünür?",
  answers: [
    { answer: "sərbəst və məcburi", type: "true" },
    { answer: "ilkin və son", type: "false" },
    { answer: "yerli və təcili", type: "false" },
    { answer: "maksimum və minimum", type: "false" },
    { answer: "düz və əks", type: "false" },
  ],
},
{
  id: 375,
  Question: "375. Rəqslər nəzəriyyəsinə görə hansı rəqslər mövcuddur?",
  answers: [
    { answer: "sönən və sönməyən", type: "true" },
    { answer: "sadə və mürəkkəb", type: "false" },
    { answer: "məcburi və dəyişən", type: "false" },
    { answer: "sabit və dövrü olaraq dəyişən", type: "false" },
    { answer: "parsial və aktiv", type: "false" },
  ],
},
{
  id: 376,
  Question: "376. Avtobusa təsadüfi qüvvələr təsir etdikdə onu yerində tərpənməz saxlamaq hansı xüsusiyyətinə aiddir?",
  answers: [
    { answer: "əylənc xüsusiyyətinə", type: "true" },
    { answer: "etibarlıq xüsusiyyətinə", type: "false" },
    { answer: "funksional xüsusiyyətinə", type: "false" },
    { answer: "təhlükəsizlik xüsusiyyətinə", type: "false" },
    { answer: "dəyanətlik xüsusiyyətinə", type: "false" },
  ],
},
{
  id: 377,
  Question: "377. Avtobuslarda hidravlik amortizatorlar üçün söndürücü elementin müqavimət qüvvəsi necə təyin edilir?",
  answers: [
    { answer: "Fa = - Ka z", type: "true" },
    { answer: "Fa = - Ka /2z", type: "false" },
    { answer: "Fa = - 2Ka /z", type: "false" },
    { answer: "Fa = - Ka - z", type: "false" },
    { answer: "Fa = - Ka +z", type: "false" },
  ],
},
{
  id: 378,
  Question: "378. Avtobuslarda asqının statik əyilməsi artarsa məxsusi rəqs tezliyi necə dəyişər?",
  answers: [
    { answer: "azalacaq", type: "true" },
    { answer: "artacaq", type: "false" },
    { answer: "maksimum qiymət alar", type: "false" },
    { answer: "minimum qiymət alar", type: "false" },
    { answer: "sönər", type: "false" },
  ],
},
{
  id: 379,
  Question: "379. Avtobusun kuzası (salonu) və onun oxu neçə sərbəstlik dərəcəsinə malikdir?",
  answers: [
    { answer: "6", type: "true" },
    { answer: "10", type: "false" },
    { answer: "12", type: "false" },
    { answer: "8", type: "false" },
    { answer: "7", type: "false" },
  ],
},
{
  id: 380,
  Question: "380. Avtobusun malik olduğu məxsusi rəqs tezliyindən neçəsi qeyri-ressoraltı kütlələrin ressor və şinlər üzərindəki rəqs tezliyidir?",
  answers: [
    { answer: "2", type: "true" },
    { answer: "6", type: "false" },
    { answer: "4", type: "false" },
    { answer: "3", type: "false" },
    { answer: "7", type: "false" },
  ],
},
{
  id: 381,
  Question: "381. Avtobusun əylənc intiqalının gecikmə vaxtı hansı göstəricidən asılıdır?",
  answers: [
    { answer: "texniki vəziyyətindən və boruların uzunluğundan", type: "true" },
    { answer: "avtomobilin təkərinin növü və vəziyyətindən", type: "false" },
    { answer: "sükan trapesiyasından", type: "false" },
    { answer: "asqıların materialının növündən", type: "false" },
    { answer: "yanacağın keyfiyyətindən", type: "false" },
  ],
},
{
  id: 382,
  Question: "382. Sürətin dəyişməsi ilə avtobusun trayektoriya əyriliyini dəyişmə qabiliyyəti necə adlanır?",
  answers: [
    { answer: "statik dönmə qabiliyyəti", type: "true" },
    { answer: "kinematik dönmə radiusu", type: "false" },
    { answer: "dönmə radiusu", type: "false" },
    { answer: "nisbi dönmə qabiliyyəti", type: "false" },
    { answer: "məcburi dönmə qabiliyyəti", type: "false" },
  ],
},
{
  id: 383,
  Question: "383. Avtobusun kuzasının (salonunun) rəqsləri neçə mürəkkəb alçaq tezlikli və yüksək tezlikli harmonik rəqsdən ibarətdir?",
  answers: [
    { answer: "2", type: "true" },
    { answer: "4", type: "false" },
    { answer: "5", type: "false" },
    { answer: "7", type: "false" },
    { answer: "9", type: "false" },
  ],
},
{
  id: 384,
  Question: "384. Avtobusun kuzasının (salonunun) rəqsləri hansı mürəkkəb harmonik rəqslərdən ibarətdir?",
  answers: [
    { answer: "alçaq tezlikli və yüksək tezlikli", type: "true" },
    { answer: "parsial rəqsdən", type: "false" },
    { answer: "məxsusi rəqs tezliyindən", type: "false" },
    { answer: "sərbəst və məcburi rəqs sistemindən", type: "false" },
    { answer: "dövrü və sönən rəqs sistemindən", type: "false" },
  ],
},
{
  id: 385,
  Question: "385. Sərnişin avtobusu neçə məxsusi rəqs tezliyinə malikdir?",
  answers: [
    { answer: "4", type: "true" },
    { answer: "5", type: "false" },
    { answer: "8", type: "false" },
    { answer: "12", type: "false" },
    { answer: "10", type: "false" },
  ],
},
{
  id: 386,
  Question: "386. Sərnişin avtobusları üçün nisbi sönmə əmsalının optimal qiyməti \\( \\varphi_a = 0,3 \\) olduqda bir period kənarlaşma zamanı rəqslər neçə dəfə azalır?",
  answers: [
    { answer: "8", type: "true" },
    { answer: "9", type: "false" },
    { answer: "14", type: "false" },
    { answer: "12", type: "false" },
    { answer: "10", type: "false" },
  ],
},
{
  id: 387,
  Question: "387. Sərnişin avtobusunun malik olduğu məxsusi rəqs tezliyindən neçəsi kuzasının (salonunun) ressorlar üzərində rəqs tezliyidir?",
  answers: [
    { answer: "2", type: "true" },
    { answer: "3", type: "false" },
    { answer: "5", type: "false" },
    { answer: "7", type: "false" },
    { answer: "10", type: "false" },
  ],
},
{
  id: 388,
  Question: "388. Xidmətə həmçinin onun keyfiyyətini qiymətləndirmə üsullarına aid tələbləri əks etdirən sənəd necə adlanır?",
  answers: [
    { answer: "normativ sənəd", type: "true" },
    { answer: "akt", type: "false" },
    { answer: "standart", type: "false" },
    { answer: "lisenziya", type: "false" },
    { answer: "qaimə", type: "false" },
  ],
},
{
  id: 389,
  Question: "389. Hansı variantda nəqliyyat ekspedisiya xidməti müəssisəsi öz üzərinə götürdüyü şərtlərdən biri göstərilmişdir?",
  answers: [
    { answer: "sərnişinlərin (sahibkarların) qiymətli yüklərinə yolda nəzarət etmək", type: "true" },
    { answer: "sərnişinlərin yükünün standarta uyğunluğu barədə yük sahibinə məlumat vermək", type: "false" },
    { answer: "sərnişinlərin yükünün sertifikatlaşdırıldığı barədə yük sahibinə məlumat vermək", type: "false" },
    { answer: "istehsal müəssisəsinin akkreditasiya olunması barədə məlumat vermək", type: "false" },
    { answer: "qiymətli yüklərin istehsal tarixi barədə məlumat vermək", type: "false" },
  ],
},
{
  id: 390,
  Question: "390. Hava nəqliyyatında istifadə edilən güzəştli tariflərin neçə növü daha çox tətbiq edilir?",
  answers: [
    { answer: "üç növü", type: "true" },
    { answer: "bir növü", type: "false" },
    { answer: "iki növü", type: "false" },
    { answer: "altı növü", type: "false" },
    { answer: "yeddi növü", type: "false" },
  ],
},
{
  id: 391,
  Question: "391. Avtomobil nəqliyyatı ittifaqı nə vaxt beynəlxalq səviyyədə yaradılmışdır?",
  answers: [
    { answer: "1948-ci ilin mart ayında", type: "true" },
    { answer: "1978-ci ilin mart ayında", type: "false" },
    { answer: "1982-ci ilin may ayında", type: "false" },
    { answer: "1942-ci ilin dekabr ayında", type: "false" },
    { answer: "1946-cı ilin mart ayında", type: "false" },
  ],
},
{
  id: 392,
  Question: "392. Əsas beynəlxalq təşkilat hava nəqliyyatı üzrə hansıdır?",
  answers: [
    { answer: "beynəlxalq mülki aviasiya təşkilatı", type: "true" },
    { answer: "avropa hava nəqliyyatı assosiasiyası", type: "false" },
    { answer: "ölkə daxili mülki aviasiya təşkilatı", type: "false" },
    { answer: "şəhərlər arası mülki aviasiya təşkilatı", type: "false" },
    { answer: "asiya hava nəqliyyatı assosiasiyası", type: "false" },
  ],
},
{
  id: 393,
  Question: "393. Neçənci ildə beynəlxalq mülki aviasiya təşkilatı yaranmışdır?",
  answers: [
    { answer: "1947-ci ildə", type: "true" },
    { answer: "1985-ci ildə", type: "false" },
    { answer: "1978-ci ildə", type: "false" },
    { answer: "1946-cı ildə", type: "false" },
    { answer: "1942-ci ildə", type: "false" },
  ],
},
{
  id: 394,
  Question: "394. Digər beynəlxalq təşkilat 'Beynəlxalq mülki aviasiya təşkilatı'ndan sonra hansı hesab edilir?",
  answers: [
    { answer: "beynəlxalq hava nəqliyyatı assosiasiyası", type: "true" },
    { answer: "avropa hava nəqliyyatı assosiasiyası", type: "false" },
    { answer: "asiya hava nəqliyyatı assosiasiyası", type: "false" },
    { answer: "ölkə daxili mülki aviasiya təşkilatı", type: "false" },
    { answer: "afrika hava nəqliyyatı assosiasiyası", type: "false" },
  ],
},
{
  id: 395,
  Question: "395. Beynəlxalq hava nəqliyyatı assosiasiyası necə təşkilatdır?",
  answers: [
    { answer: "qeyri-dövlət təşkilatı", type: "true" },
    { answer: "dövlət təşkilatı", type: "false" },
    { answer: "həmkarlar ittifaqının nəzdində dövlət təşkilatı", type: "false" },
    { answer: "nəqliyyat nazirliyinin nəzdində dövlət təşkilatı", type: "false" },
    { answer: "akkreditləşdirmə üzrə orqanın nəzdində dövlət təşkilatı", type: "false" },
  ],
},
{
  id: 396,
  Question: "396. Su nəqliyyatında əsas beynəlxalq təşkilat hansıdır?",
  answers: [
    { answer: "Beynəlxalq su nəqliyyatı təşkilatı", type: "true" },
    { answer: "Avropa su nəqliyyatı təşkilatı", type: "false" },
    { answer: "Afrika su nəqliyyatı təşkilatı", type: "false" },
    { answer: "Asiya su nəqliyyatı təşkilatı", type: "false" },
    { answer: "Amerika su nəqliyyatı təşkilatı", type: "false" },
  ],
},
{
  id: 397,
  Question: "397. Beynəlxalq dəniz təşkilatı neçənci ildə yaradılmışdır?",
  answers: [
    { answer: "1958-ci ildə", type: "true" },
    { answer: "1982-ci ildə", type: "false" },
    { answer: "1985-ci ildə", type: "false" },
    { answer: "1957-ci ildə", type: "false" },
    { answer: "152-ci ildə", type: "false" },
  ],
},
{
  id: 398,
  Question: "398. Beynəlxalq dəniz təşkilatı harada yerləşir?",
  answers: [
    { answer: "Londonda", type: "true" },
    { answer: "Parisdə", type: "false" },
    { answer: "Romada", type: "false" },
    { answer: "Bakıda", type: "false" },
    { answer: "Berlində", type: "false" },
  ],
},
{
  id: 399,
  Question: "399. Azərbaycan beynəlxalq dəniz təşkilatının neçənci ildən üzvüdür?",
  answers: [
    { answer: "1995-ci ildən", type: "true" },
    { answer: "1998-ci ildən", type: "false" },
    { answer: "2008-ci ildən", type: "false" },
    { answer: "2005-ci ildən", type: "false" },
    { answer: "2002-ci ildən", type: "false" },
  ],
},
{
  id: 400,
  Question: "400. Aşağıdakı müqavilələrdən və yaxud konvensiyalardan hansı dəniz nəqliyyatında hazırda qüvvədədir?",
  answers: [
    { answer: "dəniz hüquq üzrə BMT-nin 1982-ci il konvensiyası", type: "true" },
    { answer: "beynəlxalq sərnişin daşınmaları haqqında 1984-cü il konvensiyası", type: "false" },
    { answer: "beynəlxalq yük daşınmaları haqqında 1988-ci il konvensiyası", type: "false" },
    { answer: "beynəlxalq yük daşınmaları haqqında 1978-ci il konvensiyası", type: "false" },
    { answer: "beynəlxalq sərnişin daşınmaları haqqında 1981-ci il konvensiyası", type: "false" },
  ],
},
{
  id: 401,
  Question: "401. Daşınma ilə bağlı yaranan nəqliyyat iqtisadi münasibətlərin hüquqi forması necə adlanır?",
  answers: [
    { answer: "nəqliyyat müqaviləsi", type: "true" },
    { answer: "iqtisadi səmərə", type: "false" },
    { answer: "nəqliyyat sahibi", type: "false" },
    { answer: "məhsulun satışı", type: "false" },
    { answer: "ticarət bazası", type: "false" },
  ],
},
{
  id: 402,
  Question: "402. Nəqliyyat müqavilələri əsasında yaranan mülki hüquqi münasibətlər necə adlanır?",
  answers: [
    { answer: "nəqliyyat öhdəlikləri", type: "true" },
    { answer: "nəqliyyatın növünün seçilməsi", type: "false" },
    { answer: "nəqliyyatın hüququ", type: "false" },
    { answer: "mülki münasibət", type: "false" },
    { answer: "hüquqi münasibətlər", type: "false" },
  ],
},
{
  id: 403,
  Question: "403. Nəqliyyat müqaviləsinin bağlanmasında neçə tərəf iştirak edir?",
  answers: [
    { answer: "2", type: "true" },
    { answer: "3", type: "false" },
    { answer: "5", type: "false" },
    { answer: "4", type: "false" },
    { answer: "8", type: "false" },
  ],
},
{
  id: 404,
  Question: "404. Nəqliyyat müqaviləsinə görə daşıyıcı funksiyasını kimlər icra edə bilərlər?",
  answers: [
    { answer: "hüquqi şəxslər və fərdi sahibkar", type: "true" },
    { answer: "istirahət mərkəzinin işçiləri", type: "false" },
    { answer: "istirahət mərkəzinə gələnlər", type: "false" },
    { answer: "istirahət mərkəzinin sahibi", type: "false" },
    { answer: "sərnişinlər", type: "false" },
  ],
},
{
  id: 405,
  Question: "405. Aşağıdakı sıraların hansında nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəriciləri göstərilmişdir?\n1. nəqliyyat vasitəsinin təmirə yararlığı\n2. nəqliyyat vasitəsinin rəngi\n3. nəqliyyat vasitəsinin etibarlığı və uzunömürlülüyü\n4. nəqliyyat vasitəsinin uzunluğu\n5. imtinasızlığı və təmirə yararlılığı\n6. nəqliyyat vasitələrinin estetik görünüşü",
  answers: [
    { answer: "1; 3; 5", type: "true" },
    { answer: "2; 4; 5", type: "false" },
    { answer: "1; 2; 6", type: "false" },
    { answer: "2; 4; 6", type: "false" },
    { answer: "3; 4; 6", type: "false" },
  ],
},
{
  id: 406,
  Question: "406. Sərnişinlərin istirahət yerlərinə gəlmələrinin təşkili haqqında müqavilə hansı nəqliyyat növünün sahibləri ilə bağlana bilər?",
  answers: [
    { answer: "nəqliyyatın bütün növlərinin sahibləri ilə", type: "true" },
    { answer: "yalnız çay nəqliyyatı sahibləri ilə", type: "false" },
    { answer: "yalnız gəmi sahibləri ilə", type: "false" },
    { answer: "yalnız dəmir yolu nəqliyyatı sahibləri ilə", type: "false" },
    { answer: "yalnız hərbi nəqliyyat vasitələrinin sahibləri ilə", type: "false" },
  ],
},
{
  id: 407,
  Question: "407. Hava nəqliyyatı sahəsində daşımaların təşkili haqqında müqavilə hansı müqavilə şəklində qəbul olunur?",
  answers: [
    { answer: "təşkilati müqavilə", type: "true" },
    { answer: "fərdi müqavilə", type: "false" },
    { answer: "lisenziya müqaviləsi", type: "false" },
    { answer: "gömrük müqaviləsi", type: "false" },
    { answer: "ticarət müqaviləsi", type: "false" },
  ],
},
{
  id: 408,
  Question: "408. Azərbaycan Respublikasının hava nəqliyyatı haqqında qanunda xüsusi müqavilənin bağlanması üçün neçə şərt göstərilmişdir?",
  answers: [
    { answer: "2", type: "true" },
    { answer: "4", type: "false" },
    { answer: "3", type: "false" },
    { answer: "6", type: "false" },
    { answer: "8", type: "false" },
  ],
},
{
  id: 409,
  Question: "409. Avtobusun dinamikliyi əsasən hansı göstəricilərlə qiymətləndirilir?",
  answers: [
    { answer: "avtobusun texniki və istismar sürətləri ilə", type: "true" },
    { answer: "avtobusun dəyanətlilik xüsusiyyəti ilə", type: "false" },
    { answer: "avtobusun etibarlılıq xüsusiyyəti ilə", type: "false" },
    { answer: "avtobusun keçicilik xüsusiyyəti ilə", type: "false" },
    { answer: "avtobusun işləmə qabiliyyəti ilə", type: "false" },
  ],
},
{
  id: 410,
  Question: "410. Aşağıda göstərilmiş variantların hansını yanacaq sərfinin hesablaması zamanı benzinin sıxlığı qəbul etmək olar?",
  answers: [
    { answer: "0,73 kq/litr", type: "true" },
    { answer: "0,87 kq/litr", type: "false" },
    { answer: "0,69 kq/litr", type: "false" },
    { answer: "0,83 kq/litr", type: "false" },
    { answer: "0,71 kq/litr", type: "false" },
  ],
},
{
  id: 411,
  Question: "411. Avtomobil nəqliyyatı sahəsində daşımanın təşkili haqqında müqavilə necə adlanır?",
  answers: [
    { answer: "illik", type: "true" },
    { answer: "aylıq", type: "false" },
    { answer: "müvəqqəti", type: "false" },
    { answer: "daimi", type: "false" },
    { answer: "mövsümü", type: "false" },
  ],
},
{
  id: 412,
  Question: "412. Daxili su nəqliyyatı sahəsində daşımanın təşkili haqqında bağlanmış müqavilə necə adlanır?",
  answers: [
    { answer: "naviqasiya müqaviləsi", type: "true" },
    { answer: "fərdi müqavilə", type: "false" },
    { answer: "lisenziya müqaviləsi", type: "false" },
    { answer: "gömrük müqaviləsi", type: "false" },
    { answer: "ticarət müqaviləsi", type: "false" },
  ],
},
{
  id: 413,
  Question: "413. Nəqliyyat vasitələrinin hansı keyfiyyət göstəricisinə zərərli hissəciklərin, qazların və şüalanmanın ətraf mühitə normadan artıq qatılıqda atılmasının müəyyənləşdirilməsi aiddir?",
  answers: [
    { answer: "ekoloji", type: "true" },
    { answer: "standartlaşdırma", type: "false" },
    { answer: "təhlükəsizlik", type: "false" },
    { answer: "estetik", type: "false" },
    { answer: "təyinat", type: "false" },
  ],
},
{
  id: 414,
  Question: "414. Sadə yazılı formada olan daşıma müqaviləsi hansı sənəddir?",
  answers: [
    { answer: "daşıma sənədi", type: "true" },
    { answer: "istirahət mərkəzinin sənədi", type: "false" },
    { answer: "normativ sənəd", type: "false" },
    { answer: "lisenziya müqaviləsi", type: "false" },
    { answer: "gömrük müqaviləsi", type: "false" },
  ],
},
{
  id: 415,
  Question: "415. Sürücünün iştirakı olmadan xarici qüvvələrin təsiri altında olan avtomobilin hərəkət istiqamətini saxlaya bilmək xüsusiyyəti necə adlanır?",
  answers: [
    { answer: "dəyanətlik", type: "true" },
    { answer: "etibarlılıq", type: "false" },
    { answer: "sərbəst hərəkət", type: "false" },
    { answer: "düzxətli hərəkət", type: "false" },
    { answer: "dövrü hərəkət", type: "false" },
  ],
},
{
  id: 416,
  Question: "416. Avtomobilin sınağı zamanı onun maksimal sürəti yolun üfüqi hamar sahəsində neçə metr uzunluqlu ölçü sahəsini keçmə vaxtını ölçməklə əldə edilir?",
  answers: [
    { answer: "1000 m uzunluqlu ölçü sahəsini", type: "true" },
    { answer: "1800 m uzunluqlu ölçü sahəsini", type: "false" },
    { answer: "500 m uzunluqlu ölçü sahəsini", type: "false" },
    { answer: "1200 m uzunluqlu ölçü sahəsini", type: "false" },
    { answer: "200 m uzunluqlu ölçü sahəsini", type: "false" },
  ],
},
{
  id: 417,
  Question: "417. Aşağıda göstərilmiş variantların birində nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəricisi göstərilmişdir? Bu hansı variantdır?",
  answers: [
    { answer: "nəqliyyat vasitəsinin yanacaq qənaətliliyi", type: "true" },
    { answer: "nəqliyyat vasitəsinin minimum sürəti", type: "false" },
    { answer: "nəqliyyat vasitəsinin minimum yük götürmə qabiliyyəti", type: "false" },
    { answer: "nəqliyyat vasitəsinin eni və uzunluğu", type: "false" },
    { answer: "nəqliyyat vasitələrinin estetik görünüşü", type: "false" },
  ],
},
{
  id: 418,
  Question: "418. Sərnişin avtobuslarının alçaq rəqs tezliyi hansı intervalda dəyişir?",
  answers: [
    { answer: "1,5...2,5 Hs", type: "true" },
    { answer: "1,15...1,45 Hs", type: "false" },
    { answer: "2,6...3,5 Hs", type: "false" },
    { answer: "0,5....1,2 Hs", type: "false" },
    { answer: "2,5....3 Hs", type: "false" },
  ],
},
{
  id: 419,
  Question: "419. Tə'yinatına görə avtomobilin müəyyən edilmiş funksiyaları yerinə yetirmək imkanı onun hansı xüsusiyyəti adlanır?",
  answers: [
    { answer: "funksional xüsusiyyəti", type: "true" },
    { answer: "etibarlıq xüsusiyyəti", type: "false" },
    { answer: "aqreqatlaşdırma xüsusiyyəti", type: "false" },
    { answer: "unifikasiya xüsusiyyəti", type: "false" },
    { answer: "təhlükəsizlik xüsusiyyəti", type: "false" },
  ],
},
{
  id: 420,
  Question: "420. Nəqliyyat vasitələrinin hansı keyfiyyət göstəricisinə ətraf mühitə atılan zərərli qarışığın miqdarının təyin olunması aiddir?",
  answers: [
    { answer: "ekoloji", type: "true" },
    { answer: "erqonomik", type: "false" },
    { answer: "təhlükəsizlik", type: "false" },
    { answer: "standartlaşdırma", type: "false" },
    { answer: "sertifikatlaşdırma", type: "false" },
  ],
},
{
  id: 421,
  Question: "421. Aşağıdakı variantların hansında nəqliyyat vasitələrinin istismarı üçün keyfiyyət göstəricisi göstərilmişdir?",
  answers: [
    { answer: "nəqliyyat vasitəsinin təmirə yararlığı", type: "true" },
    { answer: "nəqliyyat vasitəsinin rəngi", type: "false" },
    { answer: "nəqliyyat vasitəsinin uzunluğu", type: "false" },
    { answer: "nəqliyyat vasitəsinin eni", type: "false" },
    { answer: "nəqliyyat vasitələrinin estetik görünüşü", type: "false" },
  ],
},
{
  id: 422,
  Question: "422. Nəqliyyat prosesi zamanı işçi personalın və sərnişinlərin təhlükəsizliyini təmin edən xüsusiyyətin xarakterizə edilməsi nəqliyyatın hansı keyfiyyət göstəricisinə aiddir?",
  answers: [
    { answer: "təhlükəsizlik", type: "true" },
    { answer: "etibarlılıq", type: "false" },
    { answer: "təyinat", type: "false" },
    { answer: "nəqletməyə yararlılıq", type: "false" },
    { answer: "istismar", type: "false" },
  ],
},
{
  id: 423,
  Question: "423. Sərnişin nəqliyyat vasitəsinin öz funksiyasını minimum yanacaq sərfi ilə yerinə yetirmə qabiliyyəti necə adlanır?",
  answers: [
    { answer: "yanacaq qənaətliliyi", type: "true" },
    { answer: "maksimum yanacaq sərfiyyatı", type: "false" },
    { answer: "etibarlılıq", type: "false" },
    { answer: "nəqletməyə yararlılıq", type: "false" },
    { answer: "təhlükəsizlik", type: "false" },
  ],
},
{
  id: 424,
  Question: "424. Göstərilmiş variantların hansında sərnişin nəqliyyat vasitəsinin istismarı üçün keyfiyyət göstəricisi göstərilmişdir?",
  answers: [
    { answer: "nəqliyyat vasitəsinin sərnişin tutumu", type: "true" },
    { answer: "nəqliyyat vasitəsinin minimum sürəti", type: "false" },
    { answer: "nəqliyyat vasitəsinin uzunluğu", type: "false" },
    { answer: "nəqliyyat vasitəsinin hündürlüyü", type: "false" },
    { answer: "nəqliyyat vasitələrinin estetik görünüşü", type: "false" },
  ],
},
{
  id: 425,
  Question: "425. Aşağıda göstərilmiş hansı göstərici ilə avtomobilin yanacaq qənaətliliyi qiymətləndirilir?",
  answers: [
    { answer: "xüsusi yanacaq sərfi ilə", type: "true" },
    { answer: "yanacağın keyfiyyəti ilə", type: "false" },
    { answer: "yanacağın növü ilə", type: "false" },
    { answer: "yanacağın maksimum miqdarı ilə", type: "false" },
    { answer: "nəqliyyatın növü ilə", type: "false" },
  ],
},
{
  id: 426,
  Question: "426. Dəniz nəqliyyatı vasitəsinin minimum vaxtda nəzərdə tutulmuş işi yerinə yetirmə üzrə qabiliyyəti necə adlanır?",
  answers: [
    { answer: "dinamiklik", type: "true" },
    { answer: "etibarlılıq", type: "false" },
    { answer: "manevrlilik", type: "false" },
    { answer: "səmərəlilik", type: "false" },
    { answer: "akkreditləşdirmə", type: "false" },
  ],
},
{
  id: 427,
  Question: "427. Sərnişin nəqliyyatı vasitəsinin minimum vaxtda yerinə yetirmə üzrə iş qabiliyyəti necə adlanır?",
  answers: [
    { answer: "dinamiklik", type: "true" },
    { answer: "dəyanətlilik", type: "false" },
    { answer: "etibarlılıq", type: "false" },
    { answer: "keçicilik", type: "false" },
    { answer: "işləmə qabiliyyəti", type: "false" },
  ],
},
{
  id: 428,
  Question: "428. Sərnişin avtobusunun minimum vaxtda yerinə yetirmə üzrə iş qabiliyyəti necə adlanır?",
  answers: [
    { answer: "dinamiklik", type: "true" },
    { answer: "manevrlilik", type: "false" },
    { answer: "etibarlılıq", type: "false" },
    { answer: "uzunömürlülük", type: "false" },
    { answer: "səmərəlilik", type: "false" },
  ],
},
{
  id: 429,
  Question: "429. Sərnişin təyyarəsinin minimum vaxtda yerinə yetirmə üzrə iş qabiliyyəti necə adlanır?",
  answers: [
    { answer: "dinamiklik", type: "true" },
    { answer: "işgüzarlıq", type: "false" },
    { answer: "etibarlılıq", type: "false" },
    { answer: "sınaq", type: "false" },
    { answer: "keyfiyyət", type: "false" },
  ],
},
{
  id: 430,
  Question: "430. Dəmiryol nəqliyyatının minimum vaxtda yerinə yetirmə üzrə iş qabiliyyəti necə adlanır?",
  answers: [
    { answer: "dinamiklik", type: "true" },
    { answer: "dəyanətlilik", type: "false" },
    { answer: "səmərəlilik", type: "false" },
    { answer: "keçicilik", type: "false" },
    { answer: "keyfiyyət", type: "false" },
  ],
},
{
  id: 431,
  Question: "431. Çay nəqliyyatı vasitəsinin minimum vaxtda nəzərdə tutulmuş işi yerinə yetirmə üzrə qabiliyyəti necə adlanır?",
  answers: [
    { answer: "dinamiklik", type: "true" },
    { answer: "etibarlılıq", type: "false" },
    { answer: "keçicilik", type: "false" },
    { answer: "səmərəlilik", type: "false" },
    { answer: "yararlılıq", type: "false" },
  ],
},
{
  id: 432,
  Question: "432. Ölkə daxili su nəqliyyatı vasitəsi ilə daşımanın təşkili haqqında bağlanmış müqavilə necə adlanır?",
  answers: [
    { answer: "naviqasiya müqaviləsi", type: "true" },
    { answer: "su nəqliyyatı müqaviləsi", type: "false" },
    { answer: "lisenziya müqaviləsi", type: "false" },
    { answer: "gömrük müqaviləsi", type: "false" },
    { answer: "ticarət müqaviləsi", type: "false" },
  ],
},
{
  id: 433,
  Question: "433. Avtomobil nəqliyyatı ilə istirahət yerlərinə sərnişinlərin gəlməsinə xidmət göstərən zaman ətraf mühitin ekoloji təhlükəsizliyinin təmin edilməsi hansı keyfiyyət göstəricisinə aiddir?",
  answers: [
    { answer: "ekaloji", type: "true" },
    { answer: "etibarlılıq", type: "false" },
    { answer: "dayanıqlılıq", type: "false" },
    { answer: "nəqletməyə yararlılıq", type: "false" },
    { answer: "istismar", type: "false" },
  ],
},
{
  id: 434,
  Question: "434. Hansı müqavilə kimi hava nəqliyyatı sahəsində daşımaların təşkili haqqında müqavilə qəbul olunur?",
  answers: [
    { answer: "təşkilati müqavilə", type: "true" },
    { answer: "məcburi müqavilə", type: "false" },
    { answer: "könüllü müqavilə", type: "false" },
    { answer: "ümumi müqavilə", type: "false" },
    { answer: "qarışıq müqavilə", type: "false" },
  ],
},
{
  id: 435,
  Question: "435. Coğrafi zona üzrə inter Rail sisteminə üzv olan ölkələrin dəmiryolu idarələrinin A qrupuna daxil olan ölkələri seçib, düzgün variantı müəyyən edin?\n1.İngiltərə 2.Polşa 3.Cənubi İrlandiya\n4.Almaniya 5.Türkiyə 6.Şimali İrlandiya",
  answers: [
    { answer: "1; 3; 6", type: "true" },
    { answer: "1; 2; 4", type: "false" },
    { answer: "2; 3; 6", type: "false" },
    { answer: "2; 4; 5", type: "false" },
    { answer: "2; 5; 6", type: "false" },
  ],
},
{
  id: 436,
  Question: "436. Coğrafi zona üzrə inter Rail sisteminə üzv olan ölkələrin dəmiryolu idarələrinin B qrupuna daxil olan ölkələri seçib, düzgün variantı müəyyən edin?\n1. İsveç 2. Norveç 3. İngiltərə 4. Polşa 5. Finlandiya 6. Almaniya",
  answers: [
    { answer: "1; 2; 5", type: "true" },
    { answer: "1; 2; 6", type: "false" },
    { answer: "2; 3; 4", type: "false" },
    { answer: "2; 4; 6", type: "false" },
    { answer: "1; 4; 6", type: "false" },
  ],
},
{
  id: 437,
  Question: "437. Coğrafi zona üzrə inter Rail sisteminə üzv olan ölkələrin dəmiryolu idarələrinin C qrupuna daxil olan ölkələri seçib, düzgün variantı müəyyən edin?\n1. Danimarka 2. Çexiya 3. Almaniya 4. İsveçrə\n5. Rumıniya 6. Yunanıstan 7. Avstriya",
  answers: [
    { answer: "1; 3; 4; 7", type: "true" },
    { answer: "1; 2; 3; 6", type: "false" },
    { answer: "2; 3; 6; 7", type: "false" },
    { answer: "2; 4; 5; 7", type: "false" },
    { answer: "1; 2; 5; 6", type: "false" },
  ],
},
{
  id: 438,
  Question: "438. Coğrafi zona üzrə inter Rail sisteminə üzv olan ölkələrin dəmiryolu idarələrinin D qrupuna daxil olan ölkələri seçib, düzgün variantı müəyyən edin?\n1. Polşa 2. İngiltərə 3. Çexiya 4. Türkiyə 5. Slovakiya 6. Macarıstan 7. Xorvatiya",
  answers: [
    { answer: "1; 3; 5; 6; 7", type: "true" },
    { answer: "1; 2; 4; 5; 6", type: "false" },
    { answer: "2; 3; 4; 6; 7", type: "false" },
    { answer: "2; 4; 5; 6", type: "false" },
    { answer: "2; 4; 6; 7", type: "false" },
  ],
},
{
  id: 439,
  Question: "439. Sərnişin avtobuslarının texniki istismar göstəricilərinin qiymətləndirilməsi zamanı yanacaq qənaətliliyi hansı göstərici ilə qiymətləndirilir?",
  answers: [
    { answer: "xüsusi yanacaq sərfi ilə", type: "true" },
    { answer: "yanacağın keyfiyyəti ilə", type: "false" },
    { answer: "nəqliyyatın sürəti ilə", type: "false" },
    { answer: "yanacağın növü ilə", type: "false" },
    { answer: "nəqliyyatın növü ilə", type: "false" },
  ],
},
{
  id: 440,
  Question: "440. Sərnişin təyyarələri hansı oxa nəzərən simmetrikdir?",
  answers: [
    { answer: "uzununa", type: "true" },
    { answer: "eninə", type: "false" },
    { answer: "maili", type: "false" },
    { answer: "eninə və üfüqi", type: "false" },
    { answer: "maili və üfüqi", type: "false" },
  ],
},
{
  id: 454,
  Question: "454. Aşağıdakı variantların hansında sərnişin avtobuslarının istismarı üçün keyfiyyət göstəricisi göstərilmişdir?",
  answers: [
    { answer: "avtobusun təmirə yararlığı", type: "true" },
    { answer: "avtobusun rəngi", type: "false" },
    { answer: "avtobusun uzunluğu", type: "false" },
    { answer: "avtobusun eni", type: "false" },
    { answer: "avtobusun estetik görünüşü", type: "false" },
  ],
},
{
  id: 455,
  Question: "455. İşləmə qabiliyyətini itirmiş avtobusun texniki vəziyyətinin bərpasına yönəlmiş texniki təsirlərin məcmusu necə adlanır?",
  answers: [
    { answer: "avtobusun təmiri", type: "true" },
    { answer: "avtobusun nasazlığı", type: "false" },
    { answer: "avtobusun etibarlılığı", type: "false" },
    { answer: "avtobusun dəyanətliliyi", type: "false" },
    { answer: "avtobusun sərnişin tutumu", type: "false" },
  ],
},
{
  id: 456,
  Question: "456. Normativ texniki sənədlərin tələblərinə uyğun olaraq sərnişin avtomobilinin istehsalı və təmiri zamanı yüksək əmək məhsuldarlığını təmin etmək üçün konstruktiv-texnoloji işlərin effektivliyinin xarakterizə edilməsi onun hansı keyfiyyət göstəricisidir?",
  answers: [
    { answer: "texnolojilik", type: "true" },
    { answer: "təhlükəsizlik", type: "false" },
    { answer: "standartlaşdırma", type: "false" },
    { answer: "təyinat", type: "false" },
    { answer: "unifikasiya", type: "false" },
  ],
},
{
  id: 457,
  Question: "457. Normativ texniki sənədlərin tələblərinə uyğun olaraq avtomobilin bir yerdən başqa yerə bütün növ nəqliyyat vasitələri ilə nəql edilməsinin mümkünlüyünün və asanlığının xarakterizə edilməsi onun hansı keyfiyyət göstəricisinə aiddir?",
  answers: [
    { answer: "nəqletməyə yararlılıq", type: "true" },
    { answer: "patent-hüquq", type: "false" },
    { answer: "təhlükəsizlik", type: "false" },
    { answer: "standartlaşdırma", type: "false" },
    { answer: "təyinat", type: "false" },
  ],
},
{
  id: 458,
  Question: "458. Dənizlə sərnişinlərin və baqajın daşınması haqqında Afina konvensiyası neçənci ildə qəbul edilib?",
  answers: [
    { answer: "1974-cü ildə", type: "true" },
    { answer: "1972-ci ildə", type: "false" },
    { answer: "1987-ci ildə", type: "false" },
    { answer: "1967-ci ildə", type: "false" },
    { answer: "1994-cü ildə", type: "false" },
  ],
},
{
  id: 459,
  Question: "459. Normativ texniki sənədlərin tələblərinə uyğun olaraq sərnişin avtomobilinin imtinasız işləməsi, uzunömürlülüyü və təmirə yararlılığı xassələrinin xarakterizə edilməsi onun hansı keyfiyyət göstəricisi adlanır?",
  answers: [
    { answer: "etibarlılıq", type: "true" },
    { answer: "təyinat", type: "false" },
    { answer: "təhlükəsizlik", type: "false" },
    { answer: "standartlaşdırma", type: "false" },
    { answer: "estetik", type: "false" },
  ],
},
{
  id: 460,
  Question: "460. Normativ texniki sənədlərin tələblərinə uyğun olaraq sərnişin avtobusunda istifadə olunmuş texniki həllərin yenilik dərəcəsi, onların patent müdafiəsi, həmçinin onun ölkədə və xaricdə maneəsiz realizə olunmasının mümkünlüyü hansı göstəricidə xarakterizə edilir?",
  answers: [
    { answer: "patent-hüquq", type: "true" },
    { answer: "etibarlılıq", type: "false" },
    { answer: "standartlaşdırma", type: "false" },
    { answer: "təyinat", type: "false" },
    { answer: "erqonomik", type: "false" },
  ],
},
{
  id: 461,
  Question: "461. Dəmir yolu, avtomobil və daxili su (çay) daşımalarında tətbiq olunan əsas daşıma sənədi necə adlanır?",
  answers: [
    { answer: "qaimə", type: "true" },
    { answer: "standart", type: "false" },
    { answer: "akt", type: "false" },
    { answer: "sertifikat", type: "false" },
    { answer: "pratokol", type: "false" },
  ],
},
{
  id: 462,
  Question: "462. Dəmir yolu nəqliyyatında adətən, hansı sənədlər daxili və beynəlxalq daşımalarda nəqliyyat sənədləridir?",
  answers: [
    { answer: "qaimə və onun dublikat nüsxəsi", type: "true" },
    { answer: "normativ texniki sənədlər", type: "false" },
    { answer: "nəqliyyat vasitəsinin texniki pasportu", type: "false" },
    { answer: "pratakol və akt", type: "false" },
    { answer: "sərnişin bileti", type: "false" },
  ],
},
{
  id: 463,
  Question: "463. Sərnişinlərə nəqliyyat xidmətini hüquqi cəhətdən rəsmiləşdirən, nəqliyyat vasitəsinin formasından və yerinə yetirdiyi funksiyadan asılı olaraq nəqliyyat xidmətinin neçə növü fərqləndirilir?",
  answers: [
    { answer: "3", type: "true" },
    { answer: "4", type: "false" },
    { answer: "7", type: "false" },
    { answer: "6", type: "false" },
    { answer: "5", type: "false" },
  ],
},
{
  id: 464,
  Question: "464. Sərnişinlərə nəqliyyat xidmətinin yüksəldilməsi məqsədi ilə dünyanın bir sıra ölkələrində dəmir yolu şəbəkəsinin yaranmasına səbəb nə oldu?",
  answers: [
    { answer: "paravozun ixtira edilməsi", type: "true" },
    { answer: "ekspeditorların fəaliyyətinin genişlənməsi", type: "false" },
    { answer: "dünyanın bir sıra ölkələrində dəniz nəqliyyatının yaranması", type: "false" },
    { answer: "ölkələr arası ticarətin genişlənməsi", type: "false" },
    { answer: "dəmir yolu ilə daşınması nəzərdə tutulan yüklərin həcminin artması", type: "false" },
  ],
},
{
  id: 465,
  Question: "465. Sərnişinlərə nəqliyyat xidmətinin yüksəldilməsi məqsədi ilə avtomobillər nə zaman meydana gəldilər?",
  answers: [
    { answer: "XIX əsrin sonu XX əsrin əvvəllərində", type: "true" },
    { answer: "XVI əsrin sonu XVII əsrin əvvəllərində", type: "false" },
    { answer: "XV əsrin sonu XVI əsrin əvvəllərində", type: "false" },
    { answer: "XV əsrin sonunda", type: "false" },
    { answer: "XXI əsrin əvvəllərində", type: "false" },
  ],
},
{
  id: 466,
  Question: "466. Sərnişinlərə nəqliyyat xidmətinin yüksəldilməsi məqsədi ilə təyyarələr nə zaman meydana gəldilər?",
  answers: [
    { answer: "XIX əsrin sonu XX əsrin əvvəllərində", type: "true" },
    { answer: "XVII əsrin sonu XVIII əsrin əvvəllərində", type: "false" },
    { answer: "XVI əsrin sonu XVII əsrin əvvəllərində", type: "false" },
    { answer: "XXI əsrin əvvəllərində", type: "false" },
    { answer: "XIV əsrin sonunda", type: "false" },
  ],
},
{
  id: 467,
  Question: "467. Sərnişinlərə nəqliyyat xidmətinin yüksəldilməsi ilə əlaqədar olaraq nəyə imkan yarandı?",
  answers: [
    { answer: "sərnişinlərə nəqliyyat xidmətinin aşağı maya dəyəri ilə yerinə yetirilməsinə", type: "true" },
    { answer: "sərnişinlərə nəqliyyat xidmətinə nəzarəti artırmağa", type: "false" },
    { answer: "sərnişinlərə nəqliyyat xidməti zamanı yüksək gəlir əldə etməyə", type: "false" },
    { answer: "nəqliyyatın təmir olunmasına", type: "false" },
    { answer: "sərnişinlərə nəqliyyat xidmətinin keyfiyyətini vaxtında qiymətləndirməyə", type: "false" },
  ],
},
{
  id: 468,
  Question: "468. Su nəqliyyatı hansı nəqliyyat növünə aiddir?",
  answers: [
    { answer: "texniki nəqliyyat", type: "true" },
    { answer: "tibbi nəqliyyat", type: "false" },
    { answer: "hərbi nəqliyyat", type: "false" },
    { answer: "hava nəqliyyatı", type: "false" },
    { answer: "kombinə edilmiş", type: "false" },
  ],
},
{
  id: 469,
  Question: "469. Hava yolları nəqliyyatı hansı nəqliyyat növünə aiddir?",
  answers: [
    { answer: "texniki nəqliyyat", type: "true" },
    { answer: "tibbi nəqliyyat", type: "false" },
    { answer: "hərbi nəqliyyat", type: "false" },
    { answer: "gəmi nəqliyyatı", type: "false" },
    { answer: "elektrik nəqliyyatı", type: "false" },
  ],
},
{
  id: 470,
  Question: "470. Sərnişinlərə nəqliyyat xidmətinin göstərilməsi zamanı kommersiya təşkilatları tərəfindən həyata keçirilən daşımalar hansı daşınmalara aid edilir?",
  answers: [
    { answer: "ümumi təyinatlı daşımalar", type: "true" },
    { answer: "məqsədli daşımalar", type: "false" },
    { answer: "kommersiya daşımaları", type: "false" },
    { answer: "dövrü daşımalar", type: "false" },
    { answer: "sərbəst daşımalar", type: "false" },
  ],
},
{
  id: 471,
  Question: "471. Nəqliyyatın hansı keyfiyyət göstəricisi onun istismarı zamanı xammalın, materialın, yanacağın və əmək resurslarından istifadə dərəcəsinə görə texniki təkmilləşdirilməsi səviyyəsini xarakterizə edir?",
  answers: [
    { answer: "xammalın, materialın, yanacağın, enerjinin və əmək resurslarından qənaətlə istifadəsi göstəricisi", type: "true" },
    { answer: "standartlaşdırma və nəqletməyə yararlılıq göstəricisi", type: "false" },
    { answer: "standartlaşdırma və sertifikatlaşdırma göstəricisi", type: "false" },
    { answer: "təhlükəsizlik və nəqletməyə yararlılıq göstəricisi", type: "false" },
    { answer: "", type: "false" },
  ],
},
{
  id: 472,
  Question: "472. Sərnişinlərə nəqliyyat xidmətinin göstərilməsi üçün qaimə hansı nəqliyyat növü üzrə əsas sənədi hesab edilir?",
  answers: [
    { answer: "su nəqliyyatında", type: "true" },
    { answer: "daxili hava nəqliyyatında", type: "false" },
    { answer: "xarici hava nəqliyyatında", type: "false" },
    { answer: "hərbi təyyarələrdə", type: "false" },
    { answer: "hərbi vertaliyotlarda", type: "false" },
  ],
},
{
  id: 473,
  Question: "473. Nəqliyyat vasitələri neçə cür xüsusiyyətlərə malikdir?",
  answers: [
    { answer: "2", type: "true" },
    { answer: "3", type: "false" },
    { answer: "4", type: "false" },
    { answer: "5", type: "false" },
    { answer: "8", type: "false" },
  ],
},
{
  id: 474,
  Question: "474. Turoperator və nəqliyyat təşkilatları arasındakı münasibətlər necə nizamlanır?",
  answers: [
    { answer: "nəqliyyat hüququ ilə", type: "true" },
    { answer: "maliyyələşdirmə yolu ilə", type: "false" },
    { answer: "turistlərin sayına görə", type: "false" },
    { answer: "istirahət mərkəzinin gəlirinə görə", type: "false" },
    { answer: "nəqliyyatın sərnişin tutumuna görə", type: "false" },
  ],
},
{
  id: 475,
  Question: "475. Hazırda respublikamızda neçə turizm müəssisəsi lisenziya əsasında fəaliyyət göstərir?",
  answers: [
    { answer: "123", type: "true" },
    { answer: "42", type: "false" },
    { answer: "54", type: "false" },
    { answer: "108", type: "false" },
    { answer: "79", type: "false" },
  ],
},
{
  id: 476,
  Question: "476. Standart və ya xidmətlər paketi əsasında tam kompleks xidmətlərlə təmin olunmaqla səyahət iştirakçılarının zaman-məkan yerdəyişməsi necə adlanır?",
  answers: [
    { answer: "tur", type: "true" },
    { answer: "xidmətlər paketi", type: "false" },
    { answer: "səyahət", type: "false" },
    { answer: "fəaliyyət", type: "false" },
    { answer: "gəzinti", type: "false" },
  ],
},
{
  id: 477,
  Question: "477. Xidmət paketinin tərkibinə turun nəqliyyat xidməti kim tərəfindən daxil edilir?",
  answers: [
    { answer: "turoperator", type: "true" },
    { answer: "nəqliyyat sahibi", type: "false" },
    { answer: "istirahət mərkəzinin xidmətçiləri", type: "false" },
    { answer: "nəqliyyat müəssisəsinin rəhbəri", type: "false" },
    { answer: "istirahətdə olan turistlər", type: "false" },
  ],
},
{
  id: 478,
  Question: "478. Turistlərin marşrutunu layihələndirən və tur iştirakçılarının səyahətdə olma proqramını işləyib hazırlayan mütəxəssis necə adlanır?",
  answers: [
    { answer: "turoperator", type: "true" },
    { answer: "texnoloq", type: "false" },
    { answer: "müfəttiş", type: "false" },
    { answer: "mühafizəçi", type: "false" },
    { answer: "tur iştirakçısı", type: "false" },
  ],
},
{
  id: 479,
  Question: "479. Müxtəlif avadanlıqlar və üsullar vasitəsilə nəqliyyat parkının texniki vəziyyətinin səmərəli şəkildə idarə edilməsi ilə məşğul olan elm necə adlanır?",
  answers: [
    { answer: "nəqliyyat vasitələrinin texniki istismarı", type: "true" },
    { answer: "nəqliyyatın istismarı", type: "false" },
    { answer: "istehsal avadanlıqları", type: "false" },
    { answer: "nəqliyyat vasitələri və istehsal avadanlıqları", type: "false" },
    { answer: "nəqliyyat parkının akkreditasiyası", type: "false" },
  ],
},
{
  id: 480,
  Question: "480. Hava nəqliyyatı sahəsində sərnişinlərə xidmətin təşkili haqqında müqavilə hansı şəklində qəbul olunur?",
  answers: [
    { answer: "təşkilati müqavilə", type: "true" },
    { answer: "fərdi müqavilə", type: "false" },
    { answer: "lisenziya müqaviləsi", type: "false" },
    { answer: "gömrük müqaviləsi", type: "false" },
    { answer: "ticarət müqaviləsi", type: "false" },
  ],
},
{
  id: 481,
  Question: "481. Turizm sahəsində sərnişinlərə nəqliyyat xidmətinin təşkili haqqında müqavilə hansı nəqliyyat növünün sahibləri ilə bağlana bilər?",
  answers: [
    { answer: "nəqliyyatın bütün növlərinin sahibləri ilə", type: "true" },
    { answer: "yalnız yük maşınlarının sahibləri ilə", type: "false" },
    { answer: "yalnız gəmi sahibləri ilə", type: "false" },
    { answer: "yalnız minik avtomobillərinin sahibləri ilə", type: "false" },
    { answer: "yalnız çay nəqliyyatı vasitələrinin sahibləri ilə", type: "false" },
  ],
},
{
  id: 482,
  Question: "482. Sərnişinlərə nəqliyyat xidmətinin təşkili zamanı ümumi təyinatlı nəqliyyat xidmətləri hansı təşkilatlar tərəfindən həyata keçirilir?",
  answers: [
    { answer: "komersiya təşkilatları tərəfindən", type: "true" },
    { answer: "istirahət mərkəzi tərəfindən", type: "false" },
    { answer: "akkreditləşdirmə üzrə orqan tərəfindən", type: "false" },
    { answer: "sertifikatlaşdırma üzrə orqan tərəfindən", type: "false" },
    { answer: "fərdi nəqliyyat sahibi tərəfindən", type: "false" },
  ],
},
{
  id: 483,
  Question: "483. Hava nəqliyyatı vasitəsi turistlərin olduğu yerdən istirahət mərkəzi olan əraziyə çatdırılması (yerdəyişməsi) üzrə göstərilən xidmət necə adlanır?",
  answers: [
    { answer: "turistlərə nəqliyyat xidməti", type: "true" },
    { answer: "turistlərə servis xidməti", type: "false" },
    { answer: "nəqliyyatda ekspedisiya xidməti", type: "false" },
    { answer: "sərnişinlərə fərdi xidmət", type: "false" },
    { answer: "turistlərə mehmanxana xidməti", type: "false" },
  ],
},
{
  id: 484,
  Question: "484. Gəmi vasitəsi ilə turistlərin olduğu yerdən istirahət mərkəzi olan əraziyə çatdırılması (yerdəyişməsi) üzrə göstərilən xidmət necə adlanır?",
  answers: [
    { answer: "turistlərə nəqliyyat xidməti", type: "true" },
    { answer: "nümunəvi xidmət", type: "false" },
    { answer: "turistlərə servis xidməti", type: "false" },
    { answer: "turistlərə gəmi xidməti", type: "false" },
    { answer: "nəqliyyatda ekspedisiya xidməti", type: "false" },
  ],
},
{
  id: 485,
  Question: "485. Avtomobil nəqliyyat vasitəsi ilə turistlərin olduğu yerdən istirahət mərkəzi olan əraziyə çatdırılması (yerdəyişməsi) üzrə göstərilən xidmət necə adlanır?",
  answers: [
    { answer: "turistlərə nəqliyyat xidməti", type: "true" },
    { answer: "turistlərə servis xidməti", type: "false" },
    { answer: "turistlərə avtomobil xidməti", type: "false" },
    { answer: "nəqliyyatda ekspedisiya xidməti", type: "false" },
    { answer: "turistlərə məişət xidməti", type: "false" },
  ],
},
{
  id: 486,
  Question: "486. Dəmir yolu nəqliyyat vasitəsi ilə turistlərin olduğu yerdən istirahət mərkəzi olan əraziyə çatdırılması (yerdəyişməsi) üzrə göstərilən xidmət necə adlanır?",
  answers: [
    { answer: "turistlərə nəqliyyat xidməti", type: "true" },
    { answer: "turistlərə nümunəvi xidmət", type: "false" },
    { answer: "turistlərə fərdi xidmət", type: "false" },
    { answer: "turistlərə servis xidməti", type: "false" },
    { answer: "nəqliyyatda ekspedisiya xidməti", type: "false" },
  ],
},
{
  id: 487,
  Question: "487. Müntəzəm reyslərdən fərqli olaraq hansı reyslər bir və ya bir neçə daşınma yerinə yetirmək üçün bütün təyyarələri icarəyə verən avia şirkətlər və ya turizm agentlikləri tərəfindən təşkil edilir?",
  answers: [
    { answer: "çarter reysləri", type: "true" },
    { answer: "xüsusi reyslər", type: "false" },
    { answer: "qrafik üzrə müntəzəm reyslər", type: "false" },
    { answer: "dövlət əhəmiyyətli reyslər", type: "false" },
    { answer: "fərdi reyslər", type: "false" },
  ],
},
{
  id: 488,
  Question: "488. Turizm sahəsində daşımaların dəyəri (qiyməti) neçə tərkib üzrə bölüşdürülür?",
  answers: [
    { answer: "3", type: "true" },
    { answer: "2", type: "false" },
    { answer: "4", type: "false" },
    { answer: "5", type: "false" },
    { answer: "6", type: "false" },
  ],
},
{
  id: 489,
  Question: "489. Uzaq məsafəyə nəzərdə tutulmuş turist-eksursiya qatarın tərkibi adətən neçə vaqonla formalaşır?",
  answers: [
    { answer: "15", type: "true" },
    { answer: "8", type: "false" },
    { answer: "10", type: "false" },
    { answer: "12", type: "false" },
    { answer: "9", type: "false" },
  ],
},
{
  id: 490,
  Question: "490. Skyliner modelli turist avtobusu neçə nəfər sərnişin daşıya bilər?",
  answers: [
    { answer: "69 nəfər", type: "true" },
    { answer: "78 nəfər", type: "false" },
    { answer: "52 nəfər", type: "false" },
    { answer: "75 nəfər", type: "false" },
    { answer: "48 nəfər", type: "false" },
  ],
},
{
  id: 491,
  Question: "491. Tourliner C modifikasiyalı turist avtobusu neçə nəfər sərnişin tutumuna malikdir?",
  answers: [
    { answer: "55 nəfər", type: "true" },
    { answer: "65 nəfər", type: "false" },
    { answer: "48 nəfər", type: "false" },
    { answer: "68 nəfər", type: "false" },
    { answer: "42 nəfər", type: "false" },
  ],
},
{
  id: 492,
  Question: "492. Starliner modelli turist avtobusu neçənci ildən istismara buraxıldı?",
  answers: [
    { answer: "2004-cü ildən", type: "true" },
    { answer: "1992-ci ildən", type: "false" },
    { answer: "1996-cı ildən", type: "false" },
    { answer: "2012-ci ildən", type: "false" },
    { answer: "2008-ci ildən", type: "false" },
  ],
},
{
  id: 493,
  Question: "493. İki qapılı Skyliner modelli turist avtobusunun uzunluğu nə qədərdir?",
  answers: [
    { answer: "12440 mm", type: "true" },
    { answer: "22440mm", type: "false" },
    { answer: "24400mm", type: "false" },
    { answer: "12000mm", type: "false" },
    { answer: "1240 mm", type: "false" },
  ],
},
{
  id: 494,
  Question: "494. Tourliner L modifikasiyalı turist avtobusu neçə nəfər sərnişin tutumuna malikdir?",
  answers: [
    { answer: "59 nəfər", type: "true" },
    { answer: "65 nəfər", type: "false" },
    { answer: "48 nəfər", type: "false" },
    { answer: "52 nəfər", type: "false" },
    { answer: "72 nəfər", type: "false" },
  ],
},
{
  id: 495,
  Question: "495. QolAZ-52911 Kruiz turist avtobusu neçə nəfər sərnişin tutumuna malikdir?",
  answers: [
    { answer: "47 nəfər", type: "true" },
    { answer: "42 nəfər", type: "false" },
    { answer: "52 nəfər", type: "false" },
    { answer: "38 nəfər", type: "false" },
    { answer: "36 nəfər", type: "false" },
  ],
},
{
  id: 496,
  Question: "496. Hansı sahə sürətlə inkişaf edən biznes sahələrindən biridir?",
  answers: [
    { answer: "turizm sahəsi", type: "true" },
    { answer: "təhsil sahəsi", type: "false" },
    { answer: "tibbi sahə", type: "false" },
    { answer: "hərbi sahə", type: "false" },
    { answer: "kənd təsərrüfatı sahəsi", type: "false" },
  ],
},
{
  id: 497,
  Question: "497. Beynəlxalq avtokirayə şirkətlərinin kirayə xidmətləri üçün təklif etdikləri əsas tariflərdən biri hansı variantda göstərilmişdir?",
  answers: [
    { answer: "gün ərzində limit qoyulmuş yürüşə görə", type: "true" },
    { answer: "avtomobilin markasına görə", type: "false" },
    { answer: "avtomobilin sürətinə görə", type: "false" },
    { answer: "avtomobilin ilinə görə", type: "false" },
    { answer: "avtomobilin sərnişin tutumuna görə", type: "false" },
  ],
},
{
  id: 498,
  Question: "498. Turistlərə kütləvi xidmət göstərilməsi üçün turist kruiz şirkətləri hansı dərəcəyə uyğun gəmilər təklif edirlər?",
  answers: [
    { answer: "servis səviyyəsi 4-5* (ulduz) dərəcəsinə uyğun", type: "true" },
    { answer: "servis səviyyəsi 1-2* (ulduz) dərəcəsinə uyğun", type: "false" },
    { answer: "servis səviyyəsi 3* (ulduz) dərəcəsinə uyğun", type: "false" },
    { answer: "servis səviyyəsi 2* (ulduz) dərəcəsinə uyğun", type: "false" },
    { answer: "servis səviyyəsi 2-3* (ulduz) dərəcəsinə uyğun", type: "false" },
  ],
},
{
  id: 499,
  Question: "499. Turistlərə təqdim olunan xidmətlər üzrə hansı xidmət bütün dünyada turist biznesində müşayiət olunan ən gəlirli fəaliyyət növlərindən biridir?",
  answers: [
    { answer: "turistlərə avtomobillərin kirayəyə təqdim olunması üzrə xidmət", type: "true" },
    { answer: "turistlərə kənd təsərrüfatı məhsullarının təqdim olunması üzrə xidmət", type: "false" },
    { answer: "turistlərə yüngül sənaye məmulatlarının təqdim olunması üzrə xidmət", type: "false" },
    { answer: "turistlərə qənnadı məmulatlarının təqdim olunması üzrə xidmət", type: "false" },
    { answer: "turistlərin şəxsi avtomobillərinin təmiri üzrə xidmət", type: "false" },
  ],
},
{
  id: 500,
  Question: "500. Turistlərin təşkil olunmuş qrup şəklində daşınması (10 nəfərdən az olmamalı) üçün dəmiryolu gediş sənədlərinin tərtib olunması, yerlərin bronlaşdırılması kimlərin qabaqcadan verdikləri sifarişlər əsasında həyata keçirilir?",
  answers: [
    { answer: "turoperatorun və ya turagentliklərin", type: "true" },
    { answer: "turist bələdçisinin", type: "false" },
    { answer: "nəqliyyata texniki baxış üzrə orqanın", type: "false" },
    { answer: "nəqliyyat müəssisəsinin bilet satışı məntəqəsinin üzvünün", type: "false" },
    { answer: "nəqliyyat müəssisəsinin bilet satışı məntəqəsinin rəhbərinin", type: "false" },
  ],
},


];

export default Questions;

