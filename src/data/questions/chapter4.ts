import { Topic } from '../../types';
import { chapter4ExamTopics } from './chapter4-exams';

export const chapter4CoreTopics: Topic[] = [
  {
    id: 'c4-t1',
    title: 'Bài 17: Yến, tạ, tấn',
    description: 'Làm quen và chuyển đổi các đơn vị đo khối lượng lớn.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c4-t2',
    title: 'Bài 18: Đề-xi-mét vuông, mét vuông, mi-li-mét vuông',
    description: 'Các đơn vị đo diện tích cơ bản.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c4-t3',
    title: 'Bài 19: Giây, thế kỉ',
    description: 'Đơn vị đo thời gian nhỏ nhất và lớn nhất.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c4-t4',
    title: 'Bài 20: Thực hành và trải nghiệm sử dụng một số đơn vị đo đại lượng',
    description: 'Ứng dụng đo lường vào thực tế.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c4-t5',
    title: 'Bài 21: Luyện tập chung',
    description: 'Ôn tập tổng hợp về khối lượng, diện tích và thời gian.',
    youtubeUrl: '',
    questions: []
  }
];

export const chapter4Topics: Topic[] = [
  ...chapter4CoreTopics,
  ...chapter4ExamTopics
];