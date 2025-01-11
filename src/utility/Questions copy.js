// Questions.js
const Questions = [
  {
    count: 0,
       id: 1,
     Question: "1. hesablayın: \\( \\int \\frac{dx}{5 + 4x} \\)",
     answers: [
       { answer: "\\( \\ln \\sqrt[4]{5 + 4x} + C \\)", type: "true" },
       { answer: "\\( \\frac{x}{2} + 5 + 4x + C \\)", type: "false" },
       {
         answer:
           "\\( \\frac{x^3}{3} - \\frac{x^4}{4} + \\frac{x^5}{5} - \\frac{x^6}{6} + \\frac{x^7}{7} + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\frac{x^4}{4} + \\frac{x^5}{5} - \\frac{x^6}{6} + \\frac{x^7}{7} + C \\)",
         type: "false",
       },
       {
         answer: "\\( \\frac{x^3}{3} - 500 \\frac{x^4}{4} + C \\)",
         type: "false",
       },
     ],
   },
   {
    count: 0,
       id: 2,
     Question:
       "2. \\( M(x)dx + N(y)dy = 0 \\) şəklində tənliyə nə cür tənlik deyilir?",
     answers: [
       { answer: "Dəyişənlərinə ayrılmış diferensial tənlik", type: "true" },
       { answer: "Tam diferensial tənlik", type: "false" },
       {
         answer: "Dəyişənlərinə ayrıla bilən diferensial tənlik",
         type: "false",
       },
       { answer: "Birinci dərəcəli diferensial tənlik", type: "false" },
       { answer: "Birinci tərtibli xətti diferensial tənlik", type: "false" },
     ],
   },
   {
    count: 0,
       id: 3,
     Question: "3. hesablayın \\( \\int \\frac{x}{\\sqrt{x^2 - 1}} dx \\)",
     answers: [
       { answer: "\\( \\sqrt{x^2 - 1} + C \\)", type: "true" },
       {
         answer:
           "\\( x^{4}\\sqrt{x} + \\frac{4}{3\\sqrt{x^3}} - \\frac{24}{17}x^{12}\\sqrt{x^5} + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\frac{4}{5}x^{4}\\sqrt{x} + \\frac{4}{3\\sqrt{x^3}} - x^{12}\\sqrt{x^5} + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\frac{4}{5}x^{4}\\sqrt{x} + \\frac{4}{3\\sqrt{x^3}} - \\frac{24}{16}x^{12}\\sqrt{x^5} + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\frac{4}{7}x^{4}\\sqrt{x} + \\frac{4}{3\\sqrt{x^3}} - \\frac{24}{17}x^{12}\\sqrt{x^5} + C \\)",
         type: "false",
       },
     ],
   },
   {
    count: 0,
       id: 4,
     Question: "4. \\( \\int (1 + \\sin x + \\cos x) \\, dx \\)",
     answers: [
       { answer: "\\( x - \\cos x + \\sin x + C \\)", type: "true" },
       { answer: "\\( -\\cos x + \\sin x + C \\)", type: "false" },
       { answer: "\\( x - \\cos x - \\sin x + C \\)", type: "false" },
       { answer: "\\( x + \\cos x + \\sin x + C \\)", type: "false" },
       { answer: "\\( x - \\tan x + \\sin x + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 5,
     Question: "5. \\( \\int \\cot^2 x \\, dx \\)",
     answers: [
       { answer: "\\( -x - {ctg} x + C \\)", type: "true" },
       { answer: "\\( -x - {tg} x + C \\)", type: "false" },
       { answer: "\\( x + {ct} x + C \\)", type: "false" },
       { answer: "\\( x - \\cos x + C \\)", type: "false" },
       { answer: "\\( x - \\sin x + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 6,
     Question:
       "6. \\( \\int \\frac{\\sqrt{x^2 + 1} + \\sqrt{x^2 - 1}}{\\sqrt{x^4 - 1}} \\, dx \\)",
     answers: [
       {
         answer: "\\( \\arcsin x + \\ln |x + \\sqrt{1 + x^2}| + C \\)",
         type: "true",
       },
       {
         answer: "\\( \\arccos x + \\ln |x + \\sqrt{1 + x^2}| + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\operatorname{arcctg} x + \\ln |x + \\sqrt{1 + x^2}| + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\operatorname{arcctg} x + \\ln |x + \\sqrt{1 + x^2}| + C \\)",
         type: "false",
       },
       {
         answer: "\\( \\sin x + \\ln |x + \\sqrt{1 + x^2}| + C \\)",
         type: "false",
       },
     ],
   },
   {
    count: 0,
       id: 7,
     Question: "7. \\( \\int \\frac{dx}{x - a} \\) HESABLAYIN",
     answers: [
       { answer: "\\( \\ln|x - a| + C \\)", type: "true" },
       { answer: "\\( \\ln|x + \\sqrt{x^2 + 1}| + C \\)", type: "false" },
       { answer: "\\( \\ln|x - \\sqrt{x^2 - 1}| + C \\)", type: "false" },
       { answer: "\\( \\ln|x + \\sqrt{x^2 - 1}| + C \\)", type: "false" },
       { answer: "\\( \\ln|x - \\sqrt{x^2 + 1}| + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 8,
     Question:
       "8. \\( \\int \\frac{\\sqrt{1 - 2x + x^2}}{1 - x} \\, dx \\) HESABLAYIN",
     answers: [
       {
         answer: "\\( -\\frac{5}{2}(1 - x)^{\\frac{2}{5}} + C \\)",
         type: "true",
       },
       { answer: "\\( -\\frac{3}{5}(1 - x)^{\\frac{5}{2}} \\)", type: "false" },
       { answer: "\\( -\\frac{2}{7}(1 - x)^{\\frac{5}{2}} \\)", type: "false" },
       { answer: "\\( -\\frac{2}{5}(2 - x)^{\\frac{5}{2}} \\)", type: "false" },
       { answer: "\\( -\\frac{2}{5}(2 + x)^{\\frac{5}{2}} \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 9,
     Question: "9. \\( \\int \\frac{dx}{e^x + e^{-x}} \\) HESABLAYIN",
     answers: [
       { answer: "\\( \\operatorname{arctge}^x + C \\)", type: "true" },
       { answer: "\\( \\ln(1 + e^x) + C \\)", type: "false" },
       { answer: "\\( \\arccos(1 + e^x) + C \\)", type: "false" },
       { answer: "\\( \\arcsin(1 + e^x) + C \\)", type: "false" },
       { answer: "\\( \\operatorname{ctg}(1 + e^x) + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 10,
     Question: "10. \\( y \\frac{dy}{dx} = 3 \\) diferensial tənliyinin həllini tap",
     answers: [
       { answer: "\\( y^2 = 6x + C \\)", type: "true" },
       { answer: "\\( y^2 = 5x + C \\)", type: "false" },
       { answer: "\\( y^2 = 6 + x + C \\)", type: "false" },
       { answer: "\\( y^2 = 6 - x + C \\)", type: "false" },
       { answer: "\\( y^2 = \\frac{x^2}{2} + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 11,
     Question:
       "11. \\( \\frac{dy}{dx} = y \\) diferensial tənliyinin ümumi həllini yazın",
     answers: [
       { answer: "\\( y = Ce^x \\)", type: "true" },
       { answer: "\\( y = Ce^{2x} \\)", type: "false" },
       { answer: "\\( y = Ce^{\\frac{x}{2}} \\)", type: "false" },
       { answer: "\\( y = Ce^{3x} \\)", type: "false" },
       { answer: "\\( y = 3e^x + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 12,
     Question:
       "12. \\( y \\frac{dy}{dx} = 5 \\) diferensial tənliyinin ümumi həllini yazın",
     answers: [
       { answer: "\\( y^2 = 10x + C \\)", type: "true" },
       { answer: "\\( y = Ce^{\\frac{x}{2}} \\)", type: "false" },
       { answer: "\\( y = Ce^{5x} \\)", type: "false" },
       { answer: "\\( y = Ce^{\\frac{x}{4}} \\)", type: "false" },
       { answer: "\\( y = Ce^{\\frac{x}{3}} \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 13,
     Question:
       "13. \\( y \\frac{dy}{dx} = 2x \\) diferensial tənliyinin ümumi həllini yazın",
     answers: [
       { answer: "\\( y^2 = 2x^2 + C \\)", type: "true" },
       { answer: "\\( y = Cx^2 \\)", type: "false" },
       { answer: "\\( y = C + x^2 \\)", type: "false" },
       { answer: "\\( y = C - x^2 \\)", type: "false" },
       { answer: "\\( y = Cx^3 \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 14,
     Question:
       "14. \\( y dy = 3x^2 dx \\) diferensial tənliyinin ümumi həllini yazın",
     answers: [
       { answer: "\\( y^2 = 2x^3 + C \\)", type: "true" },
       { answer: "\\( 2x = 3 + y^2 + C \\)", type: "false" },
       { answer: "\\( x = 3y^2 + C \\)", type: "false" },
       { answer: "\\( 2x = 3 - y^2 + C \\)", type: "false" },
       { answer: "\\( 2x = 3y^3 + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 15,
     Question:
       "15. \\( \\frac{dy}{dx} = -\\frac{y}{x} \\) diferensial tənliyinin ümumi həllini yazın",
     answers: [
       { answer: "\\( y = C - x \\)", type: "true" },
       { answer: "\\( y = x + C \\)", type: "false" },
       { answer: "\\( y = \\frac{C}{x} \\)", type: "false" },
       { answer: "\\( y = Cx \\)", type: "false" },
       { answer: "\\( y = \\frac{C}{x^2} \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 16,
     Question:
       "16. \\( x^2 dx + y^2 dy = 0 \\) diferensial tənliyinin ümumi həllini yazın",
     answers: [
       { answer: "\\( x^3 + y^3 = C \\)", type: "true" },
       { answer: "\\( \\frac{x^3}{3} = C \\)", type: "false" },
       { answer: "\\( x^2 + y^2 = C \\)", type: "false" },
       { answer: "\\( y = x + C \\)", type: "false" },
       { answer: "\\( y = x + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 17,
     Question:
       "17. \\( (a + x)y dx + x dy = 0 \\) diferensial tənliyinin ümumi həllini yazın",
     answers: [
       { answer: "\\( y = Cx^{-a}e^{-x} \\)", type: "true" },
       { answer: "\\( y = Cx^a e^{-x} \\)", type: "false" },
       { answer: "\\( y = Cx^{-a} e^x \\)", type: "false" },
       { answer: "\\( y = Cx^{-a} e^{-3x} \\)", type: "false" },
       { answer: "\\( y = Cx^{-a} e^{-2x} \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 18,
     Question:
       "18. \\( y dx - (x^2 - 1)dy = 0 \\) diferensial tənliyinin ümumi həllini yazın",
     answers: [
       { answer: "\\( y^2 = C \\frac{x - 1}{x + 1} \\)", type: "true" },
       { answer: "\\( y^2 = C \\frac{2x - 1}{x + 1} \\)", type: "false" },
       { answer: "\\( y^2 = C \\frac{x + 1}{x - 1} \\)", type: "false" },
       { answer: "\\( y^2 = C(x - 1) \\)", type: "false" },
       { answer: "\\( y^2 = Cx \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 19,
     Question:
       "19. \\( (n - 1)y dx - x dy = 0 \\) diferensial tənliyinin ümumi həllini yazın",
     answers: [
       { answer: "\\( y = Cx^{n - 1} \\)", type: "true" },
       { answer: "\\( y = Cx^n \\)", type: "false" },
       { answer: "\\( y = \\frac{x^3}{C} \\)", type: "false" },
       { answer: "\\( y = Cx + x^{-1} \\)", type: "false" },
       { answer: "\\( y = C \\frac{x + x^{-1}}{y^2} \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 20,
     Question:
       "20. \\( 2xdy + ydx = 0 \\) diferensial tənliyinin ümumi həllini yazın",
     answers: [
       { answer: "\\( y^2x = C \\)", type: "true" },
       { answer: "\\( y^2 + x + C \\)", type: "false" },
       { answer: "\\( \\frac{y^2}{x} = C \\)", type: "false" },
       { answer: "\\( y = x^2 + C \\)", type: "false" },
       { answer: "\\( y = x^2 - yC \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 21,
     Question:
       "21. \\( x = y \\frac{dy}{dx} \\) diferensial tənliyinin ümumi həllini yazın",
     answers: [
       { answer: "\\( x^2 - y^2 = C \\)", type: "true" },
       { answer: "\\( x^2 + y^2 = C \\)", type: "false" },
       { answer: "\\( x^3 - y^3 = C \\)", type: "false" },
       { answer: "\\( x^3 + y^3 = C \\)", type: "false" },
       { answer: "\\( x^2 = Cy^2 \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 22,
     Question: "22. \\( \\int_{4}^{5} x \\sqrt{x^2 - 16} \\, dx \\) HESABLAYIN",
     answers: [
       { answer: "9", type: "true" },
       { answer: "3", type: "false" },
       { answer: "4", type: "false" },
       { answer: "7", type: "false" },
       { answer: "8", type: "false" },
     ],
   },
   {
    count: 0,
       id: 23,
     Question: "23. Aşağıdakılardan hansı hissə-hissə inteqrallama düsturudur",
     answers: [
       {
         answer: "\\( \\int_a^b u dv = uv \\Big|_a^b - \\int_a^b v du \\)",
         type: "true",
       },
       {
         answer:
           "\\( \\int_a^b f(x) dx = \\int_a^\\beta f[\\varphi(t)] \\varphi'(t) dt \\)",
         type: "false",
       },
       { answer: "\\( \\int f(x) dx = F(x) + C \\)", type: "false" },
       { answer: "\\( \\int_a^b f(t) dt = F(b) - F(a) \\)", type: "false" },
       { answer: "\\( \\int f(x) dx = \\int f(t) dt + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 24,
     Question: "24. \\( \\int_1^2 \\frac{4x + 2}{2x - 1} \\, dx \\) HESABLAYIN",
     answers: [
       { answer: "\\( 2 + 2 \\ln 3 \\)", type: "true" },
       { answer: "1", type: "false" },
       { answer: "5", type: "false" },
       { answer: "7", type: "false" },
       { answer: "\\( 3 + 2 \\ln 3 \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 25,
     Question: "25. \\( \\int_4^9 \\frac{e^x dx}{e^x - 1} \\) HESABLAYIN",
     answers: [
       { answer: "\\( \\ln|e^x - 1| + C \\)", type: "true" },
       { answer: "1", type: "false" },
       { answer: "5", type: "false" },
       { answer: "7", type: "false" },
       { answer: "\\( 7 + 2 \\ln 3 \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 26,
     Question: "26. \\( \\int_e^{e^2} \\frac{2 \\ln x + 1}{x} \\, dx \\) HESABLAYIN",
     answers: [
       { answer: "4", type: "true" },
       { answer: "1", type: "false" },
       { answer: "5", type: "false" },
       { answer: "7", type: "false" },
       { answer: "3", type: "false" },
     ],
   },
   {
    count: 0,
       id: 27,
     Question: "27. \\( \\int_0^7 \\frac{dx}{\\sqrt{2x + 1}} \\, \\) HESABLAYIN",
     answers: [
       { answer: "\\( \\sqrt{15} - 1 \\)", type: "true" },
       { answer: "1", type: "false" },
       { answer: "5", type: "false" },
       { answer: "7", type: "false" },
       { answer: "3", type: "false" },
     ],
   },
   {
    count: 0,
       id: 28,
     Question:
       "28. \\( \\int_{\\ln 3}^{\\ln 8} \\frac{e^x  dx}{\\sqrt{e^x + 1}} \\) HESABLAYIN",
     answers: [
       { answer: "2", type: "true" },
       { answer: "1", type: "false" },
       { answer: "5", type: "false" },
       { answer: "7", type: "false" },
       { answer: "8", type: "false" },
     ],
   },
   {
    count: 0,
       id: 29,
     Question: "29. \\( \\int_0^{\\ln 2} xe^x \\, dx \\) HESABLAYIN",
     answers: [
       { answer: "\\( \\ln 4 - 1 \\)", type: "true" },
       { answer: "\\( \\ln 2 - 2 \\)", type: "false" },
       { answer: "5", type: "false" },
       { answer: "7", type: "false" },
       { answer: "8", type: "false" },
     ],
   },
   {
    count: 0,
       id: 30,
     Question: "30. \\( \\int_0^1 \\arccos x \\, dx \\) HESABLAYIN",
     answers: [
       { answer: "1", type: "true" },
       { answer: "6", type: "false" },
       { answer: "8", type: "false" },
       { answer: "5", type: "false" },
       { answer: "3", type: "false" },
     ],
   },
   {
    count: 0,
       id: 31,
     Question: "31. \\( \\int_0^1 \\frac{dx}{x^2 + 2x + 2} \\) HESABLAYIN",
     answers: [
       {
         answer: "\\( \\operatorname{arctg} 2 - \\frac{\\pi}{4} \\)",
         type: "true",
       },
       { answer: "\\( \\frac{\\pi}{3} \\)", type: "false" },
       { answer: "\\( \\frac{\\pi}{2} \\)", type: "false" },
       { answer: "5", type: "false" },
       { answer: "6", type: "false" },
     ],
   },
   {
    count: 0,
       id: 32,
     Question: "32. \\( \\int_1^2 \\frac{dx}{x^2 + 2x} \\) HESABLAYIN",
     answers: [
       { answer: "\\( \\ln \\frac{\\sqrt{3}}{2} \\)", type: "true" },
       { answer: "\\( \\frac{1}{3} \\ln 1.5 \\)", type: "false" },
       { answer: "4", type: "false" },
       { answer: "3", type: "false" },
       { answer: "5", type: "false" },
     ],
   },
   {
    count: 0,
       id: 33,
     Question: "33. \\( \\int_0^1 e^{2x} \\, dx \\) HESABLAYIN",
     answers: [
       { answer: "\\( \\frac{1}{2} (e^2 - 1) \\)", type: "true" },
       { answer: "\\( \\frac{1}{3} (e^2 + 1) \\)", type: "false" },
       { answer: "\\( \\frac{1}{5} (e^2 + 1) \\)", type: "false" },
       { answer: "\\( \\frac{1}{7} (e^2 + 1) \\)", type: "false" },
       { answer: "\\( \\frac{1}{4} (e^2 - 1) \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 34,
     Question:
       "34. \\( \\int_0^{\\pi/2} \\varphi \\sin 2\\varphi \\, d\\varphi \\) HESABLAYIN",
     answers: [
       { answer: "\\( \\frac{\\pi}{4} \\)", type: "true" },
       { answer: "\\( -\\frac{\\pi}{4} \\)", type: "false" },
       { answer: "6", type: "false" },
       { answer: "2", type: "false" },
       { answer: "5", type: "false" },
     ],
   },
   {
    count: 0,
       id: 35,
     Question: "35. \\( \\int_1^e \\ln x \\, dx \\) HESABLAYIN",
     answers: [
       { answer: "1", type: "true" },
       { answer: "-1", type: "false" },
       { answer: "0", type: "false" },
       { answer: "8", type: "false" },
       { answer: "2", type: "false" },
     ],
   },
   {
    count: 0,
       id: 36,
     Question:
       "36. \\( \\int_0^{\\sqrt{3}} x \\operatorname{arctg} x \\, dx \\) HESABLAYIN",
     answers: [
       {
         answer: "\\( \\frac{2\\pi}{3} - \\frac{\\sqrt{3}}{2} \\)",
         type: "true",
       },
       {
         answer: "\\( \\frac{2\\pi}{5} - \\frac{\\sqrt{3}}{2} \\)",
         type: "false",
       },
       {
         answer: "\\( \\frac{2\\pi}{3} + \\frac{\\sqrt{3}}{2} \\)",
         type: "false",
       },
       {
         answer: "\\( \\frac{2\\pi}{3} - \\frac{\\sqrt{3}}{3} \\)",
         type: "false",
       },
       {
         answer: "\\( \\frac{2\\pi}{7} - \\frac{\\sqrt{3}}{2} \\)",
         type: "false",
       },
     ],
   },
   {
    count: 0,
       id: 37,
     Question:
       "37. \\( \\int \\frac{\\operatorname{arctg} x}{1 + x^2} \\, dx \\) HESABLAYIN",
     answers: [
       {
         answer: "\\( \\frac{1}{2} \\operatorname{arctg}^2 x + C \\)",
         type: "true",
       },
       {
         answer: "\\( \\frac{1}{3} \\operatorname{arctg} x + C \\)",
         type: "false",
       },
       {
         answer: "\\( \\frac{1}{7} \\operatorname{arctg} x + C \\)",
         type: "false",
       },
       {
         answer: "\\( \\frac{1}{5} \\operatorname{arctg} x + C \\)",
         type: "false",
       },
       {
         answer: "\\( \\frac{1}{4} \\operatorname{arctg} x + C \\)",
         type: "false",
       },
     ],
   },
   {
    count: 0,
       id: 38,
     Question: "38.\\( \\int \\frac{1 + x}{1 - x} \\, dx \\) HESABLAYIN",
     answers: [
       { answer: "\\( -x - 2 \\ln|1 - x| + C \\)", type: "true" },
       { answer: "\\( x - 2 \\ln|1 - x| + C \\)", type: "false" },
       { answer: "\\( x + 2 \\ln|1 - x| + C \\)", type: "false" },
       { answer: "\\( -2 \\ln|1 + x| + C \\)", type: "false" },
       { answer: "\\( 2 - 2 \\ln|1 - x| + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 39,
     Question: "39. \\( \\int \\frac{x+1}{\\sqrt{x}} \\, dx \\) tapın",
     answers: [
       {
         answer: "\\( \\frac{2}{3} x \\sqrt{x} + 2 \\sqrt{x} + C \\)",
         type: "true",
       },
       { answer: "\\( \\sqrt{x} - 1 + C \\)", type: "false" },
       { answer: "\\( 3 \\sqrt{x} + C \\)", type: "false" },
       { answer: "\\( \\sqrt{3x} + C \\)", type: "false" },
       { answer: "\\( x \\sqrt{5} + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 40,
     Question: "40. \\( \\int \\operatorname{arctg} x \\, dx \\) HESABLAYIN",
     answers: [
       {
         answer:
           "\\( \\operatorname{arctg} x - \\frac{1}{2} \\ln|1 + x^2| + C \\)",
         type: "true",
       },
       {
         answer:
           "\\( \\operatorname{arctg} x - \\frac{1}{2} \\ln|1 + x| + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\operatorname{arctg} x + \\frac{1}{2} \\ln|1 + x^2| + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\operatorname{arctg} x - \\frac{1}{3} \\ln|1 + x^2| + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\operatorname{arctg} x - \\frac{1}{5} \\ln|1 + x^2| + C \\)",
         type: "false",
       },
     ],
   },
   {
    count: 0,
       id: 41,
     Question: "41. \\( \\int_0^1 \\arccos x \\, dx \\) HESABLAYIN",
     answers: [
       { answer: "1", type: "true" },
       { answer: "2", type: "false" },
       { answer: "3", type: "false" },
       { answer: "9", type: "false" },
       { answer: "10", type: "false" },
     ],
   },
   {
    count: 0,
       id: 42,
     Question: "42. \\( \\int \\frac{1}{1 + x^2} \\, dx \\) HESABLAYIN",
     answers: [
       { answer: "\\( \\operatorname{arctg} x + C \\)", type: "true" },
       {
         answer: "\\( \\frac{1}{2} \\operatorname{arctg} x + C \\)",
         type: "false",
       },
       { answer: "\\( \\operatorname{arctg}^2 x + C \\)", type: "false" },
       { answer: "\\( \\ln x \\)", type: "false" },
       { answer: "-9", type: "false" },
     ],
   },
   {
    count: 0,
       id: 43,
     Question: "43. \\( \\int \\frac{e^x  dx}{2 + e^x} \\) HESABLAYIN",
     answers: [
       { answer: "\\( \\ln|2 + e^x| + C \\)", type: "true" },
       { answer: "\\( 2 + x + C \\)", type: "false" },
       { answer: "\\( \\operatorname{arctg}^2 x + C \\)", type: "false" },
       { answer: "\\( \\ln x \\)", type: "false" },
       { answer: "-9", type: "false" },
     ],
   },
   {
    count: 0,
       id: 44,
     Question:
       "44. \\( \\int \\frac{\\sin x}{\\sqrt{\\cos^3 x}} \\, dx \\) HESABLAYIN",
     answers: [
       { answer: "\\( \\frac{2}{\\sqrt{\\cos x}} + C \\)", type: "true" },
       { answer: "\\( \\arcsin x + C \\)", type: "false" },
       { answer: "\\( \\operatorname{arctg}^2 x + C \\)", type: "false" },
       { answer: "\\( \\cos x \\)", type: "false" },
       { answer: "2", type: "false" },
     ],
   },
   {
    count: 0,
       id: 45,
     Question:
       "45. \\( \\int \\frac{a^{2x} - 1}{\\sqrt{a^x}} \\, dx \\) HESABLAYIN",
     answers: [
       {
         answer:
           "\\( \\frac{2}{\\ln a} \\left( \\frac{1}{3} a^{\\frac{3x}{2}} + a^{-\\frac{x}{2}} \\right) \\)",
         type: "true",
       },
       { answer: "\\( \\arcsin x + C \\)", type: "false" },
       { answer: "\\( \\operatorname{arctg}^2 x + C \\)", type: "false" },
       { answer: "\\( \\sqrt{a^x} + C \\)", type: "false" },
       { answer: "2", type: "false" },
     ],
   },
   {
    count: 0,
       id: 46,
     Question: "46. \\( \\int \\frac{dx}{\\sin^3 x} \\) HESABLAYIN",
     answers: [
       {
         answer:
           "\\( -\\frac{\\cos x}{2 \\sin^2 x} + \\frac{1}{2} \\ln \\left| \\operatorname{tg} \\frac{x}{2} \\right| + C \\)",
         type: "true",
       },
       {
         answer:
           "\\( -\\frac{\\cos x}{2 \\sin x} + \\frac{1}{2} \\ln \\left| \\operatorname{tg} \\frac{x}{2} \\right| + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( -\\frac{\\cos x}{2 \\sin^3 x} + \\frac{1}{2} \\ln \\left| \\operatorname{tg} \\frac{x}{2} \\right| + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( -\\frac{\\cos x}{2 \\sin^2 x} + \\ln \\left| \\operatorname{tg} \\frac{x}{2} \\right| + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\frac{\\cos x}{2 \\sin^2 x} + \\frac{1}{2} \\ln \\left| \\operatorname{tg} \\frac{x}{2} \\right| + C \\)",
         type: "false",
       },
     ],
   },
   {
    count: 0,
       id: 47,
     Question:
       "47. \\( \\int \\frac{\\sin^4 x}{\\cos^5 x} \\, dx \\) HESABLAYIN",
     answers: [
       { answer: "\\( \\frac{\\tan^5 x}{5} + C \\)", type: "true" },
       { answer: "\\( \\frac{1}{2} \\ln|\\tan x| + C \\)", type: "false" },
       { answer: "\\( \\tan^3 x + C \\)", type: "false" },
       { answer: "\\( \\tan x - 2 + C \\)", type: "false" },
       { answer: "\\( \\ln|\\cos x| + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 48,
     Question:
       "48. \\( \\int \\sin \\frac{x}{2} \\cos \\frac{x}{2} \\, dx \\) HESABLAYIN",
     answers: [
       { answer: "\\( -\\frac{1}{2} \\cos x + C \\)", type: "true" },
       { answer: "\\( \\frac{1}{2} \\sin x + C \\)", type: "false" },
       { answer: "\\( -\\frac{1}{2} \\sin x + C \\)", type: "false" },
       { answer: "\\( -\\frac{1}{3} \\cos x + C \\)", type: "false" },
       { answer: "\\( -\\frac{1}{5} \\cos x + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 49,
     Question: "49. \\( \\int \\cos^7 x \\, dx \\) HESABLAYIN",
     answers: [
       {
         answer:
           "\\( \\sin x - \\sin^3 x + \\frac{3}{5} \\sin^5 x - \\frac{1}{7} \\sin^7 x + C \\)",
         type: "true",
       },
       {
         answer:
           "\\( \\sin^3 x + \\frac{3}{5} \\sin^5 x - \\frac{1}{7} \\sin^7 x + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\sin x - \\sin^3 x + \\frac{3}{5} \\sin^5 x + \\frac{1}{7} \\sin^7 x + C \\)",
         type: "false",
       },
       { answer: "\\( \\sin x - \\sin^3 x + \\sin^5 x + C \\)", type: "false" },
       {
         answer: "\\( \\sin^3 x + \\frac{3}{5} \\sin^5 x - \\sin^7 x + C \\)",
         type: "false",
       },
     ],
   },
   {
    count: 0,
       id: 50,
     Question:
       "50. \\( (x+1) dx + (y-1) dy = 0 \\) diferensial tənliyini həll edin",
     answers: [
       { answer: "\\( (x+1)^2 + (y-1)^2 = C^2 \\)", type: "true" },
       { answer: "\\( (x+1)^2 - (y-1)^2 = C^2 \\)", type: "false" },
       { answer: "\\( (x+1)^2 + (y+1)^2 = C^2 \\)", type: "false" },
       { answer: "\\( (x-1)^2 + (y-1)^2 = C^2 \\)", type: "false" },
       { answer: "\\( (x-1)^2 - (y-1)^2 = C^2 \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 51,
     Question:
       "51. \\( x dx - 2 dy = 0 \\), \\( y = 1 \\), \\( x = 3 \\), başlanğıc şərtini ödəyən diferensial tənliyin ümumi həllini tapın",
     answers: [
       { answer: "\\( x^2 = 4y + 5 \\)", type: "true" },
       { answer: "\\( x^2 = 2y + 5 \\)", type: "false" },
       { answer: "\\( x^2 = 5y + 5 \\)", type: "false" },
       { answer: "\\( x^2 = 4y + 4 \\)", type: "false" },
       { answer: "\\( x^2 = 3y + 5 \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 52,
     Question:
       "52. \\( (y-4) dx - (x+1) dy = 0 \\), \\( y = 10 \\), \\( x = 1 \\), başlanğıc şərtini ödəyən diferensial tənliyin ümumi həllini tapın",
     answers: [
       { answer: "\\( \\ln|y - 4| = \\ln C|x + 1| \\)", type: "true" },
       { answer: "\\( \\ln|y - 2| = \\ln |x + 1| \\)", type: "false" },
       { answer: "\\( \\ln|y - 4| = \\ln C|x - 1| \\)", type: "false" },
       { answer: "\\( \\ln|y - 4| = |x + 1| \\)", type: "false" },
       { answer: "\\( \\ln|y + 4| = \\ln C|x + 1| \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 53,
     Question: "53. \\( \\int (e^t - e^{-t}) \\, dt \\)",
     answers: [
       { answer: "\\( e^t + e^{-t} + C \\)", type: "true" },
       { answer: "\\( 2e^t + e^{-t} + C \\)", type: "false" },
       { answer: "\\( e + e^{-t} + C \\)", type: "false" },
       { answer: "\\( 2e^t - C \\)", type: "false" },
       { answer: "\\( 2e^t + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 54,
     Question:
       "54. \\( \\int \\left( e^{\\frac{x}{a}} + e^{-\\frac{x}{a}} \\right)^2 dx \\)",
     answers: [
       {
         answer:
           "\\( \\frac{a}{2} e^{\\frac{2x}{a}} + 2x - \\frac{a}{2} e^{-\\frac{2x}{a}} + C \\)",
         type: "true",
       },
       {
         answer:
           "\\( \\frac{a}{3} e^{\\frac{2x}{a}} + 2x - \\frac{a}{2} e^{-\\frac{2x}{a}} + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\frac{a}{2} e^{\\frac{2x}{a}} + 3x - \\frac{a}{2} e^{-\\frac{2x}{a}} + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\frac{a}{2} e^{\\frac{x}{a}} + 2x - \\frac{a}{2} e^{-\\frac{2x}{a}} + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\frac{a}{2} e^{\\frac{2x}{a}} + 2x - \\frac{a}{2} e^{-\\frac{x}{a}} + C \\)",
         type: "false",
       },
     ],
   },
   {
    count: 0,
       id: 55,
     Question: "55. \\( \\int \\operatorname{arctg} x \\, dx \\) HESABLAYIN",
     answers: [
       {
         answer:
           "\\( x \\operatorname{arctg} x - \\frac{1}{2} \\ln|1 + x^2| + C \\)",
         type: "true",
       },
       { answer: "\\( \\frac{1}{2} \\ln|1 + x^2| + C \\)", type: "false" },
       { answer: "\\( \\frac{1}{2} \\ln|1 - x^2| + C \\)", type: "false" },
       { answer: "\\( \\frac{1}{3} \\ln|1 + x^2| + C \\)", type: "false" },
       { answer: "\\( \\frac{1}{2} \\ln|1 + x| + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 56,
     Question:
       "56. \\( \\int \\frac{\\operatorname{tg} x}{\\cos^2 x} \\, dx \\) HESABLAYIN",
     answers: [
       {
         answer: "\\( \\frac{1}{2} \\operatorname{tg}^2 x + C \\)",
         type: "true",
       },
       {
         answer: "\\( \\frac{2}{5} \\sqrt{\\operatorname{tg}^3 x} + C \\)",
         type: "false",
       },
       {
         answer: "\\( \\frac{2}{7} \\sqrt{\\operatorname{tg}^3 x} + C \\)",
         type: "false",
       },
       {
         answer: "\\( \\frac{2}{3} \\sqrt{\\operatorname{ctg}^3 x} + C \\)",
         type: "false",
       },
       { answer: "\\( \\sqrt{\\operatorname{tg}^3 x} + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 57,
     Question:
       "57. \\( \\int \\frac{\\sin^2 x}{\\cos^6 x} \\, dx \\) HESABLAYIN",
     answers: [
       {
         answer:
           "\\( \\frac{1}{3} \\operatorname{tg}^3 x + \\frac{1}{5} \\operatorname{tg}^5 x + C \\)",
         type: "true",
       },
       {
         answer: "\\( \\frac{3}{4} \\left(1 + \\ln x \\right)^2 + C \\)",
         type: "false",
       },
       { answer: "\\( \\frac{3}{4} \\sqrt{1 + \\ln x} + C \\)", type: "false" },
       { answer: "\\( \\frac{2}{5} \\sqrt{1 + \\ln x} + C \\)", type: "false" },
       { answer: "\\( \\frac{3}{5} \\sqrt{1 + \\ln x} + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 58,
     Question: "58. \\( \\int \\frac{dx}{\\sin x \\cos x} \\) HESABLAYIN",
     answers: [
       { answer: "\\( \\ln|\\operatorname{tg} x| + C \\)", type: "true" },
       { answer: "\\( \\ln|\\operatorname{ct} x| + C \\)", type: "false" },
       { answer: "\\( \\ln|\\operatorname{tg} ax| + C \\)", type: "false" },
       {
         answer: "\\( \\frac{1}{a} \\ln|\\operatorname{tg} ax| + C \\)",
         type: "false",
       },
       {
         answer: "\\( -\\frac{1}{a} \\ln|\\operatorname{tg} ax| + C \\)",
         type: "false",
       },
     ],
   },
   {
    count: 0,
       id: 59,
     Question:
       "59. \\( \\int \\frac{(\\arcsin x)^2}{\\sqrt{1 - x^2}} \\, dx \\) HESABLAYIN",
     answers: [
       { answer: "\\( \\frac{\\arcsin^3 x}{3} + C \\)", type: "true" },
       { answer: "\\( \\arccos x + C \\)", type: "false" },
       { answer: "\\( \\operatorname{arctg} x + C \\)", type: "false" },
       { answer: "\\( \\sin x + C \\)", type: "false" },
       { answer: "\\( \\operatorname{tg} x + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 60,
     Question: "60. \\( \\int \\frac{dx}{x^2 + 7} \\) HESABLAYIN",
     answers: [
       {
         answer:
           "\\( \\frac{1}{\\sqrt{7}} \\operatorname{arctg} \\frac{x}{\\sqrt{7}} + C \\)",
         type: "true",
       },
       {
         answer: "\\( \\operatorname{arctg} \\frac{x}{\\sqrt{7}} + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( -\\frac{1}{\\sqrt{7}} \\operatorname{arctg} \\frac{x}{\\sqrt{7}} + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\frac{1}{\\sqrt{6}} \\operatorname{arctg} \\frac{x}{\\sqrt{7}} + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\frac{1}{\\sqrt{7}} \\operatorname{arctg} \\frac{x}{\\sqrt{6}} + C \\)",
         type: "false",
       },
     ],
   },
   {
    count: 0,
       id: 61,
     Question: "61. \\( \\int \\frac{x^2 + 5x + 7}{x + 3} \\, dx \\) HESABLAYIN",
     answers: [
       { answer: "\\( \\frac{x^2}{2} + 2x + \\ln|x + 3| + C \\)", type: "true" },
       {
         answer: "\\( \\frac{x^2}{3} + 2x + \\ln|x + 3| + C \\)",
         type: "false",
       },
       {
         answer: "\\( \\frac{x^2}{2} + 3x + \\ln|x + 3| + C \\)",
         type: "false",
       },
       { answer: "\\( \\frac{x^2}{2} + \\ln|x + 3| + C \\)", type: "false" },
       { answer: "\\( x^2 + 3x + \\ln|x + 3| + C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 62,
     Question: "62. \\( \\int \\frac{dx}{\\sqrt{7 - 5x^2}} \\) HESABLAYIN",
     answers: [
       {
         answer:
           "\\( \\frac{1}{\\sqrt{5}} \\arcsin \\sqrt{\\frac{5}{7}} x + C \\)",
         type: "true",
       },
       {
         answer:
           "\\( \\arcsin \\left( \\frac{\\sqrt{3}}{\\sqrt{7}} x \\right) + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\frac{1}{\\sqrt{3}} \\arcsin \\left( \\frac{\\sqrt{3}}{\\sqrt{7}} x \\right) + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\frac{1}{\\sqrt{5}} \\arcsin \\left( \\frac{\\sqrt{3}}{\\sqrt{7}} x \\right) + C \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\frac{1}{\\sqrt{5}} \\arccos \\left( \\frac{\\sqrt{3}}{\\sqrt{7}} x \\right) + C \\)",
         type: "false",
       },
     ],
   },
   {
    count: 0,
       id: 63,
     Question:
       "63. \\( \\iint_D x y \\, dx \\, dy \\), \\( 3 \\leq x \\leq 5, \\, 0 \\leq y \\leq 1 \\)",
     answers: [
       { answer: "2", type: "true" },
       { answer: "-9", type: "false" },
       { answer: "3", type: "false" },
       { answer: "1", type: "false" },
       { answer: "4", type: "false" },
     ],
   },
   {
    count: 0,
       id: 64,
     Question:
       "64. \\( \\iint_D x y^3 \\, dx \\, dy \\), \\( 2 \\leq x \\leq 4, \\, 0 \\leq y \\leq 1 \\)",
     answers: [
       { answer: "\\( \\frac{3}{2} \\)", type: "true" },
       { answer: "-9", type: "false" },
       { answer: "3", type: "false" },
       { answer: "1", type: "false" },
       { answer: "4", type: "false" },
     ],
   },
   {
    count: 0,
       id: 65,
     Question:
       "65. \\( \\iint_D x^2 y \\, dx \\, dy \\), \\( 3 \\leq x \\leq 6, \\, 0 \\leq y \\leq 2 \\)",
     answers: [
       { answer: "126", type: "true" },
       { answer: "-9", type: "false" },
       { answer: "3", type: "false" },
       { answer: "1", type: "false" },
       { answer: "4", type: "false" },
     ],
   },
   {
    count: 0,
       id: 66,
     Question: "66. \\( \\int_{1}^{e} \\frac{dx}{x} \\int_{4}^{6} y \\, dy \\)",
     answers: [
       { answer: "10", type: "true" },
       { answer: "-9", type: "false" },
       { answer: "3", type: "false" },
       { answer: "1", type: "false" },
       { answer: "4", type: "false" },
     ],
   },
   {
    count: 0,
       id: 67,
     Question:
       "67. \\( \\iint_D (x - y) \\, dx \\, dy \\), \\( 1 \\leq x \\leq 4, \\, 1 \\leq y \\leq 3 \\)",
     answers: [
       { answer: "3", type: "true" },
       { answer: "-9", type: "false" },
       { answer: "4", type: "false" },
       { answer: "1", type: "false" },
       { answer: "7", type: "false" },
     ],
   },
   {
    count: 0,
       id: 68,
     Question:
       "68. \\( \\iint_D (x + y) \\, dx \\, dy \\), \\( 3 \\leq x \\leq 5, \\, 0 \\leq y \\leq 2 \\)",
     answers: [
       { answer: "20", type: "true" },
       { answer: "-9", type: "false" },
       { answer: "3", type: "false" },
       { answer: "1", type: "false" },
       { answer: "4", type: "false" },
     ],
   },
   {
    count: 0,
       id: 69,
     Question: "69. \\( \\int_{2}^{3} \\, dx \\int_{1}^{2} (x + y^2) \\, dy \\)",
     answers: [
       { answer: "\\( 4 \\frac{5}{6} \\)", type: "true" },
       { answer: "-9", type: "false" },
       { answer: "3", type: "false" },
       { answer: "1", type: "false" },
       { answer: "4", type: "false" },
     ],
   },
   {
    count: 0,
       id: 70,
     Question:
       "70. \\( \\iint_D (x^2 + y) \\, dx \\, dy \\), \\( 1 \\leq x \\leq 2, \\; 0 \\leq y \\leq 1 \\)",
     answers: [
       { answer: "\\( 2 \\frac{5}{6} \\)", type: "true" },
       { answer: "-9", type: "false" },
       { answer: "3", type: "false" },
       { answer: "1", type: "false" },
       { answer: "4", type: "false" },
     ],
   },
   {
    count: 0,
       id: 71,
     Question:
       "71. \\( \\int \\int_D (x^2 + y^2) \\, dx \\, dy \\), \\( 0 \\leq x \\leq 1, \\; 0 \\leq y \\leq 1 \\)",
     answers: [
       { answer: "\\( \\frac{2}{3} \\)", type: "true" },
       { answer: "-9", type: "false" },
       { answer: "3", type: "false" },
       { answer: "1", type: "false" },
       { answer: "4", type: "false" },
     ],
   },
   {
    count: 0,
       id: 72,
     Question:
       "72. \\( \\iint_D \\frac{3y^2 \\, dx \\, dy}{1 + x^2} \\), \\( 0 \\leq x \\leq 1, \\; 0 \\leq y \\leq 1 \\)",
     answers: [
       { answer: "\\( \\frac{\\pi}{4} \\)", type: "true" },
       { answer: "-9", type: "false" },
       { answer: "3", type: "false" },
       { answer: "1", type: "false" },
       { answer: "4", type: "false" },
     ],
   },
   {
    count: 0,
       id: 73,
     Question:
       "73. \\( \\iint_D (3y x^2 - 2x^3) \\, dx \\, dy \\), \\( 0 \\leq x \\leq 1, \\; 1 \\leq y \\leq 2 \\)",
     answers: [
       { answer: "1", type: "true" },
       { answer: "-9", type: "false" },
       { answer: "3", type: "false" },
       { answer: "5", type: "false" },
       { answer: "4", type: "false" },
     ],
   },
   {
    count: 0,
       id: 74,
     Question:
       "74. \\( \\iint_D \\sin(x + y) \\, dx \\, dy \\), \\( 0 \\leq x \\leq \\frac{\\pi}{2}, \\; 0 \\leq y \\leq \\frac{\\pi}{2} \\)",
     answers: [
       { answer: "2", type: "true" },
       { answer: "-9", type: "false" },
       { answer: "3", type: "false" },
       { answer: "6", type: "false" },
       { answer: "4", type: "false" },
     ],
   },
   {
    count: 0,
       id: 75,
     Question:
       "75. \\( \\iint_D x e^{xy} \\, dx \\, dy \\), \\( 0 \\leq x \\leq 1, \\; -1 \\leq y \\leq 0 \\)",
     answers: [
       { answer: "\\( \\frac{1}{e} \\)", type: "true" },
       { answer: "-9", type: "false" },
       { answer: "3", type: "false" },
       { answer: "1", type: "false" },
       { answer: "4", type: "false" },
     ],
   },
   {
    count: 0,
       id: 76,
     Question:
       "76. \\( \\iint_G (x - y) \\, dx \\, dy \\), \\( x = 0, y = 0, x + y = 2 \\)",
     answers: [
       { answer: "0", type: "true" },
       { answer: "-9", type: "false" },
       { answer: "3", type: "false" },
       { answer: "1", type: "false" },
       { answer: "4", type: "false" },
     ],
   },
   {
    count: 0,
       id: 77,
     Question:
       "77. \\( \\iiint_V (x + y - z) \\, dx \\, dy \\, dz \\), \\( x = -1, x = 1, y = 0, y = 1, z = 0, z = 2 \\)",
     answers: [
       { answer: "-2", type: "true" },
       { answer: "-9", type: "false" },
       { answer: "3", type: "false" },
       { answer: "1", type: "false" },
       { answer: "4", type: "false" },
     ],
   },
   {
    count: 0,
       id: 78,
     Question:
       "78. \\( \\iiint_V (x + y + z) \\, dx \\, dy \\, dz \\), \\( x = 0, x = 1, y = 0, y = 1, z = 0, z = 1 \\)",
     answers: [
       { answer: "\\( \\frac{3}{2} \\)", type: "true" },
       { answer: "-9", type: "false" },
       { answer: "3", type: "false" },
       { answer: "1", type: "false" },
       { answer: "4", type: "false" },
     ],
   },
   {
    count: 0,
       id: 79,
     Question:
       "79. \\( \\iiint_V x y z \\, dx \\, dy \\, dz \\), \\( x = 1, x = 2, y = -2, y = -1, z = 0, z = \\frac{1}{2} \\)",
     answers: [
       { answer: "\\( -\\frac{9}{8} \\)", type: "true" },
       { answer: "-9", type: "false" },
       { answer: "3", type: "false" },
       { answer: "1", type: "false" },
       { answer: "4", type: "false" },
     ],
   },
   {
    count: 0,
       id: 80,
     Question:
       "80. \\( \\iiint_V \\frac{dx \\, dy \\, dz}{(x + y + z)^3} \\), \\( x = 1, x = 2, y = 1, y = 2, z = 1, z = 2 \\)",
     answers: [
       { answer: "\\( \\frac{1}{2} \\ln \\frac{128}{125} \\)", type: "true" },
       { answer: "-9", type: "false" },
       { answer: "3", type: "false" },
       { answer: "1", type: "false" },
       { answer: "4", type: "false" },
     ],
   },
   {
    count: 0,
       id: 81,
     Question:
       "81. \\( \\iiint_V (4x + 3y + 3z + 1) \\, dx \\, dy \\, dz \\), \\( x = 0, x = 3, y = 0, y = 2, z = 0, z = 3 \\)",
     answers: [
       { answer: "261", type: "true" },
       { answer: "-10", type: "false" },
       { answer: "3", type: "false" },
       { answer: "1", type: "false" },
       { answer: "4", type: "false" },
     ],
   },
   {
    count: 0,
       id: 82,
     Question:
       "82. \\( \\int_{2}^{4} \\, dx \\int_{1}^{2} \\, xydy \\) HESABLAYIN",
     answers: [
       { answer: "9", type: "true" },
       { answer: "4", type: "false" },
       { answer: "3", type: "false" },
       { answer: "1", type: "false" },
       { answer: "2", type: "false" },
     ],
   },
   {
    count: 0,
       id: 83,
     Question:
       "83. \\( x dx - 2dy = 0 \\) diferensial tənliyinin \\( x = 3, y = 1 \\) şərtini ödəyən həllini tapın:",
     answers: [
       { answer: "\\( x^2 = 4y + 5 \\)", type: "true" },
       { answer: "\\( x^2 = 2y + 5 \\)", type: "false" },
       { answer: "\\( x^2 = y - 5 \\)", type: "false" },
       { answer: "\\( x^2 = y + x \\)", type: "false" },
       { answer: "\\( x^2 = 5y + 4 \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 84,
     Question:
       "84. \\( (y - 4)dx - (x + 1)dy = 0 \\) dəyişənlərinə ayrılan diferensial tənliyin \\( x = 1 \\) olduqda \\( y = 10 \\) şərtini ödəyən həllini tapın:",
     answers: [
       { answer: "\\( y = 3x + 7 \\)", type: "true" },
       { answer: "\\( y = 2x + 7 \\)", type: "false" },
       { answer: "\\( y = 3x + 12 \\)", type: "false" },
       { answer: "\\( y = 2x - 5 \\)", type: "false" },
       { answer: "\\( y = 2x + 6 \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 85,
     Question:
       "85. Dəyişənlərinə ayrılan birinci tərtib diferensial tənlik hansıdır?",
     answers: [
       { answer: "\\( M(x)N(y)dx + M_1(x)N_1(y)dy = 0 \\)", type: "true" },
       { answer: "\\( [M(x) - N(y)]dx + M_1(x)N_1(y)dy = 0 \\)", type: "false" },
       {
         answer: "\\( \\frac{M(x)}{N(y)} + \\frac{M_1(y)}{N_1(x)} = 0 \\)",
         type: "false",
       },
       { answer: "\\( M(x)N(y)dx - M_1(x)N_1(y)dy = 0 \\)", type: "false" },
       { answer: "\\( M(x)N(y) - M_1(x)N_1(y) = 0 \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 86,
     Question:
       "86. Birinci tərtibli diferensial tənlik ümumi şəkildə necə ifadə olunur?",
     answers: [
       { answer: "\\( F(x, y, y') = 0 \\)", type: "true" },
       { answer: "\\( F(y, y') = 0 \\)", type: "false" },
       { answer: "\\( F(x, y) = 0 \\)", type: "false" },
       { answer: "\\( F(x, y, y'') = 0 \\)", type: "false" },
       { answer: "\\( F(x, y') = 0 \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 87,
     Question:
       "87. \\( n \\)-tərtibli adi diferensial tənlik ümumi şəkildə necə yazılır?",
     answers: [
       {
         answer: "\\( F(x, y, y', y'', \\ldots, y^{(n)}) = 0 \\)",
         type: "true",
       },
       { answer: "\\( F(y', y'') = 0 \\)", type: "false" },
       { answer: "\\( F(x, y) = 0 \\)", type: "false" },
       { answer: "\\( F(x, y') = 0 \\)", type: "false" },
       { answer: "\\( F(x, y, y^{(n-1)}) = 0 \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 88,
     Question:
       "88. \\( y'' - y = 0 \\) adi diferensial tənliyinin ümumi həlli hansıdır?",
     answers: [
       { answer: "\\( y = C_1e^x + C_2e^{-x} \\)", type: "true" },
       { answer: "\\( y = e^x \\)", type: "false" },
       { answer: "\\( y = e^{-2x} \\)", type: "false" },
       { answer: "\\( y = C_1e^{2x} \\)", type: "false" },
       { answer: "\\( y = C_1e^{2x} - C_2e^{-2x} \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 89,
     Question: "89. \\( y'' + 2y' = 0 \\) diferensial tənliyini həll edin:",
     answers: [
       { answer: "\\( y = C_1 + C_2e^{-2x} \\)", type: "true" },
       { answer: "\\( y = C_2e^{2x} \\)", type: "false" },
       { answer: "\\( y = C_2e^x \\)", type: "false" },
       { answer: "\\( y = C_2e^{3x} \\)", type: "false" },
       { answer: "\\( y = C_2e^{-x} \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 90,
     Question:
       "90. \\( \\sqrt{1 - x^2} dy - 3dx = 0 \\) diferensial tənliyini inteqrallayın:",
     answers: [
       { answer: "\\( y = 3 \\arcsin x + C \\)", type: "true" },
       { answer: "\\( y = \\arcsin x + C \\)", type: "false" },
       { answer: "\\( y = \\arccos x + C \\)", type: "false" },
       { answer: "\\( y = arctg x + C \\)", type: "false" },
       { answer: "\\( y = \\arcsin x - 5 \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 91,
     Question:
       "91. \\( F(x,y) \\) funksiyasına nə zaman \\( m \\)-ölçülü bircins funksiya deyilir?",
     answers: [
       {
         answer:
           "\\( \\forall t \\) üçün \\( F(tx, ty) = t^mF(x, y) \\) eyniliyi ödəndikdə,",
         type: "true",
       },
       {
         answer: "\\( F(tx, ty) = tF(tx, ty) \\) eyniliyi ödəndikdə,",
         type: "false",
       },
       {
         answer: "\\( F(tx, ty) = F(x, ty) \\) eyniliyi ödəndikdə,",
         type: "false",
       },
       {
         answer: "\\( F(tx, ty) = t^2F(tx, ty) \\) eyniliyi ödəndikdə,",
         type: "false",
       },
       {
         answer: "\\( F(tx, ty) = t^2F(tx, ty) \\) eyniliyi ödəndikdə,",
         type: "false",
       },
     ],
   },
   {
    count: 0,
       id: 92,
     Question:
       "92. \\( P(x, y)dx + Q(x, y)dy = 0 \\) birtərtibli diferensial tənliyi nə zaman bircins diferensial tənlik adlanır?",
     answers: [
       {
         answer:
           "\\( P(x, y) \\) və \\( Q(x, y) \\) funksiyaları eyni ölçülü bircins funksiyalar olduqda",
         type: "true",
       },
       { answer: "\\( P(x, y) = Q(x, y) \\) olduqda", type: "false" },
       { answer: "\\( P(x, y) \\cdot Q(x, y) = 0 \\) olduqda", type: "false" },
       { answer: "\\( P(x, y) = Q^m(x, y) \\) olduqda", type: "false" },
       { answer: "\\( P(x, y) = 2Q(x, y) \\) olduqda", type: "false" },
     ],
   },
   {
    count: 0,
       id: 93,
     Question:
       "93. \\( \\frac{dy}{dx} - \\frac{y}{x} = x \\) Birtərtibli xətli diferensial tənliyi həll edin:",
     answers: [
       { answer: "\\( y = x^2 + Cx \\)", type: "true" },
       { answer: "\\( y = x^2 + C + x \\)", type: "false" },
       { answer: "\\( y = 2x^2 + Cx \\)", type: "false" },
       { answer: "\\( y = x^3 + C \\)", type: "false" },
       { answer: "\\( y = x^2 - Cx \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 94,
     Question:
       "94. \\( (x + y)dx + (x - y)dy = 0 \\) bircins diferensial tənliyinin ümumi həllini tapın:",
     answers: [
       { answer: "\\( x^2 + 2xy - y^2 = C \\)", type: "true" },
       { answer: "\\( x^2 - y^2 = C \\)", type: "false" },
       { answer: "\\( x^2 + y^2 = C \\)", type: "false" },
       { answer: "\\( x^2 + 2xy = C \\)", type: "false" },
       { answer: "\\( x^2 - 2xy - y^2 = C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 95,
     Question:
       "95. Birtərtibli xətli diferensial tənliyin ümumi şəkildə yazılışı nədir?",
     answers: [
       { answer: "\\( y' + p(x)y = q(x) \\)", type: "true" },
       { answer: "\\( y' + y = p(x) \\)", type: "false" },
       { answer: "\\( y' - y'' = q(x) \\)", type: "false" },
       { answer: "\\( y' + p(x)y' = q(x) \\)", type: "false" },
       { answer: "\\( y' + y = y'' \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 96,
     Question:
       "96. \\( \\frac{dy}{x} + \\frac{y}{x} = -xy^2 \\) Bernulli tənliyini həll edin:",
     answers: [
       { answer: "\\( y(x^2 + Cx) = 1 \\)", type: "true" },
       { answer: "\\( x^2 + 2xy - y^2 = C \\)", type: "false" },
       { answer: "\\( x^2 + y^2 = C \\)", type: "false" },
       { answer: "\\( x^2 - 2xy - y^2 = C \\)", type: "false" },
       { answer: "\\( x^2 - y^2 = C \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 97,
     Question: "97. Xətli diferensial tənliyin həlli hansı şəkildə axtarılır?",
     answers: [
       { answer: "\\( y = u(x) \\cdot v(x) \\)", type: "true" },
       { answer: "\\( y = \\frac{u(x)}{v(x)} \\)", type: "false" },
       { answer: "\\( y = C \\cdot u(x) \\)", type: "false" },
       { answer: "\\( y = u(x) - v(x) \\)", type: "false" },
       { answer: "\\( y = u(x) + v(x) \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 98,
     Question:
       "98. \\( \\frac{dy}{dx} + \\frac{2y}{x} = x^3 \\) Birtərtibli xətli diferensial tənliyi həll edin:",
     answers: [
       { answer: "\\( y = \\frac{x^4}{6} + \\frac{C}{x^2} \\)", type: "true" },
       { answer: "\\( xy = 1 \\)", type: "false" },
       { answer: "\\( y = 1 - x \\)", type: "false" },
       { answer: "\\( xy = C_1x^2 + 3 \\)", type: "false" },
       { answer: "\\( xy(C_1 - \\frac{x}{2}) = 1 \\)", type: "false" },
     ],
   },
   {
    count: 0,
       id: 99,
     Question:
       "99. \\( P(x, y)dx + Q(x, y)dy = 0 \\) diferensial tənliyinə nə zaman tam diferensiallı tənlik deyil?",
     answers: [
       {
         answer: "\\( P(x, y)dx + Q(x, y)dy = dU(x, y) \\) olduqda",
         type: "true",
       },
       { answer: "\\( P(x, y)dx = Q(x, y)dy \\) olduqda", type: "false" },
       { answer: "\\( P(x, y)dx = du(x, y) \\) olduqda", type: "false" },
       { answer: "\\( Q(x, y)dy - P(x, y)dx = 0 \\) olduqda", type: "false" },
       {
         answer: "\\( Q(x, y)dy - P(x, y)dx = dU(x, y) \\) olduqda",
         type: "false",
       },
     ],
   },
   {
    count: 0,
       id: 100,
     Question:
       "100. \\( P(x, y)dx + Q(x, y)dy = 0 \\) diferensial tənliyinin tam diferensiallı tənlik olması üçün zəruri və kafi şərt hansıdır?",
     answers: [
       {
         answer:
           "\\( \\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x} \\)",
         type: "true",
       },
       {
         answer:
           "\\( \\frac{\\partial P}{\\partial x} = \\frac{\\partial Q}{\\partial y} \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\frac{\\partial^2 P}{\\partial x \\partial y} = \\frac{\\partial^2 Q}{\\partial x \\partial y} \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\frac{\\partial^2 P}{\\partial x \\partial y} = \\frac{\\partial Q}{\\partial y} \\)",
         type: "false",
       },
       {
         answer:
           "\\( \\frac{\\partial^2 P}{\\partial x \\partial y} = \\frac{\\partial Q}{\\partial x} \\)",
         type: "false",
       },
     ],
   },
  {
    id: 101,
    Question:
      "101. \\( (x - 1)dx + (y + 2)dy = 0 \\) tam diferensial tənlikdirmi?",
    answers: [
      { answer: "Bəli", type: "true" },
      { answer: "\\( (x - 1) + y^2 = C^2 \\)", type: "false" },
      { answer: "\\( (y + 2)^2 + x = C^2 \\)", type: "false" },
      { answer: "\\( (x - 2)^2 + (y - 2)^2 = C^2 \\)", type: "false" },
      { answer: "\\( (x - 2)^2 + y = C^2 \\)", type: "false" },
    ],
  },
  {
    id: 102,
    Question:
      "102. \\( (x - 2)dx + (4y - 8)dy = 0 \\) nə cür diferensial tənlikdir?",
    answers: [
      { answer: "Tam diferensiallı tənlikdir", type: "true" },
      { answer: "Tam diferensiallı tənlik deyil", type: "false" },
      { answer: "Qeyri-bircins tənlikdir", type: "false" },
      { answer: "Bircins tənlikdir", type: "false" },
      { answer: "Xüsusi törəməli diferensial tənlikdir", type: "false" },
    ],
  },
  {
    id: 103,
    Question:
      "103. \\( (1 + y^2)dx = (\\sqrt{1 + y^2} \\sin y - xy)dy \\) Birtərtibli xətli diferensial tənliyi həll edin:",
    answers: [
      { answer: "\\( C = x \\sqrt{1 + y^2} + \\cos y \\)", type: "true" },
      { answer: "\\( (x - 1)^2 + (y + 1)^2 = -1 \\)", type: "false" },
      { answer: "\\( (x - 1)(y + 1) = 1 \\)", type: "false" },
      { answer: "\\( (x - 1)(y - 1) = 1 \\)", type: "false" },
      { answer: "\\( (x^2 - 1)y = 1 \\)", type: "false" },
    ],
  },
  {
    id: 104,
    Question:
      "104. İkinci tərtib diferensial tənlik ümumi şəkildə nə cür yazılır?",
    answers: [
      { answer: "\\( F(x, y, y', y'') = 0 \\)", type: "true" },
      { answer: "\\( F(x, y) = 0 \\)", type: "false" },
      { answer: "\\( F(x, y, y') = 0 \\)", type: "false" },
      { answer: "\\( F(x, y', y'') = 0 \\)", type: "false" },
      { answer: "\\( F(x, y, y'') = 0 \\)", type: "false" },
    ],
  },
  {
    id: 105,
    Question:
      "105. İkinci tərtib diferensial tənliyin ümumi həlli necə yazılır?",
    answers: [
      { answer: "\\( y = \\varphi(x, C_1, C_2) \\)", type: "true" },
      { answer: "\\( y = \\varphi(x, C_1) \\)", type: "false" },
      { answer: "\\( y = \\varphi(x, y, C_1, C_2) \\)", type: "false" },
      { answer: "\\( y = \\varphi(x + y, C_1) \\)", type: "false" },
      { answer: "\\( y = \\varphi(xy, C_1, C_2) \\)", type: "false" },
    ],
  },
  {
    id: 106,
    Question:
      "106. \\( (x + y)dx + (x + 2y)dy = 0 \\) tam diferensial tənliyini həll edin:",
    answers: [
      { answer: "\\( \\frac{x^2}{2} + y \\cdot x + y^2 = C \\)", type: "true" },
      { answer: "\\( \\frac{x^2}{2} + C_1 x \\)", type: "false" },
      { answer: "\\( y = \\frac{x^3}{3} + C_2 \\)", type: "false" },
      { answer: "\\( \\frac{x^2}{2} + C_2 \\)", type: "false" },
      { answer: "\\( \\frac{x^3}{3} + C_1 x + C_2 \\)", type: "false" },
    ],
  },
  {
    id: 107,
    Question:
      "107. İkinci tərtib sabit əmsallı bircins diferensial tənlik nə cür yazılır?",
    answers: [
      { answer: "\\( ay'' + by' + cy = 0 \\)", type: "true" },
      { answer: "\\( ay'' + by + cy = f(x) \\)", type: "false" },
      { answer: "\\( ay'' + by' - p = 0, \\; p \\neq 0 \\)", type: "false" },
      { answer: "\\( ay'' + by' = f(x) \\)", type: "false" },
      { answer: "\\( ay'' + by + cy = y'' \\)", type: "false" },
    ],
  },
  {
    id: 108,
    Question:
      "108. \\( y'' + py' + qy = 0 \\) bircins diferensial tənliyin xarakteristik tənliyi necə yazılır?",
    answers: [
      { answer: "\\( k^2 + pk + q = 0 \\)", type: "true" },
      { answer: "\\( k^2 + k + 1 = 0 \\)", type: "false" },
      { answer: "\\( k^2 - pk - q = 0 \\)", type: "false" },
      { answer: "\\( k^2 + kq = 0 \\)", type: "false" },
      { answer: "\\( k + pq = 0 \\)", type: "false" },
    ],
  },
  {
    id: 109,
    Question: "109. \\( \\frac{dy}{dx} = y \\) diferensial tənliyi həll edin:",
    answers: [
      { answer: "\\( y = C \\cdot e^x \\)", type: "true" },
      { answer: "\\( y = \\cos x + C_1 x \\)", type: "false" },
      { answer: "\\( y = \\sin x + C_1 x + C_2 \\)", type: "false" },
      { answer: "\\( y = \\cos x + C_1 x - C_2 \\)", type: "false" },
      { answer: "\\( y = \\cos x + \\frac{x^3}{3} + C_2 \\)", type: "false" },
    ],
  },
  {
    id: 110,
    Question:
      "110. Sabit əmsallı bircins diferensial tənliyin ümumi həllini tapın: \\( y'' - 4y' + 3y = 0 \\)",
    answers: [
      { answer: "\\( y = C_1 e^x + C_2 e^{3x} \\)", type: "true" },
      { answer: "\\( y = e^x + C e^{2x} \\)", type: "false" },
      { answer: "\\( y = C_1 e^x - e^{-3x} \\)", type: "false" },
      { answer: "\\( y = C_1 e^{2x} - C_2 e^{3x} \\)", type: "false" },
      { answer: "\\( y = C_1 e^x - C_2 e^{2x} \\)", type: "false" },
    ],
  },
  {
    id: 111,
    Question:
      "111. Sabit əmsallı \\( y'' + py' + qy = 0 \\) bircins diferensial tənliyin xarakteristik tənliyinin kökləri \\( k_1, k_2 \\) olarsa (\\( k_1 \\neq k_2 \\)), onun ümumi həlli hansı şəkildə olar?",
    answers: [
      { answer: "\\( y = C_1 e^{k_1 x} + C_2 e^{k_2 x} \\)", type: "true" },
      { answer: "\\( y = C_1 e^{k_1 x} \\)", type: "false" },
      { answer: "\\( y = C_2 e^{k_2 x} \\)", type: "false" },
      { answer: "\\( y = C_1 x^{k_1} + C_2 x^{k_2} \\)", type: "false" },
      { answer: "\\( y = e^{k_1 - k_2 x} \\)", type: "false" },
    ],
  },
  {
    id: 112,
    Question:
      "112. Sabit əmsallı \\( y'' + py' + qy = 0 \\) tənliyinin xarakteristik tənliyinin kökləri həqiqi ədədlər olub \\( k_1 = k_2 \\) olarsa,onda onun ümumi həlli necə olar?",
    answers: [
      { answer: "\\( y = (C_1 + C_2 \\cdot x)e^{k_1 x} \\)", type: "true" },
      { answer: "\\( y = C_1 e^{k_1 x} \\)", type: "false" },
      { answer: "\\( y = C_1 x e^{k_1 x} \\)", type: "false" },
      { answer: "\\( y = C_2 e^{2k_1 x} \\)", type: "false" },
      { answer: "\\( y = e^{3x} \\)", type: "false" },
    ],
  },
  {
    id: 113,
    Question:
      "113. Sabit əmsallı \\( y'' + py' + qy = 0 \\)diferensial tənliyinin xarakteristik tənliyinin kökləri \\( k_1 = \\alpha - i\\beta, k_2 = \\alpha + i\\beta \\) şəklində kompleks ədədlər olarsa, onun ümumi həlli nə cür olar?",
    answers: [
      {
        answer:
          "\\( y = e^{\\alpha x}(C_1 \\cos \\beta x + C_2 \\sin \\beta x) \\)",
        type: "true",
      },
      { answer: "\\( y = e^{\\alpha x} \\)", type: "false" },
      { answer: "\\( y = C_1 e^{\\beta x} \\)", type: "false" },
      { answer: "\\( y = (C_1 + C_2)\\cos \\beta x \\)", type: "false" },
      {
        answer:
          "\\( y = e^{\\alpha x}(C_1 \\cos \\beta x - C_2 \\sin \\beta x) \\)",
        type: "false",
      },
    ],
  },
  {
    id: 114,
    Question:
      "114. \\( y'' - 2y' + 2y = 0 \\) diferensial tənliyinin ümumi həllini yazın:",
    answers: [
      { answer: "\\( y = e^x(C_1 \\cos x + C_2 \\sin x) \\)", type: "true" },
      { answer: "\\( y = e^x \\cos x \\)", type: "false" },
      { answer: "\\( y = C_1 e^x \\sin x \\)", type: "false" },
      { answer: "\\( y = C_2 e^x \\cos x - \\sin x \\)", type: "false" },
      { answer: "\\( y = \\cos x - \\sin x \\)", type: "false" },
    ],
  },
  {
    id: 115,
    Question: "115. \\( \\int (2x^3 - 3 \\sin x + 5\\sqrt{x})dx \\)",
    answers: [
      {
        answer:
          "\\( \\frac{1}{2}x^4 - 3 \\cos x + \\frac{10}{3}x \\sqrt{x} + C \\)",
        type: "true",
      },
      {
        answer: "\\( x^4 + 3 \\cos x + \\frac{10}{3}x \\sqrt{x} + C \\)",
        type: "false",
      },
      {
        answer: "\\( \\frac{1}{2}x^4 + \\frac{10}{3}x \\sqrt{x} + C \\)",
        type: "false",
      },
      { answer: "\\( \\frac{1}{4}x^4 + 3 \\cos x + C \\)", type: "false" },
      {
        answer:
          "\\( \\frac{1}{4}x^4 + 3 \\cos x + \\frac{10}{3}x \\sqrt{x} + C \\)",
        type: "false",
      },
    ],
  },
  {
    id: 116,
    Question: "116. \\( \\int 3^ \\sqrt{x} \\frac{dx}{\\sqrt{x}} \\)",
    answers: [
      { answer: "\\( \\frac{2}{\\ln 3}3^ \\sqrt{x} + C \\)", type: "true" },
      { answer: "\\( \\sqrt{x} + C \\)", type: "false" },
      { answer: "\\( 9\\sqrt{x} + \\frac{4}{9}x^{4/7} + C \\)", type: "false" },
      { answer: "\\( 9\\sqrt{x} + \\frac{4}{9}x^{4/7} + C \\)", type: "false" },
      { answer: "\\( \\frac{9}{4}\\sqrt{x} + C \\)", type: "false" },
    ],
  },
  {
    id: 117,
    Question: "117. \\( \\int (3 - x^2)^3 dx \\)",
    answers: [
      {
        answer: "\\( 27x - 9x^3 + \\frac{9}{5}x^5 - \\frac{1}{7}x^7 + C \\)",
        type: "true",
      },
      {
        answer: "\\( x - 9x^3 + \\frac{9}{5}x^5 - \\frac{1}{7}x^7 + C \\)",
        type: "false",
      },
      {
        answer: "\\( 27x - x^3 + \\frac{9}{5}x^5 - \\frac{1}{7}x^7 + C \\)",
        type: "false",
      },
      {
        answer: "\\( 27x - 9x^3 + x^5 - \\frac{1}{7}x^7 + C \\)",
        type: "false",
      },
      {
        answer: "\\( 27x - 9x^3 + \\frac{9}{5}x^5 - x^7 + C \\)",
        type: "false",
      },
    ],
  },
  {
    id: 118,
    Question:
      "118. \\( u = e^{x^2 + y^2 + z^2} \\) funksiyasının \\( \\frac{\\partial u}{\\partial x} \\) xüsusi törəməsini hesablayın.",
    answers: [
      { answer: "\\( 2x e^{x^2 + y^2 + z^2} \\)", type: "true" },
      { answer: "\\( 2 e^{x^2 + y^2 + z^2} \\)", type: "false" },
      { answer: "\\( 3 e^{x^2 + y^2 + z^2} \\)", type: "false" },
      { answer: "\\( - e^{x^2 + y^2 + z^2} \\)", type: "false" },
      { answer: "\\( e^{x^2 + y^2 + z^2} \\)", type: "false" },
    ],
  },
  {
    id: 119,
    Question:
      "119. \\( u = e^{x^2 + y^2 + z^2} \\) funksiyasının \\( \\frac{\\partial u}{\\partial y} \\) xüsusi törəməsini hesablayın.",
    answers: [
      { answer: "\\( 2y e^{x^2 + y^2 + z^2} \\)", type: "true" },
      { answer: "\\( 2 e^{x^2 + y^2 + z^2} \\)", type: "false" },
      { answer: "\\( 3 e^{x^2 + y^2 + z^2} \\)", type: "false" },
      { answer: "\\( 3 e^{x^2 + z^2} \\)", type: "false" },
      { answer: "\\( e^{x^2 + y^2 + z^2} \\)", type: "false" },
    ],
  },
  {
    id: 120,
    Question:
      "120. \\( u = \\sqrt{x^2 + y^2 + z^2} \\) funksiyasının \\( \\frac{\\partial u}{\\partial z} \\) xüsusi törəməsini hesablayın.",
    answers: [
      { answer: "\\( \\frac{z}{\\sqrt{x^2 + y^2 + z^2}} \\)", type: "true" },
      { answer: "\\( 2 e^{x^2 + y^2 + z^2} \\)", type: "false" },
      { answer: "\\( 3 e^{x^2 + y^2 + z^2} \\)", type: "false" },
      { answer: "\\( 3 e^{x^2 + y^2} \\)", type: "false" },
      { answer: "\\( e^{x^2 + y^2 + z^2} \\)", type: "false" },
    ],
  },
  {
    id: 121,
    Question:
      "Hesabla: \\( \\int_{0}^{1} dx \\int_{0}^{1-y} dy \\int_{0}^{1-x-y} \\frac{dz}{(4x+3y+z-2)^6} \\)",
    answers: [
      { answer: "\\( \\frac{1}{192} \\)", type: "true" },
      { answer: "23", type: "false" },
      { answer: "192", type: "false" },
      { answer: "\\( \\frac{1}{193} \\)", type: "false" },
      { answer: "52", type: "false" },
    ],
  },
  {
    id: 122,
    Question:
      "122. Sabit əmsallı xətti birincili diferensial tənliklərin ümumi həllini tapın. \\( 3y'' - 2y' - 8y = 0 \\)",
    answers: [
      {
        answer: "\\( y = C_1 e^{2x} + C_2 e^{-\\frac{4}{3}x} \\)",
        type: "true",
      },
      { answer: "\\( y = C_1 + C_2 e^{-\\frac{4}{3}x} \\)", type: "false" },
      {
        answer: "\\( y = C_1 e^{2x} - C_2 e^{-\\frac{2}{3}x} \\)",
        type: "false",
      },
      {
        answer: "\\( y = C_1 e^{2x} + C_2 e^{-\\frac{2}{3}x} \\)",
        type: "false",
      },
      {
        answer: "\\( y = C_1 e^{x} + C_2 e^{-\\frac{4}{3}x} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 123,
    Question:
      "123. Sabit əmsallı xətti birincili diferensial tənliklərin ümumi həllini tapın \\( y'' + y = 0 \\)",
    answers: [
      { answer: "\\( y = C_1 \\cos x + C_2 \\sin x \\)", type: "true" },
      { answer: "\\( y = \\cos x + C_2 \\sin x \\)", type: "false" },
      { answer: "\\( y = C_1 \\cos x - C_2 \\sin x \\)", type: "false" },
      { answer: "\\( y = C_1 \\cos x + \\sin x \\)", type: "false" },
      { answer: "\\( y = C_1 \\cos 2x + C_2 \\sin x \\)", type: "false" },
    ],
  },
  {
    id: 124,
    Question:
      "\\( y'' - 4y' + 3y = 0, \\ y|_{x=0} = 6, \\ y'|_{x=0} = 10 \\) tənliklərin göstərilmiş başlanğıc şərtlərini ödəyən həllini tapın",
    answers: [
      { answer: "\\( y = 2e^{3x} + 4e^x \\)", type: "true" },
      { answer: "\\( y = 2e^{3x} - 4e^x \\)", type: "false" },
      { answer: "\\( y = -2e^{3x} + 4e^x\\)", type: "false" },
      { answer: "\\( y = 3e^{3x} + 4e^x \\)", type: "false" },
      { answer: "\\( y = 2e^{3x} + 5e^x \\)", type: "false" },
    ],
  },
  {
    id: 125,
    Question: "125. \\( y^{IV} - y'' = 0 \\) tənliyinin ümumi həllini tapın:",
    answers: [
      { answer: "\\( y = C_1 + xC_2 + C_3 e^{-x} + C_4 e^x \\)", type: "true" },
      { answer: "\\( y = xC_2 + C_3 e^{-x} + C_4 e^x \\)", type: "false" },
      { answer: "\\( y = C_1 + xC_2 + C_3 + C_4 e^x \\)", type: "false" },
      { answer: "\\( y = C_1 + C_3 e^{-x} + C_4 e^x \\)", type: "false" },
      {
        answer: "\\( y = C_1 + xC_2 + C_3 e^{-x} - C_4 e^x \\)",
        type: "false",
      },
    ],
  },
  {
    id: 126,
    Question:
      "126. \\( \\int_1^{+\\infty} \\frac{dx}{x^2} \\, \\text{inteqralını hesablayın.}\\)",
    answers: [
      { answer: "1", type: "true" },
      { answer: "6", type: "false" },
      { answer: "4", type: "false" },
      { answer: "\\(\\infty \\)", type: "false" },
      { answer: "\\(\\frac{1}{e}\\)", type: "false" },
    ],
  },
  {
    id: 127,
    Question:
      "127. \\( \\int_1^{+\\infty} \\frac{dx}{x} \\, \\text{inteqralını hesablayın.}\\)",
    answers: [
      { answer: "\\(\\infty \\)", type: "true" },
      { answer: "0", type: "false" },
      { answer: "\\(\\frac{1}{e^2}\\)", type: "false" },
      { answer: "\\(\\frac{1}{e}\\)", type: "false" },
      { answer: "7", type: "false" },
    ],
  },
  {
    id: 128,
    Question:
      "128. \\( \\int_{-\\infty}^{0} e^x \\, dx \\, \\text{inteqralını hesablayın.}\\)",
    answers: [
      { answer: "1", type: "true" },
      { answer: "0", type: "false" },
      { answer: "\\(\\frac{1}{e^2}\\)", type: "false" },
      { answer: "\\(\\frac{1}{e}\\)", type: "false" },
      { answer: "7", type: "false" },
    ],
  },
  {
    id: 129,
    Question:
      "129. \\( \\int_0^{+\\infty} e^{-x} \\, dx \\, \\text{inteqralını hesablayın.}\\)",
    answers: [
      { answer: "\\(+\\infty\\)", type: "true" },
      { answer: "0", type: "false" },
      { answer: "\\(\\frac{1}{e^2}\\)", type: "false" },
      { answer: "\\(\\frac{1}{e}\\)", type: "false" },
      { answer: "7", type: "false" },
    ],
  },
  {
    id: 130,
    Question:
      "130. \\( \\int_{-\\infty}^{+\\infty} e^x \\, dx \\, \\text{inteqralının yığılma və ya dağılma olduğunu göstərin.}\\)",
    answers: [
      { answer: "Dağılandır", type: "true" },
      { answer: "Yığılandır", type: "false" },
      { answer: "1", type: "false" },
      { answer: "0", type: "false" },
      { answer: "\\(\\infty\\)", type: "false" },
    ],
  },
  {
    id: 131,
    Question:
      "131. \\( \\int_0^{+\\infty} \\cos x \\, dx \\, \\text{inteqralını hesablayın.}\\)",
    answers: [
      { answer: "Dağılandır", type: "true" },
      { answer: "Yığılandır", type: "false" },
      { answer: "1", type: "false" },
      { answer: "0", type: "false" },
      { answer: "\\(\\infty\\)", type: "false" },
    ],
  },
  {
    id: 132,
    Question: "132. hesablayın \\( \\int_{-\\infty}^{-1} \\frac{dx}{x^2} \\)",
    answers: [
      { answer: "1", type: "true" },
      { answer: "0", type: "false" },
      { answer: "\\(+\\infty\\)", type: "false" },
      { answer: "\\(-\\infty\\)", type: "false" },
      { answer: "dağılır", type: "false" },
    ],
  },
  {
    id: 133,
    Question: "133. hesablayın \\( \\int_{0}^{+\\infty} xe^{-x^2} dx \\)",
    answers: [
      { answer: "\\( \\frac{1}{2} \\)", type: "true" },
      { answer: "0", type: "false" },
      { answer: "\\(+\\infty\\)", type: "false" },
      { answer: "\\(-\\infty\\)", type: "false" },
      { answer: "dağılır", type: "false" },
    ],
  },
  {
    id: 134,
    Question:
      "134. hesablayın \\( \\int_{0}^{+\\infty} \\frac{arctg x}{1+x^2} dx \\)",
    answers: [
      { answer: "\\( \\frac{\\pi^2}{8} \\)", type: "true" },
      { answer: "\\( \\frac{\\pi}{8} \\)", type: "false" },
      { answer: "0", type: "false" },
      { answer: "\\( \\frac{\\pi}{4} \\)", type: "false" },
      { answer: "\\( \\frac{\\pi}{4} \\)", type: "false" },
    ],
  },
  {
    id: 135,
    Question: "135. hesablayın \\( \\int_{-\\infty}^{0} \\frac{dx}{4+x^2} \\)",
    answers: [
      { answer: "\\( \\frac{\\pi}{4} \\)", type: "true" },
      { answer: "\\( \\frac{\\pi}{8} \\)", type: "false" },
      { answer: "0", type: "false" },
      { answer: "1", type: "false" },
      { answer: "0", type: "false" },
    ],
  },
  {
    id: 136,
    Question: "136. hesablayın \\( \\int_{a}^{+\\infty} \\frac{dx}{x^2} \\)",
    answers: [
      { answer: "\\( \\frac{1}{a} \\)", type: "true" },
      { answer: "a", type: "false" },
      { answer: "1", type: "false" },
      { answer: "0", type: "false" },
      { answer: "dağılır", type: "false" },
    ],
  },
  {
    id: 137,
    Question: "137. hesablayın \\( \\int_{0}^{+\\infty} \\frac{dx}{1+x^2} \\)",
    answers: [
      { answer: "\\(\\pi\\)", type: "true" },
      { answer: "\\( \\frac{\\pi}{2} \\)", type: "false" },
      { answer: "0", type: "false" },
      { answer: "1", type: "false" },
      { answer: "\\(+\\infty\\)", type: "false" },
    ],
  },
  {
    id: 138,
    Question:
      "138. hesablayın \\( \\int_{-1}^{1} \\frac{dx}{\\sqrt{1-x^2}} \\)",
    answers: [
      { answer: "\\(\\pi\\)", type: "true" },
      { answer: "\\( \\frac{\\pi}{2} \\)", type: "false" },
      { answer: "0", type: "false" },
      { answer: "1", type: "false" },
      { answer: "\\(+\\infty\\)", type: "false" },
    ],
  },
  {
    id: 139,
    Question: "139. hesablayın \\( \\int_{2}^{+\\infty} \\frac{dx}{x+x-2} \\)",
    answers: [
      { answer: "\\( \\frac{2}{3} \\ln 2 \\)", type: "true" },
      { answer: "\\(\\ln 2\\)", type: "false" },
      { answer: "0", type: "false" },
      { answer: "1", type: "false" },
      { answer: "\\(+\\infty\\)", type: "false" },
    ],
  },
  {
    id: 140,
    Question: "140. hesablayın \\( \\int_{2}^{+\\infty} \\frac{dx}{x^2-1} \\)",
    answers: [
      { answer: "\\(0,5 \\ln 3\\)", type: "true" },
      { answer: "2", type: "false" },
      { answer: "1", type: "false" },
      { answer: "0", type: "false" },
      { answer: "\\(+\\infty\\)", type: "false" },
    ],
  },
  {
    id: 141,
    Question:
      "141. hesablayın \\( \\int_{2}^{+\\infty} \\frac{dx}{x \\ln x} \\)",
    answers: [
      { answer: "\\(+\\infty\\)", type: "true" },
      { answer: "0", type: "false" },
      { answer: "2", type: "false" },
      { answer: "1", type: "false" },
      { answer: "\\( \\frac{1}{2} \\)", type: "false" },
    ],
  },
  {
    id: 142,
    Question:
      "142. İntegralı hesablayın: \\( \\int_{0}^{\\pi} arctg x \\, dx \\)",
    answers: [
      { answer: "dağılandır", type: "false" },
      { answer: "0", type: "false" },
      { answer: "1", type: "false" },
      { answer: "5", type: "false" },
      { answer: "\\( \\pi \\)", type: "true" },
    ],
  },
  {
    id: 143,
    Question: "143. \\( \\int_{0}^{1} \\ln x \\, dx \\) İntegralını hesablayın",
    answers: [
      { answer: "-1", type: "true" },
      { answer: "1", type: "false" },
      { answer: "0", type: "false" },
      { answer: "3", type: "false" },
      { answer: "dağıldır", type: "false" },
    ],
  },
  {
    id: 144,
    Question: "144. \\( \\frac{dy}{dx} = 2y \\) Diferensial tənliyi həll edin",
    answers: [
      { answer: "\\( y = ce^{2x} \\)", type: "true" },
      { answer: "\\( y = ce^{x} \\)", type: "false" },
      { answer: "\\( y = 2e^{x} \\)", type: "false" },
      { answer: "\\( y = 3e^{x} \\)", type: "false" },
      { answer: "1", type: "false" },
    ],
  },
  {
    id: 145,
    Question: "145. \\( \\frac{dy}{dx} = ay \\) Diferensial tənliyi həll edin ",
    answers: [
      { answer: "\\( y = ce^{ax} \\)", type: "true" },
      { answer: "\\( y = e^{ax} \\)", type: "false" },
      { answer: "\\( y = ce^{x} \\)", type: "false" },
      { answer: "\\( y = e^{x} \\)", type: "false" },
      { answer: "0", type: "false" },
    ],
  },
  {
    id: 146,
    Question: "146. \\( y' + axy = 0 \\) Diferensial tənliyi həll edin",
    answers: [
      { answer: "\\( y = ce^{-\\frac{ax^2}{2}} \\)", type: "true" },
      { answer: "\\( y = e^{-\\frac{ax^2}{2}} \\)", type: "false" },
      { answer: "\\( y = ce^{\\frac{ax^2}{2}} \\)", type: "false" },
      { answer: "\\( y = ce^{\\frac{ax}{2}} \\)", type: "false" },
      { answer: "1", type: "false" },
    ],
  },
  {
    id: 147,
    Question: "147. \\( y' + bxy = 0 \\) Diferensial tənliyi həll edin: ",
    answers: [
      { answer: "\\( y = ce^{-\\frac{bx^2}{2}} \\)", type: "true" },
      { answer: "\\( y = e^{-\\frac{bx^2}{2}} \\)", type: "false" },
      { answer: "\\( y = ce^{\\frac{bx^2}{2}} \\)", type: "false" },
      { answer: "\\( y = e^{\\frac{bx^2}{2}} \\)", type: "false" },
      { answer: "\\( \\frac{bx}{e^2} \\)", type: "false" },
    ],
  },
  {
    id: 148,
    Question: "148. \\( y = x \\frac{dy}{dx} \\) Diferensial tənliyi həll edin",
    answers: [
      { answer: "\\( y = cx \\)", type: "false" },
      { answer: "\\( y = x \\)", type: "false" },
      { answer: "\\( y = cx^2 \\)", type: "true" },
      { answer: "\\( y = x^2 \\)", type: "false" },
      { answer: "0", type: "false" },
    ],
  },
  {
    id: 149,
    Question:
      "149. \\( y = x \\frac{dy}{dx} \\) Diferensial tənliyində \\( y = 2, x = 3 \\) olduqda xüsusi həllini tapın",
    answers: [
      { answer: "\\( y = \\frac{2}{3}x \\)", type: "true" },
      { answer: "\\( y = 2x \\)", type: "false" },
      { answer: "\\( y = 3x \\)", type: "false" },
      { answer: "\\( y = x \\)", type: "false" },
      { answer: "\\( y = 6x \\)", type: "false" },
    ],
  },
  {
    id: 150,
    Question: "150. \\( y \\frac{dy}{dx} = 3 \\) Diferensial tənliyi həll edin",
    answers: [
      { answer: "\\( y^2 = 6x + c \\)", type: "true" },
      { answer: "\\( y^2 = x + c \\)", type: "false" },
      { answer: "\\( y^2 = 6x \\)", type: "false" },
      { answer: "\\( y^2 = 3x + c \\)", type: "false" },
      { answer: "\\( y^2 = 2x + c \\)", type: "false" },
    ],
  },
  {
    id: 151,
    Question: "151. \\( y'' - 5y' + 4y = 0 \\) Diferensial tənliyi həll edin",
    answers: [
      { answer: "\\( y = C_1e^x + C_2e^{4x} \\)", type: "true" },
      { answer: "\\( y = C_1e^{4x} + C_2e^{4x} \\)", type: "false" },
      { answer: "\\( y = C_1e^x + C_2xe^{4x} \\)", type: "false" },
      { answer: "\\( y = C_1e^3x + C_2xe^{3x} \\)", type: "false" },
      { answer: "\\( y = C_1e^3x + C_2e^{3x} \\)", type: "false" },
    ],
  },
  {
    id: 152,
    Question: "152. \\( y \\frac{dy}{dx} = 4 \\) Diferensial tənliyi həll edin",
    answers: [
      { answer: "\\( y^2 = 8x + C \\)", type: "true" },
      { answer: "\\( y^2 = x + C \\)", type: "false" },
      { answer: "\\( y^2 = 6x + C \\)", type: "false" },
      { answer: "\\( y^2 = 3x + C \\)", type: "false" },
      { answer: "\\( y^2 = 2x + C \\)", type: "false" },
    ],
  },
  {
    id: 153,
    Question:
      "153. \\( y \\frac{dy}{dx} = 4 \\) Diferensial tənliyində \\( y = 3, x = 0 \\) olduqda xüsusi həllini tapın",
    answers: [
      { answer: "\\( y^2 = 8x + 9 \\)", type: "true" },
      { answer: "\\( y^2 = 8x + 6 \\)", type: "false" },
      { answer: "\\( y^2 = 6x + 9 \\)", type: "false" },
      { answer: "\\( y^2 = 3x + 2 \\)", type: "false" },
      { answer: "\\( y^2 = 8x \\)", type: "false" },
    ],
  },
  {
    id: 154,
    Question:
      "154. \\( yy' = 5 \\) Diferensial tənliyində \\( y = 4, x = 0 \\) olduqda xüsusi həllini tapın",
    answers: [
      { answer: "\\( y^2 = 10x + 16 \\)", type: "true" },
      { answer: "\\( y^2 = 8x + 8 \\)", type: "false" },
      { answer: "\\( y^2 = 10x + 8 \\)", type: "false" },
      { answer: "\\( y^2 = 10x + 5 \\)", type: "false" },
      { answer: "\\( y^2 = 8x + 3 \\)", type: "false" },
    ],
  },
  {
    id: 155,
    Question: "155. \\( yy' = 5 \\) Diferensial tənliyi həll edin",
    answers: [
      { answer: "\\( y^2 = 10x + C \\)", type: "true" },
      { answer: "\\( y^2 = 8x + C \\)", type: "false" },
      { answer: "\\( y^2 = x + C \\)", type: "false" },
      { answer: "\\( y^2 = 5x + C \\)", type: "false" },
      { answer: "\\( y^2 = 3x + C \\)", type: "false" },
    ],
  },
  {
    id: 156,
    Question:
      "156. \\( y'' - 6y' + 9y = 0 \\) Xətti diferensial tənliyin ümumi həllini tapın",
    answers: [
      { answer: "\\( y = e^{3x}(C_1 + C_2x) \\)", type: "true" },
      { answer: "\\( y = e^{3x}(C_1 + C_2) \\)", type: "false" },
      { answer: "\\( y = e^{3x} \\)", type: "false" },
      { answer: "\\( y = e^x(C_1 + C_2) \\)", type: "false" },
      { answer: "\\( y = e^{2x}(C_1 + C_2x) \\)", type: "false" },
    ],
  },
  {
    id: 157,
    Question:
      "157. \\( y'' + 8y' + 25y = 0 \\) Diferensial tənliyin ümumi həllini tapın",
    answers: [
      {
        answer: "\\( y = e^{-4x}(C_1\\cos 3x + C_2\\sin 3x) \\)",
        type: "true",
      },
      {
        answer: "\\( y = e^{3x}(C_1\\cos 3x + C_2\\sin 3x) \\)",
        type: "false",
      },
      { answer: "\\( y = e^x(C_1\\cos x + C_2\\sin x) \\)", type: "false" },
      { answer: "\\( y = e^{-4x}(C_1\\cos x + C_2\\sin x) \\)", type: "false" },
      { answer: "\\( y = (C_1\\cos x + C_2\\sin x) \\)", type: "false" },
    ],
  },
  {
    id: 158,
    Question:
      "158. \\( y'' - 3y' + 2y = 0 \\) Diferensial tənliyin ümumi həllini tapın",
    answers: [
      { answer: "\\( y = C_1e^x + C_2e^{2x} \\)", type: "true" },
      { answer: "\\( y = C_1e^x + C_2xe^{2x} \\)", type: "false" },
      { answer: "\\( y = C_1e^{2x} + C_2e^{2x} \\)", type: "false" },
      { answer: "\\( y = C_1e^{3x} + C_2e^{2x} \\)", type: "false" },
      { answer: "\\( y = C_1e^{3x} + C_2 \\)", type: "false" },
    ],
  },
  {
    id: 159,
    Question: "159. \\( y \\frac{dy}{dx} = 6 \\) Diferensial tənliyi həll edin",
    answers: [
      { answer: "\\( y^2 = 12x + C \\)", type: "true" },
      { answer: "\\( y^2 = 8x + C \\)", type: "false" },
      { answer: "\\( y^2 = x + C \\)", type: "false" },
      { answer: "\\( y^2 = 4x + C \\)", type: "false" },
      { answer: "\\( y^2 = 2x + C \\)", type: "false" },
    ],
  },
  {
    id: 160,
    Question:
      "160. \\( yy' = 6 \\) Diferensial tənliyində \\( y = 3, x = 0 \\) olduqda xüsusi həllini tapın",
    answers: [
      { answer: "\\( y^2 = 12x + 9 \\)", type: "true" },
      { answer: "\\( y^2 = 2x + 6 \\)", type: "false" },
      { answer: "\\( y^2 = 3x + 9 \\)", type: "false" },
      { answer: "\\( y^2 = 12x + 6 \\)", type: "false" },
      { answer: "\\( y^2 = 2x + 3 \\)", type: "false" },
    ],
  },
  {
    id: 161,
    Question:
      "161. \\( yy' = 6 \\) Diferensial tənliyində \\( y = 1, x = 1 \\) olduqda xüsusi həllini tapın",
    answers: [
      { answer: "\\( y^2 = 12x - 11 \\)", type: "true" },
      { answer: "\\( y^2 = 12x + 9 \\)", type: "false" },
      { answer: "\\( y^2 = 12x - 9 \\)", type: "false" },
      { answer: "\\( y^2 = 12x + 11 \\)", type: "false" },
      { answer: "\\( y^2 = 2x - 1 \\)", type: "false" },
    ],
  },
  {
    id: 162,
    Question:
      "162. \\( y'' - 4y' + 4y = 0 \\) Sabit əmsallı diferensial tənliyin ümumi həllini tapın",
    answers: [
      { answer: "\\( y = e^{2x}(C_1 + C_2x) \\)", type: "true" },
      { answer: "\\( y = e^{3x}(C_1 + C_2) \\)", type: "false" },
      { answer: "\\( y = e^{2x} \\)", type: "false" },
      { answer: "\\( y = e^x(C_1 + C_2) \\)", type: "false" },
      { answer: "\\( y = e^{2x}(C_1 + C_2) \\)", type: "false" },
    ],
  },
  {
    id: 163,
    Question:
      "163. \\( y'' - 2y' + 2y = 0 \\) Sabit əmsallı diferensial tənliyin ümumi həllini tapın",
    answers: [
      { answer: "\\( y = e^x(C_1\\cos x + C_2\\sin x) \\)", type: "true" },
      { answer: "\\( y = e^{2x}(C_1\\cos x + C_2\\sin x) \\)", type: "false" },
      { answer: "\\( y = e^x(C_1\\cos 2x + C_2\\sin 2x) \\)", type: "false" },
      {
        answer: "\\( y = e^{3x}(C_1\\cos 2x + C_2\\sin 2x) \\)",
        type: "false",
      },
      { answer: "\\( y = e^{2x}(C_1\\cos 2x + C_2) \\)", type: "false" },
    ],
  },
  {
    id: 164,
    Question:
      " 164.\\( yy' = 6 \\) diferensial tənliyində \\( y = 2, x = 0 \\) olduqda xüsusi həllini tapın.",
    answers: [
      { answer: "\\( y^2 = 12x + 4 \\)", type: "true" },
      { answer: "\\( y^2 = 12x - 11 \\)", type: "false" },
      { answer: "\\( y^2 = 12x + 11 \\)", type: "false" },
      { answer: "\\( y^2 = 2x + 4 \\)", type: "false" },
      { answer: "\\( y^2 = 12x + 7 \\)", type: "false" },
    ],
  },
  {
    id: 165,
    Question:
      "165. \\( yy' = 6 \\) diferensial tənliyində \\( y = 3, x = 1 \\) olduqda xüsusi həllini tapın.",
    answers: [
      { answer: "\\( y^2 = 12x - 3 \\)", type: "true" },
      { answer: "\\( y^2 = 12x + 4 \\)", type: "false" },
      { answer: "\\( y^2 = 3x + 4 \\)", type: "false" },
      { answer: "\\( y^2 = 6x - 3 \\)", type: "false" },
      { answer: "\\( y^2 = 6x + 3 \\)", type: "false" },
    ],
  },
  {
    id: 166,
    Question:
      "166. \\( yy' = 6 \\) diferensial tənliyində \\( y = 4, x = 2 \\) olduqda xüsusi həllini tapın.",
    answers: [
      { answer: "\\( y^2 = 12x - 8 \\)", type: "true" },
      { answer: "\\( y^2 = 12x - 3 \\)", type: "false" },
      { answer: "\\( y^2 = 12x + 6 \\)", type: "false" },
      { answer: "\\( y^2 = 2x - 8 \\)", type: "false" },
      { answer: "\\( y^2 = 12x + 9 \\)", type: "false" },
    ],
  },
  {
    id: 167,
    Question:
      "167. \\( y \\frac{dy}{dx} = 7 \\) diferensial tənliyi həll edin.",
    answers: [
      { answer: "\\( y^2 = 14x + C \\)", type: "true" },
      { answer: "\\( y^2 = 4x + C \\)", type: "false" },
      { answer: "\\( y^2 = 21x + C \\)", type: "false" },
      { answer: "\\( y^2 = 7x + C \\)", type: "false" },
      { answer: "\\( y^2 = x + C \\)", type: "false" },
    ],
  },
  {
    id: 168,
    Question:
      "168. \\( y \\frac{dy}{dx} = 7 \\) diferensial tənliyində \\( y = 2, x = 1 \\) olduqda xüsusi həllini tapın.",
    answers: [
      { answer: "\\( y^2 = 14x - 10 \\)", type: "true" },
      { answer: "\\( y^2 = 4x - 10 \\)", type: "false" },
      { answer: "\\( y^2 = 14x + 6 \\)", type: "false" },
      { answer: "\\( y^2 = 14x + 5 \\)", type: "false" },
      { answer: "\\( y^2 = 7x - 10 \\)", type: "false" },
    ],
  },
  {
    id: 169,
    Question:
      "169. \\( y'' - 4y' + 3y = 0 \\) diferensial tənliyinin ümumi həllini tapın.",
    answers: [
      { answer: "\\( y = C_1e^x + C_2e^{3x} \\)", type: "true" },
      { answer: "\\( y = C_1e^x + C_2e^{x} \\)", type: "false" },
      { answer: "\\( y = C_1e^{3x} + C_2e^{3x} \\)", type: "false" },
      { answer: "\\( y = C_1e^x + C_2xe^{3x} \\)", type: "false" },
      { answer: "\\( y = C_1xe^x + C_2e^{3x} \\)", type: "false" },
    ],
  },
  {
    id: 170,
    Question:
      "170. \\( y'' - 4y = 0 \\) diferensial tənliyinin ümumi həllini tapın.",
    answers: [
      { answer: "\\( y = C_1e^{2x} + C_2e^{-2x} \\)", type: "true" },
      { answer: "\\( y = C_1xe^{2x} + C_2e^{-2x} \\)", type: "false" },
      { answer: "\\( y = C_1e^{2x} + C_2xe^{-2x} \\)", type: "false" },
      { answer: "\\( y = C_1e^{3x} + C_2e^{-2x} \\)", type: "false" },
      { answer: "\\( y = C_1e^{2x} + C_2e^{3x} \\)", type: "false" },
    ],
  },
  {
    id: 171,
    Question:
      "171. \\( y'' - 4y' = 0 \\) diferensial tənliyinin ümumi həllini tapın.",
    answers: [
      { answer: "\\( y = C_1 + C_2e^{-4x} \\)", type: "true" },
      { answer: "\\( y = C_1e^{2x} + C_2e^{-4x} \\)", type: "false" },
      { answer: "\\( y = C_1xe^{2x} + C_2e^{-4x} \\)", type: "false" },
      { answer: "\\( y = C_1 + C_2xe^{-4x} \\)", type: "false" },
      { answer: "\\( y = C_1e^{-4x} + C_2 \\)", type: "false" },
    ],
  },
  {
    id: 172,
    Question:
      "172. \\( y'' + 3y' + 2y = 0 \\) diferensial tənliyinin ümumi həllini tapın.",
    answers: [
      { answer: "\\( y = C_1e^{-2x} + C_2e^{-x} \\)", type: "true" },
      { answer: "\\( y = xe^{-2x} + C_2e^{-x} \\)", type: "false" },
      { answer: "\\( y = C_1e^{-2x} + C_2xe^{-x} \\)", type: "false" },
      { answer: "\\( y = C_1e^{-3x} + C_2e^{-x} \\)", type: "false" },
      { answer: "\\( y = C_1e^{-2x} + C_2e^{-3x} \\)", type: "false" },
    ],
  },
  {
    id: 173,
    Question:
      "173. \\( y \\frac{dy}{dx} = 7 \\) diferensial tənliyində \\( y = 4, x = 1 \\) olduqda xüsusi həllini tapın.",
    answers: [
      { answer: "\\( y^2 = 16x \\)", type: "true" },
      { answer: "\\( y^2 = 14x - 10 \\)", type: "false" },
      { answer: "\\( y^2 = 7x - 2 \\)", type: "false" },
      { answer: "\\( y^2 = 8x + 2 \\)", type: "false" },
      { answer: "\\( y^2 = 7x + 2 \\)", type: "false" },
    ],
  },
  {
    id: 174,
    Question:
      "174. \\( yy' = 8 \\) diferensial tənliyinin ümumi həllini tapın.",
    answers: [
      { answer: "\\( y^2 = 16x + C \\)", type: "true" },
      { answer: "\\( y^2 = 8x + C \\)", type: "false" },
      { answer: "\\( y^2 = 4x + C \\)", type: "false" },
      { answer: "\\( y^2 = \\frac{1}{16}x + C \\)", type: "false" },
      { answer: "\\( y^2 = \\frac{1}{8}x + C \\)", type: "false" },
    ],
  },
  {
    id: 175,
    Question:
      "175. \\( yy' = 8 \\) diferensial tənliyində \\( y = 1, x = 0 \\) olduqda xüsusi həllini tapın.",
    answers: [
      { answer: "\\( y^2 = 16x + 1 \\)", type: "true" },
      { answer: "\\( y^2 = 16x + 3 \\)", type: "false" },
      { answer: "\\( y^2 = 16x + 5 \\)", type: "false" },
      { answer: "\\( y^2 = 6x + 1 \\)", type: "false" },
      { answer: "\\( y^2 = 16x \\)", type: "false" },
    ],
  },
  {
    id: 176,
    Question:
      "176. \\( yy' = 8 \\) diferensial tənliyində \\( y = 4, x = 1 \\) olduqda xüsusi həllini tapın.",
    answers: [
      { answer: "\\( y^2 = 16x \\)", type: "true" },
      { answer: "\\( y^2 = 16x + 1 \\)", type: "false" },
      { answer: "\\( y^2 = 8x + 1 \\)", type: "false" },
      { answer: "\\( y^2 = 16x + 4 \\)", type: "false" },
      { answer: "\\( y^2 = 8 \\)", type: "false" },
    ],
  },
  {
    id: 177,
    Question:
      "177. \\( y \\frac{dy}{dx} = 9 \\) diferensial tənliyinin ümumi həllini tapın.",
    answers: [
      { answer: "\\( y^2 = 18x + C \\)", type: "true" },
      { answer: "\\( y^2 = 9x + C \\)", type: "false" },
      { answer: "\\( y^2 = 18x + 1 \\)", type: "false" },
      { answer: "\\( y^2 = 27x + C \\)", type: "false" },
      { answer: "\\( y^2 = 8x + C \\)", type: "false" },
    ],
  },
  {
    id: 178,
    Question:
      "178. \\( y'' + 2y' + 5y = 0 \\) sabit əmsallı diferensial tənliyini həll edin.",
    answers: [
      { answer: "\\( y = e^{-x}(C_1\\cos 2x + C_2\\sin 2x) \\)", type: "true" },
      { answer: "\\( y = e^{-x}(C_1\\cos x + C_2\\sin x) \\)", type: "false" },
      { answer: "\\( y = e^x(C_1\\cos x + C_2\\sin 2x) \\)", type: "false" },
      { answer: "\\( y = e^{-x}(C_1\\cos x + C_2\\sin 2x) \\)", type: "false" },
      { answer: "\\( y = e^{-x}(C_1\\cos x + C_2\\sin x) \\)", type: "false" },
    ],
  },
  {
    id: 179,
    Question:
      "179. \\( y'' - y = 0 \\) sabit əmsallı diferensial tənliyi həll edin.",
    answers: [
      { answer: "\\( y = C_1e^x + C_2e^{-x} \\)", type: "true" },
      { answer: "\\( y = C_1e^{2x} + C_2e^{-x} \\)", type: "false" },
      { answer: "\\( y = C_1e^x + C_2xe^{-x} \\)", type: "false" },
      { answer: "\\( y = C_1xe^x + C_2e^{-x} \\)", type: "false" },
      { answer: "\\( y = C_1e^x + C_2e^{3x} \\)", type: "false" },
    ],
  },
  {
    id: 180,
    Question:
      "180. \\( y'' + y = 0 \\) sabit əmsallı diferensial tənliyi həll edin.",
    answers: [
      { answer: "\\( y = C_1\\cos x + C_2\\sin x \\)", type: "true" },
      { answer: "\\( y = C_1\\cos 2x + C_2\\sin x \\)", type: "false" },
      {
        answer: "\\( y = e^{-x}(C_1\\cos 2x + C_2\\sin 2x) \\)",
        type: "false",
      },
      { answer: "\\( y = C_1\\cos 3x + C_2\\sin 3x \\)", type: "false" },
      { answer: "\\( y = C_1e^x + C_2e^{2x} \\)", type: "false" },
    ],
  },
  {
    id: 181,
    Question:
      "181. \\( \\frac{d^2y}{dx^2} - 3\\frac{dy}{dx} + 2y = 0 \\) sabit əmsallı diferensial tənliyin ümumi həllini tapın.",
    answers: [
      { answer: "\\( y = C_1e^x + C_2e^{2x} \\)", type: "true" },
      { answer: "\\( y = C_1e^x + C_2xe^{2x} \\)", type: "false" },
      { answer: "\\( y = C_1xe^x + C_2e^{2x} \\)", type: "false" },
      { answer: "\\( y = C_1e^{2x} + C_2e^{2x} \\)", type: "false" },
      { answer: "\\( y = C_1e^x + C_2xe^x \\)", type: "false" },
    ],
  },
  {
    id: 182,
    Question:
      "182. \\( \\frac{d^2y}{dx^2} - y = 0 \\) sabit əmsallı diferensial tənliyin ümumi həllini tapın.",
    answers: [
      { answer: "\\( y = C_1e^x + C_2e^{-x} \\)", type: "true" },
      { answer: "\\( y = C_1e^x + C_2xe^{-x} \\)", type: "false" },
      { answer: "\\( y = C_1e^{2x} + C_2e^{-x} \\)", type: "false" },
      { answer: "\\( y = C_1xe^x + C_2e^{-x} \\)", type: "false" },
      { answer: "\\( y = C_1e^x + C_2e^{3x} \\)", type: "false" },
    ],
  },
  {
    id: 183,
    Question:
      "183. \\( \\frac{d^2y}{dx^2} + y = 0 \\) sabit əmsallı diferensial tənliyin ümumi həllini tapın.",
    answers: [
      { answer: "\\( y = C_1\\cos x + C_2\\sin x \\)", type: "true" },
      { answer: "\\( y = C_1\\cos 2x + C_2\\sin x \\)", type: "false" },
      {
        answer: "\\( y = e^{-x}(C_1\\cos 2x + C_2\\sin 2x) \\)",
        type: "false",
      },
      { answer: "\\( y = C_1\\cos 3x + C_2\\sin 3x \\)", type: "false" },
      { answer: "\\( y = C_1e^x + C_2e^{2x} \\)", type: "false" },
    ],
  },
  {
    id: 184,
    Question:
      "184. \\( \\frac{d^2y}{dx^2} - 4\\frac{dy}{dx} = 0 \\) sabit əmsallı diferensial tənliyin ümumi həllini tapın.",
    answers: [
      { answer: "\\( y = C_1 + C_2e^{4x} \\)", type: "true" },
      { answer: "\\( y = C_1e^{4x} + C_2e^{4x} \\)", type: "false" },
      { answer: "\\( y = C_1e^{2x} + C_2e^{-2x} \\)", type: "false" },
      { answer: "\\( y = C_1xe^{2x} + C_2e^{-2x} \\)", type: "false" },
      { answer: "\\( y = C_1 + C_2e^x \\)", type: "false" },
    ],
  },
  {
    id: 185,
    Question:
      "185. \\( 3y'' + 2y' - 5y = 0 \\) sabit əmsallı diferensial tənliyin ümumi həllini tapın.",
    answers: [
      { answer: "\\( y = C_1e^{-\\frac{5}{3}x} + C_2e^x \\)", type: "true" },
      { answer: "\\( y = C_1xe^{-\\frac{5}{3}x} + C_2e^x \\)", type: "false" },
      { answer: "\\( y = C_1e^{-\\frac{5}{3}x} + C_2xe^x \\)", type: "false" },
      {
        answer: "\\( y = C_1e^{-\\frac{5}{3}x} + C_2e^{-\\frac{5}{3}x} \\)",
        type: "false",
      },
      { answer: "\\( y = C_1xe^{-\\frac{5}{3}x} + C_2 \\)", type: "false" },
    ],
  },
  {
    id: 186,
    Question:
      " 186. \\( y'' - 2y' - y = 0 \\) sabit əmsallı diferensial tənliyi həll edin.",
    answers: [
      {
        answer: "\\( y = C_1e^{(1+\\sqrt{2})x} + C_2e^{(1-\\sqrt{2})x} \\)",
        type: "true",
      },
      {
        answer: "\\( y = C_1xe^{(1+\\sqrt{2})x} + C_2e^{(1-\\sqrt{2})x} \\)",
        type: "false",
      },
      {
        answer: "\\( y = C_1e^{(1+\\sqrt{2})x} + C_2xe^{(1-\\sqrt{2})x} \\)",
        type: "false",
      },
      { answer: "\\( y = C_1e^{(1+\\sqrt{2})x} + C_2 \\)", type: "false" },
      {
        answer: "\\( y = C_1e^{(1-\\sqrt{2})x} + C_2e^{(1+\\sqrt{2})x} \\)",
        type: "false",
      },
    ],
  },
  {
    id: 187,
    Question:
      "187. \\( 3\\frac{d^2y}{dx^2} - 2\\frac{dy}{dx} - 8y = 0 \\) sabit əmsallı diferensial tənliyi həll edin.",
    answers: [
      { answer: "\\( y = C_1e^{2x} + C_2e^{-\\frac{4}{3}x} \\)", type: "true" },
      {
        answer: "\\( y = C_1e^{2x} + C_2e^{-\\frac{4}{3}x} \\)",
        type: "false",
      },
      {
        answer: "\\( y = C_1e^{2x} + C_2xe^{-\\frac{4}{3}x} \\)",
        type: "false",
      },
      { answer: "\\( y = C_1e^x + C_2xe^{-\\frac{4}{3}x} \\)", type: "false" },
      { answer: "\\( y = C_1e^x + C_2e^{2x} \\)", type: "false" },
    ],
  },
  {
    id: 188,
    Question:
      "188. \\( \\frac{dy}{dx} = -\\frac{y}{x} \\) diferensial tənliyinin ümumi həllini tapın.",
    answers: [
      { answer: "\\( y = \\frac{c}{x} \\)", type: "true" },
      { answer: "\\(  y = C \\ln x \\)", type: "false" },
      { answer: "\\( y = c \\frac{1}{x^2} \\)", type: "false" },
      { answer: "\\( y = \\frac{c}{3x} \\)", type: "false" },
      { answer: "\\( y = x + C \\)", type: "false" },
    ],
  },
  {
    id: 189,
    Question:
      "189. \\( \\frac{dy}{dx} + \\frac{2y}{x} = x^3 \\) birtərtibli xətti diferensial tənliyin ümumi həllini yazın.",
    answers: [
      { answer: "\\( y = \\frac{x^4}{6} + \\frac{c}{x^2} \\)", type: "true" },
      { answer: "\\( y = \\frac{x^4}{4} + \\frac{c}{x^2} \\)", type: "false" },
      { answer: "\\( y = \\frac{x^4}{6} + C \\)", type: "false" },
      { answer: "\\( y = \\frac{x^4}{16} + C \\)", type: "false" },
      { answer: "\\( y = \\frac{x^4}{6} + \\frac{c}{x^4} \\)", type: "false" },
    ],
  },
  {
    id: 190,
    Question:
      "190. \\( \\frac{dy}{dx} - \\frac{y}{x} = x \\) birtərtibli xətti diferensial tənliyi həll edin.",
    answers: [
      { answer: "\\( y = cx + x^2 \\)", type: "true" },
      { answer: "\\( y = cx + x^3 \\)", type: "false" },
      { answer: "\\( y = x^2 + C \\)", type: "false" },
      { answer: "\\( y = cx \\)", type: "false" },
      { answer: "\\( y = cx^2 \\)", type: "false" },
    ],
  },
  {
    id: 191,
    Question:
      "191. \\( \\frac{dy}{dx} tgx = y + a \\) dəyişənlərinə ayrılan diferensial tənliyi həll edin.",
    answers: [
      { answer: "\\( y = c \\sin x - a \\)", type: "true" },
      { answer: "\\( y = c \\sin x + a \\)", type: "false" },
      { answer: "\\( y = \\sin x - a + C \\)", type: "false" },
      { answer: "\\( y = \\sin x - a \\)", type: "false" },
      { answer: "\\( y = \\sin x - C \\)", type: "false" },
    ],
  },
  {
    id: 192,
    Question: "192. İnteqralı hesablayın: \\( \\int \\frac{dx}{e^{2x - 1}} \\)",
    answers: [
      { answer: "\\( -0.5e^{1-2x} + C \\)", type: "true" },
      { answer: "\\( xe^{2x+1} + C \\)", type: "false" },
      { answer: "\\( 2e^{1-2x} + C \\)", type: "false" },
      { answer: "\\( xe^{2x} + C \\)", type: "false" },
      { answer: "\\( (1 - 2x)e^{1-2x} + C \\)", type: "false" },
    ],
  },
  {
    id: 193,
    Question: "1943. İnteqralı hesablayın: \\( \\int \\ln x dx \\)",
    answers: [
      { answer: "\\( x \\ln|x| - x + C \\)", type: "true" },
      { answer: "\\( x - \\ln|x| + C \\)", type: "false" },
      { answer: "\\( \\ln|x| + x + C \\)", type: "false" },
      { answer: "\\( \\ln|x| + C \\)", type: "false" },
      { answer: "\\( x - x \\ln|x| + C \\)", type: "false" },
    ],
  },
  {
    id: 194,
    Question:
      "194. İnteqralı hesablayın: \\( \\int \\frac{\\cos^3x}{\\sin^2x} dx \\)",
    answers: [
      { answer: "\\( -\\frac{1}{\\cos^2x} + \\cos x + C \\)", type: "true" },
      { answer: "\\( \\frac{1}{\\sin x} - \\cos x + C \\)", type: "false" },
      { answer: "\\( \\frac{1}{\\sin x} + \\sin^2x + C \\)", type: "false" },
      { answer: "\\( -\\frac{1}{\\sin x} - \\sin x + C \\)", type: "false" },
      { answer: "\\( -\\cos x + C \\)", type: "false" },
    ],
  },
  {
    id: 195,
    Question:
      "195. \\( \\int R(\\sin x, \\cos x) dx \\) trigonometric funksiyalar daxil olan inteqralı hesablamaq üçün hansı əvəzləmədən istifadə etmək lazımdır?",
    answers: [
      { answer: "\\( tg \\frac{x}{2} = t \\)", type: "true" },
      { answer: "\\( \\sin x = t \\)", type: "false" },
      { answer: "\\( \\cos x = t \\)", type: "false" },
      { answer: "\\( x = \\arcsin t \\)", type: "false" },
      { answer: "\\( x = \\arccos t \\)", type: "false" },
    ],
  },
  {
    id: 196,
    Question:
      "196. \\( \\int \\sin^n x \\cos^m x dx \\) inteqralını hesablamaq üçün hansı əvəzləməni aparmaq olar?",
    answers: [
      { answer: "\\( t = \\sin x \\) və ya \\( t = \\cos x \\)", type: "true" },
      { answer: "\\( t = \\tan x \\)", type: "false" },
      { answer: "\\( t = arctg x \\)", type: "false" },
      { answer: "\\( t = \\arcsin x \\)", type: "false" },
      { answer: "\\( t = \\arccos x \\)", type: "false" },
    ],
  },
  {
    id: 197,
    Question: "197. \\( \\int \\sin 7x \\sin 5x dx \\) inteqralını tapın:",
    answers: [
      {
        answer: "\\( \\frac{1}{4} \\sin 2x - \\frac{1}{24} \\sin 12x + C \\)",
        type: "true",
      },
      { answer: "\\( \\frac{1}{4} \\sin 4x + C \\)", type: "false" },
      { answer: "\\( \\frac{1}{24} \\sin 12x + C \\)", type: "false" },
      { answer: "\\( \\frac{1}{4} \\sin x + C \\)", type: "false" },
      { answer: "\\( \\frac{1}{12} \\sin 12x + C \\)", type: "false" },
    ],
  },
  {
    id: 198,
    Question: "198. \\( \\int \\sin x \\cos 7x dx \\) tapın:",
    answers: [
      { answer: "\\( -\\frac{\\cos^8 x}{8} + C \\)", type: "true" },
      { answer: "\\( \\frac{\\sin 8x}{8} + C \\)", type: "false" },
      { answer: "\\( -\\frac{\\sin 7x}{7} + C \\)", type: "false" },
      { answer: "\\( \\frac{\\cos 7x}{7} + C \\)", type: "false" },
      { answer: "\\( \\sin 7x + C \\)", type: "false" },
    ],
  },
  {
    id: 199,
    Question: "199. \\( \\int \\sin^2 3x dx \\) tapın:",
    answers: [
      { answer: "\\( \\frac{6x - \\sin 6x}{12} + C \\)", type: "true" },
      { answer: "\\( \\frac{x - \\sin 3x}{C} + C \\)", type: "false" },
      { answer: "\\( 3x - \\sin 3x + C \\)", type: "false" },
      { answer: "\\( x^2 - \\sin 3x + C \\)", type: "false" },
      { answer: "\\( x - \\sin 12x + C \\)", type: "false" },
    ],
  },
  {
    id: 200,
    Question:
      "200. \\( \\lim_{n \\to \\infty} \\left( \\frac{3x + 5}{3x - 1} \\right)^{2x^2} \\) hesablayın.",
    answers: [
      { answer: "\\( \\infty \\)", type: "true" },
      { answer: "\\( \\frac{1}{2} \\)", type: "false" },
      { answer: "\\( 0 \\)", type: "false" },
      { answer: "\\( e^2 \\)", type: "false" },
      { answer: "\\( \\frac{1}{e} \\)", type: "false" },
    ],
  },
  {
    id: 201,
    Question:
      "201. \\( \\lim_{x \\to \\infty} \\left( \\frac{x^4}{x^2 - 2} - \\frac{x^4}{x^2 + 2} \\right) \\) hesablayın.",
    answers: [
      { answer: "4", type: "true" },
      { answer: "3", type: "false" },
      { answer: "-2", type: "false" },
      { answer: "5", type: "false" },
      { answer: "6", type: "false" },
    ],
  },
  {
    id: 202,
    Question:
      "202. \\( \\lim_{x \\to 1} \\frac{x^2 - 1}{\\sqrt{x} - 1} \\) hesablayın.",
    answers: [
      { answer: "4", type: "true" },
      { answer: "1", type: "false" },
      { answer: "-1", type: "false" },
      { answer: "3", type: "false" },
      { answer: "2", type: "false" },
    ],
  },
  {
    id: 203,
    Question:
      "203. \\( \\lim_{x \\to \\infty} \\left( x - \\frac{x^3}{3x^2 + 7} \\right) \\) hesablayın.",
    answers: [
      { answer: "\\( \\infty \\)", type: "true" },
      { answer: "6", type: "false" },
      { answer: "4", type: "false" },
      { answer: "5", type: "false" },
      { answer: "1", type: "false" },
    ],
  },
  {
    id: 204,
    Question:
      "204. \\( a \\leq x \\leq b \\) və \\( f(x) \\geq 0 \\) olarsa \\( \\int_{a}^{b} f(x) dx \\) müəyyən inteqralı üçün aşağıdakı şərtlərdən hansı doğrudur?",
    answers: [
      { answer: "\\( \\int_{a}^{b} f(x) dx \\geq 0 \\)", type: "true" },
      { answer: "\\( \\int_{a}^{b} f(x) dx \\leq 0 \\)", type: "false" },
      { answer: "\\( \\int_{a}^{b} f(x) dx = f(a) \\)", type: "false" },
      { answer: "\\( \\int_{a}^{b} f(x) dx = f(b) \\)", type: "false" },
      { answer: "\\( \\int_{a}^{b} f(x) dx = f(x) \\)", type: "false" },
    ],
  },
  {
    "id": 205,
    "Question": "205. \\([a, b]\\)-də \\(f(x)\\) funksiyasının ibtidai funksiyalarından biri \\(F(x)\\) funksiyası olarsa, onda Nyuton-Leybnis düsturu necə yazılır?",
    "answers": [
        { "answer": "\\( \\int_{a}^{b} f(x) dx = F(b) - F(a) \\)", "type": "true" },
        { "answer": "\\( \\int_{a}^{b} f(x) dx = f(b) - f(a) \\)", "type": "false" },
        { "answer": "\\( \\int_{a}^{b} f(x) dx = F(a) - F(b) \\)", "type": "false" },
        { "answer": "\\( \\int_{a}^{b} f(x) dx = f(a) \\)", "type": "false" },
        { "answer": "\\( \\int_{a}^{b} f(x) dx = F(x) - F(a) \\)", "type": "false" }
    ]
},
{
    "id": 206,
    "Question": "206. Müəyyən inteqralda hissə-hissə inteqrallama düsturu hansıdır?",
    "answers": [
        { "answer": "\\( \\int_{a}^{b} u(x) dv (x)  = \\left[ u(x) \\cdot v(x) \\right]_{a}^{b} - \\int_{a}^{b} v(x) du (x) \\)", "type": "true" },
        { "answer": "\\( \\int u dv = \\left[ uv \\right]_{a}^{b} - \\int v du \\)", "type": "false" },
        { "answer": "\\( \\int_{a}^{b} v du = \\int_{a}^{b} v du - \\left[ uv \\right]_{a}^{b} \\)", "type": "false" },
        { "answer": "\\( \\int_{a}^{b} u dv = \\int_{a}^{b} v du - \\left[ uv \\right]_{a}^{b} \\)", "type": "false" },
        { "answer": "\\( \\int_{a}^{b} uv = \\int_{a}^{b} v du - [uv] \\)", "type": "false" }
    ]
},
{
    "id": 207,
    "Question": "207. Müəyyən inteqralda dəyişəni əvəz etmə düsturu hansıdır?",
    "answers": [
        { "answer": "\\( \\int_{a}^{b} f(x) dx = \\int_{\\alpha}^{\\beta} f[\\phi(t)] \\phi'(t) dt \\)", "type": "true" },
        { "answer": "\\( \\int_{a}^{b} f(x) dx = F(b) - F(a) \\)", "type": "false" },
        { "answer": "\\( \\int_{a}^{b} f(x) dx = F(a) \\)", "type": "false" },
        { "answer": "\\( \\int_{a}^{b} f(x) dx = \\int_{a}^{b} f(\\phi(t)) dt \\)", "type": "false" },
        { "answer": "\\( \\int_{a}^{b} f(x) dx = \\int_{a}^{b} \\phi(t) dt \\)", "type": "false" }
    ]
},
{
    "id": 208,
    "Question": "208. Yuxarıdan \\(y=f(x)\\) əyrisi, soldan \\(x=a\\), sağdan \\(x=b\\) düz xətləri, aşağıdan abssis oxu ilə məhdud edilmiş əyrixətli trapesiyanın sahəsi hansı düsturla hesablanır?",
    "answers": [
        { "answer": "\\( S = \\int_{a}^{b} f(x) dx \\)", "type": "true" },
        { "answer": "\\( S = \\int_{a}^{b} f^2(x) dx \\)", "type": "false" },
        { "answer": "\\( S = \\int_{b}^{a} f(x) dx \\)", "type": "false" },
        { "answer": "\\( S = \\int_{a}^{a} f(x) dx \\)", "type": "false" },
        { "answer": "\\( S = \\int_{b}^{b} f(x) dx \\)", "type": "false" }
    ]
},
{
    "id": 209,
    "Question": "209. Əgər \\((S)\\) oblastı \\(a \\leq x \\leq b\\), \\(c \\leq y \\leq d\\) şəklində olarsa \\(f(x, y)\\) funksiyasının ikiqat inteqralı hansı düsturla hesablanır?",
    "answers": [
        { "answer": "\\( \\int_{(S)} \\int f(x, y) ds = \\int_{a}^{b} dx \\int_{c}^{d} f(x, y) dy  \\)", "type": "true" },
        { "answer": "\\( \\int_{(S)} \\int f(x, y) ds = \\int_{a}^{b} f(x, y) dy \\)", "type": "false" },
        { "answer": "\\( \\int_{(S)} \\int f(x, y) ds = \\int_{b}^{a} \\int_{c}^{d} f(x, y) dx dy \\)", "type": "false" },
        { "answer": "\\( \\int_{(S)} \\int f(x, y) ds = \\int_{a}^{b} f(x, y) dy \\int_{c}^{d} dx \\)", "type": "false" },
        { "answer": "\\( \\int_{(S)} \\int f(x, y) ds = \\int_{a}^{b} dy \\int_{c}^{d} dx \\)", "type": "false" }
    ]
},
{
    "id": 210,
    "Question": "210. \\( \\int_{1}^{3} dx \\int_{2}^{{x^2}+5} \\frac{1}{x^2} dy \\) hesablayın.",
    "answers": [
        { "answer": "4", "type": "true" },
        { "answer": "-3", "type": "false" },
        { "answer": "-2", "type": "false" },
        { "answer": "8", "type": "false" },
        { "answer": "3", "type": "false" }
    ]
},    
{
    "id": 211,
    "Question": "211. \\( \\lim_{n \\to \\infty} \\frac{4 - n^2}{3 - n^k} = 1 \\) olması üçün \\(k=\\)?",
    "answers": [
        { "answer": "2", "type": "true" },
        { "answer": "42", "type": "false" },
        { "answer": "53", "type": "false" },
        { "answer": "35", "type": "false" },
        { "answer": "\\(35 \\frac{1}{2}\\)", "type": "false" }
    ]
},
{
    "id": 212,
    "Question": "212. İkiqat inteqralı hesablayın: \\( \\int \\int_{(S)} \\frac{x}{y^2} dx dy \\), harada ki, \\((S)\\) oblastı \\([1, 2; 4, 6]\\) düzbucaqlıdır.",
    "answers": [
        { "answer": "0.125", "type": "true" },
        { "answer": "2", "type": "false" },
        { "answer": "4", "type": "false" },
        { "answer": "0.3", "type": "false" },
        { "answer": "0.8", "type": "false" }
    ]
},
{
    "id": 213,
    "Question": "213. \\((S)\\)-müstəvi oblastının \\(S\\)-sahəsi ikiqat inteqralla hansı düsturla hesablanır?",
    "answers": [
        { "answer": "\\( S = \\int \\int_{(S)} ds \\)", "type": "true" },
        { "answer": "\\( S = \\int \\int_{(S)} dx ds \\)", "type": "false" },
        { "answer": "\\( S = \\int \\int_{(S)} dy ds \\)", "type": "false" },
        { "answer": "\\( S = \\int \\int_{(S)} dy \\)", "type": "false" },
        { "answer": "\\( S = \\int \\int_{(S)} dx \\)", "type": "false" }
    ]
},
{
    "id": 214,
    "Question": "214. \\( \\lim_{n \\to \\infty} \\frac{\\sqrt{n^2 + n} - \\sqrt{9n^2 + 2n}}{\\sqrt[3]{n^3 - 1} - \\sqrt[3]{8n^3 + 2}} \\) hesablayın.",
    "answers": [
        { "answer": "2", "type": "true" },
        { "answer": "6", "type": "false" },
        { "answer": "8", "type": "false" },
        { "answer": "3", "type": "false" },
        { "answer": "6.75", "type": "false" }
    ]
},
{
    "id": 215,
    "Question": "215. L-əyrisi \\(x = x(t), y = y(t), z = z(t)\\) \\((\\alpha \\leq t \\leq \\beta)\\) parametrik şəkildə verilirsə, onda L-əyrisi üzrə birinci növ əyrixətli inteqral necə hesablanar?",
    "answers": [
        { "answer": "\\( \\int_{L} f(x, y, z) dl = \\int_{\\alpha}^{\\beta} f(x(t), y(t), z(t)) \\sqrt{x_t'^2 + y_t'^2 + z_t'^2} dt \\)", "type": "true" },
        { "answer": "\\( \\int_{L} f(x, y, z) dl = \\int_{\\alpha}^{\\beta} f(x(t), y(t), z(t)) dt \\)", "type": "false" },
        { "answer": "\\( \\int_{L} f(x, y, z) dl = \\int_{\\alpha}^{\\beta} f(x(t), y(t), dt \\)", "type": "false" },
        { "answer": "\\( \\int_{L} f(x, y, z) dl = \\int_{\\alpha}^{\\beta} f(x(t), z(t)) dt \\)", "type": "false" },
        { "answer": "\\( \\int_{L} f(x, y, z) dl = \\int_{\\alpha}^{\\beta} f(y(t), z(t)) dt \\)", "type": "false" }
    ]
},
{
    "id": 216,
    "Question": "216. İkinci növ əyrixətli inteqralı hesablayın: \\( \\int_{L} (x^2 + y) dx + (x + y^2) dy \\), burada L-əyrisi A(-1,1)-dən B(0,2)-yə qədər olan düz xətt parçasıdır.",
    "answers": [
        { "answer": "\\( \\frac{11}{3} \\)", "type": "true" },
        { "answer": "\\( \\frac{7}{3} \\)", "type": "false" },
        { "answer": "\\( \\frac{5}{7} \\)", "type": "false" },
        { "answer": "5", "type": "false" },
        { "answer": "2", "type": "false" }
    ]
  },
  {
    "id": 217,
    "Question": "217. Əgər müstəvi əyrisi \\(y=y(x)\\) \\((a \\leq x \\leq b)\\) tənliyi ilə verilərsə, onda birinci növ əyrixətli inteqral necə hesablanır?",
    "answers": [
        { "answer": "\\( \\int_{L} f(x, y) dl = \\int_{a}^{b} f(x, y(x)) \\sqrt{1 + y'^2} dx \\)", "type": "true" },
        { "answer": "\\( \\int_{L} f(x, y) dl = \\int_{a}^{b} f(x, y(x)) dy \\)", "type": "false" },
        { "answer": "\\( \\int_{L} f(x, y) dl = \\int_{a}^{b} f(x, y(x)) \\sqrt{1 + y'} dx \\)", "type": "false" },
        { "answer": "\\( \\int_{L} f(x, y) dl = \\int_{a}^{b} f(x, y(x)) \\sqrt{1 + x'} dy \\)", "type": "false" },
        { "answer": "\\( \\int_{L} f(x, y) dl = \\int_{a}^{b} f(x, y(x)) dx dy \\)", "type": "false" }
    ]
},
{
    "id": 218,
    "Question": "218. \\( \\int_{L} P(x, y) dx + Q(x, y) dy \\) inteqralı nə zaman inteqrallama yolundan asılı deyildir?",
    "answers": [
        { "answer": "\\( \\frac{\\partial P}{dy} = \\frac{\\partial Q}{dx} \\) olduqda,", "type": "true" },
        { "answer": "\\( \\frac{\\partial P}{dx} = \\frac{\\partial Q}{dy} \\)", "type": "false" },
        { "answer": "\\( \\frac{\\partial P}{dx} = -\\frac{\\partial Q}{dy} \\)", "type": "false" },
        { "answer": "\\( \\frac{\\partial P}{dx} = \\frac{\\partial Q}{dx} \\)", "type": "false" },
        { "answer": "\\( \\frac{\\partial P}{dy} = -\\frac{\\partial Q}{dx} \\)", "type": "false" }
    ]
},
{
    "id": 219,
    "Question": "219. \\( \\int_{L} P(x, y) dx + Q(x, y) dy \\) əyrixətli inteqralında \\( \\frac{\\partial P}{dy} = \\frac{\\partial Q}{dx} \\) şərti ödənilirsə, inteqralaltı ifadə nəyə bərabər olar?",
    "answers": [
        { "answer": "\\( P(x, y) dx + Q(x, y) dy = dU(x, y) \\)", "type": "true" },
        { "answer": "\\( Pdx + Qdy = U(x, y) \\)", "type": "false" },
        { "answer": "\\( Pdx + Qdy = \\frac{\\partial U (x,y)}{\\partial y} \\)", "type": "false" },
        { "answer": "\\( Pdx + Qdy = \\frac{\\partial U}{\\partial y} \\)", "type": "false" },
        { "answer": "\\( Pdx + Qdy = \\frac{\\partial^2 U}{\\partial x \\partial y} \\)", "type": "false" }
    ]
},
{
    "id": 220,
    "Question": "220. Əgər \\((S)\\) oblastı \\(a \\leq x \\leq b, c \\leq y \\leq d\\) şəklində olarsa \\(f(x, y)\\) funksiyasının ikiqat inteqralı hansı düsturla hesablanır?",
    "answers": [
        { "answer": "\\( \\int \\int_{S} f(x, y) ds = \\int_{a}^{b} dx \\int_{c}^{d} f(x, y) dy \\)", "type": "true" },
        { "answer": "\\( \\int \\int_{S} f(x, y) ds = \\int_{a}^{b} f(x, y) dy \\)", "type": "false" },
        { "answer": "\\( \\int \\int_{S} f(x, y) ds = \\int_{b}^{a} dy \\int_{c}^{d} f(x, y) dx \\)", "type": "false" },
        { "answer": "\\( \\int \\int_{S} f(x, y) ds = \\int_{a}^{b} f(x, y) dy \\int_{c}^{d} dx \\)", "type": "false" },
        { "answer": "\\( \\int \\int_{S} f(x, y) ds = \\int_{a}^{b} dy \\int_{c}^{d} dx \\)", "type": "false" }
    ]
},
{
  "id": 241,
  "Question": "241. \\( \\lim_{x \\to 3} \\left( \\frac{1}{x - 3} - \\frac{6}{x^2 - 9} \\right) \\) hesablayın.",
  "answers": [
      { "answer": "\\( \\frac{1}{6} \\)", "type": "true" },
      { "answer": "8", "type": "false" },
      { "answer": "7", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "2", "type": "false" }
  ]
},
{
  "id": 242,
  "Question": "242. \\( x dx - 2dy = 0 \\) diferensial tənliyinin \\(x=3, y=1\\) şərtini ödəyən həllini tapın:",
  "answers": [
      { "answer": "\\( x^2 = 4y + 5 \\)", "type": "false" },
      { "answer": "\\( x^2 = 2y + 5 \\)", "type": "false" },
      { "answer": "\\( x^2 = y - 5 \\)", "type": "true" },
      { "answer": "\\( x^2 = y + x \\)", "type": "false" },
      { "answer": "\\( x^2 = 5y + 4 \\)", "type": "false" }
  ]
},
{
  "id": 243,
  "Question": "243. \\((y - 4)dx - (x + 1)dy = 0 \\) dəyişənlərinə ayrılan diferensial tənliyin \\(x=1, y=10\\) şərtini ödəyən həllini tapın:",
  "answers": [
      { "answer": "\\( y = 3x + 7 \\)", "type": "false" },
      { "answer": "\\( y = 2x + 7 \\)", "type": "false" },
      { "answer": "\\( y = 3x + 12 \\)", "type": "true" },
      { "answer": "\\( y = 2x - 5 \\)", "type": "false" },
      { "answer": "\\( y = 2x + 6 \\)", "type": "false" }
  ]
},
{
  "id": 244,
  "Question": "244. \\( \\lim_{x \\to \\infty} (\\frac{2x^3}{2x^2 - x} - x) \\) limiti hesablayın.",
  "answers": [
      { "answer": "0.5", "type": "true" },
      { "answer": "2", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "4", "type": "false" },
      { "answer": "5", "type": "false" }
  ]
},
{
  "id": 245,
  "Question": "245. \\( \\lim_{x \\to \\infty} (\\frac{3x^4}{x^2 + 3} - 3x^2) \\) limiti hesablayın.",
  "answers": [
      { "answer": "-9", "type": "false" },
      { "answer": "6", "type": "true" },
      { "answer": "7", "type": "false" },
      { "answer": "1", "type": "false" },
      { "answer": "5", "type": "false" }
  ]
},
{
  "id": 246,
  "Question": "246. \\( \\lim_{x \\to \\infty} \\left( \\sqrt{x - 3} - \\sqrt{x + 2} \\right) \\) hesablayın.",
  "answers": [
      { "answer": "0", "type": "true" },
      { "answer": "2", "type": "false" },
      { "answer": "1", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "-5", "type": "false" }
  ]
},
{
  "id": 247,
  "Question": "247. \\( \\lim_{x \\to \\infty} \\frac{3^x + 2}{3^{x+1} - 1} \\) limiti hesablayın.",
  "answers": [
      { "answer": "\\( \\frac{1}{3} \\)", "type": "true" },
      { "answer": "3", "type": "false" },
      { "answer": "4", "type": "false" },
      { "answer": "5", "type": "false" },
      { "answer": "6", "type": "false" }
  ]
},
{
  "id": 248,
  "Question": "248. \\( \\int \\frac{dx}{x^2 + 16} \\) hesablayın.",
  "answers": [
      { "answer": "\\( \\frac{1}{4} arctg \\frac{x}{4} + C \\)", "type": "true" },
      { "answer": "\\( \\frac{1}{14} arctg \\frac{x}{4} + C \\)", "type": "false" },
      { "answer": "\\( \\frac{1}{2} arctg \\frac{x}{4} + C \\)", "type": "false" },
      { "answer": "\\( \\frac{1}{4} arctg \\frac{x}{2} + C \\)", "type": "false" },
      { "answer": "\\( \\frac{1}{4} arctg \\frac{x}{3} + C \\)", "type": "false" }
  ]
},
{
  "id": 249,
  "Question": "249. \\( \\int R(x, \\sqrt{ax^2 + bx + c}) dx \\), \\( a \\neq 0\\) inteqralının rasional funksiyaya gətirilməsi üçün Eylərin birinci əvəzetməsi hansıdır?",
  "answers": [
      { "answer": "\\( \\sqrt{ax^2 + bx + c} = \\pm x \\sqrt{a}+t, \\; a > 0 \\)", "type": "true" },
      { "answer": "\\( \\sqrt{ax^2 + bx + c} = t\\sqrt{x} + t \\)", "type": "false" },
      { "answer": "\\( \\sqrt{ax^2 + bx + c} = xt - 1 \\)", "type": "false" },
      { "answer": "\\( \\sqrt{ax^2 + bx + c} = c \\)", "type": "false" },
      { "answer": "\\( \\sqrt{ax^2 + bx + c} = bx \\)", "type": "false" }
  ]
},
{
  "id": 250,
  "Question": "250. Eylərin üçüncü əvəzetməsi hansıdır?",
  "answers": [
      { "answer": "\\( \\sqrt{ax^2 + bx + c} = xt\\pm \\sqrt{c}, c > 0 \\)", "type": "true" },
      { "answer": "\\( \\sqrt{ax^2 + bx + c} = x - x_1 \\)", "type": "false" },
      { "answer": "\\( \\sqrt{ax^2 + bx + c} = (x - x_1)a \\)", "type": "false" },
      { "answer": "\\( \\sqrt{ax^2 + bx + c} = (x - x_1)\\sqrt{b} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{ax^2 + bx + c} = (x - x_1) \\cdot x \\)", "type": "false" }
  ]
},
{
  "id": 251,
  "Question": "251. \\( \\int_{4}^{5} x\\sqrt{x^2 - 16} dx \\) hesablayın.",
  "answers": [
      { "answer": "9", "type": "true" },
      { "answer": "\\( x^2 - 3 + \\frac{2}{x + 1} \\)", "type": "false" },
      { "answer": "\\( x^2 - 2x + 3 - \\frac{3}{x + 1} \\)", "type": "false" },
      { "answer": "\\( 2x^2 + x - 1 + \\frac{3}{x + 1} \\)", "type": "false" },
      { "answer": "\\( x + 3 - \\frac{4}{x + 1} \\)", "type": "false" }
  ]
},
{
  "id": 252,
  "Question": "252. Aşağıdakı düsturlardan hansı səhvdir?",
  "answers": [
      { "answer": "\\( \\int a^x dx = a^x + C \\)", "type": "true" },
      { "answer": "\\( \\int x^\\alpha dx = \\frac{x^{\\alpha + 1}}{\\alpha + 1} + C, \\; \\alpha \\neq -1 \\)", "type": "false" },
      { "answer": "\\( \\int \\sin x dx = -\\cos x + C \\)", "type": "false" },
      { "answer": "\\( \\int \\frac{dx}{x} = \\ln |x| + C \\)", "type": "false" },
      { "answer": "\\( \\int \\frac{dx}{\\sin^2 x} = - ctg x + C \\)", "type": "false" }
  ]
},
{
  "id": 253,
  "Question": "253. \\( \\int \\sin 9x \\sin x dx \\) inteqralını hesablayın.",
  "answers": [
      { "answer": "\\( \\frac{1}{16} \\sin 8x - \\frac{1}{20} \\sin 10x + C \\)", "type": "true" },
      { "answer": "\\( \\frac{1}{8} \\sin 8x + \\frac{1}{10} \\sin 10 + C \\)", "type": "false" },
      { "answer": "\\( \\frac{1}{16} \\sin 8 + C \\)", "type": "false" },
      { "answer": "\\( \\frac{1}{20} \\sin 10x + C \\)", "type": "false" },
      { "answer": "\\( \\frac{1}{4} \\sin 7x - \\frac{1}{6} \\sin 11x + C \\)", "type": "false" }
  ]
},
{
  "id": 254,
  "Question": "254. \\( \\int \\left( \\sqrt{x} + \\sqrt[3]{x} \\right) dx \\) inteqralını hesablayın.",
  "answers": [
      { "answer": "\\( x(\\frac{2}{3} \\sqrt{x} + \\frac{3}{4} \\sqrt[3]{x}) + C \\)", "type": "true" },
      { "answer": "\\( \\frac{2}{3} \\sqrt{x + \\frac{3}{4}} \\sqrt[3]{x^4} + C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{x} + \\frac{1}{3} \\sqrt[3]{x} + C \\)", "type": "false" },
      { "answer": "\\( \\frac{1}{3} x^2 \\sqrt{x} + \\frac{1}{4} \\sqrt[3]{x^5} + C \\)", "type": "false" },
      { "answer": "\\( \\frac{1}{2} \\sqrt{x} + \\frac{1}{3} \\sqrt[3]{x^2} + C \\)", "type": "false" }
  ]
},
{
  "id": 255,
  "Question": "255. \\( \\int e^{-3x} dx \\) inteqralını hesablayın.",
  "answers": [
      { "answer": "\\( -\\frac{1}{3} e^{-3x} + C \\)", "type": "true" },
      { "answer": "\\( 3 e^{3x} + C \\)", "type": "false" },
      { "answer": "\\( -3 e^{-3x} + C \\)", "type": "false" },
      { "answer": "\\( e^{-3x} + C \\)", "type": "false" },
      { "answer": "\\( xe^{-3x} + C \\)", "type": "false" }
  ]
},
{
  "id": 256,
  "Question": "256. \\( \\int \\frac{dx}{e^{2x} - 1} \\) inteqralını hesablayın.",
  "answers": [
      { "answer": "\\( -0.5 e^{1-2x} + C \\)", "type": "true" },
      { "answer": "\\( xe^{2x-1} + C \\)", "type": "false" },
      { "answer": "\\( 2e^{1-2x} + C \\)", "type": "false" },
      { "answer": "\\( xe^{2x} + C \\)", "type": "false" },
      { "answer": "\\( (1-2x)e^{1-2x} + C \\)", "type": "false" }
  ]
},
{
  "id": 257,
  "Question": "257. inteqralı hesablayın.",
  "answers": [
      { "answer": "\\( \\frac{1}{2} e^{2x+1} + C \\)", "type": "true" },
      { "answer": "\\( 3 e^{3x} + C \\)", "type": "false" },
      { "answer": "\\( -3 e^{-3x} + C \\)", "type": "false" },
      { "answer": "\\( e^{-3x} + C \\)", "type": "false" },
      { "answer": "\\( xe^{-3x} + C \\)", "type": "false" }
  ]
},
{
  "id": 258,
  "Question": "258. \\( \\int_{1}^{4} \\sqrt{x} dx \\) inteqralını hesablayın.",
  "answers": [
      { "answer": "\\( \\frac{14}{3} \\)", "type": "true" },
      { "answer": "\\( \\frac{7}{3} \\)", "type": "false" },
      { "answer": "\\( \\frac{7}{2} \\)", "type": "false" },
      { "answer": "5", "type": "false" },
      { "answer": "4", "type": "false" }
  ]
},
{
  "id": 259,
  "Question": "259. \\( \\int_{1}^{\\infty} \\frac{dx}{(x + 1)^4} \\) inteqralını hesablayın.",
  "answers": [
      { "answer": "\\( \\frac{1}{24} \\)", "type": "true" },
      { "answer": "\\( \\frac{1}{4} \\)", "type": "false" },
      { "answer": "\\( 0 \\)", "type": "false" },
      { "answer": "Dağılır", "type": "false" },
      { "answer": "\\( \\frac{1}{12} \\)", "type": "false" }
  ]
},
{
  "id": 260,
  "Question": "260. \\( \\int_{1}^{2} \\frac{1}{x^2} e^{\\frac{1}{x}} dx \\) inteqralını hesablayın.",
  "answers": [
      { "answer": "\\( e - \\sqrt{e} \\)", "type": "true" },
      { "answer": "\\( 3e + 1 \\)", "type": "false" },
      { "answer": "\\( \\frac{1}{2} e \\)", "type": "false" },
      { "answer": "\\( \\frac{2e - 1}{\\sqrt{e}} \\)", "type": "false" },
      { "answer": "\\( 2e + \\sqrt{e} \\)", "type": "false" }
  ]
},
{
  "id": 261,
  "Question": "261. \\( \\int_{0}^{1} \\frac{e^x}{1 + e^{2x}} dx \\) inteqralını hesablayın.",
  "answers": [
      { "answer": "\\( arctge - \\frac{\\pi}{4} \\)", "type": "true" },
      { "answer": "\\( \\pi - arctge \\)", "type": "false" },
      { "answer": "\\( \\pi \\cdot arctge \\)", "type": "false" },
      { "answer": "\\( \\frac{\\pi}{4} arctge \\left[ 0, \\frac{\\pi}{2} \\right] \\)", "type": "false" },
      { "answer": "\\( \\frac{\\pi}{2} + arctge \\)", "type": "false" }
  ]
},
{
  "id": 262,
  "Question": "262. \\( y = 0, y = 6x - x^2 \\) xətləri ilə əhatə olunan fiqurun sahəsini hesablayın.",
  "answers": [
      { "answer": "36", "type": "true" },
      { "answer": "7", "type": "false" },
      { "answer": "12", "type": "false" },
      { "answer": "22", "type": "false" },
      { "answer": "4", "type": "false" }
  ]
},
{
  "id": 263,
  "Question": "263. Müəyyən inteqralı hesablayın: \\( \\int_{-2}^{1} x^2 \\sqrt{1 - x^3} dx \\)",
  "answers": [
      { "answer": "6", "type": "true" },
      { "answer": "-4", "type": "false" },
      { "answer": "10", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "-2", "type": "false" }
  ]
},
{
  "id": 264,
  "Question": "264. inteqralı hesablayın : \\( \\int_{2}^{3} \\frac{dx}{x^2} \\)",
  "answers": [
      { "answer": "\\( \\frac{1}{6} \\)", "type": "true" },
      { "answer": "\\( \\frac{1}{3} \\)", "type": "false" },
      { "answer": "\\( \\frac{1}{2} \\)", "type": "false" },
      { "answer": "6", "type": "false" },
      { "answer": "2", "type": "false" }
  ]
},
{
  "id": 265,
  "Question": "265. Hesablayın \\( \\int_{0}^{3} e^{x/3} dx \\) ",
  "answers": [
      { "answer": "\\( 3(e - 1) \\)", "type": "true" },
      { "answer": "\\( e - 3 \\)", "type": "false" },
      { "answer": "\\( 2e + 3 \\)", "type": "false" },
      { "answer": "\\( 3e + 2 \\)", "type": "false" },
      { "answer": "\\( e^2 + 1 \\)", "type": "false" }
  ]
},
{
  "id": 266,
  "Question": "266. Müəyyən inteqralı hesablayın \\( \\int_{ln 3}^{ln 8} \\frac{e^x dx}{\\sqrt{{e^x} + 1}} \\).",
  "answers": [
      { "answer": "2", "type": "true" },
      { "answer": "3", "type": "false" },
      { "answer": "5", "type": "false" },
      { "answer": "8", "type": "false" },
      { "answer": "4", "type": "false" }
  ]
},
{
  "id": 267,
  "Question": "267. Nyuton-Leybnis düsturunu göstərin.",
  "answers": [
      { "answer": "\\( \\int_{a}^{b} f(x) dx = F(b) - F(a) \\)", "type": "true" },
      { "answer": "\\( \\ell = \\int_{a}^{b} \\sqrt{1 + f^{/2}(x)} dx \\)", "type": "false" },
      { "answer": "\\( S = \\int_{a}^{b} f(x) dx \\)", "type": "false" },
      { "answer": "\\( \\int_{a}^{b} f(x) dx = \\int_{\\alpha}^{\\beta} f[\\varphi (x)] \\varphi' (t) dt \\)", "type": "false" },
      { "answer": "\\( \\int f(x) dx = F(x) + c \\)", "type": "false" }
  ]
},
{
  "id": 268,
  "Question": "268. \\( f(x) \\) funksiyası \\( x \\geq a \\) olduqda kəsilməz olarsa, \\( a \\leq x < \\infty \\) aralığında \\( f(x) \\) funksiyasının inteqralı nə cür işarə olunur?",
  "answers": [
      { "answer": "\\( \\int_{a}^{\\infty} f(x) dx \\)", "type": "true" },
      { "answer": "\\( \\int_{-\\infty}^{a} f(x) dx \\)", "type": "false" },
      { "answer": "\\( \\int_{-\\infty}^{\\infty} f(x) dx \\)", "type": "false" },
      { "answer": "\\( \\int_{0}^{a} f(x) dx \\)", "type": "false" },
      { "answer": "\\( \\int_{a}^{0} f(x) dx \\)", "type": "false" }
  ]
},
{
  "id": 269,
  "Question": "269. \\( f(x) \\) funksiyasının \\( a \\leq x < \\infty \\) sonsuz inteqralı üzrə qeyri-məxsusi inteqral nəyə deyilir və necə işarə olunur?",
  "answers": [
      { "answer": "\\( \\lim_{b \\to \\infty} \\int_{a}^{b} f(x) dx = \\int_{a}^{\\infty} f(x) dx \\)", "type": "true" },
      { "answer": "\\( \\lim_{x \\to b} f(x) = f(b) \\)", "type": "false" },
      { "answer": "\\( \\lim_{x \\to a} f(x) = f(a) \\)", "type": "false" },
      { "answer": "\\( \\lim_{a \\to -\\infty} \\int_{a}^{b} f(x) dx = \\int_{-\\infty}^{b} f(x) dx \\)", "type": "false" },
      { "answer": "\\( \\lim_{a \\to \\infty} \\int_{a}^{b} f(x) dx = \\int_{\\infty}^{b} f(x) dx \\)", "type": "false" }
  ]
},    
{
  "id": 270,
  "Question": "270. \\( \\int_{0}^{\\infty} e^{-x} dx \\) qeyri-məxsusi inteqralını hesablayın.",
  "answers": [
      { "answer": "1", "type": "true" },
      { "answer": "-1", "type": "false" },
      { "answer": "-2", "type": "false" },
      { "answer": "0", "type": "false" },
      { "answer": "3", "type": "false" }
  ]
},
{
  "id": 271,
  "Question": "271. \\( \\int_{a}^{\\infty} f(x) dx \\) inteqralı nə zaman yığılan adlanır?",
  "answers": [
      { "answer": "\\( \\lim_{b \\to \\infty} \\int_{a}^{b} f(x) dx \\) sonlu olduqda,", "type": "true" },
      { "answer": "\\( \\lim_{b \\to \\infty} \\int_{a}^{b} f(x) dx \\) sonlu olmadıqda,", "type": "false" },
      { "answer": "\\( f(x) \\) - kəsilən funksiya olduqda,", "type": "false" },
      { "answer": "\\( f(x) \\) - məhdud funksiya olduqda,", "type": "false" },
      { "answer": "\\( f(x) \\) - qeyri-məhdud funksiya olduqda,", "type": "false" }
  ]
},
{
  "id": 272,
  "Question": "272. \\( \\int_{1}^{\\infty} \\frac{dx}{x} \\) inteqralı yığılandırmı?",
  "answers": [
      { "answer": "Dağılır", "type": "true" },
      { "answer": "Yığılır", "type": "false" },
      { "answer": "\\( \\int_{1}^{\\infty} \\frac{dx}{x} \\) sonlu ədəddir,", "type": "false" },
      { "answer": "\\( \\frac{1}{x} \\) məhdud funksiyadır,", "type": "false" },
      { "answer": "\\( \\frac{1}{x} \\) - in ibtidai funksiyası yoxdur.", "type": "false" }
  ]
},
{
  "id": 273,
  "Question": "273. \\( \\int_{1}^{2} \\frac{dx}{x^2} \\) hesablayın.",
  "answers": [
      { "answer": "\\( \\frac{1}{2} \\)", "type": "true" },
      { "answer": "\\( \\frac{1}{3} \\)", "type": "false" },
      { "answer": "\\( - \\frac{1}{3} \\)", "type": "false" },
      { "answer": "\\( - \\frac{1}{2} \\)", "type": "false" },
      { "answer": "3", "type": "false" }
  ]
},
{
  "id": 274,
  "Question": "274. \\( \\int_{0}^{1} \\frac{dx}{x + 1} \\) hesablayın.",
  "answers": [
      { "answer": "\\( \\ln 2 \\)", "type": "true" },
      { "answer": "\\( \\ln 3 \\)", "type": "false" },
      { "answer": "\\( \\ln 4 \\)", "type": "false" },
      { "answer": "\\( \\ln 5 \\)", "type": "false" },
      { "answer": "\\( \\ln 6 \\)", "type": "false" }
  ]
},
{
  "id": 275,
  "Question": "275. \\( \\int_{1}^{4} \\sqrt{x} dx \\) hesablayın.",
  "answers": [
      { "answer": "\\( 4 \\frac{2}{3} \\)", "type": "true" },
      { "answer": "\\( 4 \\frac{1}{2} \\)", "type": "false" },
      { "answer": "\\( 4 \\frac{2}{5} \\)", "type": "false" },
      { "answer": "\\( 4 \\frac{1}{3} \\)", "type": "false" },
      { "answer": "4", "type": "false" }
  ]
},    
{
  "id": 276,
  "Question": "276. \\( \\int_{0}^{1} (2x^2 - 4x + 3) dx \\) hesablayın.",
  "answers": [
      { "answer": "\\( 1\\frac{2}{3} \\)", "type": "true" },
      { "answer": "\\( 1\\frac{1}{3} \\)", "type": "false" },
      { "answer": "\\( 1\\frac{2}{4} \\)", "type": "false" },
      { "answer": "\\( 1\\frac{2}{5} \\)", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 277,
  "Question": "277. \\( \\int_{\\frac{\\pi}{4}}^{\\frac{\\pi}{2}} \\sin^2 x dx \\) hesablayın.",
  "answers": [
      { "answer": "\\( \\frac{\\pi + 2}{8} \\)", "type": "true" },
      { "answer": "\\( \\frac{\\pi - 2}{9} \\)", "type": "false" },
      { "answer": "\\( \\frac{\\pi + 2}{9} \\)", "type": "false" },
      { "answer": "\\( \\frac{\\pi - 2}{6} \\)", "type": "false" },
      { "answer": "0", "type": "false" }
  ]
},
{
  "id": 278,
  "Question": "278. \\( \\int_{0}^{1} (1 - e^x) dx \\) hesablayın.",
  "answers": [
      { "answer": "\\( 2 - e \\)", "type": "true" },
      { "answer": "\\( 2 + e \\)", "type": "false" },
      { "answer": "\\( 1 - e \\)", "type": "false" },
      { "answer": "\\( 1 + e \\)", "type": "false" },
      { "answer": "\\( e^3 \\)", "type": "false" }
  ]
},
{
  "id": 279,
  "Question": "279. \\( \\int_{0}^{\\frac{\\pi}{3}} 3 \\sin 3x dx \\) hesablayın.",
  "answers": [
      { "answer": "2", "type": "true" },
      { "answer": "4", "type": "false" },
      { "answer": "1", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "0", "type": "false" }
  ]
},
{
  "id": 280,
  "Question": "280. \\( \\int_{1}^{8} \\frac{dx}{\\sqrt[3]{x^2}} \\) hesablayın.",
  "answers": [
      { "answer": "3", "type": "true" },
      { "answer": "1", "type": "false" },
      { "answer": "5", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "-3", "type": "false" }
  ]
},
{
  "id": 281,
  "Question": "281. \\( c \\)-ni tapın: \\( \\int_{0}^{1} (3x^2 + 4x + c) dx = 10 \\).",
  "answers": [
      { "answer": "7", "type": "true" },
      { "answer": "5", "type": "false" },
      { "answer": "4", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "2", "type": "false" }
  ]
},
{
  "id": 282,
  "Question": "282. hesablayın : \\( \\int_{1}^{2} \\left( x^2 + \\frac{1}{x^4} \\right) dx \\)",
  "answers": [
      { "answer": "\\( 2 \\frac{5}{8} \\)", "type": "true" },
      { "answer": "\\( 2 \\frac{1}{8} \\)", "type": "false" },
      { "answer": "\\( 2 \\frac{2}{7} \\)", "type": "false" },
      { "answer": "\\( 2 \\frac{3}{8} \\)", "type": "false" },
      { "answer": "2", "type": "false" }
  ]
}, 
{
  "id": 283,
  "Question": "283. L- əyrisi \\(x=x(t), y=y(t), z=z(t)\\) \\((\\alpha \\leq t \\leq \\beta)\\) parametrik şəkildə verilərsə, onda L- əyrisi üzrə birinci növ əyri xətti inteqral necə hesablanar?",
  "answers": [
      { "answer": "\\( \\int_{L} f(x,y,z) dl = \\int_{\\alpha}^{\\beta} f(x(t), y(t), z(t)) \\sqrt{x'^{2} + y'^{2} + z'^{2}} dt \\)", "type": "true" },
      { "answer": "\\( \\int_{L} f(x,y,z) dl = \\int_{\\alpha}^{\\beta} f(x(t), y(t), z(t)) dt \\)", "type": "false" },
      { "answer": "\\( \\int_{L} f(x,y,z) dl = \\int_{\\alpha}^{\\beta} f(x(t), y(t)) dt \\)", "type": "false" },
      { "answer": "\\( \\int_{L} f(x,y,z) dl = \\int_{\\alpha}^{\\beta} f(x(t), z(t)) dt \\)", "type": "false" },
      { "answer": "\\( \\int_{L} f(x,y,z) dl = \\int_{\\alpha}^{\\beta} f(y(t), z(t)) dt \\)", "type": "false" }
  ]
},
{
  "id": 284,
  "Question": "284. İkinci növ əyri xətti inteqralı hesablayın: \\( \\int_{L} (x^2 + y) dx + (x + y^2) dy \\), burada L- əyrisi \\( A(-1,1)\\)-dən \\(B(0,2)\\)-yə qədər olan düz xət parçasıdır.",
  "answers": [
      { "answer": "\\( \\frac{11}{3} \\)", "type": "true" },
      { "answer": "\\( \\frac{7}{3} \\)", "type": "false" },
      { "answer": "\\( \\frac{5}{7} \\)", "type": "false" },
      { "answer": "5", "type": "false" },
      { "answer": "2", "type": "false" }
  ]
},
{
  "id": 285,
  "Question": "285. Əgər müstəvi əyrisi \\( y=y(x) \\) \\((a \\leq x \\leq b)\\) tənliyi ilə verilərsə, onda birinci növ əyri xətti inteqral necə hesablanar?",
  "answers": [
      { "answer": "\\( \\int_{L} f(x,y) dl = \\int_{a}^{b} f(x,y(x)) \\sqrt{1 + y'^{2}} dx \\)", "type": "true" },
      { "answer": "\\( \\int_{L} f(x,y) dl = \\int_{a}^{b} f(x,y(x)) dy \\)", "type": "false" },
      { "answer": "\\( \\int_{L} f(x,y) dl = \\int_{a}^{b} f(x,y(x)) \\sqrt{1 + y'} dx \\)", "type": "false" },
      { "answer": "\\( \\int_{L} f(x,y) dl = \\int_{a}^{b} f(x,y(x)) \\sqrt{1 + x'} dy \\)", "type": "false" },
      { "answer": "\\( \\int_{L} f(x,y) dl = \\int_{a}^{b} f(x,y(x)) dx dy \\)", "type": "false" }
  ]
},
{
  "id": 286,
  "Question": "286. \\( \\int_{L} P(x,y)dx + Q(x,y)dy \\) inteqralı nə zaman inteqrallama yolundan asılı deyildir?",
  "answers": [
      { "answer": "\\( \\frac{\\partial P}{dy} = \\frac{\\partial Q}{dx} \\) olduqda", "type": "true" },
      { "answer": "\\( \\frac{\\partial P}{dx} = \\frac{\\partial Q}{dy} \\)", "type": "false" },
      { "answer": "\\( \\frac{\\partial P}{dx} = -\\frac{\\partial Q}{dy} \\)", "type": "false" },
      { "answer": "\\( \\frac{\\partial P}{dx} = \\frac{\\partial Q}{dx} \\)", "type": "false" },
      { "answer": "\\( \\frac{\\partial P}{dy} = -\\frac{\\partial Q}{dx} \\)", "type": "false" }
  ]
},
{
  "id": 287,
  "Question": "287. \\( \\int_{L} P(x,y)dx + Q(x,y)dy \\) əyri xətti inteqralında \\( \\frac{\\partial P}{dy} = \\frac{\\partial Q}{dx} \\) şərti ödənilirsə, inteqralaltı ifadə nəyə bərabər olar?",
  "answers": [
      { "answer": "\\( P(x,y)dx + Q(x,y)dy = dU(x,y) \\)", "type": "true" },
      { "answer": "\\( Pdx + Qdy = U(x,y) \\)", "type": "false" },
      { "answer": "\\( Pdx + Qdy = \\frac{\\partial U(x,y)}{\\partial x} \\)", "type": "false" },
      { "answer": "\\( Pdx + Qdy = \\frac{\\partial U}{\\partial y} \\)", "type": "false" },
      { "answer": "\\( Pdx + Qdy = \\frac{\\partial^2 U}{\\partial x \\partial y} \\)", "type": "false" }
  ]
},
{
  "id": 288,
  "Question": "288. Əgər \\( (S) \\) oblastı \\( a \\leq x \\leq b, c \\leq y \\leq d \\) şəklində olarsa, \\( f(x,y) \\) funksiyasının ikiqat inteqralı hansı düsturla hesablanır?",
  "answers": [
      { "answer": "\\( \\int \\int_{(S)} f(x,y) ds = \\int_{a}^{b} dx \\int_{c}^{d} f(x,y) dy \\)", "type": "true" },
      { "answer": "\\( \\int \\int_{(S)} f(x,y) ds = \\int_{a}^{b} f(x,y) dy \\)", "type": "false" },
      { "answer": "\\( \\int \\int_{(S)} f(x,y) ds = \\int_{a}^{b} dy \\int_{c}^{d} f(x,y) dx \\)", "type": "false" },
      { "answer": "\\( \\int \\int_{(S)} f(x,y) ds = \\int_{a}^{b} f(x,y) dy \\int_{c}^{d} dx \\)", "type": "false" },
      { "answer": "\\( \\int \\int_{(S)} f(x,y) ds = \\int_{a}^{b} dy \\int_{c}^{d} dx \\)", "type": "false" }
  ]
},
{
  "id": 289,
  "Question": "289. Təkrar inteqralı hesablayın: \\( \\int_{1}^{3} dx \\int_{2}^{x^2+5} \\frac{1}{x^2} dy \\)",
  "answers": [
      { "answer": "4", "type": "true" },
      { "answer": "-3", "type": "false" },
      { "answer": "-2", "type": "false" },
      { "answer": "6", "type": "false" },
      { "answer": "8", "type": "false" }
  ]
},
{
  "id": 290,
  "Question": "290. İkiqat inteqralı hesablayın: \\( \\int \\int_{D} (1 + x + y) dx dy \\), burada \\( D \\) oblastı \\( x=0, y=0, x+y=1 \\) xətləri ilə əhatə olunub.",
  "answers": [
      { "answer": "2", "type": "true" },
      { "answer": "3", "type": "false" },
      { "answer": "\\( \\frac{1}{2} \\)", "type": "false" },
      { "answer": "\\( \\frac{1}{6} \\)", "type": "false" },
      { "answer": "5", "type": "false" }
  ]
},
{
  "id": 291,
  "Question": "291. İkiqat inteqralı hesablayın: \\( \\int \\int_{(S)} \\frac{x}{y^2} dx dy \\), harada ki, \\( (S) \\) oblastı \\( [1,2;4,6] \\) düzbucaqlıdır.",
  "answers": [
      { "answer": "0.125", "type": "true" },
      { "answer": "2", "type": "false" },
      { "answer": "4", "type": "false" },
      { "answer": "0.3", "type": "false" },
      { "answer": "0.8", "type": "false" }
  ]
},
{
  "id": 292,
  "Question": "292. İkiqat inteqralı hesablayın: \\( \\int \\int_{D} xdxdy \\) burada \\( 0 \\leq x \\leq 2, 1 \\leq y \\leq 2 \\)",
  "answers": [
      { "answer": "2", "type": "true" },
      { "answer": "\\( \\frac{5}{4} \\)", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "\\( \\frac{1}{3} \\)", "type": "false" },
      { "answer": "\\( \\frac{7}{12} \\)", "type": "false" }
  ]
},
{
  "id": 293,
  "Question": "293. İkiqat inteqralını hesablayın: \\( \\int_{2}^{3} x \\int_{2}^{4} (y+x)dxdy \\)",
  "answers": [
      { "answer": "\\( \\frac{83}{3} \\)", "type": "true" },
      { "answer": "\\( -\\frac{6}{17} \\)", "type": "false" },
      { "answer": "\\( \\frac{5}{3} \\)", "type": "false" },
      { "answer": "\\( \\frac{4}{7} \\)", "type": "false" },
      { "answer": "2", "type": "false" }
  ]
},
{
  "id": 294,
  "Question": "294. \\((S)\\)-müstəvi oblastının \\( S \\)-sahəsi ikiqat inteqralla hansı düsturla hesablanır?",
  "answers": [
      { "answer": "\\( S = \\int \\int_{(S)} ds \\)", "type": "true" },
      { "answer": "\\( S = \\int \\int_{(S)} dxds \\)", "type": "false" },
      { "answer": "\\( S = \\int \\int_{(S)} dyds \\)", "type": "false" },
      { "answer": "\\( S = \\int \\int_{(S)} dzds \\)", "type": "false" },
      { "answer": "\\( S = \\int \\int_{(S)} dx \\)", "type": "false" }
  ]
},    
{
  "id": 295,
  "Question": "295. Tənliyi həll edin: \\( y'' + 8y' + 16y = 0 \\)",
  "answers": [
      { "answer": "\\( (C_1 + xC_2) e^{-4x} \\)", "type": "true" },
      { "answer": "\\( y = (C_1 + C_2 x) e^{4x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^{-4x} + C_2 e^{4x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^{2x} + C_2 e^{3x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 \\sin 4x + C_2 \\cos 4x \\)", "type": "false" }
  ]
},
{
  "id": 296,
  "Question": "296. Tənliyi həll edin: \\( y'' - 2y' + y = 0 \\)",
  "answers": [
      { "answer": "\\( y = e^x (C_1 + C_2 x) \\)", "type": "true" },
      { "answer": "\\( y = e^x (C_1 + C_2 x) - 2e^{2x} \\)", "type": "false" },
      { "answer": "\\( y = e^x (C_1 + C_2 x) - 3e^{2x} \\)", "type": "false" },
      { "answer": "\\( y = e^{2x} (C_1 + C_2 x) - e^x \\)", "type": "false" },
      { "answer": "\\( y = e^{-x} (C_1 + C_2) + e^{2x} \\)", "type": "false" }
  ]
},
{
  "id": 297,
  "Question": "297. Tənliyin ümumi həllini tapın: \\( y'' - 4y' + 13y = 0 \\)",
  "answers": [
      { "answer": "\\( y = e^{2x} (C_1 \\cos 3x + C_2 \\sin 3x) \\)", "type": "true" },
      { "answer": "\\( y = C_1 \\cos 3x + C_2 \\sin 3x \\)", "type": "false" },
      { "answer": "\\( y = e^{3x} (C_1 \\cos 2x + C_2 \\sin 2x) \\)", "type": "false" },
      { "answer": "\\( y = e^{-3x} (C_1 \\cos 2x + C_2 \\sin 2x) \\)", "type": "false" },
      { "answer": "\\( y = e^{3x} (C_1 \\cos 3x - C_2 \\sin 3x) \\)", "type": "false" }
 ]
},
{
  "id": 298,
  "Question": "298. Birinci tərtib xətti diferensial tənliyi göstərin",
  "answers": [
      { "answer": "\\( y' + p(x)y = Q(x) \\)", "type": "true" },
      { "answer": "\\( y'' + p y' + qy = 0 \\)", "type": "false" },
      { "answer": "\\( F(x,y,y'') = 0 \\)", "type": "false" },
      { "answer": "\\( y' + p(x)y = y^3 e^x \\)", "type": "false" },
      { "answer": "\\( y' + p(x)y = y^3 \\)", "type": "false" }
  ]
},
{
  "id": 299,
  "Question": "299. \\( \\lim_{x \\to \\infty} \\frac{7x^4 + 2x^3 - 1}{3x^2 - 2x^4 + x} \\) limitini hesablayın",
  "answers": [
      { "answer": "\\(- \\frac{7}{2} \\)", "type": "true" },
      { "answer": "8", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "6", "type": "false" }
  ]
},
{
  "id": 300,
  "Question": "300. İkinci tərtib sabit əmsallı xətti qeyri-birinc dərəcəli diferensial tənliyi göstərin",
  "answers": [
      { "answer": "\\( y'' + 6y' + 9y = e^x \\)", "type": "true" },
      { "answer": "\\( y'' - 2y' + 3y = xy \\)", "type": "false" },
      { "answer": "\\( y'' - xy' + y = \\sin x \\)", "type": "false" },
      { "answer": "\\( y''' + y'' + 3y = 0 \\)", "type": "false" },
      { "answer": "\\( y'' + x \\sqrt{y} = 0 \\)", "type": "false" }
  ]
},
{
  "id": 301,
  "Question": "301. Tənliyi həll edin: \\(4y'' - y = 0\\)",
  "answers": [
      { "answer": "\\( C_1 e^{-0.5x} + C_2 e^{0.5x} \\)", "type": "true" },
      { "answer": "\\( C_1 e^{0.5x} + C_2 e^x \\)", "type": "false" },
      { "answer": "\\( C_1 e^{2x} + C_2 e^{-x} \\)", "type": "false" },
      { "answer": "\\( (C_1 + C_2 x) e^{0.5x} \\)", "type": "false" },
      { "answer": "\\( (C_1 + C_2x) e^{-0.5x} \\)", "type": "false" }
  ]
},
{
  "id": 302,
  "Question": "302. Tənliyi həll edin: \\( y'' + y' - 6y = 0 \\)",
  "answers": [
      { "answer": "\\( y = C_1 e^{2x} + C_2 e^{-3x} \\)", "type": "true" },
      { "answer": "\\( y = e^{2x} (C_1 x + C_2) \\)", "type": "false" },
      { "answer": "\\( y = e^{-3x} (C_1 x + C_2) \\)", "type": "false" },
      { "answer": "\\( y = C_1 \\sin 2x + C_2 \\cos 3x \\)", "type": "false" },
      { "answer": "\\( y = e^{3x} (C_1 \\cos 3x + C_2 \\sin 2x) \\)", "type": "false" }
  ]
},
{
  "id": 303,
  "Question": "303. Tənliyi həll edin: \\( y'' + 6y' + 25y = 0 \\)",
  "answers": [
      { "answer": "\\( e^{-3x} (C_1 \\cos 4x + C_2 \\sin 4x) \\)", "type": "true" },
      { "answer": "\\( C_1 e^{3x} + C_2 e^{4x} \\)", "type": "false" },
      { "answer": "\\( C_1 e^{-3} + C_2 e^{-4x} \\)", "type": "false" },
      { "answer": "\\( e^{4x} (C_1 \\cos 3x + C_2 \\sin 3x) \\)", "type": "false" },
      { "answer": "\\( e^{-4x} (C_1 \\cos 3x + C_2 \\sin 3x) \\)", "type": "false" }
  ]
},
{
  "id": 304,
  "Question": "304. Birtərtibli diferensial tənlik ümumi şəkildə necə ifadə olunur?",
  "answers": [
      { "answer": "\\( F(x, y, y') = 0 \\)", "type": "true" },
      { "answer": "\\( F(x, y) = 0 \\)", "type": "false" },
      { "answer": "\\( F(y, y') = 0 \\)", "type": "false" },
      { "answer": "\\( F(xy, y') = 0 \\)", "type": "false" },
      { "answer": "\\( F(x, yy') = 0 \\)", "type": "false" }
  ]
},
{
  "id": 305,
  "Question": "305. Tənliyi həll edin \\( y'' - 6y' + 9y = 0 \\)",
  "answers": [
      { "answer": "\\( (C_1 + C_2 x)e^{3x} \\)", "type": "true" },
      { "answer": "\\( C_1 e^{2x} + C_2 e^{3x} \\)", "type": "false" },
      { "answer": "\\( C_1 e^{3x} + C_2 e^{-3x} \\)", "type": "false" },
      { "answer": "\\( e^{3x}(C_1 \\cos 3x + C_2 \\sin 3x) \\)", "type": "false" },
      { "answer": "\\( C_1 e^{4x} + C_2 e^{3x} \\)", "type": "false" }
  ]
},
{
  "id": 306,
  "Question": "306. Tənliyi həll edin: \\( y'' - 4y' + 4y = 0 \\)",
  "answers": [
      { "answer": "\\( y = (C_1 + C_2 x)e^{2x} \\)", "type": "true" },
      { "answer": "\\( y = e^{-3x}(C_1 x + C_2) \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^{-2x} + C_2 e^{-3x} \\)", "type": "false" },
      { "answer": "\\( y = (C_1 + C_2 x)e^x \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^{3x} + C_2 e^{2x} \\)", "type": "false" }
  ]
},
{
  "id": 307,
  "Question": "307. Tənliyi həll edin \\( y'' - 3y' + 2y = 0 \\)",
  "answers": [
      { "answer": "\\( y = C_1 e^x + C_2 e^{2x} \\)", "type": "false" },
      { "answer": "\\( y = e^{2x}(C_1 x + C_2) \\)", "type": "false" },
      { "answer": "\\( y = e^{-3x}(C_1 x + C_2) \\)", "type": "false" },
      { "answer": "\\( y = C_1 \\sin 2x + C_2 \\cos 3x \\)", "type": "false" },
      { "answer": "\\( y = e^{3x}(C_1 \\cos 3x + C_2 \\sin 2x) \\)", "type": "true" }
  ]
},
{
  "id": 308,
  "Question": "308. Tənliyi həll edin \\( y'' - 14y' + 49y = 0 \\)",
  "answers": [
      { "answer": "\\( y = (C_1 + C_2 x)e^{7x} \\)", "type": "true" },
      { "answer": "\\( y = C_1 e^{7x} + C_2 e^{-7x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^{3x} + C_2 e^{4x} \\)", "type": "false" },
      { "answer": "\\( y = C e^{7x} \\cos x \\)", "type": "false" },
      { "answer": "\\( y = C e^{7x} \\sin x \\)", "type": "false" }
  ]
},
{
  "id": 309,
  "Question": "309. \\( y'' - 2y' + 2y = 0 \\) diferensial tənliyinin ümumi həllini yazın:",
  "answers": [
      { "answer": "\\( y = e^x (C_1 \\cos x + C_2 \\sin x) \\)", "type": "true" },
      { "answer": "\\( y = e^{2x} \\cos x \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^x \\sin x \\)", "type": "false" },
      { "answer": "\\( y = C_2 e^x \\cos x - \\sin x \\)", "type": "false" },
      { "answer": "\\( y = \\cos x - \\sin x \\)", "type": "false" }
  ]
},
{
  "id": 310,
  "Question": "310. Sabit əmsallı birincı diferensial tənliyin ümumi həllini tapın: \\( y'' - 4y' + 3y = 0 \\)",
  "answers": [
      { "answer": "\\( y = C_1 e^x + C_2 e^{3x} \\)", "type": "false" },
      { "answer": "\\( y = e^x + C_2 e^{2x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^x - e^{3x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^{2x} - C_2 e^{3x} \\)", "type": "true" },
      { "answer": "\\( y = C_1 e^x - C_2 e^{2x} \\)", "type": "false" }
  ]
},
{
  "id": 311,
  "Question": "311. \\( u = e^{x^2 + y^2 + z^2} \\) funksiyasının \\( \\frac{\\partial u}{\\partial z} \\) xüsusi törəməsini hesablayın",
  "answers": [
      { "answer": "\\( 2z e^{x^2 + y^2 + z^2} \\)", "type": "true" },
      { "answer": "\\( 2x e^{x^2 + y^2 + z^2} \\)", "type": "false" },
      { "answer": "\\( 2y e^{x^2 + y^2 + z^2} \\)", "type": "false" },
      { "answer": "\\( x^2 \\sin 2y \\)", "type": "false" },
      { "answer": "\\( 2x \\sin^2 y \\)", "type": "false" }
  ]
},
{
  "id": 312,
  "Question": "312. Tənliyin ümumi həllini tapın: \\( y'' - 4y' + 13y = 0 \\)",
  "answers": [
      { "answer": "\\( y = e^{2x} (C_1 \\cos 3x + C_2 \\sin 3x) \\)", "type": "true" },
      { "answer": "\\( y = C_1 \\cos 3x + C_2 \\sin 3x \\)", "type": "false" },
      { "answer": "\\( y = e^{3x} (C_1 \\cos 2x + C_2 \\sin 2x) \\)", "type": "false" },
      { "answer": "\\( y = e^{-3x} (C_1 \\cos 2x + C_2 \\sin 2x) \\)", "type": "false" },
      { "answer": "\\( y = e^{2x} (C_1 \\cos 3x - C_2 \\sin 3x) \\)", "type": "false" }
  ]
},
{
  "id": 313,
  "Question": "313. Tənliyin ümumi həllini tapın \\( y'' - y' - 20y = 0 \\)",
  "answers": [
      { "answer": "\\( y = C_1 e^{-4x} + C_2 e^{5x} \\)", "type": "true" },
      { "answer": "\\( y = C_1 e^{-3x} + C_2 e^{2x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^{2x} + C_2 e^{3x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^{5x} + C_2 e^{4x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^{4x} + C_2 e^{3x} \\)", "type": "false" }
  ]
},
{
  "id": 314,
  "Question": "314. \\( u = \\sqrt{x^2 + y^2 + z^2} \\) funksiyasının \\( \\frac{\\partial u}{\\partial x} \\) xüsusi törəməsini hesablayın",
  "answers": [
      { "answer": "\\( \\frac{x}{\\sqrt{x^2 + y^2 + z^2}} \\)", "type": "true" },
      { "answer": "\\( 2x e^{x^2 + y^2 + z^2} \\)", "type": "false" },
      { "answer": "\\( 2y e^{x^2 + y^2 + z^2} \\)", "type": "false" },
      { "answer": "\\( 2z e^{x^2 + y^2 + z^2} \\)", "type": "false" },
      { "answer": "\\( x^2 \\sin 2y \\)", "type": "false" }
  ]
},
{
  "id": 315,
  "Question": "315. \\( u = \\sqrt{x^2 + y^2 + z^2} \\) funksiyasının \\( \\frac{\\partial u}{\\partial y} \\) xüsusi törəməsini hesablayın",
  "answers": [
      { "answer": "\\( \\frac{y}{\\sqrt{x^2 + y^2 + z^2}} \\)", "type": "true" },
      { "answer": "\\( 2x e^{x^2 + y^2 + z^2} \\)", "type": "false" },
      { "answer": "\\( 2y e^{x^2 + y^2 + z^2} \\)", "type": "false" },
      { "answer": "\\( 2z e^{x^2 + y^2 + z^2} \\)", "type": "false" },
      { "answer": "\\( \\frac{x}{\\sqrt{x^2 + y^2 + z^2}} \\)", "type": "false" }
  ]
},
{
  "id": 316,
  "Question": "316. \\( u = \\sqrt{x^2 + y^2 + z^2} \\) funksiyasının \\( \\frac{\\partial u}{\\partial z} \\) xüsusi törəməsini hesablayın",
  "answers": [
      { "answer": "\\( \\frac{z}{\\sqrt{x^2 + y^2 + z^2}} \\)", "type": "true" },
      { "answer": "\\( \\frac{y}{\\sqrt{x^2 + y^2 + z^2}} \\)", "type": "false" },
      { "answer": "\\( 2y e^{x^2 + y^2 + z^2} \\)", "type": "false" },
      { "answer": "\\( 2z e^{x^2 + y^2 + z^2} \\)", "type": "false" },
      { "answer": "\\( \\frac{x}{\\sqrt{x^2 + y^2 + z^2}} \\)", "type": "false" }
  ]
},
{
  "id": 317,
  "Question": "317. \\( z = \\operatorname{arctg} \\frac{y}{x} \\) funksiyasının \\( \\frac{\\partial u}{\\partial x} \\) xüsusi törəməsini hesablayın",
  "answers": [
      { "answer": "\\( \\frac{-y}{x^2 + y^2} \\)", "type": "true" },
      { "answer": "\\( \\frac{z}{\\sqrt{x^2 + y^2 + z^2}} \\)", "type": "false" },
      { "answer": "\\( \\frac{y}{\\sqrt{x^2 + y^2 + z^2}} \\)", "type": "false" },
      { "answer": "\\( 2z e^{x^2 + y^2 + z^2} \\)", "type": "false" },
      { "answer": "\\( \\frac{x}{\\sqrt{x^2 + y^2 + z^2}} \\)", "type": "false" }
  ]
},
{
  "id": 318,
  "Question": "318. \\( \\lim_{{x \\to \\infty}} \\frac{3n + 1}{\\sqrt{3n^2 + 1}} \\) hesablayın",
  "answers": [
      { "answer": "\\( \\sqrt{3} \\)", "type": "true" },
      { "answer": "\\( 1 \\)", "type": "false" },
      { "answer": "\\( 2 \\)", "type": "false" },
      { "answer": "\\( \\sqrt{2} \\)", "type": "false" },
      { "answer": "\\( 0 \\)", "type": "false" }
  ]
},
{
  "id": 319,
  "Question": "319. \\( z = \\operatorname{arctg} \\frac{y}{x} \\) funksiyasının \\( \\frac{\\partial u}{\\partial y} \\) xüsusi törəməsini hesablayın",
  "answers": [
      { "answer": "\\( \\frac{x}{x^2 + y^2} \\)", "type": "true" },
      { "answer": "\\( \\frac{z}{\\sqrt{x^2 + y^2 + z^2}} \\)", "type": "false" },
      { "answer": "\\( \\frac{-y}{x^2 + y^2} \\)", "type": "false" },
      { "answer": "\\( \\frac{y}{\\sqrt{x^2 + y^2 + z^2}} \\)", "type": "false" },
      { "answer": "\\( \\frac{x}{\\sqrt{x^2 + y^2 + z^2}} \\)", "type": "false" }
  ]
},
{
  "id": 320,
  "Question": "320. \\( z = \\ln \\frac{\\sqrt{x^2 + y^2} - x}{\\sqrt{x^2 + y^2} + x} \\) funksiyasının \\( \\frac{\\partial z}{\\partial x} \\) xüsusi törəməsini hesablayın",
  "answers": [
      { "answer": "\\( - \\frac{2}{\\sqrt{x^2 + y^2}} \\)", "type": "true" },
      { "answer": "\\( \\frac{z}{\\sqrt{x^2 + y^2 + z^2}} \\)", "type": "false" },
      { "answer": "\\( \\frac{-y}{x^2 + y^2} \\)", "type": "false" },
      { "answer": "\\( \\frac{x}{x^2 + y^2} \\)", "type": "false" },
      { "answer": "\\( \\frac{y}{\\sqrt{x^2 + y^2 + z^2}} \\)", "type": "false" }
  ]
},
{
  "id": 321,
  "Question": "321. Lopitaldan istifadə edərək \\( \\lim_{{x \\to 2}} \\frac{x^4 + x^2 - 3x - 6}{x - 2} \\) limitini hesablayın",
  "answers": [
      { "answer": "33", "type": "true" },
      { "answer": "2", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "4", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 322,
  "Question": "322. \\( \\int \\frac{x dx}{1 + x^4} \\) hesablayın",
  "answers": [
      { "answer": "\\( \\frac{1}{2} \\operatorname{arctg} x^2 + C \\)", "type": "true" },
      { "answer": "\\( \\frac{1}{2} \\operatorname{arctg} x + C \\)", "type": "false" },
      { "answer": "\\( \\operatorname{arctg} x^2 + C \\)", "type": "false" },
      { "answer": "\\( - \\frac{1}{2} \\operatorname{arctg} x^2 + C \\)", "type": "false" },
      { "answer": "\\( 2 \\operatorname{arctg} x^2 + C \\)", "type": "false" }
  ]
},
{
  "id": 323,
  "Question": "323. \\( \\lim_{{x \\to \\infty}} \\left( \\frac{3x + 5}{3x - 1} \\right)^{2x^2} \\) hesablayın",
  "answers": [
      { "answer": "\\( \\infty \\)", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "4", "type": "false" },
      { "answer": "3", "type": "false" }
  ]
},
{
  "id": 324,
  "Question": "324. \\( y = 3 \\sin(3x + 5) \\) funksiyasının \\( y' \\) törəməsini tapın",
  "answers": [
      { "answer": "\\( 9 \\cos(3x + 5) \\)", "type": "true" },
      { "answer": "1", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "\\( \\frac{1}{2} \\)", "type": "false" },
      { "answer": "3", "type": "false" }
  ]
},
{
  "id": 325,
  "Question": "325. Eylerin birinci əvəzləməsini göstərin",
  "answers": [
      { "answer": "\\( \\sqrt{ax^2 + bx + c} = t \\pm \\sqrt{a x}, \\text{əgər} \\ a > 0 \\)", "type": "true" },
      { "answer": "\\( \\sqrt{a(x - \\alpha)(x - \\beta)} = (x - \\alpha)t \\)", "type": "false" },
      { "answer": "\\( \\operatorname{tg} \\frac{x}{2} = t \\)", "type": "false" },
      { "answer": "\\( \\operatorname{tg} x = t \\)", "type": "false" },
      { "answer": "\\( t = \\sin x \\)", "type": "false" }
  ]
},
{
  "id": 326,
  "Question": "326. Hesablayın \\( \\int e^{x^3} x^2 dx \\)",
  "answers": [
      { "answer": "\\( \\frac{1}{3} e^{x^3} + C \\)", "type": "true" },
      { "answer": "\\( 3x e^{x^3 -1} + C \\)", "type": "false" },
      { "answer": "\\( 3x e^{x^3} + C \\)", "type": "false" },
      { "answer": "\\( x^3 e^{x^2} + C \\)", "type": "false" },
      { "answer": "\\( \\frac{1}{2} x e^{x^2} + C \\)", "type": "false" }
  ]
},
{
  "id": 327,
  "Question": "327. Hesablayın: \\( z = \\sqrt{x^2 - y^2} \\); \\( \\frac{\\partial z}{\\partial x} \\) = ?",
  "answers": [
      { "answer": "\\( \\frac{x}{\\sqrt{x^2 - y^2}} \\)", "type": "true" },
      { "answer": "\\( \\sqrt{x^2 - y^2} - y \\)", "type": "false" },
      { "answer": "\\( \\frac{x}{\\sqrt{x^2 - y^2}} + y \\)", "type": "false" },
      { "answer": "\\( \\frac{1}{\\sqrt{x^2 - y^2}} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{x^2 - y^2} + y \\)", "type": "false" }
  ]
},
{
  "id": 328,
  "Question": "328. Tənliyi həll edin: \\( y'' + 8y' + 16y = 0 \\)",
  "answers": [
      { "answer": "\\( y = C_1 + C_2 x e^{-4x} \\)", "type": "false" },
      { "answer": "\\( y = (C_1 + C_2 x)e^{4x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^{-4x} + C_2 e^{4x} \\)", "type": "true" },
      { "answer": "\\( y = C_1 e^{2x} + C_2 e^{3x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 \\sin 4x + C_2 \\cos 4x \\)", "type": "false" }
  ]
},
{
  "id": 329,
  "Question": "329. Aşağıdakı düsturlardan hansı doğru deyil?",
  "answers": [
      { "answer": "\\( \\int a^x dx = a^x + C \\)", "type": "true" },
      { "answer": "\\( \\int \\sin x dx = - \\cos x + C \\)", "type": "false" },
      { "answer": "\\( \\int \\cos x dx = \\sin x + C \\)", "type": "false" },
      { "answer": "\\( \\int \\frac{dx}{1 + x^2} = \\operatorname{arctg} x + C \\)", "type": "false" },
      { "answer": "\\( \\int \\frac{dx}{x} = \\ln |x| + C \\)", "type": "false" }
  ]
},
{
  "id": 330,
  "Question": "330. İntegralı hesablayın: \\( \\int \\cos^3 x dx \\)",
  "answers": [
      { "answer": "\\( \\sin x - \\frac{1}{3} \\sin^3 x + C \\)", "type": "true" },
      { "answer": "\\( \\sin^3 x + C \\)", "type": "false" },
      { "answer": "\\( \\frac{1}{4} \\cos^4 x + C \\)", "type": "false" },
      { "answer": "\\( \\sin^2 x + C \\)", "type": "false" },
      { "answer": "\\( 3 \\cos^2 x + C \\)", "type": "false" }
  ]
},
{
  "id": 331,
  "Question": "331. İntegralı hesablayın: \\( \\int_0^1 (\\sqrt{x} + x^2 + 1) dx \\)",
  "answers": [
      { "answer": "2", "type": "true" },
      { "answer": "\\( \\frac{1}{2} \\)", "type": "false" },
      { "answer": "1", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "\\( \\frac{1}{3} \\)", "type": "false" }
  ]
},
{
  "id": 332,
  "Question": "332. \\( \\frac{dy}{dx} = -\\frac{y}{x} \\) dəyişənlərinə ayırın",
  "answers": [
      { "answer": "\\( y = \\frac{C}{x} \\)", "type": "true" },
      { "answer": "\\( \\ln y = x + C \\)", "type": "false" },
      { "answer": "\\( \\frac{y}{\\ln x} \\)", "type": "false" },
      { "answer": "\\( \\frac{x}{\\ln y} \\)", "type": "false" },
      { "answer": "\\( \\ln y = x - C \\)", "type": "false" }
  ]
},
{
  "id": 333,
  "Question": "333. \\( \\int \\frac{\\sin 4x}{\\cos^6 x} dx \\) hesablayın:",
  "answers": [
      { "answer": "\\( \\frac{1}{5} \\operatorname{tg}^5 x + C \\)", "type": "true" },
      { "answer": "\\( \\frac{y}{\\ln x} \\)", "type": "false" },
      { "answer": "\\( \\frac{1}{4} \\cos^4 x + C \\)", "type": "false" },
      { "answer": "\\( y = \\sin x \\)", "type": "false" },
      { "answer": "\\( y = - \\cos x - ax \\)", "type": "false" }
  ]
},
{
  "id": 334,
  "Question": "334. Hesablayın \\( \\int_0^{\\pi} x \\sin x dx \\)",
  "answers": [
      { "answer": "\\( \\pi \\)", "type": "true" },
      { "answer": "\\( \\frac{\\pi}{2} \\)", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "\\( \\frac{\\pi}{3} \\)", "type": "false" },
      { "answer": "0", "type": "false" }
  ]
},
{
  "id": 335,
  "Question": "335. Hesablayın \\( \\int_0^{2\\pi} x^2 \\cos x dx \\)",
  "answers": [
      { "answer": "\\( 4\\pi \\)", "type": "true" },
      { "answer": "\\( \\pi \\)", "type": "false" },
      { "answer": "0", "type": "false" },
      { "answer": "\\( \\frac{\\pi}{3} \\)", "type": "false" },
      { "answer": "\\( \\frac{\\pi}{2} \\)", "type": "false" }
  ]
},
{
  "id": 336,
  "Question": "336. \\( \\int \\ln x dx \\) hesablayın",
  "answers": [
      { "answer": "\\( x \\ln x - x \\)", "type": "true" },
      { "answer": "\\( x \\ln |x| \\)", "type": "false" },
      { "answer": "\\( 2 \\left( 2 + \\frac{1}{e} \\right) \\)", "type": "false" },
      { "answer": "\\( 3 \\left( 1 - \\frac{1}{e} \\right) \\)", "type": "false" },
      { "answer": "\\( 2 \\left( 3 - \\frac{1}{e} \\right) \\)", "type": "false" }
  ]
},
{
  "id": 337,
  "Question": "337. Hesablayın \\( \\int_a^{+\\infty} \\frac{dx}{x^2} \\)",
  "answers": [
      { "answer": "\\( \\frac{1}{a} \\)", "type": "true" },
      { "answer": "\\( \\frac{1}{x} \\)", "type": "false" },
      { "answer": "a", "type": "false" },
      { "answer": "2a", "type": "false" },
      { "answer": "\\( -\\frac{1}{a} \\)", "type": "false" }
  ]
},
{
  "id": 338,
  "Question": "338. Hesablayın \\( \\int_{-\\infty}^{+\\infty} \\frac{dx}{1 + x^2} \\)",
  "answers": [
      { "answer": "\\( \\pi \\)", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "4\\pi", "type": "false" },
      { "answer": "\\( \\frac{\\pi}{3} \\)", "type": "false" },
      { "answer": "\\( \\frac{\\pi}{2} \\)", "type": "false" }
  ]
},   
{
  "id": 339,
  "Question": "339. Hesablayın \\( \\int x^3 (1 - 5x^2)^{10} dx \\)",
  "answers": [
      { "answer": "\\( -\\frac{1}{550} (-5x^2)^{11} + \\frac{1}{600} (1 - 5x^2)^{12} + C \\)", "type": "true" },
      { "answer": "\\( -\\frac{1}{550} (1 - 5x^2)^{11} + (1 - 5x^2)^{12} + C \\)", "type": "false" },
      { "answer": "\\( -\\frac{1}{550} + \\frac{1}{600} (1 - 5x^2)^{12} + C \\)", "type": "false" },
      { "answer": "\\( -\\frac{1}{550} (1 - 5x^2)^{11} + \\frac{1}{600} + C \\)", "type": "false" },
      { "answer": "\\( (1 - 5x^2)^{11} + \\frac{1}{600} (1 - 5x^2)^{12} + C \\)", "type": "false" }
  ]
},
{
  "id": 340,
  "Question": "340. \\( y'' + y' - 6y = 0 \\) diferensial tənliyinin həllini tapın",
  "answers": [
      { "answer": "\\( y = C_1 e^{-3x} + C_2 e^{2x} \\)", "type": "true" },
      { "answer": "\\( y = C_1 e^{2x} + C_2 e^{-x} + \\frac{1}{3} e^{3x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 + C_2 e^{-3x} + \\frac{1}{3} e^{3x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^x + C_2 e^{-3x} + \\frac{1}{3} e^{3x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^{2x} + C_2 e^{-3x} + e^{3x}\\)", "type": "false" }
  ]
},
{
  "id": 341,
  "Question": "341. \\( \\int_0^1 dx \\int_0^{1-y} dx \\int_0^{1-x-y} \\frac{dz}{(4x + 3y + z - 2)^6} dy dx \\) Hesabla:",
  "answers": [
      { "answer": "\\( \\frac{1}{192} \\)", "type": "true" },
      { "answer": "23", "type": "false" },
      { "answer": "192", "type": "false" },
      { "answer": "\\( \\frac{1}{193} \\)", "type": "false" },
      { "answer": "52", "type": "false" }
  ]
},
{
  "id": 342,
  "Question": "342. Sabit əmsallı xətti birinci diferensial tənliklərin ümumi həllini tapın. \\( 3y'' - 2y' - 8y = 0 \\)",
  "answers": [
      { "answer": "\\( y = C_1 e^{2x} + C_2 e^{-\\frac{4}{3}} \\)", "type": "true" },
      { "answer": "\\( y = C_1 + C_2 e^{-\\frac{4}{3} x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^{2x} - C_2 e^{-\\frac{4}{3} x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^{2x} + C_2 e^{-\\frac{2}{3}x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^x + C_2 e^{-\\frac{4}{3} x} \\)", "type": "false" }
  ]
},
{
  "id": 343,
  "Question": "343. Sabit əmsallı xətti birinci diferensial tənliklərin ümumi həllini tapın. \\( y'' + y = 0 \\)",
  "answers": [
      { "answer": "\\( y = C_1 \\cos x + C_2 \\sin x \\)", "type": "true" },
      { "answer": "\\( y = \\cos x + C_2 \\sin x \\)", "type": "false" },
      { "answer": "\\( y = C_1 \\cos x - C_2 \\sin x \\)", "type": "false" },
      { "answer": "\\( y = C_1 \\cos x + \\sin x \\)", "type": "false" },
      { "answer": "\\( y = C_1 \\cos 2x + C_2 \\sin x \\)", "type": "false" }
  ]
},
{
  "id": 344,
  "Question": "344. \\( y'' - 4y' + 3y = 0 \\) \\( y|_{x=0} = 6, y'|_{x=0} = 10 \\) tənliklərinin göstərilmiş başlanğıc şərtlərini ödəyən həllini tapın",
  "answers": [
      { "answer": "\\( y = 2e^{3x} + 4e^x \\)", "type": "true" },
      { "answer": "\\( y = 2e^{3x} - 4e^x \\)", "type": "false" },
      { "answer": "\\( y = -2e^{3x} + 4e^x \\)", "type": "false" },
      { "answer": "\\( y = 3e^{3x} + 4e^x \\)", "type": "false" },
      { "answer": "\\( y = 2e^{3x} + 5e^x \\)", "type": "false" }
  ]
},
{
  "id": 345,
  "Question": "345. \\( y^{IV} - y'' = 0 \\) tənliyinin ümumi həllini tapın:",
  "answers": [
      { "answer": "\\( y = C_1 + xC_2 + C_3 e^{-x} + C_4 e^x \\)", "type": "true" },
      { "answer": "\\( y = xC_2 + C_3 e^{-x} + C_4 e^x \\)", "type": "false" },
      { "answer": "\\( y = C_1 + xC_2 + C_3 + C_4 e^x \\)", "type": "false" },
      { "answer": "\\( y = C_1 + C_3 e^{-x} + C_4 e^x \\)", "type": "false" },
      { "answer": "\\( y = C_1 + xC_2 + C_3 e^{-x} + C_4 \\)", "type": "false" }
  ]
},
{
  "id": 346,
  "Question": "346. \\( \\int_0^2 dy \\int_0^{1} (x^2 + 2y)dx \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( 4\\frac{2}{3} \\)", "type": "true" },
      { "answer": "5", "type": "false" },
      { "answer": "5.2", "type": "false" },
      { "answer": "7", "type": "false" },
      { "answer": "6", "type": "false" }
  ]
},
{
  "id": 347,
  "Question": "347. \\( \\int_3^4 dx \\int_0^1 \\frac{dy}{(x + y)^2} \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( \\ln \\frac{25}{24} \\)", "type": "true" },
      { "answer": "\\( \\ln \\frac{25}{4} \\)", "type": "false" },
      { "answer": "\\( \\ln \\frac{5}{24} \\)", "type": "false" },
      { "answer": "\\( \\ln \\frac{5}{4} \\)", "type": "false" },
      { "answer": "4", "type": "false" }
  ]
},
{
  "id": 348,
  "Question": "348. \\( \\int_1^2 dx \\int_{\\frac{1}{x}}^x \\frac{x^2 dy}{y^2} \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( \\frac{9}{4} \\)", "type": "true" },
      { "answer": "\\( \\ln \\frac{25}{4} \\)", "type": "false" },
      { "answer": "\\( \\ln \\frac{5}{24} \\)", "type": "false" },
      { "answer": "\\( \\ln \\frac{5}{4} \\)", "type": "false" },
      { "answer": "4", "type": "false" }
  ]
},
{
  "id": 349,
  "Question": "349. \\( \\int_{-3}^{3} dy \\int_{y^2 - 4} {(x + 2y)} dx \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "50.4", "type": "true" },
      { "answer": "50.3", "type": "false" },
      { "answer": "45.3", "type": "false" },
      { "answer": "44.1", "type": "false" },
      { "answer": "42", "type": "false" }
  ]
},
{
  "id": 350,
  "Question": "350. \\( \\int_0^{2\\pi} d\\varphi \\int_{a \\sin \\varphi}^{a} r dr \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( \\frac{\\pi a^2}{2} \\)", "type": "true" },
      { "answer": "\\( \\frac{\\pi a^2}{3} \\)", "type": "false" },
      { "answer": "\\( \\frac{\\pi a}{2} \\)", "type": "false" },
      { "answer": "a", "type": "false" },
      { "answer": "\\( \\frac{\\pi a}{3} \\)", "type": "false" }
  ]
},
{
  "id": 351,
  "Question": "351. \\( \\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}} d\\varphi \\int_0^{3\\cos \\varphi} r^2 \\sin^2 \\varphi dr \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "2.4", "type": "true" },
      { "answer": "3.4", "type": "false" },
      { "answer": "5.1", "type": "false" },
      { "answer": "6.2", "type": "false" },
      { "answer": "5.3", "type": "false" }
  ]
},
{
  "id": 352,
  "Question": "352. \\( \\int_0^1 dx \\int_x^1 (x + y) dy \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( \\frac{1}{2} \\)", "type": "true" },
      { "answer": "\\( \\frac{1}{3} \\)", "type": "false" },
      { "answer": "\\( \\frac{1}{4} \\)", "type": "false" },
      { "answer": "\\( \\frac{1}{5} \\)", "type": "false" },
      { "answer": "\\( \\frac{3}{2} \\)", "type": "false" }
  ]
},
{
  "id": 353,
  "Question": "353. \\( \\int_0^1 dx \\int_x^1 \\frac{x^2}{1 + y^2} dy \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( \\frac{\\pi}{12} \\)", "type": "true" },
      { "answer": "\\( \\frac{\\pi a^2}{3} \\)", "type": "false" },
      { "answer": "\\( \\frac{\\pi a}{2} \\)", "type": "false" },
      { "answer": "a", "type": "false" },
      { "answer": "\\( \\frac{\\pi a}{3} \\)", "type": "false" }
  ]
},
{
  "id": 354,
  "Question": "354. \\( \\int_0^1 dx \\int_0^{\\sqrt{1 - x^2}} \\sqrt{1 - x^2 - y^2} dy \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( \\frac{\\pi}{6} \\)", "type": "true" },
      { "answer": "\\( \\frac{\\pi a^2}{3} \\)", "type": "false" },
      { "answer": "\\( \\frac{\\pi a}{2} \\)", "type": "false" },
      { "answer": "a", "type": "false" },
      { "answer": "\\( \\frac{\\pi a}{3} \\)", "type": "false" }
  ]
},
{
  "id": 355,
  "Question": "355. \\( \\int_0^{\\pi} \\sin^2 x dx \\int_0^a y dy \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( \\frac{\\pi a^2}{4} \\)", "type": "true" },
      { "answer": "\\( \\frac{\\pi a^2}{3} \\)", "type": "false" },
      { "answer": "\\( \\frac{\\pi a}{2} \\)", "type": "false" },
      { "answer": "a", "type": "false" },
      { "answer": "\\( \\frac{\\pi a}{3} \\)", "type": "false" }
  ]
},
{
  "id": 356,
  "Question": "356. \\( \\int_0^{\\pi} dx \\int_0^{1+\\cos x} y^2 \\sin x dy \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( \\frac{4}{3} \\)", "type": "true" },
      { "answer": "\\( \\frac{5}{3} \\)", "type": "false" },
      { "answer": "\\( \\frac{\\pi a}{2} \\)", "type": "false" },
      { "answer": "a", "type": "false" },
      { "answer": "\\( \\frac{\\pi a}{3} \\)", "type": "false" }
  ]
},   
{
  "id": 357,
  "Question": "357. \\( \\int_{0}^{\\frac{\\pi}{2}} dx \\int_{\\cos x}^{1} y^4 dy \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( \\frac{15\\pi - 16}{150} \\)", "type": "true" },
      { "answer": "\\( \\frac{5\\pi - 16}{150} \\)", "type": "false" },
      { "answer": "\\( \\frac{15\\pi - 8}{150} \\)", "type": "false" },
      { "answer": "\\( \\frac{15\\pi - 6}{150} \\)", "type": "false" },
      { "answer": "\\( \\frac{15\\pi - 16}{50} \\)", "type": "false" }
  ]
},
{
  "id": 358,
  "Question": "358. \\( \\int_1^3 dy \\int_0^{2} xydx \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "8", "type": "true" },
      { "answer": "4", "type": "false" },
      { "answer": "5", "type": "false" },
      { "answer": "6", "type": "false" },
      { "answer": "3", "type": "false" }
  ]
},
{
  "id": 359,
  "Question": "359. \\( \\int_1^2 dx \\int_{\\frac{x}{2}}^{0} (x + y) dy \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( \\frac{49}{24} \\)", "type": "true" },
      { "answer": "\\( 4\\frac{49}{24} \\)", "type": "true" },
      { "answer": "\\( 5\\frac{49}{24} \\)", "type": "true" },
      { "answer": "6", "type": "false" },
      { "answer": "3", "type": "false" }
  ]
},
{
  "id": 360,
  "Question": "360. \\( \\int_{-1}^1 dy \\int_{y^2}^{3} (x^2 + y^2) dx \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( \\frac{2048}{105} \\)", "type": "true" },
      { "answer": "\\( 4\\frac{2049}{24} \\)", "type": "false" },
      { "answer": "\\( 5\\frac{49}{24} \\)", "type": "false" },
      { "answer": "16", "type": "false" },
      { "answer": "23", "type": "false" }
  ]
},
{
  "id": 361,
  "Question": "361. \\( \\int_{-1}^{1} dx \\int_{-(x^2 + x + 1)}^{x^2 + x + 1} x^2 ydy \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "0", "type": "true" },
      { "answer": "2", "type": "false" },
      { "answer": "5", "type": "false" },
      { "answer": "6", "type": "false" },
      { "answer": "4", "type": "false" }
  ]
},
{
  "id": 362,
  "Question": "362. \\( \\int_0^1 dx \\int_{y^2}^{3x} \\frac{x dy}{y} \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( \\frac{1}{3} \\ln \\frac{3}{2} \\)", "type": "true" },
      { "answer": "\\( 2\\frac{1}{3} \\ln \\frac{3}{2} \\)", "type": "false" },
      { "answer": "\\( 5\\frac{1}{3} \\ln \\frac{3}{2} \\)", "type": "false" },
      { "answer": "\\( 6\\frac{1}{3} \\ln \\frac{3}{2} \\)", "type": "false" },
      { "answer": "\\( 4\\frac{1}{3} \\ln \\frac{3}{2} \\)", "type": "false" }
  ]
},
{
  "id": 363,
  "Question": "363. \\( \\int_1^2 dx \\int_{\\frac{1}{x}}^{x} \\frac{y}{x} dy \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( \\frac{9}{16} \\)", "type": "true" },
      { "answer": "\\( \\frac{9}{26} \\)", "type": "false" },
      { "answer": "\\( \\frac{9}{23} \\)", "type": "false" },
      { "answer": "\\( \\frac{3}{16} \\)", "type": "false" },
      { "answer": "\\( \\frac{5}{16} \\)", "type": "false" }
  ]
},
{
  "id": 364,
  "Question": "364. \\( \\int_{\\frac{\\pi}{4}}^{\\frac{\\pi}{2}} dx \\int_{\\cos x}^{\\sin x} (2y + 1) dy \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( \\sqrt{2} - 0.5 \\)", "type": "true" },
      { "answer": "\\( \\sqrt{3} - 0.5 \\)", "type": "false" },
      { "answer": "\\( \\sqrt{6} - 0.5 \\)", "type": "false" },
      { "answer": "\\( \\sqrt{2} - 0.1 \\)", "type": "false" },
      { "answer": "\\( \\sqrt{2} \\)", "type": "false" }
  ]
},
{
  "id": 365,
  "Question": "365. \\( \\int_{-\\pi}^{\\pi} dx \\int_{0}^{1+\\sin x} y \\cos 2x dy \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( -\\frac{\\pi}{4} \\)", "type": "true" },
      { "answer": "\\( \\frac{\\pi}{4} \\)", "type": "false" },
      { "answer": "\\( -\\frac{3\\pi}{4} \\)", "type": "false" },
      { "answer": "\\( \\frac{\\pi}{6} \\)", "type": "false" },
      { "answer": "\\( -\\frac{\\pi}{2} \\)", "type": "false" }
  ]
},
{
  "id": 366,
  "Question": "366. \\( \\int_{-\\frac{\\pi}{4}}^{\\frac{\\pi}{4}} dx \\int_{1}^{tgx} (y - 1) dy \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "1", "type": "true" },
      { "answer": "\\( \\frac{\\pi}{4} \\)", "type": "false" },
      { "answer": "\\( -\\frac{3\\pi}{4} \\)", "type": "false" },
      { "answer": "\\( \\frac{\\pi}{6} \\)", "type": "false" },
      { "answer": "\\( -\\frac{\\pi}{2} \\)", "type": "false" }
  ]
},
{
  "id": 367,
  "Question": "367. \\( \\int_2^4 dx \\int_x^{2x} \\frac{dy}{(x + y)^2} \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( \\frac{\\ln 2}{6} \\)", "type": "true" },
      { "answer": "\\( \\frac{\\ln 2}{5} \\)", "type": "false" },
      { "answer": "\\( \\frac{\\ln 2}{4} \\)", "type": "false" },
      { "answer": "\\( \\frac{\\ln 2}{3} \\)", "type": "false" },
      { "answer": "\\( \\frac{\\ln 2}{8} \\)", "type": "false" }
  ]
},
{
  "id": 369,
  "Question": "369. \\( \\int_0^1 dx \\int_0^{3x} y \\ln x dy \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( -\\frac{4}{9} \\)", "type": "true" },
      { "answer": "5", "type": "false" },
      { "answer": "6", "type": "false" },
      { "answer": "\\( -\\frac{4}{7} \\)", "type": "false" },
      { "answer": "\\( -\\frac{4}{5} \\)", "type": "false" }
  ]
},
{
  "id": 370,
  "Question": "370. \\( \\int_0^1 dy \\int_y^{3-y} (\\sqrt{y} + x) dx \\) təkrar inteqralı hesablayın:",
  "answers": [
      { "answer": "\\( \\frac{21}{5} \\)", "type": "true" },
      { "answer": "\\( -\\frac{21}{5} \\)", "type": "false" },
      { "answer": "\\( \\frac{1}{5} \\)", "type": "false" },
      { "answer": "\\( \\frac{2}{5} \\)", "type": "false" },
      { "answer": "\\( \\frac{22}{5} \\)", "type": "false" }
  ]
},
{
  "id": 371,
  "Question": "371. \\( x\\sqrt{1+y^2}dx + y\\sqrt{1+x^2}dy = 0 \\) diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 + y^2} = C \\)", "type": "true" },
      { "answer": "\\( \\sqrt{1 + x^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 372,
  "Question": "372. \\( xy + y^2 = (2x^2 + xy)y' \\) diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y^2 = C x e^{-\\frac{y}{x}} \\)", "type": "true" },
      { "answer": "\\( y = C x e^{-\\frac{y}{x}} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }

  ]
},
{
  "id": 373,
  "Question": "373. \\( y'' - y' - 2y = 0 \\) sabit əmsallı birinci dərəcəli diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = C_1 e^{2x} + C_2 e^{-x} \\)", "type": "true" },
      { "answer": "\\( y = C x e^{-\\frac{y}{x}} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 374,
  "Question": "374. \\( x^2 y'' - 3x y' + 3y = 0 \\) diferensial tənliyinin ümumi həllini tapın",
  "answers": [
      { "answer": "\\( y = C_1 x + C_2 x^3 \\)", "type": "true" },
      { "answer": "\\( y = C x e^{-\\frac{y}{x}} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 375,
  "Question": "375. \\( y'' - 4y' + 4y = 0 \\) sabit əmsallı birinci dərəcəli diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = (C_1 + C_2 x)e^{2x} \\)", "type": "true" },
      { "answer": "\\( y = C x e^{\\frac{-y}{x}} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 376,
  "Question": "376. \\( y'' - 4y' + 13y = 0 \\) sabit əmsallı birinci dərəcəli diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = e^{2x} (C_1 \\cos 3x + C_2 \\sin 3x) \\)", "type": "true" },
      { "answer": "\\( y = C x e^{\\frac{-y}{x}} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 377,
  "Question": "377. \\( \\frac{d^2 x}{dt^2} + 3 \\frac{dx}{dt} - 4x \\) sabit əmsallı birincins diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = C_1 e^t + C_2 e^{-4t} \\)", "type": "true" },
      { "answer": "\\( y = C x e^{\\frac{-y}{x}} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 378,
  "Question": "378. \\( 4 \\frac{d^2 \\rho}{d \\varphi^2} + \\rho = 0 \\) sabit əmsallı birincins diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( \\rho = A \\cos \\frac{\\varphi}{2} + B \\sin \\frac{\\varphi}{2} \\)", "type": "true" },
      { "answer": "\\( y = C x e^{\\frac{-y}{x}} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 379,
  "Question": "379. \\( y'' - 6y' + 9y = 0 \\) sabit əmsallı birincins diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = (C_1 + C_2 x)e^{3x} \\)", "type": "true" },
      { "answer": "\\( y = C x e^{\\frac{-y}{x}} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 380,
  "Question": "380. \\( y'' + 8y' + 25y = 0 \\) sabit əmsallı birincins diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = e^{-4x} (C_1 \\cos 3x + C_2 \\sin 3x) \\)", "type": "true" },
      { "answer": "\\( y = C x e^{\\frac{-y}{x}} \\)", "type": "false" },
      { "answer": "\\( y = (C_1 + C_2 x)e^{2x} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 381,
  "Question": "381. \\( y'' - 3y' + 2y = 0 \\) sabit əmsallı birincins diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = C_1 e^x + C_2 e^{2x} \\)", "type": "true" },
      { "answer": "\\( y = C x e^{\\frac{-y}{x}} \\)", "type": "false" },
      { "answer": "\\( (C_1 + C_2 x)e^{2x} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 382,
  "Question": "382. \\( y'' - 2y' + 2y = 0 \\) sabit əmsallı birincins diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = (C_1 \\cos x + C_2 \\sin x)e^x \\)", "type": "true" },
      { "answer": "\\( y = C x e^{\\frac{-y}{x}} \\)", "type": "false" },
      { "answer": "\\( y = (C_1 + C_2 x)e^{2x} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 383,
  "Question": "383. \\( y'' - 4y' = 0 \\) sabit əmsallı birincins diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = C_1 e + C_2 e^{-4x} \\)", "type": "true" },
      { "answer": "\\( y = C x e^{\\frac{-y}{x}} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 384,
  "Question": "384. \\( y'' + 3y' + 2y = 0 \\) sabit əmsallı birincins diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = C_1 e^{-2x} + C_2 e^{-x} \\)", "type": "true" },
      { "answer": "\\( y = C x e^{\\frac{-y}{x}} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 385,
  "Question": "385. \\( y'' + 2y' + 5y = 0 \\) sabit əmsallı birincins diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = (C_1 \\cos 2x + C_2 \\sin 2x)e^{-x} \\)", "type": "true" },
      { "answer": "\\( y = C x e^{\\frac{-y}{x}} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 386,
  "Question": "386. \\( y'' + 2a y' + a^2 y = 0 \\) sabit əmsallı birincins diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = (C_1 + C_2)e^{ax} \\)", "type": "true" },
      { "answer": "\\( y = C x e^{\\frac{-y}{x}} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 387,
  "Question": "387. \\( y'' + y' = 0 \\) sabit əmsallı birincins diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = (C_1 \\cos x + C_2 \\sin x) \\)", "type": "true" },
      { "answer": "\\( y = (C_1 + C_2 x)e^{2x} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 388,
  "Question": "388. \\( y'' + y' - 2y = 0 \\) sabit əmsallı birincins diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = C_1 e^x + C_2 e^{-2x} \\)", "type": "true" },
      { "answer": "\\( y = (C_1 + C_2 x)e^{2x} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }

  ]
},
{
  "id": 389,
  "Question": "389. \\( y'' - 2y' + y = 0 \\) sabit əmsallı birincins diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = (C_1 + C_2 x)e^{-x} \\)", "type": "true" },
      { "answer": "\\( y = C x e^{\\frac{-y}{x}} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 390,
  "Question": "390. \\( y'' - 9y = 0 \\) sabit əmsallı birincins diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = C_1 e^{3x} + C_2 e^{-3x} \\)", "type": "true" },
      { "answer": "\\( y = (C_1 + C_2 x)e^{2x} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 391,
  "Question": "391. \\( 4y'' - 8y' + 5y = 0 \\) sabit əmsallı birincins diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = (C_1 \\cos \\frac{x}{2} + C_2 \\sin \\frac{x}{2})e^x \\)", "type": "true" },
      { "answer": "\\( y = C x e^{\\frac{-y}{x}} \\)", "type": "false" },
      { "answer": "\\( y = (C_1 + C_2 x)e^{2x} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 392,
  "Question": "392. \\( \\frac{y' - y}{y''} = 3 \\) sabit əmsallı birinci dərəcəli diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = \\left( C_1 \\cos \\frac{\\sqrt{11}}{6} x + C_2 \\sin \\frac{\\sqrt{11}}{6} x \\right) e^{\\frac{x}{6}} \\)", "type": "true" },
      { "answer": "\\( y = C x e^{-\\frac{y}{x}} \\)", "type": "false" },
      { "answer": "\\( y = (C_1 + C_2 x)e^{2x} \\)", "type": "false" },
      { "answer": "\\( y = \\left( C_1 \\cos \\frac{x}{2} + C_2 \\sin \\frac{x}{2} \\right) e^x \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 393,
  "Question": "393. \\( y'' - 4y' + 2y = 0 \\) sabit əmsallı birinci dərəcəli diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = (C_1 e^{x \\sqrt{x}} + C_2 e^{-x \\sqrt{2}}) e^{2x} \\)", "type": "true" },
      { "answer": "\\( y = C x e^{-\\frac{y}{x}} \\)", "type": "false" },
      { "answer": "\\( y = (C_1 + C_2 x)e^{2x} \\)", "type": "false" },
      { "answer": "\\( y = \\left( C_1 \\cos \\frac{x}{2} + C_2 \\sin \\frac{x}{2} \\right) e^x \\)", "type": "false" },
      { "answer": "\\( y = \\left( C_1 \\cos \\frac{\\sqrt{11}}{6} x + C_2 \\sin \\frac{\\sqrt{11}}{6} x \\right) e^{\\frac{x}{6}} \\)", "type": "false" }
  ]
},    
{
  "id": 394,
  "Question": "394. \\( y = y'' + y' \\) sabit əmsallı birincins diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = (C_1 e^{\\frac{\\sqrt{5}}{2}x} + C_2 e^{-\\frac{\\sqrt{5}}{2}x}) e^{\\frac{x}{2}} \\)", "type": "true" },
      { "answer": "\\( y = C x e^{\\frac{-y}{x}} \\)", "type": "false" },
      { "answer": "\\( y = (C_1 + C_2 x)e^{2x} \\)", "type": "false" },
      { "answer": "\\( y = \\left( C_1 \\cos \\frac{x}{2} + C_2 \\sin \\frac{x}{2} \\right) e^x \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 395,
  "Question": "395. \\( \\iint_D xy dxdy \\) İkiqat inteqralı hesablayın haradakı \\( D: 3 \\leq x \\leq 5, 0 \\leq y \\leq 1 \\)",
  "answers": [
      { "answer": "4", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 396,
  "Question": "396. \\( \\iint_D xy^2 dxdy \\) İkiqat inteqralı hesablayın haradakı \\( D: 2 \\leq x \\leq 4, 0 \\leq y \\leq 1 \\)",
  "answers": [
      { "answer": "2", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "5", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 397,
  "Question": "397. \\( \\iint_D \\frac{y}{x} dxdy \\) İkiqat inteqralı hesablayın haradakı \\( D: 1 \\leq x \\leq e, 4 \\leq y \\leq 6 \\)",
  "answers": [
      { "answer": "10", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 398,
  "Question": "398. \\( \\iint_D (x - y) dxdy \\) İkiqat inteqralı hesablayın haradakı \\( D: 1 \\leq x \\leq 4, 1 \\leq y \\leq 3 \\)",
  "answers": [
      { "answer": "3", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "13", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 399,
  "Question": "399. \\( \\iint_D (x + y^2) dxdy \\) İkiqat inteqralı hesablayın haradakı \\( D: 2 \\leq x \\leq 3, 1 \\leq y \\leq 2 \\)",
  "answers": [
      { "answer": "\\( 4 \\frac{5}{6} \\)", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 400,
  "Question": "400. \\( \\iint_D (x^2 + y^2) dxdy \\) İkiqat inteqralı hesablayın haradakı \\( D: 0 \\leq x \\leq 1, 0 \\leq y \\leq 1 \\)",
  "answers": [
      { "answer": "\\( \\frac{2}{3} \\)", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 401,
  "Question": "401. \\( \\iint_D \\frac{xy dxdy}{1 + x^2} \\) İkiqat inteqralı hesablayın haradakı \\( D: 0 \\leq x \\leq 1, 0 \\leq y \\leq 1 \\)",
  "answers": [
      { "answer": "\\( \\frac{\\pi}{4} \\)", "type": "true" },
      { "answer": "\\( \\frac{2}{3} \\)", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "\\( 3 \\frac{2}{3} \\)", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 402,
  "Question": "402. \\( \\iint_D (3yx^2 - 2x^3) dxdy \\) İkiqat inteqralı hesablayın haradakı \\( D: 0 \\leq x \\leq 1, 1 \\leq y \\leq 2 \\)",
  "answers": [
      { "answer": "1", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "10", "type": "false" }
  ]
},
{
  "id": 403,
  "Question": "403. \\( \\iint_D \\sin(x + y) dxdy \\) İkiqat inteqralı hesablayın haradakı \\( D: 0 \\leq x \\leq \\frac{\\pi}{2}, 0 \\leq y \\leq \\frac{\\pi}{2} \\)",
  "answers": [
      { "answer": "2", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "12", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 404,
  "Question": "404. \\( \\iint_D xe^{xy} dxdy \\) İkiqat inteqralı hesablayın haradakı \\( D: 0 \\leq x \\leq 1, -1 \\leq y \\leq 0 \\)",
  "answers": [
      { "answer": "\\( \\frac{1}{e} \\)", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 405,
  "Question": "405. \\( \\iint_D \\frac{dxdy}{(x - y)^2} \\) İkiqat inteqralı hesablayın haradakı \\( D: 1 \\leq x \\leq 2, 3 \\leq y \\leq 4 \\)",
  "answers": [
      { "answer": "\\( \\ln \\frac{4}{3} \\)", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 406,
  "Question": "406. \\( \\iint_D e^{x+y} dxdy \\) İkiqat inteqralı hesablayın haradakı \\( D: 0 \\leq x \\leq 1, 0 \\leq y \\leq 1 \\)",
  "answers": [
      { "answer": "\\( (e - 1)^2 \\)", "type": "true" },
      { "answer": "\\( \\ln \\frac{4}{3} \\)", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 407,
  "Question": "407. \\( \\iint_D \\frac{x^2}{1 + y^2} dxdy \\) İkiqat inteqralı hesablayın haradakı \\( D: 0 \\leq x \\leq 1, 0 \\leq y \\leq 1 \\)",
  "answers": [
      { "answer": "\\( \\frac{\\pi}{12} \\)", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 408,
  "Question": "408. \\( \\iint_D \\frac{dxdy}{(x - y + 1)^2} \\) İkiqat inteqralı hesablayın haradakı \\( D: 0 \\leq x \\leq 1, 0 \\leq y \\leq 1 \\)",
  "answers": [
      { "answer": "\\( \\ln \\frac{4}{3} \\)", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 409,
  "Question": "409. \\( \\iint_D \\frac{y dxdy}{(1 + x^2 + y^2)^{\\frac{3}{2}}} \\) İkiqat inteqralı hesablayın haradakı \\( D: 0 \\leq x \\leq 1, 0 \\leq y \\leq 1 \\)",
  "answers": [
      { "answer": "\\( \\ln \\frac{2 + \\sqrt{2}}{1 + \\sqrt{3}} \\)", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 410,
  "Question": "410. \\( \\iint_D x \\sin(x + y) dxdy \\) İkiqat inteqralı hesablayın haradakı \\( D: 0 \\leq x \\leq \\pi, 0 \\leq y \\leq \\frac{\\pi}{2} \\)",
  "answers": [
      { "answer": "\\( \\pi - 2 \\)", "type": "true" },
      { "answer": "\\( \\ln \\frac{4}{3} \\)", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 411,
  "Question": "411. \\( \\iint_D x^2 y e^{xy} dxdy \\) İkiqat inteqralı hesablayın haradakı \\( D: 0 \\leq x \\leq 1, 0 \\leq y \\leq 2 \\)",
  "answers": [
      { "answer": "2", "type": "true" },
      { "answer": "\\( \\ln \\frac{4}{3} \\)", "type": "false" },
      { "answer": "0", "type": "false" },
      { "answer": "3", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 412,
  "Question": "412. \\( \\iint_D x^2 y \\cos(xy^2) dxdy \\) İkiqat inteqralı hesablayın haradakı \\( D: 0 \\leq x \\leq \\frac{\\pi}{2}, 0 \\leq y \\leq 2 \\)",
  "answers": [
      { "answer": "\\( -\\frac{\\pi}{6} \\)", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "\\( \\ln \\frac{4}{3} \\)", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 413,
  "Question": "413. İnteqralı hesablayın: \\( \\int_{2}^{\\infty} \\frac{dx}{x^2 - 1} \\)",
  "answers": [
      { "answer": "\\( \\ln \\frac{3}{2} \\)", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "\\( \\ln \\frac{4}{3} \\)", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 414,
  "Question": "414. \\( y'' - 5y' + 4y = 0 \\) sabit əmsallı birinci dərəcəli diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = (C_1 e^x + C_2 e^{4x}) \\)", "type": "true" },
      { "answer": "\\( y = C x e^{\\frac{-y}{x}} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},
{
  "id": 415,
  "Question": "415. İnteqralı hesablayın: \\( \\int_{-\\infty}^{\\infty} \\frac{dx}{x^2 + 4x + 9} \\)",
  "answers": [
      { "answer": "\\( \\frac{\\pi}{\\sqrt{5}} \\)", "type": "true" },
      { "answer": "\\( \\frac{\\ln 3}{2} \\)", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "\\( \\ln \\frac{4}{3} \\)", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 416,
  "Question": "416. İnteqralı hesablayın: \\( \\int_{-\\infty}^{-2} \\frac{dx}{x\\sqrt{x^2 - 1}} \\)",
  "answers": [
      { "answer": "\\( -\\frac{\\pi}{6} \\)", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "\\( \\ln \\frac{4}{3} \\)", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 417,
  "Question": "417. İnteqralı hesablayın: \\( \\int_{0}^{\\infty} \\frac{arctg x}{1 + x^2} dx \\)",
  "answers": [
      { "answer": "\\( \\frac{\\pi^2}{8} \\)", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "\\( \\ln \\frac{4}{3} \\)", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 418,
  "Question": "418. İnteqralı hesablayın: \\( \\int_{-\\infty}^{0} \\frac{dx}{4 + x^2} \\)",
  "answers": [
      { "answer": "\\( \\frac{\\pi}{4} \\)", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "\\( \\ln \\frac{4}{3} \\)", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 419,
  "Question": "419. İnteqralı hesablayın: \\( \\int_{0}^{1} x \\ln^2 x dx \\)",
  "answers": [
      { "answer": "\\( \\frac{1}{4} \\)", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "\\( \\ln \\frac{4}{3} \\)", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 420,
  "Question": "420. İnteqralı hesablayın: \\( \\int_{1}^{\\infty} \\frac{dx}{x^3} \\)",
  "answers": [
      { "answer": "\\( \\frac{1}{2} \\)", "type": "true" },
      { "answer": "0", "type": "false" },
      { "answer": "2", "type": "false" },
      { "answer": "\\( \\ln \\frac{4}{3} \\)", "type": "false" },
      { "answer": "1", "type": "false" }
  ]
},
{
  "id": 421,
  "Question": "421. Tənliyi həll edin: \\( y'' + 3y' - 4y = 0 \\)",
  "answers": [
      { "answer": "\\( y = C_1 e^x + C_2 e^{-4x} \\)", "type": "false" },
      { "answer": "\\( y = (C_1 + C_2 x)e^x \\)", "type": "false" },
      { "answer": "\\( y = (C_1 + C_2 x)e^{-4x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^{4x} + C_2 e^{-4x} \\)", "type": "true" },
      { "answer": "\\( y = C_1 e^x + C_2 e^{-x} \\)", "type": "false" }
  ]
},
{
  "id": 422,
  "Question": "422. \\( y'' + 2y' + y = 8e^{-x} \\) diferensial tənliyinin həllini tapın",
  "answers": [
      { "answer": "\\( y = (C_1 x + C_2) e^{-x} + 4x^2 e^{-x} \\)", "type": "true" },
      { "answer": "\\( y = C_1 e^{2x} + C_2 e^{-3x} + \\frac{1}{3} e^{3x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 + C_2 e^{-3x} + \\frac{1}{3} e^{3x} \\)", "type": "false" },
      { "answer": "\\( y = C_1 e^{2x} + C_2 e^{-x} + \\frac{1}{3} e^{3x} \\)", "type": "false" },
      { "answer": "\\( y = (C_1 + C_2) e^{-x} + 4x^2 e^{-x} \\)", "type": "false" }
  ]
},
{
  "id": 423,
  "Question": "423. \\( y'' - 4y' = 0 \\) sabit əmsallı birinci dərəcəli diferensial tənliyi həll edin:",
  "answers": [
      { "answer": "\\( y = C_1 e^{2x} + C_2 e^{-2x} \\)", "type": "true" },
      { "answer": "\\( y = C x e^{\\frac{-y}{x}} \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 - x^2} + \\sqrt{1 + y^2} = C \\)", "type": "false" },
      { "answer": "\\( \\sqrt{1 + x^2} + \\sqrt{1 - y^2} = C \\)", "type": "false" }
  ]
},


];

export default Questions;
