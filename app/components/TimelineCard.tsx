"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Heart, Upload } from "lucide-react";

interface Moment {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export function TimelineCard({
  moment,
  index,
}: {
  moment: Moment;
  index: number;
}) {
  const [imageUrl, setImageUrl] = useState<string | null>(moment.imageUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`flex flex-col md:flex-row gap-8 items-center ${
        isLeft ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="relative w-72 h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-pink-300">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={moment.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 288px"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <Camera className="text-pink-400 mb-3" size={48} />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-pink-500 text-white px-4 py-2 rounded-full"
            >
              Agregar foto
            </button>
          </div>
        )}
      </div>

      {/* Text */}
      <div className="bg-white rounded-2xl p-6 shadow-xl max-w-md">
        <h3 className="text-2xl font-bold text-red-600 mb-2">
          {moment.title}
        </h3>
        <p className="text-gray-700">{moment.description}</p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
      />
    </motion.div>
  );
}
