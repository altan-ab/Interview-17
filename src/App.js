import React, { useState } from 'react'

function App() {
  const unlockedScreen = () => (
    <div style={{ textAlign: 'center' }}>Login oldunuz.</div>
  )

  return (
    <CombinationLock combination={[1, 2, 3, 4]} NextScreen={unlockedScreen} />
  )
}

const CombinationLock = ({ combination, NextScreen }) => {
  const [input, setInput] = useState([]) // Kullanıcının girdisi
  const [isUnlocked, setIsUnlocked] = useState(false) // Ekranın kilidini açma durumu

  const handleButtonClick = (number) => {
    if (input.length < 4) {
      const newInput = [...input, number]
      setInput(newInput)

      if (newInput.length === 4) {
        // Kullanıcı 4 basamaklı bir kombinasyon girdiğinde doğrula
        if (JSON.stringify(newInput) === JSON.stringify(combination)) {
          setIsUnlocked(true)
        } else {
          alert('Yanlış kombinasyon')
          setInput([]) // Kombinasyonu sıfırla
        }
      }
    }
  }

  if (isUnlocked) {
    return <NextScreen />
  }

  return (
    <div className="text-center">
      <div className="text-2xl font-bold my-5 border border-black max-w-[250px] mx-auto">
        {input.join('') || '____'}
      </div>
      <div className="flex flex-wrap justify-center gap-2 max-w-xs mx-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            key={num}
            onClick={() => handleButtonClick(num)}
            className="p-5 w-1/4 text-xl text-center border border-black bg-white cursor-pointer"
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
