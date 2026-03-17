import { Topic } from '../../types';
import { chapter2ExamTopics } from './chapter2-exams';

export const chapter2CoreTopics: Topic[] = [
  {
    id: 'c2-t1',
    title: 'Bài 7: Đo góc, đơn vị đo góc',
    description: 'Làm quen với thước đo độ và cách đo góc.',
    youtubeUrl: '',
    questions: [] // Để trống để điền sau
  },
  {
    id: 'c2-t2',
    title: 'Bài 8: Góc nhọn, góc tù, góc bẹt',
    description: 'Nhận biết và phân biệt các loại góc cơ bản.',
    youtubeUrl: '',
    questions: [] 
  },
  {
    id: 'c2-t3',
    title: 'Bài 9: Luyện tập chung',
    description: 'Ôn tập tổng hợp về cách đo và gọi tên góc.',
    youtubeUrl: '',
    questions: [] 
  }
];

export const chapter2Topics: Topic[] = [
  ...chapter2CoreTopics,
  ...chapter2ExamTopics
];