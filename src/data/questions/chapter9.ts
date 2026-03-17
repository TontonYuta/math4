import { Topic } from '../../types';
import { chapter9ExamTopics } from './chapter9-exams';

export const chapter9CoreTopics: Topic[] = [
  { id: 'c9-t1', title: 'Bài 49: Dãy số liệu thống kê', description: 'Cách đọc, thu thập và ghi chép số liệu thành dãy.', youtubeUrl: '', questions: [] },
  { id: 'c9-t2', title: 'Bài 50: Biểu đồ cột', description: 'Quan sát và phân tích số liệu từ biểu đồ cột.', youtubeUrl: '', questions: [] },
  { id: 'c9-t3', title: 'Bài 51: Số lần xuất hiện của một sự kiện', description: 'Đếm số lần một sự kiện có thể xảy ra trong thực tế.', youtubeUrl: '', questions: [] },
  { id: 'c9-t4', title: 'Bài 52: Luyện tập chung', description: 'Ôn tập về biểu đồ và số lần xuất hiện.', youtubeUrl: '', questions: [] }
];

export const chapter9Topics: Topic[] = [...chapter9CoreTopics, ...chapter9ExamTopics];