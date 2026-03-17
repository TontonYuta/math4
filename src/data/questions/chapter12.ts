import { Topic } from '../../types';
import { chapter12ExamTopics } from './chapter12-exams';

export const chapter12CoreTopics: Topic[] = [
  { id: 'c12-t1', title: 'Bài 63: Phép nhân phân số', description: 'Lấy tử nhân tử, mẫu nhân mẫu.', youtubeUrl: '', questions: [] },
  { id: 'c12-t2', title: 'Bài 64: Phép chia phân số', description: 'Nhân với phân số đảo ngược.', youtubeUrl: '', questions: [] },
  { id: 'c12-t3', title: 'Bài 65: Tìm phân số của một số', description: 'Giải bài toán đố tìm một phần của một số lượng cho trước.', youtubeUrl: '', questions: [] },
  { id: 'c12-t4', title: 'Bài 66: Luyện tập chung', description: 'Ôn tập nhân, chia phân số.', youtubeUrl: '', questions: [] }
];

export const chapter12Topics: Topic[] = [...chapter12CoreTopics, ...chapter12ExamTopics];