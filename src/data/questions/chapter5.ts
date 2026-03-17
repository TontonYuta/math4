import { Topic } from '../../types';
import { chapter5ExamTopics } from './chapter5-exams';

export const chapter5CoreTopics: Topic[] = [
  {
    id: 'c5-t1',
    title: 'Bài 22: Phép cộng các số có nhiều chữ số',
    description: 'Đặt tính và tính tổng các số lớn.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c5-t2',
    title: 'Bài 23: Phép trừ các số có nhiều chữ số',
    description: 'Đặt tính và tính hiệu các số lớn.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c5-t3',
    title: 'Bài 24: Tính chất giao hoán và kết hợp của phép cộng',
    description: 'Đổi chỗ và gộp các số để tính nhanh.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c5-t4',
    title: 'Bài 25: Tìm hai số biết tổng và hiệu của hai số đó',
    description: 'Giải bài toán đố dạng tổng - hiệu.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c5-t5',
    title: 'Bài 26: Luyện tập chung',
    description: 'Ôn tập phép tính và giải toán.',
    youtubeUrl: '',
    questions: []
  }
];

export const chapter5Topics: Topic[] = [
  ...chapter5CoreTopics,
  ...chapter5ExamTopics
];