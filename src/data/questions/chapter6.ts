import { Topic } from '../../types';
import { chapter6ExamTopics } from './chapter6-exams';

export const chapter6CoreTopics: Topic[] = [
  {
    id: 'c6-t1',
    title: 'Bài 27: Hai đường thẳng vuông góc',
    description: 'Nhận biết hai đường thẳng cắt nhau tạo thành góc vuông.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c6-t2',
    title: 'Bài 28: Thực hành vẽ hai đường thẳng vuông góc',
    description: 'Dùng ê-ke để vẽ góc vuông.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c6-t3',
    title: 'Bài 29: Hai đường thẳng song song',
    description: 'Nhận biết hai đường thẳng không bao giờ cắt nhau.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c6-t4',
    title: 'Bài 30: Thực hành vẽ hai đường thẳng song song',
    description: 'Các bước vẽ đường thẳng song song bằng ê-ke và thước thẳng.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c6-t5',
    title: 'Bài 31: Hình bình hành, hình thoi',
    description: 'Nhận biết đặc điểm của hình bình hành và hình thoi.',
    youtubeUrl: '',
    questions: []
  },
  {
    id: 'c6-t6',
    title: 'Bài 32: Luyện tập chung',
    description: 'Ôn tập về đường thẳng và các hình học phẳng.',
    youtubeUrl: '',
    questions: []
  }
];

export const chapter6Topics: Topic[] = [
  ...chapter6CoreTopics,
  ...chapter6ExamTopics
];