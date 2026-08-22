import Link from "next/link"; // the dieu huong trang cua nextjs
import { exercises } from "@/exercises"; // danh sach data 30 bai tap

export default function HomePage() {
  return (
    <div>
      {/* tieu de trang chu */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800">Danh Sach 30 Bai Tap TypeScript</h1>
        <p className="text-gray-600 mt-2">Chon mot bai tap ben duoi de xem ma nguon va chay ket qua</p>
      </div>

      {/* danh sach 30 bai tap dang luoi (grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exercises.map((item) => (
          <Link
            key={item.id} // key duy nhat theo id
            href={`/exercises/${item.id}`} // duong dan chi tiet bai tap
            className="block p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500 transition duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
                Bai {item.id}
              </span>
            </div>
            <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">{item.title}</h2>
            <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}