import { Topic } from '../../types';
import { chapter11ExamTopics } from './chapter11-exams';

export const chapter11CoreTopics: Topic[] = [
  { id: 'c11-t1', title: 'Bài 60: Phép cộng phân số', description: 'Cộng phân số cùng mẫu và khác mẫu.', youtubeUrl: '', questions: [] },
  { id: 'c11-t2', title: 'Bài 61: Phép trừ phân số', description: 'Trừ phân số cùng mẫu và khác mẫu.', youtubeUrl: '', questions: [] },
  { id: 'c11-t3', title: 'Bài 62: Luyện tập chung', description: 'Ôn tập tính toán cộng, trừ phân số.', youtubeUrl: '', questions: [] }
];

export const chapter11Topics: Topic[] = [...chapter11CoreTopics, ...chapter11ExamTopics];