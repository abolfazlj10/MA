export default function Home() {

  return (
    <div className="MainContainer">

      <img className="MainIcon" src="/MA-Icon.png" />

      <div className="container max-h-[800px] h-full max-lg:hidden">
         <div className="centerSection">
          <div className="heightLayers layers">
            <div className="heightLayers layers nameStyle">
              <div className="nameFamily">Mehdi</div>
              <div className="nameFamily">Arman</div>
              <div className="subText">عاشق خلاقیت</div>
            </div>
          </div>
          <div className="cursor">
            <img  src="./MACursor.svg"/>
          </div>
        </div> 
      </div>

      {/* start mobile design in here  */}
      <div className="repeatNames hidden max-lg:block">
        <div>Mehdi Arman</div>
        <div>Mehdi Arman</div>
        <div>Mehdi Arman</div>
        <div>Mehdi Arman</div>
        <div>Mehdi Arman</div>
        <div>Mehdi Arman</div>
        <div>Mehdi Arman</div>
        <div>Mehdi Arman</div>
        <div>Mehdi Arman</div>
        <div>Mehdi Arman</div>
      </div>

      <div className="subTextSecond hidden max-lg:block">عاشق خلاقیت</div>
      {/* end mobile design in here */}

      <div className="min-[640px]:container h-full">
        <div className="containerLinks">
          <a className="socialLink" href="https://t.me/iMehdiArman" target="_blank">Telegram</a>
          <a className="socialLink" href="https://instagram.com/03.3.81" target="_blank">Instagram</a>
          <a className="socialLink" href="mailto:iMehdiArman@gmail.com" target="_blank">E-mail</a>
        </div>
      </div>
    </div>
  );
}

