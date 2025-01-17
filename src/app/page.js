"use client";
import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  useSelector((state) => console.log(state));
  return (
    <div className="">
      Home Page
    </div>
  );
}
