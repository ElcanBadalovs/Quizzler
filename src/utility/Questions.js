// Questions.js
const Questions = [
  {
    Question: "Choose the line of uncountable nouns.",
    answers: [
      { answer: "homework, luck, wheat", type: "true" },
      { answer: "cousin, soup, honey", type: "false" },
      { answer: "deer, chalk, luggage", type: "false" },
      { answer: "rice, darkness, knife", type: "false" },
      { answer: "soap, job, salt", type: "false" },
    ],
  },
  {
    Question: "Choose the correct interrogative sentence.",
    answers: [
      { answer: "Did American space probes also take photographs of the far side of the Moon?", type: "true" },
      { answer: "Did American space probes also taken photographs of the far side of the Moon?", type: "false" },
      { answer: "Did American space probes also take photographs with the far side of the Moon?", type: "false" },
      { answer: "Have American space probes also take photographs of the far side of the Moon?", type: "false" },
      { answer: "Did American space probes also took photographs of the far side of the Moon?", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: \nI’m very hungry. How about going to the (…)?",
    answers: [
      { answer: "canteen", type: "true" },
      { answer: "museum", type: "false" },
      { answer: "cinema", type: "false" },
      { answer: "Zoo", type: "false" },
      { answer: "school", type: "false" },
    ],
  },
  {
    Question: "Choose the wrong variant:",
    answers: [
      { answer: "write-writed", type: "true" },
      { answer: "win-won", type: "false" },
      { answer: "say-said", type: "false" },
      { answer: "wait-waited", type: "false" },
      { answer: "cut-cut", type: "false" },
    ],
  },
  {
    Question: "Choose the correct translation. \nThe peace-loving people must continue to be very active in their struggle for peace.",
    answers: [
      { answer: "Sülhsevər insanlar sülh uğrunda mübarizələrində çox fəal olmaqda davam etməlidirlər.", type: "true" },
      { answer: "Sülhsevər insanlar sülh uğrunda mübarizə etməlidirlər.", type: "false" },
      { answer: "Sülhü sevən bütün insanlar sülh uğrunda mübarizəyə qoşulmalıdır.", type: "false" },
      { answer: "Sülhü sevən hər kəs onun uğrunda mübarizə etməlidir.", type: "false" },
      { answer: "Bütün sülhsevər insanlar sülh uğrunda mübarizəni davam etməlidirlər.", type: "false" },
    ],
  },
  {
    Question: "Choose the correct translation. \nSpring is the most beautiful and lovely season of the year in all countries of the world.",
    answers: [
      { answer: "Dünyanın bütün ölkələrində bahar ilin ən gözəl və xoşagələn fəslidir.", type: "true" },
      { answer: "Bütün ölkələrdə bahar ən gözəl fəsillərdən biridir.", type: "false" },
      { answer: "Dünyanın hər yerində ən gözəl fəsil bahardır.", type: "false" },
      { answer: "Bütün ölkələrdə ən sevimli fəsil bahardır.", type: "false" },
      { answer: "Bütün ölkələrdə ən sevimli fəsil yazdir.", type: "false" },
    ],
  },
  {
    Question: "Choose the sentence logically correct. \nShe lost all her money yesterday (…).",
    answers: [
      { answer: "we felt sorry for her", type: "true" },
      { answer: "she enjoyed herself", type: "false" },
      { answer: "we were glad to hear it", type: "false" },
      { answer: "her parents were pleased with her", type: "false" },
      { answer: "she could buy everything she wished", type: "false" },
    ],
  },
  {
    Question: "Choose the sentence logically correct. \nIt was raining hard all day long yesterday and the children (…).",
    answers: [
      { answer: "couldn’t go to the forest", type: "true" },
      { answer: "could sleep in the open air", type: "false" },
      { answer: "had a good time", type: "false" },
      { answer: "had to go to the forest", type: "false" },
      { answer: "went for a walk", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence: \nShe ( _____ ) a son. \nHer son ( ___) a new car.",
    answers: [
      { answer: "has got, has got", type: "true" },
      { answer: "have got, has got", type: "false" },
      { answer: "had got, have got", type: "false" },
      { answer: "has got, have got", type: "false" },
      { answer: "have got, have got", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence: \nPlease, put these things (_____) the table.",
    answers: [
      { answer: "on", type: "true" },
      { answer: "at", type: "false" },
      { answer: "along", type: "false" },
      { answer: "in front of", type: "false" },
      { answer: "against", type: "false" },
    ],
  },
  {
    Question: "Make up a sentence of the given words: \nusually, home, in the evening, at, they, are.",
    answers: [
      { answer: "They are usually at home in the evening.", type: "true" },
      { answer: "Usually at home are they in the evening.", type: "false" },
      { answer: "Are they home at usually in the evening.", type: "false" },
      { answer: "At home they are in the evening.", type: "false" },
      { answer: "They are usually home at in the evening.", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence: \nI always brush my teeth (______ ) I go to bed.",
    answers: [
      { answer: "before", type: "true" },
      { answer: "as soon as", type: "false" },
      { answer: "while", type: "false" },
      { answer: "until", type: "false" },
      { answer: "during", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: \nÇalışın gündəlik planınız olsun və onu tətbiq edin.",
    answers: [
      { answer: "Try to have a daily plan and apply it.", type: "true" },
      { answer: "Work and have a daily plan and apply it.", type: "false" },
      { answer: "Try to have a daily plans and apply it.", type: "false" },
      { answer: "Try to have a daily plans and and obey it.", type: "false" },
      { answer: "Try have a daily plan and to apply it.", type: "false" },
    ],
  },
  {
    Question: "Translate into English: \nRespublikanın sahəsi neft, təbii qaz, dəmir, qalay, yarım metallarla və s. zəngindir.",
    answers: [
      { answer: "The territory of our Republic is rich in oil, natural gas, iron, tin, poly metals and so on.", type: "true" },
      { answer: "The territory of our Republic was rich in oil, natural gas, iron, tin, poly metals and so on.", type: "false" },
      { answer: "The territory of our Republic are not rich in oil, natural gas, iron, tin, poly metals and so on.", type: "false" },
      { answer: "The territory of our Republic had been rich in oil, natural gas, iron, tin, poly metals and so on.", type: "false" },
      { answer: "The territory of our Republic were rich in oil, natural gas, iron, tin, poly metals and so on.", type: "false" },
    ],
  },
  {
    Question: "Translate into English: \nBizim gündəlik həyatımıza texnikanın böyük təsiri vardır.",
    answers: [
      { answer: "There is a big influence of technique on our daily life.", type: "true" },
      { answer: "There was a big influence of technique on our daily life.", type: "false" },
      { answer: "There have been a big influence of technique on our daily life.", type: "false" },
      { answer: "There had been a big influence of technique on our daily life.", type: "false" },
      { answer: "There are a big influence of technique on our daily life.", type: "false" },
    ],
  },
  {
    Question: "Translate into English: \nHavanın, torpağın, suyun çirklənməsi insanlara, heyvanlara, bitkilərə zərərdir.",
    answers: [
      { answer: "Polluted air, land and water is harmful to people, animals and plants.", type: "true" },
      { answer: "Polluted air, land and water harmful to people, animals and plants.", type: "false" },
      { answer: "Polluted air, land and water will be harmful to people, animals and plants.", type: "false" },
      { answer: "Polluted air, land and water has been harmful to people, animals and plants.", type: "false" },
      { answer: "Polluted air, land and water will be harmful to people, animals and plants.", type: "false" },
    ],
  },
  {
    Question: "Translate into Azerbaijan: \nThe computer is a fix part of every modern life.",
    answers: [
      { answer: "Kompüter hər bir müasir həyatın sabit bir hissəsidir.", type: "true" },
      { answer: "Komputer müasir həyatda çox işlənir.", type: "false" },
      { answer: "Komputer elmin inkişafında böyük rol oynayır.", type: "false" },
      { answer: "Komputer həyatda çox böyük rol oynayır.", type: "false" },
      { answer: "Komputer müasir həyatın əsas hissəsidir.", type: "false" },
    ],
  },
  {
    Question: "Translate into Azerbaijan: \nElectron devices, multimedia and computers are things we have to deal with every day.",
    answers: [
      { answer: "Elektron cihazlar, kütləvi informasiya vasitələri və komputerlər elə bir şeydir ki, biz hər gün onlarla əlaqədə olmalıyıq.", type: "true" },
      { answer: "Elektron cihazlar, kütləvi informasiya vasitələri və komputerlər ilə hər gün işləmək çətindir.", type: "false" },
      { answer: "Elektron cihazlar, kütləvi informasiya vasitələri və komputerlər elə əşyalardır ki, onları hər yerdə tapmaq olur.", type: "false" },
      { answer: "Elektron cihazlar, kütləvi informasiya vasitələri və komputerlər ilə əlaqədə ola bilərik.", type: "false" },
      { answer: "Elektron cihazlar, kütləvi informasiya vasitələri və komputerlər ilə biz hər gün əlaqədə ola bilərik.", type: "false" },
    ],
  },
  {
    Question: "Write the plural forms of given nouns in correct order: \n1.book, \n2.teacher, \n3.desk, \n4.chair, \n5.student, \n6.girl, \n7.boy, \n8.man, \n9.woman",
    answers: [
      { answer: "books, teachers, desks, chairs, students, girls, boys, men, women", type: "true" },
      { answer: "books, teacher, desks, chairs, students, girls, boy, men, woman", type: "false" },
      { answer: "books, teachers, desks, chair, students, girls, boys, men, womens", type: "false" },
      { answer: "women books, teachers, desks, chairs, students, girls, boys, man", type: "false" },
      { answer: "book, teacher, desks, chairs, student, girls, boy, men, women", type: "false" },
    ],
  },
  {
    Question: "Write the numerals: \n1) 1, \n2) 4, \n3) 15, \n4) 2, \n5) 8, \n6) 20, \n7) 3",
    answers: [
      { answer: "one, four, fifteen, two, eight, twenty, three", type: "true" },
      { answer: "seven, four, one, two, eight, two, three", type: "false" },
      { answer: "eight, one, fifteen, two, twenty, three, four", type: "false" },
      { answer: "four, two, one, fifteen, eight, twenty, three", type: "false" },
      { answer: "one, fifteen, four, two, twenty, three, eight", type: "false" },
    ],
  },
  {
    Question: "Choose the ordinal numeral:",
    answers: [
      { answer: "the first", type: "true" },
      { answer: "two", type: "false" },
      { answer: "the twenty", type: "false" },
      { answer: "the four", type: "false" },
      { answer: "the five", type: "false" },
    ],
  },
  {
    Question: "Choose the ordinal numeral:",
    answers: [
      { answer: "the twenty first", type: "true" },
      { answer: "two", type: "false" },
      { answer: "the twenty", type: "false" },
      { answer: "four", type: "false" },
      { answer: "the five", type: "false" },
    ],
  },
  {
    Question: "Choose the negative sentence:",
    answers: [
      { answer: "Edinburgh isn’t in England.", type: "true" },
      { answer: "London is in Scotland.", type: "false" },
      { answer: "Scotland no in France.", type: "false" },
      { answer: "Brazil are not a small country.", type: "false" },
      { answer: "Ganja is an old city.", type: "false" },
    ],
  },
  {
    Question: "Choose the negative sentence:",
    answers: [
      { answer: "My mother and my father aren’t English.", type: "true" },
      { answer: "They are no in England.", type: "false" },
      { answer: "This is Thelma with her children.", type: "false" },
      { answer: "The children isn’t in the yard.", type: "false" },
      { answer: "They are not speak English.", type: "false" },
    ],
  },
  {
    Question: "Match the nationalities to the countries.",
    answers: [
      { answer: "1-c, 2-b, 3-d, 4-a", type: "true" },
      { answer: "1-a, 2-c, 3-b, 4-d", type: "false" },
      { answer: "1-d, 2-c, 3-b, 4-a", type: "false" },
      { answer: "1-b, 2-c, 3-d, 4-a", type: "false" },
      { answer: "1-c, 2-a, 3-d, 4-b", type: "false" },
    ],
  },
  {
    Question: "Match the nationalities to the countries.",
    answers: [
      { answer: "1-d, 2-b, 3-c, 4-a", type: "true" },
      { answer: "1-a, 2-c, 3-d, 4-c", type: "false" },
      { answer: "1-b, 2-d, 3-a, 4-c", type: "false" },
      { answer: "1-c, 2-a, 3-b, 4-d", type: "false" },
      { answer: "1-b, 2-c, 3-a, 4-d", type: "false" },
    ],
  },
  {
    Question: "Match the nationalities to the countries.",
    answers: [
      { answer: "1-a, 2-c, 3-d, 4-b", type: "true" },
      { answer: "1-b, 2-a, 3-d, 4-c", type: "false" },
      { answer: "1-c, 2-d, 3-a, 4-b", type: "false" },
      { answer: "1-d, 2-b, 3-c, 4-a", type: "false" },
      { answer: "1-c, 2-c, 3-a, 4-d", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant:   \n- Are you Portuguese?   \n- No, ( ____). I’m Brazilian.",
    answers: [
      { answer: "I’m not.", type: "true" },
      { answer: "I did.", type: "false" },
      { answer: "I don’t.", type: "false" },
      { answer: "I can’t.", type: "false" },
      { answer: "I didn’t.", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant.   \nHow old ( ___ ) your cousin?",
    answers: [
      { answer: "Is", type: "true" },
      { answer: "Are", type: "false" },
      { answer: "Am", type: "false" },
      { answer: "Has", type: "false" },
      { answer: "Have", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant.   \nShe ( ___ ) a swimming pool in ( ___ ) garden.",
    answers: [
      { answer: "Has /her", type: "true" },
      { answer: "Has/his", type: "false" },
      { answer: "Have/my", type: "false" },
      { answer: "Have/our", type: "false" },
      { answer: "Has/your", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant.   \nWhat color ( ___ ) your glasses?",
    answers: [
      { answer: "Are", type: "true" },
      { answer: "Is", type: "false" },
      { answer: "Have", type: "false" },
      { answer: "Has", type: "false" },
      { answer: "Am", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant.   \nMy sister’s children are my ( ___ ) ( ___ ).",
    answers: [
      { answer: "Niece and nephew", type: "true" },
      { answer: "Son and daughter", type: "false" },
      { answer: "Cousin and brother", type: "false" },
      { answer: "Niece and aunt", type: "false" },
      { answer: "Daughter and uncle", type: "false" },
    ],
  },
  {
    Question: "Match words or phrases with verb 'live' (…)",
    answers: [
      { answer: "1,4", type: "true" },
      { answer: "1,2", type: "false" },
      { answer: "2,3", type: "false" },
      { answer: "3,4", type: "false" },
      { answer: "1,3", type: "false" },
    ],
  },
  {
    Question: "Match words or phrases with verb 'study' (…)",
    answers: [
      { answer: "1,3,5", type: "true" },
      { answer: "1,3,4", type: "false" },
      { answer: "1,2,4", type: "false" },
      { answer: "3,4", type: "false" },
      { answer: "2,3,4", type: "false" },
    ],
  },
  {
    Question: "Match words or phrases with verb 'speak' (…)",
    answers: [
      { answer: "1,4", type: "true" },
      { answer: "2,3", type: "false" },
      { answer: "1,2", type: "false" },
      { answer: "2,4", type: "false" },
      { answer: "2,3", type: "false" },
    ],
  },
  {
    Question: "Complete the question.\n(…..) you ( …..) meat?",
    answers: [
      { answer: "Do, eat", type: "true" },
      { answer: "Does, drink", type: "false" },
      { answer: "Does, eat", type: "false" },
      { answer: "Do, eats", type: "false" },
      { answer: "Do, cooks", type: "false" },
    ],
  },
  {
    Question: "Translate the following sentence.\nOnlar çoxlu şokolad yeyirlər.",
    answers: [
      { answer: "They eat a lot of chocolate.", type: "true" },
      { answer: "They eats many chocolate.", type: "false" },
      { answer: "They eat a lot of chocolates.", type: "false" },
      { answer: "We eat lots of chocolates.", type: "false" },
      { answer: "They are eating a lot of chocolate.", type: "false" },
    ],
  },
  {
    Question: "Which word means an area of sand next to the sea where people often go to relax or swim in the sea?",
    answers: [
      { answer: "Beach", type: "true" },
      { answer: "Cafe", type: "false" },
      { answer: "Office", type: "false" },
      { answer: "Coast", type: "false" },
      { answer: "Centre", type: "false" },
    ],
  },
  {
    Question: "Which word means a person who advises people about law and represents them in a court of law?",
    answers: [
      { answer: "lawyer", type: "true" },
      { answer: "actor", type: "false" },
      { answer: "doctor", type: "false" },
      { answer: "teacher", type: "false" },
      { answer: "police", type: "false" },
    ],
  },
  {
    Question: "Which word means to begin doing something?",
    answers: [
      { answer: "to Start", type: "true" },
      { answer: "to Finish", type: "false" },
      { answer: "to Trigger", type: "false" },
      { answer: "to Open", type: "false" },
      { answer: "to Close", type: "false" },
    ],
  },
  {
    Question: "Which word means to make something shut?",
    answers: [
      { answer: "to close", type: "true" },
      { answer: "to open", type: "false" },
      { answer: "a gun", type: "false" },
      { answer: "to start", type: "false" },
      { answer: "to Stop", type: "false" },
    ],
  },
  {
    Question: "Which word means to stop, or stop doing something?",
    answers: [
      { answer: "To Finish", type: "false" },
      { answer: "To Close", type: "false" },
      { answer: "To Continue", type: "false" },
      { answer: "To Go on", type: "false" },
      { answer: "To Go back", type: "true" },
    ],
  },
  {
    Question: "Complete the sentence. \nShe (…..) a TV in her house.",
    answers: [
      { answer: "has", type: "true" },
      { answer: "goes", type: "false" },
      { answer: "don’t have", type: "false" },
      { answer: "doesn’t come", type: "false" },
      { answer: "plays", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nShe (……) hundreds of dolls.",
    answers: [
      { answer: "has", type: "true" },
      { answer: "doesn’t has", type: "false" },
      { answer: "love", type: "false" },
      { answer: "like", type: "false" },
      { answer: "goes", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nThis person (…..) Italian food.",
    answers: [
      { answer: "loves", type: "true" },
      { answer: "plays", type: "false" },
      { answer: "sits", type: "false" },
      { answer: "cycling", type: "false" },
      { answer: "driving", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nShe also (…….) playing basketball well.",
    answers: [
      { answer: "likes", type: "true" },
      { answer: "plays", type: "false" },
      { answer: "sits", type: "false" },
      { answer: "cycling", type: "false" },
      { answer: "rides", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nShe (…..) dogs and she (…..) spiders.",
    answers: [
      { answer: "doesn’t like, hates", type: "true" },
      { answer: "hates, plays", type: "false" },
      { answer: "rides, cycling", type: "false" },
      { answer: "plays, cooks", type: "false" },
      { answer: "driving", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nShe (…….) in London with her husband.",
    answers: [
      { answer: "lives", type: "true" },
      { answer: "likes", type: "false" },
      { answer: "goes", type: "false" },
      { answer: "hates", type: "false" },
      { answer: "loves", type: "false" },
    ],
  },
  {
    Question: "Complete the question sentence. \nWhat (……) she think about British people?",
    answers: [
      { answer: "does", type: "true" },
      { answer: "do", type: "false" },
      { answer: "has", type: "false" },
      { answer: "had", type: "false" },
      { answer: "don’t", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nHe (……) from Delhi in India.",
    answers: [
      { answer: "comes", type: "true" },
      { answer: "plays", type: "false" },
      { answer: "cooks", type: "false" },
      { answer: "works", type: "false" },
      { answer: "don’t", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nEvery year they ( …..) back to India and (…..) with their parents.",
    answers: [
      { answer: "go, stay", type: "true" },
      { answer: "goes, stays", type: "false" },
      { answer: "plays, cooks", type: "false" },
      { answer: "stay, has", type: "false" },
      { answer: "drink, play", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nWhat ( …..) his name?",
    answers: [
      { answer: "is", type: "true" },
      { answer: "are", type: "false" },
      { answer: "has", type: "false" },
      { answer: "have", type: "false" },
      { answer: "got", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: \nMost people ( …..) small cars.",
    answers: [
      { answer: "drive", type: "true" },
      { answer: "drink", type: "false" },
      { answer: "saw", type: "false" },
      { answer: "wait", type: "false" },
      { answer: "can", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: \nPeople always (……) in a queue to get on a bus.",
    answers: [
      { answer: "wait", type: "true" },
      { answer: "walk", type: "false" },
      { answer: "fly", type: "false" },
      { answer: "drive", type: "false" },
      { answer: "play", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: \nPeople often (……) from one city to another.",
    answers: [
      { answer: "fly", type: "true" },
      { answer: "get on", type: "false" },
      { answer: "wait", type: "false" },
      { answer: "get off", type: "false" },
      { answer: "take", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: \nNot many people (……) to the shops.",
    answers: [
      { answer: "walk", type: "true" },
      { answer: "saw", type: "false" },
      { answer: "wait", type: "false" },
      { answer: "take", type: "false" },
      { answer: "can’t", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: \nA lot of people (…..) bicycles to work.",
    answers: [
      { answer: "ride", type: "true" },
      { answer: "way", type: "false" },
      { answer: "gets on", type: "false" },
      { answer: "play", type: "false" },
      { answer: "takes", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: \n(…….) is a problem all day.",
    answers: [
      { answer: "traffic", type: "true" },
      { answer: "ways", type: "false" },
      { answer: "schools", type: "false" },
      { answer: "games", type: "false" },
      { answer: "transports", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: \nThe buses are very (……. )",
    answers: [
      { answer: "crowded", type: "true" },
      { answer: "good smelled", type: "false" },
      { answer: "bonny", type: "false" },
      { answer: "ship", type: "false" },
      { answer: "drive", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: \nTaxis ( ……) very slowly.",
    answers: [
      { answer: "drive", type: "true" },
      { answer: "play", type: "false" },
      { answer: "let", type: "false" },
      { answer: "drink", type: "false" },
      { answer: "can", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: \nMy father’s sister is my (…….)",
    answers: [
      { answer: "aunt", type: "true" },
      { answer: "mother-in-law", type: "false" },
      { answer: "uncle", type: "false" },
      { answer: "step-mother", type: "false" },
      { answer: "sister", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nThe Deluxe is ( ……) than the Micro.",
    answers: [
      { answer: "Older", type: "true" },
      { answer: "The oldest", type: "false" },
      { answer: "Old", type: "false" },
      { answer: "Oldest", type: "false" },
      { answer: "Elder", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nWho’s (…..), you or your teacher?",
    answers: [
      { answer: "taller", type: "true" },
      { answer: "tallest", type: "false" },
      { answer: "the tallest", type: "false" },
      { answer: "tall", type: "false" },
      { answer: "taller than", type: "false" },
    ],
  },
  {
    Question: "Put the questions in the correct order. \ntake/cards/you/Do/credit?",
    answers: [
      { answer: "Do you take credit cards?", type: "true" },
      { answer: "Do take you credit cards?", type: "false" },
      { answer: "Credit cards you do take?", type: "false" },
      { answer: "Take you credit cards do?", type: "false" },
      { answer: "Do you cards take credit?", type: "false" },
    ],
  },
  {
    Question: "Complete the questions with superlative adjectives. \nWhich is (…) expensive city in the world to buy a house or flat?",
    answers: [
      { answer: "the most", type: "true" },
      { answer: "more", type: "false" },
      { answer: "more than", type: "false" },
      { answer: "the more", type: "false" },
      { answer: "most", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nWhere do they sell cakes and bread?",
    answers: [
      { answer: "bakery", type: "true" },
      { answer: "butcher’s", type: "false" },
      { answer: "hairdresser’s", type: "false" },
      { answer: "clothes shop", type: "false" },
      { answer: "gift shop", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nFind the shops where you buy these things: some cakes and bread.",
    answers: [
      { answer: "Bakery", type: "true" },
      { answer: "Butcher", type: "false" },
      { answer: "Dry cleaner’s", type: "false" },
      { answer: "Hairdresser’s", type: "false" },
      { answer: "Dry cleaner’s", type: "false" },
    ],
  },
  {
    Question: "Put the words in the correct order: \na /red/car/got/have/you?",
    answers: [
      { answer: "Have you got a red car?", type: "true" },
      { answer: "Have got a red car you?", type: "false" },
      { answer: "Have you a red car got?", type: "false" },
      { answer: "A red car have you got?", type: "false" },
      { answer: "Have a red you car got?", type: "false" },
    ],
  },
  {
    Question: "Complete the questions with superlative adjective. \nWhat was … successful European football club in the twentieth century?",
    answers: [
      { answer: "the most", type: "true" },
      { answer: "most", type: "false" },
      { answer: "more", type: "false" },
      { answer: "the successfulest", type: "false" },
      { answer: "successfulest", type: "false" },
    ],
  },
  {
    Question: "Choose the correct alternative. \nBut, I (….) got much money.",
    answers: [
      { answer: "haven’t", type: "true" },
      { answer: "didn’t", type: "false" },
      { answer: "don’t", type: "false" },
      { answer: "am not", type: "false" },
      { answer: "isn’t", type: "false" },
    ],
  },
  {
    Question: "Choose the correct alternative. \nWell. (….) go to the cinema.",
    answers: [
      { answer: "Let’s", type: "true" },
      { answer: "Do", type: "false" },
      { answer: "Come", type: "false" },
      { answer: "Do we", type: "false" },
      { answer: "Go", type: "false" },
    ],
  },
  {
    Question: "Choose the correct alternative. \n( ….) a new film by Antony Smit.",
    answers: [
      { answer: "There’s", type: "true" },
      { answer: "It’s got", type: "false" },
      { answer: "There are", type: "false" },
      { answer: "There were", type: "false" },
      { answer: "There have", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nThat’s (…) good idea.",
    answers: [
      { answer: "a", type: "false" },
      { answer: "the", type: "false" },
      { answer: "an", type: "true" },
      { answer: "(_)", type: "false" },
      { answer: "no", type: "false" },
    ],
  },
  {
    Question: "Choose the synonym of the word “DURING”",
    answers: [
      { answer: "while", type: "true" },
      { answer: "sometimes", type: "false" },
      { answer: "never", type: "false" },
      { answer: "often", type: "false" },
      { answer: "usually", type: "false" },
    ],
  },
  {
    Question: "Choose the synonym of the word “FINISH”.",
    answers: [
      { answer: "end", type: "true" },
      { answer: "start", type: "false" },
      { answer: "stop", type: "false" },
      { answer: "spoke", type: "false" },
      { answer: "graduate", type: "false" },
    ],
  },
  {
    Question: "Choose the synonym of the word “PERHAPS”.",
    answers: [
      { answer: "maybe", type: "true" },
      { answer: "suddenly", type: "false" },
      { answer: "of course", type: "false" },
      { answer: "at first", type: "false" },
      { answer: "immediately", type: "false" },
    ],
  },
  {
    Question: "Make the sentence negative. I heard the telephone.",
    answers: [
      { answer: "I didn’t hear the telephone.", type: "true" },
      { answer: "I haven’t hear the telephone.", type: "false" },
      { answer: "I didn’t heard the telephone.", type: "false" },
      { answer: "I wasn’t hear the telephone.", type: "false" },
      { answer: "I haven’t heard the telephone.", type: "false" },
    ],
  },
  {
    Question: "Choose the sentence logically correct ending. \nHow lucky that (…).",
    answers: [
      { answer: "we have met again", type: "true" },
      { answer: "you are ill", type: "false" },
      { answer: "you have broken your leg", type: "false" },
      { answer: "you have lost your money", type: "false" },
      { answer: "you haven’t won the match", type: "false" },
    ],
  },
  {
    Question: "Choose the logically correct sentence. \nI am a stranger here (…).",
    answers: [
      { answer: "it is my first visit to this place.", type: "true" },
      { answer: "I have always lived here.", type: "false" },
      { answer: "I lived in this house.", type: "false" },
      { answer: "I have been here many times.", type: "false" },
      { answer: "I was born here.", type: "false" },
    ],
  },
  {
    Question: "Choose the correct interrogative sentence.",
    answers: [
      { answer: "Where can one obtain a ticket for an underground journey from?", type: "true" },
      { answer: "Where can one obtain a ticket for a underground journey from?", type: "false" },
      { answer: "Where can one obtain a ticket for an underground journey with?", type: "false" },
      { answer: "Where one can obtain the ticket for an underground journey from?", type: "false" },
      { answer: "What can one obtain a ticket for an underground journey from?", type: "false" },
    ],
  },
  {
    Question: "Choose the correct question to the part of the sentence underlined. \nA TERRIBLE accident took place late at night.",
    answers: [
      { answer: "What accident took place late at night?", type: "true" },
      { answer: "What kind of accident did take place late at night?", type: "false" },
      { answer: "What took place late at night?", type: "false" },
      { answer: "What did take place late at night?", type: "false" },
      { answer: "What accident did take place late at night?", type: "false" },
    ],
  },
  {
    Question: "Choose the correct word: \nHe has got (…) money, so he can’t go shopping.",
    answers: [
      { answer: "little", type: "true" },
      { answer: "a little", type: "false" },
      { answer: "some", type: "false" },
      { answer: "few", type: "false" },
      { answer: "a few", type: "false" },
    ],
  },
  {
    Question: "Choose the correct articles. \nI like … stories with (…) happy end.",
    answers: [
      { answer: "(-), a", type: "true" },
      { answer: "a, a", type: "false" },
      { answer: "a, the", type: "false" },
      { answer: "(-), an", type: "false" },
      { answer: "the, an", type: "false" },
    ],
  },
  {
    Question: "Choose the personal pronouns. \n(…) knows English well.",
    answers: [
      { answer: "he", type: "true" },
      { answer: "you", type: "false" },
      { answer: "I", type: "false" },
      { answer: "they", type: "false" },
      { answer: "we", type: "false" },
    ],
  },
  {
    Question: "Choose the preposition. \nHis office is (…) the second floor (…) the building.",
    answers: [
      { answer: "on, of", type: "false" },
      { answer: "in, of", type: "false" },
      { answer: "from, in", type: "false" },
      { answer: "at, of", type: "false" },
      { answer: "on, in", type: "true" },
    ],
  },
  {
    Question: "Choose the correct prepositions. \nJack decided to go (…) the airport (…) helicopter and not (…) his car.",
    answers: [
      { answer: "to, by, in,", type: "true" },
      { answer: "to, by, by,", type: "false" },
      { answer: "to, in, by,", type: "false" },
      { answer: "to, in, in,", type: "false" },
      { answer: "to, on, on,", type: "false" },
    ],
  },
  {
    Question: "Choose the correct degree of the adjectives. \nWhich was (…) difficult subject you had at school?",
    answers: [
      { answer: "the most", type: "true" },
      { answer: "more", type: "false" },
      { answer: "most", type: "false" },
      { answer: "very much", type: "false" },
      { answer: "the more", type: "false" },
    ],
  },
  {
    Question: "Translate into Azerbaijani: \nScience is closely linked with all branches of industry and economy.",
    answers: [
      { answer: "Elm sənayenin və iqtisadiyyatın bütün sahələri ilə yaxından bağlıdır.", type: "true" },
      { answer: "Elm sənayenin, iqtisadiyyatın sahələri ilə bağlıdır.", type: "false" },
      { answer: "Elm sənaye və iqtisadiyyat ilə bağlı deyil.", type: "false" },
      { answer: "Elm sənaye və iqtisadiyyat ilə bağlı ola bilməz.", type: "false" },
      { answer: "Elm təkcə iqtisadiyyat ilə deyil başqa sahələr ilə də bağlıdır.", type: "false" },
    ],
  },
  {
    Question: "Choose the correct article: \nOnce (…) Englishman was travelling in (…) France.",
    answers: [
      { answer: "an; (...)", type: "true" },
      { answer: "the; the", type: "false" },
      { answer: "a; an", type: "false" },
      { answer: "(...); the", type: "false" },
      { answer: "an; the", type: "false" },
    ],
  },
  {
    "Question": "Choose the correct article: \nHe is (…) foreigner, he doesn’t know (……) way to (……) station.",
    "answers": [
      { "answer": "a, the, the", "type": "true" },
      { "answer": "…, the, the", "type": "false" },
      { "answer": "an, a, the", "type": "false" },
      { "answer": "a, an, the", "type": "false" },
      { "answer": "(…), (...), an", "type": "false" }
    ]
  },
  {
    "Question": "Translate into English: Yüksək inkişaf etmiş ölkələr.",
    "answers": [
      { "answer": "Highly developed countries.", "type": "true" },
      { "answer": "High developed countries.", "type": "false" },
      { "answer": "The countries developed very high.", "type": "false" },
      { "answer": "The countries who are high developed.", "type": "false" },
      { "answer": "Highly developing countries.", "type": "false" }
    ]
  },
  {
    "Question": "Put articles where necessary: \nHe is (...) good musician, he plays (…) piano.",
    "answers": [
      { "answer": "a, the", "type": "true" },
      { "answer": "the, a", "type": "false" },
      { "answer": "the, the", "type": "false" },
      { "answer": "the, an", "type": "false" },
      { "answer": "an, a", "type": "false" }
    ]
  },
  {
    "Question": "Put articles where necessary: \nWe often go to (...) National library of Azerbaijan to read up for (...) exams.",
    "answers": [
      { "answer": "the, the", "type": "true" },
      { "answer": "an, the", "type": "false" },
      { "answer": "a, the", "type": "false" },
      { "answer": "the, a", "type": "false" },
      { "answer": "a, an", "type": "false" }
    ]
  },
  {
    "Question": "Put prepositions where necessary: \nWe arrived (…) Italy and decided to rent a house (…) the seaside.",
    "answers": [
      { "answer": "in, at", "type": "true" },
      { "answer": "to, on", "type": "false" },
      { "answer": "to, from", "type": "false" },
      { "answer": "to, under", "type": "false" },
      { "answer": "of, to", "type": "false" }
    ]
  },
  {
    "Question": "Put correct pronouns: \nWe often visit ( ……) friends and they also come to (…..) place at the weekends.",
    "answers": [
      { "answer": "our, our", "type": "true" },
      { "answer": "her, mine", "type": "false" },
      { "answer": "my, hers", "type": "false" },
      { "answer": "mine, hers", "type": "false" },
      { "answer": "my, her", "type": "false" }
    ]
  },
  {
    "Question": "Choose the correct answer: \n- Is James English? - Yes, (___). He is from Manchester.",
    "answers": [
      { "answer": "he is", "type": "true" },
      { "answer": "he isn’t", "type": "false" },
      { "answer": "he doesn’t", "type": "false" },
      { "answer": "he didn’t", "type": "false" },
      { "answer": "he can’t", "type": "false" }
    ]
  },
  {
    "Question": "Choose the correct answer: \n- Is Barbara married? \n- Yes, (___). Her husband a doctor.",
    "answers": [
      { "answer": "she is", "type": "true" },
      { "answer": "she isn’t", "type": "false" },
      { "answer": "she doesn’t", "type": "false" },
      { "answer": "she didn’t", "type": "false" },
      { "answer": "she can’t", "type": "false" }
    ]
  },
  {
    "Question": "Choose the correct answer: \n- Is Barbara a teacher? \n- No, (...). She is a student.",
    "answers": [
      { "answer": "she isn’t", "type": "true" },
      { "answer": "she is", "type": "false" },
      { "answer": "she does", "type": "false" },
      { "answer": "she don’t", "type": "false" },
      { "answer": "she can", "type": "false" }
    ]
  },
  {
    "Question": "Complete the questions: \n1. What’s your (…)? \n2. Where are you (…)? \n3. Are you here on (...)? \n4. How old are (...)?",
    "answers": [
      { "answer": "1-c, 2-a, 3-b, 4-d", "type": "true" },
      { "answer": "1-a, 2-c, 3-d, 4-b", "type": "false" },
      { "answer": "1-b, 2-c, 3-d, 4-a", "type": "false" },
      { "answer": "1-d, 2-c, 3-a, 4-b", "type": "false" },
      { "answer": "1-c, 2-d, 3-a, 4-b", "type": "false" }
    ]
  },
  {
    "Question": "Choose the correct variant: \nHelen (…) husband (…) an actor.",
    "answers": [
      { "answer": "’s / is", "type": "true" },
      { "answer": "has /’s", "type": "false" },
      { "answer": "is /’s", "type": "false" },
      { "answer": "‘s /has", "type": "false" },
      { "answer": "has /’s", "type": "false" }
    ]
  },
  {
    "Question": "Choose the correct variant: \nWe work (___) eight (___ ) twelve ( ___ ) the morning.",
    "answers": [
      { "answer": "from /to /in", "type": "true" },
      { "answer": "at /to /in", "type": "false" },
      { "answer": "in /at /in", "type": "false" },
      { "answer": "from /at /at", "type": "false" },
      { "answer": "at /at /on", "type": "false" }
    ]
  },
  {
    "Question": "Choose the correct variant: \nShe is … student.",
    "answers": [
      { "answer": "a", "type": "false" },
      { "answer": "the", "type": "false" },
      { "answer": "an", "type": "true" },
      { "answer": "of", "type": "false" },
      { "answer": "at", "type": "false" }
    ]
  },
  {
    "Question": "Choose the correct variant: \nHave they got (___) keys (__) the bag?",
    "answers": [
      { "answer": "their /in", "type": "true" },
      { "answer": "the / into", "type": "false" },
      { "answer": "a / on", "type": "false" },
      { "answer": "( -- ) /with", "type": "false" },
      { "answer": "my / from", "type": "false" }
    ]
  },
  {
    "Question": "Fill in gap with correct word. \nMost office workers (____) at about nine o’clock in the morning.",
    "answers": [
      { "answer": "go to work", "type": "true" },
      { "answer": "go home", "type": "false" },
      { "answer": "write", "type": "false" },
      { "answer": "finish", "type": "false" },
      { "answer": "arrive", "type": "false" }
    ]
  },
  {
    "Question": "Fill in gap with correct word. \nShops (…) at about nine o’clock in the morning and (…) at about six o’clock in the evening.",
    "answers": [
      { "answer": "open, close", "type": "true" },
      { "answer": "start, finish", "type": "false" },
      { "answer": "close, open", "type": "false" },
      { "answer": "open, finish", "type": "false" },
      { "answer": "get started, stop", "type": "false" }
    ]
  },
  {
    "Question": "Match the opposites: \na. start \nb. open \nc. go to work \n\n1) close \n2) finish \n3) go home",
    "answers": [
      { "answer": "A-2, b-1, c-3", "type": "true" },
      { "answer": "A-1, b-2, c-3", "type": "false" },
      { "answer": "A-3, b-2, c-1", "type": "false" },
      { "answer": "A-2, b-3, c-1", "type": "false" },
      { "answer": "A-3, b-2, c-1", "type": "false" }
    ]
  },
  {
    "Question": "Match the opposites: \nA. have breakfast \nb. get up \nc. work \n1. go to bed \n2. study \n3. have lunch",
    "answers": [
      { "answer": "a-3, b-1, c-2", "type": "true" },
      { "answer": "a-2, b-3, c-1", "type": "false" },
      { "answer": "a-1, b-2, c-3", "type": "false" },
      { "answer": "a-3, b-2, c-1", "type": "false" },
      { "answer": "a-1, b-3, c-2", "type": "false" }
    ]
  },
  {
    "Question": "Match the opposites: \na. eat \nb. read a book \nc. in the morning \n1. in the evening \n2. watch TV \n3. drink",
    "answers": [
      { "answer": "a-3, b-2, c-1", "type": "false" },
      { "answer": "a-1, b-2, c-3", "type": "false" },
      { "answer": "a-2, b-1, c-3", "type": "false" },
      { "answer": "a-3, b-1, c-2", "type": "false" },
      { "answer": "a-2, b-3, c-1", "type": "true" }
    ]
  },
  {
    "Question": "Choose the correct variant: \nMost people (…) in houses.",
    "answers": [
      { "answer": "live", "type": "true" },
      { "answer": "doesn’t live", "type": "false" },
      { "answer": "move", "type": "false" },
      { "answer": "doesn’t stay", "type": "false" },
      { "answer": "get", "type": "false" }
    ]
  },
  {
    "Question": "Choose the correct variant: \nWhat time do children go to school?",
    "answers": [
      { "answer": "Children go to school at about 9 o’clock.", "type": "true" },
      { "answer": "Children finish school at about half past three.", "type": "false" },
      { "answer": "Workers go to work at about 9 o’clock.", "type": "false" },
      { "answer": "Children start school when they are four or five.", "type": "false" },
      { "answer": "Children leave school when they are 16 or 18.", "type": "false" }
    ]
  },
  {
    Question: "How do you say the following time? “9:55”",
    answers: [
      { answer: "five to ten", type: "true" },
      { answer: "five past nine", type: "false" },
      { answer: "five to nine", type: "false" },
      { answer: "five past ten", type: "false" },
      { answer: "quarter to ten", type: "false" },
    ],
  },
  {
    Question: "How do you say the following time? “2:45”",
    answers: [
      { answer: "quarter to three", type: "true" },
      { answer: "quarter to two", type: "false" },
      { answer: "quarter past two", type: "false" },
      { answer: "forty to two", type: "false" },
      { answer: "fifteen to two", type: "false" },
    ],
  },
  {
    Question: "How do you say the following time? “12:05”",
    answers: [
      { answer: "five past twelve", type: "true" },
      { answer: "five to twelve", type: "false" },
      { answer: "five past one", type: "false" },
      { answer: "five to one", type: "false" },
      { answer: "quarter past twelve", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nWhere (…) she come from?",
    answers: [
      { answer: "does", type: "true" },
      { answer: "are", type: "false" },
      { answer: "has", type: "false" },
      { answer: "had", type: "false" },
      { answer: "got", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \n(__) she here with her family?",
    answers: [
      { answer: "is", type: "true" },
      { answer: "are", type: "false" },
      { answer: "have", type: "false" },
      { answer: "has", type: "false" },
      { answer: "were", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \n(…) she work in your country?",
    answers: [
      { answer: "does", type: "true" },
      { answer: "are", type: "false" },
      { answer: "is", type: "false" },
      { answer: "were", type: "false" },
      { answer: "has", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \n(…) he like the weather and the food?",
    answers: [
      { answer: "does", type: "true" },
      { answer: "were", type: "false" },
      { answer: "has", type: "false" },
      { answer: "is", type: "false" },
      { answer: "was", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nShe (…) from Japan.",
    answers: [
      { answer: "comes", type: "true" },
      { answer: "plays", type: "false" },
      { answer: "weren’t", type: "false" },
      { answer: "were", type: "false" },
      { answer: "got", type: "false" },
    ],
  },
  {
    Question: "Make the sentence negative. \nMaria likes studying grammar.",
    answers: [
      { answer: "Maria doesn’t like studying grammar.", type: "true" },
      { answer: "Maria did love studying grammar.", type: "false" },
      { answer: "Maria haven’t studying grammar.", type: "false" },
      { answer: "Maria hadn’t studying grammar.", type: "false" },
      { answer: "Maria did like studying grammar.", type: "false" },
    ],
  },
  {
    Question: "Give short answer. \nDoes David come from USA?",
    answers: [
      { answer: "Yes, he does.", type: "true" },
      { answer: "Yes, he did.", type: "false" },
      { answer: "Yes, he had.", type: "false" },
      { answer: "Yes, he has.", type: "false" },
      { answer: "Yes, he have.", type: "false" },
    ],
  },
  {
    Question: "Give short answer. \nDoes she study economics?",
    answers: [
      { answer: "No, she doesn’t", type: "true" },
      { answer: "No, she didn’t", type: "false" },
      { answer: "No, she hasn’t", type: "false" },
      { answer: "No, she hadn’t", type: "false" },
      { answer: "No, she wasn’t", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. I like (…).",
    answers: [
      { answer: "flying", type: "true" },
      { answer: "to playing", type: "false" },
      { answer: "go", type: "false" },
      { answer: "went", type: "false" },
      { answer: "fly", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nMalcolm Tracey (___) to work.",
    answers: [
      { answer: "doesn’t go", type: "true" },
      { answer: "aren’t go", type: "false" },
      { answer: "isn’t go", type: "false" },
      { answer: "wasn’t go", type: "false" },
      { answer: "weren’t go", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nWhen does Alan (…) lunch?",
    answers: [
      { answer: "have", type: "true" },
      { answer: "has", type: "false" },
      { answer: "can", type: "false" },
      { answer: "did", type: "false" },
      { answer: "will", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: \nBanks (…) at 9:30 in Britain.",
    answers: [
      { answer: "open", type: "true" },
      { answer: "studies", type: "false" },
      { answer: "does", type: "false" },
      { answer: "often", type: "false" },
      { answer: "hasn’t", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nA lot of people (____) bicycles in the Netherlands.",
    answers: [
      { answer: "ride", type: "true" },
      { answer: "do", type: "false" },
      { answer: "can’t", type: "false" },
      { answer: "fly", type: "false" },
      { answer: "play", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nBaku …… often nicknamed the 'City of Winds' because of the harsh winds that blow through this city.",
    answers: [
      { answer: "is", type: "true" },
      { answer: "was", type: "false" },
      { answer: "were", type: "false" },
      { answer: "are", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nMy cousin’s father is my (___).",
    answers: [
      { answer: "uncle", type: "true" },
      { answer: "grandfather", type: "false" },
      { answer: "brother", type: "false" },
      { answer: "father-in-law", type: "false" },
      { answer: "widower", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nLiam is two (___) old.",
    answers: [
      { answer: "years", type: "true" },
      { answer: "candy", type: "false" },
      { answer: "has", type: "false" },
      { answer: "works", type: "false" },
      { answer: "open", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nThis (___) hasn’t got many animals.",
    answers: [
      { answer: "zoo", type: "true" },
      { answer: "school", type: "false" },
      { answer: "post office", type: "false" },
      { answer: "hospital", type: "false" },
      { answer: "sweet shop", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nI’m sorry. I don’t (___) your name.",
    answers: [
      { answer: "know", type: "true" },
      { answer: "learn", type: "false" },
      { answer: "eat", type: "false" },
      { answer: "smell", type: "false" },
      { answer: "wait", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nLyudmila (___) at university.",
    answers: [
      { answer: "studies", type: "true" },
      { answer: "wait", type: "false" },
      { answer: "know", type: "false" },
      { answer: "often", type: "false" },
      { answer: "can", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: \n(___) is the first train in the morning?",
    answers: [
      { answer: "What time", type: "true" },
      { answer: "Where", type: "false" },
      { answer: "Why", type: "false" },
      { answer: "What", type: "false" },
      { answer: "How", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nThey gave me _____ for my collection.",
    answers: [
      { answer: "some old books", type: "true" },
      { answer: "an old books", type: "false" },
      { answer: "some old book", type: "false" },
      { answer: "book old some", type: "false" },
      { answer: "books an old", type: "false" },
    ],
  },
  {
    Question: "Put the words in the correct order to make sentences. \n1 some \n2 in \n3 the \n4 there \n5 are \n6 classroom \n7 plants",
    answers: [
      { answer: "4,5,1,7,2,3,6", type: "true" },
      { answer: "5,7,4,6,3,2,1", type: "false" },
      { answer: "7,3,4,1,2,4,6", type: "false" },
      { answer: "3,7,1,5,4,6,2", type: "false" },
      { answer: "2,4,5,1,6,7,3", type: "false" },
    ],
  },
  {
    Question: "Choose the line of nouns in the plural:",
    answers: [
      { answer: "gentry, goods, exams, cattle", type: "true" },
      { answer: "cattle, physics, X pets, passers-by", type: "false" },
      { answer: "deer, news, trousers, roads", type: "false" },
      { answer: "dominoes, greens, wages", type: "false" },
      { answer: "parks, gentlemen, clothes, music", type: "false" },
    ],
  },
  {
    Question: "There is (some) milk in the fridge.",
    answers: [
      { answer: "How much milk is there in the fridge?", type: "true" },
      { answer: "How many milk is there in the fridge?", type: "false" },
      { answer: "How milk is there in the fridge?", type: "false" },
      { answer: "What kind of milk is there in the fridge?", type: "false" },
      { answer: "How much milk was there in the fridge?", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nDon't drink (.....) juice between meals.",
    answers: [
      { answer: "any", type: "true" },
      { answer: "some", type: "false" },
      { answer: "no", type: "false" },
      { answer: "many", type: "false" },
      { answer: "something", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nHave (......) orange juice with your breakfast.",
    answers: [
      { answer: "some", type: "true" },
      { answer: "any", type: "false" },
      { answer: "something", type: "false" },
      { answer: "many", type: "false" },
      { answer: "nothing", type: "false" },
    ],
  },
  {
    Question: "Translate the following word. \nQardaşınızınneçə yaşı var? Сколько лет вашему брату?",
    answers: [
      { answer: "How old is your brother?", type: "true" },
      { answer: "How much is your brother?", type: "false" },
      { answer: "How many years has your brother?", type: "false" },
      { answer: "How is your brother?", type: "false" },
      { answer: "How old has your brother?", type: "false" },
    ],
  },
  {
    Question: "Which word means (usually hot, liquid food made from vegetables, meat or fish)?",
    answers: [
      { answer: "soup", type: "true" },
      { answer: "toast", type: "false" },
      { answer: "hamburger", type: "false" },
      { answer: "porridge", type: "false" },
      { answer: "grilled fish", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nHow many (.....).",
    answers: [
      { answer: "... cups of coffee do you drink everyday?", type: "true" },
      { answer: "... water do you drink every day?", type: "false" },
      { answer: "... oil and butter do you eat with your food?", type: "false" },
      { answer: "... pasta do you have every day?", type: "false" },
      { answer: "... red meat do you eat every week?", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: \nMy mother’s son is ( …...)",
    answers: [
      { answer: "brother", type: "true" },
      { answer: "son", type: "false" },
      { answer: "step-brother", type: "false" },
      { answer: "uncle", type: "false" },
      { answer: "cousin", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nI haven’t got ( ...) money with me. Give me (...)",
    answers: [
      { answer: "any, some", type: "true" },
      { answer: "something, some", type: "false" },
      { answer: "nothing, any", type: "false" },
      { answer: "no, any", type: "false" },
      { answer: "some, some", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nThere isn’t (...) bread at home. Go and buy ( ...)",
    answers: [
      { answer: "any, some", type: "true" },
      { answer: "some, any", type: "false" },
      { answer: "nothing, any", type: "false" },
      { answer: "something, no", type: "false" },
      { answer: "no, any", type: "false" },
    ],
  },
  {
    Question: "Put the words in the correct order to make sentences. \n1 Miami \n2 The journey \n3 six \n4 takes \n5 from \n6 to London \n7 hours \n8 about",
    answers: [
      { answer: "2,5,1,6,4,8,3,7", type: "false" },
      { answer: "5,1,6,4,8,7,3,2", type: "false" },
      { answer: "6,2,5,8,1,7,4,3", type: "false" },
      { answer: "8,2,5,1,6,7,3,4", type: "false" },
      { answer: "4,2,6,1,7,4,3,8", type: "true" },
    ],
  },
  {
    Question: "Choose the correct sentence.",
    answers: [
      { answer: "Everybody says that vegetables are very good for you.", type: "true" },
      { answer: "Everybody says are very good for you vegetables that.", type: "false" },
      { answer: "That everybody says for you vegetables are very good.", type: "false" },
      { answer: "That vegetables everybody says very good for are you.", type: "false" },
      { answer: "Everybody good says that vegetables very good are for you.", type: "false" },
    ],
  },
  {
    Question: "Complete the gaps with the correct form of the verb. \nI  (…) marred last year.",
    answers: [
      { answer: "got", type: "true" },
      { answer: "will get", type: "false" },
      { answer: "gets", type: "false" },
      { answer: "didn’t got", type: "false" },
      { answer: "shall get", type: "false" },
    ],
  },
  {
    Question: "Complete the gaps with the correct form of the verb. \nI (.…) to the college last year.",
    answers: [
      { answer: "went", type: "true" },
      { answer: "don’t go", type: "false" },
      { answer: "shall go", type: "false" },
      { answer: "goes", type: "false" },
      { answer: "going", type: "false" },
    ],
  },
  {
    Question: "Complete the gaps with the correct form of the verb. \nI (….) a new job last week.",
    answers: [
      { answer: "started", type: "true" },
      { answer: "starts", type: "false" },
      { answer: "shall start", type: "false" },
      { answer: "have started", type: "false" },
      { answer: "will start", type: "false" },
    ],
  },
  {
    Question: "Complete the sentences. \nI’d like (…………) water,please.",
    answers: [
      { answer: "some", type: "true" },
      { answer: "any", type: "false" },
      { answer: "a", type: "false" },
      { answer: "same", type: "false" },
      { answer: "many", type: "false" },
    ],
  },
  {
    Question: "Complete the sentences. \nI am sorry but there isn’t (….) milk in the bottle.",
    answers: [
      { answer: "any", type: "true" },
      { answer: "some", type: "false" },
      { answer: "a", type: "false" },
      { answer: "same", type: "false" },
      { answer: "many", type: "false" },
    ],
  },
  {
    Question: "Complete the sentences. \nAre there (...) films on TV tonight?",
    answers: [
      { answer: "any", type: "true" },
      { answer: "same", type: "false" },
      { answer: "some", type: "false" },
      { answer: "a", type: "false" },
      { answer: "much", type: "false" },
    ],
  },
  {
    Question: "Choose the correct form. \nAre there (...) Mexican students in your class?",
    answers: [
      { answer: "any", type: "true" },
      { answer: "same", type: "false" },
      { answer: "some", type: "false" },
      { answer: "come", type: "false" },
      { answer: "much", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nThere (...)  a lot of restaurants in the city.",
    answers: [
      { answer: "are", type: "true" },
      { answer: "is", type: "false" },
      { answer: "any", type: "false" },
      { answer: "some", type: "false" },
      { answer: "same", type: "false" },
    ],
  },
  {
    Question: "Choose the correct interrogative sentences.",
    answers: [
      { answer: "Is there any water in the bottle?", type: "true" },
      { answer: "Are there some films on TV tonight?", type: "false" },
      { answer: "Is there a trams in your city?", type: "false" },
      { answer: "Would you like anysome coffee?", type: "false" },
      { answer: "Are there a book on the table?", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nMy friend is (___) of all the children in the class.",
    answers: [
      { answer: "the most active", type: "true" },
      { answer: "most active", type: "false" },
      { answer: "the more active", type: "false" },
      { answer: "active", type: "false" },
      { answer: "more active", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nApple trees …… in May.",
    answers: [
      { answer: "blooms", type: "false" },
      { answer: "will blooming", type: "false" },
      { answer: "bloomed", type: "false" },
      { answer: "is blooming", type: "false" },
      { answer: "bloom", type: "true" },
    ],
  },
  {
    Question: "Choose the correct variant. \nProverbs ……..wise sayings that can provide you with answers to several questions about life.",
    answers: [
      { answer: "are", type: "true" },
      { answer: "was", type: "false" },
      { answer: "were", type: "false" },
      { answer: "is", type: "false" },
      { answer: "had", type: "false" },
    ],
  },
  {
    Question: "Choose the correct form. \nWhich is (……), watching a DVD or going to the cinema?",
    answers: [
      { answer: "better", type: "true" },
      { answer: "the best", type: "false" },
      { answer: "bad", type: "false" },
      { answer: "gooder", type: "false" },
      { answer: "the worst", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nThe (___) month of the year is December.",
    answers: [
      { answer: "busiest", type: "true" },
      { answer: "busy", type: "false" },
      { answer: "most busy", type: "false" },
      { answer: "busier", type: "false" },
      { answer: "more busy", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nThe Jubilee Diamond is (_____) diamond in the world.",
    answers: [
      { answer: "the biggest", type: "true" },
      { answer: "biggest", type: "false" },
      { answer: "More bigger", type: "false" },
      { answer: "much biggest", type: "false" },
      { answer: "Most biggest", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nWho were (___) group in the twentieth century?",
    answers: [
      { answer: "the most popular", type: "true" },
      { answer: "the most popularest", type: "false" },
      { answer: "more popular", type: "false" },
      { answer: "The more popularest", type: "false" },
      { answer: "popular", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nThe Ferrari Enzo is (___) expensive car in the world.",
    answers: [
      { answer: "the most", type: "true" },
      { answer: "more", type: "false" },
      { answer: "The more", type: "false" },
      { answer: "most", type: "false" },
      { answer: "The more", type: "false" },
    ],
  },
  {
    Question: "Make the sentence negative. \nWe went for a drive yesterday.",
    answers: [
      { answer: "We didn’t go for a drive yesterday.", type: "true" },
      { answer: "We didn’t went for a drive yesterday.", type: "false" },
      { answer: "We weren’t go for a drive yesterday.", type: "false" },
      { answer: "We hadn’t go for a drive yesterday.", type: "false" },
      { answer: "We hadn’t went yesterday.", type: "false" },
    ],
  },
  {
    Question: "Make the sentence negative. \nAmanda knew what to do.",
    answers: [
      { answer: "Amanda didn’t know what to do.", type: "true" },
      { answer: "Amanda isn’t know what to do.", type: "false" },
      { answer: "Amanda didn’t knew what to do.", type: "false" },
      { answer: "Amanda hasn’t know what to do.", type: "false" },
      { answer: "Amanda am not know what to do.", type: "false" },
    ],
  },
  {
    Question: "Make the sentence negative. \nThe letter arrived yesterday morning.",
    answers: [
      { answer: "The letter didn’t arrive yesterday morning.", type: "true" },
      { answer: "The letter wasn’t arrive yesterday morning.", type: "false" },
      { answer: "The letter hasn’t arrived yesterday morning.", type: "false" },
      { answer: "The letter isn’t arrived yesterday morning.", type: "false" },
      { answer: "The letter weren’t arrive yesterday morning.", type: "false" },
    ],
  },
  {
    Question: "Write the following verbs in the Past Simple. \nMake, give, drink",
    answers: [
      { answer: "made, gave, drank", type: "true" },
      { answer: "made, given, drank", type: "false" },
      { answer: "made, gave, drunk", type: "false" },
      { answer: "made, gived, drinked", type: "false" },
      { answer: "making, gave, drunk", type: "false" },
    ],
  },
  {
    Question: "Write the following verbs in the Past Simple. \nBecome, find, go.",
    answers: [
      { answer: "became, found, went", type: "true" },
      { answer: "was, found, gone", type: "false" },
      { answer: "became, finded, went", type: "false" },
      { answer: "become, found, going", type: "false" },
      { answer: "becoming, found, went", type: "false" },
    ],
  },
  {
    Question: "Write the following verbs in the Past Simple. \nWrite, sing, play.",
    answers: [
      { answer: "wrote, sang, played", type: "true" },
      { answer: "written, sung, playing", type: "false" },
      { answer: "wrote, singed, played", type: "false" },
      { answer: "written, sung, play", type: "false" },
      { answer: "write, sang, played", type: "false" },
    ],
  },
  {
    Question: "Write the following verbs in the Past Simple. \nEat, know, hear.",
    answers: [
      { answer: "ate, knew, heard", type: "true" },
      { answer: "ate, known, hearing", type: "false" },
      { answer: "eaten, known, heard", type: "false" },
      { answer: "eat, known, heard", type: "false" },
      { answer: "eating, know, heard", type: "false" },
    ],
  },
  {
    Question: "Choose the antonym of the word remember.",
    answers: [
      { answer: "forget", type: "true" },
      { answer: "forgive", type: "false" },
      { answer: "arrive", type: "false" },
      { answer: "forbid", type: "false" },
      { answer: "never", type: "false" },
    ],
  },
  {
    Question: "Choose the correct form of the verb. \nI _____ to work by car, but today I'm going by bus.",
    answers: [
      { answer: "usually go", type: "true" },
      { answer: "’m usually going", type: "false" },
      { answer: "usually going", type: "false" },
      { answer: "usually goes", type: "false" },
      { answer: "usually went", type: "false" },
    ],
  },
  {
    Question: "Choose the correct form of the verb. \nI (…..) asleep somewhere in the north of France.",
    answers: [
      { answer: "fell", type: "true" },
      { answer: "felling", type: "false" },
      { answer: "was fell", type: "false" },
      { answer: "am feeling", type: "false" },
      { answer: "felt", type: "false" },
    ],
  },
  {
    Question: "Choose the correct pronouns: \nMy name is Sonya and these are (___) parents.",
    answers: [
      { answer: "my", type: "true" },
      { answer: "hers", type: "false" },
      { answer: "her", type: "false" },
      { answer: "mine", type: "false" },
      { answer: "your", type: "false" },
    ],
  },
  {
    Question: "Choose the correct prepositions. \nIn summer we usually go (____) the beach and lie (___) the Sun.",
    answers: [
      { answer: "to, in", type: "true" },
      { answer: "under, to", type: "false" },
      { answer: "from, under", type: "false" },
      { answer: "for, with", type: "false" },
      { answer: "to, on", type: "false" },
    ],
  },
  {
    Question: "Choose the correct prepositions. \nI stayed (___) my uncle’s when I was (___) Baku.",
    answers: [
      { answer: "at, in", type: "true" },
      { answer: "for, to", type: "false" },
      { answer: "at, to", type: "false" },
      { answer: "with, in", type: "false" },
      { answer: "on, to", type: "false" },
    ],
  },
  {
    Question: "Choose the correct prepositions. \nIt is difficult (___) me to translate (___) Azeri (___) English.",
    answers: [
      { answer: "for, from, into", type: "true" },
      { answer: "to, into, to", type: "false" },
      { answer: "to, under, from", type: "false" },
      { answer: "to, into, at", type: "false" },
      { answer: "from, in, for", type: "false" },
    ],
  },
  {
    Question: "Choose the correct preposition: \nCould you wait (_____) me downstairs?",
    answers: [
      { answer: "for", type: "true" },
      { answer: "at", type: "false" },
      { answer: "with", type: "false" },
      { answer: "against", type: "false" },
      { answer: "in", type: "false" },
    ],
  },
  {
    Question: "Choose the correct preposition. \nThe train will arrive ( ____) the station in time.",
    answers: [
      { answer: "at", type: "true" },
      { answer: "in", type: "false" },
      { answer: "into", type: "false" },
      { answer: "out of", type: "false" },
      { answer: "under", type: "false" },
    ],
  },
  {
    Question: "Choose the correct translation: \nAzerbaijan is a southern country and it is really very hot here in summer.",
    answers: [
      { answer: "Azərbaycan cənub ölkəsidir və yay burada həqiqətən çox isti olur.", type: "true" },
      { answer: "Azərbaycan cənub ölkəsidir və buna görə də buranın yayı isti olur.", type: "false" },
      { answer: "Azərbaycan cənubda olduğu üçün bu ölkənin yayı çox isti keçir.", type: "false" },
      { answer: "Azərbaycan şərq ölkəsidir və yay burada həqiqətən çox isti olur.", type: "false" },
      { answer: "Azərbaycan şərq ölkəsidir və yay burada isti olur.", type: "false" },
    ],
  },
  {
    Question: "Choose the correct possessive adjectives. \nAnn writes (____) notes in (____) copy-book.",
    answers: [
      { answer: "her, her", type: "true" },
      { answer: "his, hers", type: "false" },
      { answer: "theirs, his", type: "false" },
      { answer: "mine, my", type: "false" },
      { answer: "yours, yours", type: "false" },
    ],
  },
  {
    Question: "Choose the correct articles: \n(__) Lake Baykal is (__) deepest on (__) Earth.",
    answers: [
      { answer: "( - ) , the, the", type: "true" },
      { answer: "( - ), ( - ), the", type: "false" },
      { answer: "the, the, the", type: "false" },
      { answer: "a, ( - ), the", type: "false" },
      { answer: "the, ( - ), the", type: "false" },
    ],
  },
  {
    Question: "Make up a sentence: \n1. we, \n2. at school, \n3. are.",
    answers: [
      { answer: "1, 3, 2", type: "false" },
      { answer: "1, 2, 3", type: "false" },
      { answer: "2, 1, 3", type: "false" },
      { answer: "2, 3, 1", type: "true" },
      { answer: "3, 2, 1", type: "false" },
    ],
  },
  {
    Question: "Make up a sentence: \n1. you, \n2. are, \n3. twenty one ?",
    answers: [
      { answer: "2, 1, 3", type: "false" },
      { answer: "1, 2, 3", type: "false" },
      { answer: "3, 1, 2", type: "false" },
      { answer: "3, 2, 1", type: "true" },
      { answer: "1, 3, 2", type: "false" },
    ],
  },
  {
    Question: "Make up sentence: \n1. from, \n2. is, \n3. Britain, \n4. your teacher  ?",
    answers: [
      { answer: "2, 4, 1, 3", type: "false" },
      { answer: "3, 2, 1, 4", type: "false" },
      { answer: "4, 3, 2, 1", type: "false" },
      { answer: "3, 1, 2, 1", type: "false" },
      { answer: "1, 2, 3, 4", type: "true" },
    ],
  },
  {
    Question: "Make up question: \n1. what, \n2. your, \n3. e-mail address, \n4. ‘s  ?",
    answers: [
      { answer: "1, 4, 2, 3", type: "true" },
      { answer: "1, 2, 3, 4", type: "false" },
      { answer: "3, 2, 1, 4", type: "false" },
      { answer: "4, 3, 2, 1", type: "false" },
      { answer: "2, 4, 3, 1", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nMy niece is my (_____).",
    answers: [
      { answer: "Brother’s daughter", type: "true" },
      { answer: "Uncle’s daughter", type: "false" },
      { answer: "Sister’s son", type: "false" },
      { answer: "Aunt’s sister", type: "false" },
      { answer: "Uncle’s sister", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nMy nephew is my (_______).",
    answers: [
      { answer: "Sister’s son", type: "true" },
      { answer: "Brother’s daughter", type: "false" },
      { answer: "Uncle’s son", type: "false" },
      { answer: "Aunt’s daughter", type: "false" },
      { answer: "Father’s brother", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nThis watch is (___) Switzerland.",
    answers: [
      { answer: "From", type: "true" },
      { answer: "Into", type: "false" },
      { answer: "At", type: "false" },
      { answer: "To", type: "false" },
      { answer: "On", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nJohn is a student (___) Cambridge university.",
    answers: [
      { answer: "At", type: "true" },
      { answer: "For", type: "false" },
      { answer: "On", type: "false" },
      { answer: "Out", type: "false" },
      { answer: "From", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nHave you got cable TV (____) home?",
    answers: [
      { answer: "At", type: "true" },
      { answer: "In", type: "false" },
      { answer: "For", type: "false" },
      { answer: "From", type: "false" },
      { answer: "With", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nMy friends (____) Britain are here (___) holiday.",
    answers: [
      { answer: "From/on", type: "true" },
      { answer: "In / for", type: "false" },
      { answer: "On / with", type: "false" },
      { answer: "From / at", type: "false" },
      { answer: "For / in", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nWe have got a cat (___) our family.",
    answers: [
      { answer: "in", type: "true" },
      { answer: "from", type: "false" },
      { answer: "with", type: "false" },
      { answer: "at", type: "false" },
      { answer: "on", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nWhat’s the answer (____) this question?",
    answers: [
      { answer: "to", type: "true" },
      { answer: "in", type: "false" },
      { answer: "for", type: "false" },
      { answer: "from", type: "false" },
      { answer: "with", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nMy sister (__) husband (____) a professional musician.",
    answers: [
      { answer: "‘s / is", type: "true" },
      { answer: "Is/has", type: "false" },
      { answer: "‘s/has", type: "false" },
      { answer: "Has/’s", type: "false" },
      { answer: "Is/is", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \n(____) (___) your keys over there.",
    answers: [
      { answer: "Those are", type: "true" },
      { answer: "This are", type: "false" },
      { answer: "These am", type: "false" },
      { answer: "That is", type: "false" },
      { answer: "Those is", type: "false" },
    ],
  },
  {
    Question: "How do you say the following time? 16:45",
    answers: [
      { answer: "Quarter to five", type: "true" },
      { answer: "Quarter past four", type: "false" },
      { answer: "Quarter to four", type: "false" },
      { answer: "Fifteen to five", type: "false" },
      { answer: "Fifteen to four", type: "false" },
    ],
  },
  {
    Question: "How do you say the following time? 8.30",
    answers: [
      { answer: "Half past eight", type: "true" },
      { answer: "Half past nine", type: "false" },
      { answer: "Half to eight", type: "false" },
      { answer: "Thirty past eight", type: "false" },
      { answer: "Thirty to nine", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nDo Ben and James (____) German?",
    answers: [
      { answer: "Speak", type: "true" },
      { answer: "Live", type: "false" },
      { answer: "Are", type: "false" },
      { answer: "Do", type: "false" },
      { answer: "Knows", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nDo all the students (____) law?",
    answers: [
      { answer: "Study", type: "true" },
      { answer: "Studying", type: "false" },
      { answer: "Studies", type: "false" },
      { answer: "Studied", type: "false" },
      { answer: "To study", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nDo you (____) long hours?",
    answers: [
      { answer: "Work", type: "true" },
      { answer: "Works", type: "false" },
      { answer: "Working", type: "false" },
      { answer: "To work", type: "false" },
      { answer: "Worked", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nA: - Do you go to the cinema a lot? \nB: - (……)",
    answers: [
      { answer: "No,I don’t.", type: "true" },
      { answer: "Yes,we don’t.", type: "false" },
      { answer: "No , you don’t.", type: "false" },
      { answer: "Yes, you do.", type: "false" },
      { answer: "Yes,she does.", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nA: - (……..) \nB: – Yes, I do.",
    answers: [
      { answer: "Do you work in an office?", type: "true" },
      { answer: "Do they drink tea ?", type: "false" },
      { answer: "Does she work long hours?", type: "false" },
      { answer: "Do we eat Italian food?", type: "false" },
      { answer: "Do I speak German?", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nI always (___) my friend Roger when I’m in London.",
    answers: [
      { answer: "visit", type: "true" },
      { answer: "mistake", type: "false" },
      { answer: "rain", type: "false" },
      { answer: "snow", type: "false" },
      { answer: "eat", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \n(___) he live in South Korea?",
    answers: [
      { answer: "Does", type: "true" },
      { answer: "Was", type: "false" },
      { answer: "Wasn’t", type: "false" },
      { answer: "Were", type: "false" },
      { answer: "Weren’t", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nMy mother (___) a historical novel.",
    answers: [
      { answer: "reads", type: "true" },
      { answer: "beats", type: "false" },
      { answer: "plays", type: "false" },
      { answer: "cooks", type: "false" },
      { answer: "teaches", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nTony (___) all his food at the supermarket.",
    answers: [
      { answer: "buys", type: "true" },
      { answer: "plays", type: "false" },
      { answer: "cooks", type: "false" },
      { answer: "teaches", type: "false" },
      { answer: "lives", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nWhen (___) you go on holiday?",
    answers: [
      { answer: "do", type: "true" },
      { answer: "does", type: "false" },
      { answer: "was", type: "false" },
      { answer: "were", type: "false" },
      { answer: "is", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nWhat (___) you do after lunch?",
    answers: [
      { answer: "do", type: "true" },
      { answer: "does", type: "false" },
      { answer: "is", type: "false" },
      { answer: "was", type: "false" },
      { answer: "were", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \n(___) he speak Chinese?",
    answers: [
      { answer: "Does", type: "true" },
      { answer: "Do", type: "false" },
      { answer: "Was", type: "false" },
      { answer: "Were", type: "false" },
      { answer: "Wasn’t", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \n(___) Akiko come from Japan?",
    answers: [
      { answer: "Does", type: "true" },
      { answer: "Do", type: "false" },
      { answer: "Is", type: "false" },
      { answer: "Was", type: "false" },
      { answer: "Were", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nAli (___) Hungarian, French and German.",
    answers: [
      { answer: "speaks", type: "true" },
      { answer: "plays", type: "false" },
      { answer: "drives", type: "false" },
      { answer: "cooks", type: "false" },
      { answer: "goes", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nIrene (___) like (___) the children to school.",
    answers: [
      { answer: "doesn’t, taking", type: "true" },
      { answer: "wasn’t to take", type: "false" },
      { answer: "is, take", type: "false" },
      { answer: "were, take", type: "false" },
      { answer: "was, takes", type: "false" },
    ],
  },
  {
    Question: "Find the correct translation: \n1. travel by train \n2. smoke in the subway \n3. eat on a train \n4. find a taxi easily \n5. bad traffic \na. qatarda yemək \nb. metroda siqaret çəkmək \nc. asan taksi tapmaq \nd. qatarla səyahət etmək \ne. tıxac",
    answers: [
      { answer: "1-d, 2-b, 3-a, 4-c, 5-e", type: "true" },
      { answer: "1-e, 2-a, 3-c, 4-b, 5-d", type: "false" },
      { answer: "1-a, 2-e, 3-c, 4-b, 5-d", type: "false" },
      { answer: "1-c, 2-a, 3-e, 4-b, 5-d", type: "false" },
      { answer: "1-b, 2-a, 3-c, 4-e, 5-d", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: \nWe’ve got (___) new car, he lives in (___) apartment in (___) big city.",
    answers: [
      { answer: "a, an, a", type: "true" },
      { answer: "the, a, an", type: "false" },
      { answer: "the, the, the", type: "false" },
      { answer: "an, the, an", type: "false" },
      { answer: "the, the, an", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence:",
    answers: [
      { answer: "1-a, 2-d, 3-c, 4-b, 5-e", type: "true" },
      { answer: "1-a, 2-b, 3-a, 4-c, 5-e", type: "false" },
      { answer: "1-b, 2-d, 3-a, 4-c, 5-e", type: "false" },
      { answer: "1-c, 2-b, 3-a, 4-d, 5-e", type: "false" },
      { answer: "1-e, 2-b, 3-a, 4-c, 5-d", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nHow much (................................)",
    answers: [
      { answer: "water do you drink every day?", type: "true" },
      { answer: "cups of coffee do you drink everybody?", type: "false" },
      { answer: "vegetables do you eat every day?", type: "false" },
      { answer: "sweets and biscuits do you eat every week?", type: "false" },
      { answer: "kilometres do you walk every day?", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nHow many (..........................)",
    answers: [
      { answer: "sweets and biscuits do you eat every week?", type: "true" },
      { answer: "rain is there in the Sahara desert every year", type: "false" },
      { answer: "blood there is in the human body?", type: "false" },
      { answer: "red meat do you eat every week?", type: "false" },
      { answer: "bread do you have every day?", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nHow much (.........................)",
    answers: [
      { answer: "oil and butter do you eat with your food?", type: "true" },
      { answer: "times do you go to the gym or play sport every week?", type: "false" },
      { answer: "hours' sleep do you have every night?", type: "false" },
      { answer: "Mc. Donald's restaurants are there in the world?", type: "false" },
      { answer: "kilometres are therein the ten miles?", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nThere is (..................................)",
    answers: [
      { answer: "a sandwich", type: "false" },
      { answer: "some grapes", type: "false" },
      { answer: "five bananas", type: "false" },
      { answer: "three biscuits", type: "false" },
      { answer: "two eggs", type: "true" },
    ],
  },
  {
    Question: "Complete the sentence. \nThere are (........................)",
    answers: [
      { answer: "two children", type: "true" },
      { answer: "an airport", type: "false" },
      { answer: "a hamburger", type: "false" },
      { answer: "a bar of chocolate", type: "false" },
      { answer: "a banana", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nThere is (....................)",
    answers: [
      { answer: "an apple", type: "true" },
      { answer: "some sweets", type: "false" },
      { answer: "some green grapes", type: "false" },
      { answer: "five eggs", type: "false" },
      { answer: "six biscuits", type: "false" },
    ],
  },
  {
    Question: "Find the correct translation:",
    answers: [
      { answer: "1-e, 2-a, 3-c, 4-b, 5-d", type: "true" },
      { answer: "1-a, 2-e, 3-c, 4-d, 5-b", type: "false" },
      { answer: "1-c, 2-a, 3-e, 4-b, 5-d", type: "false" },
      { answer: "1-d, 2-a, 3-c, 4-b, 5-e", type: "false" },
      { answer: "1-b, 2-a, 3-c, 4-e, 5-d", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. \nThere are (......................)",
    answers: [
      { answer: "some oranges", type: "true" },
      { answer: "some milk", type: "false" },
      { answer: "some water", type: "false" },
      { answer: "a glass of water", type: "false" },
      { answer: "a bowl of salad", type: "false" },
    ],
  },
  {
    Question: "Choose the sentence with “some”.",
    answers: [
      { answer: "If you want a snack, try (...) nuts.", type: "true" },
      { answer: "Don't drink (...) juice between meals.", type: "false" },
      { answer: "Water hasn't got (...) calories.", type: "false" },
      { answer: "Is there (...) milk?", type: "false" },
      { answer: "We haven't got (...) eggs.", type: "false" },
    ],
  },
  {
    Question: "Choose the sentence with “any”.",
    answers: [
      { answer: "Don't drink (...) coffee before you go to bed.", type: "true" },
      { answer: "For a healthy snack, you can eat (...) nuts.", type: "false" },
      { answer: "She's got (...) grapes.", type: "false" },
      { answer: "There are (...) plants in the classroom.", type: "false" },
      { answer: "There is (...) paper in the bin.", type: "false" },
    ],
  },
  {
    Question: "Choose the correct alternatives. \n(…..) students (…) there in your class?",
    answers: [
      { answer: "How many, are", type: "true" },
      { answer: "How much, are", type: "false" },
      { answer: "How many, is", type: "false" },
      { answer: "How much, is", type: "false" },
      { answer: "How old, are", type: "false" },
    ],
  },
  {
    Question: "Choose the correct alternatives. \n(....) homework (…) there tonight?",
    answers: [
      { answer: "How much, is", type: "true" },
      { answer: "How many, are", type: "false" },
      { answer: "How much, are", type: "false" },
      { answer: "How many, is", type: "false" },
      { answer: "How old, is", type: "false" },
    ],
  },
  {
    Question: "Choose the correct alternatives. \n(…) languages can you speak?",
    answers: [
      { answer: "How many", type: "true" },
      { answer: "How much", type: "false" },
      { answer: "Are there", type: "false" },
      { answer: "Is there", type: "false" },
      { answer: "Where", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant.",
    answers: [
      { answer: "go-went", type: "true" },
      { answer: "write-writed", type: "false" },
      { answer: "get-getted", type: "false" },
      { answer: "arrive-arrove", type: "false" },
      { answer: "speak-spoken", type: "false" },
    ],
  },
  {
    Question: "Choose the wrong variant.",
    answers: [
      { answer: "arrive-arriven", type: "true" },
      { answer: "win-won", type: "false" },
      { answer: "finish-finished", type: "false" },
      { answer: "work-worked", type: "false" },
      { answer: "take-took", type: "false" },
    ],
  },
  {
    Question: "Choose the wrong variant.",
    answers: [
      { answer: "pay-payed", type: "true" },
      { answer: "go-went", type: "false" },
      { answer: "work-worked", type: "false" },
      { answer: "take-took", type: "false" },
      { answer: "can-could", type: "false" },
    ],
  },
  {
    Question: "Choose the line of irregular verbs.",
    answers: [
      { answer: "to win, to take, to write", type: "true" },
      { answer: "to play, to see, to speak", type: "false" },
      { answer: "to arrive, to listen, to stop", type: "false" },
      { answer: "to cut, to play, to win", type: "false" },
      { answer: "to die, to arrive, to be", type: "false" },
    ],
  },
  {
    Question: "Choose the line of irregular verbs.",
    answers: [
      { answer: "to be, to buy, to see", type: "true" },
      { answer: "to work, to clean, to kill", type: "false" },
      { answer: "to like, to study, to give", type: "false" },
      { answer: "to pay, to need, to get", type: "false" },
      { answer: "to decide, to dig, to study", type: "false" },
    ],
  },
  {
    Question: "Choose the line of regular verbs.",
    answers: [
      { answer: "to open, to want, to finish", type: "false" },
      { answer: "to buy, to do, to have", type: "false" },
      { answer: "to stay, to drive, to stop", type: "false" },
      { answer: "to learn, to believe, to win", type: "false" },
      { answer: "to listen, to make, to have", type: "false" },
    ],
  },
  {
    Question: "Complete the gap. \nThe monster was very (……)",
    answers: [
      { answer: "ugly", type: "true" },
      { answer: "lovely", type: "false" },
      { answer: "beautiful", type: "false" },
      { answer: "friendly", type: "false" },
      { answer: "handsome", type: "false" },
    ],
  },
  {
    Question: "Complete the gap. \nRomeo and Juliet (………..) married.",
    answers: [
      { answer: "weren't", type: "true" },
      { answer: "doesn't", type: "false" },
      { answer: "didn't", type: "false" },
      { answer: "aren't", type: "false" },
      { answer: "is", type: "false" },
    ],
  },
  {
    Question: "Complete the gap. \nDracula (……..) vodka.",
    answers: [
      { answer: "didn't drink", type: "true" },
      { answer: "did drank", type: "false" },
      { answer: "drink", type: "false" },
      { answer: "will drink", type: "false" },
      { answer: "has drink", type: "false" },
    ],
  },
  {
    Question: "Complete the gap. \nMartin Scorsese (……….) the film Gangs of New York .",
    answers: [
      { answer: "Made", type: "true" },
      { answer: "will make", type: "false" },
      { answer: "has make", type: "false" },
      { answer: "make", type: "false" },
      { answer: "was maid", type: "false" },
    ],
  },
  {
    Question: "Complete the gap. \nSteve (….) a writer when he was forty-five.",
    answers: [
      { answer: "became", type: "true" },
      { answer: "has become", type: "false" },
      { answer: "will become", type: "false" },
      { answer: "was become", type: "false" },
      { answer: "become", type: "false" },
    ],
  },
  {
    Question: "Complete the gap. \nThe first Spiderman film (…..) in 2002.",
    answers: [
      { answer: "appeared", type: "true" },
      { answer: "has appeared", type: "false" },
      { answer: "was appeared", type: "false" },
      { answer: "appears", type: "false" },
      { answer: "were appeared", type: "false" },
    ],
  },
  {
    Question: "Complete the gap. \nLast year we (…..) to the cinema a lot.",
    answers: [
      { answer: "went", type: "true" },
      { answer: "gone", type: "false" },
      { answer: "goes", type: "false" },
      { answer: "has go", type: "false" },
      { answer: "have gone", type: "false" },
    ],
  },
  {
    Question: "Complete the gap. \n(…..) you listen to the news last night?",
    answers: [
      { answer: "did", type: "true" },
      { answer: "have", type: "false" },
      { answer: "has", type: "false" },
      { answer: "will", type: "false" },
      { answer: "had", type: "false" },
    ],
  },
  {
    Question: "Complete the gap. \nI didn't (……) to my parents when I was young.",
    answers: [
      { answer: "listen", type: "true" },
      { answer: "have listen", type: "false" },
      { answer: "had listened", type: "false" },
      { answer: "will listen", type: "false" },
      { answer: "listened", type: "false" },
    ],
  },
  {
    Question: "Complete the gap. \nGreat! I saw his last film. \nIt (……) fantastic.",
    answers: [
      { answer: "was", type: "true" },
      { answer: "were", type: "false" },
      { answer: "did", type: "false" },
      { answer: "weren't", type: "false" },
      { answer: "had", type: "false" },
    ],
  },
  {
    Question: "Find comparative and superlative adjective form of “Cheap”.",
    answers: [
      { answer: "cheaper, the cheapest", type: "true" },
      { answer: "cheapest, cheaper", type: "false" },
      { answer: "more cheaper", type: "false" },
      { answer: "most cheapest", type: "false" },
      { answer: "cheaper, cheapest", type: "false" },
    ],
  },
  {
    Question: "Put the questions in the correct order. \nthis /is/much/How?",
    answers: [
      { answer: "How much is this?", type: "true" },
      { answer: "How much this is?", type: "false" },
      { answer: "Is this how much?", type: "false" },
      { answer: "How this is much?", type: "false" },
      { answer: "This is much How?", type: "false" },
    ],
  },
  {
    Question: "Choose the correct form of the verb. \nI (...) to the cinema last weekend.",
    answers: [
      { answer: "went", type: "true" },
      { answer: "was going", type: "false" },
      { answer: "am going", type: "false" },
      { answer: "gone", type: "false" },
      { answer: "has gone", type: "false" },
    ],
  },
  {
    Question: "Choose the correct form of the verb. \nI (….) the news yesterday.",
    answers: [
      { answer: "saw", type: "true" },
      { answer: "seen", type: "false" },
      { answer: "seeing", type: "false" },
      { answer: "was saw", type: "false" },
      { answer: "see", type: "false" },
    ],
  },
  {
    Question: "Choose the correct form of the verb. \nI (….) TV last night.",
    answers: [
      { answer: "watched", type: "true" },
      { answer: "watching", type: "false" },
      { answer: "am watching", type: "false" },
      { answer: "was watching", type: "false" },
      { answer: "is watched", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: \nWhere (.....) my glasses? – I have just lost (....)",
    answers: [
      { answer: "are / them", type: "true" },
      { answer: "is / it", type: "false" },
      { answer: "are / it", type: "false" },
      { answer: "is / them", type: "false" },
      { answer: "was / it", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: \nHis clothes (…...) usually very cheap, but he is actually well-off.",
    answers: [
      { answer: "are", type: "true" },
      { answer: "is", type: "false" },
      { answer: "was", type: "false" },
      { answer: "were", type: "false" },
      { answer: "to be", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: \nShe is always interested (…….) what I do.",
    answers: [
      { answer: "in", type: "true" },
      { answer: "at", type: "false" },
      { answer: "by", type: "false" },
      { answer: "on", type: "false" },
      { answer: "of", type: "false" },
    ],
  },
  {
    Question: "Make up question: \n1. old, \n2. how, \n3. is, \n4. your mother?",
    answers: [
      { answer: "2, 1, 3, 4", type: "true" },
      { answer: "3, 2, 1, 4", type: "false" },
      { answer: "4, 3, 2, 1", type: "false" },
      { answer: "3, 1, 4, 2", type: "false" },
      { answer: "1, 2, 3, 4", type: "false" },
    ],
  },
  {
    Question: "Make up question: \n1. where, \n2. from, \n3. Jennifer Lopez, \n4. ‘s ?",
    answers: [
      { answer: "1, 4, 3, 2", type: "true" },
      { answer: "1, 2, 3, 4", type: "false" },
      { answer: "3, 4, 1, 2", type: "false" },
      { answer: "2, 3, 4, 1", type: "false" },
      { answer: "4, 3, 2, 1", type: "false" },
    ],
  },
  {
    Question: "Make up question: \n1. where, \n2. Manchester, \n3.‘s ?",
    answers: [
      { answer: "1, 3, 2", type: "true" },
      { answer: "1, 2, 3", type: "false" },
      { answer: "3, 2, 1", type: "false" },
      { answer: "3, 1, 2", type: "false" },
      { answer: "2, 1, 3", type: "false" },
    ],
  },
  {
    Question: "Choose the correct verb.",
    answers: [
      { answer: "1-c, 2-a, 3-d, 4-b", type: "true" },
      { answer: "1-a, 2-b, 3-c, 4-d", type: "false" },
      { answer: "1-d, 2-c, 3-a, 4-b", type: "false" },
      { answer: "1-b, 2-d, 3-c, 4-a", type: "false" },
      { answer: "1-d, 2-a, 3-b, 4-c", type: "false" },
    ],
  },
  {
    Question: "Write the negative forms: \n1. I \n2. you \n3. she \n4. it",
    answers: [
      { answer: "1-c, 2-a, 3-b, 4-d", type: "true" },
      { answer: "1-a, 2-b, 3-c, 4-d", type: "false" },
      { answer: "1-d, 2-c, 3-a, 4-b", type: "false" },
      { answer: "1-b, 2-d, 3-c, 4-a", type: "false" },
      { answer: "1-c, 2-b, 3-d, 4-a", type: "false" },
    ],
  },
  {
    Question: "Choose the correct translation:",
    answers: [
      { answer: "1-c, 2-a, 3-b, 4-d", type: "true" },
      { answer: "1-c, 2-d, 3-a, 4-b", type: "false" },
      { answer: "1-b, 2-c, 3-d, 4-a", type: "false" },
      { answer: "1-d, 2-a, 3-b, 4-c", type: "false" },
      { answer: "1-d, 2-c, 3-a, 4-d", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer:",
    answers: [
      { answer: "1-c, 2-a, 3-b, 4-d", type: "true" },
      { answer: "1-d, 2-c, 3-a, 4-b", type: "false" },
      { answer: "1-a, 2-b, 3-c, 4-d", type: "false" },
      { answer: "1-b, 2-d, 3-c, 4-a", type: "false" },
      { answer: "1-d, 2-a, 3-d, 4-c", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer: \nWhat is your name?",
    answers: [
      { answer: "My name is Kate Winslet.", type: "true" },
      { answer: "I am 23 years old.", type: "false" },
      { answer: "It is 477863976.", type: "false" },
      { answer: "I am single.", type: "false" },
      { answer: "He is John.", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer: \nWhere are you from?",
    answers: [
      { answer: "I’m from England.", type: "true" },
      { answer: "I’m twenty five.", type: "false" },
      { answer: "I’m a student.", type: "false" },
      { answer: "I have got a family.", type: "false" },
      { answer: "I am a doctor.", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nPatrick (__)  Jane (__) nephew.",
    answers: [
      { answer: "Is, ’s", type: "true" },
      { answer: "is, is", type: "false" },
      { answer: "has, ’s", type: "false" },
      { answer: "is, has", type: "false" },
      { answer: "‘s, ’s", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nWhat (__) your father (__) name?",
    answers: [
      { answer: "Is, ’s", type: "true" },
      { answer: "Is, is", type: "false" },
      { answer: "Has, ’s", type: "false" },
      { answer: "Has, is", type: "false" },
      { answer: "‘s, ’s", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \n(___) colour  is your friend (__) car?",
    answers: [
      { answer: "What/’s", type: "true" },
      { answer: "Who/is", type: "false" },
      { answer: "How/’s", type: "false" },
      { answer: "Where/has", type: "false" },
      { answer: "What/has", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. \nMy favourite car is very important (___) me.",
    answers: [
      { answer: "to", type: "true" },
      { answer: "in", type: "false" },
      { answer: "with", type: "false" },
      { answer: "from", type: "false" },
      { answer: "at", type: "false" },
    ],
  },
  {
    Question: "Complete the sentences with correct preposition. \nWe work from eight to twelve (…) the morning.",
    answers: [
      { answer: "in", type: "true" },
      { answer: "on", type: "false" },
      { answer: "at", type: "false" },
      { answer: "from", type: "false" },
      { answer: "to", type: "false" },
    ],
  },
  {
    Question: "Complete the sentences with correct preposition. \n1. Do you read in bed (…) night? \n2. Do you study (…) the weekend?",
    answers: [
      { answer: "at, in", type: "true" },
      { answer: "in, on", type: "false" },
      { answer: "on, at", type: "false" },
      { answer: "from, to", type: "false" },
      { answer: "to, at", type: "false" },
    ],
  },
  {
    Question: "Complete the sentences with correct preposition. \nWhere are you normally (….) 4 o’clock (.…) the afternoon?",
    answers: [
      { answer: "at; in", type: "true" },
      { answer: "at; on", type: "false" },
      { answer: "in; at", type: "false" },
      { answer: "at; at", type: "false" },
      { answer: "in; on", type: "false" },
    ],
  },
  {
    Question: "Match the verbs with nouns.\n1. have\n2. go to\n3. catch\n\na. the bus\nb. a shower\nc. work",
    answers: [
      { answer: "1-b, 2-c, 3-a", type: "true" },
      { answer: "1-c, 2-a, 3-b", type: "false" },
      { answer: "1-b, 2-a, 3-c", type: "false" },
      { answer: "1-a, 2-b, 3-c", type: "false" },
      { answer: "1-c, 2-b, 3-a", type: "false" },
    ],
  },
  {
    Question: "Choose the correct pronouns.\n- What is (…) name?\n- Leyla.\n- How do you spell (…) ?",
    answers: [
      { answer: "her; it", type: "true" },
      { answer: "her; you", type: "false" },
      { answer: "him; it", type: "false" },
      { answer: "her; me", type: "false" },
      { answer: "hers; it", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. I (___) like Fred and Fred (___) like me.",
    answers: [
      { answer: "don’t, doesn’t", type: "true" },
      { answer: "doesn’t, don’t", type: "false" },
      { answer: "wasn’t, was", type: "false" },
      { answer: "am, isn’t", type: "false" },
      { answer: "did", type: "false" },
    ],
  },
  {
    Question: "Choose the correct article. The traffic is (_____) very bad in evening.",
    answers: [
      { answer: "(__)", type: "true" },
      { answer: "the", type: "false" },
      { answer: "a", type: "false" },
      { answer: "an", type: "false" },
      { answer: "go", type: "false" },
    ],
  },
  {
    Question: "Choose the correct article. My uncle is (_____) train driver.",
    answers: [
      { answer: "a", type: "true" },
      { answer: "the", type: "false" },
      { answer: "an", type: "false" },
      { answer: "( - )", type: "false" },
      { answer: "or", type: "false" },
    ],
  },
  {
    Question: "Choose the correct article. Have you got (______) car?",
    answers: [
      { answer: "a", type: "true" },
      { answer: "( - )", type: "false" },
      { answer: "the", type: "false" },
      { answer: "an", type: "false" },
      { answer: "go", type: "false" },
    ],
  },
  {
    Question: "Choose the correct article. We live in (_____) small town in (_____) United States.",
    answers: [
      { answer: "a, the", type: "true" },
      { answer: "the, a", type: "false" },
      { answer: "a, (__)", type: "false" },
      { answer: "the, a", type: "false" },
      { answer: "the, a", type: "false" },
    ],
  },
  {
    Question: "Choose the correct article. We have got (_____) new car.",
    answers: [
      { answer: "a", type: "true" },
      { answer: "the", type: "false" },
      { answer: "( - )", type: "false" },
      { answer: "small", type: "false" },
      { answer: "big", type: "false" },
    ],
  },
  {
    Question: "Choose the correct article. Salem is twenty-three years old. He is (______) engineer.",
    answers: [
      { answer: "an", type: "true" },
      { answer: "the", type: "false" },
      { answer: "a", type: "false" },
      { answer: "can", type: "false" },
      { answer: "be", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. There (….) four English men. Who (……) they?",
    answers: [
      { answer: "were, were", type: "true" },
      { answer: "was, was", type: "false" },
      { answer: "were, wasn’t", type: "false" },
      { answer: "was, were", type: "false" },
      { answer: "none", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. There (.…) any Italian composers but there (…) one from Germany. Who (…) he?",
    answers: [
      { answer: "weren’t, was, was", type: "true" },
      { answer: "weren’t, wasn’t, was", type: "false" },
      { answer: "were, wasn’t, was", type: "false" },
      { answer: "was, was, were", type: "false" },
      { answer: "wasn’t, was", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. (.....) there anyone from Russia?",
    answers: [
      { answer: "Was", type: "true" },
      { answer: "Were", type: "false" },
      { answer: "Weren’t", type: "false" },
      { answer: "Are", type: "false" },
      { answer: "Aren’t", type: "false" },
    ],
  },
  {
    Question: "Complete the question. Where (…..) your parents born?",
    answers: [
      { answer: "were", type: "true" },
      { answer: "was", type: "false" },
      { answer: "is", type: "false" },
      { answer: "are", type: "false" },
      { answer: "none", type: "false" },
    ],
  },
  {
    Question: "Complete the question. How old (….) your parents when you (….) born?",
    answers: [
      { answer: "were, were", type: "true" },
      { answer: "was, was", type: "false" },
      { answer: "are, was", type: "false" },
      { answer: "are, is", type: "false" },
      { answer: "were, was", type: "false" },
    ],
  },
  {
    Question: "Complete the question. What (…..) your favorite food when you (……) little?",
    answers: [
      { answer: "was, were", type: "true" },
      { answer: "were, were", type: "false" },
      { answer: "is, were", type: "false" },
      { answer: "are, was", type: "false" },
      { answer: "were, was", type: "false" },
    ],
  },
  {
    Question: "Find the verbs.\n1. to go \n2. to leave \n3. to write \n4. to decide \na) yazmaq \nb) qərara gəlmək \nc) tərk etmək \nd) getmək",
    answers: [
      { answer: "1-d, 2-c, 3-a, 4-b", type: "true" },
      { answer: "1-d, 2-c, 3-b, 4-a", type: "false" },
      { answer: "1-c, 2-d, 3-b, 4-a", type: "false" },
      { answer: "1-a, 2-b, 3-c, 4-d", type: "false" },
      { answer: "1-b, 2-c, 3-d, 4-a", type: "false" },
    ],
  },
  {
    Question: "Write the negative form of the sentence. She’s got a car.",
    answers: [
      { answer: "She hasn’t got a car.", type: "true" },
      { answer: "She isn’t got a car.", type: "false" },
      { answer: "She haven’t got a car.", type: "false" },
      { answer: "She didn’t got a car.", type: "false" },
      { answer: "She wasn’t got a car.", type: "false" },
    ],
  },
  {
    Question: "Write the negative form of the sentence. I’ve got a pen.",
    answers: [
      { answer: "I haven’t got a pen.", type: "true" },
      { answer: "I am not got a pen.", type: "false" },
      { answer: "I don’t got a pen.", type: "false" },
      { answer: "I wasn’t got a pen.", type: "false" },
      { answer: "I isn’t got a pen.", type: "false" },
    ],
  },
  {
    Question: "Make the sentence negative. He found his keys.",
    answers: [
      { answer: "He didn’t find his keys.", type: "true" },
      { answer: "He not find his keys.", type: "false" },
      { answer: "He isn’t find his keys.", type: "false" },
      { answer: "He don’t found his keys.", type: "false" },
      { answer: "He hasn’t find his keys.", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: My mother’s sister is my (...) .",
    answers: [
      { answer: "aunt", type: "true" },
      { answer: "niece", type: "false" },
      { answer: "sister", type: "false" },
      { answer: "sister-in-law", type: "false" },
      { answer: "nephew", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: My father’s parents are my (...) .",
    answers: [
      { answer: "grandparents", type: "true" },
      { answer: "relatives", type: "false" },
      { answer: "distant relatives", type: "false" },
      { answer: "parents-in-law", type: "false" },
      { answer: "stepparents", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: My brother’s son is my (...) .",
    answers: [
      { answer: "nephew", type: "true" },
      { answer: "brother-in-law", type: "false" },
      { answer: "niece", type: "false" },
      { answer: "cousin", type: "false" },
      { answer: "brother", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: Aunt’s children are my (...) .",
    answers: [
      { answer: "cousins", type: "true" },
      { answer: "brothers", type: "false" },
      { answer: "sisters", type: "false" },
      { answer: "nephews", type: "false" },
      { answer: "nieces", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: My children are my parents’ (...) .",
    answers: [
      { answer: "grandchildren", type: "true" },
      { answer: "grandsons", type: "false" },
      { answer: "granddaughters", type: "false" },
      { answer: "children-in-law", type: "false" },
      { answer: "grandnephews", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: Our large family consists (...) 8 people.",
    answers: [
      { answer: "of", type: "true" },
      { answer: "on", type: "false" },
      { answer: "at", type: "false" },
      { answer: "with", type: "false" },
      { answer: "by", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: He usually gets up (...) half past seven.",
    answers: [
      { answer: "at", type: "true" },
      { answer: "in", type: "false" },
      { answer: "on", type: "false" },
      { answer: "a", type: "false" },
      { answer: "into", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. He tries to do (...) morning exercises every morning.",
    answers: [
      { answer: "his", type: "true" },
      { answer: "her", type: "false" },
      { answer: "hers", type: "false" },
      { answer: "our", type: "false" },
      { answer: "my", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. On week-ends we like to go (...) a walk with our friends.",
    answers: [
      { answer: "for", type: "true" },
      { answer: "on", type: "false" },
      { answer: "at", type: "false" },
      { answer: "with", type: "false" },
      { answer: "to", type: "false" },
    ],
  },
  {
    Question: "Sometimes I have scrambled eggs (...) breakfast.",
    answers: [
      { answer: "for", type: "true" },
      { answer: "on", type: "false" },
      { answer: "at", type: "false" },
      { answer: "( - )", type: "false" },
      { answer: "by", type: "false" },
    ],
  },
  {
    Question: "Choose the correct word. I like (___) story, (___) is very funny.",
    answers: [
      { answer: "this, it", type: "true" },
      { answer: "these, them", type: "false" },
      { answer: "that, they", type: "false" },
      { answer: "they, it", type: "false" },
      { answer: "those, these", type: "false" },
    ],
  },
  {
    Question: "Choose the correct word. Jane is a student. (___) lessons begin at 8 o’clock.",
    answers: [
      { answer: "Her", type: "true" },
      { answer: "They", type: "false" },
      { answer: "It", type: "false" },
      { answer: "We", type: "false" },
      { answer: "He", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. Thank you (___) (___)things.",
    answers: [
      { answer: "For/those", type: "true" },
      { answer: "From/this", type: "false" },
      { answer: "On/these", type: "false" },
      { answer: "In/that", type: "false" },
      { answer: "For/this", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. Have you got a bottle (___) water (___) you?",
    answers: [
      { answer: "Of/with", type: "true" },
      { answer: "Of/at", type: "false" },
      { answer: "From/on", type: "false" },
      { answer: "For/about", type: "false" },
      { answer: "In/for", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. Carla’s house is (___) the center (___) the city.",
    answers: [
      { answer: "In/of", type: "true" },
      { answer: "In/from", type: "false" },
      { answer: "On/at", type: "false" },
      { answer: "In/with", type: "false" },
      { answer: "At/for", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. - 'Where is Martin?' - 'I am sorry I (___) know.'",
    answers: [
      { answer: "don’t", type: "true" },
      { answer: "doesn’t", type: "false" },
      { answer: "is", type: "false" },
      { answer: "was", type: "false" },
      { answer: "isn’t", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. It’s not true! I (___) believe it!",
    answers: [
      { answer: "don’t", type: "true" },
      { answer: "doesn’t", type: "false" },
      { answer: "isn’t", type: "false" },
      { answer: "wasn’t", type: "false" },
      { answer: "were", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. Bill and Rose (___) classical music, but I (___) like it.",
    answers: [
      { answer: "like, don’t", type: "true" },
      { answer: "likes, doesn’t", type: "false" },
      { answer: "does, like", type: "false" },
      { answer: "don’t, doesn’t", type: "false" },
      { answer: "like, didn’t", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. I (___) ride a bicycle, I (___) a horse.",
    answers: [
      { answer: "don’t, ride", type: "true" },
      { answer: "doesn’t, drive", type: "false" },
      { answer: "do, carry", type: "false" },
      { answer: "doesn’t, ride", type: "false" },
      { answer: "drive, carry", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. Most people go to work (__) bus.",
    answers: [
      { answer: "by", type: "true" },
      { answer: "to", type: "false" },
      { answer: "on", type: "false" },
      { answer: "off", type: "false" },
      { answer: "from", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. It is not possible to drive to the beach: go (__) foot.",
    answers: [
      { answer: "on", type: "true" },
      { answer: "to", type: "false" },
      { answer: "by", type: "false" },
      { answer: "for", type: "false" },
      { answer: "on", type: "true" },
    ],
  },
  {
    Question: "Choose the correct variant. My journey (__) work takes about 30 minutes.",
    answers: [
      { answer: "to", type: "true" },
      { answer: "can", type: "false" },
      { answer: "off", type: "false" },
      { answer: "for", type: "false" },
      { answer: "from", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. You can fly (__) Scotland direct from Paris.",
    answers: [
      { answer: "to", type: "true" },
      { answer: "off", type: "false" },
      { answer: "by", type: "false" },
      { answer: "from", type: "false" },
      { answer: "of", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. I never walk (__) town: I always go (__) bus.",
    answers: [
      { answer: "to, by", type: "true" },
      { answer: "by, on", type: "false" },
      { answer: "from, by", type: "false" },
      { answer: "to, off", type: "false" },
      { answer: "off, an", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. You (____) buy drinks, but you (__) buy snacks.",
    answers: [
      { answer: "can, can’t", type: "true" },
      { answer: "can, may", type: "false" },
      { answer: "can, open", type: "false" },
      { answer: "from, can", type: "false" },
      { answer: "may, go", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. You (__) study other languages.",
    answers: [
      { answer: "can", type: "true" },
      { answer: "doesn’t", type: "false" },
      { answer: "cans", type: "false" },
      { answer: "isn’t", type: "false" },
      { answer: "hasn’t", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. You (__) come to evening classes.",
    answers: [
      { answer: "can’t", type: "true" },
      { answer: "cans", type: "false" },
      { answer: "doesn’t", type: "false" },
      { answer: "isn’t", type: "false" },
      { answer: "hasn’t", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. I (__) study on computers.",
    answers: [
      { answer: "can", type: "true" },
      { answer: "is able to", type: "false" },
      { answer: "isn’t", type: "false" },
      { answer: "has to", type: "false" },
      { answer: "doesn’t", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. We (__) use the library at the weekend.",
    answers: [
      { answer: "can", type: "true" },
      { answer: "am able to", type: "false" },
      { answer: "must to", type: "false" },
      { answer: "doesn’t", type: "false" },
      { answer: "isn’t", type: "false" },
    ],
  },
  {
    Question: "Choose the correct alternative. (…) a new film by any Lee.",
    answers: [
      { answer: "There is", type: "true" },
      { answer: "Let’s", type: "false" },
      { answer: "There are", type: "false" },
      { answer: "Have", type: "false" },
      { answer: "Do", type: "false" },
    ],
  },
  {
    Question: "Choose the correct alternative. Well, (...) go to the cinema.",
    answers: [
      { answer: "Let’s", type: "true" },
      { answer: "Have to", type: "false" },
      { answer: "Does", type: "false" },
      { answer: "Do", type: "false" },
      { answer: "Are", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer. Did his family make a lot of money?",
    answers: [
      { answer: "Yes, they did", type: "true" },
      { answer: "Yes, he did", type: "false" },
      { answer: "Yes, their did", type: "false" },
      { answer: "Yes, he does", type: "false" },
      { answer: "Yes, his family do", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer. His father (_____), but Bill’s father (_____) smoke.",
    answers: [
      { answer: "smokes / doesn’t", type: "true" },
      { answer: "smoke / doesn’t", type: "false" },
      { answer: "smoke / don’t", type: "false" },
      { answer: "smokes / isn’t", type: "false" },
      { answer: "smokes / don’t", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer. I (_____) English, Russian, and German, but I (_____) Chinese.",
    answers: [
      { answer: "speak / don’t speak", type: "true" },
      { answer: "speaks / speak", type: "false" },
      { answer: "speaks / speaks", type: "false" },
      { answer: "speaks / don’t speak", type: "false" },
      { answer: "speak / speak", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer. How many languages (_____) you (_____)?",
    answers: [
      { answer: "do / speak", type: "true" },
      { answer: "does / speak", type: "false" },
      { answer: "do / speaking", type: "false" },
      { answer: "does / speaking", type: "false" },
      { answer: "is / speaking", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer. (_____) do you (_____) on Sundays? I always relax.",
    answers: [
      { answer: "What / do", type: "true" },
      { answer: "How / doing", type: "false" },
      { answer: "Where / does", type: "false" },
      { answer: "What / relax", type: "false" },
      { answer: "How / do", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer. What (_____) you (_____) at the weekend?",
    answers: [
      { answer: "do / do", type: "true" },
      { answer: "do / does", type: "false" },
      { answer: "does / do", type: "false" },
      { answer: "does / does", type: "false" },
      { answer: "are / do", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer. It is quarter past eight.",
    answers: [
      { answer: "8:15", type: "true" },
      { answer: "7:30", type: "false" },
      { answer: "8:30", type: "false" },
      { answer: "17:15", type: "false" },
      { answer: "15:08", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. (_____) languages does she speak?",
    answers: [
      { answer: "How many", type: "true" },
      { answer: "How much", type: "false" },
      { answer: "Why", type: "false" },
      { answer: "Where", type: "false" },
      { answer: "Which", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. Prince Charles (_____) Canadian. He (_____) English.",
    answers: [
      { answer: "is not / is", type: "true" },
      { answer: "is not / was", type: "false" },
      { answer: "was not / is", type: "false" },
      { answer: "was not / were", type: "false" },
      { answer: "was / is", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. You’ll find the poem (_____) page 16.",
    answers: [
      { answer: "on", type: "true" },
      { answer: "at", type: "false" },
      { answer: "in", type: "false" },
      { answer: "of", type: "false" },
      { answer: "is", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. A: (_____) is Amanda’s birthday? B: It is (_____) the 25th (_____) December.",
    answers: [
      { answer: "When / on / of", type: "true" },
      { answer: "What / on / in", type: "false" },
      { answer: "When / in / on", type: "false" },
      { answer: "What / on / of", type: "false" },
      { answer: "What / in / at", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer. Since the coal mines closed, there (________) no jobs here.",
    answers: [
      { answer: "are", type: "true" },
      { answer: "has", type: "false" },
      { answer: "is", type: "false" },
      { answer: "aren’t", type: "false" },
      { answer: "isn’t", type: "false" },
    ],
  },
  {
    Question: "Choose the correct articles. You need (…) visa to visit (…) foreign countries.",
    answers: [
      { answer: "a, (-)", type: "true" },
      { answer: "the, a", type: "false" },
      { answer: "(-), a", type: "false" },
      { answer: "(-), the", type: "false" },
      { answer: "an, the", type: "false" },
    ],
  },
  {
    Question: "Choose the correct possessive pronouns. (…) sister is a good student and (…) is a doctor.",
    answers: [
      { answer: "My, hers", type: "true" },
      { answer: "You, ours", type: "false" },
      { answer: "Mine, her", type: "false" },
      { answer: "His, its", type: "false" },
      { answer: "Ours, their", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer. We often (...) different countries in our youth.",
    answers: [
      { answer: "visited", type: "true" },
      { answer: "didn’t visited", type: "false" },
      { answer: "were visited", type: "false" },
      { answer: "doesn’t visit", type: "false" },
      { answer: "visit", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer. Tom (__________) to the cinema yesterday.",
    answers: [
      { answer: "went", type: "true" },
      { answer: "goes", type: "false" },
      { answer: "was going", type: "false" },
      { answer: "to go", type: "false" },
      { answer: "visit", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer. How (_________) students have a computer at home?",
    answers: [
      { answer: "many", type: "true" },
      { answer: "any", type: "false" },
      { answer: "some", type: "false" },
      { answer: "each", type: "false" },
      { answer: "every", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer. There are only (____________) people interested in the subject.",
    answers: [
      { answer: "a few", type: "true" },
      { answer: "any", type: "false" },
      { answer: "many", type: "false" },
      { answer: "some", type: "false" },
      { answer: "every", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer. Caroline (__________) here in 2003.",
    answers: [
      { answer: "worked", type: "true" },
      { answer: "works", type: "false" },
      { answer: "didn’t worked", type: "false" },
      { answer: "don’t work", type: "false" },
      { answer: "doesn’t work", type: "false" },
    ],
  },
  {
    Question: "Choose the correct degree of adjectives. I think he is (….) talented man I have ever met, and he is very (….)",
    answers: [
      { answer: "the most, hardworking", type: "true" },
      { answer: "the most, the most hardworking", type: "false" },
      { answer: "very, hardworking", type: "false" },
      { answer: "more, hardworking", type: "false" },
      { answer: "the best, hardworking", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. Don’t buy these trousers. They are (…..) than those ones.",
    answers: [
      { answer: "more expensive", type: "true" },
      { answer: "very expensive", type: "false" },
      { answer: "the most expensive", type: "false" },
      { answer: "expensive", type: "false" },
      { answer: "most expensive", type: "false" },
    ],
  },
  {
    Question: "Choose the correct modal verbs. (…) oil production occupies (…) major place in (…) economy of Azerbaijan.",
    answers: [
      { answer: "the, the, the", type: "true" },
      { answer: "an, (-), the", type: "false" },
      { answer: "the, an, the", type: "false" },
      { answer: "(-), an, the", type: "false" },
      { answer: "(-), the, an", type: "false" },
    ],
  },
  {
    Question: "Choose the correct articles. (…) beef is a kind of (…) meat.",
    answers: [
      { answer: "( - ), ( - )", type: "true" },
      { answer: "a, the", type: "false" },
      { answer: "the, ( - )", type: "false" },
      { answer: "the, the", type: "false" },
      { answer: "a, a", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: Oxford is one of (___) oldest universities in Europe.",
    answers: [
      { answer: "the", type: "true" },
      { answer: "most", type: "false" },
      { answer: "much", type: "false" },
      { answer: "more", type: "false" },
      { answer: "is", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: Look! (___) letter’s from Ali.",
    answers: [
      { answer: "this", type: "true" },
      { answer: "those", type: "false" },
      { answer: "they", type: "false" },
      { answer: "these", type: "false" },
      { answer: "mine", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: Look at (___) man over there!",
    answers: [
      { answer: "that", type: "true" },
      { answer: "this", type: "false" },
      { answer: "these", type: "false" },
      { answer: "those", type: "false" },
      { answer: "they", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant:",
    answers: [
      { answer: "those people", type: "true" },
      { answer: "these photos over there", type: "false" },
      { answer: "that photos", type: "false" },
      { answer: "those photos over here", type: "false" },
      { answer: "this car keys", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant with the Possessive Case of noun.",
    answers: [
      { answer: "His wife’s name’s Sara.", type: "true" },
      { answer: "It’s a German car.", type: "false" },
      { answer: "He’s got beautiful green eyes.", type: "false" },
      { answer: "What’s your job?", type: "false" },
      { answer: "His name’s Ali.", type: "false" },
    ],
  },
  {
    Question: "- Is Ali an economics student? - (___)",
    answers: [
      { answer: "Yes, he is.", type: "true" },
      { answer: "No, he is.", type: "false" },
      { answer: "Yes, she is.", type: "false" },
      { answer: "No, she isn’t.", type: "false" },
      { answer: "Yes, he isn’t.", type: "false" },
    ],
  },
  {
    Question: "Choose the countable nouns.",
    answers: [
      { answer: "lemons, carrots", type: "true" },
      { answer: "rice, noodles", type: "false" },
      { answer: "eggs, oil", type: "false" },
      { answer: "butter, chicken", type: "false" },
      { answer: "potatoes, sugar", type: "false" },
    ],
  },
  {
    Question: "Choose the uncountable nouns.",
    answers: [
      { answer: "cheese, coffee", type: "true" },
      { answer: "eggs, an apple", type: "false" },
      { answer: "tea, biscuits", type: "false" },
      { answer: "potatoes, melons", type: "false" },
      { answer: "milk, orange", type: "false" },
    ],
  },
  {
    Question: "Choose the row with the uncountable nouns.",
    answers: [
      { answer: "3,4", type: "true" },
      { answer: "1,3", type: "false" },
      { answer: "2,4", type: "false" },
      { answer: "1,4", type: "false" },
      { answer: "1,2", type: "false" },
    ],
  },
  {
    Question: "My girlfriend Anna is ………… actress.",
    answers: [
      { answer: "an", type: "true" },
      { answer: "a", type: "false" },
      { answer: "the", type: "false" },
      { answer: "---", type: "false" },
      { answer: "and", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. In the morning the sun . ….. comes up in the east.",
    answers: [
      { answer: "Always", type: "true" },
      { answer: "Never", type: "false" },
      { answer: "Sometimes", type: "false" },
      { answer: "Not often", type: "false" },
      { answer: "Late", type: "false" },
    ],
  },
  {
    Question: "Where do most people have lunch in Melbourne?",
    answers: [
      { answer: "in their office or outside", type: "true" },
      { answer: "at hospital", type: "false" },
      { answer: "on the road", type: "false" },
      { answer: "on the roof", type: "false" },
      { answer: "at school", type: "false" },
    ],
  },
  {
    Question: "Complete the questions with the correct verb forms.\n1. Where………………… you born?\n2. Where……………… your parents born?",
    answers: [
      { answer: "1-were, 2-were", type: "true" },
      { answer: "1-was, 2-was", type: "false" },
      { answer: "1-is, 2-is", type: "false" },
      { answer: "1-has, 2-has", type: "false" },
      { answer: "1-to be, 2-to be", type: "false" },
    ],
  },
  {
    Question: "Do shops open on Sunday in Melbourne?",
    answers: [
      { answer: "Yes, they do.", type: "true" },
      { answer: "No.", type: "false" },
      { answer: "Sometimes, yes", type: "false" },
      { answer: "at 11", type: "false" },
      { answer: "in the evening", type: "false" },
    ],
  },
  {
    Question: "I  …  go out without my mobile phone.",
    answers: [
      { answer: "never", type: "true" },
      { answer: "not hardly", type: "false" },
      { answer: "some times", type: "false" },
      { answer: "occasional", type: "false" },
      { answer: "ever-never", type: "false" },
    ],
  },
  {
    Question: "What is the capital city of India?",
    answers: [
      { answer: "Delhi", type: "true" },
      { answer: "Kolkata", type: "false" },
      { answer: "London", type: "false" },
      { answer: "Cairo", type: "false" },
      { answer: "Mumbai", type: "false" },
    ],
  },
  {
    Question: "What’s her full name?",
    answers: [
      { answer: "It’s Arzu Verdieva", type: "true" },
      { answer: "Her name’s Arzu", type: "false" },
      { answer: "Her surname’s Verdiyeva", type: "false" },
      { answer: "It’s Arzu", type: "false" },
      { answer: "It’s Rasim", type: "false" },
    ],
  },
  {
    Question: "Do they see snow in India?",
    answers: [
      { answer: "No, never", type: "true" },
      { answer: "Yes, do sometimes", type: "false" },
      { answer: "No, nor all the time", type: "false" },
      { answer: "No, at night", type: "false" },
      { answer: "Yes, do usually", type: "false" },
    ],
  },
  {
    Question: "Children …  like  sweets.",
    answers: [
      { answer: "usually", type: "true" },
      { answer: "never", type: "false" },
      { answer: "don’t often", type: "false" },
      { answer: "seldom", type: "false" },
      { answer: "hardly ever", type: "false" },
    ],
  },
  {
    Question: "Shimla is in the … of India",
    answers: [
      { answer: "north", type: "true" },
      { answer: "the centre", type: "false" },
      { answer: "the south", type: "false" },
      { answer: "out west", type: "false" },
      { answer: "an east", type: "false" },
    ],
  },
  {
    Question: "What 1) … your favourite food when you 2) … a child?",
    answers: [
      { answer: "1-was, 2-were", type: "true" },
      { answer: "1-have, 2-have", type: "false" },
      { answer: "1-was, 2-was", type: "false" },
      { answer: "1-were, 2-were", type: "false" },
      { answer: "1-were, 2-was", type: "false" },
    ],
  },
  {
    Question: "When……………... weather’s good we have………….. picnic with friends in………….... local park.",
    answers: [
      { answer: "the,a,the", type: "true" },
      { answer: "a,-,the", type: "false" },
      { answer: "the,the,the", type: "false" },
      { answer: "-,a,the", type: "false" },
      { answer: "a,the,the", type: "false" },
    ],
  },
  {
    Question: "Monday  …  comes before Tuesday.",
    answers: [
      { answer: "always", type: "true" },
      { answer: "often", type: "false" },
      { answer: "never", type: "false" },
      { answer: "sometimes", type: "false" },
      { answer: "occasionally", type: "false" },
    ],
  },
  {
    Question: "Where do most people live in Melbourne?",
    answers: [
      { answer: "in houses", type: "true" },
      { answer: "in my flats", type: "false" },
      { answer: "in the out streets", type: "false" },
      { answer: "at friends’", type: "false" },
      { answer: "off hotels", type: "false" },
    ],
  },
  {
    Question: "In the game of chess, black ……….. starts.",
    answers: [
      { answer: "never", type: "true" },
      { answer: "doesn’t often", type: "false" },
      { answer: "do sometimes", type: "false" },
      { answer: "no occasionally", type: "false" },
      { answer: "do always", type: "false" },
    ],
  },
  {
    Question: "Everyone buys their food………....the street market………….every Saturday.",
    answers: [
      { answer: "at,-", type: "true" },
      { answer: "at,on", type: "false" },
      { answer: "on,-", type: "false" },
      { answer: "in,on", type: "false" },
      { answer: "at, in", type: "false" },
    ],
  },
  {
    Question: "A week  …  has  eight days.",
    answers: [
      { answer: "never", type: "true" },
      { answer: "always", type: "false" },
      { answer: "often", type: "false" },
      { answer: "sometimes", type: "false" },
      { answer: "occasionally", type: "false" },
    ],
  },
  {
    Question: "We live … a house … Aurignac.",
    answers: [
      { answer: "in,in", type: "true" },
      { answer: "-,in", type: "false" },
      { answer: "on,in", type: "false" },
      { answer: "on,at", type: "false" },
      { answer: "at,at", type: "false" },
    ],
  },
  {
    Question: "Choose the correct matches. 1. move 2. start 3. have",
    answers: [
      { answer: "1-c, 2- b, 3-a", type: "true" },
      { answer: "1-a, 2- b, 3-c", type: "false" },
      { answer: "1-c, 2- a, 3-b", type: "false" },
      { answer: "1-b, 2- c, 3-a", type: "false" },
      { answer: "1-a, 2- c, 3-b", type: "false" },
    ],
  },
  {
    Question: "My brother is vegetarian, so he  …  eats meat.",
    answers: [
      { answer: "never", type: "true" },
      { answer: "always", type: "false" },
      { answer: "often", type: "false" },
      { answer: "from time to time", type: "false" },
      { answer: "occasionally", type: "false" },
    ],
  },
  {
    Question: "We …  really good beaches not far away.",
    answers: [
      { answer: "’ve got", type: "true" },
      { answer: "has been", type: "false" },
      { answer: "’s got", type: "false" },
      { answer: "can", type: "false" },
      { answer: "hasn’t got", type: "false" },
    ],
  },
  {
    Question: "Complete the questions with the correct verb forms. 1)	… you interested in sport when you 2) ... young?",
    answers: [
      { answer: "1-were,2-were", type: "true" },
      { answer: "1-was, 2-were", type: "false" },
      { answer: "1-have,2-have", type: "false" },
      { answer: "1-was,2-was", type: "false" },
      { answer: "1-has,2-has", type: "false" },
    ],
  },
  {
    Question: "I catch … train to work in  … morning.",
    answers: [
      { answer: "a, the", type: "true" },
      { answer: "-, the", type: "false" },
      { answer: "the, a", type: "false" },
      { answer: "an, the", type: "false" },
      { answer: "a, -", type: "false" },
    ],
  },
  {
    Question: "Karen’s got a fantastic job, last month she … 8000 euros.",
    answers: [
      { answer: "earned", type: "true" },
      { answer: "earns", type: "false" },
      { answer: "earn", type: "false" },
      { answer: "earning", type: "false" },
      { answer: "to earn", type: "false" },
    ],
  },
  {
    Question: "In colonial times … came to Shimla.",
    answers: [
      { answer: "the British", type: "true" },
      { answer: "the Italian", type: "false" },
      { answer: "the American", type: "false" },
      { answer: "the Russian", type: "false" },
      { answer: "the Spanish", type: "false" },
    ],
  },
  {
    Question: "The sun … sets in the west.",
    answers: [
      { answer: "always", type: "true" },
      { answer: "often", type: "false" },
      { answer: "never", type: "false" },
      { answer: "occasionally", type: "false" },
      { answer: "in the morning", type: "false" },
    ],
  },
  {
    Question: "Winter is warm here. It … very seldom. But sometimes it … .",
    answers: [
      { answer: "snows, rains", type: "true" },
      { answer: "rain, snow", type: "false" },
      { answer: "snow, rain", type: "false" },
      { answer: "rains, snow", type: "false" },
      { answer: "raining, snows", type: "false" },
    ],
  },
  {
    Question: "Who 1)……………….three important people in your life when you 2)……….. a child?",
    answers: [
      { answer: "1-were,2-were", type: "true" },
      { answer: "1-was,2-was", type: "false" },
      { answer: "1-is,2-is", type: "false" },
      { answer: "1-has,2-has", type: "false" },
      { answer: "1-to be, 2-to be", type: "false" },
    ],
  },
  {
    Question: "He’s Chinese. He’s from _____.",
    answers: [
      { answer: "China", type: "true" },
      { answer: "china", type: "false" },
      { answer: "Chinese", type: "false" },
      { answer: "Chin", type: "false" },
      { answer: "chin", type: "false" },
    ],
  },
  {
    Question: "…….... time do children start school?",
    answers: [
      { answer: "What", type: "true" },
      { answer: "When", type: "false" },
      { answer: "at when", type: "false" },
      { answer: "Where", type: "false" },
      { answer: "How", type: "false" },
    ],
  },
  {
    Question: "I often go for a run   ……………...  the morning.",
    answers: [
      { answer: "In", type: "true" },
      { answer: "At", type: "false" },
      { answer: "On", type: "false" },
      { answer: "By", type: "false" },
      { answer: "Over", type: "false" },
    ],
  },
  {
    Question: "What’s your nationality?",
    answers: [
      { answer: "Brazilian", type: "true" },
      { answer: "An engineer", type: "false" },
      { answer: "The USA", type: "false" },
      { answer: "Single", type: "false" },
      { answer: "On holiday", type: "false" },
    ],
  },
  {
    Question: "He’s …………... He’s from France.",
    answers: [
      { answer: "French", type: "true" },
      { answer: "France", type: "false" },
      { answer: "French", type: "false" },
      { answer: "france", type: "false" },
      { answer: "Fransese", type: "false" },
    ],
  },
  {
    Question: "I usually  work  …………….. weekdays.",
    answers: [
      { answer: "On", type: "true" },
      { answer: "In", type: "false" },
      { answer: "At", type: "false" },
      { answer: "With", type: "false" },
      { answer: "By", type: "false" },
    ],
  },
  {
    Question: "What did you do last week?",
    answers: [
      { answer: "What did you do last week?", type: "true" },
      { answer: "What do you do last week?", type: "false" },
      { answer: "What did you did last week?", type: "false" },
      { answer: "What are you do last week?", type: "false" },
      { answer: "What you do last week?", type: "false" },
    ],
  },
  {
    Question: "Find the word that means:  “to be in situation when a person has got a family”",
    answers: [
      { answer: "to be married", type: "true" },
      { answer: "to get a friend", type: "false" },
      { answer: "to be friendly", type: "false" },
      { answer: "to make friends", type: "false" },
      { answer: "to be happy", type: "false" },
    ],
  },
  {
    Question: "We’re Japanese. We’re from _____.",
    answers: [
      { answer: "Japan", type: "true" },
      { answer: "Japon", type: "false" },
      { answer: "Jappan", type: "false" },
      { answer: "Japanese", type: "false" },
      { answer: "Japanian", type: "false" },
    ],
  },
  {
    Question: "Complete the questions with the correct verb forms. 1)………………..you scared of anything when you 2)……………..a child?",
    answers: [
      { answer: "1-were,2-were", type: "true" },
      { answer: "1-was,2-were", type: "false" },
      { answer: "1-have,2-have", type: "false" },
      { answer: "1-was,2-was", type: "false" },
      { answer: "1-has,2-has", type: "false" },
    ],
  },
  {
    Question: "Selena is a businesswoman and ………………is ……………..Spain.",
    answers: [
      { answer: "She / from", type: "true" },
      { answer: "Her / from", type: "false" },
      { answer: "He  / in", type: "false" },
      { answer: "His / out", type: "false" },
      { answer: "We / on", type: "false" },
    ],
  },
  {
    Question: "Find the word that denotes “A PERSON WORKING WITH ELECTRICITY”",
    answers: [
      { answer: "an electrician", type: "true" },
      { answer: "a electricy", type: "false" },
      { answer: "a electric", type: "false" },
      { answer: "an energy", type: "false" },
      { answer: "an energetically", type: "false" },
    ],
  },
  {
    Question: "Match the words with others to make verb phrases.\n\n1. get\na. someone\n2. meet\nb. school\n3. have\nc. a job\n4. start\nd. children",
    answers: [
      { answer: "1-c,2-a,3-d,4-b", type: "true" },
      { answer: "1-a,2-b,3-c,4-c", type: "false" },
      { answer: "1-b,2-a,3-d,4-c", type: "false" },
      { answer: "1-b,2-c,3-a,4-d", type: "false" },
      { answer: "1-a,2-c,3-b,4-d", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer to complete the dialogue\n--Hi, are you from New York?\n--………. ………….. .",
    answers: [
      { answer: "No, no. I am from Sydney.", type: "true" },
      { answer: "No, no. I am from New York.", type: "false" },
      { answer: "Oh, yes. I am from Tokyo.", type: "false" },
      { answer: "Oh, no. I am from America.", type: "false" },
      { answer: "Oh, yes. I am from Sydney.", type: "false" },
    ],
  },
  {
    Question: "Choose the correct verb to complete the phrases.\n... a job\n... married",
    answers: [
      { answer: "get", type: "true" },
      { answer: "meet", type: "false" },
      { answer: "go", type: "false" },
      { answer: "move", type: "false" },
      { answer: "graduate", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer to complete the dialogue\n--- This is Bill. He is from Britain.\n--- Nice to meet you.\n--- …………………….. .",
    answers: [
      { answer: "I am glad to meet you, too.", type: "true" },
      { answer: "Meet nice you, too.", type: "false" },
      { answer: "He is from Britain, too", type: "false" },
      { answer: "Me too nice meet you.", type: "false" },
      { answer: "Nice meet you, too", type: "false" },
    ],
  },
  {
    Question: "Match the words with others to make verb phrases.\n\n1. get\na. married\n2. leave\nb. a business\n3. start\nc. to university\n4. go\nd. school",
    answers: [
      { answer: "1-a,2-d,3-b,4-c", type: "true" },
      { answer: "1-a,2-b,3-c,4-c", type: "false" },
      { answer: "1-b,2-a,3-d,4-c", type: "false" },
      { answer: "1-b,2-c,3-a,4-d", type: "false" },
      { answer: "1-a,2-c,3-b,4-d", type: "false" },
    ],
  },
  {
    Question: "Find the word that denotes: A “PERSON WHO SERVES YOU AT THE RESTAURANT”",
    answers: [
      { answer: "a waiter", type: "true" },
      { answer: "shop assistant", type: "false" },
      { answer: "a nurse", type: "false" },
      { answer: "businessman", type: "false" },
      { answer: "a lawyer", type: "false" },
    ],
  },
  {
    Question: "Jenny and Peter are married and ……………… are……………….holiday.",
    answers: [
      { answer: "They / on", type: "true" },
      { answer: "Their / on", type: "false" },
      { answer: "Their / in", type: "false" },
      { answer: "Our / from", type: "false" },
      { answer: "Them / at", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant\nMost people ………..work at the weekend",
    answers: [
      { answer: "don't", type: "true" },
      { answer: "live", type: "false" },
      { answer: "would", type: "false" },
      { answer: "didn't", type: "false" },
      { answer: "have", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant.\nBut I sometimes work ………... weekends, too.",
    answers: [
      { answer: "On", type: "true" },
      { answer: "At", type: "false" },
      { answer: "In", type: "false" },
      { answer: "–", type: "false" },
      { answer: "Over", type: "false" },
    ],
  },
  {
    Question: "Match the words with others to make verb phrases.\n\n1. move\na. from university\n2. study\nb. maths /history\n3. graduate\nc. to a different town/country",
    answers: [
      { answer: "1-c, 2-b, 3-a", type: "true" },
      { answer: "1-b, 2-a, 3-c", type: "false" },
      { answer: "1-b, 2-c, 3-a", type: "false" },
      { answer: "1-a, 2-b, 3-c", type: "false" },
      { answer: "1-a, 2-c, 3-b", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant\nPeople in Brazil………………….speak Spanish",
    answers: [
      { answer: "don't", type: "true" },
      { answer: "live", type: "false" },
      { answer: "could", type: "false" },
      { answer: "may", type: "false" },
      { answer: "would", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant.\nI’m always tired when I get home from work ………….. the evening.",
    answers: [
      { answer: "In", type: "true" },
      { answer: "On", type: "false" },
      { answer: "At", type: "false" },
      { answer: "By", type: "false" },
      { answer: "Above", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant\nBabies…………go to school",
    answers: [
      { answer: "don't", type: "true" },
      { answer: "were", type: "false" },
      { answer: "may", type: "false" },
      { answer: "was", type: "false" },
      { answer: "didn't", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant\nVegetarians…………………eat meat",
    answers: [
      { answer: "don't", type: "true" },
      { answer: "didn't", type: "false" },
      { answer: "may", type: "false" },
      { answer: "was", type: "false" },
      { answer: "were", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant.\nI never drink coffee ……….... night.",
    answers: [
      { answer: "At", type: "true" },
      { answer: "On", type: "false" },
      { answer: "In", type: "false" },
      { answer: "Over", type: "false" },
      { answer: "By", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant\nI get up……….….at the weekend",
    answers: [
      { answer: "early", type: "true" },
      { answer: "lately", type: "false" },
      { answer: "sadly", type: "false" },
      { answer: "late", type: "false" },
      { answer: "later", type: "false" },
    ],
  },
  {
    Question: "Mary plays the piano well. She is …………………….",
    answers: [
      { answer: "A musician", type: "true" },
      { answer: "An actor", type: "false" },
      { answer: "An engineer", type: "false" },
      { answer: "A businesswoman", type: "false" },
      { answer: "A lawyer", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant.\nI usually go to the supermarket ……………... Saturdays.",
    answers: [
      { answer: "On", type: "true" },
      { answer: "At", type: "false" },
      { answer: "In", type: "false" },
      { answer: "–", type: "false" },
      { answer: "Near", type: "false" },
    ],
  },
  {
    Question: "Amrita and Geeta live in……………..in Bangalore",
    answers: [
      { answer: "a flat", type: "true" },
      { answer: "a school", type: "false" },
      { answer: "an office", type: "false" },
      { answer: "a houseway", type: "false" },
      { answer: "a small townway", type: "false" },
    ],
  },
  {
    Question: "Choose the correct tense form.\nMy brother ………..… last year. He was at Glasgow University.",
    answers: [
      { answer: "graduated", type: "true" },
      { answer: "graduate", type: "false" },
      { answer: "to graduate", type: "false" },
      { answer: "will graduate", type: "false" },
      { answer: "didn't graduated", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant\nAmrita live in …………………….",
    answers: [
      { answer: "Bangalore", type: "true" },
      { answer: "the England", type: "false" },
      { answer: "Brazilian", type: "false" },
      { answer: "Spanish", type: "false" },
      { answer: "a France", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant.\nShe  …….... in London.",
    answers: [
      { answer: "Lives", type: "true" },
      { answer: "Leaves", type: "false" },
      { answer: "Lifes", type: "false" },
      { answer: "Livers", type: "false" },
      { answer: "Live", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant\nAmrita and Geeta study …………",
    answers: [
      { answer: "at the university", type: "true" },
      { answer: "in a hospital", type: "false" },
      { answer: "in a small town", type: "false" },
      { answer: "school", type: "false" },
      { answer: "at home", type: "false" },
    ],
  },
  {
    Question: "What’s your address?",
    answers: [
      { answer: "55 Azadlig st., Baku, Azerbaijan.", type: "true" },
      { answer: "Baku, 55 Azadlig st., Azerbaijan.", type: "false" },
      { answer: "Azerbaijan, 55 Azadlig str., Baku.", type: "false" },
      { answer: "Azadlig st., Baku 55, Azerbaijan.", type: "false" },
      { answer: "55 Azadlig st., Azerbaijan, Baku", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant\nAmrita and Geeta go to university ……………………",
    answers: [
      { answer: "by bus", type: "true" },
      { answer: "train", type: "false" },
      { answer: "walk to the river", type: "false" },
      { answer: "by the plane", type: "false" },
      { answer: "by motor way", type: "false" },
    ],
  },
  {
    Question: "Where is your friend …………..? He is from Japan. He is ……………. .",
    answers: [
      { answer: "From / Japanese", type: "true" },
      { answer: "From / Chinese", type: "false" },
      { answer: "Out / Vietnamese", type: "false" },
      { answer: "From / Australian", type: "false" },
      { answer: "Of / American", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant.\nWhere   …………… she   work?",
    answers: [
      { answer: "Does", type: "true" },
      { answer: "Do", type: "false" },
      { answer: "Don’t", type: "false" },
      { answer: "Is", type: "false" },
      { answer: "Has", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant\nJairam and Sanjula live in …………………….",
    answers: [
      { answer: "in a house.", type: "true" },
      { answer: "in the Paris.", type: "false" },
      { answer: "at school", type: "false" },
      { answer: "on a flat.", type: "false" },
      { answer: "in a hospital", type: "false" },
    ],
  },
  {
    Question: "Choose the correct tense form.\nI …………. French when I was at school, but I ……………… very much now.",
    answers: [
      { answer: "studied, don’t remember", type: "true" },
      { answer: "study, remember", type: "false" },
      { answer: "studied, didn’t remember", type: "false" },
      { answer: "study, remembered", type: "false" },
      { answer: "studied, remembered", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant.\nMy mother and father  always watch sport ……….. TV ……….   the weekend.",
    answers: [
      { answer: "On, at", type: "true" },
      { answer: "At, on", type: "false" },
      { answer: "In, on", type: "false" },
      { answer: "With, in", type: "false" },
      { answer: "On, by", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant\n9:55",
    answers: [
      { answer: "five to ten.", type: "true" },
      { answer: "seven past one.", type: "false" },
      { answer: "five to nine", type: "false" },
      { answer: "five o'clock.", type: "false" },
      { answer: "quarter past three", type: "false" },
    ],
  },
  {
    Question: "Choose the correct tense form.\nThe composer Chopin ………..… in Poland, but he ………..… in France for many years.",
    answers: [
      { answer: "was born, lived", type: "true" },
      { answer: "were born, lived", type: "false" },
      { answer: "to be born, live", type: "false" },
      { answer: "were born, lives", type: "false" },
      { answer: "was born, lives", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant\n9:30",
    answers: [
      { answer: "half past nine.", type: "true" },
      { answer: "five o'clock.", type: "false" },
      { answer: "five to nine", type: "false" },
      { answer: "six o'clock.", type: "false" },
      { answer: "twenty past ten", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant.\nI love dancing. I  ………...like  reading books but magazines are OK!",
    answers: [
      { answer: "Don’t", type: "true" },
      { answer: "Isn’t", type: "false" },
      { answer: "Have", type: "false" },
      { answer: "Dislike", type: "false" },
      { answer: "Do", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant\n1:30",
    answers: [
      { answer: "half past one.", type: "true" },
      { answer: "six o'clock.", type: "false" },
      { answer: "ten to", type: "false" },
      { answer: "seven o'clock.", type: "false" },
      { answer: "five past two", type: "false" },
    ],
  },
  {
    Question: "John and Jenny …………… here …………… business.",
    answers: [
      { answer: "Are / in", type: "true" },
      { answer: "Are / on", type: "false" },
      { answer: "Are / from", type: "false" },
      { answer: "Is / in", type: "false" },
      { answer: "Am / on", type: "false" },
    ],
  },
  {
    Question: "Choose the correct matches.\n1. go\n2. study\n3. leave\n\n a. school\n b. math\n c. to university",
    answers: [
      { answer: "1-c, 2- b, 3-a", type: "true" },
      { answer: "1-a, 2- b, 3-c", type: "false" },
      { answer: "1-c, 2- a, 3-b", type: "false" },
      { answer: "1-b, 2- c, 3-a", type: "false" },
      { answer: "1-a, 2- c, 3-b", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant.\nDo you like  ……….. the newspaper? No, I don’t. I watch  the news on TV.",
    answers: [
      { answer: "Reading", type: "true" },
      { answer: "Swimming", type: "false" },
      { answer: "Spending", type: "false" },
      { answer: "Cooking", type: "false" },
      { answer: "Cycling", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant.\nThere were no busses, so I ……..… home.",
    answers: [
      { answer: "walked", type: "true" },
      { answer: "helped", type: "false" },
      { answer: "studied", type: "false" },
      { answer: "tried", type: "false" },
      { answer: "lived", type: "false" },
    ],
  },
  {
    Question: "……………. are you?  I am 19 years old.",
    answers: [
      { answer: "How old", type: "true" },
      { answer: "What", type: "false" },
      { answer: "Where", type: "false" },
      { answer: "What colour", type: "false" },
      { answer: "When", type: "false" },
    ],
  },
  {
    Question: "Choose the correct definition of the word 'graduate'.",
    answers: [
      { answer: "to complete a first university degree successfully.", type: "true" },
      { answer: "to give money as a payment for something.", type: "false" },
      { answer: "to exchange one thing for another thing.", type: "false" },
      { answer: "to remove something, especially", type: "false" },
      { answer: "to increase in size or amount, or to become more advanced or developed.", type: "false" },
    ],
  },
  {
    Question: "My friends and I have got bikes and we like ……….... .",
    answers: [
      { answer: "Cycling", type: "true" },
      { answer: "Going", type: "false" },
      { answer: "Jumping", type: "false" },
      { answer: "Swimming", type: "false" },
      { answer: "Jogging", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant:\nI’m very hungry. How about going to the (…) ?",
    answers: [
      { answer: "canteen", type: "true" },
      { answer: "museum", type: "false" },
      { answer: "cinema", type: "false" },
      { answer: "Zoo", type: "false" },
      { answer: "school", type: "false" },
    ],
  },
  {
    Question: "Choose the correct translation of the sentence.\nHe went to Yale University and studied chemistry.",
    answers: [
      { answer: "O, 1982-ci ildə ABŞ-ın Ayova ştatında anadan olub və əşyaları toplamağı sevirdi.", type: "true" },
      { answer: "O,kimya sahəsi üzrə təhsilini davam etdirdi.", type: "false" },
      { answer: "O,Yel Universitetinə daxil oldu.", type: "false" },
      { answer: "O,kimya üzrə elmi dərəcə aldı.", type: "false" },
      { answer: "O, təhsilini Yel Universitetində başa vurdu.", type: "false" },
    ],
  },
  {
    Question: "Find the correct meaning:\nTo be on holiday",
    answers: [
      { answer: "tətildə olmaq", type: "true" },
      { answer: "bayram etməq", type: "false" },
      { answer: "bayram keçirmək", type: "false" },
      { answer: "tətili qarşlamaq", type: "false" },
      { answer: "bayramda olmaq", type: "false" },
    ],
  },
  {
    Question: "Find the correct meaning:\nShop assistant",
    answers: [
      { answer: "satıcı", type: "true" },
      { answer: "mağazaişi", type: "false" },
      { answer: "köməkci", type: "false" },
      { answer: "böyükmağaza", type: "false" },
      { answer: "bazarlıqetmək", type: "false" },
    ],
  },
  {
    Question: "Choose the correct translation of the sentence.\nHe was born in 1982 in Iowa in the USA and he loved collecting things.",
    answers: [
      { answer: "O, 1982-ci ildə ABŞ-ın Ayova ştatında anadan olub və əşyaları toplamağı sevirdi.", type: "true" },
      { answer: "O, 1982-ci ildə əşyaları toplamağa başladı.", type: "false" },
      { answer: "O, 1982-ci ildə ABŞ-da Ayovada kolleksiya yaratdı.", type: "false" },
      { answer: "1982-ci ildə o ABŞ-dan köçdü.", type: "false" },
      { answer: "O, ABŞ-da 1982-ci ildə ailə həyatı qurdu.", type: "false" },
    ],
  },
  {
    Question: "Choose the wrong variant:",
    answers: [
      { answer: "write-writed", type: "true" },
      { answer: "win-won", type: "false" },
      { answer: "say-said", type: "false" },
      { answer: "wait-waited", type: "false" },
      { answer: "cut-cut", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence: I always brush my teeth (______) I go to bed.",
    answers: [
      { answer: "before", type: "true" },
      { answer: "as soon as", type: "false" },
      { answer: "while", type: "false" },
      { answer: "until", type: "false" },
      { answer: "during", type: "false" },
    ],
  },
  {
    Question: "Write the plural forms of given nouns in correct order:\n1.book\n2.teacher\n3.desk\n4.chair\n5.student\n6.girl\n7.boy\n8.man\n9.woman",
    answers: [
      { answer: "books, teachers, desks, chairs, students, girls, boys, men, women", type: "true" },
      { answer: "books, teacher, desks, chairs, students, girls, boy, men, woman", type: "false" },
      { answer: "books, teachers, desks, chair, students, girls, boys, men, womens", type: "false" },
      { answer: "women books, teachers, desks, chairs, students, girls, boys, man", type: "false" },
      { answer: "book, teacher, desks, chairs, student, girls, boy, men, women", type: "false" },
    ],
  },
  {
    Question: "Write the numerals.\n1) 1\n2) 4\n3) 15\n4) 2\n5) 8\n6) 20\n7) 3",
    answers: [
      { answer: "one, four, fifteen, two, eight, twenty, three", type: "true" },
      { answer: "seven, four, one, two, eight, two, three", type: "false" },
      { answer: "eight, one, fifteen, two, twenty, three, four", type: "false" },
      { answer: "four, two, one, fifteen, eight, twenty, three", type: "false" },
      { answer: "one, fifteen, four, two, twenty, three, eight", type: "false" },
    ],
  },
  {
    Question: "Match the nationalities to the countries.\n1. Germany\n2. Korea\n3. Japan\n4. Italy",
    answers: [
      { answer: "1-a, 2-c, 3-d, 4-b", type: "true" },
      { answer: "1-b, 2-a, 3-d, 4-c", type: "false" },
      { answer: "1-c, 2-d, 3-a, 4-b", type: "false" },
      { answer: "1-d, 2-b, 3-c, 4-a", type: "false" },
      { answer: "1-c, 2-c, 3-a, 4-d", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant:\n- Are you Portuguese?\n- No. (____). I’m Brazilian",
    answers: [
      { answer: "I’m not.", type: "true" },
      { answer: "I did.", type: "false" },
      { answer: "I don’t.", type: "false" },
      { answer: "I can’t", type: "false" },
      { answer: "I didn’t.", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. My sister’s children are my (___) (____).",
    answers: [
      { answer: "Niece and nephew", type: "true" },
      { answer: "Son and daughter", type: "false" },
      { answer: "Cousin and brother", type: "false" },
      { answer: "Niece and aunt", type: "false" },
      { answer: "Daughter and uncle", type: "false" },
    ],
  },
  {
    Question: "Match words or phrases with verb 'live' (…)\n1.in a flat\n2.long hours\n3.English\n4.in London",
    answers: [
      { answer: "1,4", type: "true" },
      { answer: "1,2", type: "false" },
      { answer: "2,3", type: "false" },
      { answer: "3,4", type: "false" },
      { answer: "1,3", type: "false" },
    ],
  },
  {
    Question: "Match words or phrases with verb 'study' (…)\n1.at university\n2.fish\n3.economics\n4.a lot\n5.to English classes",
    answers: [
      { answer: "1,3,4", type: "true" },
      { answer: "1,3,5", type: "false" },
      { answer: "1,2,4", type: "false" },
      { answer: "3,4", type: "false" },
      { answer: "2,3,4", type: "false" },
    ],
  },
  {
    Question: "Match words or phrases with verb 'speak' (…)\n1. Russian\n2. tea\n3. for a big company\n4. a little German",
    answers: [
      { answer: "1,4", type: "true" },
      { answer: "2,3", type: "false" },
      { answer: "1,2", type: "false" },
      { answer: "2,4", type: "false" },
      { answer: "2,3", type: "false" },
    ],
  },
  {
    Question: "Translate the following sentence.\nOnlar çoxlu şokolad yeyirlər.",
    answers: [
      { answer: "They eat a lot of chocolate.", type: "true" },
      { answer: "They eat many chocolates.", type: "false" },
      { answer: "They eat a lot of chocolates.", type: "false" },
      { answer: "We eat lots of chocolates.", type: "false" },
      { answer: "They are eating a lot of chocolates.", type: "false" },
    ],
  },
  {
    Question: "Complete the gap. Last year we (…..) to the cinema a lot.",
    answers: [
      { answer: "went", type: "true" },
      { answer: "gone", type: "false" },
      { answer: "goes", type: "false" },
      { answer: "has go", type: "false" },
      { answer: "have gone", type: "false" },
    ],
  },
  {
    Question: "Complete the gap. (…..) you listen to the news last night?",
    answers: [
      { answer: "did", type: "true" },
      { answer: "have", type: "false" },
      { answer: "has", type: "false" },
      { answer: "will", type: "false" },
      { answer: "had", type: "false" },
    ],
  },
  {
    Question: "Complete the gap. I didn’t (……) to my parents when I was young.",
    answers: [
      { answer: "listen", type: "true" },
      { answer: "have listen", type: "false" },
      { answer: "had listened", type: "false" },
      { answer: "will listen", type: "false" },
      { answer: "listened", type: "false" },
    ],
  },
  {
    Question: "Complete the gap. Great! I saw his last film. It (……) fantastic.",
    answers: [
      { answer: "was", type: "true" },
      { answer: "were", type: "false" },
      { answer: "did", type: "false" },
      { answer: "weren’t", type: "false" },
      { answer: "had", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. Tolkien had a happy (…….):",
    answers: [
      { answer: "childhood", type: "true" },
      { answer: "friendships", type: "false" },
      { answer: "families", type: "false" },
      { answer: "friends", type: "false" },
      { answer: "neighborhoods", type: "false" },
    ],
  },
  {
    Question: "Complete the sentence. Tolkien was very interested in (……)",
    answers: [
      { answer: "ancient languages", type: "true" },
      { answer: "modernized languages", type: "false" },
      { answer: "same languages", type: "false" },
      { answer: "foreigner languages", type: "false" },
      { answer: "older languages", type: "false" },
    ],
  },
  {
    Question: "Write the question for this answer. My last holiday was in August.",
    answers: [
      { answer: "When was your last holiday?", type: "true" },
      { answer: "When did your last holiday?", type: "false" },
      { answer: "When did was your holiday?", type: "false" },
      { answer: "When will be your last holiday?", type: "false" },
      { answer: "When is your last holiday?", type: "false" },
    ],
  },
  {
    Question: "Write the past simple forms of the following verbs. Earn, cut.",
    answers: [
      { answer: "earned, cut", type: "true" },
      { answer: "earn, cut", type: "false" },
      { answer: "cutted, earned", type: "false" },
      { answer: "earned, cutting", type: "false" },
      { answer: "earning, cutted", type: "false" },
    ],
  },
  {
    Question: "Write the negative form of the sentence. He was born in 1960.",
    answers: [
      { answer: "He wasn’t born.", type: "true" },
      { answer: "He didn’t born.", type: "false" },
      { answer: "He wasn’t borned.", type: "false" },
      { answer: "He isn’t born.", type: "false" },
      { answer: "He weren’t born.", type: "false" },
    ],
  },
  {
    Question: "Write the negative form of the sentence. She’s got a car.",
    answers: [
      { answer: "She hasn’t got a car.", type: "true" },
      { answer: "She isn’t got a car.", type: "false" },
      { answer: "She haven’t got a car.", type: "false" },
      { answer: "She didn’t got a car.", type: "false" },
      { answer: "She wasn’t got a car.", type: "false" },
    ],
  },
  {
    Question: "Write the negative form of the sentence. I’ve got a pen.",
    answers: [
      { answer: "I haven’t got a pen.", type: "true" },
      { answer: "I am not got a pen.", type: "false" },
      { answer: "I don’t got a pen.", type: "false" },
      { answer: "I wasn’t got a pen.", type: "false" },
      { answer: "I isn’t got a pen.", type: "false" },
    ],
  },
  {
    Question: "Make the sentence negative. He found his keys.",
    answers: [
      { answer: "He didn’t find his keys.", type: "true" },
      { answer: "He not find his keys.", type: "false" },
      { answer: "He isn’t find his keys.", type: "false" },
      { answer: "He don’t found his keys.", type: "false" },
      { answer: "He hasn’t find his keys.", type: "false" },
    ],
  },
  {
    Question: "Choose the correct line.",
    answers: [
      { answer: "singer, group, music", type: "true" },
      { answer: "singer, book, group", type: "false" },
      { answer: "ball, singer, group", type: "false" },
      { answer: "baby, child, music", type: "false" },
      { answer: "music, singer, computer", type: "false" },
    ],
  },
  {
    Question: "Choose the correct line.",
    answers: [
      { answer: "actor, actress, cinema", type: "true" },
      { answer: "theatre, cinema, football", type: "false" },
      { answer: "writer, director, actor", type: "false" },
      { answer: "film, book, play", type: "false" },
      { answer: "theatre, film, writer", type: "false" },
    ],
  },
  {
    Question: "Choose the correct tense form. We (….) that point yesterday.",
    answers: [
      { answer: "discussed", type: "true" },
      { answer: "were discussing", type: "false" },
      { answer: "had discussed", type: "false" },
      { answer: "have discussed", type: "false" },
      { answer: "are discussed", type: "false" },
    ],
  },
  {
    Question: "Chose the synonym of the underlined word. All the progressive peoples fight against war.",
    answers: [
      { answer: "struggle", type: "true" },
      { answer: "stay", type: "false" },
      { answer: "speak", type: "false" },
      { answer: "start", type: "false" },
      { answer: "demonstrate", type: "false" },
    ],
  },
  {
    Question: "Chose the synonym of the underlined word. I have got an opportunity to learn English.",
    answers: [
      { answer: "a chance", type: "true" },
      { answer: "an idea", type: "false" },
      { answer: "a distribution", type: "false" },
      { answer: "an advertisement", type: "false" },
      { answer: "necessity", type: "false" },
    ],
  },
  {
    Question: "Translate into English. Heyrətamiz mənzərə\nИзумительный пейзаж",
    answers: [
      { answer: "Amazing scenery", type: "true" },
      { answer: "Amusing scenery", type: "false" },
      { answer: "Amused view", type: "false" },
      { answer: "Surprised view", type: "false" },
      { answer: "Amused scenery", type: "false" },
    ],
  },
  {
    Question: "Translate into English. Yüksək inkişaf etmiş ölkələr\nВысокоразвитые страны",
    answers: [
      { answer: "Highly developed countries", type: "true" },
      { answer: "The countries developed very high", type: "false" },
      { answer: "The countries who are high developed", type: "false" },
      { answer: "Highly developing country", type: "false" },
      { answer: "High developed countries", type: "false" },
    ],
  },
  {
    Question: "Choose the synonym of the underlined word. He was speaking so quickly that I couldn’t understand him.",
    answers: [
      { answer: "Fast", type: "true" },
      { answer: "Slowly", type: "false" },
      { answer: "Little", type: "false" },
      { answer: "Silently", type: "false" },
      { answer: "Loudly", type: "false" },
    ],
  },
  {
    Question: "Choose the correct adverb. They can’t understand you, speak (……), please.",
    answers: [
      { answer: "more slowly", type: "true" },
      { answer: "tastiest", type: "false" },
      { answer: "easily", type: "false" },
      { answer: "slow", type: "false" },
      { answer: "clear", type: "false" },
    ],
  },
  {
    Question: "Choose the correct tense form. My children (……) little. They (……) many toys.",
    answers: [
      { answer: "are, have", type: "true" },
      { answer: "had, is", type: "false" },
      { answer: "were, has", type: "false" },
      { answer: "was, has not", type: "false" },
      { answer: "will have, is hot", type: "false" },
    ],
  },
  {
    Question: "Choose the nouns in the singular.\n1) feet\n2) people\n3) news\n4) Germans\n5) man\n6) women\n7) goose\n8) gentlemen\n9) tooth\n10) hen",
    answers: [
      { answer: "3,5,7,9,10", type: "true" },
      { answer: "1,3,4,6,8", type: "false" },
      { answer: "2,4,6,7,10", type: "false" },
      { answer: "1,2,6,7,8", type: "false" },
      { answer: "4,5,8,9,10", type: "false" },
    ],
  },
  {
    Question: "Choose the row with the uncountable nouns.\n1) pen, flower, goose, man, train\n2) advice, thing, page, park, box\n3) cheese, salt, work, flour, knowledge\n4) bread, progress, economics, furniture, grass",
    answers: [
      { answer: "3,4", type: "true" },
      { answer: "1,3", type: "false" },
      { answer: "2,5", type: "false" },
      { answer: "4,5", type: "false" },
      { answer: "1,2", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: My mother’s sister is my (...).",
    answers: [
      { answer: "aunt", type: "true" },
      { answer: "niece", type: "false" },
      { answer: "sister", type: "false" },
      { answer: "sister-in-law", type: "false" },
      { answer: "nephew", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: My father’s parents are my (...).",
    answers: [
      { answer: "grandparents", type: "true" },
      { answer: "niece", type: "false" },
      { answer: "distant relatives", type: "false" },
      { answer: "parents-in-law", type: "false" },
      { answer: "stepparents", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: My brother’s son is my (...).",
    answers: [
      { answer: "nephew", type: "true" },
      { answer: "brother-in-law", type: "false" },
      { answer: "niece", type: "false" },
      { answer: "cousin", type: "false" },
      { answer: "brother", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: Aunt’s children are my (...).",
    answers: [
      { answer: "cousins", type: "true" },
      { answer: "brothers", type: "false" },
      { answer: "sisters", type: "false" },
      { answer: "nephews", type: "false" },
      { answer: "nieces", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: My children are my parents’ (...).",
    answers: [
      { answer: "grandchildren", type: "true" },
      { answer: "grandsons", type: "false" },
      { answer: "granddaughters", type: "false" },
      { answer: "children-in-law", type: "false" },
      { answer: "grandnephews", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: Our large family consists (...) 8 people.",
    answers: [
      { answer: "of", type: "true" },
      { answer: "on", type: "false" },
      { answer: "at", type: "false" },
      { answer: "with", type: "false" },
      { answer: "by", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant: He usually gets up (...) half past seven.",
    answers: [
      { answer: "at", type: "true" },
      { answer: "in", type: "false" },
      { answer: "on", type: "false" },
      { answer: "a", type: "false" },
      { answer: "into", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. He tries to do (...) morning exercises every morning.",
    answers: [
      { answer: "his", type: "true" },
      { answer: "her", type: "false" },
      { answer: "hers", type: "false" },
      { answer: "our", type: "false" },
      { answer: "my", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. On week-ends we like to go (...) a walk with our friends.",
    answers: [
      { answer: "for", type: "true" },
      { answer: "on", type: "false" },
      { answer: "at", type: "false" },
      { answer: "with", type: "false" },
      { answer: "to", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. Sometimes I have scrambled eggs (...) breakfast.",
    answers: [
      { answer: "for", type: "true" },
      { answer: "on", type: "false" },
      { answer: "at", type: "false" },
      { answer: "( - )", type: "false" },
      { answer: "by", type: "false" },
    ],
  },
  {
    Question: "Choose the correct answer. What is your job?",
    answers: [
      { answer: "I’m a student.", type: "true" },
      { answer: "I’m twenty one.", type: "false" },
      { answer: "I’m sleeping.", type: "false" },
      { answer: "I’m not at home.", type: "false" },
      { answer: "I’m tired.", type: "false" },
    ],
  },
  {
    Question: "Choose the correct word. Sunday is (___).",
    answers: [
      { answer: "a rest day", type: "true" },
      { answer: "a working day", type: "false" },
      { answer: "the second day of the week", type: "false" },
      { answer: "a tragic day", type: "false" },
      { answer: "have a to dictation", type: "false" },
    ],
  },
  {
    Question: "Choose the correct word. My mother’s a teacher. She teaches (___).",
    answers: [
      { answer: "students", type: "true" },
      { answer: "mothers", type: "false" },
      { answer: "workers", type: "false" },
      { answer: "dentists", type: "false" },
      { answer: "police officers", type: "false" },
    ],
  },
  {
    Question: "Choose synonym for underlined word. We return the books in time.",
    answers: [
      { answer: "give back", type: "true" },
      { answer: "eat", type: "false" },
      { answer: "drink", type: "false" },
      { answer: "play", type: "false" },
      { answer: "drive", type: "false" },
    ],
  },
  {
    Question: "Choose synonyms:",
    answers: [
      { answer: "beautiful - nice", type: "true" },
      { answer: "yes - no", type: "false" },
      { answer: "large - small", type: "false" },
      { answer: "large - red", type: "false" },
      { answer: "black - red", type: "false" },
    ],
  },
  {
    Question: "Choose synonyms:",
    answers: [
      { answer: "sandals - shoes", type: "true" },
      { answer: "city - country", type: "false" },
      { answer: "rabbit - wolf", type: "false" },
      { answer: "red - black", type: "false" },
      { answer: "bird - animal", type: "false" },
    ],
  },
  {
    Question: "Choose the correct pronouns. Nick asks Bob to help the pupils.",
    answers: [
      { answer: "he, him, them", type: "true" },
      { answer: "his, he, it", type: "false" },
      { answer: "it, he, she", type: "false" },
      { answer: "him, her, him", type: "false" },
      { answer: "him, her, her", type: "false" },
    ],
  },
  {
    Question: "Choose the correct pronouns: (___) have some problems in (___) work.",
    answers: [
      { answer: "we, our", type: "true" },
      { answer: "his, she", type: "false" },
      { answer: "she, her", type: "false" },
      { answer: "it, its", type: "false" },
      { answer: "he, its", type: "false" },
    ],
  },
  {
    Question: "Choose the correct pronouns. I like (___) story, (___) is very funny.",
    answers: [
      { answer: "this, it", type: "true" },
      { answer: "these, them", type: "false" },
      { answer: "that, they", type: "false" },
      { answer: "they, it", type: "false" },
      { answer: "those, these", type: "false" },
    ],
  },
  {
    Question: "Choose the correct word. Jane is a student. (___) lessons begin at 8 o’clock.",
    answers: [
      { answer: "Her", type: "true" },
      { answer: "They", type: "false" },
      { answer: "It", type: "false" },
      { answer: "We", type: "false" },
      { answer: "He", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. Thank you (___) (___) things.",
    answers: [
      { answer: "For/those", type: "true" },
      { answer: "From/this", type: "false" },
      { answer: "On/that", type: "false" },
      { answer: "In/that", type: "false" },
      { answer: "For/this", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. Have you got a bottle (___) water (___) you?",
    answers: [
      { answer: "Of/with", type: "true" },
      { answer: "Of/at", type: "false" },
      { answer: "From/on", type: "false" },
      { answer: "For/about", type: "false" },
      { answer: "In/for", type: "false" },
    ],
  },
  {
    Question: "Choose the correct variant. Carla’s house is (___) the center (___) the city.",
    answers: [
      { answer: "In/of", type: "true" },
      { answer: "In/from", type: "false" },
      { answer: "On/at", type: "false" },
      { answer: "In/with", type: "false" },
      { answer: "At/for", type: "false" },
    ],
  },
  {
    Question: "Complete the gap. The first Spiderman film (….) in 2002.",
    answers: [
      { answer: "appeared", type: "true" },
      { answer: "has appeared", type: "false" },
      { answer: "had appeared", type: "false" },
      { answer: "appears", type: "false" },
      { answer: "were appeared", type: "false" },
    ],
  },
  {
    Question: "Find the verbs.\n1) to go \n2) to leave \n3) to write \n4) to decide \n\na) yazmaq \nb) qərara gəlməkv\nc) tərk etmək \nd) getmək",
    answers: [
      { answer: "1-d, 2-c, 3-a, 4-b", type: "true" },
      { answer: "1-d, 2-c, 3-b, 4-a", type: "false" },
      { answer: "1-c, 2-d, 3-b, 4-a", type: "false" },
      { answer: "1-a, 2-b, 3-c, 4-d", type: "false" },
      { answer: "1-b, 2-c, 3-d, 4-a", type: "false" },
    ],
  },
];

export default Questions;
