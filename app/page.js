import Image from "next/image";
import React from 'react'
import Link from 'next/link'
import Hero from '@/app/components/hero/Hero'
import ProductionsList from "@/app/components/production/ProductionsList"
import AdvantageList from "@/app/components/advantage/AdvantageList";
import GuaranteeList from "@/app/components/guarantee/GuaranteeList";

export default function Home() {
  return (
    <main>
        <Hero />
        <GuaranteeList />
        <AdvantageList />
        <ProductionsList />
    </main>
  )
}
