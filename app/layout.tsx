import type { Metadata } from "next"; // type dinh nghia metadata cho trang
import "./globals.css"; // nhung file css toan cuc

// thiet lap thong tin the tieu de va mo ta cua trang
export const metadata: Metadata = {
  title: "Bai Tap TypeScript OOP - Nguyen Tan Tai",
  description: "Tong hop 30 bai tap TypeScript Lap trinh huong doi tuong",
};

// layout chung cho tat ca cac trang
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        {/* thanh header co dinh tren cung */}
        <header className="bg-white border-b shadow-sm py-4 px-8 mb-6 sticky top-0 z-10">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <span className="font-bold text-lg text-blue-600">TypeScript OOP - 30 Bai Tap</span>
            <span className="text-sm text-gray-500">MSSV: 23701841</span>
          </div>
        </header>

        {/* phan noi dung dong cua tung trang */}
        <main className="max-w-6xl mx-auto px-4 pb-12">
          {children}
        </main>
      </body>
    </html>
  );
}