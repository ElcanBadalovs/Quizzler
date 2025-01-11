// Questions.js
const Questions = [
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
  ];
  
  export default Questions;
  