import { Topic } from '../../types';
import { chapter3ExamTopics } from './chapter3-exams';

export const chapter3CoreTopics: Topic[] = [
  {
    id: 'c3-t1',
    title: 'Bài 10: Số có sáu chữ số. Số 1 000 000',
    description: 'Đọc và viết các số lên đến một triệu.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c3-t2',
    title: 'Bài 11: Hàng và lớp',
    description: 'Phân biệt lớp đơn vị, lớp nghìn và lớp triệu.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c3-t3',
    title: 'Bài 12: Các số trong phạm vi lớp triệu',
    description: 'Luyện tập đọc và viết số lớn trong lớp triệu.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c3-t4',
    title: 'Bài 13: Làm tròn số đến hàng trăm nghìn',
    description: 'Quy tắc làm tròn số lớn để dễ ước lượng.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c3-t5',
    title: 'Bài 14: So sánh các số có nhiều chữ số',
    description: 'Cách so sánh hai số lớn với nhau.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c3-t6',
    title: 'Bài 15: Làm quen với dãy số tự nhiên',
    description: 'Đặc điểm của dãy số tự nhiên liên tiếp.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c3-t7',
    title: 'Bài 16: Luyện tập chung',
    description: 'Ôn tập tổng hợp kiến thức về số có nhiều chữ số.',
    youtubeUrl: '',
    questions: []
  }
];

export const chapter3Topics: Topic[] = [
  ...chapter3CoreTopics,
  ...chapter3ExamTopics
];