import { Chapter } from '../types';
import { chapter1Topics } from './questions/chapter1';
import { chapter2Topics } from './questions/chapter2';
import { chapter3Topics } from './questions/chapter3';
import { chapter4Topics } from './questions/chapter4';
import { chapter5Topics } from './questions/chapter5';
import { chapter6Topics } from './questions/chapter6';
import { chapter7Topics } from './questions/chapter7';
import { chapter8Topics } from './questions/chapter8';
import { chapter9Topics } from './questions/chapter9';
import { chapter10Topics } from './questions/chapter10';
import { chapter11Topics } from './questions/chapter11';
// Thêm 2 file cho đủ 13 chủ đề
import { chapter12Topics } from './questions/chapter12';
import { chapter13Topics } from './questions/chapter13';

export const chapters: Chapter[] = [
  {
    id: 'c1',
    title: 'CHỦ ĐỀ 1: ÔN TẬP VÀ BỔ SUNG',
    description: 'Ôn tập số đến 100 000, số chẵn lẻ và biểu thức chứa chữ.',
    topics: chapter1Topics,
  },
  {
    id: 'c2',
    title: 'CHỦ ĐỀ 2: GÓC VÀ ĐƠN VỊ ĐO GÓC',
    description: 'Đo góc, làm quen với góc nhọn, góc tù và góc bẹt.',
    topics: chapter2Topics,
  },
  {
    id: 'c3',
    title: 'CHỦ ĐỀ 3: SỐ CÓ NHIỀU CHỮ SỐ',
    description: 'Số có sáu chữ số, lớp triệu, làm tròn và dãy số tự nhiên.',
    topics: chapter3Topics,
  },
  {
    id: 'c4',
    title: 'CHỦ ĐỀ 4: MỘT SỐ ĐƠN VỊ ĐO ĐẠI LƯỢNG',
    description: 'Yến, tạ, tấn, mét vuông, giây và thế kỉ.',
    topics: chapter4Topics,
  },
  {
    id: 'c5',
    title: 'CHỦ ĐỀ 5: PHÉP CỘNG VÀ PHÉP TRỪ',
    description: 'Cộng trừ số lớn và bài toán tìm hai số khi biết tổng và hiệu.',
    topics: chapter5Topics,
  },
  {
    id: 'c6',
    title: 'CHỦ ĐỀ 6: ĐƯỜNG THẲNG VUÔNG GÓC VÀ SONG SONG',
    description: 'Hai đường thẳng vuông góc, song song, hình bình hành, hình thoi.',
    topics: chapter6Topics,
  },
  {
    id: 'c7',
    title: 'CHỦ ĐỀ 7: ÔN TẬP HỌC KÌ 1',
    description: 'Ôn tập tổng hợp về số, phép tính, hình học và đo lường.',
    topics: chapter7Topics,
  },
  {
    id: 'c8',
    title: 'CHỦ ĐỀ 8: PHÉP NHÂN VÀ PHÉP CHIA',
    description: 'Nhân chia với số có một, hai chữ số và tìm số trung bình cộng.',
    topics: chapter8Topics,
  },
  {
    id: 'c9',
    title: 'CHỦ ĐỀ 9: THỐNG KÊ VÀ XÁC SUẤT',
    description: 'Dãy số liệu thống kê, biểu đồ cột và sự kiện khả năng xảy ra.',
    topics: chapter9Topics,
  },
  {
    id: 'c10',
    title: 'CHỦ ĐỀ 10: PHÂN SỐ',
    description: 'Khái niệm, rút gọn, quy đồng và so sánh các phân số.',
    topics: chapter10Topics,
  },
  {
    id: 'c11',
    title: 'CHỦ ĐỀ 11: PHÉP CỘNG, PHÉP TRỪ PHÂN SỐ',
    description: 'Thực hiện phép cộng và phép trừ hai phân số.',
    topics: chapter11Topics,
  },
  {
    id: 'c12',
    title: 'CHỦ ĐỀ 12: PHÉP NHÂN, PHÉP CHIA PHÂN SỐ',
    description: 'Nhân, chia phân số và bài toán tìm phân số của một số.',
    topics: chapter12Topics,
  },
  {
    id: 'c13',
    title: 'CHỦ ĐỀ 13: ÔN TẬP CUỐI NĂM',
    description: 'Ôn tập tổng hợp toàn bộ kiến thức Toán lớp 4.',
    topics: chapter13Topics,
  }
];