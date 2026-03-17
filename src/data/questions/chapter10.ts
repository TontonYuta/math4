import { Topic } from '../../types';
import { chapter10ExamTopics } from './chapter10-exams';

export const chapter10CoreTopics: Topic[] = [
  { id: 'c10-t1', title: 'Bài 53: Khái niệm phân số', description: 'Tử số, mẫu số và ý nghĩa của phân số.', youtubeUrl: '', questions: [] },
  { id: 'c10-t2', title: 'Bài 54: Phân số và phép chia số tự nhiên', description: 'Viết kết quả phép chia dưới dạng phân số.', youtubeUrl: '', questions: [] },
  { id: 'c10-t3', title: 'Bài 55: Tính chất cơ bản của phân số', description: 'Nhân, chia tử và mẫu cho cùng một số.', youtubeUrl: '', questions: [] },
  { id: 'c10-t4', title: 'Bài 56: Rút gọn phân số', description: 'Đưa phân số về dạng tối giản (không thể chia nhỏ hơn).', youtubeUrl: '', questions: [] },
  { id: 'c10-t5', title: 'Bài 57: Quy đồng mẫu số các phân số', description: 'Đưa các phân số về cùng một mẫu số chung.', youtubeUrl: '', questions: [] },
  { id: 'c10-t6', title: 'Bài 58: So sánh phân số', description: 'Cách so sánh hai phân số cùng mẫu hoặc khác mẫu.', youtubeUrl: '', questions: [] },
  { id: 'c10-t7', title: 'Bài 59: Luyện tập chung', description: 'Ôn tập tổng hợp về khái niệm và tính chất phân số.', youtubeUrl: '', questions: [] }
];

export const chapter10Topics: Topic[] = [...chapter10CoreTopics, ...chapter10ExamTopics];