import './Footer.css'

//_____
const AppFooter = () => (
  <footer className="footer">
      {/* <a href="#root">Back To Top<span>🡅</span></a> */}
      <div>
        &thinsp;BLiPiP
      </div>
      <address>
        <a href="https://github.com/maizena-y-javascript" target="_blank">
          github.com/maizena-y-javascript&nbsp;
        </a>
      </address>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="9"/>
        <circle cx="10" cy="30" r="9"/>
        <circle cx="50" cy="30" r="9"/>
        <circle cx="40" cy="12.67" r="9"/>
        <circle cx="20" cy="12.67" r="9"/>
        <circle cx="40" cy="47.32" r="9"/>
        <circle cx="20" cy="47.32" r="9"/> 
      </svg>
  </footer>
)

//_____
export default AppFooter