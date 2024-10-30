export default function Home() {
  return (
    <div className="MainContainer">
      <img className="mx-auto w-14" src="/MA-Icon.png" />

      <div className="marginCommon centerSection">
        <div className="heightLayers layers">
          <div className="heightLayers layers drop-shadow-[0px_0px_15px_white]">
            Mehdi Arman
            <div className="subText">عاشق خلاقیت</div>
          </div>
        </div>
        <img className='coursorSVG' src="./MACursor.svg"/>
      </div>

      <div className="marginCommon flex justify-between font-PixelifySans text-[25px]">
        <a className="socialLink" href="https://t.me/iMehdiArman" target="_blank">telegram</a>
        <a className="socialLink" href="https://instagram.com/03.3.81" target="_blank">instagram</a>
        <a className="socialLink" href="mailto:iMehdiArman@gmail.com" target="_blank">E-mail</a>
      </div>
    </div>
  );
}