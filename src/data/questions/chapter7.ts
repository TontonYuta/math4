import { Topic } from '../../types';
import { chapter7ExamTopics } from './chapter7-exams';

export const chapter7CoreTopics: Topic[] = [
  {
    id: 'c7-t1',
    title: 'Bài 33: Ôn tập các số đến lớp triệu',
    description: 'Củng cố cách đọc, viết và so sánh số.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c7-t2',
    title: 'Bài 34: Ôn tập phép cộng, phép trừ',
    description: 'Luyện tập đặt tính và tính nhanh.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c7-t3',
    title: 'Bài 35: Ôn tập hình học',
    description: 'Nhớ lại góc, đường thẳng song song, vuông góc và các hình.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c7-t4',
    title: 'Bài 36: Ôn tập đo lường',
    description: 'Chuyển đổi các đơn vị đo khối lượng, diện tích, thời gian.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c7-t5',
    title: 'Bài 37: Ôn tập chung',
    description: 'Đề kiểm tra thử tổng hợp kiến thức Học kì 1.',
    youtubeUrl: '',
    questions: []
  }
];

export const chapter7Topics: Topic[] = [
  ...chapter7CoreTopics,
  ...chapter7ExamTopics
];