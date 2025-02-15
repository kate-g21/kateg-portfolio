import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="aspect-w-3 aspect-h-4">
            <Image
              src="/Kate Grishakova.jpg"
              alt="Kate Grishakova"
              width={550}
              height={600}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-xl text-left font-bold mb-4">Životopis</h2>
            <p className="text-gray-600 mb-4">Som umelkyňa. Žijem v Bratislave a naplno sa venujem maľbe. </p>
            <p className="text-gray-600 mb-4">Maľujem od detstva a neviem si predstaviť život bez umenia. Pracujem s olejom, akvarelom, prípadne gvašom, olejovými pastelmi a zachytávam farebné prírodné scenérie i mestské zákutia. Veľa cestujem a neustále hľadám krásu. Snažím sa zachytiť jedinečné okamihy, a preto si so sebou vždy nosím farby a papier, aby som mohla tvoriť priamo v plenéri – v bezprostrednom kontakte s prírodou a svetom. </p>
            <p className="text-gray-600 mb-4">Mojím cieľom je inšpirovať ľudí, aby sa na svet pozerali inak – očami krásy a radosti.</p>
            <p className="text-gray-600"> <b>1994</b> narodila sa 21. novembra v Žukovskom, Rusko</p>
            <p className="text-gray-600"> <b>2008 - 2016</b> Umelecká škola Vladimíra Potapova v Žukovskom, Rusko</p>
            <p className="text-gray-600"> <b>2012 - 2016</b> Bakalár, Ruska Ekonomická Univerzita G.V. Plechanova, Moskva, Rusko</p>
            <p className="text-gray-600"> <b>2016 - 2018</b> Inžinier, Ekonomická Univerzita v Bratislave</p>
            <p className="text-gray-600"> <b>od 2018</b> robim kurzy maľovania pre dospelých i deti</p>
            <p className="text-gray-600"> <b>2022</b> stala sa spoluzástupkyňou Medzinárodnej Spoločnosti Akvarelistov (International Watercolor Society, IWS) na Slovensku a vedúcou oddelenia pre mladých umelcov Globe Young IWS</p>
            <p className="text-gray-600"> <b>2023</b> stala sa členkou Združenia výtvarníkov moderného umenia Turuk & Art Collective</p>
            <p className="text-gray-600"> <b>2024</b> stala sa členkou Združenia výtvarných umelcov Západného Slovenska (ZVUZS) a Slovenskej Výtvarnej Únie (SVÚ) </p>
          </div>
        </div>
      </div>
    </section>
  )
}

