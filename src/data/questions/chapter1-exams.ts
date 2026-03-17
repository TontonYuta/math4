import { Topic } from '../../types';

export const chapter1ExamTopics: Topic[] = [
  {
    id: 'c1-e1',
    title: 'Đề số 1 - Tổng ôn Chủ đề 1: Ôn tập và bổ sung',
    description: 'Đề luyện tập tổng hợp về số đến 100 000, số chẵn lẻ và biểu thức chữ.',
    questions: [
      {
        id: 'c1-e1-q1',
        type: 'single-choice',
        text: 'Số "Chín mươi nghìn không trăm linh tư" được viết là:',
        options: ['90 004', '90 040', '90 400', '9 004'],
        correctAnswerIndex: 0,
        explanation: 'Chín mươi nghìn (90 000) và không trăm linh tư (004) ghép lại là 90 004.'
      },
      {
        id: 'c1-e1-q2',
        type: 'single-choice',
        text: 'Số nào sau đây là số lẻ?',
        options: ['12 340', '45 678', '99 999', '10 002'],
        correctAnswerIndex: 2,
        explanation: 'Số lẻ có chữ số tận cùng là 1, 3, 5, 7, 9. Số 99 999 tận cùng là 9 nên là số lẻ.'
      },
      {
        id: 'c1-e1-q3',
        type: 'single-choice',
        text: 'Kết quả của phép tính 45 000 + 27 000 là:',
        options: ['62 000', '72 000', '82 000', '70 000'],
        correctAnswerIndex: 1,
        explanation: 'Ta nhẩm 45 nghìn + 27 nghìn = 72 nghìn.'
      },
      {
        id: 'c1-e1-q4',
        type: 'single-choice',
        text: 'Kết quả của phép tính 50 000 - 16 000 là:',
        options: ['34 000', '44 000', '36 000', '24 000'],
        correctAnswerIndex: 0,
        explanation: 'Ta nhẩm 50 nghìn - 16 nghìn = 34 nghìn.'
      },
      {
        id: 'c1-e1-q5',
        type: 'single-choice',
        text: 'Giá trị của biểu thức 15 000 + 5 000 x 3 là:',
        options: ['60 000', '30 000', '45 000', '20 000'],
        correctAnswerIndex: 1,
        explanation: 'Thực hiện phép nhân trước: 5 000 x 3 = 15 000. Sau đó cộng: 15 000 + 15 000 = 30 000.'
      },
      {
        id: 'c1-e1-q6',
        type: 'single-choice',
        text: 'Tính giá trị của biểu thức a x 5 với a = 120.',
        options: ['600', '500', '125', '700'],
        correctAnswerIndex: 0,
        explanation: 'Thay a = 120 vào biểu thức ta có 120 x 5 = 600.'
      },
      {
        id: 'c1-e1-q7',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau:',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Số liền trước của 10 000 là 9 999.',
          'Số 24 568 là số lẻ.',
          'Tổng của hai số lẻ luôn là một số chẵn.',
          'Giá trị của biểu thức m - 5 với m = 20 là 10.'
        ],
        trueFalseAnswers: [true, false, true, false],
        explanation: '10 000 - 1 = 9 999 (Đúng); 24 568 tận cùng là 8 nên là số chẵn (Sai); Lẻ + Lẻ = Chẵn (Đúng); 20 - 5 = 15 chứ không phải 10 (Sai).'
      },
      {
        id: 'c1-e1-q8',
        type: 'short-answer',
        text: 'Tìm x biết: x - 18 = 42',
        options: [],
        correctAnswerIndex: 0,
        answerText: '60',
        explanation: 'Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ. x = 42 + 18 = 60.'
      }
    ]
  },
  {
    id: 'c1-e2',
    title: 'Đề số 2 - Tổng ôn Chủ đề 1: Ôn tập và bổ sung',
    description: 'Đề luyện tập tổng hợp về số đến 100 000, số chẵn lẻ và biểu thức chữ.',
    questions: [
      // dán đề 2 vào đây
    ]
  },
  {
    id: 'c1-e3',
    title: 'Đề số 3 - Tổng ôn Chủ đề 1: Ôn tập và bổ sung',
    description: 'Đề luyện tập tổng hợp về số đến 100 000, số chẵn lẻ và biểu thức chữ.',
    questions: [
      // dán đề 3 vào đây
    ]
  },
  // ... (Tương tự cho các đề từ 4 đến 29) ...
  {
    id: 'c1-e30',
    title: 'Đề số 30 - Tổng ôn Chủ đề 1: Ôn tập và bổ sung',
    description: 'Đề luyện tập tổng hợp về số đến 100 000, số chẵn lẻ và biểu thức chữ.',
    questions: [
      // dán đề 30 vào đây
    ]
  }
];