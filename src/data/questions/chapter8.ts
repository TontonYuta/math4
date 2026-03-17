import { Topic } from '../../types';
import { chapter8ExamTopics } from './chapter8-exams';

export const chapter8CoreTopics: Topic[] = [
  { id: 'c8-t1', title: 'Bài 38: Nhân với số có một chữ số', description: 'Cách đặt tính và nhân số lớn với số có 1 chữ số.', youtubeUrl: '', questions: [] },
  { id: 'c8-t2', title: 'Bài 39: Chia cho số có một chữ số', description: 'Thực hiện phép chia và tìm số dư.', youtubeUrl: '', questions: [] },
  { id: 'c8-t3', title: 'Bài 40: Tính chất giao hoán và kết hợp của phép nhân', description: 'Đổi chỗ và gộp các thừa số để tính nhanh.', youtubeUrl: '', questions: [] },
  { id: 'c8-t4', title: 'Bài 41: Nhân, chia với 10, 100, 1 000, ...', description: 'Mẹo thêm hoặc bớt chữ số 0 khi nhân, chia tròn chục.', youtubeUrl: '', questions: [] },
  { id: 'c8-t5', title: 'Bài 42: Tính chất phân phối của phép nhân đối với phép cộng', description: 'Nhân một số với một tổng.', youtubeUrl: '', questions: [] },
  { id: 'c8-t6', title: 'Bài 43: Nhân với số có hai chữ số', description: 'Cách đặt tính và tính các tích riêng.', youtubeUrl: '', questions: [] },
  { id: 'c8-t7', title: 'Bài 44: Chia cho số có hai chữ số', description: 'Thực hiện phép chia cho số lớn.', youtubeUrl: '', questions: [] },
  { id: 'c8-t8', title: 'Bài 45: Thực hành và trải nghiệm ước lượng trong tính toán', description: 'Làm tròn số để nhẩm nhanh kết quả.', youtubeUrl: '', questions: [] },
  { id: 'c8-t9', title: 'Bài 46: Tìm số trung bình cộng', description: 'Cách chia đều một tổng cho nhiều số hạng.', youtubeUrl: '', questions: [] },
  { id: 'c8-t10', title: 'Bài 47: Bài toán liên quan đến rút về đơn vị', description: 'Giải bài toán đố qua bước tìm giá trị một phần.', youtubeUrl: '', questions: [] },
  { id: 'c8-t11', title: 'Bài 48: Luyện tập chung', description: 'Ôn tập phép nhân, phép chia và giải toán.', youtubeUrl: '', questions: [] }
];

export const chapter8Topics: Topic[] = [...chapter8CoreTopics, ...chapter8ExamTopics];