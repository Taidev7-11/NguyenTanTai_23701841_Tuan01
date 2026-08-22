"use client"; // su dung client component vi can state va tuong tac nguoi dung

import { useState } from "react"; // hook quan ly trang thai output
import Link from "next/link"; // the link chuyen ve trang chu
import { useParams } from "next/navigation"; // hook lay dynamic id tu url
import { exercises } from "@/exercises"; // danh sach bai tap

export default function ExerciseDetailPage() {
  const params = useParams(); // lay gia tri param tren url
  const exerciseId = Number(params.id); // ep kieu id ve dang so
  
  // tim kiem bai tap theo id
  const exercise = exercises.find((item) => item.id === exerciseId);
  
  // state luu tru ket qua khi bam nut chay
  const [output, setOutput] = useState<string | null>(null);

  // neu nguoi dung nhap id khong ton tai (vi du 99)
  if (!exercise) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-red-500">Khong tim thay bai tap hop le!</h2>
        <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
          &larr; Quay ve trang chu
        </Link>
      </div>
    );
  }

  // ham xu ly khi bam chay code
  const handleRun = () => {
    try {
      const result = exercise.run(); // chay logic cua bai tap
      setOutput(result); // set ket qua vao state de hien thi
    } catch (error) {
      setOutput("Loi khi thuc thi: " + String(error)); // bat loi neu code co bug
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* nut quay lai */}
      <Link href="/" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mb-6">
        &larr; Quay lai danh sach bai tap
      </Link>

      {/* the chua noi dung bai tap */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {/* tieu de bai tap */}
        <div className="border-b pb-4 mb-4">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
            Bai {exercise.id}
          </span>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">{exercise.title}</h1>
          <p className="text-gray-600 mt-1">{exercise.description}</p>
        </div>

        {/* khoi hien thi ma nguon */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
            Ma nguon TypeScript:
          </h2>
          <pre className="bg-slate-900 text-slate-100 p-4 rounded-md overflow-x-auto text-sm font-mono leading-relaxed">
            <code>{exercise.code}</code>
          </pre>
        </div>

        {/* nut bam thuc thi code */}
        <button
          onClick={handleRun} // bat su kien click
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-md transition"
        >
          Chay thu ket qua (Run)
        </button>

        {/* phan hien thi ket qua console/output */}
        {output !== null && (
          <div className="mt-6 border-t pt-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
              Ket qua dau ra (Output):
            </h2>
            <pre className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-4 rounded-md text-sm font-mono whitespace-pre-wrap">
              {output}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}