'use client'

import { useState } from "react"


const cvText = `
Solo Exhibitions

2025 Organizer of International Watercolor Festival in Bratislava 
2025 Solo Exhibition «When Dreams Come True», Umelka: Center of Modern Art and Community – Slovak Union of Visual Arts, Bratislava
2024 Solo Exhibition «Bratislava and Beyond», Business Center Aircraft, Bratislava
2024 Solo Exhibition «Holidays in Italy», Portioli Caffe Bar, Bratislava
2024 Solo Exhibition «All of This Is Our Home», Dom Quo Vadis Gallery, Bratislava
2021 Solo Exhibition «Colors Around You», F7 Gallery, Bratislava
2019 Solo Exhibition «My Places», Kafe Lampy, Bratislava
2019 Solo Exhibition «Teacher and Her Students», Business Center Aircraft, Bratislava
2019 Solo Exhibition «Moments of Happiness», Kafe Scherz, Bratislava
2019 Solo Exhibition «Follow My Dreams», Office Gallery Kerametal, Bratislava
2018 Solo Exhibition «My Beautiful Bratislava», Business Club Penati, Bratislava
2018 Solo Exhibition «My Friend Vincent», Michalský Dvor Gallery, Bratislava
2018 Solo Exhibition «With Colors Around the World», Russian Center of Science and Culture in Bratislava
2017 Solo Exhibition «This Beautiful World», CT Gallery, Bratislava
2016 Solo Exhibition «Blossoming World», Malakhovka Museum, Moscow Region, Russia
2013 Solo Exhibition, Literary Club «Chosen by Muses», Moscow, Russia
2012 Solo Exhibition, Russian Plekhanov University of Economics, Moscow, Russia


Live Painting Demonstrations

2025 Master painting demonstration at the International Watercolor Festival in Bratislava
2025 Master painting demonstration at the FabrianoInAcquarello Festival, Bologna, Italy
2025 Master painting demonstration at the «Fineness» Art Festival, Rybník, Poland
2024, 2025 Master painting demonstration at the Vintage Picnic in Modra, Slovakia
2024 Master painting demonstration at the FabrianoInAcquarello Festival, Bologna, Italy
2024 Master painting demonstration at the «Fineness» Art Festival, Rybník, Poland
2023 Master painting demonstration at the International Plein Air in Bratislava
2023 Master painting demonstration at the UrbinoInAcquerello Festival, Italy
2023 Master painting demonstration at the «Fineness» Art Festival, Rybník, Poland


Group Exhibitions

2026 Collective exhibition «Salon 2026 COMPARATION», Levice Castle, Slovakia
2026 International exhibition «Female Artists», Moscow, Russia
2026 International watercolor exhibition «Ultra Red», Chernivtsi, Ukraine
2026 Collective exhibition «Salon 2026 COMPARATION», Hlohovec, Slovakia
2026 Collective exhibition «Winter Salon», Umelka: Center for Modern Art and Community - Slovak Union of Visual Arts, Bratislava
2026 Collective exhibition «Salon 2026 COMPARATION», Dunajská Streda, Slovakia
2026 Collective exhibition «Winter Salon», T&AC Gallery, Bratislava 
2025 Winner's diploma in the photography competition «Slovakia. Nature, Culture and People», Bratislava
2025 International watercolor art festival «Ciudad de Almeria», Almeria, Spain
2025 Jury member in the international competition and participation in exhibition «Colors in Water», Meerzorg, Suriname
2025 International Festival and Plein Air, Essen, Germany
2025 Asean International Watercolor Art Festival, Hanoi, Vietnam
2025 Qingdao International Watercolor Art Festival, China
2025 Collective exhibition "Artists' Salon 2025" at Zoya Museum in ELESKO Wine Park, Modra, Slovakia
2025 International watercolor art festival Salon D’Aquarelles, Ceret, France
2025 Collective exhibition of the Art Spectrum competition, National Cultural Center, Bratislava
2025 Collective exhibition "Salon 2024/25 VERIFICATION" at Holíč Castle, Slovakia
2025 International watercolor art festival FabrianoInAcquarello, Italy
2025 Invited artist at the international art festival "Fineness", Rybník, Poland
2025 Collective exhibition "Salon 2024/25 VERIFICATION" at Levice Castle, Slovakia
2024 International watercolor art festival 2nd Olympiart, New Delhi, India
2024 Collective exhibition "Picturesque Tomášov" at Art Hotel Kaštieľ, Tomášov, Slovakia
2024, 2025 Collective exhibition "The 10th Silk Road International Art Exhibition", Xi'an, China
2024 Collective exhibition "Salon 2024/25 VERIFICATION" at West Slovak Museum, Trnava, Slovakia
2024 International watercolor art festival FabrianoInAcquarello, Texas, USA
2024 Collective exhibition "Back to Nature", Siping Village, China
2024 Collective exhibition "Canvas in Unison", Citadelle de Blaye, France
2024 Collective exhibition "Artists' Salon 2024" at Zoya Museum in ELESKO Wine Park, Modra, Slovakia
2024 Became a member of the West Slovak Artists’ Association (ZVUZS) and Slovak Union of Visual Arts (SVÚ)
2024 International watercolor art festival FabrianoInAcquarello, Italy
2024 International watercolor art festival UrbinoInAcquerello, Italy
2024 Invited artist at the international art festival "Fineness", Rybník, Poland
2024 Collective exhibition of the Art Spectrum competition, Zichy Palace, Bratislava
2024 Invited artist at the international festival IWS Mah Art Gallery, Tehran, Iran
2023 Organizer of the international Halloween competition by IWS Globe Young
2023 Became a member of Turuk & Art Collective association of modern art artists, Slovakia
2023 International watercolor art festival Qingdao, China
2023 International watercolor art festival Aquarelle Pyreneenne, Albi, France
2022, 2023 Organizer of plein air event in Bratislava
2023 Collective exhibition of the Art Spectrum competition, National Cultural Center, Bratislava
2023 International watercolor art festival UrbinoInAcquerello, Italy
2023 International watercolor biennale, Tirana, Albania
2023 International art festival "Fineness" and award, Rybník, Poland
2023 International collective exhibition of miniature art, Dhaka, Bangladesh
2023 Collective exhibition "Winter Salon", T&AC Gallery, Bratislava
2023 Collective exhibition "Dialogue Between Watercolor and Ink", Quito, Ecuador
2023 Collective exhibition "Plein Air Painting", New Delhi, India
2022 Solo exhibition at George Washington Witness Tree of Delaware Museum, USA
2022 Became the leader of IWS Globe Young Art (the youth department of the International Watercolor Society).and jury member in international competition for young artists
2022 Collective exhibition "Slovak Watercolor" in Prague, Czech Republic
2022 Collective exhibition and Honorable Mention in Art Spectrum competition, Zichy Palace, Bratislava
2022 International watercolor art festival FabrianoInAcquarello, Italy
2021, 2022, 2023, 2024, 2025 Collective exhibition at Pradiareň 1900, Bratislava
2021, 2022, 2023, 2024, 2025 Art Symphony Festival, Ružinov, Bratislava
2021 Collective exhibition at T.O.P. Auto Premium Art Gallery, Bratislava
2021 International watercolor art festival FabrianoInAcquarello, Italy
2020 Collective exhibition "ARTE" at Zichy Palace Gallery, Bratislava
2020 Collective exhibition "Sea of Memories", Carlton Savoy Art Gallery, Bratislava
2019 Collective summer exhibition at Audi Exclusive Gallery, Bratislava
2019 Collective summer exhibition in Portorož, Slovenia
2018 Collective Christmas exhibition at Office Gallery Kerametal, Bratislava
2018 Collective exhibition at Open Gallery, Bratislava
2018 International Contemporary Art Festival "Ateliér", Prague, Czech Republic
2016, 2017, 2018, 2019 Collective Christmas exhibition at CT Gallery, Bratislava
2016 Collective exhibition at Art Salon Leonardo, Zhukovsky, Moscow Region, Russia


Awards

2026 Record No. PU260300023 in the Register of Professional Artists in Slovak Art Support Fund 
2025 Award in the "Best Color" category at the watercolor art competition "Action Plan for Wetlands" by RockWell Art, Canada
2025 Organizer's Award at the International Art Festival "Fineness", Rybník, Poland
2023 Organizer's Award at the International Art Festival "Fineness", Rybník, Poland
2022 Honorable Mention in the Art Spectrum competition, Bratislava
2013 Award in the "Chosen by Muses" competition, Moscow, Russia
2013 Award at the student art festival "Festos", Moscow, Russia

`

export default function Past() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="exhibitions" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
          <h2
            className="text-3xl font-bold text-black cursor-pointer underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
            role="button"
            tabIndex={0}
            onClick={() => setIsOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setIsOpen(true)
            }}
          >
            Past Exhibitions
          </h2>
          <button
            className="inline-flex items-center rounded bg-black px-3 py-1 text-xs font-semibold text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsOpen(true)}
          >
            Show
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-6">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-xl">
            <div className="flex items-start justify-between border-b px-6 py-4">
              <h3 className="text-xl font-semibold text-black">All my exhibitions</h3>
              <button
                className="rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-black hover:bg-gray-300"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                Close
              </button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto p-6 whitespace-pre-wrap text-sm leading-relaxed text-black">
              {cvText}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}