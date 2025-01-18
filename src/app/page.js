"use client";
import HomePage from '@/components/HomePage/HomePage/HomePage';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  return (
    <div className="h-screen flex justify-between">
      <HomePage />
    </div>
  );
}
