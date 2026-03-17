import { Topic } from '../../types';
import { chapter1ExamTopics } from './chapter1-exams';

export const chapter1CoreTopics: Topic[] = [
  {
    id: 'c1-t1',
    title: 'Bài 1: Ôn tập các số đến 100 000',
    description: 'Đọc, viết số, nhận biết các hàng (chục nghìn, nghìn, trăm, chục, đơn vị) và so sánh số.',
    youtubeUrl: '',
    questions: [
      {
        id: 'q1-1-1',
        text: 'Số "Bảy mươi lăm nghìn không trăm linh tám" được viết là:',
        options: ['75 080', '75 008', '75 800', '70 508'],
        correctAnswerIndex: 1,
        explanation: 'Bảy mươi lăm nghìn (75 000) không trăm linh tám (008), ghép lại là 75 008.'
      },
      {
        id: 'q1-1-2',
        text: 'Chữ số 4 trong số 84 521 thuộc hàng nào?',
        options: ['Hàng nghìn', 'Hàng chục nghìn', 'Hàng trăm', 'Hàng chục'],
        correctAnswerIndex: 0,
        explanation: 'Từ phải sang trái: 1 là đơn vị, 2 là chục, 5 là trăm, 4 là nghìn. Vậy số 4 thuộc hàng nghìn.'
      },
      {
        id: 'q1-1-3',
        text: 'Số liền trước của số 100 000 là số nào?',
        options: ['100 001', '99 990', '99 999', '90 000'],
        correctAnswerIndex: 2,
        explanation: 'Để tìm số liền trước, ta lấy số đó trừ đi 1. 100 000 - 1 = 99 999.'
      },
      {
        id: 'q1-1-4',
        text: 'Số gồm 6 chục nghìn, 3 trăm và 2 đơn vị viết là:',
        options: ['60 302', '63 002', '60 320', '63 200'],
        correctAnswerIndex: 0,
        explanation: 'Số này không có hàng nghìn và hàng chục (bằng 0). Vậy số đó là 60 302.'
      },
      {
        id: 'q1-1-5',
        text: 'Sắp xếp các số sau theo thứ tự từ bé đến lớn: 45 600, 45 060, 46 000, 45 006.',
        options: [
          '45 006, 45 060, 45 600, 46 000',
          '46 000, 45 600, 45 060, 45 006',
          '45 060, 45 006, 45 600, 46 000',
          '45 006, 45 600, 45 060, 46 000'
        ],
        correctAnswerIndex: 0,
        explanation: 'So sánh từng hàng từ trái sang phải, số bé nhất là 45 006, rồi đến 45 060, tiếp theo là 45 600 và lớn nhất là 46 000.'
      }
    ]
  },
  {
    id: 'c1-t2',
    title: 'Bài 2: Phép tính trong phạm vi 100 000',
    description: 'Thực hiện các phép cộng, trừ, nhân, chia với các số có đến 5 chữ số.',
    youtubeUrl: '',
    questions: [
      {
        id: 'q1-2-1',
        text: 'Kết quả của phép tính 25 000 + 14 000 là:',
        options: ['49 000', '39 000', '38 000', '29 000'],
        correctAnswerIndex: 1,
        explanation: 'Ta nhẩm: 25 nghìn + 14 nghìn = 39 nghìn (39 000).'
      },
      {
        id: 'q1-2-2',
        text: 'Kết quả của phép tính 58 400 - 12 100 là:',
        options: ['46 300', '46 500', '45 300', '47 300'],
        correctAnswerIndex: 0,
        explanation: 'Đặt tính thẳng cột và trừ từ phải sang trái: 58400 - 12100 = 46300.'
      },
      {
        id: 'q1-2-3',
        text: 'Kết quả của phép tính 12 000 x 4 là:',
        options: ['48 000', '24 000', '36 000', '60 000'],
        correctAnswerIndex: 0,
        explanation: 'Ta lấy 12 x 4 = 48, sau đó thêm 3 chữ số 0 ở cuối thành 48 000.'
      },
      {
        id: 'q1-2-4',
        text: 'Kết quả của phép tính 36 000 : 6 là:',
        options: ['5 000', '7 000', '6 000', '8 000'],
        correctAnswerIndex: 2,
        explanation: 'Ta lấy 36 : 6 = 6, sau đó thêm 3 chữ số 0 còn lại thành 6 000.'
      },
      {
        id: 'q1-2-5',
        text: 'Tìm x biết: x - 15 000 = 20 000',
        options: ['5 000', '35 000', '30 000', '45 000'],
        correctAnswerIndex: 1,
        explanation: 'Muốn tìm số bị trừ (x), ta lấy hiệu cộng với số trừ. x = 20 000 + 15 000 = 35 000.'
      }
    ]
  },
  {
    id: 'c1-t3',
    title: 'Bài 3: Số chẵn, số lẻ',
    description: 'Nhận biết đặc điểm của số chẵn (tận cùng là 0,2,4,6,8) và số lẻ (tận cùng là 1,3,5,7,9).',
    youtubeUrl: '',
    questions: [
      {
        id: 'q1-3-1',
        text: 'Số nào dưới đây là số chẵn?',
        options: ['12 345', '18 091', '40 568', '99 999'],
        correctAnswerIndex: 2,
        explanation: 'Số chẵn là số có chữ số tận cùng là 0, 2, 4, 6 hoặc 8. Số 40 568 tận cùng là 8 nên là số chẵn.'
      },
      {
        id: 'q1-3-2',
        text: 'Số nào dưới đây là số lẻ?',
        options: ['10 000', '45 230', '78 112', '56 789'],
        correctAnswerIndex: 3,
        explanation: 'Số lẻ là số có chữ số tận cùng là 1, 3, 5, 7 hoặc 9. Số 56 789 tận cùng là 9 nên là số lẻ.'
      },
      {
        id: 'q1-3-3',
        text: 'Số chẵn lớn nhất có ba chữ số là số nào?',
        options: ['999', '998', '100', '990'],
        correctAnswerIndex: 1,
        explanation: 'Số lớn nhất có 3 chữ số là 999 (số lẻ). Lùi lại 1 đơn vị ta được số chẵn lớn nhất là 998.'
      },
      {
        id: 'q1-3-4',
        text: 'Tổng của hai số lẻ luôn là:',
        options: ['Số lẻ', 'Số chẵn', 'Số 0', 'Không xác định được'],
        correctAnswerIndex: 1,
        explanation: 'Ví dụ 3 + 5 = 8. Khi cộng hai số lẻ với nhau, ta luôn nhận được một số chẵn.'
      },
      {
        id: 'q1-3-5',
        text: 'Dãy số nào sau đây chỉ gồm các số chẵn?',
        options: ['2, 4, 6, 7', '10, 20, 30, 45', '12, 14, 16, 18', '1, 3, 5, 7'],
        correctAnswerIndex: 2,
        explanation: 'Dãy 12, 14, 16, 18 có tất cả các số tận cùng là 2, 4, 6, 8 nên đây là dãy số chẵn.'
      }
    ]
  },
  {
    id: 'c1-t4',
    title: 'Bài 4: Biểu thức chứa chữ',
    description: 'Làm quen với việc thay số vào chữ để tính giá trị của biểu thức.',
    youtubeUrl: '',
    questions: [
      {
        id: 'q1-4-1',
        text: 'Giá trị của biểu thức a + 15 với a = 10 là:',
        options: ['20', '25', '30', '15'],
        correctAnswerIndex: 1,
        explanation: 'Thay a = 10 vào biểu thức, ta có phép tính: 10 + 15 = 25.'
      },
      {
        id: 'q1-4-2',
        text: 'Tính giá trị của biểu thức 50 - m với m = 18:',
        options: ['32', '22', '42', '68'],
        correctAnswerIndex: 0,
        explanation: 'Thay m = 18 vào biểu thức, ta tính: 50 - 18 = 32.'
      },
      {
        id: 'q1-4-3',
        text: 'Giá trị của biểu thức a x b với a = 5 và b = 8 là:',
        options: ['13', '45', '40', '35'],
        correctAnswerIndex: 2,
        explanation: 'Thay a = 5 và b = 8, ta tính được: 5 x 8 = 40.'
      },
      {
        id: 'q1-4-4',
        text: 'Chu vi hình vuông có công thức là P = a x 4 (với a là cạnh). Hãy tính P nếu a = 6 cm.',
        options: ['10 cm', '24 cm', '20 cm', '16 cm'],
        correctAnswerIndex: 1,
        explanation: 'Thay a = 6 vào công thức, ta có chu vi P = 6 x 4 = 24 (cm).'
      },
      {
        id: 'q1-4-5',
        text: 'Tính giá trị biểu thức (m + n) x 2 với m = 10, n = 5.',
        options: ['30', '20', '25', '15'],
        correctAnswerIndex: 0,
        explanation: 'Thay số vào ta có (10 + 5) x 2. Tính trong ngoặc trước: 15 x 2 = 30.'
      }
    ]
  },
  {
    id: 'c1-t5',
    title: 'Bài 5: Giải bài toán có ba bước tính',
    description: 'Thực hành tư duy giải quyết vấn đề qua nhiều bước tính toán.',
    youtubeUrl: '',
    questions: [
      {
        id: 'q1-5-1',
        text: 'Mẹ mua 2 hộp bánh, mỗi hộp 50 000 đồng và 1 chai sữa giá 20 000 đồng. Mẹ đưa cô bán hàng 200 000 đồng. Hỏi cô bán hàng phải trả lại mẹ bao nhiêu tiền?',
        options: ['120 000 đồng', '130 000 đồng', '80 000 đồng', '100 000 đồng'],
        correctAnswerIndex: 2,
        explanation: 'Bước 1: Tiền 2 hộp bánh là 50000 x 2 = 100000. Bước 2: Tổng tiền mẹ mua là 100000 + 20000 = 120000. Bước 3: Tiền thừa cô trả lại là 200000 - 120000 = 80 000 đồng.'
      }
      // Bạn có thể thêm các bài toán đố tương tự ở đây
    ]
  }
];

export const chapter1Topics: Topic[] = [
  ...chapter1CoreTopics,
  ...chapter1ExamTopics
];