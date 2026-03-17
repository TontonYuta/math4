import { Topic } from '../../types';

export const chapter11ExamTopics: Topic[] = [
{
  id: 'c11-e1',
  title: 'Đề thi số 1',
  description: 'Đề thi ôn tập tổng hợp.',
  questions: [
    {
      id: 'c11-e1-q1',
      type: 'single-choice',
      text: 'Một vườn thú ghi lại tuổi thọ của một số loài như sau: thỏ 10 năm, cáo 22 năm, hươu cao cổ 28 năm, cá voi cái 29 năm, sư tử 35 năm, gấu 30 năm. Loài sống thọ nhất là:',
      options: ['Gấu', 'Cá voi cái', 'Sư tử', 'Hươu cao cổ'],
      correctAnswerIndex: 2,
      explanation: 'Trong các số 10, 22, 28, 29, 35, 30 thì 35 là lớn nhất, ứng với sư tử.'
    },
    {
      id: 'c11-e1-q2',
      type: 'single-choice',
      text: 'Theo số liệu trên, tuổi thọ của hươu cao cổ thấp hơn sư tử bao nhiêu năm?',
      options: ['5 năm', '6 năm', '7 năm', '8 năm'],
      correctAnswerIndex: 2,
      explanation: 'Ta có 35 - 28 = 7 (năm).'
    },
    {
      id: 'c11-e1-q3',
      type: 'single-choice',
      text: 'Khi gieo một con xúc xắc 6 mặt một lần, tập hợp các kết quả có thể xảy ra là:',
      options: [
        '$\\{1;2;3;4;5;6\\}$',
        '$\\{0;1;2;3;4;5\\}$',
        '$\\{1;2;3;4;5\\}$',
        '$\\{6\\}$'
      ],
      correctAnswerIndex: 0,
      explanation: 'Xúc xắc 6 mặt có 6 kết quả có thể xảy ra là 1, 2, 3, 4, 5, 6.'
    },
    {
      id: 'c11-e1-q4',
      type: 'single-choice',
      text: 'Tung một đồng xu 12 lần, xuất hiện mặt ngửa 5 lần. Xác suất thực nghiệm của biến cố “xuất hiện mặt ngửa” là:',
      options: ['$\\dfrac{5}{12}$', '$\\dfrac{7}{12}$', '$\\dfrac{12}{5}$', '$\\dfrac{1}{2}$'],
      correctAnswerIndex: 0,
      explanation: 'Xác suất thực nghiệm bằng số lần xuất hiện chia cho tổng số lần thử: $\\dfrac{5}{12}$.'
    },
    {
      id: 'c11-e1-q5',
      type: 'single-choice',
      text: 'Cho bốn điểm phân biệt A, B, C, D. Số đoạn thẳng có thể tạo thành từ bốn điểm đó là:',
      options: ['4', '5', '6', '8'],
      correctAnswerIndex: 2,
      explanation: 'Từ 4 điểm phân biệt, số đoạn thẳng là $\\dfrac{4\\times3}{2}=6$.'
    },
    {
      id: 'c11-e1-q6',
      type: 'single-choice',
      text: 'Điền vào chỗ trống: Nếu điểm M thuộc đường thẳng a thì viết là:',
      options: ['$M \\notin a$', '$M \\in a$', '$a \\in M$', '$a \\notin M$'],
      correctAnswerIndex: 1,
      explanation: 'Kí hiệu điểm M thuộc đường thẳng a là $M \\in a$.'
    },
    {
      id: 'c11-e1-q7',
      type: 'single-choice',
      text: 'Trên một đường thẳng có ba điểm A, B, C phân biệt. Số đoạn thẳng được tạo bởi ba điểm đó là:',
      options: ['2', '3', '4', '6'],
      correctAnswerIndex: 1,
      explanation: 'Ba điểm A, B, C tạo được 3 đoạn thẳng: AB, BC, AC.'
    },
    {
      id: 'c11-e1-q8',
      type: 'single-choice',
      text: 'Điều kiện để điểm M là trung điểm của đoạn thẳng AB là:',
      options: [
        'M nằm ngoài đoạn thẳng AB',
        'M nằm giữa A và B',
        'M nằm giữa A và B và MA = MB',
        'MA > MB'
      ],
      correctAnswerIndex: 2,
      explanation: 'Điểm M là trung điểm của AB khi M nằm giữa A và B và MA = MB.'
    },
    {
      id: 'c11-e1-q9',
      type: 'single-choice',
      text: 'Một cửa hàng bán được số kính theo màu như sau: trắng 6, đen 40, xanh 10, trắng bạc 35, vàng kim 12. Màu kính bán được nhiều nhất là:',
      options: ['Trắng', 'Đen', 'Trắng bạc', 'Vàng kim'],
      correctAnswerIndex: 1,
      explanation: 'Trong các số 6, 40, 10, 35, 12 thì 40 là lớn nhất, ứng với màu đen.'
    },
    {
      id: 'c11-e1-q10',
      type: 'single-choice',
      text: 'Một hộp có 3 quả bóng: 1 đỏ, 1 xanh, 1 vàng. Số kết quả có thể xảy ra khi lấy ngẫu nhiên 1 quả bóng là:',
      options: ['1', '2', '3', '4'],
      correctAnswerIndex: 2,
      explanation: 'Có 3 kết quả có thể xảy ra: lấy được bóng đỏ, xanh hoặc vàng.'
    },
    {
      id: 'c11-e1-q11',
      type: 'single-choice',
      text: 'Nếu lấy bóng 20 lần, trong đó có 10 lần xuất hiện bóng đỏ thì xác suất thực nghiệm để lấy được bóng đỏ là:',
      options: ['$\\dfrac{1}{2}$', '$\\dfrac{1}{3}$', '$\\dfrac{2}{5}$', '$\\dfrac{3}{10}$'],
      correctAnswerIndex: 0,
      explanation: 'Ta có xác suất thực nghiệm là $\\dfrac{10}{20}=\\dfrac{1}{2}$.'
    },
    {
      id: 'c11-e1-q12',
      type: 'single-choice',
      text: 'Cho đoạn thẳng AC dài 8 cm, điểm B là trung điểm của AC. Khi đó độ dài AB là:',
      options: ['2 cm', '3 cm', '4 cm', '5 cm'],
      correctAnswerIndex: 2,
      explanation: 'Vì B là trung điểm của AC nên $AB = AC : 2 = 8 : 2 = 4$ cm.'
    },

    {
      id: 'c11-e1-q13',
      type: 'true-false',
      text: 'Xét tính đúng sai của các phát biểu sau về số liệu tuổi thọ các loài động vật: thỏ 10, cáo 22, hươu cao cổ 28, cá voi cái 29, sư tử 35, gấu 30.',
      options: [],
      correctAnswerIndex: 0,
      trueFalseStatements: [
        'Sư tử sống thọ hơn gấu.',
        'Tuổi thọ của thỏ lớn hơn tuổi thọ của cáo.',
        'Cá voi cái sống ít hơn 30 năm.',
        'Hươu cao cổ sống 28 năm.'
      ],
      trueFalseAnswers: [true, false, true, true],
      explanation: 'So sánh trực tiếp các số liệu đã cho.'
    },
    {
      id: 'c11-e1-q14',
      type: 'true-false',
      text: 'Xét tính đúng sai của các phát biểu sau về xác suất và phép thử.',
      options: [],
      correctAnswerIndex: 0,
      trueFalseStatements: [
        'Khi tung một đồng xu một lần, có 2 kết quả có thể xảy ra.',
        'Khi gieo một con xúc xắc 6 mặt, số 7 có thể xuất hiện.',
        'Xác suất thực nghiệm luôn được tính bằng số lần biến cố xảy ra chia cho tổng số lần thử.',
        'Xác suất thực nghiệm có thể lớn hơn 1.'
      ],
      trueFalseAnswers: [true, false, true, false],
      explanation: 'Đồng xu có 2 mặt; xúc xắc 6 mặt không có số 7; xác suất thực nghiệm là tỉ số số lần xảy ra trên tổng số lần thử và luôn từ 0 đến 1.'
    },
    {
      id: 'c11-e1-q15',
      type: 'true-false',
      text: 'Xét tính đúng sai của các phát biểu sau về điểm, đường thẳng và đoạn thẳng.',
      options: [],
      correctAnswerIndex: 0,
      trueFalseStatements: [
        'Nếu M là trung điểm của AB thì MA = MB.',
        'Ba điểm A, B, C phân biệt luôn thẳng hàng.',
        'Nếu B nằm giữa A và C thì có ba đoạn thẳng AB, BC, AC.',
        'Điểm thuộc đường thẳng được kí hiệu bằng dấu $\\in$.'
      ],
      trueFalseAnswers: [true, false, true, true],
      explanation: 'Trung điểm chia đoạn thẳng thành hai phần bằng nhau; ba điểm phân biệt không phải lúc nào cũng thẳng hàng.'
    },
    {
      id: 'c11-e1-q16',
      type: 'true-false',
      text: 'Xét tính đúng sai của các phát biểu sau về bảng số liệu cửa hàng bán kính: trắng 6, đen 40, xanh 10, trắng bạc 35, vàng kim 12.',
      options: [],
      correctAnswerIndex: 0,
      trueFalseStatements: [
        'Màu trắng bán được ít nhất.',
        'Màu đen bán được nhiều hơn màu trắng bạc.',
        'Tổng số kính bán được là 103 chiếc.',
        'Màu xanh bán được nhiều hơn màu vàng kim.'
      ],
      trueFalseAnswers: [true, true, true, false],
      explanation: 'Ta có 6 là ít nhất, 40 > 35, tổng là 6 + 40 + 10 + 35 + 12 = 103, và 10 < 12.'
    },

    {
      id: 'c11-e1-q17',
      type: 'short-answer',
      text: 'Theo bảng số liệu: trắng 6, đen 40, xanh 10, trắng bạc 35, vàng kim 12. Tính tổng số kính bán được.',
      options: [],
      correctAnswerIndex: 0,
      answerText: '103',
      explanation: 'Ta có $6 + 40 + 10 + 35 + 12 = 103$.'
    },
    {
      id: 'c11-e1-q18',
      type: 'short-answer',
      text: 'Một hộp có 3 quả bóng: 1 đỏ, 1 xanh, 1 vàng. Viết số kết quả có thể xảy ra khi lấy ngẫu nhiên 1 quả bóng.',
      options: [],
      correctAnswerIndex: 0,
      answerText: '3',
      explanation: 'Có 3 kết quả có thể xảy ra.'
    },
    {
      id: 'c11-e1-q19',
      type: 'short-answer',
      text: 'Lấy bóng 20 lần, xuất hiện bóng đỏ 10 lần. Tính xác suất thực nghiệm lấy được bóng đỏ.',
      options: [],
      correctAnswerIndex: 0,
      answerText: '1/2',
      explanation: 'Ta có $\\dfrac{10}{20} = \\dfrac{1}{2}$.'
    },
    {
      id: 'c11-e1-q20',
      type: 'short-answer',
      text: 'Cho đoạn thẳng AC = 8 cm, điểm B là trung điểm của AC. Tính độ dài AB.',
      options: [],
      correctAnswerIndex: 0,
      answerText: '4',
      explanation: 'Vì B là trung điểm của AC nên $AB = 8 : 2 = 4$.'
    },
    {
      id: 'c11-e1-q21',
      type: 'short-answer',
      text: 'Theo bảng tuổi thọ: thỏ 10, cáo 22, hươu cao cổ 28, cá voi cái 29, sư tử 35, gấu 30. Tính tuổi thọ của sư tử nhiều hơn hươu cao cổ bao nhiêu năm.',
      options: [],
      correctAnswerIndex: 0,
      answerText: '7',
      explanation: 'Ta có $35 - 28 = 7$.'
    },
    {
      id: 'c11-e1-q22',
      type: 'short-answer',
      text: 'Tính giá trị của biểu thức $6^2$.',
      options: [],
      correctAnswerIndex: 0,
      answerText: '36',
      explanation: 'Ta có $6^2 = 6 \\times 6 = 36$.'
    }
  ]
},
{
    id: 'c11-e2',
    title: 'Đề thi số 2',
    description: 'Đề thi ôn tập học kì 2 - phần phân số.',
    questions: [
      {
        id: 'c11-e2-q1',
        type: 'single-choice',
        text: 'Phân số nào dưới đây là phân số tối giản?',
        options: ['$\\dfrac{2}{4}$', '$\\dfrac{3}{9}$', '$\\dfrac{5}{7}$', '$\\dfrac{6}{8}$'],
        correctAnswerIndex: 2,
        explanation: '$\\dfrac{5}{7}$ là phân số tối giản vì 5 và 7 không có ước chung lớn hơn 1.'
      },
      {
        id: 'c11-e2-q2',
        type: 'single-choice',
        text: 'Phân số bằng với $\\dfrac{3}{4}$ là:',
        options: ['$\\dfrac{6}{8}$', '$\\dfrac{9}{16}$', '$\\dfrac{12}{20}$', '$\\dfrac{15}{24}$'],
        correctAnswerIndex: 0,
        explanation: 'Ta có $\\dfrac{3}{4} = \\dfrac{3\\times2}{4\\times2} = \\dfrac{6}{8}$.'
      },
      {
        id: 'c11-e2-q3',
        type: 'single-choice',
        text: 'Trong các phân số sau, phân số nào lớn nhất?',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$', '$\\dfrac{3}{5}$', '$\\dfrac{4}{9}$'],
        correctAnswerIndex: 1,
        explanation: 'So sánh các phân số: $\\dfrac{2}{3}$ lớn hơn $\\dfrac{1}{2}, \\dfrac{3}{5}, \\dfrac{4}{9}$.'
      },
      {
        id: 'c11-e2-q4',
        type: 'single-choice',
        text: 'Kết quả của phép cộng $\\dfrac{1}{3} + \\dfrac{1}{6}$ là:',
        options: ['$\\dfrac{2}{9}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$', '$\\dfrac{1}{9}$'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $\\dfrac{1}{3} = \\dfrac{2}{6}$ nên $\\dfrac{1}{3} + \\dfrac{1}{6} = \\dfrac{2}{6} + \\dfrac{1}{6} = \\dfrac{3}{6} = \\dfrac{1}{2}$.'
      },
      {
        id: 'c11-e2-q5',
        type: 'single-choice',
        text: 'Kết quả của phép trừ $\\dfrac{5}{6} - \\dfrac{1}{3}$ là:',
        options: ['$\\dfrac{4}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$', '$\\dfrac{1}{6}$'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $\\dfrac{1}{3} = \\dfrac{2}{6}$ nên $\\dfrac{5}{6} - \\dfrac{2}{6} = \\dfrac{3}{6} = \\dfrac{1}{2}$.'
      },
      {
        id: 'c11-e2-q6',
        type: 'single-choice',
        text: 'Kết quả của phép nhân $\\dfrac{2}{5} \\times \\dfrac{3}{4}$ là:',
        options: ['$\\dfrac{6}{20}$', '$\\dfrac{5}{7}$', '$\\dfrac{6}{9}$', '$\\dfrac{1}{10}$'],
        correctAnswerIndex: 0,
        explanation: 'Ta có $\\dfrac{2}{5} \\times \\dfrac{3}{4} = \\dfrac{2\\times3}{5\\times4} = \\dfrac{6}{20} = \\dfrac{3}{10}$.'
      },
      {
        id: 'c11-e2-q7',
        type: 'single-choice',
        text: 'Kết quả của phép chia $\\dfrac{3}{5} : \\dfrac{2}{7}$ là:',
        options: ['$\\dfrac{6}{35}$', '$\\dfrac{21}{10}$', '$\\dfrac{14}{15}$', '$\\dfrac{3}{35}$'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $\\dfrac{3}{5} : \\dfrac{2}{7} = \\dfrac{3}{5} \\times \\dfrac{7}{2} = \\dfrac{21}{10}$.'
      },
      {
        id: 'c11-e2-q8',
        type: 'single-choice',
        text: 'Hỗn số $2\\dfrac{1}{3}$ được viết dưới dạng phân số là:',
        options: ['$\\dfrac{5}{3}$', '$\\dfrac{6}{3}$', '$\\dfrac{7}{3}$', '$\\dfrac{8}{3}$'],
        correctAnswerIndex: 2,
        explanation: 'Ta có $2\\dfrac{1}{3} = \\dfrac{2\\times3+1}{3} = \\dfrac{7}{3}$.'
      },
      {
        id: 'c11-e2-q9',
        type: 'single-choice',
        text: 'Phân số nào nhỏ hơn 1?',
        options: ['$\\dfrac{7}{5}$', '$\\dfrac{9}{9}$', '$\\dfrac{4}{7}$', '$\\dfrac{11}{10}$'],
        correctAnswerIndex: 2,
        explanation: 'Phân số nhỏ hơn 1 có tử số nhỏ hơn mẫu số. Ở đây $\\dfrac{4}{7}$ nhỏ hơn 1.'
      },
      {
        id: 'c11-e2-q10',
        type: 'single-choice',
        text: 'Rút gọn phân số $\\dfrac{18}{24}$ ta được:',
        options: ['$\\dfrac{3}{4}$', '$\\dfrac{2}{3}$', '$\\dfrac{4}{3}$', '$\\dfrac{9}{24}$'],
        correctAnswerIndex: 0,
        explanation: 'Chia cả tử và mẫu cho 6: $\\dfrac{18}{24} = \\dfrac{3}{4}$.'
      },
      {
        id: 'c11-e2-q11',
        type: 'single-choice',
        text: 'Sắp xếp đúng theo thứ tự từ bé đến lớn là:',
        options: [
          '$\\dfrac{1}{2};\\dfrac{2}{3};\\dfrac{3}{4}$',
          '$\\dfrac{3}{4};\\dfrac{2}{3};\\dfrac{1}{2}$',
          '$\\dfrac{2}{3};\\dfrac{1}{2};\\dfrac{3}{4}$',
          '$\\dfrac{3}{4};\\dfrac{1}{2};\\dfrac{2}{3}$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Ta có $\\dfrac{1}{2} < \\dfrac{2}{3} < \\dfrac{3}{4}$.'
      },
      {
        id: 'c11-e2-q12',
        type: 'single-choice',
        text: 'Một lớp có $\\dfrac{3}{5}$ số học sinh là nữ. Phân số chỉ số học sinh nam là:',
        options: ['$\\dfrac{2}{5}$', '$\\dfrac{3}{5}$', '$\\dfrac{1}{5}$', '$\\dfrac{4}{5}$'],
        correctAnswerIndex: 0,
        explanation: 'Tổng số học sinh là 1 nên số học sinh nam là $1 - \\dfrac{3}{5} = \\dfrac{2}{5}$.'
      },

      {
        id: 'c11-e2-q13',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về phân số.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Phân số $\\dfrac{4}{8}$ bằng phân số $\\dfrac{1}{2}$.',
          'Phân số $\\dfrac{7}{6}$ nhỏ hơn 1.',
          'Nếu nhân cả tử và mẫu của một phân số với cùng một số khác 0 thì được một phân số bằng nó.',
          'Phân số $\\dfrac{5}{5}$ bằng 1.'
        ],
        trueFalseAnswers: [true, false, true, true],
        explanation: '$\\dfrac{4}{8}=\\dfrac{1}{2}$; $\\dfrac{7}{6}>1$; tính chất cơ bản của phân số; $\\dfrac{5}{5}=1$.'
      },
      {
        id: 'c11-e2-q14',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phép tính sau.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          '$\\dfrac{1}{4} + \\dfrac{1}{4} = \\dfrac{2}{8}$.',
          '$\\dfrac{2}{3} - \\dfrac{1}{3} = \\dfrac{1}{3}$.',
          '$\\dfrac{2}{5} \\times 3 = \\dfrac{6}{5}$.',
          '$\\dfrac{3}{7} : \\dfrac{3}{7} = 1$.'
        ],
        trueFalseAnswers: [false, true, true, true],
        explanation: '$\\dfrac{1}{4}+\\dfrac{1}{4}=\\dfrac{2}{4}=\\dfrac{1}{2}$, không phải $\\dfrac{2}{8}$. Các phát biểu còn lại đều đúng.'
      },
      {
        id: 'c11-e2-q15',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về so sánh phân số.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Trong hai phân số cùng mẫu số, phân số nào có tử số lớn hơn thì lớn hơn.',
          '$\\dfrac{3}{8} > \\dfrac{5}{8}$.',
          '$\\dfrac{2}{3} < 1$.',
          '$\\dfrac{9}{4} > 1$.'
        ],
        trueFalseAnswers: [true, false, true, true],
        explanation: 'Quy tắc so sánh phân số cùng mẫu số; $3<5$ nên $\\dfrac{3}{8}<\\dfrac{5}{8}$.'
      },
      {
        id: 'c11-e2-q16',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về hỗn số và phân số.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          '$1\\dfrac{2}{5} = \\dfrac{7}{5}$.',
          '$\\dfrac{11}{4}$ viết dưới dạng hỗn số là $2\\dfrac{3}{4}$.',
          '$2\\dfrac{1}{2}$ nhỏ hơn 2.',
          'Phân số $\\dfrac{0}{7}$ bằng 0.'
        ],
        trueFalseAnswers: [true, true, false, true],
        explanation: '$1\\dfrac{2}{5}=\\dfrac{1\\times5+2}{5}=\\dfrac{7}{5}$; $\\dfrac{11}{4}=2\\dfrac{3}{4}$; $2\\dfrac{1}{2}>2$; $\\dfrac{0}{7}=0$.'
      },

      {
        id: 'c11-e2-q17',
        type: 'short-answer',
        text: 'Rút gọn phân số $\\dfrac{12}{18}$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '2/3',
        explanation: 'Chia cả tử và mẫu cho 6: $\\dfrac{12}{18}=\\dfrac{2}{3}$.'
      },
      {
        id: 'c11-e2-q18',
        type: 'short-answer',
        text: 'Tính: $\\dfrac{1}{2}+\\dfrac{1}{4}$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '3/4',
        explanation: 'Ta có $\\dfrac{1}{2}=\\dfrac{2}{4}$ nên $\\dfrac{2}{4}+\\dfrac{1}{4}=\\dfrac{3}{4}$.'
      },
      {
        id: 'c11-e2-q19',
        type: 'short-answer',
        text: 'Tính: $\\dfrac{5}{6}-\\dfrac{1}{6}$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '2/3',
        explanation: '$\\dfrac{5}{6}-\\dfrac{1}{6}=\\dfrac{4}{6}=\\dfrac{2}{3}$.'
      },
      {
        id: 'c11-e2-q20',
        type: 'short-answer',
        text: 'Tính: $\\dfrac{3}{4}\\times\\dfrac{2}{3}$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '1/2',
        explanation: '$\\dfrac{3}{4}\\times\\dfrac{2}{3}=\\dfrac{6}{12}=\\dfrac{1}{2}$.'
      },
      {
        id: 'c11-e2-q21',
        type: 'short-answer',
        text: 'Tính: $\\dfrac{4}{5}:2$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '2/5',
        explanation: '$\\dfrac{4}{5}:2 = \\dfrac{4}{5}\\times\\dfrac{1}{2}=\\dfrac{4}{10}=\\dfrac{2}{5}$.'
      },
      {
        id: 'c11-e2-q22',
        type: 'short-answer',
        text: 'Viết hỗn số $3\\dfrac{1}{2}$ dưới dạng phân số.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '7/2',
        explanation: 'Ta có $3\\dfrac{1}{2}=\\dfrac{3\\times2+1}{2}=\\dfrac{7}{2}$.'
      }
    ]
  },
  {
    id: 'c11-e3',
    title: 'Đề thi số 3',
    description: 'Đề thi ôn tập tổng hợp.',
    questions: [
      // dán đề thi số 3 vào đây
    ]
  },
  {
    id: 'c11-e4',
    title: 'Đề thi số 4',
    description: 'Đề thi ôn tập tổng hợp.',
    questions: [
      // dán đề thi số 4 vào đây
    ]
  },
  {
    id: 'c11-e5',
    title: 'Đề thi số 5',
    description: 'Đề thi ôn tập tổng hợp.',
    questions: [
      // dán đề thi số 5 vào đây
    ]
  }
];