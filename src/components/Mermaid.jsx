import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  theme: 'base',
  themeVariables: {
    primaryColor: '#0b111c',
    primaryTextColor: '#e5e7eb',
    primaryBorderColor: '#14b8a6',
    lineColor: '#14b8a6',
    secondaryColor: '#0f1623',
    tertiaryColor: '#0f1623'
  }
});

export default function Mermaid({ chart }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.render(`mermaid-${Math.random().toString(36).substring(7)}`, chart).then((result) => {
        ref.current.innerHTML = result.svg;
      });
    }
  }, [chart]);

  return <div className="flex justify-center my-6" ref={ref} />;
}
