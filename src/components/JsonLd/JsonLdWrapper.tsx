"use client";

import JsonLd from './JsonLd';

export default function JsonLdWrapper() {
  return (
    <>
      <JsonLd type="organization" />
      <JsonLd type="localBusiness" />
      <JsonLd type="service" />
    </>
  );
}

