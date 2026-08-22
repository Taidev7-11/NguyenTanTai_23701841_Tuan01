// dinh nghia cau truc du lieu cho moi bai tap
export interface Exercise {
    id: number; // ma so bai tap
    title: string; // tieu de bai tap
    description: string; // mo ta de bai
    code: string; // chuoi code mau de hien thi len giao dien
    run: () => string; // ham thuc thi logic va tra ve ket qua chuoi
  }