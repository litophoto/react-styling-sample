import { useState } from 'react'
import {
  CSSinJS,
  CSSModules,
  InlineStyle,
  TailwindCss,
  VanilaCSS,
} from './samples'
import { SampleType } from './samples/samples'

export default function App() {
  const [activeStylingSample, setActiveStylingSample] =
    useState<SampleType>('Vanila css')

  const stylingSamples = [
    'Vanila css',
    'tailwind css',
    'CSS in JS',
    'css modules',
    'inline style',
  ] as SampleType[]

  const handleChangeStylingSample = (sample: SampleType) =>
    setActiveStylingSample(sample)

  const sampleJSXSwitcher = (sample: SampleType) => {
    return {
      'Vanila css': <VanilaCSS />,
      'tailwind css': <TailwindCss />,
      'CSS in JS': <CSSinJS />,
      'css modules': <CSSModules />,
      'inline style': <InlineStyle />,
    }[sample]
  }

  return (
    <>
      <div>
        {stylingSamples.map((sample) => (
          <button
            key={sample}
            onClick={() => handleChangeStylingSample(sample)}
          >
            {sample}
          </button>
        ))}
        <div className="p-3 bg-black">
          {sampleJSXSwitcher(activeStylingSample)}
        </div>
      </div>
    </>
  )
}
