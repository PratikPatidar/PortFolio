'use client';

import React, { useEffect, useState } from 'react';
import { apiUrl } from '@/lib/data';

const CourseList = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          setError(true);
          return;
        }
        const result = await response.json();
        // The API returns data in a structured way: { data: { category: [courses] } }
        // We just want to check if there's ANY data.
        const allCourses = result.data ? Object.values(result.data).flat() : [];
        setCourses(allCourses);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="text-center py-10">Loading Courses...</div>;
  if (error) return <div className="text-center py-10 text-red-500 font-bold text-4xl">404 - API Error</div>;
  if (courses.length === 0) return <div className="text-center py-10 text-white font-bold text-2xl">Data Not Found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {courses.slice(0, 6).map((course: any) => (
        <div key={course.id} className="bg-white/5 border border-white/10 p-4 rounded-xl">
          <img src={course.image.url} alt={course.title} className="w-full h-32 object-cover rounded-lg mb-4" />
          <h3 className="font-bold text-sm mb-2">{course.title}</h3>
          <p className="text-xs text-white/50 line-clamp-2">{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
