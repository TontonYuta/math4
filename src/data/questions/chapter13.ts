import { Topic } from '../../types';
import { chapter13ExamTopics } from './chapter13-exams';

export const chapter13CoreTopics: Topic[] = [
  { id: 'c13-t1', title: 'Bài 67: Ôn tập số tự nhiên', description: 'Đọc, viết, so sánh số đến lớp triệu.', youtubeUrl: '', questions: [] },
  { id: 'c13-t2', title: 'Bài 68: Ôn tập phép tính với số tự nhiên', description: 'Cộng, trừ, nhân, chia số tự nhiên.', youtubeUrl: '', questions: [] },
  { id: 'c13-t3', title: 'Bài 69: Ôn tập phân số', description: 'Khái niệm, rút gọn, quy đồng và so sánh.', youtubeUrl: '', questions: [] },
  { id: 'c13-t4', title: 'Bài 70: Ôn tập phép tính với phân số', description: 'Thực hiện 4 phép tính với phân số.', youtubeUrl: '', questions: [] },
  { id: 'c13-t5', title: 'Bài 71: Ôn tập hình học và đo lường', description: 'Ôn tập về góc, đường thẳng, hình phẳng và đơn vị đo.', youtubeUrl: '', questions: [] },
  { id: 'c13-t6', title: 'Bài 72: Ôn tập một số yếu tố thống kê và xác suất', description: 'Ôn tập dãy số liệu và biểu đồ cột.', youtubeUrl: '', questions: [] },
  { id: 'c13-t7', title: 'Bài 73: Ôn tập chung', description: 'Đề kiểm tra thử tổng hợp kiến thức cả năm học.', youtubeUrl: '', questions: [] }
];

export const chapter13Topics: Topic[] = [...chapter13CoreTopics, ...chapter13ExamTopics];