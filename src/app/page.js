"use client";
import HomePage from '@/components/HomePage/HomePage/HomePage';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useRouter } from 'next/navigation';
import Login from '@/components/Login/Login';

export default function Home() {
  // const router = useRouter();
  const { authState } = useSelector((state) => state.persistedReducer.user);
  if (!authState) {
    return <Login />
  }
  return (
    <div className="h-screen w-full flex justify-between">
      <HomePage />
    </div>
  );
}
